/**
 * Franchise voices carousel initialization using Splide
 */
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export default function initFranchiseVoices() {
  const carouselElement = document.getElementById('franchise-voices-carousel');

  if (!carouselElement) {
    return;
  }

  new Splide(carouselElement, {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '1.5rem',
    pagination: true,
    arrows: true,
    mediaQuery: 'max',
    breakpoints: {
      767: {
        perPage: 1.5,
      },
    },
  }).mount();
}

