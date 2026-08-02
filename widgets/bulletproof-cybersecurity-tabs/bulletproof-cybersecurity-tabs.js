(function () {
  'use strict';

  var ROOT_ID = 'shi-bulletproof-cybersecurity-root';
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
  var ARROW = 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493869da8eb02bf63548dc_Icon%20arrow%20button.svg';

  var tabs = [
    {
      label: '24/7 AI-Powered Monitoring',
      title: '24/7 Threat Monitoring And Response',
      body: 'Protect your business from attacks-anytime, anywhere-with real-time analysis and response tools powered by AI and managed by our team of cybersecurity experts. AI-Driven Attack Detection identifies ransomware, phishing, zero-day vulnerabilities, and other malicious activity in real time.',
      cta: 'Secure Real-Time Threat Protection',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69d94d5e7386117a5c0a7b95_monitoring.webp',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493a62a4873ec618152776_tiempo.svg',
      imageFirst: true
    },
    {
      label: 'Always-Recover Cloud Backups',
      title: 'Immutable Ransomware-Proof Backups',
      body: 'Our Data Protection Service offers a cyber-resilient, cloud-native backup solution designed to safeguard your critical applications and systems while enabling quick, worry-free recovery. With ransomware-proof architecture, we empower businesses to mitigate risk and be ready for anything.',
      cta: 'Lock Down Your Data',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69d94d5e5331cd19ad9c1641_ransomware.webp',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493a6270325ae14a9a30a7_recover.svg',
      imageFirst: false
    },
    {
      label: 'Proactive Patch Management',
      title: 'Proactive Patch Management',
      body: 'Unpatched systems are the leading cause of cyber breaches. Our automated patching services eliminate vulnerabilities before attackers exploit them. Automate updates regularly patch systems, software, and third-party apps, while Zero-Day Protections quickly secure newly identified vulnerabilities with AI-driven recommendations.',
      cta: 'Secure Your Systems Proactively',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69d94d5e09963fb7ccf95818_proactive.webp',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493a62ea04f502e02df9c7_managed.svg',
      imageFirst: true
    },
    {
      label: 'Cybersecurity Risk Assessments',
      title: 'Know Your True Security Risk',
      body: 'The Cybersecurity Risk Assessment is a comprehensive offering designed to help businesses identify, evaluate, and mitigate vulnerabilities in their IT environments. Based on the NIST Cybersecurity Framework, businesses can better understand their risk posture, implement tailored cybersecurity strategies, and protect critical assets.',
      cta: 'Get Your NIST-Aligned Security Strategy',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69d94d5e44d71a84e576a3c5_know%20your%20true.webp',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493a610b17a51efe841a9e_cybersecurty.svg',
      imageFirst: false
    },
    {
      label: 'Compliance Without Complexity',
      title: 'Compliance Solutions - Simplifying Compliance. Empowering Growth',
      body: 'With our end-to-end support spanning readiness assessments, alignment, and audit preparation-we simplify the path to compliance while eliminating risks, saving time, and fostering continuous improvement. For businesses in healthcare, finance, SaaS, and beyond, we deliver enterprise-grade compliance tailored to your growth.',
      cta: 'Eliminate Compliance Risks Today',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69d94d5ef9a3a5bda2ffa389_compliance%20solutions.webp',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493a618a1508d3eaf055b5_compliance.svg',
      imageFirst: true
    },
    {
      label: 'AI Security vs AI Attacks',
      title: 'AI-Driven Security Counters Against AI-Driven Attacks',
      body: 'The threat landscape is shifting to AI-enhanced attacks that evolve in real time. Our advanced AI monitoring, detection, and response helps reduce incidents by as much as 40%, turning cybersecurity into a strategic strength rather than a constant worry.',
      cta: 'Deploy Advanced AI Threat Monitoring',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69d94d5ecf2d33f98bcbcac0_AI%20driven.webp',
      icon: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493a612a6dee9e17b5e23c_seguro.svg',
      imageFirst: false
    }
  ];

  function iconSpan(className, url) {
    return '<span class="' + className + '" style="--bpc-icon: url(' + url + ')" aria-hidden="true"></span>';
  }

  function panelMarkup(tab, index) {
    var text =
      '<div class="bpc-text">' +
        iconSpan('bpc-panel-icon', tab.icon) +
        '<h2 class="bpc-panel-title">' + tab.title + '</h2>' +
        '<p class="bpc-panel-body">' + tab.body + '</p>' +
        '<a class="bpc-cta" href="#">' + tab.cta + ' <img src="' + ARROW + '" alt="" aria-hidden="true"></a>' +
      '</div>';
    var media =
      '<div class="bpc-media" aria-hidden="true">' +
        '<img src="' + tab.image + '" alt="">' +
        '<span class="bpc-media-shade"></span>' +
      '</div>';

    return (
      '<div class="bpc-panel' + (index === 0 ? ' bpc-on' : '') + '" id="bpc-panel-' + index + '" role="tabpanel">' +
        (tab.imageFirst ? media + text : text + media) +
      '</div>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --bpc-accent: ${ACCENT};
      --bpc-primary: #0E182C;
      --bpc-muted: #64748B;
      --bpc-disabled: #94A3B8;
      color: var(--bpc-primary) !important;
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

    ${S} .bpc {
      position: relative !important;
      width: 100% !important;
      min-height: auto !important;
      padding: 3rem 0 1.5rem 0 !important;
      background: #fff !important;
      overflow: hidden !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .bpc-inner {
      position: relative !important;
      width: min(100%, 1400px) !important;
      margin: 0 auto !important;
      padding: 0 24px 0 0 !important;
    }

    ${S} .bpc-header {
      display: none !important;
    }

    ${S} .bpc-eyebrow {
      font-family: Arial, sans-serif !important;
      font-size: 10px !important;
      line-height: 1.4 !important;
      font-weight: 700 !important;
      letter-spacing: 0.1em !important;
      text-transform: uppercase !important;
      color: var(--bpc-accent) !important;
      margin-bottom: 0.55rem !important;
    }

    ${S} .bpc-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(28px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--bpc-primary) !important;
      margin-bottom: 0.75rem !important;
    }

    ${S} .bpc-desc {
      max-width: 844px !important;
      font-size: 14px !important;
      line-height: 1.6 !important;
      font-weight: 400 !important;
      color: #111 !important;
    }

    ${S} .bpc-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: 50px !important;
      width: 100% !important;
      min-width: 100% !important;
      box-sizing: border-box !important;
    }

    ${S} .bpc-rail {
      flex: 0 0 300px !important;
      width: 300px !important;
      min-width: 300px !important;
      max-width: 300px !important;
    }

    ${S} .bpc-content {
      flex: 1 1 0% !important;
      width: calc(100% - 350px) !important;
      min-width: 0 !important;
    }

    ${S} .bpc-panel {
      display: none !important;
      align-items: flex-start !important;
      justify-content: space-between !important;
      gap: clamp(32px, 3.4vw, 64px) !important;
      width: 100% !important;
      min-height: auto !important;
    }

    ${S} .bpc-panel.bpc-on {
      display: flex !important;
      animation: bpc-slide-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    @keyframes bpc-slide-in {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .bpc-media {
      position: relative !important;
      flex: 0 1 48% !important;
      min-width: 320px !important;
      max-width: 520px !important;
      height: clamp(260px, 24vw, 400px) !important;
      border-radius: 16px !important;
      overflow: hidden !important;
      background: #0E182C !important;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25) !important;
      margin-top: 0 !important;
    }

    ${S} .bpc-media img {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    ${S} .bpc-media-shade {
      position: absolute !important;
      inset: 0 !important;
      background: linear-gradient(to top, rgba(14,24,44,0.5), rgba(14,24,44,0)) !important;
      pointer-events: none !important;
    }

    ${S} .bpc-text {
      flex: 0 1 48% !important;
      max-width: 520px !important;
      min-width: 0 !important;
      margin-top: 0 !important;
      padding-top: 0 !important;
    }

    ${S} .bpc-panel-icon {
      width: 38px !important;
      height: 38px !important;
      display: block !important;
      margin-top: 0 !important;
      margin-bottom: 0.9rem !important;
      background: var(--bpc-accent) !important;
      -webkit-mask: var(--bpc-icon) center / contain no-repeat !important;
      mask: var(--bpc-icon) center / contain no-repeat !important;
    }

    ${S} .bpc-panel-title {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(20px, 1.85vw, 30px) !important;
      line-height: 1.22 !important;
      font-weight: 700 !important;
      color: var(--bpc-primary) !important;
      margin-bottom: 1.4rem !important;
    }

    ${S} .bpc-panel-body {
      font-size: 14px !important;
      line-height: 1.65 !important;
      color: #111 !important;
      margin-bottom: 1.55rem !important;
    }

    ${S} .bpc-cta {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 10px !important;
      min-height: 40px !important;
      padding: 10px 16px !important;
      border-radius: 8px !important;
      background: var(--bpc-accent) !important;
      color: #fff !important;
      font-family: 'Play', sans-serif !important;
      font-size: 13px !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      box-shadow: 0 10px 18px rgba(40,125,152,0.22) !important;
      transition: opacity 0.2s, transform 0.2s !important;
      white-space: nowrap !important;
    }

    ${S} .bpc-cta:hover {
      opacity: 0.9 !important;
      transform: translateY(-1px) !important;
    }

    ${S} .bpc-cta img {
      width: 14px !important;
      height: 14px !important;
      display: block !important;
      flex-shrink: 0 !important;
    }

    ${S} .bpc-rail {
      flex: 0 0 25% !important;
      min-width: 300px !important;
      max-width: 356px !important;
    }

    ${S} .bpc-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
      margin-bottom: 12px !important;
    }

    ${S} .bpc-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 20px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--bpc-disabled) !important;
      font-size: 13px !important;
      line-height: 1.25 !important;
      font-weight: 500 !important;
      cursor: pointer !important;
      user-select: none !important;
      background: transparent !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .bpc-nav li:hover {
      color: var(--bpc-primary) !important;
      background: #EFF6FF !important;
    }

    ${S} .bpc-nav li.bpc-on {
      color: var(--bpc-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--bpc-accent) !important;
      font-weight: 600 !important;
    }

    ${S} .bpc-nav-icon {
      width: 18px !important;
      height: 18px !important;
      flex: 0 0 18px !important;
      display: block !important;
      background: var(--bpc-disabled) !important;
      -webkit-mask: var(--bpc-icon) center / contain no-repeat !important;
      mask: var(--bpc-icon) center / contain no-repeat !important;
      transition: background 0.2s !important;
    }

    ${S} .bpc-nav li:hover .bpc-nav-icon {
      background: var(--bpc-accent) !important;
    }

    ${S} .bpc-nav li.bpc-on .bpc-nav-icon {
      background: var(--bpc-accent) !important;
    }

    ${S} .bpc-help {
      width: 100% !important;
      padding: 24px !important;
      background: #F8FAFC !important;
      border: 1px solid #F1F5F9 !important;
      border-radius: 14px !important;
    }

    ${S} .bpc-help-title {
      font-family: 'Play', sans-serif !important;
      font-size: 14px !important;
      line-height: 1.35 !important;
      font-weight: 700 !important;
      color: var(--bpc-primary) !important;
      margin-bottom: 0.45rem !important;
    }

    ${S} .bpc-help-body {
      font-size: 12px !important;
      line-height: 1.55 !important;
      color: #111 !important;
      margin-bottom: 0.75rem !important;
    }

    ${S} .bpc-help a {
      color: var(--bpc-accent) !important;
      font-size: 12px !important;
      line-height: 1.4 !important;
      font-weight: 700 !important;
      text-decoration: underline !important;
    }

    @media (max-width: 980px) {
      ${S} .bpc { padding: 2rem 0 !important; }
      ${S} .bpc-layout { flex-direction: column !important; }
      ${S} .bpc-rail { order: -1 !important; flex: none !important; min-width: 0 !important; max-width: none !important; width: 100% !important; }
      ${S} .bpc-content { width: 100% !important; }
      ${S} .bpc-panel.bpc-on { flex-direction: column !important; align-items: stretch !important; }
      ${S} .bpc-media, ${S} .bpc-text { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .bpc-media { height: 280px !important; }
      ${S} .bpc-nav { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
    }

    @media (max-width: 620px) {
      ${S} .bpc-inner { padding: 0 16px !important; }
      ${S} .bpc-nav { grid-template-columns: 1fr !important; }
      ${S} .bpc-heading { font-size: 30px !important; }
      ${S} .bpc-desc, ${S} .bpc-panel-body { font-size: 13px !important; }
      ${S} .bpc-media { height: 230px !important; }
      ${S} .bpc-cta { white-space: normal !important; text-align: center !important; }
    }
  `;

  var navHTML = tabs.map(function (tab, index) {
    return (
      '<li class="' + (index === 0 ? 'bpc-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' +
        iconSpan('bpc-nav-icon', tab.icon) +
        '<span>' + tab.label + '</span>' +
      '</li>'
    );
  }).join('');

  var panelsHTML = tabs.map(panelMarkup).join('');

  var HTML = `
    <section class="bpc">
      <div class="bpc-inner">
        <div class="bpc-layout">
          <div class="bpc-content">
            ${panelsHTML}
          </div>

          <aside class="bpc-rail">
            <ul class="bpc-nav" role="tablist">
              ${navHTML}
            </ul>

            <div class="bpc-help">
              <p class="bpc-help-title">Need help deciding?</p>
              <p class="bpc-help-body">Our architects can design a custom roadmap for your business.</p>
              <a href="/#cta-form">Talk to an expert</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[bpc-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.bpc-nav li');
    var panels = root.querySelectorAll('.bpc-panel');
    var cur = 0;

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('bpc-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('bpc-on');

        cur = idx;
        nav[cur].classList.add('bpc-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('bpc-on');

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
