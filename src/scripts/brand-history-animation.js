/**
 * Brand History timeline animation
 * スクロール時にタイムラインの線が描かれ、各アイテムのドットが順番に大きくなるアニメーション
 */
export default function initBrandHistoryAnimation() {
  const timelineElement = document.querySelector('.p-brand-history__timeline');

  if (!timelineElement) {
    return;
  }

  const items = timelineElement.querySelectorAll('.p-brand-history__item');
  let timelineAnimated = false;

  // タイムラインの高さを設定
  function setTimelineHeights() {
    if (items.length === 0) return;

    const firstItem = items[0];
    const firstItemHeader = firstItem.querySelector(
      '.p-brand-history__item-header'
    );

    if (firstItemHeader) {
      const timelineRect = timelineElement.getBoundingClientRect();
      const firstItemHeaderRect = firstItemHeader.getBoundingClientRect();

      const firstItemTop =
        firstItemHeaderRect.top -
        timelineRect.top +
        firstItemHeaderRect.height / 2;

      const timelineHeight = timelineRect.height;

      timelineElement.style.setProperty(
        '--timeline-initial-height',
        `${firstItemTop}px`
      );
      timelineElement.style.setProperty(
        '--timeline-final-height',
        `${timelineHeight}px`
      );
    }
  }

  // タイムラインのアニメーション
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !timelineAnimated) {
          setTimelineHeights();

          requestAnimationFrame(() => {
            setTimelineHeights();
            requestAnimationFrame(() => {
              setTimelineHeights();
              setTimeout(() => {
                entry.target.classList.add('is-animated');
                timelineAnimated = true;
                timelineObserver.unobserve(entry.target);
              }, 50);
            });
          });
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -10px 0px',
    }
  );

  // 各アイテムのアニメーション（個別にIntersection Observerで監視）
  const itemObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
          // 一度発火したら監視を停止
          itemObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3, // アイテムが50%見えたら発火
      rootMargin: '0px 0px -30px 0px',
    }
  );

  // 初期化
  requestAnimationFrame(() => {
    setTimelineHeights();
    setTimeout(() => {
      setTimelineHeights();
    }, 100);
  });

  window.addEventListener('resize', () => {
    setTimelineHeights();
  });

  // タイムラインを監視
  timelineObserver.observe(timelineElement);

  // 各アイテムを個別に監視
  items.forEach((item) => {
    itemObserver.observe(item);
  });
}
