(function () {
  'use strict';

  var ROOT_ID = 'shi-ai-workflow-precision-root';
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
  var ARROW = 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493869da8eb02bf63548dc_Icon%20arrow%20button.svg';

  var tabs = [
    {
      label: 'What Includes',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba64480068d7c8f4d88_strategic%20ai%20consulting%20icon.svg'
    },
    {
      label: 'How AI workflow Works',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba4585299f4854b10db_Ai%20workflow%20assesment%20icon.svg'
    },
    {
      label: 'Key Benefits',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4949b46a094d32e0e10552_key%20bennefits%20reliable.svg'
    }
  ];

  var includeCards = [
    {
      title: 'Detailed Workflow Discovery',
      body: 'Collaborate with your team to identify workflows across all core business operations. Capture in-depth information with stakeholders to uncover challenges, goals, and opportunities.'
    },
    {
      title: 'Developer-Ready Blueprints',
      body: 'Deliver clear, detailed workflow diagrams that are ready for your development team or your AI vendor to recreate. Minimize misinterpretation by translating complex operations into practical next steps.'
    },
    {
      title: 'Comprehensive Workflow Mapping',
      body: 'Break down each workflow into actionable, step-by-step processes. Analyze key dependencies, decision points, and variables that impact performance.'
    },
    {
      title: 'Strategic Implementation Recommendations',
      body: 'Provide actionable next steps for integrating AI into your workflows. Outline resource and timeline requirements to ensure a smooth transition.'
    },
    {
      title: 'Bottlenecks and Opportunity Analysis',
      body: 'Identify inefficiencies, redundancies, and gaps within your current processes that limit impact. Provide expert recommendations for where AI can create measurable value.'
    },
    {
      title: 'System Integration & Refinement',
      body: 'Deep-dive into the areas where new AI tools will plug into existing systems. Reduce risk by highlighting possible adoption conflicts before implementation begins.'
    }
  ];

  var sliderCards = [
    {
      title: 'Clear Workflow Insights That Eliminate Uncertainty',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf097acec263f0e97563c_clear.avif',
      bullets: [
        'Gain a precise, step-by-step map of your workflows, highlighting inefficiencies, redundancies, and areas ready for automation.',
        'These insights allow leadership to move forward with clarity.'
      ]
    },
    {
      title: 'Measurable Optimization of Processes',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf09786041c1c67f1d479_messurable.avif',
      bullets: [
        'Identify and address bottlenecks or gaps in key workflows, ensuring that your AI solutions deliver measurable operational improvements.'
      ]
    },
    {
      title: 'Accelerated Development and Implementation',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf0989e159adcdfaa685d_Accelerated.avif',
      bullets: [
        'Provide your development team with clear, actionable blueprints for faster and more effective deployment of AI solutions, reducing costly delays and rework.'
      ]
    },
    {
      title: 'Cost-Effective, Scalable Engagement',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf0976f50541e02572627_cost%20effective.avif',
      bullets: [
        'Focus your investment on practical workflow documentation and implementation guidance that can scale as your AI roadmap expands.'
      ]
    },
    {
      title: 'Clear Workflow Insights That Eliminate Uncertainty',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf097acec263f0e97563c_clear.avif',
      bullets: [
        'Create shared understanding across leadership, operations, and technical teams before AI development begins.'
      ]
    },
    {
      title: 'Measurable Optimization of Processes',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf09786041c1c67f1d479_messurable.avif',
      bullets: [
        'Prioritize the workflow improvements most likely to reduce manual effort, shorten cycle times, and improve operational visibility.'
      ]
    },
    {
      title: 'Accelerated Development and Implementation',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4bf0989e159adcdfaa685d_Accelerated.avif',
      bullets: [
        'Move from analysis to execution faster with mapped processes, clearer requirements, and fewer assumptions for build teams.'
      ]
    }
  ];

  var benefitCards = [
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

  function iconSpan(className, url) {
    return '<span class="' + className + '" style="--awp-icon: url(' + url + ')" aria-hidden="true"></span>';
  }

  function checkIcon(className) {
    return '<span class="' + className + '" style="--awp-check: url(' + CHECK + ')" aria-hidden="true"></span>';
  }

  function navMarkup() {
    return tabs.map(function (tab, index) {
      return (
        '<li class="' + (index === 0 ? 'awp-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' +
          iconSpan('awp-nav-icon', tab.icon) +
          '<span>' + tab.label + '</span>' +
        '</li>'
      );
    }).join('');
  }

  function infoCard(card) {
    return (
      '<article class="awp-info-card">' +
        '<div class="awp-info-head">' +
          checkIcon('awp-card-check') +
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
      '<article class="awp-slide-card">' +
        '<div class="awp-slide-image"><img src="' + card.image + '" alt=""></div>' +
        '<div class="awp-slide-copy">' +
          '<div class="awp-slide-title">' + checkIcon('awp-card-check') + '<h3>' + card.title + '</h3></div>' +
          '<ul>' + bullets + '</ul>' +
        '</div>' +
      '</article>'
    );
  }

  function includesPanel() {
    return (
      '<div class="awp-panel awp-on" role="tabpanel">' +
        '<h2 class="awp-panel-title">WHAT&#39;S INCLUDED IN THE AI WORKFLOW ASSESSMENT</h2>' +
        '<div class="awp-why-grid">' + includeCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  function workflowPanel() {
    return (
      '<div class="awp-panel awp-slider-panel" role="tabpanel">' +
        '<div class="awp-panel-intro">' +
          '<h2 class="awp-panel-title">HOW THE AI WORKFLOW ASSESSMENT SOLVES THESE CHALLENGES</h2>' +
          '<p>Our data-focused and strategy-first assessment ensures that AI solutions are designed to align seamlessly with your goals. Here is what you can expect:</p>' +
        '</div>' +
        '<div class="awp-slider" data-slider>' +
          '<button class="awp-slider-btn awp-prev" type="button" aria-label="Previous slide">&lsaquo;</button>' +
          '<div class="awp-slider-viewport">' +
            '<div class="awp-slider-track">' + sliderCards.map(sliderCard).join('') + '</div>' +
          '</div>' +
          '<button class="awp-slider-btn awp-next" type="button" aria-label="Next slide">&rsaquo;</button>' +
        '</div>' +
        '<div class="awp-dots" data-dots></div>' +
      '</div>'
    );
  }

  function benefitsPanel() {
    return (
      '<div class="awp-panel" role="tabpanel">' +
        '<div class="awp-panel-intro">' +
          '<h2 class="awp-panel-title">THE NEED FOR WORKFLOW PRECISION</h2>' +
          '<p>Are bottlenecks, inefficiencies, or misaligned AI priorities slowing down your business? The challenges of adopting AI without a clear plan include:</p>' +
        '</div>' +
        '<div class="awp-benefit-grid">' + benefitCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --awp-accent: ${ACCENT};
      --awp-primary: #0E182C;
      --awp-muted: #45556C;
      --awp-disabled: #94A3B8;
      display: block !important;
      width: 100% !important;
      color: var(--awp-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} ul { list-style: none !important; }
    ${S} button { font: inherit !important; }

    ${S} .awp {
      width: 100% !important;
      min-height: 780px !important;
      padding: clamp(42px, 5vw, 78px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .awp-inner {
      width: min(100%, 1400px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .awp-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(34px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--awp-primary) !important;
      margin-bottom: clamp(44px, 5vw, 70px) !important;
    }

    ${S} .awp-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: clamp(40px, 4vw, 70px) !important;
      width: 100% !important;
    }

    ${S} .awp-rail {
      flex: 0 0 25% !important;
      min-width: 260px !important;
      max-width: 356px !important;
    }

    ${S} .awp-content {
      flex: 1 1 75% !important;
      min-width: 0 !important;
    }

    ${S} .awp-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
      margin-bottom: 52px !important;
    }

    ${S} .awp-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--awp-disabled) !important;
      background: transparent !important;
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .awp-nav li:hover {
      color: var(--awp-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .awp-nav li.awp-on {
      color: var(--awp-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--awp-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .awp-nav-icon {
      width: 20px !important;
      height: 20px !important;
      flex: 0 0 20px !important;
      display: block !important;
      background: var(--awp-disabled) !important;
      -webkit-mask: var(--awp-icon) center / contain no-repeat !important;
      mask: var(--awp-icon) center / contain no-repeat !important;
      transition: background 0.2s !important;
    }

    ${S} .awp-nav li.awp-on .awp-nav-icon {
      background: var(--awp-accent) !important;
    }

    ${S} .awp-cta {
      width: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 24px !important;
    }

    ${S} .awp-cta-button {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 12px !important;
      min-height: 40px !important;
      width: 100% !important;
      padding: 10px 16px !important;
      border: 0 !important;
      border-radius: 8px !important;
      background: var(--awp-primary) !important;
      color: #fff !important;
      font-family: 'Play', sans-serif !important;
      font-size: 16px !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      box-shadow: 0 10px 18px rgba(40, 125, 152, 0.24) !important;
      cursor: pointer !important;
    }

    ${S} .awp-cta-button img {
      width: 16px !important;
      height: 16px !important;
      display: block !important;
      filter: brightness(0) invert(1) !important;
    }

    ${S} .awp-cta p {
      width: 100% !important;
      color: rgba(14, 24, 44, 0.5) !important;
      font-size: 12px !important;
      line-height: 1.58 !important;
      text-align: center !important;
    }

    ${S} .awp-panel {
      display: none !important;
      min-height: 610px !important;
      animation: awp-rise 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    ${S} .awp-panel.awp-on {
      display: block !important;
    }

    @keyframes awp-rise {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .awp-panel-title {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(24px, 2vw, 32px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--awp-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 44px !important;
    }

    ${S} .awp-why-grid {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      column-gap: clamp(48px, 7vw, 150px) !important;
      row-gap: 34px !important;
      width: 100% !important;
    }

    ${S} .awp-benefit-grid {
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      column-gap: 42px !important;
      row-gap: 34px !important;
      width: 100% !important;
    }

    ${S} .awp-info-card {
      width: 100% !important;
    }

    ${S} .awp-info-head {
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      min-height: 56px !important;
      padding: 0 24px !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--awp-accent) !important;
      border-radius: 0 10px 10px 0 !important;
      margin-bottom: 14px !important;
    }

    ${S} .awp-info-head h3 {
      font-size: 14px !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
      color: var(--awp-primary) !important;
    }

    ${S} .awp-info-card > p {
      padding-left: 64px !important;
      max-width: 470px !important;
      font-size: 14px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--awp-muted) !important;
    }

    ${S} .awp-card-check {
      width: 22px !important;
      height: 22px !important;
      display: block !important;
      flex-shrink: 0 !important;
      background: var(--awp-accent) !important;
      -webkit-mask: var(--awp-check) center / contain no-repeat !important;
      mask: var(--awp-check) center / contain no-repeat !important;
    }

    ${S} .awp-panel-intro {
      margin-bottom: 34px !important;
    }

    ${S} .awp-panel-intro .awp-panel-title {
      margin-bottom: 14px !important;
    }

    ${S} .awp-panel-intro p {
      max-width: 980px !important;
      font-size: 16px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: var(--awp-muted) !important;
    }

    ${S} .awp-slider {
      position: relative !important;
      width: 100% !important;
    }

    ${S} .awp-slider-viewport {
      width: 100% !important;
      overflow: hidden !important;
    }

    ${S} .awp-slider-track {
      display: flex !important;
      gap: 21px !important;
      transform: translate3d(0,0,0) !important;
      transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1) !important;
      will-change: transform !important;
    }

    ${S} .awp-slide-card {
      flex: 0 0 calc((100% - 42px) / 3) !important;
      min-width: 0 !important;
      border-radius: 10px !important;
      overflow: hidden !important;
      background: #F8FAFC !important;
    }

    ${S} .awp-slide-image {
      height: clamp(190px, 16vw, 270px) !important;
      overflow: hidden !important;
      background: #E2E8F0 !important;
    }

    ${S} .awp-slide-image img {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    ${S} .awp-slide-copy {
      min-height: 152px !important;
      background: #F8FAFC !important;
    }

    ${S} .awp-slide-title {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 26px !important;
      border-bottom: 3px solid var(--awp-accent) !important;
      background: #F8FAFC !important;
    }

    ${S} .awp-slide-title h3 {
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 700 !important;
      color: var(--awp-primary) !important;
    }

    ${S} .awp-slide-copy ul {
      padding: 14px 28px 24px 42px !important;
      list-style: disc !important;
      color: var(--awp-muted) !important;
    }

    ${S} .awp-slide-copy li {
      margin-bottom: 4px !important;
      font-size: 14px !important;
      line-height: 1.42 !important;
      color: var(--awp-muted) !important;
    }

    ${S} .awp-slider-btn {
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
      color: var(--awp-primary) !important;
      box-shadow: 0 12px 22px rgba(15,23,42,0.12) !important;
      cursor: pointer !important;
      transform: translateY(-50%) !important;
      transition: transform 0.2s, opacity 0.2s !important;
    }

    ${S} .awp-slider-btn:hover {
      opacity: 0.9 !important;
      transform: translateY(-50%) scale(1.04) !important;
    }

    ${S} .awp-prev { left: -20px !important; }
    ${S} .awp-next { right: -20px !important; }

    ${S} .awp-dots {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 22px !important;
      margin-top: 52px !important;
    }

    ${S} .awp-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14,24,44,0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
    }

    ${S} .awp-dot.awp-on {
      background: var(--awp-accent) !important;
    }

    @media (max-width: 1180px) {
      ${S} .awp-layout { gap: 34px !important; }
      ${S} .awp-rail { min-width: 240px !important; }
      ${S} .awp-slide-card { flex-basis: calc((100% - 21px) / 2) !important; }
      ${S} .awp-benefit-grid { grid-template-columns: 1fr !important; }
    }

    @media (max-width: 980px) {
      ${S} .awp { padding: 2rem 0 !important; }
      ${S} .awp-heading { margin-bottom: 2rem !important; }
      ${S} .awp-layout { flex-direction: column !important; }
      ${S} .awp-rail, ${S} .awp-content { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .awp-nav { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; margin-bottom: 24px !important; }
      ${S} .awp-cta { display: none !important; }
      ${S} .awp-panel { min-height: 0 !important; }
      ${S} .awp-why-grid { column-gap: 24px !important; }
    }

    @media (max-width: 720px) {
      ${S} .awp-inner { padding: 0 16px !important; }
      ${S} .awp-nav, ${S} .awp-why-grid, ${S} .awp-benefit-grid { grid-template-columns: 1fr !important; }
      ${S} .awp-panel-title { margin-bottom: 26px !important; }
      ${S} .awp-info-card > p { padding-left: 0 !important; }
      ${S} .awp-slide-card { flex-basis: 100% !important; }
      ${S} .awp-slider-btn { display: none !important; }
      ${S} .awp-dots { margin-top: 28px !important; }
      ${S} .awp-panel-intro { margin-bottom: 28px !important; }
    }
  `;

  var HTML = `
    <section class="awp">
      <div class="awp-inner">
        <h1 class="awp-heading">AI Workflow Precision for Smarter Operations</h1>

        <div class="awp-layout">
          <aside class="awp-rail">
            <ul class="awp-nav" role="tablist">
              ${navMarkup()}
            </ul>

            <div class="awp-cta">
              <button class="awp-cta-button" type="button">Schedule a call <img src="${ARROW}" alt=""></button>
              <p>AI success begins by optimizing the workflows that matter most and building a foundation for scalable, company-wide transformation.</p>
            </div>
          </aside>

          <div class="awp-content">
            ${includesPanel()}
            ${workflowPanel()}
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

    var track = slider.querySelector('.awp-slider-track');
    var cards = slider.querySelectorAll('.awp-slide-card');
    var prev = slider.querySelector('.awp-prev');
    var next = slider.querySelector('.awp-next');
    var dotsWrap = root.querySelector('[data-dots]');
    var index = 0;

    function maxIndex() {
      return Math.max(0, cards.length - getVisibleCount());
    }

    function buildDots() {
      var pages = maxIndex() + 1;
      var html = '';
      for (var i = 0; i < pages; i += 1) {
        html += '<button class="awp-dot' + (i === index ? ' awp-on' : '') + '" type="button" aria-label="Go to slide group ' + (i + 1) + '" data-slide="' + i + '"></button>';
      }
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.awp-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          index = parseInt(this.dataset.slide, 10);
          update();
        });
      });
    }

    function update() {
      var visible = getVisibleCount();
      var gap = 21;
      var viewportWidth = slider.querySelector('.awp-slider-viewport').clientWidth;
      var cardWidth = (viewportWidth - gap * (visible - 1)) / visible;
      index = Math.max(0, Math.min(index, maxIndex()));
      track.style.setProperty('transform', 'translate3d(' + (-index * (cardWidth + gap)) + 'px, 0, 0)', 'important');

      dotsWrap.querySelectorAll('.awp-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('awp-on', dotIndex === index);
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
      console.warn('[awp-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.awp-nav li');
    var panels = root.querySelectorAll('.awp-panel');
    var cur = 0;

    var sliderCtrl = mountSlider(root);

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('awp-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('awp-on');

        cur = idx;
        nav[cur].classList.add('awp-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('awp-on');

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
