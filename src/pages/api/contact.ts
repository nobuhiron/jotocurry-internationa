import { Resend } from 'resend';
import type { APIRoute } from 'astro';
import { translations } from '../../data/translations';
import type { Locale } from '../../lib/i18n';

export const prerender = false;

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
const CONTACT_EMAIL_TO = import.meta.env.CONTACT_EMAIL_TO;

if (!RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

if (!CONTACT_EMAIL_TO) {
  throw new Error('CONTACT_EMAIL_TO environment variable is not set');
}

const resend = new Resend(RESEND_API_KEY);

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

function getEmailSubject(locale: Locale): string {
  return locale === 'ja'
    ? '【上等カレー】お問い合わせフォームからのお問い合わせ'
    : '【Joto Curry】Contact Form Inquiry';
}

export const POST: APIRoute = async ({ request }) => {
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

    const locale = (data.locale === 'en' ? 'en' : 'ja') as Locale;
    const emailBody = formatEmailBody(data, locale);
    const emailSubject = getEmailSubject(locale);

    // Resend APIでメール送信
    const { data: emailData, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Resendのデフォルト送信元（本番では独自ドメインに変更）
      to: CONTACT_EMAIL_TO,
      subject: emailSubject,
      text: emailBody,
    });

    if (error) {
      console.error('Resend API error:', error);
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
