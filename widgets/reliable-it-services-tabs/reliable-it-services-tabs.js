(function () {
  'use strict';

  var ROOT_ID = 'shi-reliable-it-services-root';
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
  var ARROW = 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493869da8eb02bf63548dc_Icon%20arrow%20button.svg';

  var tabs = [
    {
      label: 'Experience',
      title: 'Decades Of Experience',
      body: 'With over 30 years guiding businesses through technology change, we act as your senior IT bench-fully managed or co-managed-combining deep expertise, scalable support, and resilient infrastructure to keep your operations stable while you scale.',
      cta: 'Scale Your Operations Securely',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69d950b7b8c148ca9d4af718_decades.webp',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4949b522fc65b7afd876a5_medal.svg',
      imageFirst: false
    },
    {
      label: 'Fully Managed IT Services',
      title: 'Stop Fighting Your Technology Every Day',
      body: 'Stop worrying about downtime, cyber threats, or data loss. Our fully managed IT services provide 24/7 support, proactive monitoring, and fast response-so you can focus on your business. From network performance to compliance and disaster recovery, we protect, detect, and respond before issues grow.',
      cta: 'Get Proactive 24/7 IT Support',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69d950b607da078362647e6b_stop-fighting.webp',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4949b4d191314fed03e0c4_managed%20it.svg',
      imageFirst: true
    },
    {
      label: 'Co-Managed IT Services',
      title: 'Expert IT Backup That Scales With Your Success',
      body: 'Your IT team should not have to choose between keeping the lights on and driving innovation. Get the senior-level expertise you need without the hiring costs, training time, or management overhead. We handle the complex projects, emergency support, and strategic planning-so your team can focus on what they do best.',
      cta: 'Get Strategic IT Support',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69d950b7e1b66d8b635c4bac_expert-it.webp',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4949b46049f151815c3322_comanaged%20it%20icon.svg',
      imageFirst: false
    },
    {
      label: 'Key Benefits',
      title: 'KEY BENEFITS',
      subtitle: 'Eliminate Daily Tech Headaches So Leaders Focus on Growth',
      cta: 'Build a Rock-Solid IT Foundation',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4949b46a094d32e0e10552_key%20bennefits%20reliable.svg',
      benefits: [
        {
          text: 'Eliminate daily tech headaches so leaders focus on growth, not firefighting.',
          icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a494a4426073b99cb55efa0_Icon%201.svg'
        },
        {
          text: 'Improve profitability by redirecting staff from tech problems to strategic work.',
          icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a494a4426073b99cb55ef9d_Icon%202.svg'
        },
        {
          text: "Reduce outdated workflows wasting up to 40% of your team's time.",
          icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a494a43fac6fc4bb1c1c288_Icon%203.svg'
        },
        {
          text: 'Support Smart AI Systems and Cybersecurity with a rock-solid IT foundation.',
          icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a494a43bef554b822c06016_Icon%204.svg'
        },
        {
          text: 'Prevent issues before they happen with proactive 24/7 monitoring and maintenance.',
          icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a494a43e6393d20348fa3a0_Icon%205.svg'
        }
      ]
    }
  ];

  function iconSpan(className, url) {
    return '<span class="' + className + '" style="--rit-icon: url(' + url + ')" aria-hidden="true"></span>';
  }

  function standardPanelMarkup(tab, index) {
    var text =
      '<div class="rit-text">' +
        iconSpan('rit-panel-icon', tab.icon) +
        '<h2 class="rit-panel-title">' + tab.title + '</h2>' +
        '<p class="rit-panel-body">' + tab.body + '</p>' +
        '<a class="rit-cta" href="#">' + tab.cta + ' <img src="' + ARROW + '" alt="" aria-hidden="true"></a>' +
      '</div>';
    var media =
      '<div class="rit-media">' +
        '<img src="' + tab.image + '" alt="">' +
        '<span class="rit-media-shade"></span>' +
      '</div>';

    return (
      '<div class="rit-panel' + (index === 0 ? ' rit-on' : '') + '" id="rit-panel-' + index + '" role="tabpanel">' +
        (tab.imageFirst ? media + text : text + media) +
      '</div>'
    );
  }

  function benefitsPanelMarkup(tab, index) {
    var cards = tab.benefits.map(function (benefit) {
      return (
        '<article class="rit-benefit-card">' +
          '<span class="rit-benefit-icon" style="--rit-icon: url(' + benefit.icon + ')" aria-hidden="true"></span>' +
          '<h3>' + benefit.text + '</h3>' +
        '</article>'
      );
    }).join('');

    return (
      '<div class="rit-panel rit-benefits-panel' + (index === 0 ? ' rit-on' : '') + '" id="rit-panel-' + index + '" role="tabpanel">' +
        '<div class="rit-benefits-head">' +
          '<div class="rit-benefits-title-wrap">' +
            iconSpan('rit-panel-icon', tab.icon) +
            '<div>' +
              '<h2 class="rit-panel-title">' + tab.title + '</h2>' +
              '<p class="rit-benefits-subtitle">' + tab.subtitle + '</p>' +
            '</div>' +
          '</div>' +
          '<a class="rit-cta" href="#">' + tab.cta + ' <img src="' + ARROW + '" alt="" aria-hidden="true"></a>' +
        '</div>' +
        '<div class="rit-benefit-grid">' + cards + '</div>' +
      '</div>'
    );
  }

  function panelMarkup(tab, index) {
    if (tab.benefits) return benefitsPanelMarkup(tab, index);
    return standardPanelMarkup(tab, index);
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --rit-accent: ${ACCENT};
      --rit-primary: #0E182C;
      --rit-muted: #64748B;
      --rit-disabled: #94A3B8;
      color: var(--rit-primary) !important;
      display: block !important;
      width: 100% !important;
      overflow: hidden !important;
      background: #fff !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} h4, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} ul { list-style: none !important; }
    ${S} a { text-decoration: none !important; }

    ${S} .rit {
      width: 100% !important;
      min-height: 560px !important;
      padding: 4rem 0 !important;
      background: #fff !important;
      overflow: hidden !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .rit-inner {
      width: min(100%, 1536px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .rit-header {
      width: min(100%, 790px) !important;
      margin-bottom: clamp(42px, 4vw, 72px) !important;
    }

    ${S} .rit-eyebrow {
      font-family: Arial, sans-serif !important;
      font-size: 10px !important;
      line-height: 1.4 !important;
      font-weight: 700 !important;
      letter-spacing: 0.12em !important;
      text-transform: uppercase !important;
      color: var(--rit-accent) !important;
      margin-bottom: 0.55rem !important;
    }

    ${S} .rit-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(32px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--rit-primary) !important;
      margin-bottom: 0.75rem !important;
    }

    ${S} .rit-desc {
      max-width: 790px !important;
      font-size: 14px !important;
      line-height: 1.6 !important;
      font-weight: 500 !important;
      color: #111 !important;
    }

    ${S} .rit-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: clamp(44px, 4.7vw, 88px) !important;
      width: 100% !important;
    }

    ${S} .rit-rail {
      flex: 0 0 25% !important;
      min-width: 260px !important;
      max-width: 356px !important;
    }

    ${S} .rit-content {
      flex: 1 1 75% !important;
      min-width: 0 !important;
    }

    ${S} .rit-panel {
      display: none !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: clamp(32px, 3.4vw, 64px) !important;
      width: 100% !important;
      min-height: 430px !important;
    }

    ${S} .rit-panel.rit-on {
      display: flex !important;
      animation: rit-slide-in 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    @keyframes rit-slide-in {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .rit-text {
      flex: 0 1 48% !important;
      max-width: 520px !important;
      min-width: 0 !important;
    }

    ${S} .rit-media {
      position: relative !important;
      flex: 0 1 48% !important;
      min-width: 320px !important;
      max-width: 520px !important;
      height: clamp(260px, 24vw, 400px) !important;
      border-radius: 16px !important;
      overflow: hidden !important;
      background: #0E182C !important;
      box-shadow: 0 25px 50px -12px rgba(14,24,44,0.25) !important;
    }

    ${S} .rit-media img {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    ${S} .rit-media-shade {
      position: absolute !important;
      inset: 0 !important;
      background: linear-gradient(to top, rgba(14,24,44,0.35), rgba(14,24,44,0)) !important;
      pointer-events: none !important;
    }

    ${S} .rit-panel-icon {
      width: 38px !important;
      height: 38px !important;
      display: block !important;
      margin-bottom: 0.9rem !important;
      background: var(--rit-accent) !important;
      -webkit-mask: var(--rit-icon) center / contain no-repeat !important;
      mask: var(--rit-icon) center / contain no-repeat !important;
    }

    ${S} .rit-panel-title {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(22px, 1.85vw, 30px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--rit-primary) !important;
      margin-bottom: 1.25rem !important;
    }

    ${S} .rit-panel-body {
      font-size: 14px !important;
      line-height: 1.62 !important;
      font-weight: 500 !important;
      color: #111 !important;
      margin-bottom: 1.65rem !important;
    }

    ${S} .rit-cta {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 10px !important;
      min-height: 40px !important;
      padding: 10px 16px !important;
      border-radius: 8px !important;
      background: var(--rit-accent) !important;
      color: #fff !important;
      font-family: 'Play', sans-serif !important;
      font-size: 13px !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      box-shadow: 0 12px 20px rgba(224,131,50,0.26) !important;
      transition: opacity 0.2s, transform 0.2s !important;
      white-space: nowrap !important;
    }

    ${S} .rit-cta:hover {
      opacity: 0.92 !important;
      transform: translateY(-1px) !important;
    }

    ${S} .rit-cta:active {
      transform: translateY(0) scale(0.99) !important;
    }

    ${S} .rit-cta img {
      width: 14px !important;
      height: 14px !important;
      display: block !important;
      flex-shrink: 0 !important;
    }

    ${S} .rit-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
      margin-bottom: 36px !important;
    }

    ${S} .rit-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-left: 3px solid #EDF2F7 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--rit-disabled) !important;
      font-size: 13px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      background: transparent !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .rit-nav li:hover {
      color: var(--rit-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .rit-nav li.rit-on {
      color: var(--rit-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--rit-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .rit-nav-icon {
      width: 18px !important;
      height: 18px !important;
      flex: 0 0 18px !important;
      display: block !important;
      background: var(--rit-disabled) !important;
      -webkit-mask: var(--rit-icon) center / contain no-repeat !important;
      mask: var(--rit-icon) center / contain no-repeat !important;
      transition: background 0.2s !important;
    }

    ${S} .rit-nav li:hover .rit-nav-icon {
      background: var(--rit-primary) !important;
    }

    ${S} .rit-nav li.rit-on .rit-nav-icon {
      background: var(--rit-accent) !important;
    }

    ${S} .rit-help {
      width: 100% !important;
      padding: 24px !important;
      background: #F8FAFC !important;
      border: 1px solid #F1F5F9 !important;
      border-radius: 14px !important;
    }

    ${S} .rit-help-title {
      font-family: 'Play', sans-serif !important;
      font-size: 14px !important;
      line-height: 1.35 !important;
      font-weight: 700 !important;
      color: var(--rit-primary) !important;
      margin-bottom: 0.45rem !important;
    }

    ${S} .rit-help-body {
      font-size: 12px !important;
      line-height: 1.55 !important;
      font-weight: 500 !important;
      color: #111 !important;
      margin-bottom: 0.75rem !important;
    }

    ${S} .rit-help a {
      color: var(--rit-accent) !important;
      font-size: 12px !important;
      line-height: 1.4 !important;
      font-weight: 700 !important;
      text-decoration: underline !important;
    }

    ${S} .rit-benefits-panel {
      align-items: stretch !important;
      justify-content: flex-start !important;
      flex-direction: column !important;
      gap: 26px !important;
      padding-top: 8px !important;
    }

    ${S} .rit-benefits-panel.rit-on {
      display: flex !important;
    }

    ${S} .rit-benefits-head {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 24px !important;
      width: 100% !important;
    }

    ${S} .rit-benefits-title-wrap {
      display: flex !important;
      align-items: center !important;
      gap: 20px !important;
      min-width: 0 !important;
    }

    ${S} .rit-benefits-title-wrap .rit-panel-icon {
      flex: 0 0 44px !important;
      width: 44px !important;
      height: 44px !important;
      margin: 0 !important;
    }

    ${S} .rit-benefits-title-wrap .rit-panel-title {
      margin-bottom: 0.25rem !important;
      text-transform: uppercase !important;
    }

    ${S} .rit-benefits-subtitle {
      font-size: 15px !important;
      line-height: 1.4 !important;
      font-weight: 500 !important;
      color: #111 !important;
    }

    ${S} .rit-benefit-grid {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 22px !important;
      width: 100% !important;
    }

    ${S} .rit-benefit-card {
      display: grid !important;
      grid-template-columns: 64px 1fr !important;
      align-items: center !important;
      gap: 20px !important;
      min-height: 96px !important;
      padding: 18px 22px !important;
      border: 1px solid #DDE5ED !important;
      border-radius: 12px !important;
      background: #fff !important;
      box-shadow: 0 8px 18px rgba(15,23,42,0.11) !important;
    }

    ${S} .rit-benefit-icon {
      width: 58px !important;
      height: 58px !important;
      display: block !important;
      border-radius: 8px !important;
      background-color: #EDF4F8 !important;
      background-image: var(--rit-icon) !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: 30px 30px !important;
    }

    ${S} .rit-benefit-card h3 {
      font-family: 'Play', sans-serif !important;
      font-size: 17px !important;
      line-height: 1.22 !important;
      font-weight: 700 !important;
      color: var(--rit-primary) !important;
    }

    @media (max-width: 1180px) {
      ${S} .rit-layout { gap: 36px !important; }
      ${S} .rit-rail { min-width: 240px !important; }
      ${S} .rit-benefit-card h3 { font-size: 15px !important; }
    }

    @media (max-width: 980px) {
      ${S} .rit { padding: 2rem 0 !important; }
      ${S} .rit-header { margin-bottom: 2rem !important; }
      ${S} .rit-layout { flex-direction: column !important; gap: 30px !important; }
      ${S} .rit-rail { flex: none !important; min-width: 0 !important; max-width: none !important; width: 100% !important; }
      ${S} .rit-content { width: 100% !important; }
      ${S} .rit-panel.rit-on { flex-direction: column !important; align-items: stretch !important; }
      ${S} .rit-media, ${S} .rit-text { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .rit-media { height: 280px !important; order: 1 !important; }
      ${S} .rit-text { order: 2 !important; }
      ${S} .rit-nav { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; margin-bottom: 18px !important; }
      ${S} .rit-benefits-head { align-items: flex-start !important; }
    }

    @media (max-width: 720px) {
      ${S} .rit-benefits-head { flex-direction: column !important; }
      ${S} .rit-benefit-grid { grid-template-columns: 1fr !important; }
      ${S} .rit-benefits-title-wrap { align-items: flex-start !important; }
    }

    @media (max-width: 620px) {
      ${S} .rit-inner { padding: 0 16px !important; }
      ${S} .rit-nav { grid-template-columns: 1fr !important; }
      ${S} .rit-heading { font-size: 32px !important; }
      ${S} .rit-desc, ${S} .rit-panel-body { font-size: 13px !important; }
      ${S} .rit-media { height: 230px !important; }
      ${S} .rit-cta { white-space: normal !important; text-align: center !important; }
      ${S} .rit-benefit-card { grid-template-columns: 52px 1fr !important; gap: 14px !important; padding: 16px !important; }
      ${S} .rit-benefit-icon { width: 48px !important; height: 48px !important; background-size: 26px 26px !important; }
    }
  `;

  var navHTML = tabs.map(function (tab, index) {
    return (
      '<li class="' + (index === 0 ? 'rit-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' +
        iconSpan('rit-nav-icon', tab.icon) +
        '<span>' + tab.label + '</span>' +
      '</li>'
    );
  }).join('');

  var panelsHTML = tabs.map(panelMarkup).join('');

  var HTML = `
    <section class="rit">
      <div class="rit-inner">
        <header class="rit-header">
          <p class="rit-eyebrow">Managed IT Services</p>
          <h1 class="rit-heading">Reliable IT Services</h1>
          <p class="rit-desc">Reliable IT isn't just about fixing things when they break. It's a proactive partnership: 24/7 monitoring, strategic planning, and expert support that prevent problems before they impact your business, creating a stable, worry-free platform for growth.</p>
        </header>

        <div class="rit-layout">
          <aside class="rit-rail">
            <ul class="rit-nav" role="tablist">
              ${navHTML}
            </ul>

            <div class="rit-help">
              <p class="rit-help-title">Need help deciding?</p>
              <p class="rit-help-body">Our architects can design a custom roadmap for your business.</p>
              <a href="#">Talk to an expert</a>
            </div>
          </aside>

          <div class="rit-content">
            ${panelsHTML}
          </div>
        </div>
      </div>
    </section>
  `;

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[rit-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.rit-nav li');
    var panels = root.querySelectorAll('.rit-panel');
    var cur = 0;

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('rit-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('rit-on');

        cur = idx;
        nav[cur].classList.add('rit-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('rit-on');

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
