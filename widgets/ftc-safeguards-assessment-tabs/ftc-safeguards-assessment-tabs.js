(function () {
  'use strict';

  var ROOT_ID = 'shi-ftc-safeguards-assessment-root';
  var S = '#' + ROOT_ID;

  function injectLink(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
  }

  injectLink('https://fonts.googleapis.com/css2?family=Play:wght@700&family=Poppins:wght@400;500;600;700&display=swap');

  var ACCENT = '#287D98';
  var CHECK = 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a2451eb0786361962a8eb2b_check%20icon%20blue.webp';

  var tabs = [
    {
      label: 'Who Needs It',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba64480068d7c8f4d88_strategic%20ai%20consulting%20icon.svg'
    },
    {
      label: 'Assessment Services',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba4585299f4854b10db_Ai%20workflow%20assesment%20icon.svg'
    },
    {
      label: 'Key Benefits',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4949b46a094d32e0e10552_key%20bennefits%20reliable.svg'
    }
  ];

  var whoCards = [
    {
      title: 'Financial Institutions',
      body: 'Mortgage brokers, investment advisers, accountants, CPAs, and credit unions.'
    },
    {
      title: 'Auto Dealerships',
      body: 'Businesses managing financing or credit applications.'
    },
    {
      title: 'Retailers',
      body: 'Offering in-house credit and loyalty programs involving customer financial data.'
    },
    {
      title: 'Payment Processors & Consumer Reporting Agencies',
      body: 'Managing sensitive payment, transaction, and credit data.'
    },
    {
      title: 'Advisory Firms',
      body: 'Providing personal financial services or handling customer account data.'
    },
    {
      title: 'Educational Institutions',
      body: 'Handling tuition payments, financial aid data, and student loan services involving consumer financial information.'
    }
  ];

  var serviceCards = [
    {
      title: 'Gap Analysis',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4c227a4345faa21b6624cf_gap%2001.avif',
      body: 'Identify gaps in your cybersecurity practices against the detailed requirements of the FTC Safeguards Rule.'
    },
    {
      title: 'Risk Assessment',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4c227a1b7fec7d5a3a1548_risk%2001.avif',
      body: 'Evaluate risks and vulnerabilities across your organization, including customer data workflows. Provide actionable recommendations to mitigate these risks.'
    },
    {
      title: 'Program Design Assistance',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4c2278a5f0a02134d2b2e2_program%2001.avif',
      body: 'Build or refine your risk-based cybersecurity program to align with FTC compliance requirements.'
    },
    {
      title: 'Actionable Compliance Roadmap',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4c2278184854b512fce55b_actionable%2001.avif',
      body: 'Deliver practical solutions for rapid and sustainable compliance implementation.'
    },
    {
      title: 'Policy and Procedure Review',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4c2278a5f0a02134d2b305_policy%2001.avif',
      body: 'Strengthen key areas like incident response plans, access control policies, vendor management, and employee training.'
    }
  ];

  var benefitCards = [
    {
      title: 'Avoid Non-Compliance Risks',
      body: 'Protect your business from fines and regulatory actions tied to the FTC Safeguards Rule.'
    },
    {
      title: 'Mitigate Cyber Threats',
      body: 'Reduce the likelihood of data breaches through proactive risk identification and action plans.'
    },
    {
      title: 'Boost Customer Confidence',
      body: 'Build trust and loyalty by demonstrating your commitment to safeguarding sensitive customer data.'
    },
    {
      title: 'Gain a Competitive Edge',
      body: 'Position yourself as a secure and compliant leader in your industry.'
    }
  ];

  function iconSpan(className, url) {
    return '<span class="' + className + '" style="--ftc-icon: url(' + url + ')" aria-hidden="true"></span>';
  }

  function checkIcon(className) {
    return '<span class="' + className + '" style="--ftc-check: url(' + CHECK + ')" aria-hidden="true"></span>';
  }

  function navMarkup() {
    return tabs.map(function (tab, index) {
      return (
        '<li class="' + (index === 0 ? 'ftc-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' +
          iconSpan('ftc-nav-icon', tab.icon) +
          '<span>' + tab.label + '</span>' +
        '</li>'
      );
    }).join('');
  }

  function infoCard(card) {
    return (
      '<article class="ftc-info-card">' +
        '<div class="ftc-info-head">' +
          checkIcon('ftc-check') +
          '<h3>' + card.title + '</h3>' +
        '</div>' +
        '<p>' + card.body + '</p>' +
      '</article>'
    );
  }

  function serviceCard(card) {
    return (
      '<article class="ftc-slide-card">' +
        '<div class="ftc-slide-image"><img src="' + card.image + '" alt=""></div>' +
        '<div class="ftc-slide-copy">' +
          '<div class="ftc-slide-title">' + checkIcon('ftc-check') + '<h3>' + card.title + '</h3></div>' +
          '<p>' + card.body + '</p>' +
        '</div>' +
      '</article>'
    );
  }

  function whoPanel() {
    return (
      '<div class="ftc-panel ftc-on" role="tabpanel">' +
        '<div class="ftc-panel-intro">' +
          '<h2 class="ftc-panel-title">WHO NEEDS THE FTC SAFEGUARDS ASSESSMENT?</h2>' +
          '<p>Any business that collects, handles, or manages consumer financial information can benefit from this assessment. Industries directly impacted include:</p>' +
        '</div>' +
        '<div class="ftc-grid">' + whoCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  function servicesPanel() {
    return (
      '<div class="ftc-panel ftc-slider-panel" role="tabpanel">' +
        '<div class="ftc-panel-intro">' +
          '<h2 class="ftc-panel-title">FTC SAFEGUARDS ASSESSMENT SERVICES</h2>' +
          '<p>Our tailored FTC Safeguards Assessment provides your business with a step-by-step roadmap to address compliance challenges head-on. Here is what is included in our comprehensive service:</p>' +
        '</div>' +
        '<div class="ftc-slider" data-slider>' +
          '<button class="ftc-slider-btn ftc-prev" type="button" aria-label="Previous slide">&lsaquo;</button>' +
          '<div class="ftc-slider-viewport">' +
            '<div class="ftc-slider-track">' + serviceCards.map(serviceCard).join('') + '</div>' +
          '</div>' +
          '<button class="ftc-slider-btn ftc-next" type="button" aria-label="Next slide">&rsaquo;</button>' +
        '</div>' +
        '<div class="ftc-dots" data-dots></div>' +
      '</div>'
    );
  }

  function benefitsPanel() {
    return (
      '<div class="ftc-panel" role="tabpanel">' +
        '<h2 class="ftc-panel-title">HOW THE FTC SAFEGUARDS ASSESSMENT BENEFITS YOUR BUSINESS</h2>' +
        '<div class="ftc-grid ftc-benefit-grid">' + benefitCards.map(infoCard).join('') + '</div>' +
        '<p class="ftc-benefit-note">In addition to compliance, our service strengthens your business&#39;s cybersecurity footing, ensuring operational continuity and peace of mind.</p>' +
      '</div>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --ftc-accent: ${ACCENT};
      --ftc-primary: #0E182C;
      --ftc-muted: #45556C;
      --ftc-disabled: #94A3B8;
      display: block !important;
      width: 100% !important;
      color: var(--ftc-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} ul { list-style: none !important; }
    ${S} button { font: inherit !important; }

    ${S} .ftc {
      width: 100% !important;
      min-height: 760px !important;
      padding: clamp(42px, 5vw, 74px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .ftc-inner {
      width: min(100%, 1536px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .ftc-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(34px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--ftc-primary) !important;
      margin-bottom: clamp(44px, 5vw, 70px) !important;
    }

    ${S} .ftc-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: clamp(40px, 4vw, 70px) !important;
      width: 100% !important;
    }

    ${S} .ftc-rail {
      flex: 0 0 25% !important;
      min-width: 260px !important;
      max-width: 356px !important;
    }

    ${S} .ftc-content {
      flex: 1 1 75% !important;
      min-width: 0 !important;
      width: 100% !important;
    }

    ${S} .ftc-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
      margin-bottom: 48px !important;
    }

    ${S} .ftc-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--ftc-disabled) !important;
      background: transparent !important;
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .ftc-nav li:hover {
      color: var(--ftc-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .ftc-nav li.ftc-on {
      color: var(--ftc-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--ftc-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .ftc-nav-icon {
      width: 20px !important;
      height: 20px !important;
      flex: 0 0 20px !important;
      display: block !important;
      background: var(--ftc-disabled) !important;
      -webkit-mask: var(--ftc-icon) center / contain no-repeat !important;
      mask: var(--ftc-icon) center / contain no-repeat !important;
      transition: background 0.2s !important;
    }

    ${S} .ftc-nav li.ftc-on .ftc-nav-icon {
      background: var(--ftc-accent) !important;
    }

    ${S} .ftc-rail-note {
      max-width: 356px !important;
      color: rgba(14,24,44,0.5) !important;
      font-size: 14px !important;
      line-height: 1.75 !important;
    }

    ${S} .ftc-panel {
      display: none !important;
      width: 100% !important;
      min-height: 560px !important;
      animation: ftc-rise 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    ${S} .ftc-panel.ftc-on {
      display: block !important;
    }

    @keyframes ftc-rise {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .ftc-panel-title {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(24px, 2vw, 32px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--ftc-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 14px !important;
    }

    ${S} .ftc-panel-intro {
      margin-bottom: 42px !important;
    }

    ${S} .ftc-panel-intro p {
      max-width: 970px !important;
      font-size: 16px !important;
      line-height: 1.55 !important;
      color: rgba(14,24,44,0.8) !important;
    }

    ${S} .ftc-grid {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      column-gap: clamp(48px, 7vw, 170px) !important;
      row-gap: 36px !important;
      width: 100% !important;
    }

    ${S} .ftc-benefit-grid {
      margin-top: 44px !important;
    }

    ${S} .ftc-info-card {
      width: 100% !important;
    }

    ${S} .ftc-info-head {
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      min-height: 56px !important;
      padding: 0 24px !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--ftc-accent) !important;
      border-radius: 0 10px 10px 0 !important;
      margin-bottom: 14px !important;
    }

    ${S} .ftc-info-head h3 {
      font-size: 14px !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
      color: var(--ftc-primary) !important;
    }

    ${S} .ftc-info-card > p {
      padding-left: 64px !important;
      max-width: 470px !important;
      font-size: 14px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--ftc-muted) !important;
    }

    ${S} .ftc-check {
      width: 22px !important;
      height: 22px !important;
      display: block !important;
      flex-shrink: 0 !important;
      background: var(--ftc-accent) !important;
      -webkit-mask: var(--ftc-check) center / contain no-repeat !important;
      mask: var(--ftc-check) center / contain no-repeat !important;
    }

    ${S} .ftc-slider {
      position: relative !important;
      width: 100% !important;
    }

    ${S} .ftc-slider-viewport {
      width: 100% !important;
      overflow: hidden !important;
    }

    ${S} .ftc-slider-track {
      display: flex !important;
      gap: 21px !important;
      transform: translate3d(0,0,0) !important;
      transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1) !important;
      will-change: transform !important;
    }

    ${S} .ftc-slide-card {
      flex: 0 0 calc((100% - 42px) / 3) !important;
      min-width: 0 !important;
      border-radius: 10px !important;
      overflow: hidden !important;
      background: #F8FAFC !important;
    }

    ${S} .ftc-slide-image {
      height: clamp(190px, 16vw, 270px) !important;
      overflow: hidden !important;
      background: #E2E8F0 !important;
    }

    ${S} .ftc-slide-image img {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    ${S} .ftc-slide-copy {
      min-height: 152px !important;
      background: #F8FAFC !important;
    }

    ${S} .ftc-slide-title {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 26px !important;
      border-bottom: 3px solid var(--ftc-accent) !important;
      background: #F8FAFC !important;
    }

    ${S} .ftc-slide-title h3 {
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 700 !important;
      color: var(--ftc-primary) !important;
    }

    ${S} .ftc-slide-copy p {
      padding: 16px 26px 24px !important;
      font-size: 14px !important;
      line-height: 1.42 !important;
      color: var(--ftc-muted) !important;
    }

    ${S} .ftc-slider-btn {
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
      color: var(--ftc-primary) !important;
      box-shadow: 0 12px 22px rgba(15,23,42,0.12) !important;
      cursor: pointer !important;
      transform: translateY(-50%) !important;
      transition: transform 0.2s, opacity 0.2s !important;
    }

    ${S} .ftc-slider-btn:hover {
      opacity: 0.9 !important;
      transform: translateY(-50%) scale(1.04) !important;
    }

    ${S} .ftc-prev { left: -20px !important; }
    ${S} .ftc-next { right: -20px !important; }

    ${S} .ftc-dots {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 22px !important;
      margin-top: 42px !important;
    }

    ${S} .ftc-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14,24,44,0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    ${S} .ftc-dot.ftc-on {
      background: var(--ftc-accent) !important;
    }

    ${S} .ftc-benefit-note {
      max-width: 970px !important;
      margin-top: 56px !important;
      font-size: 16px !important;
      line-height: 1.55 !important;
      color: rgba(14,24,44,0.8) !important;
    }

    @media (max-width: 1180px) {
      ${S} .ftc-layout { gap: 34px !important; }
      ${S} .ftc-rail { min-width: 240px !important; }
      ${S} .ftc-grid { column-gap: 36px !important; }
      ${S} .ftc-slide-card { flex-basis: calc((100% - 21px) / 2) !important; }
    }

    @media (max-width: 980px) {
      ${S} .ftc { padding: 2rem 0 !important; }
      ${S} .ftc-heading { margin-bottom: 2rem !important; }
      ${S} .ftc-layout { flex-direction: column !important; }
      ${S} .ftc-rail, ${S} .ftc-content { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .ftc-nav { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; margin-bottom: 24px !important; }
      ${S} .ftc-rail-note { max-width: none !important; }
      ${S} .ftc-panel { min-height: 0 !important; }
    }

    @media (max-width: 720px) {
      ${S} .ftc-inner { padding: 0 16px !important; }
      ${S} .ftc-heading { font-size: 34px !important; }
      ${S} .ftc-nav, ${S} .ftc-grid { grid-template-columns: 1fr !important; }
      ${S} .ftc-panel-intro { margin-bottom: 28px !important; }
      ${S} .ftc-info-card > p { padding-left: 0 !important; }
      ${S} .ftc-slide-card { flex-basis: 100% !important; }
      ${S} .ftc-slider-btn { display: none !important; }
      ${S} .ftc-dots { margin-top: 28px !important; }
    }
  `;

  var HTML = `
    <section class="ftc">
      <div class="ftc-inner">
        <h1 class="ftc-heading">FTC Safeguards Assessment</h1>
        <div class="ftc-layout">
          <aside class="ftc-rail">
            <ul class="ftc-nav" role="tablist">
              ${navMarkup()}
            </ul>
            <p class="ftc-rail-note">Our proven methodology ensures SMBs like yours protect their sensitive data, achieve compliance, and enhance long-term resilience.</p>
          </aside>
          <div class="ftc-content">
            ${whoPanel()}
            ${servicesPanel()}
            ${benefitsPanel()}
          </div>
        </div>
      </div>
    </section>
  `;

  function getVisibleCount() {
    if (window.matchMedia('(max-width: 720px)').matches) return 1;
    if (window.matchMedia('(max-width: 1180px)').matches) return 2;
    return 3;
  }

  function mountSlider(root) {
    var slider = root.querySelector('[data-slider]');
    if (!slider) return;

    var track = slider.querySelector('.ftc-slider-track');
    var cards = slider.querySelectorAll('.ftc-slide-card');
    var prev = slider.querySelector('.ftc-prev');
    var next = slider.querySelector('.ftc-next');
    var dotsWrap = root.querySelector('[data-dots]');
    var index = 0;
    var startX = 0;
    var deltaX = 0;

    function maxIndex() {
      return Math.max(0, cards.length - getVisibleCount());
    }

    function buildDots() {
      var pages = maxIndex() + 1;
      var html = '';
      for (var i = 0; i < pages; i += 1) {
        html += '<button class="ftc-dot' + (i === index ? ' ftc-on' : '') + '" type="button" aria-label="Go to slide group ' + (i + 1) + '" data-slide="' + i + '"></button>';
      }
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.ftc-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          index = parseInt(this.dataset.slide, 10);
          update();
        });
      });
    }

    function update() {
      var visible = getVisibleCount();
      var gap = 21;
      var viewportWidth = slider.querySelector('.ftc-slider-viewport').clientWidth;
      var cardWidth = (viewportWidth - gap * (visible - 1)) / visible;
      index = Math.max(0, Math.min(index, maxIndex()));
      track.style.setProperty('transform', 'translate3d(' + (-index * (cardWidth + gap)) + 'px, 0, 0)', 'important');

      dotsWrap.querySelectorAll('.ftc-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('ftc-on', dotIndex === index);
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

    return {
      buildDots: buildDots,
      update: update
    };
  }

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[ftc-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.ftc-nav li');
    var panels = root.querySelectorAll('.ftc-panel');
    var cur = 0;

    var sliderCtrl = mountSlider(root);

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('ftc-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('ftc-on');

        cur = idx;
        nav[cur].classList.add('ftc-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('ftc-on');

        if (sliderCtrl) {
          sliderCtrl.buildDots();
          sliderCtrl.update();
        }

        if (window.matchMedia('(max-width: 980px)').matches) {
          requestAnimationFrame(function () {
            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
