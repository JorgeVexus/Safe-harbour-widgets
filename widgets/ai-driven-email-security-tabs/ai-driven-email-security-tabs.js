(function () {
  'use strict';

  var ROOT_ID = 'shi-ai-driven-email-security-root';
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
      label: 'AI-Driven Email Security',
      title: 'AI-Driven Email Security',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4c1da5326aa466f8e1cca8_ai%20driven%20email.avif',
      imageFirst: false,
      why: 'Stops advanced threats like phishing before they disrupt your business and reduces employee reliance on IT teams for email monitoring.',
      features: [
        {
          title: 'Zero Trust Model',
          body: 'Every email is vetted before it reaches your inbox, ensuring phishing, malware, and spoofing attempts are stopped cold.'
        },
        {
          title: 'Dynamic Heads-Up Display (HUD)',
          body: 'Understand email risks at a glance with our user-friendly, color-coded security dashboard.'
        },
        {
          title: 'X-Ray Email Previews',
          body: 'Safely analyze suspicious emails without risk of infection, empowering non-technical users to make informed decisions.'
        }
      ]
    },
    {
      label: 'Privacy-First Design for Compliance',
      title: 'Privacy-First Design for Compliance',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4c1da624800f4eb635c1cf_privacy%20first.avif',
      imageFirst: true,
      why: 'Protects sensitive data, ensures compliance, and builds trust with your customers.',
      features: [
        {
          title: 'Automatic Email Encryption',
          body: 'Send sensitive communications securely while meeting GDPR, HIPAA, or other regulatory standards.'
        },
        {
          title: 'Lockbox Protection',
          body: 'Safeguard critical conversations with advanced MFA and encryption features.'
        },
        {
          title: 'Burner Email Addresses',
          body: "Reduce spam and ensure untrusted communications can't access your primary inbox."
        }
      ]
    },
    {
      label: 'Productivity-Boosting Features',
      title: 'Productivity-Boosting Features',
      image: 'https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a4c1da779e7896d4ca2090b_productivity%20boosting.avif',
      imageFirst: false,
      why: 'Keeps your team focused on business-critical tasks while saving hours every week.',
      features: [
        {
          title: 'Bundler for Non-Urgent Emails',
          body: 'Focus on what is critical while less pressing emails are organized for later review, with AI-generated summaries.'
        },
        {
          title: 'Spotlight Search',
          body: 'Take control of your inbox with intuitive search tools that deliver results faster than ever.'
        },
        {
          title: 'New Sender Review',
          body: 'Unknown senders are flagged for verification, helping you manage inbox chaos.'
        }
      ]
    }
  ];

  function featureMarkup(feature) {
    return (
      '<article class="aes-feature">' +
        '<div class="aes-feature-head">' +
          '<img src="' + CHECK + '" alt="" aria-hidden="true">' +
          '<h3>' + feature.title + '</h3>' +
        '</div>' +
        '<p>' + feature.body + '</p>' +
      '</article>'
    );
  }

  function panelMarkup(tab, index) {
    var media = '<div class="aes-media"><img src="' + tab.image + '" alt=""></div>';
    var why =
      '<div class="aes-why">' +
        '<h3>How This Helps:</h3>' +
        '<p>' + tab.why + '</p>' +
      '</div>';

    return (
      '<div class="aes-panel' + (index === 0 ? ' aes-on' : '') + '" role="tabpanel">' +
        '<h2>' + tab.title + '</h2>' +
        '<div class="aes-feature-grid">' + tab.features.map(featureMarkup).join('') + '</div>' +
        '<div class="aes-media-row ' + (tab.imageFirst ? 'aes-image-first' : '') + '">' +
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
      --aes-accent: ${ACCENT};
      --aes-primary: #0E182C;
      --aes-muted: #45556C;
      --aes-disabled: #94A3B8;
      display: block !important;
      width: 100% !important;
      color: var(--aes-primary) !important;
      background: #fff !important;
      overflow: hidden !important;
    }

    ${S} h1, ${S} h2, ${S} h3, ${S} p, ${S} ul, ${S} li {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} ul { list-style: none !important; }

    ${S} .aes {
      width: 100% !important;
      min-height: 720px !important;
      padding: clamp(42px, 5vw, 74px) 0 !important;
      background: #fff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .aes-inner {
      width: min(100%, 1536px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .aes-top {
      margin-bottom: clamp(42px, 5vw, 70px) !important;
    }

    ${S} .aes-heading {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(32px, 3vw, 48px) !important;
      line-height: 1 !important;
      font-weight: 700 !important;
      color: var(--aes-primary) !important;
      margin-bottom: 14px !important;
    }

    ${S} .aes-subtitle {
      max-width: 820px !important;
      font-size: clamp(14px, 1.1vw, 18px) !important;
      line-height: 1.55 !important;
      font-weight: 400 !important;
      color: var(--aes-muted) !important;
    }

    ${S} .aes-layout {
      display: flex !important;
      align-items: flex-start !important;
      gap: clamp(38px, 4vw, 64px) !important;
      width: 100% !important;
    }

    ${S} .aes-rail {
      flex: 0 0 25% !important;
      min-width: 280px !important;
      max-width: 379px !important;
    }

    ${S} .aes-content {
      flex: 1 1 75% !important;
      min-width: 0 !important;
    }

    ${S} .aes-nav {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
    }

    ${S} .aes-nav li {
      display: flex !important;
      align-items: center !important;
      min-height: 56px !important;
      padding: 0 24px !important;
      border-left: 3px solid #F1F5F9 !important;
      border-radius: 0 10px 10px 0 !important;
      color: var(--aes-disabled) !important;
      background: transparent !important;
      font-size: 14px !important;
      line-height: 1.25 !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      user-select: none !important;
      transition: color 0.2s, background 0.2s, border-color 0.2s !important;
    }

    ${S} .aes-nav li:hover {
      color: var(--aes-primary) !important;
      background: rgba(248,250,252,0.72) !important;
    }

    ${S} .aes-nav li.aes-on {
      color: var(--aes-primary) !important;
      background: #F8FAFC !important;
      border-left-color: var(--aes-accent) !important;
      font-weight: 700 !important;
    }

    ${S} .aes-panel {
      display: none !important;
      min-height: 600px !important;
      animation: aes-rise 0.38s cubic-bezier(0.22, 1, 0.36, 1) both !important;
    }

    ${S} .aes-panel.aes-on {
      display: block !important;
    }

    @keyframes aes-rise {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ${S} .aes-panel h2 {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(24px, 2vw, 30px) !important;
      line-height: 1.16 !important;
      font-weight: 700 !important;
      color: var(--aes-primary) !important;
      text-transform: uppercase !important;
      margin-bottom: 32px !important;
    }

    ${S} .aes-feature-grid {
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      gap: 36px !important;
      width: 100% !important;
      margin-bottom: 40px !important;
    }

    ${S} .aes-feature {
      min-width: 0 !important;
    }

    ${S} .aes-feature-head {
      min-height: 56px !important;
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      padding: 0 24px !important;
      background: #F8FAFC !important;
      border-left: 3px solid var(--aes-accent) !important;
      border-radius: 0 10px 10px 0 !important;
      margin-bottom: 12px !important;
    }

    ${S} .aes-feature-head img {
      width: 22px !important;
      height: 22px !important;
      display: block !important;
      flex: 0 0 22px !important;
      object-fit: contain !important;
    }

    ${S} .aes-feature-head h3 {
      font-size: 14px !important;
      line-height: 1.3 !important;
      font-weight: 700 !important;
      color: var(--aes-primary) !important;
    }

    ${S} .aes-feature > p {
      padding-left: 30px !important;
      max-width: 340px !important;
      font-size: 14px !important;
      line-height: 1.42 !important;
      color: var(--aes-muted) !important;
    }

    ${S} .aes-media-row {
      display: flex !important;
      align-items: center !important;
      gap: 32px !important;
      width: 100% !important;
    }

    ${S} .aes-media {
      flex: 1 1 auto !important;
      height: clamp(260px, 25vw, 397px) !important;
      border-radius: 12px !important;
      overflow: hidden !important;
      background: #E2E8F0 !important;
    }

    ${S} .aes-media img {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    ${S} .aes-why {
      flex: 0 0 325px !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 18px !important;
      justify-content: center !important;
    }

    ${S} .aes-why h3 {
      font-size: 14px !important;
      line-height: 1.5 !important;
      font-weight: 700 !important;
      color: var(--aes-primary) !important;
    }

    ${S} .aes-why p {
      font-size: 14px !important;
      line-height: 1.42 !important;
      color: var(--aes-muted) !important;
    }

    @media (max-width: 1180px) {
      ${S} .aes-feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
    }

    @media (max-width: 980px) {
      ${S} .aes { padding: 2rem 0 !important; }
      ${S} .aes-top { margin-bottom: 2rem !important; }
      ${S} .aes-layout { flex-direction: column !important; }
      ${S} .aes-rail, ${S} .aes-content { width: 100% !important; max-width: none !important; min-width: 0 !important; flex: none !important; }
      ${S} .aes-nav { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      ${S} .aes-panel { min-height: 0 !important; }
      ${S} .aes-media-row, ${S} .aes-media-row.aes-image-first { flex-direction: column !important; align-items: stretch !important; }
      ${S} .aes-why { flex: none !important; width: 100% !important; order: 2 !important; }
      ${S} .aes-media { order: 1 !important; }
    }

    @media (max-width: 720px) {
      ${S} .aes-inner { padding: 0 16px !important; }
      ${S} .aes-heading { font-size: 34px !important; }
      ${S} .aes-nav, ${S} .aes-feature-grid { grid-template-columns: 1fr !important; }
      ${S} .aes-feature > p { padding-left: 0 !important; }
      ${S} .aes-media { height: 240px !important; }
    }
  `;

  var navHTML = tabs.map(function (tab, index) {
    return '<li class="' + (index === 0 ? 'aes-on' : '') + '" role="tab" aria-selected="' + (index === 0 ? 'true' : 'false') + '" data-t="' + index + '">' + tab.label + '</li>';
  }).join('');

  var panelsHTML = tabs.map(panelMarkup).join('');

  var HTML = `
    <section class="aes">
      <div class="aes-inner">
        <div class="aes-top">
          <h1 class="aes-heading">AI-Driven Email Security</h1>
          <p class="aes-subtitle">Built for Small Businesses - Designed to Solve Your Email Challenges<br>Our email security solution simplifies your inbox while delivering cutting-edge protection. Here's how:</p>
        </div>

        <div class="aes-layout">
          <aside class="aes-rail">
            <ul class="aes-nav" role="tablist">
              ${navHTML}
            </ul>
          </aside>
          <div class="aes-content">
            ${panelsHTML}
          </div>
        </div>
      </div>
    </section>
  `;

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[aes-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;

    var nav = root.querySelectorAll('.aes-nav li');
    var panels = root.querySelectorAll('.aes-panel');
    var cur = 0;

    nav.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t, 10);
        if (idx === cur) return;

        nav[cur].classList.remove('aes-on');
        nav[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('aes-on');

        cur = idx;
        nav[cur].classList.add('aes-on');
        nav[cur].setAttribute('aria-selected', 'true');

        var panel = panels[cur];
        panel.style.animation = 'none';
        panel.offsetHeight;
        panel.style.animation = '';
        panel.classList.add('aes-on');

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
