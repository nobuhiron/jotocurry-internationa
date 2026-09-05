/**
 * Brand power carousel - カスタムマーキー（requestAnimationFrame で連続スクロール）
 * Splide の HTML 構造を使用、JS は自前実装
 */
import '@splidejs/splide/css';

export default function initBrandPower() {
  const carouselElement = document.getElementById('brand-power-carousel');
  const track = carouselElement?.querySelector('.splide__track');
  const list = carouselElement?.querySelector('.splide__list');

  if (!carouselElement || !track || !list) return;

  if (carouselElement.dataset.continuousInitialized === 'true') return;
  carouselElement.dataset.continuousInitialized = 'true';

  carouselElement.classList.add('is-rendered');
  carouselElement.classList.add('is-initialized');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const originalSlides = Array.from(list.children);
  if (originalSlides.length === 0) return;

  let gap = 16;
  let visibleSlides = 4.5;
  list.style.display = 'flex';
  list.style.willChange = 'transform';

  let x = 0;
  let lastTime = 0;
  let singleSetWidth = 0;
  const speedPxPerSecond = 42;

  function computeLayout() {
    if (window.innerWidth <= 768) {
      gap = 12;
      /* スマホは1枚を大きく見せる（端に次スライドを覗かせて流れを示す） */
      visibleSlides = 1.5;
    } else {
      gap = 16;
      visibleSlides = 4.5;
    }
    list.style.gap = `${gap}px`;
  }

  function setSlideWidths() {
    const slideWidth = (track.clientWidth - gap * (visibleSlides - 1)) / visibleSlides;
    if (!Number.isFinite(slideWidth) || slideWidth <= 0) return;
    Array.from(list.children).forEach((slide) => {
      slide.style.flex = `0 0 ${slideWidth}px`;
      slide.style.width = `${slideWidth}px`;
      slide.style.maxWidth = `${slideWidth}px`;
    });
  }

  function measureSingleSetWidth() {
    let width = 0;
    originalSlides.forEach((slide, index) => {
      width += slide.getBoundingClientRect().width;
      if (index < originalSlides.length - 1) width += gap;
    });
    return width;
  }

  function ensureDuplicatedSlides() {
    const minWidth = Math.max(
      track.clientWidth * 2,
      singleSetWidth + track.clientWidth
    );
    while (list.scrollWidth < minWidth) {
      originalSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        list.appendChild(clone);
      });
    }
  }

  function setup() {
    computeLayout();
    setSlideWidths();
    singleSetWidth = measureSingleSetWidth();
    if (singleSetWidth <= 0) return;
    ensureDuplicatedSlides();
    setSlideWidths();
    x = x % singleSetWidth;
    list.style.transform = `translate3d(-${x}px, 0, 0)`;
  }

  function tick(time) {
    if (singleSetWidth > 0) {
      if (!lastTime) lastTime = time;
      const dt = (time - lastTime) / 1000;
      x += speedPxPerSecond * dt;
      if (x >= singleSetWidth) x = x % singleSetWidth;
      list.style.transform = `translate3d(-${x}px, 0, 0)`;
    }
    lastTime = time;
    requestAnimationFrame(tick);
  }

  const resizeObserver = new ResizeObserver(() => setup());
  resizeObserver.observe(track);
  originalSlides.forEach((slide) => resizeObserver.observe(slide));

  setup();
  requestAnimationFrame(tick);
}
