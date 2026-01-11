/**
 * Brand Unique section opacity animation
 * スクロール位置に応じて、ビューポート上部に最も近いテキストブロックのみopacity: 1、他はopacity: 0.6に設定
 */
export default function initBrandUniqueOpacity() {
  const textBlocks = document.querySelectorAll('.p-brand-unique__text-block');
  const imageElements = document.querySelectorAll('.p-brand-unique__image-column .p-brand-unique__image');

  if (textBlocks.length === 0) {
    return;
  }

  // ブレークポイント（1024px）をチェック
  const isDesktop = () => window.innerWidth >= 1024;

  // ビューポート上部からの距離を計算して、最も近い要素を検出
  function updateActiveBlock() {
    if (!isDesktop()) {
      // モバイルの場合はすべてのクラスを削除
      textBlocks.forEach((block) => {
        block.classList.remove('is-active');
      });
      imageElements.forEach((image) => {
        image.classList.remove('is-active');
      });
      return;
    }

    let closestBlock = null;
    let closestDistance = Infinity;
    const viewportTop = window.scrollY + 50; // ビューポート上部から50px下を基準点（より早く反応）

    textBlocks.forEach((block) => {
      const rect = block.getBoundingClientRect();
      const blockTop = window.scrollY + rect.top;
      const blockBottom = window.scrollY + rect.bottom;

      // ビューポート内にある要素、またはビューポート上部に最も近い要素を検出
      if (blockTop <= viewportTop && blockBottom >= window.scrollY) {
        // 要素がビューポート内にある場合
        const distance = Math.abs(viewportTop - blockTop);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestBlock = block;
        }
      } else if (blockTop > viewportTop && blockTop < viewportTop + 200) {
        // 要素がビューポート上部より少し下にある場合も考慮
        const distance = blockTop - viewportTop;
        if (distance < closestDistance) {
          closestDistance = distance;
          closestBlock = block;
        }
      }
    });

    // すべてのクラスを削除してから、最も近い要素にクラスを追加
    textBlocks.forEach((block) => {
      block.classList.remove('is-active');
    });
    imageElements.forEach((image) => {
      image.classList.remove('is-active');
    });

    let activeIndex = -1;
    if (closestBlock) {
      closestBlock.classList.add('is-active');
      // アクティブなテキストブロックのインデックスを取得
      activeIndex = Array.from(textBlocks).indexOf(closestBlock);
    } else {
      // ビューポート上部より上に要素がない場合は、最初の要素をアクティブに
      if (textBlocks.length > 0) {
        const firstBlock = textBlocks[0];
        const firstBlockTop = window.scrollY + firstBlock.getBoundingClientRect().top;
        if (firstBlockTop > viewportTop) {
          firstBlock.classList.add('is-active');
          activeIndex = 0;
        }
      }
    }

    // 対応する画像にもクラスを追加
    if (activeIndex >= 0 && activeIndex < imageElements.length) {
      imageElements[activeIndex].classList.add('is-active');
    }
  }

  // スクロールイベントとリサイズイベントを監視
  let ticking = false;
  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveBlock();
        ticking = false;
      });
      ticking = true;
    }
  }

  // 初期化
  updateActiveBlock();

  // イベントリスナーを追加
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', () => {
    updateActiveBlock();
  });
}
