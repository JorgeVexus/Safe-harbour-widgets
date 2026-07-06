(function () {
  'use strict';

  var ROOT_ID = 'shi-ai-agent-cx-phone-service-root';
  var S = '#' + ROOT_ID;

  function injectLink(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
  }

  injectLink('https://fonts.googleapis.com/css2?family=Play:wght@700&family=Poppins:wght@400;500;600;700&display=swap');

  var ACCENT = '#2EC8A1';
  var CHECK = 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a0782574282a2b66b9aec00_Icon.svg';

  var tabs = [
    {
      label: 'Why Your Business Need It',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba64480068d7c8f4d88_strategic%20ai%20consulting%20icon.svg'
    },
    {
      label: 'What Includes',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba4585299f4854b10db_Ai%20workflow%20assesment%20icon.svg'
    },
    {
      label: 'Key Benefits',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4949b46a094d32e0e10552_key%20bennefits%20reliable.svg'
    }
  ];

  var whyCards = [
    {
      title: 'Uncertainty in AI Development',
      body: 'Misaligned goals, unclear workflows, and lack of actionable insights delay projects and waste resources.'
    },
    {
      title: 'Missed Opportunities',
      body: 'Inefficiencies or redundancies in workflows prevent businesses from realizing the full potential of AI.'
    },
    {
      title: 'Resource Overuse',
      body: 'Without accurate workflow documentation, teams spend more time identifying problems instead of solving them.'
    }
  ];

  var sliderCards = [
    {
      title: 'Advanced Natural Language Understanding (NLU)',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf78479de9a93680bec5d_advanced.avif',
      bullets: [
        'Interacts with customers naturally, identifying intent and context with precision.'
      ]
    },
    {
      title: 'Multi-Language Capabilities',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf783e19b0d9e1147f56f_multi%20language.avif',
      bullets: [
        'Communicates fluently in multiple languages to serve diverse customer bases.'
      ]
    },
    {
      title: 'Sentiment Analysis',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf782132d235f6832e049_sentiment.avif',
      bullets: [
        'Recognizes customer emotions and tailors responses to create empathetic, engaging interactions.'
      ]
    },
    {
      title: 'Fraud Detection & Prevention',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf782c52f0e9d13ca008c_fraud.avif',
      bullets: [
        'Monitor transactions in real time to detect unusual patterns or suspicious activity, such as duplicate payments, unauthorized charges, or irregularities in vendor invoicing.',
        'Protect sensitive financial data with AI-driven security features that prevent fraud while meeting compliance requirements.'
      ]
    },
    {
      title: 'Compliance Gap Alignment Reporting',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf7800949cff253741cc2_compliance.avif',
      bullets: [
        'Generate detailed compliance reports that highlight gaps between current workflows and evolving regulations, such as tax filings, reporting standards, or industry-specific requirements.',
        'Enable proactive adjustments to financial processes to stay audit-ready and avoid costly penalties.',
        'Track adherence to internal accounting policies and ensure governance in every automated task.'
      ]
    },
    {
      title: 'Performance Reporting & Analytics',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf7801c9bb0f1d7f5fadc_performance.avif',
      bullets: [
        'Access real-time dashboards for A/R, A/P, cash flow status, compliance metrics, and reconciliation progress.',
        'Generate forecasts and insights based on historical transaction patterns to optimize cash flow and budgeting processes.'
      ]
    },
    {
      title: 'Custom Integration with Accounting Tools',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf781d783ed1a1e0eb758_custom.avif',
      bullets: [
        'Seamlessly integrate with leading accounting systems like QuickBooks, Xero, Sage, NetSuite, or custom platforms.',
        'Use secure APIs for two-way data exchange, improving accuracy and efficiency across a fully connected financial ecosystem.'
      ]
    }
  ];

  var benefitCards = [
    {
      title: 'Receptionist Duties',
      body: 'Greeting callers, collecting information, and routing calls to the right team or department.'
    },
    {
      title: 'Appointment Scheduling',
      body: 'Setting, managing, and rescheduling appointments directly in your system.'
    },
    {
      title: 'Upselling and Cross-Selling',
      body: 'Leveraging customer interaction to recommend additional services or products.'
    }
  ];

  function iconSpan(className, url) {
    return '<span class="' + className + '" style="--cxp-icon: url(' + url + ')" aria-hidden="true"></span>';
  }

  function checkIcon(className) {
    return '<span class="' + className + '" style="--cxp-check: url(' + CHECK + ')" aria-hidden="true"></span>';
  }

  function navMarkup() {
    return tabs.map(function (tab, index) {
      return (
        '<li class="' + (index === 0 ? 'cxp-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' +
          iconSpan('cxp-nav-icon', tab.icon) +
          '<span>' + tab.label + '</span>' +
        '</li>'
      );
    }).join('');
  }

  function infoCard(card) {
    return (
      '<article class="cxp-info-card">' +
        '<div class="cxp-info-head">' +
          checkIcon('cxp-card-check') +
          '<h3>' + card.title + '</h3>' +
        '</div>' +
        '<p>' + card.body + '</p>' +
      '</article>'
    );
  }

  function sliderCard(card) {
    var bullets = card.bullets.map(function (item) {
      return '<li>' + item + '</li>';
    }).join('');

    return (
      '<article class="cxp-slide-card">' +
        '<div class="cxp-slide-image"><img src="' + card.image + '" alt=""></div>' +
        '<div class="cxp-slide-copy">' +
          '<div class="cxp-slide-title">' + checkIcon('cxp-card-check') + '<h3>' + card.title + '</h3></div>' +
          '<ul>' + bullets + '</ul>' +
        '</div>' +
      '</article>'
    );
  }

  function whyPanel() {
    return (
      '<div class="cxp-panel cxp-on" role="tabpanel">' +
        '<div class="cxp-panel-intro">' +
          '<h2 class="cxp-panel-title">WHY BUSINESSES NEED AI AGENT CX PHONE SERVICE</h2>' +
          '<p>Deliver consistent, human-like conversations that make customers feel heard, understood, and valued, 24/7.</p>' +
        '</div>' +
        '<div class="cxp-benefit-grid">' + whyCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  function whatPanel() {
    return (
      '<div class="cxp-panel cxp-slider-panel" role="tabpanel">' +
        '<h2 class="cxp-panel-title">HUMAN-LIKE CONVERSATIONS</h2>' +
        '<div class="cxp-slider" data-slider>' +
          '<button class="cxp-slider-btn cxp-prev" type="button" aria-label="Previous slide">&lsaquo;</button>' +
          '<div class="cxp-slider-viewport">' +
            '<div class="cxp-slider-track">' + sliderCards.map(sliderCard).join('') + '</div>' +
          '</div>' +
          '<button class="cxp-slider-btn cxp-next" type="button" aria-label="Next slide">&rsaquo;</button>' +
        '</div>' +
        '<div class="cxp-dots" data-dots></div>' +
      '</div>'
    );
  }

  function benefitsPanel() {
    return (
      '<div class="cxp-panel" role="tabpanel">' +
        '<div class="cxp-panel-intro">' +
          '<h2 class="cxp-panel-title">CUSTOMIZABLE WORKFLOWS</h2>' +
          '<p>Supports tailored workflows for industries and tasks, including:</p>' +
        '</div>' +
        '<div class="cxp-benefit-grid">' + benefitCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --cxp-accent: ${ACCENT};
      --cxp-primary: #0E182C;
      --cxp-muted: #45556C;
      --cxp-disabled: #94A3B8;
      display: block !important;
      width: 100% !important;
      color: var(--cxp-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} ul { list-style: none !important; }
    ${S} button { font: inherit !important; }

    ${S} .cxp {
      width: 100% !important;
      min-height: 760px !important;
      padding: clamp(42px, 5vw, 78px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .cxp-inner {
      width: min(100%, 1536px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .cxp-header {
      max-width: 910px !important;
      margin-bottom: clamp(52px, 5vw, 72px) !important;
    }

    ${S} .cxp-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(34px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--cxp-primary) !important;
      margin-bottom: 12px !important;
    }

    ${S} .cxp-desc {
      max-width: 860px !important;
      font-size: 18px !important;
      line-height: 1.62 !important;
      font-weight: 400 !important;
      color: var(--cxp-muted) !important;
    }

    ${S} .cxp-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: clamp(40px, 4vw, 70px) !important;
      width: 100% !important;
    }

    ${S} .cxp-rail {
      flex: 0 0 25% !important;
      min-width: 260px !important;
      max-width: 356px !important;
    }

    ${S} .cxp-content {
      flex: 1 1 75% !important;
      min-width: 0 !important;
    }

    ${S} .cxp-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
    }

    ${S} .cxp-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--cxp-disabled) !important;
      background: transparent !important;
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .cxp-nav li:hover {
      color: var(--cxp-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .cxp-nav li.cxp-on {
      color: var(--cxp-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--cxp-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .cxp-nav-icon {
      width: 20px !important;
      height: 20px !important;
      flex: 0 0 20px !important;
      display: block !important;
      background: var(--cxp-disabled) !important;
      -webkit-mask: var(--cxp-icon) center / contain no-repeat !important;
      mask: var(--cxp-icon) center / contain no-repeat !important;
      transition: background 0.2s !important;
    }

    ${S} .cxp-nav li.cxp-on .cxp-nav-icon {
      background: var(--cxp-accent) !important;
    }

    ${S} .cxp-panel {
      display: none !important;
      min-height: 560px !important;
      animation: cxp-rise 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    ${S} .cxp-panel.cxp-on {
      display: block !important;
    }

    @keyframes cxp-rise {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .cxp-panel-title {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(24px, 2vw, 32px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--cxp-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 32px !important;
    }

    ${S} .cxp-panel-intro {
      margin-bottom: 34px !important;
    }

    ${S} .cxp-panel-intro .cxp-panel-title {
      margin-bottom: 14px !important;
    }

    ${S} .cxp-panel-intro p {
      max-width: 980px !important;
      font-size: 16px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--cxp-muted) !important;
    }

    ${S} .cxp-benefit-grid {
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      column-gap: 42px !important;
      row-gap: 34px !important;
      width: 100% !important;
    }

    ${S} .cxp-info-card {
      width: 100% !important;
    }

    ${S} .cxp-info-head {
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      min-height: 56px !important;
      padding: 0 24px !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--cxp-accent) !important;
      border-radius: 0 10px 10px 0 !important;
      margin-bottom: 14px !important;
    }

    ${S} .cxp-info-head h3 {
      font-size: 14px !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
      color: var(--cxp-primary) !important;
    }

    ${S} .cxp-info-card > p {
      padding-left: 64px !important;
      max-width: 370px !important;
      font-size: 14px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--cxp-muted) !important;
    }

    ${S} .cxp-card-check {
      width: 22px !important;
      height: 22px !important;
      display: block !important;
      flex-shrink: 0 !important;
      background: var(--cxp-accent) !important;
      -webkit-mask: var(--cxp-check) center / contain no-repeat !important;
      mask: var(--cxp-check) center / contain no-repeat !important;
    }

    ${S} .cxp-slider {
      position: relative !important;
      width: 100% !important;
    }

    ${S} .cxp-slider-viewport {
      width: 100% !important;
      overflow: hidden !important;
    }

    ${S} .cxp-slider-track {
      display: flex !important;
      gap: 21px !important;
      transform: translate3d(0,0,0) !important;
      transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1) !important;
      will-change: transform !important;
    }

    ${S} .cxp-slide-card {
      flex: 0 0 calc((100% - 42px) / 3) !important;
      min-width: 0 !important;
      border-radius: 10px !important;
      overflow: hidden !important;
      background: #F8FAFC !important;
    }

    ${S} .cxp-slide-image {
      height: clamp(190px, 16vw, 270px) !important;
      overflow: hidden !important;
      background: #E2E8F0 !important;
    }

    ${S} .cxp-slide-image img {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    ${S} .cxp-slide-copy {
      min-height: 152px !important;
      background: #F8FAFC !important;
    }

    ${S} .cxp-slide-title {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-bottom: 3px solid var(--cxp-accent) !important;
      background: #F8FAFC !important;
    }

    ${S} .cxp-slide-title h3 {
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 700 !important;
      color: var(--cxp-primary) !important;
    }

    ${S} .cxp-slide-copy ul {
      padding: 14px 28px 24px 42px !important;
      list-style: disc !important;
      color: var(--cxp-muted) !important;
    }

    ${S} .cxp-slide-copy li {
      margin-bottom: 4px !important;
      font-size: 14px !important;
      line-height: 1.42 !important;
      color: var(--cxp-muted) !important;
    }

    ${S} .cxp-slider-btn {
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
      color: var(--cxp-primary) !important;
      box-shadow: 0 12px 22px rgba(15,23,42,0.12) !important;
      cursor: pointer !important;
      transform: translateY(-50%) !important;
      transition: transform 0.2s, opacity 0.2s !important;
    }

    ${S} .cxp-slider-btn:hover {
      opacity: 0.9 !important;
      transform: translateY(-50%) scale(1.04) !important;
    }

    ${S} .cxp-prev { left: -20px !important; }
    ${S} .cxp-next { right: -20px !important; }

    ${S} .cxp-dots {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 22px !important;
      margin-top: 52px !important;
    }

    ${S} .cxp-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14,24,44,0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    ${S} .cxp-dot.cxp-on {
      background: var(--cxp-accent) !important;
    }

    @media (max-width: 1180px) {
      ${S} .cxp-layout { gap: 34px !important; }
      ${S} .cxp-rail { min-width: 240px !important; }
      ${S} .cxp-slide-card { flex-basis: calc((100% - 21px) / 2) !important; }
      ${S} .cxp-benefit-grid { grid-template-columns: 1fr !important; }
    }

    @media (max-width: 980px) {
      ${S} .cxp { padding: 2rem 0 !important; }
      ${S} .cxp-header { margin-bottom: 2rem !important; }
      ${S} .cxp-layout { flex-direction: column !important; }
      ${S} .cxp-rail, ${S} .cxp-content { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .cxp-nav { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
      ${S} .cxp-panel { min-height: 0 !important; }
    }

    @media (max-width: 720px) {
      ${S} .cxp-inner { padding: 0 16px !important; }
      ${S} .cxp-heading { font-size: 34px !important; }
      ${S} .cxp-desc { font-size: 14px !important; }
      ${S} .cxp-nav, ${S} .cxp-benefit-grid { grid-template-columns: 1fr !important; }
      ${S} .cxp-panel-title { margin-bottom: 26px !important; }
      ${S} .cxp-info-card > p { padding-left: 0 !important; }
      ${S} .cxp-slide-card { flex-basis: 100% !important; }
      ${S} .cxp-slider-btn { display: none !important; }
      ${S} .cxp-dots { margin-top: 28px !important; }
    }
  `;

  var HTML = `
    <section class="cxp">
      <div class="cxp-inner">
        <header class="cxp-header">
          <h1 class="cxp-heading">Smart AI Conversations &amp; Accounting</h1>
          <p class="cxp-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </header>

        <div class="cxp-layout">
          <aside class="cxp-rail">
            <ul class="cxp-nav" role="tablist">
              ${navMarkup()}
            </ul>
          </aside>

          <div class="cxp-content">
            ${whyPanel()}
            ${whatPanel()}
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

    var track = slider.querySelector('.cxp-slider-track');
    var cards = slider.querySelectorAll('.cxp-slide-card');
    var prev = slider.querySelector('.cxp-prev');
    var next = slider.querySelector('.cxp-next');
    var dotsWrap = root.querySelector('[data-dots]');
    var index = 0;

    function maxIndex() {
      return Math.max(0, cards.length - getVisibleCount());
    }

    function buildDots() {
      var pages = maxIndex() + 1;
      var html = '';
      for (var i = 0; i < pages; i += 1) {
        html += '<button class="cxp-dot' + (i === index ? ' cxp-on' : '') + '" type="button" aria-label="Go to slide group ' + (i + 1) + '" data-slide="' + i + '"></button>';
      }
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.cxp-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          index = parseInt(this.dataset.slide, 10);
          update();
        });
      });
    }

    function update() {
      var visible = getVisibleCount();
      var gap = 21;
      var viewportWidth = slider.querySelector('.cxp-slider-viewport').clientWidth;
      var cardWidth = (viewportWidth - gap * (visible - 1)) / visible;
      index = Math.max(0, Math.min(index, maxIndex()));
      track.style.setProperty('transform', 'translate3d(' + (-index * (cardWidth + gap)) + 'px, 0, 0)', 'important');

      dotsWrap.querySelectorAll('.cxp-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('cxp-on', dotIndex === index);
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
      console.warn('[cxp-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.cxp-nav li');
    var panels = root.querySelectorAll('.cxp-panel');
    var cur = 0;

    mountSlider(root);

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('cxp-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('cxp-on');

        cur = idx;
        nav[cur].classList.add('cxp-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('cxp-on');

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
