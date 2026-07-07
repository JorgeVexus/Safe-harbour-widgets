(function () {
  'use strict';

  var ROOT_ID = 'shi-co-managed-it-root';
  var S = '#' + ROOT_ID;

  function injectLink(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
  }

  injectLink('https://fonts.googleapis.com/css2?family=Play:wght@700&family=Poppins:wght@400;500;600;700&display=swap');

  var ACCENT = '#E08332';
  var CHECK = 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a05fb5e97afb0f072576ff2_green-check-icon.webp';

  var tabs = [
    {
      label: 'What Does Your IT Team Need?',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba64480068d7c8f4d88_strategic%20ai%20consulting%20icon.svg'
    },
    {
      label: 'Why Choose Co-Managed IT?',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba4585299f4854b10db_Ai%20workflow%20assesment%20icon.svg'
    },
    {
      label: 'Key Benefits',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4949b46a094d32e0e10552_key%20bennefits%20reliable.svg'
    }
  ];

  var whatData = {
    title: 'Add an expert support team to support your current IT staff',
    subtitle: 'Every company needs strong IT, but it\'s difficult to hire internal expertise',
    paragraphs: [
      'Most corporations have trustworthy, capable IT staff members to cover numerous needs, however they\'re seldom able to handle the increasing demands of a growing company. When your IT staff are overwhelmed or short on resources, this can add real stress to your business.',
      'We understand a company of your size and growth desire the support of a team that can work alongside your current employees, building a robust and resilient IT department, and keeping your business running smoothly.'
    ]
  };

  var scenarioCards = [
    {
      title: 'Daily Support',
      body: 'Your IT team shines in strategic projects, but needs help with day-to-day tasks. We handle the routine work: troubleshooting, helpdesk support, software updates, data backups, and system maintenance so your team can focus on high-impact initiatives. With Safe Harbour, your internal experts stay productive, while we keep your operations running smoothly.'
    },
    {
      title: 'Strategy / Protection',
      body: 'Your IT team excels at help desk and end-user support—but may lack expertise in cybersecurity, cloud tech, server management, and compliance. Safe Harbour fills the gaps, letting your staff focus on what they do best while we handle advanced IT needs—so you get stronger security, better compliance, and seamless operations—without hiring more staff.'
    },
    {
      title: 'Rapid Growth',
      body: 'As your company expands, so do your IT demands. Hiring and training new staff takes time—time you don\'t have. Safe Harbour provides flexible, on-demand IT support to scale with your growth. We seamlessly fill the gaps, handling critical tasks while you focus on building your internal team. Stay agile, secure, and worry-free during your growth phase—with expert IT support that grows when you do.'
    }
  ];

  var benefitsData = {
    title: 'Benefits to Co-Managed IT Services',
    description: 'Safe Harbour compliments your existing IT staff by providing comprehensive management and planning to guarantee your company is protected against data loss, extended down times, poor network performance, cyber attacks, compliance issues, & is in a position to recover data if a disaster were to occur.',
    items: [
      'Not replacing your IT staff, but empowering them',
      'You gain a team of expert IT professionals',
      'Your team gain access to powerful automation & management tools',
      'You don\'t have to add to your head count',
      '24/7 Emergency support',
      'Customized IT Roadmap'
    ]
  };

  function iconSpan(className, url) {
    return '<span class="' + className + '" style="--cmi-icon: url(' + url + ')" aria-hidden="true"></span>';
  }

  function checkIcon(className) {
    return '<span class="' + className + '" style="--cmi-check: url(' + CHECK + ')" aria-hidden="true"></span>';
  }

  function whatPanel() {
    var paragraphsHtml = whatData.paragraphs.map(function (p) {
      return '<p>' + p + '</p>';
    }).join('');

    return (
      '<div class="cmi-panel cmi-on" role="tabpanel" id="cmi-panel-0">' +
        '<h2 class="cmi-what-title">' + whatData.title + '</h2>' +
        '<p class="cmi-what-subtitle">' + whatData.subtitle + '</p>' +
        '<div class="cmi-body-text">' + paragraphsHtml + '</div>' +
        '<img class="cmi-what-image" src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4d1f509f113046c58ba94e_co%20managed%20tab%2001%20image.avif" alt="Co-Managed IT">' +
      '</div>'
    );
  }

    function whyPanel() {
    var cardsHtml = scenarioCards.map(function (card) {
      return (
        '<div class="cmi-scenario-col">' +
          '<div class="cmi-scenario-card">' +
            '<div class="cmi-scenario-head">' +
              checkIcon('cmi-check') +
              '<h3>' + card.title + '</h3>' +
            '</div>' +
          '</div>' +
          '<p class="cmi-scenario-body">' + card.body + '</p>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="cmi-panel" role="tabpanel" id="cmi-panel-1">' +
        '<h2 class="cmi-scenario-title">Scenarios When Co-Managed Service Makes Sense...</h2>' +
        '<div class="cmi-scenarios">' + cardsHtml + '</div>' +
      '</div>'
    );
  }

  function benefitsPanel() {
    var itemsHtml = benefitsData.items.map(function (item) {
      return (
        '<div class="cmi-benefit-col">' +
          '<div class="cmi-benefit-card">' +
            checkIcon('cmi-check') +
            '<span>' + item + '</span>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="cmi-panel" role="tabpanel" id="cmi-panel-2">' +
        '<h2 class="cmi-benefits-title">' + benefitsData.title + '</h2>' +
        '<p class="cmi-benefit-desc">' + benefitsData.description + '</p>' +
        '<div class="cmi-benefits-grid">' + itemsHtml + '</div>' +
      '</div>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --cmi-accent: ${ACCENT};
      --cmi-primary: #0E182C;
      --cmi-muted: #45556C;
      --cmi-disabled: #94A3B8;
      display: block !important;
      width: 100% !important;
      color: var(--cmi-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} ul { list-style: none !important; }
    ${S} a { text-decoration: none !important; }

    ${S} .cmi {
      width: 100% !important;
      min-height: 820px !important;
      padding: clamp(46px, 5vw, 78px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .cmi-inner {
      width: min(100%, 1536px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .cmi-header {
      max-width: 870px !important;
      margin-bottom: clamp(56px, 5vw, 78px) !important;
    }

    ${S} .cmi-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(34px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--cmi-primary) !important;
      margin-bottom: 12px !important;
    }

    ${S} .cmi-desc {
      max-width: 823px !important;
      font-size: 18px !important;
      line-height: 1.62 !important;
      font-weight: 400 !important;
      color: var(--cmi-muted) !important;
    }

    ${S} .cmi-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: clamp(40px, 4vw, 70px) !important;
      width: 100% !important;
    }

    ${S} .cmi-rail {
      flex: 0 0 25% !important;
      min-width: 260px !important;
      max-width: 356px !important;
    }

    ${S} .cmi-content {
      flex: 1 1 75% !important;
      min-width: 0 !important;
    }

    ${S} .cmi-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
    }

    ${S} .cmi-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--cmi-disabled) !important;
      background: transparent !important;
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .cmi-nav li:hover {
      color: var(--cmi-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .cmi-nav li.cmi-on {
      color: var(--cmi-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--cmi-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .cmi-nav-icon {
      width: 20px !important;
      height: 20px !important;
      flex: 0 0 20px !important;
      display: block !important;
      background: var(--cmi-disabled) !important;
      -webkit-mask: var(--cmi-icon) center / contain no-repeat !important;
      mask: var(--cmi-icon) center / contain no-repeat !important;
      transition: background 0.2s !important;
    }

    ${S} .cmi-nav li.cmi-on .cmi-nav-icon {
      background: var(--cmi-accent) !important;
    }

    ${S} .cmi-panel {
      display: none !important;
      min-height: 640px !important;
      animation: cmi-rise 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    ${S} .cmi-panel.cmi-on {
      display: block !important;
    }

    @keyframes cmi-rise {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .cmi-panel-title {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(24px, 2vw, 32px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--cmi-primary) !important;
      text-transform: none !important;
      margin-bottom: 18px !important;
    }

    ${S} .cmi-what-title {
      font-family: 'Poppins', sans-serif !important;
      font-size: 30px !important;
      line-height: 29.25px !important;
      font-weight: 700 !important;
      color: var(--cmi-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 18px !important;
    }

    ${S} .cmi-what-subtitle {
      font-family: 'Poppins', sans-serif !important;
      font-size: 18px !important;
      line-height: 29.25px !important;
      font-weight: 500 !important;
      color: var(--cmi-accent) !important;
      margin-bottom: 22px !important;
      max-width: 970px !important;
    }

    ${S} .cmi-subtitle {
      font-size: 16px !important;
      line-height: 1.55 !important;
      font-weight: 500 !important;
      color: var(--cmi-accent) !important;
      margin-bottom: 22px !important;
      max-width: 970px !important;
    }

    ${S} .cmi-what-image {
      width: 846px !important;
      max-width: 100% !important;
      height: 399px !important;
      display: block !important;
      border-radius: 16px !important;
      object-fit: cover !important;
      margin-top: 24px !important;
    }

    ${S} .cmi-body-text {
      max-width: 970px !important;
    }

    ${S} .cmi-body-text p {
      font-size: 16px !important;
      line-height: 1.65 !important;
      color: var(--cmi-muted) !important;
      margin-bottom: 18px !important;
    }

    ${S} .cmi-body-text p:last-child {
      margin-bottom: 0 !important;
    }

    ${S} .cmi-scenario-title {
      font-family: 'Poppins', sans-serif !important;
      font-size: 30px !important;
      line-height: 29.25px !important;
      font-weight: 700 !important;
      color: var(--cmi-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 28px !important;
    }

    ${S} .cmi-scenarios {
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      gap: clamp(32px, 4vw, 64px) !important;
      width: 100% !important;
      align-items: start !important;
    }

    ${S} .cmi-scenario-col {
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
    }

    ${S} .cmi-scenario-card {
      width: 100% !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--cmi-accent) !important;
      border-radius: 0 16px 16px 0 !important;
      padding: 16px 32px !important;
      margin-bottom: 0 !important;
    }

    ${S} .cmi-scenario-head {
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      min-height: 40px !important;
    }

    ${S} .cmi-scenario-head h3 {
      font-size: 18px !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
      color: var(--cmi-primary) !important;
    }

    ${S} .cmi-scenario-body {
      font-size: 16px !important;
      line-height: 27px !important;
      color: rgba(14,24,44,0.8) !important;
      margin-top: 20px !important;
    }

    ${S} .cmi-check {
      width: 22px !important;
      height: 22px !important;
      display: block !important;
      flex-shrink: 0 !important;
      background: var(--cmi-accent) !important;
      -webkit-mask: var(--cmi-check) center / contain no-repeat !important;
      mask: var(--cmi-check) center / contain no-repeat !important;
    }

    ${S} .cmi-benefits-title {
      font-family: 'Poppins', sans-serif !important;
      font-size: 30px !important;
      line-height: 29.25px !important;
      font-weight: 700 !important;
      color: var(--cmi-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 18px !important;
    }

    ${S} .cmi-benefit-desc {
      max-width: 970px !important;
      font-size: 16px !important;
      line-height: 1.65 !important;
      color: var(--cmi-muted) !important;
      margin-bottom: 28px !important;
    }

    ${S} .cmi-benefits-grid {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 20px !important;
      max-width: 970px !important;
    }

    ${S} .cmi-benefit-col {
      display: flex !important;
      width: 100% !important;
    }

    ${S} .cmi-benefit-card {
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      width: 100% !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--cmi-accent) !important;
      border-radius: 0 10px 10px 0 !important;
      padding: 16px 22px !important;
      font-size: 16px !important;
      line-height: 1.5 !important;
      color: var(--cmi-primary) !important;
      font-weight: 500 !important;
    }

    ${S} .cmi-benefit-card > span {
      font-size: 16px !important;
      line-height: 1.5 !important;
      color: var(--cmi-primary) !important;
      font-weight: 500 !important;
    }

    @media (max-width: 980px) {
      ${S} .cmi { padding: 2rem 0 !important; }
      ${S} .cmi-layout { flex-direction: column !important; }
      ${S} .cmi-rail, ${S} .cmi-content { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .cmi-nav { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
      ${S} .cmi-panel { min-height: 0 !important; }
      ${S} .cmi-what-image { width: 100% !important; height: 280px !important; }
      ${S} .cmi-scenarios { grid-template-columns: 1fr !important; }
      ${S} .cmi-benefits-grid { grid-template-columns: 1fr !important; }
    }

    @media (max-width: 720px) {
      ${S} .cmi-inner { padding: 0 16px !important; }
      ${S} .cmi-heading { font-size: 34px !important; }
      ${S} .cmi-desc, ${S} .cmi-body-text p { font-size: 14px !important; }
      ${S} .cmi-nav { grid-template-columns: 1fr !important; }
      ${S} .cmi-panel-title { margin-bottom: 18px !important; font-size: 20px !important; }
      ${S} .cmi-scenario-title { font-size: 24px !important; line-height: 26px !important; margin-bottom: 20px !important; }
      ${S} .cmi-scenario-card { padding: 22px 20px !important; }
      ${S} .cmi-scenario-head h3 { font-size: 16px !important; }
      ${S} .cmi-scenario-card > p { font-size: 14px !important; line-height: 23px !important; }
      ${S} .cmi-benefit-item { font-size: 14px !important; }
      ${S} .cmi-what-title { font-size: 24px !important; line-height: 26px !important; }
      ${S} .cmi-what-subtitle { font-size: 16px !important; line-height: 24px !important; }
      ${S} .cmi-what-image { width: 100% !important; height: 230px !important; }
    }
  `;

  var navHTML = tabs.map(function (tab, index) {
    return (
      '<li class="' + (index === 0 ? 'cmi-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' +
        iconSpan('cmi-nav-icon', tab.icon) +
        '<span>' + tab.label + '</span>' +
      '</li>'
    );
  }).join('');

  var HTML = `
    <section class="cmi">
      <div class="cmi-inner">
        <header class="cmi-header">
          <h1 class="cmi-heading">Co-Managed IT That Scales with Your Team</h1>
          <p class="cmi-desc">Expert support that works alongside your current IT staff, building a robust and resilient IT department.</p>
        </header>

        <div class="cmi-layout">
          <aside class="cmi-rail">
            <ul class="cmi-nav" role="tablist">
              ${navHTML}
            </ul>
          </aside>

          <div class="cmi-content">
            ${whatPanel()}
            ${whyPanel()}
            ${benefitsPanel()}
          </div>
        </div>
      </div>
    </section>
  `;

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[cmi-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.cmi-nav li');
    var panels = root.querySelectorAll('.cmi-panel');
    var cur = 0;

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('cmi-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('cmi-on');

        cur = idx;
        nav[cur].classList.add('cmi-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('cmi-on');

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
