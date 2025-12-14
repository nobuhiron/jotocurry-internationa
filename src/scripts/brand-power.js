/**
 * Brand power carousel initialization using Splide
 * Shows approximately 2.5 slides at a time with auto-scroll
 */
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export default function initBrandPower() {
  const carouselElement = document.getElementById('brand-power-carousel');

  if (!carouselElement) {
    return;
  }

  new Splide(carouselElement, {
    type: 'loop',
    perPage: 2.5,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 3000,
    speed: 800,
    pauseOnHover: true,
  }).mount();
}
