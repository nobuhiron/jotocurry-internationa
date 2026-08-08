import { Resend } from 'resend';
import type { APIRoute } from 'astro';
import { translations } from '../../data/translations';
import type { Locale } from '../../lib/i18n';

export const prerender = false;

// 送信元アドレス。Resendでドメイン認証済みのアドレスのみ使用できる
const DEFAULT_EMAIL_FROM = '得正インターナショナル <no-reply@notifications.tokumasa.net>';

// 自動返信メールに問い合わせ者が返信した場合の宛先
const SUPPORT_EMAIL = 'info@tokumasa.net';

interface ContactEnv {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL_TO?: string;
  CONTACT_EMAIL_FROM?: string;
}

/**
 * 環境変数を取得する
 * 本番（Cloudflare）はダッシュボードで設定した値をランタイムから読み、
 * ローカル開発は .env がビルド時に展開される import.meta.env にフォールバックする
 */
function getContactEnv(locals: App.Locals): ContactEnv {
  const runtimeEnv = locals?.runtime?.env as ContactEnv | undefined;

  return {
    RESEND_API_KEY: runtimeEnv?.RESEND_API_KEY || import.meta.env.RESEND_API_KEY,
    CONTACT_EMAIL_TO: runtimeEnv?.CONTACT_EMAIL_TO || import.meta.env.CONTACT_EMAIL_TO,
    CONTACT_EMAIL_FROM:
      runtimeEnv?.CONTACT_EMAIL_FROM || import.meta.env.CONTACT_EMAIL_FROM || DEFAULT_EMAIL_FROM,
  };
}

interface FormData {
  'last-name': string;
  'first-name': string;
  email: string;
  area: string;
  purpose: string;
  situation: string;
  message?: string;
  privacy: string;
  locale?: string;
}

