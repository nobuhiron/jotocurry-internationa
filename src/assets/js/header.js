/**
 * Header mobile menu functionality
 */
export default function initHeader() {
  const menuToggle = document.querySelector('.l-header__menu-toggle');
  const mobileMenu = document.querySelector('.l-header__mobile-menu');
  const mobileMenuClose = document.querySelector('.l-header__mobile-menu-close');
  const languageToggle = document.querySelector('.l-header__language-toggle');
  const mobileLanguageToggle = document.querySelector('.l-header__mobile-language-toggle');
  const body = document.body;

  // Mobile menu toggle
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('is-open');
      body.style.overflow = !isExpanded ? 'hidden' : '';
    });
  }

  // Mobile menu close button
  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', () => {
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
      }
      mobileMenu.classList.remove('is-open');
      body.style.overflow = '';
    });
  }

  // Close mobile menu when clicking outside
  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
        }
        mobileMenu.classList.remove('is-open');
        body.style.overflow = '';
      }
    });
  }

  // Desktop language dropdown toggle
  if (languageToggle) {
    languageToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = languageToggle.getAttribute('aria-expanded') === 'true';
      languageToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!languageToggle.contains(e.target)) {
        languageToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Mobile language dropdown toggle
  if (mobileLanguageToggle) {
    mobileLanguageToggle.addEventListener('click', () => {
      const isExpanded = mobileLanguageToggle.getAttribute('aria-expanded') === 'true';
      mobileLanguageToggle.setAttribute('aria-expanded', !isExpanded);
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeader);
} else {
  initHeader();
}

