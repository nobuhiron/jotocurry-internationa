/**
 * Brand History timeline animation
 * スクロール位置に連動して朱色の進行線がタイムラインを描き下ろし、
 * 線が通過したアイテムの年号とドットが点灯する
 */
export default function initBrandHistoryAnimation() {
  const timelineElement = document.querySelector('.p-brand-history__timeline');

  if (!timelineElement) {
    return;
  }

  const items = Array.from(
    timelineElement.querySelectorAll('.p-brand-history__item')
  );

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    timelineElement.style.setProperty('--timeline-progress', '100%');
    items.forEach((item) => item.classList.add('is-active'));
    return;
  }

  let ticking = false;

  function update() {
    ticking = false;

    const rect = timelineElement.getBoundingClientRect();
    // 画面上端から45%の位置を「現在地」として線の先端を置く
    const anchor = window.innerHeight * 0.45;
    const progress = Math.max(0, Math.min(anchor - rect.top, rect.height));

    timelineElement.style.setProperty('--timeline-progress', `${progress}px`);

    // 進行線がドットの中心を越えたアイテムを点灯（戻れば消灯）
    items.forEach((item) => {
      const header = item.querySelector('.p-brand-history__item-header');
      if (!header) return;
      const headerRect = header.getBoundingClientRect();
      const dotCenter = headerRect.top - rect.top + headerRect.height / 2;
      item.classList.toggle('is-active', progress >= dotCenter);
    });
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  update();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
}