function validateFormData(data: FormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data['last-name'] || data['last-name'].trim() === '') {
    errors.push('last-name is required');
  }

  if (!data['first-name'] || data['first-name'].trim() === '') {
    errors.push('first-name is required');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('email is invalid');
  }

  if (!data.area || data.area === '') {
    errors.push('area is required');
  }

  if (!data.purpose || data.purpose === '') {
    errors.push('purpose is required');
  }

  if (!data.situation || data.situation === '') {
    errors.push('situation is required');
  }

  if (data.privacy !== 'on') {
    errors.push('privacy agreement is required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

function getAreaLabel(area: string, locale: Locale): string {
  const areaOptions = translations.contact.form[locale].fields.areaOptions;
  const areaMap: Record<string, keyof typeof areaOptions> = {
    asia: 'asia',
    europe: 'europe',
    americas: 'americas',
    oceania: 'oceania',
    other: 'other',
  };
  return areaOptions[areaMap[area]] || area;
}

function getPurposeLabel(purpose: string, locale: Locale): string {
  const purposeOptions = translations.contact.form[locale].fields.purposeOptions;
  const purposeMap: Record<string, keyof typeof purposeOptions> = {
    franchise: 'franchise',
    wholesale: 'wholesale',
    media: 'media',
    other: 'other',
  };
  return purposeOptions[purposeMap[purpose]] || purpose;
}

function getSituationLabel(situation: string, locale: Locale): string {
  const situationOptions = translations.contact.form[locale].fields.situationOptions;
  const situationMap: Record<string, keyof typeof situationOptions> = {
    'restaurant-owner': 'restaurantOwner',
    conversion: 'conversion',
    developer: 'developer',
    individual: 'individual',
  };
  return situationOptions[situationMap[situation]] || situation;
}

function formatEmailBody(data: FormData, locale: Locale): string {
  const formText = translations.contact.form[locale].fields;

  const lines = [
    `${formText.lastName}: ${data['last-name']}`,
    `${formText.firstName}: ${data['first-name']}`,
    `${formText.email}: ${data.email}`,
    `${formText.area}: ${getAreaLabel(data.area, locale)}`,
    `${formText.purpose}: ${getPurposeLabel(data.purpose, locale)}`,
    `${formText.situation}: ${getSituationLabel(data.situation, locale)}`,
  ];

  if (data.message && data.message.trim() !== '') {
    lines.push(`\n${formText.message}:`);
    lines.push(data.message);
  }

  return lines.join('\n');
}

/** 問い合わせ者への宛名（日本語は「姓 名 様」、英語は「Dear First Last,」） */
function formatRecipientName(data: FormData, locale: Locale): string {
  return locale === 'ja'
    ? `${data['last-name']} ${data['first-name']} 様`
    : `Dear ${data['first-name']} ${data['last-name']},`;
}

/** 問い合わせ者へ送る自動返信メールの本文 */
function formatAutoReplyBody(data: FormData, locale: Locale): string {
  const text = translations.contact.autoReply[locale];

  return [
    formatRecipientName(data, locale),
    '',
    text.intro,
    '',
    text.contentHeading,
    formatEmailBody(data, locale),
    '',
    text.notice,
    '',
    text.signature,
  ].join('\n');
}

function getEmailSubject(locale: Locale): string {
  return locale === 'ja'
    ? '【上等カレー】お問い合わせフォームからのお問い合わせ'
    : '【Joto Curry】Contact Form Inquiry';
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const formData = await request.formData();

    const data: FormData = {
      'last-name': formData.get('last-name')?.toString() || '',
      'first-name': formData.get('first-name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      area: formData.get('area')?.toString() || '',
      purpose: formData.get('purpose')?.toString() || '',
      situation: formData.get('situation')?.toString() || '',
      message: formData.get('message')?.toString() || '',
      privacy: formData.get('privacy')?.toString() || '',
      locale: formData.get('locale')?.toString() || 'ja',
    };

    // バリデーション
    const validation = validateFormData(data);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'validation_error',
          message: validation.errors.join(', '),
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const env = getContactEnv(locals);

    // 有効な入力を受けた段階で送信設定を確認し、未設定なら明示的に失敗させる
    if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL_TO) {
      console.error(
        'Contact form is not configured: RESEND_API_KEY or CONTACT_EMAIL_TO is missing'
      );
      return new Response(
        JSON.stringify({
          success: false,
          error: 'configuration_error',
          message: 'Contact form is not configured',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const locale = (data.locale === 'en' ? 'en' : 'ja') as Locale;
    const emailBody = formatEmailBody(data, locale);
    const emailSubject = getEmailSubject(locale);

    // Resend APIでメール送信
    const resend = new Resend(env.RESEND_API_KEY);
    const { data: emailData, error } = await resend.emails.send({
      from: env.CONTACT_EMAIL_FROM || DEFAULT_EMAIL_FROM,
      to: env.CONTACT_EMAIL_TO.split(',')
        .map((email: string) => email.trim())
        .filter((email: string) => email !== ''),
      // 通知メールにそのまま返信すれば問い合わせ者に届くようにする
      replyTo: data.email,
      subject: emailSubject,
      text: emailBody,
    });

    if (error) {
      console.error('Resend API error (notification):', error);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'email_send_error',
          message: 'Failed to send email',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // 問い合わせ者への自動返信
    // 失敗しても社内通知は届いているため、ログのみ残して成功として扱う
    try {
      const { error: autoReplyError } = await resend.emails.send({
        from: env.CONTACT_EMAIL_FROM || DEFAULT_EMAIL_FROM,
        to: data.email,
        replyTo: SUPPORT_EMAIL,
        subject: translations.contact.autoReply[locale].subject,
        text: formatAutoReplyBody(data, locale),
      });

      if (autoReplyError) {
        console.error('Resend API error (auto reply):', autoReplyError);
      }
    } catch (autoReplyError) {
      console.error('Unexpected error while sending auto reply:', autoReplyError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        id: emailData?.id,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'internal_error',
        message: 'An unexpected error occurred',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
