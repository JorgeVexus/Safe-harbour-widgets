(function () {
  'use strict';

  var ROOT_ID = 'shi-key-service-areas-root';
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

  var tabs = [
    {
      label: '24/7 Threat Monitoring and Response',
      title: '24/7 Threat Monitoring and Response',
      intro: 'Protect your business from attacks-anytime, anywhere-with real-time analysis and response tools powered by AI and managed by our team of cybersecurity experts.',
      kicker: 'Features That Protect You:',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a247d6e9193bf39373c1f6e_Frame%20330.webp',
      imageFirst: false,
      why: 'Small businesses often lack time and resources to monitor systems 24/7. Our managed service ensures constant vigilance-without adding operational complexity.',
      features: [
        {
          title: 'AI-Driven Attack Detection',
          body: 'Identify ransomware, phishing, zero-day vulnerabilities, and other malicious activity in real time.'
        },
        {
          title: 'Managed EDR (Endpoint Detection and Response)',
          body: 'Continuous monitoring and remediation of threats detected on employee devices.'
        },
        {
          title: 'Threat Hunting Powered by Crowdstrike',
          body: 'Experts search for hidden cyber threats to stay ahead of attackers.'
        }
      ]
    },
    {
      label: 'Immutable Ransomware-Proof Backups',
      title: 'Immutable Ransomware-Proof Backups',
      intro: "In the event of a ransomware attack, you'll never lose access to your critical data or be forced to pay a ransom.",
      kicker: 'Built-in Recovery Solutions:',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4c187de288aef7f1ec63a8_immutable.png',
      imageFirst: true,
      why: 'Recovering from ransomware can take weeks without proactive measures. Immutable backups ensure quick, reliable recovery without payments or delays.',
      features: [
        {
          title: 'Immutable, Tamper-Proof Backups',
          body: 'Backups that cannot be altered, deleted, or encrypted-even by attackers.'
        },
        {
          title: 'Ransomware-Free Recovery',
          body: 'Restore operations quickly with ransomware-clean backups that minimize downtime.'
        },
        {
          title: 'Daily Automated Backups to the Cloud',
          body: 'Rapid recovery from any point in time.'
        }
      ]
    },
    {
      label: 'Proactive Patch Management',
      title: 'Proactive Patch Management',
      intro: 'Unpatched systems are the leading cause of cyber breaches. Our automated patching services eliminate vulnerabilities before attackers exploit them.',
      kicker: '',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4c187bf26f3f23b38fb4ac_proactive.png',
      imageFirst: false,
      why: 'Keeping systems up-to-date can be time-consuming. Managed patching relieves the burden, ensuring your business stays secure around the clock.',
      features: [
        {
          title: 'Automated Updates',
          body: 'Regularly patch systems, software, and third-party apps.'
        },
        {
          title: 'Zero-Day Protections',
          body: 'Quickly secure newly identified vulnerabilities with AI-driven recommendations.'
        },
        {
          title: 'Compatibility Testing',
          body: 'Patches are reviewed, tested, and deployed with minimal downtime.'
        }
      ]
    },
    {
      label: 'Employee Security Awareness Training',
      title: 'Employee Security Awareness Training',
      intro: 'Strengthen your first line of defense-your employees. Our training programs minimize risks caused by human error.',
      kicker: '',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4c187a3db8cea2a9cf4a40_employee.png',
      imageFirst: true,
      why: 'Over 90% of breaches begin with phishing attacks. Educating employees ensures your team is prepared, not panicked.',
      features: [
        {
          title: 'Simulated Phishing Tests',
          body: 'Identify and fix vulnerabilities in employee responses.'
        },
        {
          title: 'Incident Reporting Guidance',
          body: 'Enable employees to report and respond to suspicious behavior quickly.'
        }
      ]
    }
  ];

  function featureMarkup(feature) {
    return (
      '<article class="ksa-feature">' +
        '<div class="ksa-feature-head">' +
          '<img src="' + CHECK + '" alt="" aria-hidden="true">' +
          '<h3>' + feature.title + '</h3>' +
        '</div>' +
        '<p>' + feature.body + '</p>' +
      '</article>'
    );
  }

  function panelMarkup(tab, index) {
    var media = '<div class="ksa-media"><img src="' + tab.image + '" alt=""></div>';
    var why =
      '<div class="ksa-why">' +
        '<h3>Why It Matters:</h3>' +
        '<p>' + tab.why + '</p>' +
      '</div>';

    return (
      '<div class="ksa-panel' + (index === 0 ? ' ksa-on' : '') + '" role="tabpanel">' +
        '<div class="ksa-panel-intro">' +
          '<h2>' + tab.title + '</h2>' +
          '<p>' + tab.intro + '</p>' +
        '</div>' +
        (tab.kicker ? '<p class="ksa-kicker">' + tab.kicker + '</p>' : '') +
        '<div class="ksa-feature-grid">' + tab.features.map(featureMarkup).join('') + '</div>' +
        '<div class="ksa-media-row ' + (tab.imageFirst ? 'ksa-image-first' : '') + '">' +
          (tab.imageFirst ? media + why : why + media) +
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
      --ksa-accent: ${ACCENT};
      --ksa-primary: #0E182C;
      --ksa-muted: #45556C;
      --ksa-disabled: #94A3B8;
      display: block !important;
      width: 100% !important;
      color: var(--ksa-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} ul { list-style: none !important; }

    ${S} .ksa {
      width: 100% !important;
      min-height: 760px !important;
      padding: clamp(42px, 5vw, 74px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .ksa-inner {
      width: min(100%, 1536px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .ksa-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(32px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--ksa-primary) !important;
      margin-bottom: clamp(44px, 5vw, 70px) !important;
    }

    ${S} .ksa-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: clamp(38px, 4vw, 64px) !important;
      width: 100% !important;
    }

    ${S} .ksa-rail {
      flex: 0 0 25% !important;
      min-width: 280px !important;
      max-width: 379px !important;
    }

    ${S} .ksa-content {
      flex: 1 1 75% !important;
      min-width: 0 !important;
    }

    ${S} .ksa-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
    }

    ${S} .ksa-nav li {
      display: flex !important;
      align-items: center !important;
      min-height: 56px !important;
      padding: 0 24px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--ksa-disabled) !important;
      background: transparent !important;
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .ksa-nav li:hover {
      color: var(--ksa-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .ksa-nav li.ksa-on {
      color: var(--ksa-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--ksa-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .ksa-panel {
      display: none !important;
      min-height: 620px !important;
      animation: ksa-rise 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    ${S} .ksa-panel.ksa-on {
      display: block !important;
    }

    @keyframes ksa-rise {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .ksa-panel-intro {
      margin-bottom: 20px !important;
    }

    ${S} .ksa-panel-intro h2 {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(24px, 2vw, 30px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--ksa-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 14px !important;
    }

    ${S} .ksa-panel-intro p {
      max-width: 980px !important;
      font-size: 16px !important;
      line-height: 1.45 !important;
      font-weight: 400 !important;
      color: rgba(14, 24, 44, 0.8) !important;
    }

    ${S} .ksa-kicker {
      color: var(--ksa-accent) !important;
      font-size: 16px !important;
      line-height: 1.5 !important;
      font-weight: 700 !important;
      margin-bottom: 22px !important;
    }

    ${S} .ksa-feature-grid {
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      gap: 36px !important;
      width: 100% !important;
      margin-bottom: 32px !important;
    }

    ${S} .ksa-feature {
      min-width: 0 !important;
    }

    ${S} .ksa-feature-head {
      min-height: 56px !important;
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      padding: 0 24px !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--ksa-accent) !important;
      border-radius: 0 10px 10px 0 !important;
      margin-bottom: 12px !important;
    }

    ${S} .ksa-feature-head img {
      width: 22px !important;
      height: 22px !important;
      display: block !important;
      flex: 0 0 22px !important;
      object-fit: contain !important;
    }

    ${S} .ksa-feature-head h3 {
      font-size: 14px !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
      color: var(--ksa-primary) !important;
    }

    ${S} .ksa-feature > p {
      padding-left: 30px !important;
      max-width: 340px !important;
      font-size: 14px !important;
      line-height: 1.42 !important;
      color: var(--ksa-muted) !important;
    }

    ${S} .ksa-media-row {
      display: flex !important;
      align-items: center !important;
      gap: 32px !important;
      width: 100% !important;
    }

    ${S} .ksa-media {
      flex: 1 1 auto !important;
      height: clamp(260px, 25vw, 397px) !important;
      border-radius: 12px !important;
      overflow: hidden !important;
      background: #E2E8F0 !important;
    }

    ${S} .ksa-media img {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    ${S} .ksa-why {
      flex: 0 0 325px !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 18px !important;
      justify-content: center !important;
    }

    ${S} .ksa-why h3 {
      font-size: 14px !important;
      line-height: 1.5 !important;
      font-weight: 700 !important;
      color: var(--ksa-primary) !important;
    }

    ${S} .ksa-why p {
      font-size: 14px !important;
      line-height: 1.42 !important;
      color: var(--ksa-muted) !important;
    }

    @media (max-width: 1180px) {
      ${S} .ksa-feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
    }

    @media (max-width: 980px) {
      ${S} .ksa { padding: 2rem 0 !important; }
      ${S} .ksa-heading { margin-bottom: 2rem !important; }
      ${S} .ksa-layout { flex-direction: column !important; }
      ${S} .ksa-rail, ${S} .ksa-content { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .ksa-nav { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      ${S} .ksa-panel { min-height: 0 !important; }
      ${S} .ksa-media-row, ${S} .ksa-media-row.ksa-image-first { flex-direction: column !important; align-items: stretch !important; }
      ${S} .ksa-why { flex: none !important; width: 100% !important; order: 2 !important; }
      ${S} .ksa-media { order: 1 !important; }
    }

    @media (max-width: 720px) {
      ${S} .ksa-inner { padding: 0 16px !important; }
      ${S} .ksa-heading { font-size: 34px !important; }
      ${S} .ksa-nav, ${S} .ksa-feature-grid { grid-template-columns: 1fr !important; }
      ${S} .ksa-feature > p { padding-left: 0 !important; }
      ${S} .ksa-media { height: 240px !important; }
    }
  `;

  var navHTML = tabs.map(function (tab, index) {
    return '<li class="' + (index === 0 ? 'ksa-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' + tab.label + '</li>';
  }).join('');

  var panelsHTML = tabs.map(panelMarkup).join('');

  var HTML = `
    <section class="ksa">
      <div class="ksa-inner">
        <h1 class="ksa-heading">Key Service Areas</h1>
        <div class="ksa-layout">
          <aside class="ksa-rail">
            <ul class="ksa-nav" role="tablist">
              ${navHTML}
            </ul>
          </aside>
          <div class="ksa-content">
            ${panelsHTML}
          </div>
        </div>
      </div>
    </section>
  `;

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[ksa-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.ksa-nav li');
    var panels = root.querySelectorAll('.ksa-panel');
    var cur = 0;

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('ksa-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('ksa-on');

        cur = idx;
        nav[cur].classList.add('ksa-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('ksa-on');

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
