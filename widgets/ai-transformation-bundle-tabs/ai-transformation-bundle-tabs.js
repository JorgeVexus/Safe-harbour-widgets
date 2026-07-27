(function () {
  'use strict';

  var ROOT_ID = 'shi-ai-transformation-bundle-root';
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
      title: 'Holistic Approach to AI Transformation',
      body: "Combining these two assessments delivers a seamless roadmap from preparation to execution by evaluating an organization's capabilities while pinning down high-impact opportunities."
    },
    {
      title: 'Cost Efficiency',
      body: 'By bundling, organizations save on consulting fees versus purchasing the services independently, making it a more budget-friendly option for businesses investing in AI.'
    },
    {
      title: 'Reduced Complexity',
      body: 'Many organizations struggle to navigate AI implementation due to the fragmented nature of readiness and opportunity analysis. By bundling these services, we simplify the process into a single, cohesive strategy.'
    },
    {
      title: 'Scalability and Focus Combined',
      body: 'The Future-Ready Assessment ensures your organization has the infrastructure, strategy, and workforce to scale AI adoption, while the Opportunity Assessment pinpoints the most impactful starting points for immediate gains.'
    },
    {
      title: 'Faster ROI',
      body: 'While the Future-Ready Assessment addresses scalability and team readiness, the Opportunity Assessment identifies the workflows that deliver the most value. Together, they create a direct pathway to ROI on AI investments.'
    },
    {
      title: 'Accelerated Time-to-Value',
      body: 'With both assessments delivered as part of one engagement, businesses can move from analysis to action in less time, achieving meaningful results faster than with separate services.'
    }
  ];

  var includeCards = [
    {
      title: 'AI Future Ready Assessment (Readiness & Scalability)',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a49831287e679d5401c388d_ai%20future.avif',
      bullets: [
        'Evaluate readiness. Examine infrastructure, data capabilities, and workforce readiness for AI and automation adoption.',
        'Identify gaps. Pinpoint bottlenecks, resource limitations, or scalability challenges that could hinder successful AI transformation.',
        'Scalability strategy. Deliver a roadmap for achieving AI readiness and ensuring future scalability while aligning with broader strategic goals.',
        'Trend alignment. Ensure your AI strategy is built to stay ahead of emerging trends and technological advancements.'
      ]
    },
    {
      title: 'AI Opportunity Assessment (Targeting Immediate Wins)',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a498312be53daa1c7942eaa_ai%20opportunitty.avif',
      bullets: [
        'Target impact areas. Identify specific workflows, processes, or operations where AI can drive immediate and significant return on investment.',
        'Prioritize opportunities. Evaluate feasibility, potential ROI, and organizational alignment for AI initiatives, ensuring the highest-value opportunities are prioritized.',
        'Actionable plans. Develop tailored action plans for implementing AI in identified areas, targeting both short-term wins and sustained growth.',
        'Workflow automation. Highlight key operational improvements, such as automating repetitive tasks, enhancing customer experiences, or using AI insights to improve decision-making.'
      ]
    },
    {
      title: 'Unified Executive Report (Full Strategic Roadmap)',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a498312088ffb1e446f2de9_unified.avif',
      bullets: [
        'Comprehensive findings. Consolidate insights from both assessments into a single, executive-ready report that guides strategic decision-making.',
        'Clear recommendations. Showcase actionable next steps for immediate execution and long-term AI adoption.',
        'Readiness + opportunity alignment. Create a cohesive roadmap that ties readiness gaps to high-impact opportunities, ensuring efficient and effective AI transformation.'
      ]
    },
    {
      title: 'AI Feasibility Scorecard',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a6776e014c2aede17f8e948_ai%20scorecard.webp',
      bullets: [
        'Score workflows based on feasibility, complexity, cost, and expected results.',
        'Receive clear recommendations on priority initiatives aligned with business goals.'
      ]
    },
    {
      title: 'Custom AI Roadmap',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a6776df3adb393cd3c8ad1e_custom%20ai%20road.webp',
      bullets: [
        'Get a tailored roadmap with immediate, mid-term, and long-term AI opportunities.',
        'Set action plans for piloting and scaling AI solutions.'
      ]
    },
    {
      title: 'Executive Reporting & Insights',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a6776e1022ac1891de9f1d2_executive%20reporting.webp',
      bullets: [
        'Present findings in an easy-to-understand executive summary tailored to leadership.',
        "Ensure alignment on next steps for the organization's AI strategy."
      ]
    },
    {
      title: 'Optional Post-Assessment Support',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a6776e0b49070922e900554_optional%20assessment.webp',
      bullets: [
        'Access optional implementation, training, and custom AI development to bring recommendations to life.'
      ]
    }
  ];

  var benefitCards = [
    {
      title: 'Save Time and Resources',
      body: 'Combining these assessments reduces redundancy and ensures faster delivery of actionable insights, so businesses can implement AI solutions more quickly.'
    },
    {
      title: 'Maximized Value for Investment',
      body: 'Save up to 20% versus standalone assessments while accelerating results and empowering data-driven decisions.'
    },
    {
      title: 'Targeted ROI',
      body: 'Deliver tangible results by focusing on priority workflows and aligning them with organizational readiness for scalable AI deployment.'
    },
    {
      title: 'Future-proof Your Business',
      body: 'Build a robust, scalable foundation to adopt AI strategically and stay competitive in an evolving marketplace.'
    },
    {
      title: 'Simplified AI Adoption',
      body: 'Provide a single, comprehensive roadmap for AI transformation, streamlining internal processes and strategies for seamless adoption.'
    },
    {
      title: 'Continuous Optimization Support',
      body: 'Ensure long-term success with post-deployment AI support, performance reviews, and refinement cycles. Adapt quickly as workflows evolve, technology improves, or new business goals emerge.'
    }
  ];

  function iconSpan(className, url) {
    return '<span class="' + className + '" style="--atb-icon: url(' + url + ')" aria-hidden="true"></span>';
  }

  function checkIcon(className) {
    return '<span class="' + className + '" style="--atb-check: url(' + CHECK + ')" aria-hidden="true"></span>';
  }

  function navMarkup() {
    return tabs.map(function (tab, index) {
      return (
        '<li class="' + (index === 0 ? 'atb-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' +
          iconSpan('atb-nav-icon', tab.icon) +
          '<span>' + tab.label + '</span>' +
        '</li>'
      );
    }).join('');
  }

  function infoCard(card) {
    return (
      '<article class="atb-info-card">' +
        '<div class="atb-info-head">' +
          checkIcon('atb-check') +
          '<h3>' + card.title + '</h3>' +
        '</div>' +
        '<p>' + card.body + '</p>' +
      '</article>'
    );
  }

  function includeCard(card) {
    var bullets = card.bullets.map(function (item) {
      return '<li>' + item + '</li>';
    }).join('');

    return (
      '<article class="atb-include-card">' +
        '<div class="atb-include-image"><img src="' + card.image + '" alt=""></div>' +
        '<div class="atb-include-copy">' +
          '<div class="atb-include-title">' + checkIcon('atb-check') + '<h3>' + card.title + '</h3></div>' +
          '<ul>' + bullets + '</ul>' +
        '</div>' +
      '</article>'
    );
  }

  function whyPanel() {
    return (
      '<div class="atb-panel atb-on" role="tabpanel">' +
        '<div class="atb-panel-intro atb-panel-intro-compact">' +
          '<h2 class="atb-panel-title">WHY BUNDLE THESE ASSESSMENTS?</h2>' +
          '<p>By bundling these services together, organizations can save up to 20% off the cost of purchasing the services individually. Additionally, this streamlined approach enables faster execution and reduces time-to-value, allowing businesses to move seamlessly from planning to implementation.</p>' +
        '</div>' +
        '<div class="atb-two-grid">' + whyCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  function whatPanel() {
    return (
      '<div class="atb-panel" role="tabpanel">' +
        '<div class="atb-panel-intro">' +
          '<h2 class="atb-panel-title">WHAT&#39;S INCLUDED IN THE AI TRANSFORMATION BUNDLE?</h2>' +
          '<p>The AI Opportunity Assessment provides your organization with a clear framework to identify and prioritize AI-driven opportunities. Here is what is included:</p>' +
        '</div>' +
        '<div class="atb-slider" data-slider>' +
          '<button class="atb-slider-btn atb-prev" type="button" aria-label="Previous slide">&lsaquo;</button>' +
          '<div class="atb-slider-viewport">' +
            '<div class="atb-slider-track">' + includeCards.map(includeCard).join('') + '</div>' +
          '</div>' +
          '<button class="atb-slider-btn atb-next" type="button" aria-label="Next slide">&rsaquo;</button>' +
        '</div>' +
        '<div class="atb-dots" data-dots></div>' +
      '</div>'
    );
  }

  function benefitsPanel() {
    return (
      '<div class="atb-panel" role="tabpanel">' +
        '<h2 class="atb-panel-title">BENEFITS OF CHOOSING THE AI TRANSFORMATION BUNDLE</h2>' +
        '<div class="atb-two-grid">' + benefitCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --atb-accent: ${ACCENT};
      --atb-primary: #0E182C;
      --atb-muted: #45556C;
      --atb-disabled: #94A3B8;
      display: block !important;
      width: 100% !important;
      color: var(--atb-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} ul { list-style: none !important; }
    ${S} button { font: inherit !important; }

    ${S} .atb {
      width: 100% !important;
      min-height: 820px !important;
      padding: clamp(46px, 5vw, 78px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .atb-inner {
      width: min(100%, 1400px) !important;
      min-width: min(100%, 1400px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
      box-sizing: border-box !important;
    }

    ${S} .atb-header {
      max-width: 870px !important;
      margin-bottom: clamp(56px, 5vw, 78px) !important;
    }

    ${S} .atb-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(34px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--atb-primary) !important;
      margin-bottom: 12px !important;
    }

    ${S} .atb-desc {
      max-width: 823px !important;
      font-size: 18px !important;
      line-height: 1.62 !important;
      font-weight: 400 !important;
      color: var(--atb-muted) !important;
    }

    ${S} .atb-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: 50px !important;
      width: 100% !important;
      min-width: 100% !important;
      box-sizing: border-box !important;
    }

    ${S} .atb-rail {
      flex: 0 0 300px !important;
      width: 300px !important;
      min-width: 300px !important;
      max-width: 300px !important;
    }

    ${S} .atb-content {
      flex: 1 1 0% !important;
      width: calc(100% - 350px) !important;
      min-width: 0 !important;
    }

    ${S} .atb-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
    }

    ${S} .atb-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--atb-disabled) !important;
      background: transparent !important;
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .atb-nav li:hover {
      color: var(--atb-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .atb-nav li.atb-on {
      color: var(--atb-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--atb-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .atb-nav-icon {
      width: 20px !important;
      height: 20px !important;
      flex: 0 0 20px !important;
      display: block !important;
      background: var(--atb-disabled) !important;
      -webkit-mask: var(--atb-icon) center / contain no-repeat !important;
      mask: var(--atb-icon) center / contain no-repeat !important;
      transition: background 0.2s !important;
    }

    ${S} .atb-nav li.atb-on .atb-nav-icon {
      background: var(--atb-accent) !important;
    }

    ${S} .atb-panel {
      display: none !important;
      width: 100% !important;
      min-height: 640px !important;
      animation: atb-rise 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    ${S} .atb-panel.atb-on {
      display: block !important;
      width: 100% !important;
    }

    @keyframes atb-rise {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .atb-panel-title {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(24px, 2vw, 32px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--atb-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 44px !important;
    }

    ${S} .atb-panel-intro {
      margin-bottom: 24px !important;
    }

    ${S} .atb-panel-intro .atb-panel-title {
      margin-bottom: 14px !important;
    }

    ${S} .atb-panel-intro p {
      max-width: 970px !important;
      font-size: 16px !important;
      line-height: 1.55 !important;
      color: rgba(14,24,44,0.8) !important;
    }

    ${S} .atb-panel-intro-compact {
      margin-bottom: 32px !important;
    }

    ${S} .atb-two-grid {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      column-gap: 42px !important;
      row-gap: 36px !important;
      width: 100% !important;
    }

    ${S} .atb-info-card {
      width: 100% !important;
    }

    ${S} .atb-info-head {
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      min-height: 56px !important;
      padding: 0 24px !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--atb-accent) !important;
      border-radius: 0 10px 10px 0 !important;
      margin-bottom: 14px !important;
    }

    ${S} .atb-info-head h3 {
      font-size: 14px !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
      color: var(--atb-primary) !important;
    }

    ${S} .atb-info-card > p {
      padding-left: 64px !important;
      max-width: none !important;
      font-size: 14px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--atb-muted) !important;
    }

    ${S} .atb-check {
      width: 22px !important;
      height: 22px !important;
      display: block !important;
      flex-shrink: 0 !important;
      background: var(--atb-accent) !important;
      -webkit-mask: var(--atb-check) center / contain no-repeat !important;
      mask: var(--atb-check) center / contain no-repeat !important;
    }

    ${S} .atb-slider {
      position: relative !important;
      width: 100% !important;
    }

    ${S} .atb-slider-viewport {
      width: 100% !important;
      overflow: hidden !important;
    }

    ${S} .atb-slider-track {
      display: flex !important;
      gap: 21px !important;
      transform: translate3d(0,0,0) !important;
      transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1) !important;
      will-change: transform !important;
    }

    ${S} .atb-include-card {
      flex: 0 0 calc((100% - 42px) / 3) !important;
      min-width: 0 !important;
      border-radius: 10px !important;
      overflow: hidden !important;
      background: #F8FAFC !important;
    }

    ${S} .atb-include-image {
      height: clamp(190px, 16vw, 270px) !important;
      overflow: hidden !important;
      background: #E2E8F0 !important;
    }

    ${S} .atb-include-image img {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    ${S} .atb-include-copy {
      min-height: 280px !important;
      background: #F8FAFC !important;
    }

    ${S} .atb-include-title {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 26px !important;
      border-bottom: 3px solid var(--atb-accent) !important;
      background: #F8FAFC !important;
    }

    ${S} .atb-include-title h3 {
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 700 !important;
      color: var(--atb-primary) !important;
    }

    ${S} .atb-include-copy ul {
      padding: 16px 26px 26px 42px !important;
      list-style: disc !important;
      color: var(--atb-muted) !important;
    }

    ${S} .atb-include-copy li {
      margin-bottom: 7px !important;
      font-size: 13px !important;
      line-height: 1.36 !important;
      color: var(--atb-muted) !important;
    }

    ${S} .atb-include-copy li::marker {
      color: var(--atb-muted) !important;
    }

    ${S} .atb-slider-btn {
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
      color: var(--atb-primary) !important;
      box-shadow: 0 12px 22px rgba(15,23,42,0.12) !important;
      cursor: pointer !important;
      transform: translateY(-50%) !important;
      transition: transform 0.2s, opacity 0.2s !important;
    }

    ${S} .atb-slider-btn:hover {
      opacity: 0.9 !important;
      transform: translateY(-50%) scale(1.04) !important;
    }

    ${S} .atb-prev { left: -20px !important; }
    ${S} .atb-next { right: -20px !important; }

    ${S} .atb-dots {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 22px !important;
      margin-top: 42px !important;
    }

    ${S} .atb-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14,24,44,0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    ${S} .atb-dot.atb-on {
      background: var(--atb-accent) !important;
    }

    @media (max-width: 1180px) {
      ${S} .atb-layout { gap: 34px !important; }
      ${S} .atb-rail { min-width: 240px !important; }
      ${S} .atb-two-grid { column-gap: 36px !important; }
      ${S} .atb-include-card { flex-basis: calc((100% - 21px) / 2) !important; }
    }

    @media (max-width: 980px) {
      ${S} .atb { padding: 2rem 0 !important; }
      ${S} .atb-header { margin-bottom: 2rem !important; }
      ${S} .atb-layout { flex-direction: column !important; }
      ${S} .atb-rail, ${S} .atb-content { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .atb-nav { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
      ${S} .atb-panel { min-height: 0 !important; }
      ${S} .atb-two-grid { column-gap: 24px !important; }
    }

    @media (max-width: 720px) {
      ${S} .atb-inner { padding: 0 16px !important; }
      ${S} .atb-heading { font-size: 34px !important; }
      ${S} .atb-desc { font-size: 14px !important; }
      ${S} .atb-nav, ${S} .atb-two-grid { grid-template-columns: 1fr !important; }
      ${S} .atb-panel-title { margin-bottom: 26px !important; }
      ${S} .atb-info-card > p { padding-left: 0 !important; }
      ${S} .atb-include-card { flex-basis: 100% !important; }
      ${S} .atb-slider-btn { display: none !important; }
      ${S} .atb-dots { margin-top: 24px !important; }
    }
  `;

  var HTML = `
    <section class="atb">
      <div class="atb-inner">
        <header class="atb-header">
          <h1 class="atb-heading">AI Transformation Bundle</h1>
          <p class="atb-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </header>

        <div class="atb-layout">
          <aside class="atb-rail">
            <ul class="atb-nav" role="tablist">
              ${navMarkup()}
            </ul>
          </aside>

          <div class="atb-content">
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

    var track = slider.querySelector('.atb-slider-track');
    var cards = slider.querySelectorAll('.atb-include-card');
    var prev = slider.querySelector('.atb-prev');
    var next = slider.querySelector('.atb-next');
    var dotsWrap = root.querySelector('[data-dots]');
    var index = 0;

    function maxIndex() {
      return Math.max(0, cards.length - getVisibleCount());
    }

    function buildDots() {
      var pages = maxIndex() + 1;
      var html = '';
      for (var i = 0; i < pages; i += 1) {
        html += '<button class="atb-dot' + (i === index ? ' atb-on' : '') + '" type="button" aria-label="Go to slide group ' + (i + 1) + '" data-slide="' + i + '"></button>';
      }
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.atb-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          index = parseInt(this.dataset.slide, 10);
          update();
        });
      });
    }

    function update() {
      var visible = getVisibleCount();
      var gap = 21;
      var viewportWidth = slider.querySelector('.atb-slider-viewport').clientWidth;
      var cardWidth = (viewportWidth - gap * (visible - 1)) / visible;
      index = Math.max(0, Math.min(index, maxIndex()));
      track.style.setProperty('transform', 'translate3d(' + (-index * (cardWidth + gap)) + 'px, 0, 0)', 'important');

      dotsWrap.querySelectorAll('.atb-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('atb-on', dotIndex === index);
      });
    }

    if (prev) {
      prev.addEventListener('click', function () {
        index = index <= 0 ? maxIndex() : index - 1;
        update();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        index = index >= maxIndex() ? 0 : index + 1;
        update();
      });
    }

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
      console.warn('[atb-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.atb-nav li');
    var panels = root.querySelectorAll('.atb-panel');
    var cur = 0;

    var sliderCtrl = mountSlider(root);

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('atb-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('atb-on');

        cur = idx;
        nav[cur].classList.add('atb-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('atb-on');

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
