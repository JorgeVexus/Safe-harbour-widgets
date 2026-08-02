(function () {
  'use strict';

  var ROOT_ID = 'shi-cybersecurity-risk-assessment-root';
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
      label: 'What Includes',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba64480068d7c8f4d88_strategic%20ai%20consulting%20icon.svg'
    },
    {
      label: 'What Can You Add?',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba4585299f4854b10db_Ai%20workflow%20assesment%20icon.svg'
    }
  ];

  var includeCards = [
    {
      title: 'Risk Identification and Asset Mapping',
      bullets: [
        'Identifying critical assets, including data, networks, infrastructure, applications, and personnel.',
        'Documenting how data flows through and is stored in systems.'
      ]
    },
    {
      title: 'Custom Roadmap for Mitigation',
      bullets: [
        'Delivering a tailored, actionable roadmap to address identified risks.',
        'Recommendations may include technology upgrades, policy improvements, staff training, or enhancements to current processes.'
      ]
    },
    {
      title: 'Threat Detection and Analysis',
      bullets: [
        'Identifying possible internal and external threats.',
        "Assessing how these threats could impact the organization's critical functions."
      ]
    },
    {
      title: 'Executive Reporting',
      bullets: [
        'Creating a concise report tailored for leadership, helping businesses understand the implications of their current risk posture and the benefits of proposed improvements.'
      ]
    },
    {
      title: 'Gap Analysis Against NIST CSF',
      bullets: [
        'Identifying possible internal and external threats.',
        "Assessing how these threats could impact the organization's critical functions."
      ]
    },
    {
      title: 'Ongoing Monitoring and Management (Optional)',
      bullets: [
        'Offering periodic reviews, continuous risk monitoring, and updates to maintain a robust cybersecurity posture.'
      ]
    },
    {
      title: 'Risk Evaluation and Prioritization',
      bullets: [
        'Assessing risks based on likelihood and potential business impact.',
        'Prioritizing risks to address the most critical vulnerabilities first.'
      ]
    },
    {
      title: 'Governance and Compliance Alignment',
      bullets: [
        'Ensure ongoing alignment with industry regulations and internal security policies.',
        'Maintain audit readiness through automated documentation and control tracking.'
      ]
    }
  ];

  var optionalCards = [
    {
      title: 'Employee Security Awareness Training',
      bullets: [
        'Empower employees to recognize and respond to potential cyber threats, such as phishing and social engineering.'
      ]
    },
    {
      title: 'Incident Response Planning and Simulations',
      bullets: [
        'Support businesses in developing incident response procedures and running simulations to prepare for real-world threats.'
      ]
    },
    {
      title: 'Managed Detection and Response (MDR)',
      bullets: [
        'Offer real-time threat monitoring and rapid response to minimize business disruptions caused by cyber incidents.'
      ]
    },
    {
      title: 'Vulnerability Scanning and Penetration Testing',
      bullets: [
        'Help businesses uncover and remediate vulnerabilities in their IT systems through regular testing.'
      ]
    }
  ];

  function iconSpan(className, url) {
    return '<span class="' + className + '" style="--cra-icon: url(' + url + ')" aria-hidden="true"></span>';
  }

  function navMarkup() {
    return tabs.map(function (tab, index) {
      return (
        '<li class="' + (index === 0 ? 'cra-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' +
          iconSpan('cra-nav-icon', tab.icon) +
          '<span>' + tab.label + '</span>' +
        '</li>'
      );
    }).join('');
  }

  function infoCard(card) {
    var bullets = card.bullets.map(function (item) {
      return '<li>' + item + '</li>';
    }).join('');

    return (
      '<article class="cra-info-card">' +
        '<div class="cra-info-head">' +
          '<img src="' + CHECK + '" alt="" aria-hidden="true">' +
          '<h3>' + card.title + '</h3>' +
        '</div>' +
        '<ul>' + bullets + '</ul>' +
      '</article>'
    );
  }

  function includesPanel() {
    return (
      '<div class="cra-panel cra-on" role="tabpanel">' +
        '<div class="cra-panel-intro">' +
          '<h2>WHAT THE CYBERSECURITY RISK ASSESSMENT ENTAILS</h2>' +
          '<p>Cybersecurity is a universal concern, but certain businesses are particularly vulnerable or face stricter regulations. These industries and types of organizations are especially in need of a Cybersecurity Risk Assessment:</p>' +
        '</div>' +
        '<div class="cra-grid cra-grid-large">' + includeCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  function optionalPanel() {
    return (
      '<div class="cra-panel" role="tabpanel">' +
        '<div class="cra-panel-intro cra-panel-intro-tight">' +
          '<h2>OPTIONAL BUNDLED SERVICES</h2>' +
        '</div>' +
        '<div class="cra-grid">' + optionalCards.map(infoCard).join('') + '</div>' +
      '</div>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --cra-accent: ${ACCENT};
      --cra-primary: #0E182C;
      --cra-muted: #45556C;
      --cra-disabled: #94A3B8;
      display: block !important;
      width: 100% !important;
      color: var(--cra-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} ul { list-style: none !important; }
    ${S} button { font: inherit !important; }

    ${S} .cra {
      width: 100% !important;
      min-height: 680px !important;
      padding: clamp(42px, 5vw, 74px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .cra-inner {
      width: min(100%, 1400px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .cra-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(32px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--cra-primary) !important;
      margin-bottom: clamp(44px, 5vw, 70px) !important;
    }

    ${S} .cra-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: 50px !important;
      width: 100% !important;
      min-width: 100% !important;
      box-sizing: border-box !important;
    }

    ${S} .cra-rail {
      flex: 0 0 300px !important;
      width: 300px !important;
      min-width: 300px !important;
      max-width: 300px !important;
    }

    ${S} .cra-content {
      flex: 1 1 0% !important;
      width: calc(100% - 350px) !important;
      min-width: 0 !important;
    }

    ${S} .cra-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
      margin-bottom: clamp(54px, 6vw, 90px) !important;
    }

    ${S} .cra-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--cra-disabled) !important;
      background: transparent !important;
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .cra-nav li:hover {
      color: var(--cra-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .cra-nav li.cra-on {
      color: var(--cra-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--cra-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .cra-nav-icon {
      width: 20px !important;
      height: 20px !important;
      flex: 0 0 20px !important;
      display: block !important;
      background: var(--cra-disabled) !important;
      -webkit-mask: var(--cra-icon) center / contain no-repeat !important;
      mask: var(--cra-icon) center / contain no-repeat !important;
      transition: background 0.2s !important;
    }

    ${S} .cra-nav li.cra-on .cra-nav-icon {
      background: var(--cra-accent) !important;
    }

    ${S} .cra-cta {
      width: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 24px !important;
    }

    ${S} .cra-cta-button {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 12px !important;
      min-height: 40px !important;
      width: 100% !important;
      padding: 10px 16px !important;
      border: 0 !important;
      border-radius: 8px !important;
      background: var(--cra-primary) !important;
      color: #fff !important;
      font-family: 'Play', sans-serif !important;
      font-size: 16px !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      box-shadow: 0 10px 18px rgba(40, 125, 152, 0.24) !important;
      cursor: pointer !important;
      text-decoration: none !important;
    }

    ${S} .cra-cta-button img {
      width: 16px !important;
      height: 16px !important;
      display: block !important;
      filter: brightness(0) invert(1) !important;
    }

    ${S} .cra-cta p {
      width: 100% !important;
      color: rgba(14, 24, 44, 0.5) !important;
      font-size: 12px !important;
      line-height: 1.58 !important;
      text-align: center !important;
    }

    ${S} .cra-panel {
      display: none !important;
      width: 100% !important;
      min-height: 560px !important;
      animation: cra-rise 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    ${S} .cra-panel.cra-on {
      display: block !important;
    }

    @keyframes cra-rise {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .cra-panel-intro {
      margin-bottom: 28px !important;
    }

    ${S} .cra-panel-intro-tight {
      margin-bottom: 38px !important;
    }

    ${S} .cra-panel-intro h2 {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(24px, 2vw, 32px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--cra-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 14px !important;
    }

    ${S} .cra-panel-intro p {
      max-width: 980px !important;
      font-size: 16px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: rgba(14, 24, 44, 0.8) !important;
    }

    ${S} .cra-grid {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      column-gap: clamp(48px, 7vw, 140px) !important;
      row-gap: 38px !important;
      width: 100% !important;
    }

    ${S} .cra-grid-large {
      row-gap: 32px !important;
    }

    ${S} .cra-info-card {
      width: 100% !important;
      min-width: 0 !important;
    }

    ${S} .cra-info-head {
      min-height: 56px !important;
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      padding: 0 24px !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--cra-accent) !important;
      border-radius: 0 10px 10px 0 !important;
      margin-bottom: 12px !important;
    }

    ${S} .cra-info-head img {
      width: 22px !important;
      height: 22px !important;
      display: block !important;
      flex: 0 0 22px !important;
      object-fit: contain !important;
    }

    ${S} .cra-info-head h3 {
      font-size: 14px !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
      color: var(--cra-primary) !important;
    }

    ${S} .cra-info-card ul {
      padding-left: 64px !important;
      max-width: 520px !important;
      list-style: disc !important;
      color: var(--cra-muted) !important;
    }

    ${S} .cra-info-card li {
      margin-bottom: 3px !important;
      font-size: 14px !important;
      line-height: 1.42 !important;
      font-weight: 400 !important;
      color: var(--cra-muted) !important;
    }

    @media (max-width: 1180px) {
      ${S} .cra-layout { gap: 34px !important; }
      ${S} .cra-rail { min-width: 240px !important; }
      ${S} .cra-grid { column-gap: 32px !important; }
    }

    @media (max-width: 980px) {
      ${S} .cra { padding: 2rem 0 !important; }
      ${S} .cra-heading { margin-bottom: 2rem !important; }
      ${S} .cra-layout { flex-direction: column !important; }
      ${S} .cra-rail, ${S} .cra-content { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .cra-nav { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; margin-bottom: 24px !important; }
      ${S} .cra-cta { display: none !important; }
      ${S} .cra-panel { min-height: 0 !important; }
    }

    @media (max-width: 720px) {
      ${S} .cra-inner { padding: 0 16px !important; }
      ${S} .cra-heading { font-size: 34px !important; }
      ${S} .cra-nav, ${S} .cra-grid { grid-template-columns: 1fr !important; }
      ${S} .cra-panel-intro h2 { margin-bottom: 14px !important; }
      ${S} .cra-info-card ul { padding-left: 22px !important; }
    }
  `;

  var HTML = `
    <section class="cra">
      <div class="cra-inner">
        <h1 class="cra-heading">Cybersecurity Risk Assessment &amp; Optional Services</h1>

        <div class="cra-layout">
          <aside class="cra-rail">
            <ul class="cra-nav" role="tablist">
              ${navMarkup()}
            </ul>

            <div class="cra-cta">
              <a href="https://calendly.com/becyberaware/30-minutes-with-dan-stratton-cissp-ccsp-cciso" target="_blank" rel="noopener noreferrer" class="cra-cta-button">Schedule a call <img src="${ARROW}" alt=""></a>
              <p>Stay a step ahead of emerging cyber threats with our Cybersecurity Risk Assessment service. Whether you choose a one-time assessment or include it as part of a comprehensive solution, this service helps protect your business, giving you peace of mind and a stronger security posture.</p>
              <p>Gain expert insight, proactive risk management, and the confidence that your organization is safeguarded against today's ever-changing cyber risks.</p>
            </div>
          </aside>

          <div class="cra-content">
            ${includesPanel()}
            ${optionalPanel()}
          </div>
        </div>
      </div>
    </section>
  `;

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[cra-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.cra-nav li');
    var panels = root.querySelectorAll('.cra-panel');
    var cur = 0;

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('cra-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('cra-on');

        cur = idx;
        nav[cur].classList.add('cra-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('cra-on');

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
