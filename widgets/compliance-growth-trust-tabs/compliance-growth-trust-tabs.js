(function () {
  'use strict';

  var ROOT_ID = 'shi-compliance-growth-trust-root';
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
  var ARROW = 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493869da8eb02bf63548dc_Icon%20arrow%20button.svg';

  var tabs = [
    {
      label: 'Why Choose Our Compliance?',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba64480068d7c8f4d88_strategic%20ai%20consulting%20icon.svg'
    },
    {
      label: "What's Blocking Your Growth?",
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba5b550267ae318c7a0_ai%20transformation%20bundle%20icon.svg'
    }
  ];

  var whyCards = [
    {
      title: 'End-to-End Simplicity',
      body: 'Compliance does not have to be complex. From readiness assessments to third-party audit prep, we do the heavy lifting while your team stays focused on growth.'
    },
    {
      title: 'Solutions for Regulated Industries',
      body: 'Whether you are in healthcare, SaaS, finance, or government, we customize your compliance strategy to fit your specific industry and growth trajectory.'
    },
    {
      title: 'Proactive Risk Mitigation',
      body: 'Our expertise goes beyond documentation to identify and eliminate vulnerabilities at the root of your systems, processes, and policies.'
    },
    {
      title: 'A Strategic Investment in Security',
      body: 'Compliance is more than risk avoidance. It is a trust-building, growth-oriented investment that attracts major clients and enterprise deals.'
    }
  ];

  var blockingCards = [
    {
      title: 'Severe Financial Penalties',
      body: 'Fines start at 100-50,000 per HIPAA violation and can total 4% of annual global turnover under GDPR.'
    },
    {
      title: 'Data Breaches',
      body: 'Without proper safeguards in place, organizations face devastating breaches that erode customer trust, harm reputations, and result in costly downtime.'
    },
    {
      title: 'Lost Revenue Opportunities',
      body: 'Enterprises and government clients expect partners to meet compliance standards such as ISO 27001 or SOC 2. Without certifications, businesses risk losing contracts and credibility.'
    },
    {
      title: 'Audit Pressure',
      body: 'Preparing for certifications often stretches internal teams too thin, delaying growth and exposing gaps in processes, tools, and documentation.'
    }
  ];

  var outcomes = [
    'Work Smarter, Not Harder',
    'Scale Twice as Fast as Competitors',
    'Automate Time Stealing Tasks'
  ];

  function iconSpan(className, url) {
    return '<span class="' + className + '" style="--cgt-icon: url(' + url + ')" aria-hidden="true"></span>';
  }

  function navMarkup() {
    return tabs.map(function (tab, index) {
      return (
        '<li class="' + (index === 0 ? 'cgt-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' +
          iconSpan('cgt-nav-icon', tab.icon) +
          '<span>' + tab.label + '</span>' +
        '</li>'
      );
    }).join('');
  }

  function infoCard(card) {
    return (
      '<article class="cgt-info-card">' +
        '<div class="cgt-info-head">' +
          '<img src="' + CHECK + '" alt="" aria-hidden="true">' +
          '<h3>' + card.title + '</h3>' +
        '</div>' +
        '<p>' + card.body + '</p>' +
      '</article>'
    );
  }

  function outcomeMarkup(item) {
    return (
      '<div class="cgt-outcome">' +
        '<img src="' + CHECK + '" alt="" aria-hidden="true">' +
        '<span>' + item + '</span>' +
      '</div>'
    );
  }

  function whyPanel() {
    return (
      '<div class="cgt-panel cgt-on" role="tabpanel">' +
        '<div class="cgt-panel-intro">' +
          '<h2>WHAT SETS US APART. WHY CHOOSE US FOR COMPLIANCE?</h2>' +
          '<p>When it comes to compliance, businesses trust us to deliver proven expertise, minimal disruption, and measurable results. Here is why:</p>' +
        '</div>' +
        '<div class="cgt-grid">' + whyCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  function blockingPanel() {
    return (
      '<div class="cgt-panel" role="tabpanel">' +
        '<div class="cgt-panel-intro">' +
          '<h2>COMPLIANCE CHALLENGES THAT STUNT BUSINESS GROWTH</h2>' +
          '<p>Compliance is not just a box to check. It is essential for protecting sensitive operations, fostering long-term trust, and securing market share. Failing to comply with today&apos;s regulatory frameworks can lead to:</p>' +
        '</div>' +
        '<div class="cgt-grid">' + blockingCards.map(infoCard).join('') + '</div>' +
        '<div class="cgt-bottom">' +
          '<p>Are you prepared for these risks? If not, our Compliance Services provide the expertise you need to mitigate risk and ensure long-term compliance success.</p>' +
          '<div class="cgt-outcomes">' + outcomes.map(outcomeMarkup).join('') + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --cgt-accent: ${ACCENT};
      --cgt-primary: #0E182C;
      --cgt-muted: #45556C;
      --cgt-disabled: #94A3B8;
      display: block !important;
      width: 100% !important;
      color: var(--cgt-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} button { font: inherit !important; }

    ${S} .cgt {
      width: 100% !important;
      min-height: 620px !important;
      padding: clamp(42px, 5vw, 74px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .cgt-inner {
      width: min(100%, 1400px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .cgt-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(32px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--cgt-primary) !important;
      margin-bottom: clamp(44px, 5vw, 70px) !important;
    }

    ${S} .cgt-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: 50px !important;
      width: 100% !important;
      min-width: 100% !important;
      box-sizing: border-box !important;
    }

    ${S} .cgt-rail {
      flex: 0 0 300px !important;
      width: 300px !important;
      min-width: 300px !important;
      max-width: 300px !important;
    }

    ${S} .cgt-content {
      flex: 1 1 0% !important;
      width: calc(100% - 350px) !important;
      min-width: 0 !important;
    }

    ${S} .cgt-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
      margin-bottom: clamp(54px, 6vw, 90px) !important;
      list-style: none !important;
    }

    ${S} .cgt-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--cgt-disabled) !important;
      background: transparent !important;
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .cgt-nav li:hover {
      color: var(--cgt-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .cgt-nav li.cgt-on {
      color: var(--cgt-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--cgt-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .cgt-nav-icon {
      width: 20px !important;
      height: 20px !important;
      flex: 0 0 20px !important;
      display: block !important;
      background: var(--cgt-disabled) !important;
      -webkit-mask: var(--cgt-icon) center / contain no-repeat !important;
      mask: var(--cgt-icon) center / contain no-repeat !important;
      transition: background 0.2s !important;
    }

    ${S} .cgt-nav li.cgt-on .cgt-nav-icon {
      background: var(--cgt-accent) !important;
    }

    ${S} .cgt-cta {
      width: 100% !important;
    }

    ${S} .cgt-cta-button {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 12px !important;
      min-height: 40px !important;
      width: 100% !important;
      padding: 10px 16px !important;
      border: 0 !important;
      border-radius: 8px !important;
      background: var(--cgt-primary) !important;
      color: #fff !important;
      font-family: 'Play', sans-serif !important;
      font-size: 16px !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      box-shadow: 0 10px 18px rgba(40, 125, 152, 0.24) !important;
      cursor: pointer !important;
    }

    ${S} .cgt-cta-button img {
      width: 16px !important;
      height: 16px !important;
      display: block !important;
      filter: brightness(0) invert(1) !important;
    }

    ${S} .cgt-panel {
      display: none !important;
      min-height: 520px !important;
      animation: cgt-rise 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    ${S} .cgt-panel.cgt-on {
      display: block !important;
    }

    @keyframes cgt-rise {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .cgt-panel-intro {
      margin-bottom: 34px !important;
    }

    ${S} .cgt-panel-intro h2 {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(24px, 2vw, 32px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--cgt-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 14px !important;
    }

    ${S} .cgt-panel-intro p {
      max-width: 980px !important;
      font-size: 16px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: rgba(14, 24, 44, 0.8) !important;
    }

    ${S} .cgt-grid {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      column-gap: clamp(48px, 7vw, 140px) !important;
      row-gap: 38px !important;
      width: 100% !important;
    }

    ${S} .cgt-info-card {
      width: 100% !important;
      min-width: 0 !important;
    }

    ${S} .cgt-info-head {
      min-height: 56px !important;
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      padding: 0 24px !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--cgt-accent) !important;
      border-radius: 0 10px 10px 0 !important;
      margin-bottom: 12px !important;
    }

    ${S} .cgt-info-head img {
      width: 22px !important;
      height: 22px !important;
      display: block !important;
      flex: 0 0 22px !important;
      object-fit: contain !important;
    }

    ${S} .cgt-info-head h3 {
      font-size: 14px !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
      color: var(--cgt-primary) !important;
    }

    ${S} .cgt-info-card > p {
      padding-left: 64px !important;
      max-width: 520px !important;
      font-size: 14px !important;
      line-height: 1.42 !important;
      font-weight: 400 !important;
      color: var(--cgt-muted) !important;
    }

    ${S} .cgt-bottom {
      width: 100% !important;
      margin-top: 42px !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      gap: 28px !important;
    }

    ${S} .cgt-bottom > p {
      max-width: 540px !important;
      color: rgba(14,24,44,0.5) !important;
      font-size: 12px !important;
      line-height: 1.58 !important;
      text-align: center !important;
    }

    ${S} .cgt-outcomes {
      width: min(100%, 976px) !important;
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      gap: 28px !important;
      align-items: center !important;
    }

    ${S} .cgt-outcome {
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      color: var(--cgt-accent) !important;
    }

    ${S} .cgt-outcome img {
      width: 28px !important;
      height: 28px !important;
      display: block !important;
      flex: 0 0 28px !important;
      object-fit: contain !important;
    }

    ${S} .cgt-outcome span {
      font-family: 'Play', sans-serif !important;
      font-size: 16px !important;
      line-height: 1.25 !important;
      font-weight: 700 !important;
      letter-spacing: 1.4px !important;
      text-transform: uppercase !important;
      color: var(--cgt-accent) !important;
    }

    @media (max-width: 1180px) {
      ${S} .cgt-layout { gap: 34px !important; }
      ${S} .cgt-rail { min-width: 240px !important; }
      ${S} .cgt-grid { column-gap: 32px !important; }
    }

    @media (max-width: 980px) {
      ${S} .cgt { padding: 2rem 0 !important; }
      ${S} .cgt-heading { margin-bottom: 2rem !important; }
      ${S} .cgt-layout { flex-direction: column !important; }
      ${S} .cgt-rail, ${S} .cgt-content { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .cgt-nav { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; margin-bottom: 24px !important; }
      ${S} .cgt-cta { display: none !important; }
      ${S} .cgt-panel { min-height: 0 !important; }
    }

    @media (max-width: 720px) {
      ${S} .cgt-inner { padding: 0 16px !important; }
      ${S} .cgt-heading { font-size: 34px !important; }
      ${S} .cgt-nav, ${S} .cgt-grid, ${S} .cgt-outcomes { grid-template-columns: 1fr !important; }
      ${S} .cgt-panel-intro h2 { margin-bottom: 14px !important; }
      ${S} .cgt-info-card > p { padding-left: 0 !important; }
      ${S} .cgt-outcomes { gap: 18px !important; }
    }
  `;

  var HTML = `
    <section class="cgt">
      <div class="cgt-inner">
        <h1 class="cgt-heading">Simplifying Compliance for Growth &amp; Trust</h1>

        <div class="cgt-layout">
          <aside class="cgt-rail">
            <ul class="cgt-nav" role="tablist">
              ${navMarkup()}
            </ul>

            <div class="cgt-cta">
              <a href="https://calendly.com/becyberaware/30-minutes-with-dan-stratton-cissp-ccsp-cciso" class="cgt-cta-button">Schedule a call <img src="${ARROW}" alt=""></a>
            </div>
          </aside>

          <div class="cgt-content">
            ${whyPanel()}
            ${blockingPanel()}
          </div>
        </div>
      </div>
    </section>
  `;

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[cgt-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.cgt-nav li');
    var panels = root.querySelectorAll('.cgt-panel');
    var cur = 0;

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('cgt-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('cgt-on');

        cur = idx;
        nav[cur].classList.add('cgt-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('cgt-on');

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
