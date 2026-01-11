/**
 * Mobile menu functionality
 */
(function() {
  function getElements() {
    return {
      menuToggle: document.querySelector('.l-header__menu-toggle'),
      mobileMenu: document.querySelector('.l-header__mobile-menu'),
      mobileMenuOverlay: document.querySelector('.l-header__mobile-menu-overlay'),
    };
  }

  function isDesktopSize() {
    return window.matchMedia('(min-width: 1200px)').matches;
  }

  function handleResize() {
    if (isDesktopSize()) {
      var elements = getElements();
      if (elements.mobileMenu && elements.mobileMenu.classList.contains('is-open')) {
        window.closeMobileMenu();
      }
    }
  }

  window.toggleMobileMenu = function() {
    var elements = getElements();
    if (!elements.menuToggle || !elements.mobileMenu) {
      return;
    }

    // デスクトップサイズでは開かない
    if (isDesktopSize()) {
      return;
    }

    var isOpen = elements.mobileMenu.classList.contains('is-open');
    if (isOpen) {
      window.closeMobileMenu();
    } else {
      window.openMobileMenu();
    }
  };

  window.openMobileMenu = function() {
    var elements = getElements();
    if (!elements.menuToggle || !elements.mobileMenu) {
      return;
    }

    // デスクトップサイズでは開かない
    if (isDesktopSize()) {
      return;
    }

    elements.menuToggle.setAttribute('aria-expanded', 'true');
    elements.mobileMenu.classList.add('is-open');
    if (elements.mobileMenuOverlay) {
      elements.mobileMenuOverlay.classList.add('is-open');
    }
    document.body.style.overflow = 'hidden';
  };

  window.closeMobileMenu = function() {
    var elements = getElements();
    if (!elements.menuToggle || !elements.mobileMenu) {
      return;
    }

    elements.menuToggle.setAttribute('aria-expanded', 'false');
    elements.mobileMenu.classList.remove('is-open');
    if (elements.mobileMenuOverlay) {
      elements.mobileMenuOverlay.classList.remove('is-open');
    }
    document.body.style.overflow = '';
  };

  // 画面サイズが変わった時にモバイルメニューを閉じる
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 100);
  });

  // 初期化時にデスクトップサイズなら閉じる
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleResize);
  } else {
    handleResize();
  }
})();
