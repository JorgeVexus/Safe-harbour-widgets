(function () {
  'use strict';

  var ROOT_ID = 'shi-managed-it-bundle-slider-root';
  var S = '#' + ROOT_ID;

  function injectLink(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
  }

  injectLink('https://fonts.googleapis.com/css2?family=Play:wght@700&family=Poppins:wght@400;500;600;700&display=swap');

  var CHECK = 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a0782574282a2b66b9aec00_Icon.svg';

  var description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  var cards = [
    {
      title: 'Remote office solutions',
      body: description
    },
    {
      title: 'Ecommerce Advisory',
      body: description
    },
    {
      title: 'Disaster Recovery',
      body: description
    },
    {
      title: 'VCISO & Cybersecurity',
      body: description
    },
    {
      title: 'Microsoft 365',
      body: description
    },
    {
      title: 'Cloud Services',
      body: description
    }
  ];

  function cardMarkup(card) {
    return (
      '<article class="mib-card">' +
        '<div class="mib-icon" aria-hidden="true"><span></span></div>' +
        '<div class="mib-copy">' +
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
      --mib-primary: #0E182C;
      --mib-muted: #45556C;
      --mib-accent: #E08332;
      --mib-check: url(${CHECK});
      display: block !important;
      width: 100% !important;
      color: var(--mib-primary) !important;
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

    ${S} .mib {
      width: 100% !important;
      padding: clamp(36px, 5vw, 72px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .mib-inner {
      width: min(100%, 1570px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .mib-header {
      width: min(100%, 776px) !important;
      margin: 0 auto 56px !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      gap: 40px !important;
    }

    ${S} .mib-title {
      width: 100% !important;
      font-family: 'Play', sans-serif !important;
      font-size: clamp(34px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--mib-primary) !important;
      text-align: center !important;
    }

    ${S} .mib-cta {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 12px !important;
      min-width: 204px !important;
      min-height: 40px !important;
      padding: 10px 16px !important;
      border: 0 !important;
      border-radius: 8px !important;
      background: var(--mib-primary) !important;
      color: #fff !important;
      font-family: 'Play', sans-serif !important;
      font-size: 16px !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      box-shadow: 0 10px 14px rgba(40, 125, 152, 0.3), 0 4px 6px rgba(40, 125, 152, 0.3) !important;
      cursor: pointer !important;
    }

    ${S} .mib-cta span {
      color: #fff !important;
      font-size: 17px !important;
      line-height: 1 !important;
    }

    ${S} .mib-slider {
      position: relative !important;
      width: 100% !important;
    }

    ${S} .mib-viewport {
      width: 100% !important;
      overflow: hidden !important;
      padding: 6px 4px 10px !important;
    }

    ${S} .mib-track {
      display: flex !important;
      gap: 24px !important;
      transform: translate3d(0,0,0) !important;
      transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) !important;
      will-change: transform !important;
    }

    ${S} .mib-card {
      position: relative !important;
      flex: 0 0 calc((100% - 72px) / 4) !important;
      min-height: 349px !important;
      min-width: 0 !important;
      padding: 24px !important;
      border-radius: 14px !important;
      background: linear-gradient(139.6deg, #F8FAFB 0%, #FAFCFC 33.33%, #FDFDFE 66.67%, #FFFFFF 100%) !important;
      box-shadow: 0 4px 6px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.10) !important;
    }

    ${S} .mib-icon {
      width: 48px !important;
      height: 48px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      margin-bottom: 16px !important;
      border-radius: 999px !important;
      background: var(--mib-accent) !important;
    }

    ${S} .mib-icon span {
      width: 24px !important;
      height: 24px !important;
      display: block !important;
      background: #fff !important;
      -webkit-mask: var(--mib-check) center / contain no-repeat !important;
      mask: var(--mib-check) center / contain no-repeat !important;
    }

    ${S} .mib-copy {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
    }

    ${S} .mib-copy h3 {
      font-family: 'Play', sans-serif !important;
      font-size: 20px !important;
      line-height: 1.4 !important;
      font-weight: 700 !important;
      color: var(--mib-primary) !important;
    }

    ${S} .mib-copy p {
      font-size: 14px !important;
      line-height: 1.42 !important;
      font-weight: 400 !important;
      color: var(--mib-muted) !important;
    }

    ${S} .mib-btn {
      position: absolute !important;
      top: 50% !important;
      z-index: 2 !important;
      width: 42px !important;
      height: 42px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 1px solid #E2E8F0 !important;
      border-radius: 999px !important;
      background: #fff !important;
      color: var(--mib-primary) !important;
      box-shadow: 0 12px 22px rgba(15,23,42,0.12) !important;
      cursor: pointer !important;
      transform: translateY(-50%) !important;
      transition: transform 0.2s, opacity 0.2s !important;
    }

    ${S} .mib-btn:hover {
      opacity: 0.9 !important;
      transform: translateY(-50%) scale(1.04) !important;
    }

    ${S} .mib-prev { left: -12px !important; }
    ${S} .mib-next { right: -12px !important; }

    ${S} .mib-dots {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 22px !important;
      margin-top: 34px !important;
    }

    ${S} .mib-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14,24,44,0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    ${S} .mib-dot.mib-on {
      background: var(--mib-accent) !important;
    }

    @media (max-width: 1180px) {
      ${S} .mib-card {
        flex-basis: calc((100% - 48px) / 3) !important;
      }
    }

    @media (max-width: 900px) {
      ${S} .mib-card {
        flex-basis: calc((100% - 24px) / 2) !important;
      }
    }

    @media (max-width: 720px) {
      ${S} .mib-inner { padding: 0 16px !important; }
      ${S} .mib-header { align-items: flex-start !important; gap: 24px !important; margin-bottom: 32px !important; }
      ${S} .mib-title { text-align: left !important; }
      ${S} .mib-track { gap: 16px !important; }
      ${S} .mib-card {
        flex-basis: 100% !important;
        min-height: 330px !important;
      }
      ${S} .mib-btn { display: none !important; }
    }
  `;

  var HTML = `
    <section class="mib">
      <div class="mib-inner">
        <header class="mib-header">
          <h2 class="mib-title">What&#39;s Included In Our Fully Managed IT Bundle?</h2>
          <a href="https://calendly.com/becyberaware/30-minutes-with-dan-stratton-cissp-ccsp-cciso" target="_blank" rel="noopener noreferrer" class="mib-cta">Have Questions? <span aria-hidden="true">-&gt;</span></a>
        </header>

        <div class="mib-slider" data-slider>
          <button class="mib-btn mib-prev" type="button" aria-label="Previous cards">&lsaquo;</button>
          <div class="mib-viewport">
            <div class="mib-track">
              ${cards.map(cardMarkup).join('')}
            </div>
          </div>
          <button class="mib-btn mib-next" type="button" aria-label="Next cards">&rsaquo;</button>
        </div>

        <div class="mib-dots" data-dots></div>
      </div>
    </section>
  `;

  function getVisibleCount() {
    if (window.matchMedia('(max-width: 720px)').matches) return 1;
    if (window.matchMedia('(max-width: 900px)').matches) return 2;
    if (window.matchMedia('(max-width: 1180px)').matches) return 3;
    return 4;
  }

  function mountSlider(root) {
    var slider = root.querySelector('[data-slider]');
    var track = slider.querySelector('.mib-track');
    var viewport = slider.querySelector('.mib-viewport');
    var items = slider.querySelectorAll('.mib-card');
    var prev = slider.querySelector('.mib-prev');
    var next = slider.querySelector('.mib-next');
    var dotsWrap = root.querySelector('[data-dots]');
    var index = 0;
    var startX = 0;
    var deltaX = 0;

    function maxIndex() {
      return Math.max(0, items.length - getVisibleCount());
    }

    function buildDots() {
      var pages = maxIndex() + 1;
      var html = '';
      for (var i = 0; i < pages; i += 1) {
        html += '<button class="mib-dot' + (i === index ? ' mib-on' : '') + '" type="button" aria-label="Go to slide group ' + (i + 1) + '" data-slide="' + i + '"></button>';
      }
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.mib-dot').forEach(function (dot) {
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

      dotsWrap.querySelectorAll('.mib-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('mib-on', dotIndex === index);
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
      console.warn('[mib-widget] Container #' + ROOT_ID + ' not found.');
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
