(function () {
  'use strict';

  var ROOT_ID = 'shi-reliable-it-benefits-slider-root';
  var S = '#' + ROOT_ID;

  function injectLink(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
  }

  injectLink('https://fonts.googleapis.com/css2?family=Play:wght@700&family=Poppins:wght@400;500;600;700&display=swap');

  var cards = [
    {
      title: 'Proactive Approach',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a26f10fe058e3365da866c4_reliable%20proactive.webp',
      body: 'Preventing problems before they happen, and eliminating issues that slow your business down.'
    },
    {
      title: 'Technical Roadmap',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a26f10fbc55ed83eb31a3fa_reliable%20tech.webp',
      body: "Working together to strategically plan for your business's long-term growth."
    },
    {
      title: 'Complete IT Assurance',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a26f10e2a9c7a0c19991762_reliable%20complete.webp',
      body: 'Complete IT Assurance - Helping you keep your technology working for you, so you can stay focused on your business.'
    },
    {
      title: '24/7 Emergency Support',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a26f10f60b7cfdb0f2125b3_reliable%2024-7.webp',
      body: ''
    },
    {
      title: 'Customized Business Plans',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a26f10d4bc3a3cdb0bea66f_reliable%20customized.webp',
      body: ''
    },
    {
      title: 'No Techno-Babble',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a26f10de82e1d0b20f1328e_reliable%20no-techno.webp',
      body: ''
    },
    {
      title: 'Minimized Downtime',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a26f10da9f41b5d80c75e85_reliable%20mminimized.webp',
      body: ''
    },
    {
      title: 'No Hidden Costs!',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a26f10b0448cb45a557e4e8_reliable%20no%20hidden%20costs.webp',
      body: ''
    },
    {
      title: 'Long-Term Partnership & Support',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a26f10cb414eded9faa0a0c_reliable%20long%20term.webp',
      body: ''
    }
  ];

  function cardMarkup(card) {
    return (
      '<article class="rib-card' + (card.body ? '' : ' rib-title-only') + '">' +
        '<img class="rib-image" src="' + card.image + '" alt="">' +
        '<span class="rib-dark" aria-hidden="true"></span>' +
        '<span class="rib-light" aria-hidden="true"></span>' +
        '<div class="rib-copy">' +
          '<h3>' + card.title + '</h3>' +
          (card.body ? '<p>' + card.body + '</p>' : '') +
        '</div>' +
      '</article>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --rib-primary: #0E182C;
      --rib-muted: #45556C;
      --rib-accent: #EA7B2C;
      display: block !important;
      width: 100% !important;
      color: var(--rib-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h2, ${S} h3, ${S} p {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} button {
      font: inherit !important;
    }

    ${S} .rib {
      width: 100% !important;
      padding: clamp(36px, 5vw, 72px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .rib-inner {
      width: min(100%, 1536px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .rib-header {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 24px !important;
      margin-bottom: 24px !important;
    }

    ${S} .rib-title {
      width: 100% !important;
      font-family: 'Play', sans-serif !important;
      font-size: clamp(26px, 2.4vw, 36px) !important;
      line-height: 1.12 !important;
      font-weight: 700 !important;
      color: var(--rib-primary) !important;
      text-align: center !important;
    }

    ${S} .rib-controls {
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
      flex-shrink: 0 !important;
    }

    ${S} .rib-btn {
      width: 42px !important;
      height: 42px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 1px solid #E2E8F0 !important;
      border-radius: 999px !important;
      background: #fff !important;
      color: var(--rib-primary) !important;
      box-shadow: 0 12px 22px rgba(15,23,42,0.11) !important;
      cursor: pointer !important;
      transition: transform 0.2s, opacity 0.2s !important;
    }

    ${S} .rib-btn:hover {
      opacity: 0.9 !important;
      transform: translateY(-1px) !important;
    }

    ${S} .rib-viewport {
      width: 100% !important;
      overflow: hidden !important;
    }

    ${S} .rib-track {
      display: flex !important;
      gap: 24px !important;
      transform: translate3d(0,0,0) !important;
      transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) !important;
      will-change: transform !important;
    }

    ${S} .rib-card {
      position: relative !important;
      flex: 0 0 calc((100% - 60px) / 3.5) !important;
      height: clamp(390px, 38vw, 573px) !important;
      min-width: 0 !important;
      overflow: hidden !important;
      border-radius: 10px !important;
      background: #E2E8F0 !important;
      cursor: pointer !important;
      box-shadow: 0 18px 32px rgba(15,23,42,0.08) !important;
      isolation: isolate !important;
    }

    ${S} .rib-image {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
      transform: scale(1.01) !important;
      transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), filter 0.45s !important;
      z-index: 0 !important;
    }

    ${S} .rib-dark {
      position: absolute !important;
      inset: 0 !important;
      z-index: 1 !important;
      background: linear-gradient(180deg, rgba(14,24,44,0.08) 0%, rgba(14,24,44,0.16) 48%, rgba(14,24,44,0.72) 100%) !important;
      transition: opacity 0.35s !important;
    }

    ${S} .rib-light {
      position: absolute !important;
      inset: 0 !important;
      z-index: 2 !important;
      background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.82) 58%, #fff 100%) !important;
      opacity: 0 !important;
      transition: opacity 0.35s !important;
    }

    ${S} .rib-copy {
      position: absolute !important;
      left: 20px !important;
      right: 20px !important;
      bottom: 18px !important;
      z-index: 3 !important;
      transform: translateY(calc(100% - 34px)) !important;
      transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1) !important;
    }

    ${S} .rib-title-only .rib-copy {
      transform: translateY(0) !important;
    }

    ${S} .rib-copy h3 {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(18px, 1.4vw, 25px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: #fff !important;
      margin-bottom: 16px !important;
      transition: color 0.3s !important;
    }

    ${S} .rib-title-only .rib-copy h3 {
      margin-bottom: 0 !important;
    }

    ${S} .rib-copy p {
      max-width: 360px !important;
      font-size: 14px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--rib-muted) !important;
      opacity: 0 !important;
      transition: opacity 0.32s 0.06s !important;
    }

    ${S} .rib-card:hover .rib-image,
    ${S} .rib-card:focus-within .rib-image {
      transform: scale(1.05) !important;
      filter: saturate(0.92) contrast(0.98) !important;
    }

    ${S} .rib-card:hover .rib-dark,
    ${S} .rib-card:focus-within .rib-dark {
      opacity: 0 !important;
    }

    ${S} .rib-card:hover .rib-light,
    ${S} .rib-card:focus-within .rib-light {
      opacity: 1 !important;
    }

    ${S} .rib-card:hover .rib-copy,
    ${S} .rib-card:focus-within .rib-copy {
      transform: translateY(0) !important;
    }

    ${S} .rib-card:hover .rib-copy h3,
    ${S} .rib-card:focus-within .rib-copy h3 {
      color: var(--rib-primary) !important;
    }

    ${S} .rib-card:hover .rib-copy p,
    ${S} .rib-card:focus-within .rib-copy p {
      opacity: 1 !important;
    }

    ${S} .rib-dots {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 16px !important;
      margin-top: 28px !important;
    }

    ${S} .rib-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14,24,44,0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    ${S} .rib-dot.rib-on {
      background: var(--rib-accent) !important;
    }

    @media (max-width: 1180px) {
      ${S} .rib-card {
        flex-basis: calc((100% - 24px) / 2.25) !important;
      }
    }

    @media (max-width: 720px) {
      ${S} .rib-inner { padding: 0 16px !important; }
      ${S} .rib-header { align-items: flex-start !important; }
      ${S} .rib-title { text-align: left !important; }
      ${S} .rib-controls { display: none !important; }
      ${S} .rib-track { gap: 16px !important; }
      ${S} .rib-card {
        flex-basis: 100% !important;
        height: 460px !important;
      }
      ${S} .rib-light { opacity: 1 !important; }
      ${S} .rib-dark { opacity: 0 !important; }
      ${S} .rib-copy {
        transform: translateY(0) !important;
      }
      ${S} .rib-copy h3 {
        color: var(--rib-primary) !important;
      }
      ${S} .rib-copy p {
        opacity: 1 !important;
      }
    }
  `;

  var HTML = `
    <section class="rib">
      <div class="rib-inner">
        <header class="rib-header">
          <h2 class="rib-title">Strategic IT Services For Your Business</h2>
          <div class="rib-controls" aria-hidden="false">
            <button class="rib-btn rib-prev" type="button" aria-label="Previous cards">&lsaquo;</button>
            <button class="rib-btn rib-next" type="button" aria-label="Next cards">&rsaquo;</button>
          </div>
        </header>

        <div class="rib-viewport">
          <div class="rib-track">
            ${cards.map(cardMarkup).join('')}
          </div>
        </div>

        <div class="rib-dots" data-dots></div>
      </div>
    </section>
  `;

  function getVisibleCount() {
    if (window.matchMedia('(max-width: 720px)').matches) return 1;
    if (window.matchMedia('(max-width: 1180px)').matches) return 2.25;
    return 3.5;
  }

  function mountSlider(root) {
    var track = root.querySelector('.rib-track');
    var viewport = root.querySelector('.rib-viewport');
    var items = root.querySelectorAll('.rib-card');
    var prev = root.querySelector('.rib-prev');
    var next = root.querySelector('.rib-next');
    var dotsWrap = root.querySelector('[data-dots]');
    var index = 0;
    var startX = 0;
    var deltaX = 0;

    function maxIndex() {
      return Math.max(0, Math.ceil(items.length - getVisibleCount()));
    }

    function buildDots() {
      var pages = maxIndex() + 1;
      var html = '';
      for (var i = 0; i < pages; i += 1) {
        html += '<button class="rib-dot' + (i === index ? ' rib-on' : '') + '" type="button" aria-label="Go to slide group ' + (i + 1) + '" data-slide="' + i + '"></button>';
      }
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.rib-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          index = parseInt(this.dataset.slide, 10);
          update();
        });
      });
    }

    function update() {
      var visible = getVisibleCount();
      var gap = window.matchMedia('(max-width: 720px)').matches ? 16 : 24;
      var cardWidth = (viewport.clientWidth - gap * (visible - 1)) / visible;
      index = Math.max(0, Math.min(index, maxIndex()));
      track.style.setProperty('transform', 'translate3d(' + (-index * (cardWidth + gap)) + 'px, 0, 0)', 'important');

      dotsWrap.querySelectorAll('.rib-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('rib-on', dotIndex === index);
      });
    }

    prev.addEventListener('click', function () {
      index = index <= 0 ? maxIndex() : index - 1;
      update();
    });

    next.addEventListener('click', function () {
      index = index >= maxIndex() ? 0 : index + 1;
      update();
    });

    track.addEventListener('touchstart', function (event) {
      startX = event.touches[0].clientX;
      deltaX = 0;
    }, { passive: true });

    track.addEventListener('touchmove', function (event) {
      deltaX = event.touches[0].clientX - startX;
    }, { passive: true });

    track.addEventListener('touchend', function () {
      if (Math.abs(deltaX) < 40) return;
      index += deltaX < 0 ? 1 : -1;
      update();
    });

    window.addEventListener('resize', function () {
      buildDots();
      update();
    });

    buildDots();
    update();
  }

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[rib-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;
    mountSlider(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
