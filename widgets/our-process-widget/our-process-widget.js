(function () {
  'use strict';

  var ROOT_ID = 'shi-our-process-widget-root';
  var S = '#' + ROOT_ID;

  function injectLink(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
  }

  injectLink('https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');

  var CSS = `
    ${S}, ${S} *, ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
    }

    ${S} {
      --primary-green: #2ec8a1;
      --dark-blue: #0E182C;
      --text-gray: #45556C;
      --bg-white: #FFFFFF;
      --transition-speed: 0.4s;
      display: block !important;
      width: 100% !important;
      background: #FFFFFF !important;
      overflow: hidden !important;
    }

    ${S} h2, ${S} h3, ${S} p, ${S} span {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${S} .process-section-embed {
      font-family: 'Poppins', sans-serif !important;
      background-color: var(--bg-white) !important;
      color: var(--dark-blue) !important;
      padding: 100px 20px !important;
      overflow: hidden !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      width: 100% !important;
    }

    ${S} .process-section-embed .container {
      max-width: 1200px !important;
      width: 100% !important;
      margin: 0 auto !important;
    }

    ${S} .process-section-embed .process-header {
      text-align: center !important;
      margin-bottom: 80px !important;
      opacity: 0 !important;
      transform: translateY(30px) !important;
      animation: shiProcessFadeInUp 0.8s forwards !important;
    }

    ${S} .process-section-embed .process-label {
      font-family: 'Play', sans-serif !important;
      color: var(--primary-green) !important;
      font-size: 14px !important;
      font-weight: 700 !important;
      letter-spacing: 2px !important;
      text-transform: uppercase !important;
      display: block !important;
      margin-bottom: 20px !important;
    }

    ${S} .process-section-embed .process-heading {
      font-family: 'Play', sans-serif !important;
      font-size: 48px !important;
      font-weight: 700 !important;
      color: var(--dark-blue) !important;
      line-height: 1.2 !important;
    }

    ${S} .process-section-embed .process-steps {
      display: flex !important;
      justify-content: space-between !important;
      position: relative !important;
      gap: 40px !important;
    }

    ${S} .process-section-embed .process-steps::before {
      content: '' !important;
      position: absolute !important;
      top: 140px !important;
      left: 10% !important;
      right: 10% !important;
      height: 1px !important;
      border-top: 2px dashed #E2E8F0 !important;
      z-index: 1 !important;
    }

    ${S} .process-section-embed .process-step {
      flex: 1 !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      position: relative !important;
      z-index: 2 !important;
      opacity: 0 !important;
      transform: translateY(40px) !important;
    }

    ${S} .process-section-embed .process-step:nth-child(1) { animation: shiProcessFadeInUp 0.8s 0.2s forwards !important; }
    ${S} .process-section-embed .process-step:nth-child(2) { animation: shiProcessFadeInUp 0.8s 0.4s forwards !important; }
    ${S} .process-section-embed .process-step:nth-child(3) { animation: shiProcessFadeInUp 0.8s 0.6s forwards !important; }

    ${S} .process-section-embed .icon-wrapper {
      width: 56px !important;
      height: 56px !important;
      position: relative !important;
      margin-bottom: 30px !important;
      transition: transform var(--transition-speed) !important;
    }

    ${S} .process-section-embed .icon-bg {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      background-color: var(--primary-green) !important;
      opacity: 0.15 !important;
      border-radius: 50% !important;
      box-shadow: 0 10px 15px rgba(46, 200, 161, 0.2) !important;
      transition: opacity var(--transition-speed), transform var(--transition-speed) !important;
    }

    ${S} .process-section-embed .icon-svg {
      position: absolute !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      width: 24px !important;
      height: 24px !important;
      z-index: 2 !important;
      stroke: var(--primary-green) !important;
      transition: stroke var(--transition-speed) !important;
    }

    ${S} .process-section-embed .step-number {
      font-family: 'Play', sans-serif !important;
      font-size: 30px !important;
      font-weight: 700 !important;
      color: var(--primary-green) !important;
      opacity: 0.2 !important;
      background-color: var(--bg-white) !important;
      padding: 0 15px !important;
      margin-bottom: 30px !important;
      transition: opacity var(--transition-speed) !important;
    }

    ${S} .process-section-embed .step-title {
      font-family: 'Play', sans-serif !important;
      font-size: 24px !important;
      font-weight: 700 !important;
      margin-bottom: 16px !important;
      color: var(--dark-blue) !important;
      transition: color var(--transition-speed) !important;
    }

    ${S} .process-section-embed .step-description {
      font-size: 16px !important;
      color: var(--text-gray) !important;
      line-height: 1.6 !important;
      max-width: 310px !important;
    }

    /* Active & Hover States */
    ${S} .process-section-embed .process-step.is-active .icon-wrapper,
    ${S} .process-section-embed .process-step:hover .icon-wrapper {
      transform: scale(1.15) !important;
    }

    ${S} .process-section-embed .process-step.is-active .icon-bg,
    ${S} .process-section-embed .process-step:hover .icon-bg {
      opacity: 1 !important;
      transform: scale(1.1) !important;
    }

    ${S} .process-section-embed .process-step.is-active .icon-svg,
    ${S} .process-section-embed .process-step:hover .icon-svg {
      stroke: white !important;
    }

    ${S} .process-section-embed .process-step.is-active .step-number,
    ${S} .process-section-embed .process-step:hover .step-number {
      opacity: 1 !important;
    }

    ${S} .process-section-embed .process-step.is-active .step-title,
    ${S} .process-section-embed .process-step:hover .step-title {
      color: var(--primary-green) !important;
    }

    @keyframes shiProcessFadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 991px) {
      ${S} .process-section-embed { padding: 80px 20px !important; }
      ${S} .process-section-embed .process-steps {
        flex-direction: column !important;
        gap: 60px !important;
      }
      ${S} .process-section-embed .process-steps::before { display: none !important; }
      ${S} .process-section-embed .process-heading { font-size: 36px !important; }
      ${S} .process-section-embed .process-step {
        max-width: 450px !important;
        margin: 0 auto !important;
      }
    }

    @media (max-width: 479px) {
      ${S} .process-section-embed .process-heading { font-size: 28px !important; }
      ${S} .process-section-embed .step-title { font-size: 20px !important; }
      ${S} .process-section-embed .step-description { font-size: 14px !important; }
    }
  `;

  var HTML = `
    <section class="process-section-embed">
      <div class="container">
        <div class="process-header">
          <span class="process-label">OUR PROCESS</span>
          <h2 class="process-heading">A Clear Path to ROI</h2>
        </div>

        <div class="process-steps">

          <div class="process-step">
            <div class="icon-wrapper">
              <div class="icon-bg"></div>
              <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div class="step-number">01</div>
            <h3 class="step-title">Ai Opportunity Assessment</h3>
            <p class="step-description">We start by identifying the 'low-hanging fruit'—the areas where AI can deliver the fastest and largest return on investment.</p>
          </div>

          <div class="process-step">
            <div class="icon-wrapper">
              <div class="icon-bg"></div>
              <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                <line x1="8" y1="2" x2="8" y2="18"></line>
                <line x1="16" y1="6" x2="16" y2="22"></line>
              </svg>
            </div>
            <div class="step-number">02</div>
            <h3 class="step-title">Custom AI Roadmap</h3>
            <p class="step-description">We provide a clear, step-by-step plan that shows you exactly how we'll implement the solutions without disrupting your operations.</p>
          </div>

          <div class="process-step">
            <div class="icon-wrapper">
              <div class="icon-bg"></div>
              <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path>
                <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path>
              </svg>
            </div>
            <div class="step-number">03</div>
            <h3 class="step-title">Seamless Integration & Support</h3>
            <p class="step-description">We manage the entire integration process and provide ongoing support to ensure your team is empowered and your systems are running smoothly.</p>
          </div>

        </div>
      </div>
    </section>
  `;

  function startAutoProgress(root) {
    var steps = root.querySelectorAll('.process-step');
    if (!steps || steps.length === 0) return;

    function resetSteps() {
      steps.forEach(function (step) {
        step.classList.remove('is-active');
      });
    }

    function runSequence() {
      resetSteps();
      steps[0].classList.add('is-active');

      setTimeout(function () {
        steps[1].classList.add('is-active');
      }, 1800);

      setTimeout(function () {
        steps[2].classList.add('is-active');
      }, 3600);
    }

    runSequence();
    setInterval(runSequence, 6200);
  }

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[process-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    if (!document.getElementById(ROOT_ID + '-style')) {
      var style = document.createElement('style');
      style.id = ROOT_ID + '-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    root.innerHTML = HTML;
    startAutoProgress(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
