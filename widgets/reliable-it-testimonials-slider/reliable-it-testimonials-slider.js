(function () {
  'use strict';

  var ROOT_ID = 'shi-reliable-it-testimonials-slider-root';
  var S = '#' + ROOT_ID;

  function injectLink(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
  }

  injectLink('https://fonts.googleapis.com/css2?family=Play:wght@700&family=Poppins:wght@400;500;600;700&display=swap');

  var STAR_SVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.2752L7.85002 19.7752C7.66668 19.8919 7.47501 19.9419 7.27501 19.9252C7.07501 19.9085 6.90002 19.8419 6.75002 19.7252C6.60002 19.6085 6.48335 19.4627 6.40002 19.2877C6.31668 19.1127 6.30002 18.9169 6.35002 18.7002L7.45002 13.9752L3.77502 10.8002C3.60835 10.6502 3.50418 10.4794 3.46252 10.2877C3.42085 10.096 3.43335 9.90853 3.50002 9.72519C3.56668 9.54186 3.66668 9.39186 3.80002 9.2752C3.93335 9.15853 4.11668 9.08353 4.35002 9.0502L9.20002 8.6252L11.075 4.1752C11.1583 3.9752 11.2875 3.8252 11.4625 3.7252C11.6375 3.6252 11.8167 3.5752 12 3.5752C12.1833 3.5752 12.3625 3.6252 12.5375 3.7252C12.7125 3.8252 12.8417 3.9752 12.925 4.1752L14.8 8.6252L19.65 9.0502C19.8833 9.08353 20.0667 9.15853 20.2 9.2752C20.3333 9.39186 20.4333 9.54186 20.5 9.72519C20.5667 9.90853 20.5792 10.096 20.5375 10.2877C20.4958 10.4794 20.3917 10.6502 20.225 10.8002L16.55 13.9752L17.65 18.7002C17.7 18.9169 17.6833 19.1127 17.6 19.2877C17.5167 19.4627 17.4 19.6085 17.25 19.7252C17.1 19.8419 16.925 19.9085 16.725 19.9252C16.525 19.9419 16.3333 19.8919 16.15 19.7752L12 17.2752Z" /></svg>';

  var QUOTE_SVG = '<svg width="62" height="51" viewBox="0 0 62 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M33.75 44.1004L44.7001 23.5504L51.6001 21.7504C50.8001 23.1504 49.9001 24.3504 48.9001 25.3504C47.9001 26.3504 46.7501 26.8504 45.4501 26.8504C42.6501 26.8504 40.0501 25.6504 37.65 23.2504C35.25 20.8504 34.0501 17.8004 34.0501 14.1004C34.0501 10.2004 35.3501 6.90039 37.95 4.20039C40.6501 1.40039 43.9501 0.000387549 47.8501 0.000387549C51.5501 0.000387549 54.7501 1.40039 57.4501 4.20039C60.2501 6.90039 61.6501 10.2004 61.6501 14.1004C61.6501 15.7004 61.3001 17.6004 60.6001 19.8004C60.0001 21.9004 58.8001 24.6004 57.0001 27.9004L45.0001 50.1004L33.75 44.1004ZM4.90472e-05 44.1004L10.95 23.5504L17.7001 21.7504C17.0001 23.1504 16.1501 24.3504 15.1501 25.3504C14.15 26.3504 13 26.8504 11.7 26.8504C8.80005 26.8504 6.15005 25.6504 3.75005 23.2504C1.35005 20.8504 0.150049 17.8004 0.150049 14.1004C0.150049 10.2004 1.45005 6.90039 4.05005 4.20039C6.75005 1.40039 10.05 0.000387549 13.95 0.000387549C17.65 0.000387549 20.85 1.40039 23.55 4.20039C26.3501 6.90039 27.7501 10.2004 27.7501 14.1004C27.7501 15.7004 27.4501 17.6004 26.8501 19.8004C26.2501 21.9004 25.0501 24.6004 23.2501 27.9004L11.1 50.1004L4.90472e-05 44.1004Z" fill="currentColor"/></svg>';

  var testimonials = [
    {
      title: '"A \'quick fix\' from our IT team gave a hacker administrative access to our entire network."',
      rating: 5,
      body: 'An employee was granted temporary admin access that was never revoked, bypassing all controls. Months later, a phishing attack through that account led to a massive breach. Safe Harbour helped us implement proper policies and auditing to ensure a simple mistake can never expose our company to that level of risk again.',
      role: 'CHIEF FINANCIAL OFFICER',
      company: '(CFO)'
    },
    {
      title: '"We thought our IT team and insurance had us covered. We were wrong."',
      rating: 5,
      body: 'We dismissed a security assessment, only to face a crisis when our IT manager took medical leave during a breach. Safe Harbour provided the strategic oversight we were missing, proving that relying on an overworked internal team without certified external auditing is a risk no business can afford.',
      role: 'BUSINESS OWNER',
      company: 'Logistics Firm'
    }
  ];

  function starsMarkup(rating) {
    var html = '<div class="ts-stars">';
    for (var i = 0; i < rating; i++) {
      html += STAR_SVG;
    }
    html += '</div>';
    return html;
  }

  function testimonialMarkup(item) {
    return (
      '<article class="ts-card">' +
        '<div class="ts-card-inner">' +
          '<div class="ts-quote-icon" aria-hidden="true">' + QUOTE_SVG + '</div>' +
          '<div class="ts-content-top">' +
            '<h3 class="ts-card-title">' + item.title + '</h3>' +
            starsMarkup(item.rating) +
            '<p class="ts-card-body">' + item.body + '</p>' +
          '</div>' +
          '<footer class="ts-card-footer">' +
            '<span class="ts-role">' + item.role + '</span>' +
            '<span class="ts-bullet" aria-hidden="true"></span>' +
            '<span class="ts-company">' + item.company + '</span>' +
          '</footer>' +
        '</div>' +
      '</article>'
    );
  }

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      text-align: left !important;
    }

    ${S} {
      --ts-primary: #0E182C;
      --ts-secondary: #E08332; /* Orange accent color for Reliable IT Services */
      --ts-text-dark: #0E182C;
      --ts-text-body: #000000;
      --ts-border: #D7D7D7;
      display: block !important;
      width: 100% !important;
      overflow: hidden !important;
      background: #ffffff !important;
      color: var(--ts-text-body) !important;
    }

    ${S} h3, ${S} p {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} .ts-section {
      width: 100% !important;
      padding: clamp(24px, 3.5vw, 48px) 0 !important;
      background: #ffffff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .ts-inner {
      width: min(100%, 1400px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .ts-viewport {
      width: 100% !important;
      overflow: hidden !important;
      padding: 32px 40px !important;
      margin: -32px -40px !important;
    }

    ${S} .ts-grid {
      display: flex !important;
      flex-direction: row !important;
      gap: 28px !important;
      width: 100% !important;
    }

    ${S} .ts-card {
      flex: 0 0 calc((100% - 28px) / 2) !important;
      width: calc((100% - 28px) / 2) !important;
      max-width: calc((100% - 28px) / 2) !important;
      background: #ffffff !important;
      border: 0.5px solid var(--ts-border) !important;
      border-radius: 12px !important;
      box-shadow: 0px 4px 3px rgba(224, 131, 50, 0.15), 0px 10px 7.5px rgba(224, 131, 50, 0.15) !important;
      position: relative !important;
      transition: transform 0.25s ease, box-shadow 0.25s ease !important;
    }

    ${S} .ts-card:hover {
      transform: translateY(-4px) !important;
      box-shadow: 0px 8px 12px rgba(224, 131, 50, 0.2), 0px 18px 24px rgba(224, 131, 50, 0.15) !important;
    }

    ${S} .ts-card-inner {
      padding: 24px 28px !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      min-height: 250px !important;
      height: 100% !important;
      position: relative !important;
    }

    ${S} .ts-quote-icon {
      position: absolute !important;
      top: -16px !important;
      right: 24px !important;
      width: 44px !important;
      height: 36px !important;
      color: var(--ts-secondary) !important;
      z-index: 2 !important;
      pointer-events: none !important;
    }

    ${S} .ts-content-top {
      display: flex !important;
      flex-direction: column !important;
      gap: 10px !important;
    }

    ${S} .ts-card-title {
      font-family: 'Play', sans-serif !important;
      font-size: 16px !important;
      font-weight: 700 !important;
      line-height: 1.35 !important;
      color: var(--ts-text-dark) !important;
    }

    ${S} .ts-stars {
      display: flex !important;
      gap: 2px !important;
      color: var(--ts-secondary) !important;
    }

    ${S} .ts-stars svg {
      width: 18px !important;
      height: 18px !important;
      fill: currentColor !important;
    }

    ${S} .ts-card-body {
      font-family: 'Poppins', sans-serif !important;
      font-size: 13.5px !important;
      font-weight: 400 !important;
      line-height: 1.6 !important;
      color: var(--ts-text-body) !important;
    }

    ${S} .ts-card-footer {
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
      margin-top: 18px !important;
    }

    ${S} .ts-role {
      font-family: 'Play', sans-serif !important;
      font-size: 12.5px !important;
      font-weight: 700 !important;
      line-height: 1.3 !important;
      color: var(--ts-text-dark) !important;
      text-transform: uppercase !important;
    }

    ${S} .ts-bullet {
      width: 7px !important;
      height: 7px !important;
      background-color: var(--ts-secondary) !important;
      border-radius: 50% !important;
      flex-shrink: 0 !important;
    }

    ${S} .ts-company {
      font-family: 'Poppins', sans-serif !important;
      font-size: 12.5px !important;
      font-weight: 400 !important;
      line-height: 1.3 !important;
      color: var(--ts-text-body) !important;
    }

    @media (max-width: 768px) {
      ${S} .ts-inner {
        padding: 0 16px !important;
      }
      ${S} .ts-grid {
        flex-direction: column !important;
        gap: 20px !important;
      }
      ${S} .ts-card {
        flex: 0 0 100% !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      ${S} .ts-card-inner {
        padding: 20px 20px !important;
        min-height: auto !important;
      }
      ${S} .ts-quote-icon {
        width: 38px !important;
        height: 30px !important;
        top: -14px !important;
        right: 18px !important;
      }
      ${S} .ts-card-body {
        font-size: 13px !important;
        line-height: 1.55 !important;
      }
    }
  `;

  var HTML = `
    <section class="ts-section">
      <div class="ts-inner">
        <div class="ts-viewport">
          <div class="ts-grid">
            ${testimonials.map(testimonialMarkup).join('')}
          </div>
        </div>
      </div>
    </section>
  `;

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[ts-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
