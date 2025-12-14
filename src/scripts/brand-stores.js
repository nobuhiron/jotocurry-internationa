/**
 * Brand stores carousel initialization using Splide
 */
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export default function initBrandStores() {
  const carouselElement = document.getElementById('brand-stores-carousel');

  if (!carouselElement) {
    return;
  }

  new Splide(carouselElement, {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '1.5rem',
    pagination: true,
    arrows: true,
    breakpoints: {
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 3,
      },
    },
  }).mount();
}

