(function () {
  'use strict';

  var ROOT_ID = 'shi-bulletproof-services-slider-root';
  var S = '#' + ROOT_ID;

  function injectLink(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
  }

  injectLink('https://fonts.googleapis.com/css2?family=Play:wght@700&family=Poppins:wght@400;500;600;700&display=swap');

  var ARROW = 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493869da8eb02bf63548dc_Icon%20arrow%20button.svg';

  var cards = [
    {
      title: 'Cybersecurity Risk Assessment',
      body: 'Identification Your Vulnerabilities Before Attackers Do',
      url: 'https://safe-harbour-informatics.webflow.io/bulletproof-cybersecurity-risk-assessments'
    },
    {
      title: 'Managed Cybersecurity',
      body: 'Comprehensive Protection for What Matters Most',
      url: 'https://safe-harbour-informatics.webflow.io/bulletproof-cybersecurity-managed-cybersecurity'
    },
    {
      title: 'Secure Your Data',
      body: 'Ransomware-Proof Backup Solutions',
      url: 'https://safe-harbour-informatics.webflow.io/bulletproof-cybersecurity-secure-your-data'
    },
    {
      title: 'Advanced AI Email Security',
      body: 'Protect Your Business from Email Fraud, Phishing & Reputation Damage',
      url: 'https://safe-harbour-informatics.webflow.io/bulletproof-cybersecurity-advanced-ai-email-security'
    },
    {
      title: 'Compliance Solutions',
      body: 'Drive Growth, Mitigate Risk & Build Trust',
      url: 'https://safe-harbour-informatics.webflow.io/bulletproof-cybersecurity-compliance-solutions'
    },
    {
      title: 'FTC Safeguards Compliance',
      body: 'Protect Data & Build Customer Trust',
      url: 'https://safe-harbour-informatics.webflow.io/bulletproof-cybersecurity-ftc-safeguards-assessment'
    }
  ];

  function cardMarkup(card) {
    return (
      '<article class="bps-card">' +
        '<div class="bps-card-inner">' +
          '<div class="bps-copy">' +
            '<h3>' + card.title + '</h3>' +
            '<p>' + card.body + '</p>' +
          '</div>' +
          '<a class="bps-link" href="' + (card.url || '#') + '" aria-label="Learn more about ' + card.title + '">' +
            '<span class="bps-link-spacer-left" aria-hidden="true"></span>' +
            '<span>Learn More</span>' +
            '<img src="' + ARROW + '" alt="" aria-hidden="true">' +
            '<span class="bps-link-spacer-right" aria-hidden="true"></span>' +
          '</a>' +
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
      --bps-primary: #0E182C;
      --bps-secondary: #287D98;
      --bps-muted: #45556C;
      display: block !important;
      width: 100% !important;
      overflow: hidden !important;
      background: #fff !important;
      color: var(--bps-primary) !important;
    }

    ${S} h2, ${S} h3, ${S} p {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} a {
      text-decoration: none !important;
    }

    ${S} button {
      font: inherit !important;
    }

    ${S} .bps {
      width: 100% !important;
      padding: clamp(38px, 5vw, 72px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .bps-inner {
      width: min(100%, 1536px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .bps-header {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 24px !important;
      margin-bottom: clamp(42px, 5vw, 69px) !important;
    }

    ${S} .bps-title {
      width: 100% !important;
      font-family: 'Play', sans-serif !important;
      font-size: clamp(30px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--bps-primary) !important;
      text-align: center !important;
    }

    ${S} .bps-title span {
      color: var(--bps-secondary) !important;
    }

    ${S} .bps-controls {
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
      flex: 0 0 auto !important;
    }

    ${S} .bps-btn {
      width: 42px !important;
      height: 42px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 1px solid #E2E8F0 !important;
      border-radius: 999px !important;
      background: #fff !important;
      color: var(--bps-primary) !important;
      box-shadow: 0 12px 22px rgba(15,23,42,0.11) !important;
      cursor: pointer !important;
      transition: transform 0.2s, opacity 0.2s !important;
    }

    ${S} .bps-btn:hover {
      opacity: 0.9 !important;
      transform: translateY(-1px) !important;
    }

    ${S} .bps-viewport {
      width: 100% !important;
      overflow: hidden !important;
      padding: 24px 6px 28px !important;
    }

    ${S} .bps-track {
      display: flex !important;
      gap: clamp(28px, 3.4vw, 55px) !important;
      transform: translate3d(0,0,0) !important;
      transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) !important;
      will-change: transform !important;
    }

    ${S} .bps-card {
      flex: 0 0 305px !important;
      width: 305px !important;
      min-height: 268px !important;
      height: 268px !important;
      position: relative !important;
      border: 2px solid rgba(0,0,0,0) !important;
      border-radius: 12px !important;
      background: #fff !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06) !important;
    }

    ${S} .bps-card-inner {
      position: absolute !important;
      inset: 28px 24px !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
    }

    ${S} .bps-copy {
      display: flex !important;
      flex-direction: column !important;
      gap: 12px !important;
    }

    ${S} .bps-copy h3 {
      width: 100% !important;
      font-family: 'Play', sans-serif !important;
      font-size: 20px !important;
      line-height: 1.35 !important;
      font-weight: 700 !important;
      color: var(--bps-secondary) !important;
    }

    ${S} .bps-copy p {
      width: 100% !important;
      font-size: 13.5px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--bps-muted) !important;
    }

    ${S} .bps-link {
      width: 100% !important;
      min-height: 31px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 12px !important;
      padding: 10px 16px !important;
      border-radius: 8px !important;
      background: var(--bps-primary) !important;
      color: #fff !important;
      font-family: 'Play', sans-serif !important;
      font-size: 16px !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      box-shadow: 0 10px 15px rgba(40,125,152,0.2), 0 4px 6px rgba(40,125,152,0.2) !important;
      overflow: hidden !important;
    }

    ${S} .bps-link-spacer-left {
      flex-grow: 1 !important;
      flex-shrink: 1 !important;
      transition: flex-grow 0.35s cubic-bezier(0.22, 1, 0.36, 1) !important;
    }

    ${S} .bps-link-spacer-right {
      flex-grow: 1 !important;
      flex-shrink: 1 !important;
      transition: flex-grow 0.35s cubic-bezier(0.22, 1, 0.36, 1) !important;
    }

    ${S} .bps-card:hover .bps-link-spacer-left {
      flex-grow: 0 !important;
    }

    ${S} .bps-link img {
      width: 16px !important;
      height: 16px !important;
      display: block !important;
      filter: brightness(0) invert(1) !important;
    }

    ${S} .bps-dots {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 16px !important;
      margin-top: 28px !important;
    }

    ${S} .bps-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14,24,44,0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    ${S} .bps-dot.bps-on {
      background: var(--bps-secondary) !important;
    }

    @media (max-width: 720px) {
      ${S} .bps-inner { padding: 0 16px !important; }
      ${S} .bps-header { align-items: center !important; justify-content: center !important; }
      ${S} .bps-title { text-align: center !important; }
      ${S} .bps-copy, ${S} .bps-copy h3, ${S} .bps-copy p { text-align: center !important; }
      ${S} .bps-controls { display: none !important; }
      ${S} .bps-track { gap: 16px !important; }
      ${S} .bps-card {
        flex-basis: 100% !important;
        width: 100% !important;
      }
    }
  `;

  var HTML = `
    <section class="bps">
      <div class="bps-inner">
        <header class="bps-header">
          <h2 class="bps-title">Explore Our Smart <span>Bulletproof Cybersecurity</span></h2>
          <div class="bps-controls">
            <button class="bps-btn bps-prev" type="button" aria-label="Previous service">&lsaquo;</button>
            <button class="bps-btn bps-next" type="button" aria-label="Next service">&rsaquo;</button>
          </div>
        </header>

        <div class="bps-viewport">
          <div class="bps-track">
            ${cards.map(cardMarkup).join('')}
          </div>
        </div>

        <div class="bps-dots" data-dots></div>
      </div>
    </section>
  `;

  function getGap(root) {
    var track = root.querySelector('.bps-track');
    var styles = window.getComputedStyle(track);
    return parseFloat(styles.columnGap || styles.gap || 0) || 0;
  }

  function getVisibleCount(root) {
    var viewport = root.querySelector('.bps-viewport');
    var first = root.querySelector('.bps-card');
    if (!viewport || !first) return 1;
    var gap = getGap(root);
    return Math.max(1, (viewport.clientWidth + gap) / (first.offsetWidth + gap));
  }

  function mountSlider(root) {
    var track = root.querySelector('.bps-track');
    var viewport = root.querySelector('.bps-viewport');
    var items = root.querySelectorAll('.bps-card');
    var prev = root.querySelector('.bps-prev');
    var next = root.querySelector('.bps-next');
    var dotsWrap = root.querySelector('[data-dots]');
    var index = 0;

    function maxIndex() {
      return Math.max(0, Math.ceil(items.length - getVisibleCount(root)));
    }

    function buildDots() {
      var pages = maxIndex() + 1;
      var html = '';
      for (var i = 0; i < pages; i += 1) {
        html += '<button class="bps-dot' + (i === index ? ' bps-on' : '') + '" type="button" aria-label="Go to service group ' + (i + 1) + '" data-slide="' + i + '"></button>';
      }
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.bps-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          index = parseInt(this.dataset.slide, 10);
          update();
        });
      });
    }

    function update() {
      var gap = getGap(root);
      var itemWidth = items[0].offsetWidth;
      var maxTranslate = Math.max(0, track.scrollWidth - viewport.clientWidth);
      var desired = index * (itemWidth + gap);
      index = Math.max(0, Math.min(index, maxIndex()));
      track.style.setProperty('transform', 'translate3d(' + (-Math.min(desired, maxTranslate)) + 'px, 0, 0)', 'important');

      dotsWrap.querySelectorAll('.bps-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('bps-on', dotIndex === index);
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
      console.warn('[bps-widget] Container #' + ROOT_ID + ' not found.');
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
