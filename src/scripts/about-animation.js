/**
 * About section animation
 * スクロール時に地図の上にマスクがかかり、テキストが浮き出るアニメーション
 */
export default function initAboutAnimation() {
  const worldMapElement = document.querySelector('.p-about__world-map');

  if (!worldMapElement) {
    return;
  }

  // Intersection Observerでスクロールを検知
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-animated');
          // 一度アニメーションが発火したら監視を停止（パフォーマンス最適化）
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // 要素が50%見えたら発火
      threshold: 0.5,
      // 少し早めに発火させる
      rootMargin: '0px 0px -100px 0px',
    }
  );

  observer.observe(worldMapElement);
}

