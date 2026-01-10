/**
 * Contact FAQ accordion functionality
 */

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
