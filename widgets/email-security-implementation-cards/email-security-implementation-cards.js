(function () {
  'use strict';

  var ROOT_ID = 'shi-email-security-implementation-root';
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
      title: 'Consultation & Audit',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a2485eb8c5a4b90b45552c4_consultation%20audit.webp',
      body: 'Analyze your email workflows and vulnerabilities through a free security assessment.'
    },
    {
      title: 'Integration & Customization',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a2485eada8906173d53c756_integration.webp',
      body: 'Fully compatible with Microsoft 365 and Google Workspace, tailored to fit your needs.'
    },
    {
      title: 'Employee Training',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a2485eb9193bf39373d97db_employee%20training.webp',
      body: 'Simple, effective training ensures everyone can take advantage of new features.'
    },
    {
      title: 'Ongoing Optimization',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a2485ebf67452b10c063250_ongoing%20optimization.webp',
      body: 'Regular briefings and updates keep your security evolving with emerging threats.'
    }
  ];

  function cardMarkup(card) {
    return (
      '<article class="esic-card">' +
        '<img class="esic-image" src="' + card.image + '" alt="">' +
        '<span class="esic-dark" aria-hidden="true"></span>' +
        '<span class="esic-light" aria-hidden="true"></span>' +
        '<div class="esic-copy">' +
          '<h3>' + card.title + '</h3>' +
          '<p>' + card.body + '</p>' +
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
      --esic-primary: #0E182C;
      --esic-muted: #45556C;
      --esic-accent: #287D98;
      display: block !important;
      width: 100% !important;
      color: var(--esic-primary) !important;
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

    ${S} .esic {
      width: 100% !important;
      padding: clamp(36px, 5vw, 72px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .esic-inner {
      width: min(100%, 1536px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .esic-title {
      width: 100% !important;
      margin-bottom: 24px !important;
      font-family: 'Play', sans-serif !important;
      font-size: clamp(26px, 2.4vw, 36px) !important;
      line-height: 1.12 !important;
      font-weight: 700 !important;
      color: var(--esic-primary) !important;
      text-align: center !important;
    }

    ${S} .esic-viewport {
      width: 100% !important;
      overflow: visible !important;
    }

    ${S} .esic-track {
      display: grid !important;
      grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
      gap: 24px !important;
      width: 100% !important;
      transform: translate3d(0,0,0) !important;
      transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) !important;
      will-change: transform !important;
    }

    ${S} .esic-card {
      position: relative !important;
      height: clamp(360px, 33vw, 520px) !important;
      min-width: 0 !important;
      overflow: hidden !important;
      border-radius: 10px !important;
      background: #E2E8F0 !important;
      cursor: pointer !important;
      box-shadow: 0 18px 32px rgba(15,23,42,0.08) !important;
      isolation: isolate !important;
    }

    ${S} .esic-image {
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

    ${S} .esic-dark {
      position: absolute !important;
      inset: 0 !important;
      z-index: 1 !important;
      background: linear-gradient(180deg, rgba(14,24,44,0.08) 0%, rgba(14,24,44,0.16) 48%, rgba(14,24,44,0.72) 100%) !important;
      transition: opacity 0.35s !important;
    }

    ${S} .esic-light {
      position: absolute !important;
      inset: 0 !important;
      z-index: 2 !important;
      background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.8) 58%, #fff 100%) !important;
      opacity: 0 !important;
      transition: opacity 0.35s !important;
    }

    ${S} .esic-copy {
      position: absolute !important;
      left: 24px !important;
      right: 24px !important;
      bottom: 24px !important;
      z-index: 3 !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: flex-end !important;
    }

    ${S} .esic-copy h3 {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(18px, 1.4vw, 25px) !important;
      line-height: 1.2 !important;
      font-weight: 700 !important;
      color: #fff !important;
      margin-bottom: 0 !important;
      transition: color 0.3s ease, margin-bottom 0.35s cubic-bezier(0.22, 1, 0.36, 1) !important;
    }

    ${S} .esic-copy p {
      max-width: 360px !important;
      font-size: 14px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--esic-muted) !important;
      max-height: 0 !important;
      opacity: 0 !important;
      overflow: hidden !important;
      margin-top: 0 !important;
      transition: max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease 0.05s, margin-top 0.35s ease !important;
    }

    ${S} .esic-card:hover .esic-image,
    ${S} .esic-card:focus-within .esic-image {
      transform: scale(1.05) !important;
      filter: saturate(0.92) contrast(0.98) !important;
    }

    ${S} .esic-card:hover .esic-dark,
    ${S} .esic-card:focus-within .esic-dark {
      opacity: 0 !important;
    }

    ${S} .esic-card:hover .esic-light,
    ${S} .esic-card:focus-within .esic-light {
      opacity: 1 !important;
    }

    ${S} .esic-card:hover .esic-copy h3,
    ${S} .esic-card:focus-within .esic-copy h3 {
      color: var(--esic-primary) !important;
      margin-bottom: 10px !important;
    }

    ${S} .esic-card:hover .esic-copy p,
    ${S} .esic-card:focus-within .esic-copy p {
      max-height: 140px !important;
      opacity: 1 !important;
    }

    ${S} .esic-dots {
      display: none !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 16px !important;
      margin-top: 28px !important;
    }

    ${S} .esic-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14,24,44,0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    ${S} .esic-dot.esic-on {
      background: var(--esic-accent) !important;
    }

    @media (max-width: 980px) {
      ${S} .esic-track {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }
    }

    @media (max-width: 720px) {
      ${S} .esic-inner { padding: 0 16px !important; }
      ${S} .esic-title { text-align: left !important; }
      ${S} .esic-viewport { overflow: hidden !important; }
      ${S} .esic-track {
        display: flex !important;
        grid-template-columns: none !important;
        gap: 16px !important;
      }
      ${S} .esic-card {
        flex: 0 0 100% !important;
        height: 460px !important;
      }
      ${S} .esic-light { opacity: 1 !important; }
      ${S} .esic-dark { opacity: 0 !important; }
      ${S} .esic-copy {
        transform: translateY(0) !important;
      }
      ${S} .esic-copy h3 {
        color: var(--esic-primary) !important;
      }
      ${S} .esic-copy p {
        opacity: 1 !important;
      }
      ${S} .esic-dots {
        display: flex !important;
      }
    }
  `;

  var HTML = `
    <section class="esic">
      <div class="esic-inner">
        <h2 class="esic-title">Implementation Process</h2>
        <div class="esic-viewport">
          <div class="esic-track">
            ${cards.map(cardMarkup).join('')}
          </div>
        </div>
        <div class="esic-dots" data-dots></div>
      </div>
    </section>
  `;

  function mountSlider(root) {
    var track = root.querySelector('.esic-track');
    var viewport = root.querySelector('.esic-viewport');
    var dotsWrap = root.querySelector('[data-dots]');
    var index = 0;
    var startX = 0;
    var deltaX = 0;

    function isMobile() {
      return window.matchMedia('(max-width: 720px)').matches;
    }

    function buildDots() {
      var html = '';
      cards.forEach(function (_, dotIndex) {
        html += '<button class="esic-dot' + (dotIndex === index ? ' esic-on' : '') + '" type="button" aria-label="Go to card ' + (dotIndex + 1) + '" data-slide="' + dotIndex + '"></button>';
      });
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.esic-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          index = parseInt(this.dataset.slide, 10);
          update();
        });
      });
    }

    function update() {
      if (!isMobile()) {
        index = 0;
        track.style.setProperty('transform', 'translate3d(0, 0, 0)', 'important');
      } else {
        index = Math.max(0, Math.min(index, cards.length - 1));
        track.style.setProperty('transform', 'translate3d(' + (-index * (viewport.clientWidth + 16)) + 'px, 0, 0)', 'important');
      }

      dotsWrap.querySelectorAll('.esic-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('esic-on', dotIndex === index);
      });
    }

    track.addEventListener('touchstart', function (event) {
      if (!isMobile()) return;
      startX = event.touches[0].clientX;
      deltaX = 0;
    }, { passive: true });

    track.addEventListener('touchmove', function (event) {
      if (!isMobile()) return;
      deltaX = event.touches[0].clientX - startX;
    }, { passive: true });

    track.addEventListener('touchend', function () {
      if (!isMobile() || Math.abs(deltaX) < 40) return;
      index += deltaX < 0 ? 1 : -1;
      update();
    });

    window.addEventListener('resize', update);
    buildDots();
    update();
  }

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[esic-widget] Container #' + ROOT_ID + ' not found.');
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
