(function () {
  'use strict';

  var ROOT_ID = 'shi-smart-ai-accounting-root';
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
      title: 'Eliminate Inefficiencies in Financial Processes',
      body: 'Manual A/R, A/P, and reconciliation workflows often result in bottlenecks and high costs. Automation ensures timely, accurate execution of tasks.'
    },
    {
      title: 'Save Time and Reduce Costs',
      body: 'Automate labor-intensive processes, allowing teams to focus on strategic goals while significantly reducing costs associated with manual accounting tasks.'
    },
    {
      title: 'Protect Financial Accuracy',
      body: 'Reduce human error, mitigate fraud risks, and ensure audit-ready transparency in all records and transactions.'
    },
    {
      title: 'Ensure Compliance',
      body: 'Align financial operations with regulatory requirements through compliance gap alignment reporting that identifies and resolves areas of non-compliance before they become critical issues.'
    },
    {
      title: 'Detect and Prevent Fraud',
      body: 'Incorporate sophisticated fraud detection capabilities to recognize suspicious activity, flag anomalies, and protect your finances from unauthorized transactions and errors.'
    },
    {
      title: 'Adapt to Scale',
      body: 'Easily manage growing transaction volumes or introduce new workflows without adding headcount or technology disruptions.'
    }
  ];

  var sliderCards = [
    {
      title: 'Accounts Receivable (A/R) Automation',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bd239b1d38f729f1e6cd6_accounts.avif',
      bullets: [
        'Streamline invoicing workflows, automate payment reminders, and reduce Days Sales Outstanding (DSO).',
        'Automatically match incoming payments with invoices, ensuring accurate reconciliation and real-time updates.'
      ]
    },
    {
      title: 'Accounts Payable (A/P) Automation',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bd2380abb78dab8ad60c4_accounts%20payable.avif',
      bullets: [
        'Extract, validate, and process vendor invoices using AI-powered tools.',
        'Automate multi-level approval processes with customizable workflows that meet compliance standards.',
        'Identify duplicate, inconsistent, or fraudulent invoices instantly for secure payable processing.'
      ]
    },
    {
      title: 'Bank Account Reconciliation Automation',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bd23753829e182331eb18_bank%20account.avif',
      bullets: [
        'Automatically reconcile multiple bank accounts to ledger entries with advanced error detection and matching algorithms.',
        'Flag discrepancies in real-time, minimizing delays and reducing end-of-month reconciliation workloads by up to 70%.'
      ]
    },
    {
      title: 'Fraud Detection & Prevention',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bd23826a42775a71942b1_fraud%20detection%2001.avif',
      bullets: [
        'Monitor transactions in real time to detect unusual patterns or suspicious activity, such as duplicate payments, unauthorized charges, or irregularities in vendor invoicing.',
        'Protect sensitive financial data with AI-driven security features that prevent fraud while meeting compliance requirements.'
      ]
    },
    {
      title: 'Compliance Gap Alignment Reporting',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bd235cfc8d99e8fb7eb11_compliance%20gap.avif',
      bullets: [
        'Generate detailed compliance reports that highlight gaps between current workflows and evolving regulations, such as tax filings, reporting standards (e.g., IFRS or GAAP), or industry-specific requirements.',
        'Enable proactive adjustments to financial processes to stay audit-ready and avoid costly penalties.',
        'Track adherence to internal accounting policies and ensure governance in every automated task.'
      ]
    },
    {
      title: 'Performance Reporting & Analytics',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bd236ff72bfd3cc148c53_performance%20reporting.avif',
      bullets: [
        'Access real-time dashboards for A/R, A/P, cash flow status, compliance metrics, and reconciliation progress.',
        'Generate forecasts and insights based on historical transaction patterns to optimize cash flow and budgeting processes.'
      ]
    },
    {
      title: 'Custom Integration with Accounting Tools',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bd2359eca813857e30403_custom%20integration.avif',
      bullets: [
        'Seamlessly integrate with leading accounting systems like QuickBooks, Xero, Sage, NetSuite, or custom platforms.',
        'Use secure APIs for two-way data exchange, improving accuracy and efficiency across a fully connected financial ecosystem.'
      ]
    }
  ];

  var benefitCards = [
    {
      title: 'Ensure Compliance',
      body: 'Align financial operations with regulatory requirements through compliance gap alignment reporting that identifies and resolves areas of non-compliance before they become critical issues.'
    },
    {
      title: 'Protect Financial Accuracy',
      body: 'Reduce human error, mitigate fraud risks, and ensure audit-ready transparency in all records and transactions.'
    },
    {
      title: 'Adapt to Scale',
      body: 'Easily manage growing transaction volumes or introduce new workflows without adding headcount or technology disruptions.'
    }
  ];

  function iconSpan(className, url) {
    return '<span class="' + className + '" style="--saa-icon: url(' + url + ')" aria-hidden="true"></span>';
  }

  function checkIcon(className) {
    return '<span class="' + className + '" style="--saa-check: url(' + CHECK + ')" aria-hidden="true"></span>';
  }

  function navMarkup() {
    return tabs.map(function (tab, index) {
      return (
        '<li class="' + (index === 0 ? 'saa-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' +
          iconSpan('saa-nav-icon', tab.icon) +
          '<span>' + tab.label + '</span>' +
        '</li>'
      );
    }).join('');
  }

  function infoCard(card) {
    return (
      '<article class="saa-info-card">' +
        '<div class="saa-info-head">' +
          checkIcon('saa-card-check') +
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
      '<article class="saa-slide-card">' +
        '<div class="saa-slide-image"><img src="' + card.image + '" alt=""></div>' +
        '<div class="saa-slide-copy">' +
          '<div class="saa-slide-title">' + checkIcon('saa-card-check') + '<h3>' + card.title + '</h3></div>' +
          '<ul>' + bullets + '</ul>' +
        '</div>' +
      '</article>'
    );
  }

  function whyPanel() {
    return (
      '<div class="saa-panel saa-on" role="tabpanel">' +
        '<h2 class="saa-panel-title">WHY BUSINESSES NEED THIS SOLUTION...</h2>' +
        '<div class="saa-why-grid">' + whyCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  function whatPanel() {
    return (
      '<div class="saa-panel saa-slider-panel" role="tabpanel">' +
        '<h2 class="saa-panel-title">HUMAN-LIKE CONVERSATIONS</h2>' +
        '<div class="saa-slider" data-slider>' +
          '<button class="saa-slider-btn saa-prev" type="button" aria-label="Previous slide">&lsaquo;</button>' +
          '<div class="saa-slider-viewport">' +
            '<div class="saa-slider-track">' + sliderCards.map(sliderCard).join('') + '</div>' +
          '</div>' +
          '<button class="saa-slider-btn saa-next" type="button" aria-label="Next slide">&rsaquo;</button>' +
        '</div>' +
        '<div class="saa-dots" data-dots></div>' +
      '</div>'
    );
  }

  function benefitsPanel() {
    return (
      '<div class="saa-panel" role="tabpanel">' +
        '<h2 class="saa-panel-title">AI BOOKKEEPING & ACCOUNTING WORKFLOW AUTOMATION</h2>' +
        '<div class="saa-benefit-grid">' + benefitCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --saa-accent: ${ACCENT};
      --saa-primary: #0E182C;
      --saa-muted: #45556C;
      --saa-disabled: #94A3B8;
      display: block !important;
      width: 100% !important;
      color: var(--saa-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} ul { list-style: none !important; }
    ${S} button { font: inherit !important; }

    ${S} .saa {
      width: 100% !important;
      min-height: 780px !important;
      padding: clamp(42px, 5vw, 78px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .saa-inner {
      width: min(100%, 1536px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .saa-header {
      max-width: 910px !important;
      margin-bottom: clamp(52px, 5vw, 72px) !important;
    }

    ${S} .saa-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(34px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--saa-primary) !important;
      margin-bottom: 12px !important;
    }

    ${S} .saa-desc {
      max-width: 900px !important;
      font-size: 18px !important;
      line-height: 1.62 !important;
      font-weight: 400 !important;
      color: var(--saa-muted) !important;
    }

    ${S} .saa-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: clamp(40px, 4vw, 70px) !important;
      width: 100% !important;
    }

    ${S} .saa-rail {
      flex: 0 0 25% !important;
      min-width: 260px !important;
      max-width: 356px !important;
    }

    ${S} .saa-content {
      flex: 1 1 75% !important;
      min-width: 0 !important;
    }

    ${S} .saa-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
    }

    ${S} .saa-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--saa-disabled) !important;
      background: transparent !important;
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .saa-nav li:hover {
      color: var(--saa-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .saa-nav li.saa-on {
      color: var(--saa-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--saa-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .saa-nav-icon {
      width: 20px !important;
      height: 20px !important;
      flex: 0 0 20px !important;
      display: block !important;
      background: var(--saa-disabled) !important;
      -webkit-mask: var(--saa-icon) center / contain no-repeat !important;
      mask: var(--saa-icon) center / contain no-repeat !important;
      transition: background 0.2s !important;
    }

    ${S} .saa-nav li.saa-on .saa-nav-icon {
      background: var(--saa-accent) !important;
    }

    ${S} .saa-panel {
      display: none !important;
      min-height: 610px !important;
      animation: saa-rise 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    ${S} .saa-panel.saa-on {
      display: block !important;
    }

    @keyframes saa-rise {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .saa-panel-title {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(24px, 2vw, 32px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--saa-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 44px !important;
    }

    ${S} .saa-why-grid {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      column-gap: clamp(48px, 7vw, 170px) !important;
      row-gap: 36px !important;
      width: 100% !important;
    }

    ${S} .saa-benefit-grid {
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      column-gap: 42px !important;
      row-gap: 36px !important;
      width: 100% !important;
    }

    ${S} .saa-info-card {
      width: 100% !important;
    }

    ${S} .saa-info-head {
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      min-height: 56px !important;
      padding: 0 24px !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--saa-accent) !important;
      border-radius: 0 10px 10px 0 !important;
      margin-bottom: 14px !important;
    }

    ${S} .saa-info-head h3 {
      font-size: 14px !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
      color: var(--saa-primary) !important;
    }

    ${S} .saa-info-card > p {
      padding-left: 64px !important;
      max-width: 470px !important;
      font-size: 14px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--saa-muted) !important;
    }

    ${S} .saa-card-check {
      width: 22px !important;
      height: 22px !important;
      display: block !important;
      flex-shrink: 0 !important;
      background: var(--saa-accent) !important;
      -webkit-mask: var(--saa-check) center / contain no-repeat !important;
      mask: var(--saa-check) center / contain no-repeat !important;
    }

    ${S} .saa-slider {
      position: relative !important;
      width: 100% !important;
    }

    ${S} .saa-slider-viewport {
      width: 100% !important;
      overflow: hidden !important;
    }

    ${S} .saa-slider-track {
      display: flex !important;
      gap: 21px !important;
      transform: translate3d(0,0,0) !important;
      transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1) !important;
      will-change: transform !important;
    }

    ${S} .saa-slide-card {
      flex: 0 0 calc((100% - 42px) / 3) !important;
      min-width: 0 !important;
      border-radius: 10px !important;
      overflow: hidden !important;
      background: #F8FAFC !important;
    }

    ${S} .saa-slide-image {
      height: clamp(190px, 16vw, 270px) !important;
      overflow: hidden !important;
      background: #E2E8F0 !important;
    }

    ${S} .saa-slide-image img {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    ${S} .saa-slide-copy {
      min-height: 152px !important;
      background: #F8FAFC !important;
    }

    ${S} .saa-slide-title {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 26px !important;
      border-bottom: 3px solid var(--saa-accent) !important;
      background: #F8FAFC !important;
    }

    ${S} .saa-slide-title h3 {
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 700 !important;
      color: var(--saa-primary) !important;
    }

    ${S} .saa-slide-copy ul {
      padding: 14px 28px 24px 42px !important;
      list-style: disc !important;
      color: var(--saa-muted) !important;
    }

    ${S} .saa-slide-copy li {
      margin-bottom: 4px !important;
      font-size: 14px !important;
      line-height: 1.42 !important;
      color: var(--saa-muted) !important;
    }

    ${S} .saa-slider-btn {
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
      color: var(--saa-primary) !important;
      box-shadow: 0 12px 22px rgba(15,23,42,0.12) !important;
      cursor: pointer !important;
      transform: translateY(-50%) !important;
      transition: transform 0.2s, opacity 0.2s !important;
    }

    ${S} .saa-slider-btn:hover {
      opacity: 0.9 !important;
      transform: translateY(-50%) scale(1.04) !important;
    }

    ${S} .saa-prev { left: -20px !important; }
    ${S} .saa-next { right: -20px !important; }

    ${S} .saa-dots {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 22px !important;
      margin-top: 52px !important;
    }

    ${S} .saa-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14,24,44,0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    ${S} .saa-dot.saa-on {
      background: var(--saa-accent) !important;
    }

    @media (max-width: 1180px) {
      ${S} .saa-layout { gap: 34px !important; }
      ${S} .saa-rail { min-width: 240px !important; }
      ${S} .saa-slide-card { flex-basis: calc((100% - 21px) / 2) !important; }
      ${S} .saa-benefit-grid { grid-template-columns: 1fr !important; }
    }

    @media (max-width: 980px) {
      ${S} .saa { padding: 2rem 0 !important; }
      ${S} .saa-header { margin-bottom: 2rem !important; }
      ${S} .saa-layout { flex-direction: column !important; }
      ${S} .saa-rail, ${S} .saa-content { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .saa-nav { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
      ${S} .saa-panel { min-height: 0 !important; }
      ${S} .saa-why-grid { column-gap: 24px !important; }
    }

    @media (max-width: 720px) {
      ${S} .saa-inner { padding: 0 16px !important; }
      ${S} .saa-heading { font-size: 34px !important; }
      ${S} .saa-desc { font-size: 14px !important; }
      ${S} .saa-nav, ${S} .saa-why-grid, ${S} .saa-benefit-grid { grid-template-columns: 1fr !important; }
      ${S} .saa-panel-title { margin-bottom: 26px !important; }
      ${S} .saa-info-card > p { padding-left: 0 !important; }
      ${S} .saa-slide-card { flex-basis: 100% !important; }
      ${S} .saa-slider-btn { display: none !important; }
      ${S} .saa-dots { margin-top: 28px !important; }
    }
  `;

  var HTML = `
    <section class="saa">
      <div class="saa-inner">
        <header class="saa-header">
          <h1 class="saa-heading">Smart AI Conversations &amp; Accounting</h1>
          <p class="saa-desc">Elevate your financial management with a system that integrates intelligent automation directly into your core accounting workflows. Discover why your business needs to transition away from manual, error-prone processes, the specific features included in our AI-powered solution, and the key benefits of maintaining a secure, audit-ready, and highly efficient financial department.</p>
        </header>

        <div class="saa-layout">
          <aside class="saa-rail">
            <ul class="saa-nav" role="tablist">
              ${navMarkup()}
            </ul>
          </aside>

          <div class="saa-content">
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

    var track = slider.querySelector('.saa-slider-track');
    var cards = slider.querySelectorAll('.saa-slide-card');
    var prev = slider.querySelector('.saa-prev');
    var next = slider.querySelector('.saa-next');
    var dotsWrap = root.querySelector('[data-dots]');
    var index = 0;

    function maxIndex() {
      return Math.max(0, cards.length - getVisibleCount());
    }

    function buildDots() {
      var pages = maxIndex() + 1;
      var html = '';
      for (var i = 0; i < pages; i += 1) {
        html += '<button class="saa-dot' + (i === index ? ' saa-on' : '') + '" type="button" aria-label="Go to slide group ' + (i + 1) + '" data-slide="' + i + '"></button>';
      }
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.saa-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          index = parseInt(this.dataset.slide, 10);
          update();
        });
      });
    }

    function update() {
      var visible = getVisibleCount();
      var gap = 21;
      var viewportWidth = slider.querySelector('.saa-slider-viewport').clientWidth;
      var cardWidth = (viewportWidth - gap * (visible - 1)) / visible;
      index = Math.max(0, Math.min(index, maxIndex()));
      track.style.setProperty('transform', 'translate3d(' + (-index * (cardWidth + gap)) + 'px, 0, 0)', 'important');

      dotsWrap.querySelectorAll('.saa-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('saa-on', dotIndex === index);
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
      console.warn('[saa-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.saa-nav li');
    var panels = root.querySelectorAll('.saa-panel');
    var cur = 0;

    mountSlider(root);

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('saa-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('saa-on');

        cur = idx;
        nav[cur].classList.add('saa-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('saa-on');

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
