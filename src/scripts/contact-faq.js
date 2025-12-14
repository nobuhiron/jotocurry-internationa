/**
 * Contact FAQ accordion functionality
 */
export const faqData = [
  {
    question: 'フランチャイズの初期投資は?',
    answer:
      '初期投資は業態と水域によって異なりますが、ね500万円から1000万円程度を想定しています。詳細相談で具体的な金額をお伝えします。',
  },
  {
    question: 'トレーニングはどのくらい必要?',
    answer:
      '標準的なトレーニングは2週間から1ヶ月程服、本部スタッフがで直指導し、オペレーションの再現性を確保します。',
  },
  {
    question: 'メニューのローカライズは可能?',
    answer:
      '地域の味覚や食文化に合わせて、トッピングやソースをカスタマイズできます。柔軟な対応が私たちの強みです。',
  },
  {
    question: '食材の調達は?',
    answer:
      '基本的なルウと一部の調味料は本部から例絵。その他の食材はまを指し、コスト最適化を図ります。',
  },
  {
    question: 'サポート体制は?',
    answer:
      '立ち上げ時から的に専門チームがサポート。オンラインと現地での技術支援を 提供します。',
  },
];

export default function initContactFaq() {
  const faqItems = document.querySelectorAll('.p-contact-faq__item');

  faqItems.forEach((item, index) => {
    const button = item.querySelector('.p-contact-faq__button');
    const content = item.querySelector('.p-contact-faq__content');

    if (!button || !content) {
      return;
    }

    // Set initial ARIA attributes
    const isFirst = index === 0;
    button.setAttribute('aria-expanded', isFirst ? 'true' : 'false');
    button.setAttribute('aria-controls', content.id);

    // First item is already open (handled by HTML), so ensure it's properly initialized
    if (isFirst && !item.classList.contains('is-open')) {
      item.classList.add('is-open');
    }

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const newExpanded = !isExpanded;

      button.setAttribute('aria-expanded', newExpanded);
      item.classList.toggle('is-open', newExpanded);
    });
  });
}
