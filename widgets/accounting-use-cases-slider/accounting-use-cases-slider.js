(function () {
  'use strict';

  var ROOT_ID = 'shi-accounting-use-cases-slider-root';
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
      title: 'Accounts Receivable (A/R)',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a20610ff6ad35fc4aa3412a_ar.webp',
      body: 'Automate invoice generation to improve collections and reduce DSO. Match payments with customer invoices in real time using AI-based reconciliation.'
    },
    {
      title: 'Accounts Payable (A/P)',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a20636dbfb40ec99c1ce7b2_accounts%20playable.webp',
      body: [
        'Identify and prevent fraudulent vendors or duplicate invoices, ensuring compliance and security.',
        'Streamline invoice approvals with automated workflows designed for global payment terms.'
      ]
    },
    {
      title: 'Bank Reconciliations',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a20636d57a7449ad9b06938_bank%20reconciliations.webp',
      body: [
        'Automatically identify and flag mismatched transactions or duplicate entries for corrections.',
        'Generate audit-ready reconciliation insights for stakeholders in seconds.'
      ]
    },
    {
      title: 'Fraud Detection',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a20636d2cda86f2900e1379_fraud%20detection.webp',
      body: [
        'Monitor transactions across A/R and A/P to identify irregularities such as duplicate payments, unauthorized vendor activity, or counterfeit transactions.',
        'Detect insider fraud by analyzing patterns and behaviors across financial operations.'
      ]
    },
    {
      title: 'Compliance Gap Reporting',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a20636edddb92e8ee554383_compliance%20reporting.webp',
      body: [
        'Ensure compliance with tax regulations, financial reporting standards (e.g., IFRS, GAAP), and internal policies.',
        'Automate adjustments to processes when regulations evolve, avoiding manual efforts to track and implement changes.'
      ]
    },
    {
      title: 'Expense Classification',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a20636e51c27d06a8a4ff1f_expense%20clasification.webp',
      body: 'Auto-categorize expenses by vendor, department, or GL code using intelligent tagging models. Ensure cleaner books, faster close cycles, and fewer manual adjustments.'
    }
  ];

  function cardMarkup(card) {
    var contentHtml = '';
    if (Array.isArray(card.body)) {
      contentHtml = '<ul class="auc-bullets">' +
        card.body.map(function (item) {
          return '<li>' + item + '</li>';
        }).join('') +
      '</ul>';
    } else {
      contentHtml = '<p>' + card.body + '</p>';
    }

    return (
      '<article class="auc-card">' +
        '<img class="auc-image" src="' + card.image + '" alt="">' +
        '<span class="auc-dark" aria-hidden="true"></span>' +
        '<span class="auc-light" aria-hidden="true"></span>' +
        '<div class="auc-copy">' +
          '<h3>' + card.title + '</h3>' +
          contentHtml +
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
      --auc-primary: #0E182C;
      --auc-muted: #45556C;
      --auc-accent: #2EC8A1;
      display: block !important;
      width: 100% !important;
      color: var(--auc-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} button {
      font: inherit !important;
    }

    ${S} .auc {
      width: 100% !important;
      padding: clamp(36px, 5vw, 72px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .auc-inner {
      width: min(100%, 1536px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .auc-header {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 24px !important;
      margin-bottom: 24px !important;
    }

    ${S} .auc-title {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(26px, 2.4vw, 36px) !important;
      line-height: 1.12 !important;
      font-weight: 700 !important;
      color: var(--auc-primary) !important;
      text-align: center !important;
      width: 100% !important;
    }

    ${S} .auc-controls {
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
      flex-shrink: 0 !important;
    }

    ${S} .auc-btn {
      width: 42px !important;
      height: 42px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 1px solid #E2E8F0 !important;
      border-radius: 999px !important;
      background: #fff !important;
      color: var(--auc-primary) !important;
      box-shadow: 0 12px 22px rgba(15,23,42,0.11) !important;
      cursor: pointer !important;
      transition: transform 0.2s, opacity 0.2s !important;
    }

    ${S} .auc-btn:hover {
      opacity: 0.9 !important;
      transform: translateY(-1px) !important;
    }

    ${S} .auc-viewport {
      width: 100% !important;
      overflow: hidden !important;
    }

    ${S} .auc-track {
      display: flex !important;
      gap: 24px !important;
      transform: translate3d(0,0,0) !important;
      transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) !important;
      will-change: transform !important;
    }

    ${S} .auc-card {
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

    ${S} .auc-image {
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

    ${S} .auc-dark {
      position: absolute !important;
      inset: 0 !important;
      z-index: 1 !important;
      background: linear-gradient(180deg, rgba(14,24,44,0.08) 0%, rgba(14,24,44,0.16) 48%, rgba(14,24,44,0.68) 100%) !important;
      transition: opacity 0.35s !important;
    }

    ${S} .auc-light {
      position: absolute !important;
      inset: 0 !important;
      z-index: 2 !important;
      background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.85) 45%, #fff 100%) !important;
      opacity: 0 !important;
      transition: opacity 0.35s !important;
    }

    ${S} .auc-copy {
      position: absolute !important;
      left: 20px !important;
      right: 20px !important;
      bottom: 18px !important;
      z-index: 3 !important;
      transform: translateY(calc(100% - 38px)) !important;
      transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1) !important;
    }

    ${S} .auc-copy h3 {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(18px, 1.4vw, 25px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: #fff !important;
      margin-bottom: 16px !important;
      transition: color 0.3s !important;
    }

    ${S} .auc-copy p,
    ${S} .auc-copy .auc-bullets {
      max-width: 360px !important;
      font-size: 13.5px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--auc-muted) !important;
      opacity: 0 !important;
      transition: opacity 0.32s 0.06s !important;
    }

    ${S} .auc-bullets {
      margin: 0 !important;
      padding: 0 0 0 16px !important;
      list-style-type: disc !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 10px !important;
    }

    ${S} .auc-bullets li {
      font-size: 13.5px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--auc-muted) !important;
    }

    ${S} .auc-bullets li::marker {
      color: var(--auc-accent) !important;
    }

    ${S} .auc-card:hover .auc-image,
    ${S} .auc-card:focus-within .auc-image {
      transform: scale(1.05) !important;
      filter: saturate(0.92) contrast(0.98) !important;
    }

    ${S} .auc-card:hover .auc-dark,
    ${S} .auc-card:focus-within .auc-dark {
      opacity: 0 !important;
    }

    ${S} .auc-card:hover .auc-light,
    ${S} .auc-card:focus-within .auc-light {
      opacity: 1 !important;
    }

    ${S} .auc-card:hover .auc-copy,
    ${S} .auc-card:focus-within .auc-copy {
      transform: translateY(0) !important;
    }

    ${S} .auc-card:hover .auc-copy h3,
    ${S} .auc-card:focus-within .auc-copy h3 {
      color: var(--auc-primary) !important;
    }

    ${S} .auc-card:hover .auc-copy p,
    ${S} .auc-card:focus-within .auc-copy p,
    ${S} .auc-card:hover .auc-copy .auc-bullets,
    ${S} .auc-card:focus-within .auc-copy .auc-bullets {
      opacity: 1 !important;
    }

    ${S} .auc-dots {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 16px !important;
      margin-top: 28px !important;
    }

    ${S} .auc-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14,24,44,0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    ${S} .auc-dot.auc-on {
      background: var(--auc-accent) !important;
    }

    @media (max-width: 1180px) {
      ${S} .auc-card {
        flex-basis: calc((100% - 24px) / 2.25) !important;
      }
    }

    @media (max-width: 720px) {
      ${S} .auc-inner { padding: 0 16px !important; }
      ${S} .auc-header { align-items: flex-start !important; }
      ${S} .auc-title { text-align: left !important; }
      ${S} .auc-controls { display: none !important; }
      ${S} .auc-track { gap: 16px !important; }
      ${S} .auc-card {
        flex-basis: 100% !important;
        height: 460px !important;
      }
      ${S} .auc-light { opacity: 1 !important; }
      ${S} .auc-dark { opacity: 0 !important; }
      ${S} .auc-copy {
        transform: translateY(0) !important;
      }
      ${S} .auc-copy h3 {
        color: var(--auc-primary) !important;
      }
      ${S} .auc-copy p,
      ${S} .auc-copy .auc-bullets {
        opacity: 1 !important;
      }
    }
  `;

  var HTML = `
    <section class="auc">
      <div class="auc-inner">
        <header class="auc-header">
          <h2 class="auc-title">Use Cases by Business Function</h2>
          <div class="auc-controls" aria-hidden="false">
            <button class="auc-btn auc-prev" type="button" aria-label="Previous cards">&lsaquo;</button>
            <button class="auc-btn auc-next" type="button" aria-label="Next cards">&rsaquo;</button>
          </div>
        </header>

        <div class="auc-viewport">
          <div class="auc-track">
            ${cards.map(cardMarkup).join('')}
          </div>
        </div>

        <div class="auc-dots" data-dots></div>
      </div>
    </section>
  `;

  function getVisibleCount() {
    if (window.matchMedia('(max-width: 720px)').matches) return 1;
    if (window.matchMedia('(max-width: 1180px)').matches) return 2.25;
    return 3.5;
  }

  function mountSlider(root) {
    var track = root.querySelector('.auc-track');
    var viewport = root.querySelector('.auc-viewport');
    var items = root.querySelectorAll('.auc-card');
    var prev = root.querySelector('.auc-prev');
    var next = root.querySelector('.auc-next');
    var dotsWrap = root.querySelector('[data-dots]');
    var index = 0;

    function maxIndex() {
      return Math.max(0, Math.ceil(items.length - getVisibleCount()));
    }

    function buildDots() {
      var pages = maxIndex() + 1;
      var html = '';
      for (var i = 0; i < pages; i += 1) {
        html += '<button class="auc-dot' + (i === index ? ' auc-on' : '') + '" type="button" aria-label="Go to slide group ' + (i + 1) + '" data-slide="' + i + '"></button>';
      }
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.auc-dot').forEach(function (dot) {
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

      dotsWrap.querySelectorAll('.auc-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('auc-on', dotIndex === index);
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
      console.warn('[auc-widget] Container #' + ROOT_ID + ' not found.');
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
