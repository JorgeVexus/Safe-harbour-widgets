(function () {
  'use strict';

  var ROOT_ID = 'shi-smart-ai-testimonials-slider-root';
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
      title: '"What used to take hours... now happens automatically—saving us over 120 hours a month."',
      rating: 5,
      body: 'Safe Harbour\'s AI solutions transformed our accounting operations. Bookkeeping time dropped by 60%, accuracy improved, and our team is now empowered to focus on higher-value advisory work. Their solutions have truly elevated our business.',
      role: 'CFO',
      company: 'Mid-Sized Accounting Firm'
    },
    {
      title: '"AI transformed our operations—ROI was undeniable! 50% productivity boost and 30% cost savings in just six months!"',
      rating: 5,
      body: 'By implementing Safe Harbour\'s AI solutions to automate scheduling and optimize inventory, we cut our equipment downtime by 40%. Their AI-driven quality control also significantly reduced waste, making us more competitive than ever.',
      role: 'OWNER',
      company: 'Manufacturing Partner'
    },
    {
      title: '"AI shouldn\'t be a threat—it should be a tool for growth, creativity, and innovation."',
      rating: 5,
      body: 'We recently participated in an incredible AI Training Workshop with Safe Harbour Informatics. The focus was on giving our team hands-on AI skills to amplify their value, not replace it. At a time when AI integration often signals job cuts, this was a bold reminder that the smartest investment is in your people.',
      role: 'BUILD TEAM',
      company: 'Design company'
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
      --ts-secondary: #2EC8A1; /* Green accent color */
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

    ${S} button {
      font: inherit !important;
    }

    ${S} .ts-slider-section {
      width: 100% !important;
      padding: 20px 0 !important;
      background: #ffffff !important;
      font-family: 'Poppins', sans-serif !important;
    }

    ${S} .ts-inner {
      width: min(100%, 1400px) !important;
      margin: 0 auto !important;
      padding: 0 24px !important;
    }

    ${S} .ts-header-line {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      width: 100% !important;
      margin-bottom: clamp(24px, 4vw, 40px) !important;
    }

    ${S} .ts-title {
      font-family: 'Play', sans-serif !important;
      font-size: 14px !important;
      font-style: normal !important;
      font-weight: 700 !important;
      line-height: 20px !important;
      letter-spacing: 1.4px !important;
      text-transform: uppercase !important;
      color: var(--ts-secondary) !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} .ts-controls {
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
    }

    ${S} .ts-btn {
      width: 42px !important;
      height: 42px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 1px solid #E2E8F0 !important;
      border-radius: 999px !important;
      background: #ffffff !important;
      color: var(--ts-primary) !important;
      box-shadow: 0 12px 22px rgba(15,23,42,0.11) !important;
      cursor: pointer !important;
      font-size: 24px !important;
      line-height: 1 !important;
      transition: transform 0.2s, opacity 0.2s, background-color 0.2s !important;
      user-select: none !important;
    }

    ${S} .ts-btn:hover {
      opacity: 0.9 !important;
      transform: translateY(-1px) !important;
      background-color: #F8FAFC !important;
    }

    ${S} .ts-btn:active {
      transform: translateY(0) !important;
    }

    ${S} .ts-viewport {
      width: 100% !important;
      overflow: hidden !important;
      padding: 32px 40px !important;
      margin: -32px -40px !important;
    }

    ${S} .ts-track {
      display: flex !important;
      gap: 28px !important;
      transform: translate3d(0, 0, 0) !important;
      transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1) !important;
      will-change: transform !important;
    }

    ${S} .ts-card {
      flex: 0 0 calc((100% - 28px) / 2) !important;
      width: calc((100% - 28px) / 2) !important;
      max-width: calc((100% - 28px) / 2) !important;
      background: #ffffff !important;
      border: 0.5px solid var(--ts-border) !important;
      border-radius: 12px !important;
      box-shadow: 0px 4px 3px rgba(40, 125, 152, 0.15), 0px 10px 7.5px rgba(40, 125, 152, 0.15) !important;
      position: relative !important;
      transition: transform 0.25s ease, box-shadow 0.25s ease !important;
    }

    ${S} .ts-card:hover {
      transform: translateY(-4px) !important;
      box-shadow: 0px 8px 12px rgba(40, 125, 152, 0.2), 0px 18px 24px rgba(40, 125, 152, 0.15) !important;
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
      top: -26px !important;
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

    ${S} .ts-dots {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 16px !important;
      margin-top: 28px !important;
    }

    ${S} .ts-dot {
      width: 8px !important;
      height: 8px !important;
      display: block !important;
      border: 0 !important;
      border-radius: 999px !important;
      background: rgba(14, 24, 44, 0.3) !important;
      cursor: pointer !important;
      padding: 0 !important;
      transition: background-color 0.2s !important;
    }

    ${S} .ts-dot.ts-on {
      background: var(--ts-secondary) !important;
    }

    @media (max-width: 768px) {
      ${S} .ts-inner {
        padding: 0 16px !important;
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
        width: 46px !important;
        height: 38px !important;
        top: -26px !important;
        right: 15px !important;
      }
      ${S} .ts-card-body {
        font-size: 16px !important;
        line-height: 26px !important;
      }
    }
  `;

  var HTML = `
    <section class="ts-slider-section">
      <div class="ts-inner">
        <header class="ts-header-line">
          <h2 class="ts-title">TESTIMONIALS</h2>
          <div class="ts-controls">
            <button class="ts-btn ts-prev" type="button" aria-label="Previous testimonial">&lsaquo;</button>
            <button class="ts-btn ts-next" type="button" aria-label="Next testimonial">&rsaquo;</button>
          </div>
        </header>

        <div class="ts-viewport">
          <div class="ts-track">
            ${testimonialMarkup(testimonials[1])}
            ${testimonialMarkup(testimonials[2])}
            ${testimonials.map(testimonialMarkup).join('')}
            ${testimonialMarkup(testimonials[0])}
            ${testimonialMarkup(testimonials[1])}
          </div>
        </div>

        <div class="ts-dots" data-dots></div>
      </div>
    </section>
  `;

  function getGap(root) {
    var track = root.querySelector('.ts-track');
    var styles = window.getComputedStyle(track);
    return parseFloat(styles.columnGap || styles.gap || 0) || 0;
  }

  function getVisibleCount(root) {
    var viewport = root.querySelector('.ts-viewport');
    var first = root.querySelector('.ts-card');
    if (!viewport || !first) return 1;
    var gap = getGap(root);
    return Math.max(1, (viewport.clientWidth + gap) / (first.offsetWidth + gap));
  }

  function mountSlider(root) {
    var track = root.querySelector('.ts-track');
    var viewport = root.querySelector('.ts-viewport');
    var items = root.querySelectorAll('.ts-card');
    var prev = root.querySelector('.ts-prev');
    var next = root.querySelector('.ts-next');
    var dotsWrap = root.querySelector('[data-dots]');

    var N = testimonials.length;
    var index = 2;
    var isTransitioning = false;

    function buildDots() {
      var html = '';
      for (var i = 0; i < N; i += 1) {
        var isActive = ((index - 2 + N) % N) === i;
        html += '<button class="ts-dot' + (isActive ? ' ts-on' : '') + '" type="button" aria-label="Go to testimonial slide ' + (i + 1) + '" data-slide="' + (i + 2) + '"></button>';
      }
      dotsWrap.innerHTML = html;
      dotsWrap.querySelectorAll('.ts-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          if (isTransitioning) return;
          index = parseInt(this.dataset.slide, 10);
          update(true);
        });
      });
    }

    function update(animated) {
      if (animated === false) {
        track.style.transition = 'none';
      } else {
        track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
        isTransitioning = true;
      }

      var gap = getGap(root);
      var itemWidth = items[0].offsetWidth;
      var translateValue = -index * (itemWidth + gap);
      track.style.setProperty('transform', 'translate3d(' + translateValue + 'px, 0, 0)', 'important');

      var activeDotIndex = (index - 2 + N) % N;
      dotsWrap.querySelectorAll('.ts-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('ts-on', dotIndex === activeDotIndex);
      });
    }

    track.addEventListener('transitionend', function () {
      isTransitioning = false;
      if (index < 2) {
        index = index + N;
        update(false);
      } else if (index >= 2 + N) {
        index = index - N;
        update(false);
      }
    });

    prev.addEventListener('click', function () {
      if (isTransitioning) return;
      index = index - 1;
      update(true);
    });

    next.addEventListener('click', function () {
      if (isTransitioning) return;
      index = index + 1;
      update(true);
    });

    window.addEventListener('resize', function () {
      update(false);
    });

    buildDots();
    update(false);
  }

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
    mountSlider(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
