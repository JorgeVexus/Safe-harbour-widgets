(function () {
  'use strict';

  var ROOT_ID = 'shi-ai-opportunity-assessment-root';
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
  var KEY_BENEFITS_IMAGE = 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4971a58eb07b9ca56e85a7_tab%203%20key%20benefits.avif';

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

  var sideBullets = [
    'Optimized System Stability, Next-Level Security, Boosted Productivity, Cost-Effective',
    'Comprehensive Protection Against Ransomware, Phishing, and Cyber Threats',
    'Get Compliant With Industry Standard Regulations (SOC2, ISO, HITRUST, HIPAA, CMMC).'
  ];

  var whyCards = [
    {
      title: 'Pinpoint High-Impact AI Opportunities',
      body: 'Many organizations struggle to identify where AI can provide the most value. Our assessment narrows the focus to processes and workflows with maximum potential impact.'
    },
    {
      title: 'Accelerate Process Optimization',
      body: 'Quickly identify inefficiencies, reduce manual tasks, and lower costs by uncovering targeted automation opportunities within your business.'
    },
    {
      title: 'Maximize Your ROI on AI Investments',
      body: 'By prioritizing the most beneficial initiatives, you avoid wasting resources on low-value projects and instead focus on where AI will deliver the greatest operational and financial return.'
    },
    {
      title: 'Stay Competitive and Future-Focused',
      body: 'Amid rapid AI advancements, adopting a focused, ROI-driven AI strategy is key to staying ahead in your industry.'
    },
    {
      title: 'Empower Data-Driven Decisions',
      body: 'Unlock actionable insights and strategic recommendations that help business leaders confidently invest in AI-powered innovation.'
    }
  ];

  var sliderCards = [
    {
      title: 'Workflow Discovery & Mapping',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a496fb5eecbadd1d6d42b45_work.avif',
      bullets: [
        'Analyze key workflows across departments (HR, finance, sales, IT, production).',
        'Map inefficiencies, bottlenecks, and repetitive manual tasks limiting productivity.'
      ]
    },
    {
      title: 'Gap Analysis',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a496fb414f8d8d8998ad017_gap.avif',
      bullets: [
        'Evaluate existing systems, data availability, and workforce readiness to adopt AI.',
        'Identify gaps in technology, infrastructure, and team skills that may slow AI adoption.'
      ]
    },
    {
      title: 'AI Opportunity Evaluation',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a496fb4fac6fc4bb1c6ee78_ai%20opportunity.avif',
      bullets: [
        'Assess which workflows can benefit from AI to enhance efficiency, automation, or innovation.',
        'Prioritize opportunities based on ROI, scalability, and time-to-value.'
      ]
    },
    {
      title: 'AI Feasibility Scorecard',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a496fb4fac6fc4bb1c6ee74_ai%20feasibility.avif',
      bullets: [
        'Score workflows based on feasibility, complexity, cost, and expected results.',
        'Receive clear recommendations on priority initiatives aligned with business goals.'
      ]
    },
    {
      title: 'Custom AI Roadmap',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a496fb2915dbd91cc68d7a2_cistom%20ai%20raodmap.avif',
      bullets: [
        'Get a tailored roadmap with immediate, mid-term, and long-term AI opportunities.',
        'Set action plans for piloting and scaling AI solutions.'
      ]
    },
    {
      title: 'Executive Reporting & Insights',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a496fb241e5e917a8b6f579_executive%20reporting.avif',
      bullets: [
        'Present findings in an easy-to-understand executive summary tailored to leadership.',
        "Ensure alignment on next steps for the organization's AI strategy."
      ]
    },
    {
      title: 'Optional Post-Assessment Support',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a496fb2b221c183c377d008_optional%20post.avif',
      bullets: [
        'Access optional implementation, training, and custom AI development to bring recommendations to life.'
      ]
    }
  ];

  var benefitCards = [
    {
      title: 'Targeted ROI',
      body: 'Focus on initiatives with measurable, high-impact results to make AI investments worthwhile.'
    },
    {
      title: 'Informed Decision-Making',
      body: 'Leverage AI-driven insights to make smarter, faster decisions.'
    },
    {
      title: 'Competitive Edge',
      body: 'Stay ahead of industry peers by strategically implementing AI in high-priority areas.'
    },
    {
      title: 'Unmatched Efficiency',
      body: 'Reduce inefficiencies by automating repetitive processes, enabling employees to focus on high-value tasks.'
    },
    {
      title: 'Scalability & Growth',
      body: 'Optimize processes to scale operations without significantly increasing costs.'
    }
  ];

  function iconSpan(className, url) {
    return '<span class="' + className + '" style="--aia-icon: url(' + url + ')" aria-hidden="true"></span>';
  }

  function checkIcon(className) {
    return '<span class="' + className + '" style="--aia-check: url(' + CHECK + ')" aria-hidden="true"></span>';
  }

  function navMarkup() {
    return tabs.map(function (tab, index) {
      return (
        '<li class="' + (index === 0 ? 'aia-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' +
          iconSpan('aia-nav-icon', tab.icon) +
          '<span>' + tab.label + '</span>' +
        '</li>'
      );
    }).join('');
  }

  function sideBulletMarkup() {
    return sideBullets.map(function (item) {
      return (
        '<div class="aia-side-bullet">' +
          checkIcon('aia-side-check') +
          '<p>' + item + '</p>' +
        '</div>'
      );
    }).join('');
  }

  function smallInfoCard(card) {
    return (
      '<article class="aia-info-card">' +
        '<div class="aia-info-head">' +
          checkIcon('aia-card-check') +
          '<h3>' + card.title + '</h3>' +
        '</div>' +
        '<p>' + card.body + '</p>' +
      '</article>'
    );
  }

  function whyPanel() {
    return (
      '<div class="aia-panel aia-on" role="tabpanel">' +
        '<h2 class="aia-panel-title">WHY YOUR BUSINESS NEEDS THE AI OPPORTUNITY ASSESSMENT</h2>' +
        '<div class="aia-why-grid">' + whyCards.map(smallInfoCard).join('') + '</div>' +
      '</div>'
    );
  }

  function sliderCard(card) {
    var bullets = card.bullets.map(function (item) {
      return '<li>' + item + '</li>';
    }).join('');

    return (
      '<article class="aia-slide-card">' +
        '<div class="aia-slide-image"><img src="' + card.image + '" alt=""></div>' +
        '<div class="aia-slide-copy">' +
          '<div class="aia-slide-title">' + checkIcon('aia-card-check') + '<h3>' + card.title + '</h3></div>' +
          '<ul>' + bullets + '</ul>' +
        '</div>' +
      '</article>'
    );
  }

  function whatPanel() {
    return (
      '<div class="aia-panel aia-slider-panel" role="tabpanel">' +
        '<div class="aia-panel-intro">' +
          '<h2 class="aia-panel-title">WHAT THE AI OPPORTUNITY ASSESSMENT INCLUDES</h2>' +
          '<p>The AI Opportunity Assessment provides your organization with a clear framework to identify and prioritize AI-driven opportunities. Here is what is included:</p>' +
        '</div>' +
        '<div class="aia-slider" data-slider>' +
          '<button class="aia-slider-btn aia-prev" type="button" aria-label="Previous slide">&lsaquo;</button>' +
          '<div class="aia-slider-viewport">' +
            '<div class="aia-slider-track">' + sliderCards.map(sliderCard).join('') + '</div>' +
          '</div>' +
          '<button class="aia-slider-btn aia-next" type="button" aria-label="Next slide">&rsaquo;</button>' +
        '</div>' +
        '<div class="aia-dots" data-dots></div>' +
      '</div>'
    );
  }

  function benefitsPanel() {
    return (
      '<div class="aia-panel aia-benefits-panel" role="tabpanel">' +
        '<h2 class="aia-panel-title">KEY BENEFITS</h2>' +
        '<div class="aia-benefit-grid">' + benefitCards.map(smallInfoCard).join('') + '</div>' +
        '<div class="aia-benefits-image"><img src="' + KEY_BENEFITS_IMAGE + '" alt=""></div>' +
      '</div>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --aia-accent: ${ACCENT};
      --aia-primary: #0E182C;
      --aia-muted: #45556C;
      --aia-disabled: #94A3B8;
      display: block !important;
      width: 100% !important;
      color: var(--aia-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} ul { list-style: none !important; }
    ${S} button { font: inherit !important; }

    ${S} .aia {
      width: 100% !important;
      min-height: 780px !important;
      padding: clamp(42px, 5vw, 78px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .aia-inner {
      width: min(100%, 1400px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .aia-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(34px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--aia-primary) !important;
      margin-bottom: clamp(44px, 5vw, 70px) !important;
    }

    ${S} .aia-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: clamp(40px, 4vw, 70px) !important;
      width: 100% !important;
    }

    ${S} .aia-rail {
      flex: 0 0 25% !important;
      min-width: 260px !important;
      max-width: 356px !important;
    }

    ${S} .aia-content {
      flex: 1 1 75% !important;
      min-width: 0 !important;
      width: 100% !important;
    }

    ${S} .aia-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
      margin-bottom: 74px !important;
    }

    ${S} .aia-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--aia-disabled) !important;
      background: transparent !important;
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .aia-nav li:hover {
      color: var(--aia-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .aia-nav li.aia-on {
      color: var(--aia-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--aia-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .aia-nav-icon {
      width: 20px !important;
      height: 20px !important;
      flex: 0 0 20px !important;
      display: block !important;
      background: var(--aia-disabled) !important;
      -webkit-mask: var(--aia-icon) center / contain no-repeat !important;
      mask: var(--aia-icon) center / contain no-repeat !important;
      transition: background 0.2s !important;
    }

    ${S} .aia-nav li.aia-on .aia-nav-icon {
      background: var(--aia-accent) !important;
    }

    ${S} .aia-side-notes {
      display: flex !important;
      flex-direction: column !important;
      gap: 38px !important;
    }

    ${S} .aia-side-bullet {
      display: grid !important;
      grid-template-columns: 22px 1fr !important;
      gap: 18px !important;
      width: 100% !important;
      max-width: 310px !important;
    }

    ${S} .aia-side-bullet p {
      color: var(--aia-accent) !important;
      font-size: 12px !important;
      line-height: 1.42 !important;
      font-weight: 600 !important;
      letter-spacing: 1.3px !important;
    }

    ${S} .aia-side-check, ${S} .aia-card-check {
      display: block !important;
      background: var(--aia-accent) !important;
      -webkit-mask: var(--aia-check) center / contain no-repeat !important;
      mask: var(--aia-check) center / contain no-repeat !important;
      flex-shrink: 0 !important;
    }

    ${S} .aia-side-check {
      width: 22px !important;
      height: 22px !important;
      margin-top: 2px !important;
    }

    ${S} .aia-card-check {
      width: 22px !important;
      height: 22px !important;
    }

    ${S} .aia-panel {
      display: none !important;
      width: 100% !important;
      min-height: 610px !important;
      animation: aia-rise 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    ${S} .aia-panel.aia-on {
      display: block !important;
      width: 100% !important;
    }

    @keyframes aia-rise {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .aia-panel-title {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(24px, 2vw, 32px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--aia-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 44px !important;
    }

    ${S} .aia-why-grid {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      column-gap: 42px !important;
      row-gap: 36px !important;
      width: 100% !important;
    }

    ${S} .aia-benefit-grid {
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      column-gap: 42px !important;
      row-gap: 36px !important;
      margin-bottom: 42px !important;
      width: 100% !important;
    }

    ${S} .aia-info-card {
      width: 100% !important;
    }

    ${S} .aia-info-head {
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      min-height: 56px !important;
      padding: 0 24px !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--aia-accent) !important;
      border-radius: 0 10px 10px 0 !important;
      margin-bottom: 14px !important;
    }

    ${S} .aia-info-head h3 {
      font-size: 14px !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
      color: var(--aia-primary) !important;
    }

    ${S} .aia-info-card > p {
      padding-left: 64px !important;
      max-width: none !important;
      font-size: 14px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--aia-muted) !important;
    }

    ${S} .aia-panel-intro {
      margin-bottom: 52px !important;
    }

    ${S} .aia-panel-intro .aia-panel-title {
      margin-bottom: 14px !important;
    }

    ${S} .aia-panel-intro p {
      max-width: 980px !important;
      font-size: 16px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--aia-muted) !important;
    }

    ${S} .aia-slider {
      position: relative !important;
      width: 100% !important;
    }

    ${S} .aia-slider-viewport {
      width: 100% !important;
      overflow: hidden !important;
    }

    ${S} .aia-slider-track {
      display: flex !important;
      gap: 21px !important;
      transform: translate3d(0,0,0) !important;
      transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1) !important;
      will-change: transform !important;
    }

    ${S} .aia-slide-card {
      flex: 0 0 calc((100% - 42px) / 3) !important;
      min-width: 0 !important;
      border-radius: 10px !important;
      overflow: hidden !important;
      background: #F8FAFC !important;
    }

    ${S} .aia-slide-image {
      height: clamp(190px, 16vw, 270px) !important;
      overflow: hidden !important;
      background: #E2E8F0 !important;
    }

    ${S} .aia-slide-image img {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    ${S} .aia-slide-copy {
      min-height: 152px !important;
      background: #F8FAFC !important;
    }

    ${S} .aia-slide-title {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 26px !important;
      border-bottom: 3px solid var(--aia-accent) !important;
      background: #F8FAFC !important;
    }

    ${S} .aia-slide-title h3 {
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 700 !important;
      color: var(--aia-primary) !important;
    }

    ${S} .aia-slide-copy ul {
      padding: 14px 28px 24px 42px !important;
      list-style: disc !important;
      color: var(--aia-muted) !important;
    }

    ${S} .aia-slide-copy li {
      margin-bottom: 4px !important;
      font-size: 14px !important;
      line-height: 1.42 !important;
      color: var(--aia-muted) !important;
    }

    ${S} .aia-slider-btn {
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
      color: var(--aia-primary) !important;
      box-shadow: 0 12px 22px rgba(15,23,42,0.12) !important;
      cursor: pointer !important;
      transform: translateY(-50%) !important;
      transition: transform 0.2s, opacity 0.2s !important;
    }

    ${S} .aia-slider-btn:hover {
      opacity: 0.9 !important;
      transform: translateY(-50%) scale(1.04) !important;
    }

    ${S} .aia-prev { left: -20px !important; }
    ${S} .aia-next { right: -20px !important; }

    ${S} .aia-dots {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 22px !important;
      margin-top: 52px !important;
    }

    ${S} .aia-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14,24,44,0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    ${S} .aia-dot.aia-on {
      background: var(--aia-accent) !important;
    }

    ${S} .aia-benefits-image {
      position: relative !important;
      height: clamp(190px, 19vw, 300px) !important;
      width: 100% !important;
      border-radius: 12px !important;
      overflow: hidden !important;
      background: #0E182C !important;
    }

    ${S} .aia-benefits-image img {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    ${S} .aia-static-dots {
      margin-top: 40px !important;
    }

    @media (max-width: 1180px) {
      ${S} .aia-layout { gap: 34px !important; }
      ${S} .aia-rail { min-width: 240px !important; }
      ${S} .aia-benefit-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      ${S} .aia-slide-card { flex-basis: calc((100% - 21px) / 2) !important; }
    }

    @media (max-width: 980px) {
      ${S} .aia { padding: 2rem 0 !important; }
      ${S} .aia-heading { margin-bottom: 2rem !important; }
      ${S} .aia-layout { flex-direction: column !important; }
      ${S} .aia-rail, ${S} .aia-content { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .aia-nav { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; margin-bottom: 28px !important; }
      ${S} .aia-side-notes { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 18px !important; }
      ${S} .aia-side-bullet { max-width: none !important; }
      ${S} .aia-panel { min-height: 0 !important; }
      ${S} .aia-why-grid { column-gap: 24px !important; }
    }

    @media (max-width: 720px) {
      ${S} .aia-inner { padding: 0 16px !important; }
      ${S} .aia-nav, ${S} .aia-side-notes, ${S} .aia-why-grid, ${S} .aia-benefit-grid { grid-template-columns: 1fr !important; }
      ${S} .aia-panel-title { margin-bottom: 26px !important; }
      ${S} .aia-info-card > p { padding-left: 0 !important; }
      ${S} .aia-slide-card { flex-basis: 100% !important; }
      ${S} .aia-slider-btn { display: none !important; }
      ${S} .aia-dots { margin-top: 28px !important; }
      ${S} .aia-panel-intro { margin-bottom: 28px !important; }
    }
  `;

  var HTML = `
    <section class="aia">
      <div class="aia-inner">
        <h1 class="aia-heading">AI Opportunity Assessment</h1>

        <div class="aia-layout">
          <aside class="aia-rail">
            <ul class="aia-nav" role="tablist">
              ${navMarkup()}
            </ul>

            <div class="aia-side-notes">
              ${sideBulletMarkup()}
            </div>
          </aside>

          <div class="aia-content">
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

    var track = slider.querySelector('.aia-slider-track');
    var cards = slider.querySelectorAll('.aia-slide-card');
    var prev = slider.querySelector('.aia-prev');
    var next = slider.querySelector('.aia-next');
    var dotsWrap = root.querySelector('[data-dots]');
    var index = 0;

    function maxIndex() {
      return Math.max(0, cards.length - getVisibleCount());
    }

    function buildDots() {
      var pages = maxIndex() + 1;
      var html = '';
      for (var i = 0; i < pages; i += 1) {
        html += '<button class="aia-dot' + (i === index ? ' aia-on' : '') + '" type="button" aria-label="Go to slide group ' + (i + 1) + '" data-slide="' + i + '"></button>';
      }
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.aia-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          index = parseInt(this.dataset.slide, 10);
          update();
        });
      });
    }

    function update() {
      var visible = getVisibleCount();
      var gap = 21;
      var viewportWidth = slider.querySelector('.aia-slider-viewport').clientWidth;
      var cardWidth = (viewportWidth - gap * (visible - 1)) / visible;
      index = Math.max(0, Math.min(index, maxIndex()));
      track.style.setProperty('transform', 'translate3d(' + (-index * (cardWidth + gap)) + 'px, 0, 0)', 'important');

      dotsWrap.querySelectorAll('.aia-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('aia-on', dotIndex === index);
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

    return {
      buildDots: buildDots,
      update: update
    };
  }

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[aia-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.aia-nav li');
    var panels = root.querySelectorAll('.aia-panel');
    var cur = 0;

    var sliderCtrl = mountSlider(root);

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('aia-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('aia-on');

        cur = idx;
        nav[cur].classList.add('aia-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('aia-on');

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
