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
      --line-gray: #CBD5E0;
      display: block !important;
      width: 100% !important;
      background: #FFFFFF !important;
      overflow: hidden !important;
    }

    ${S} h2, ${S} h3, ${S} p, ${S} span, ${S} a {
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
      max-width: 1400px !important;
      width: 100% !important;
      margin: 0 auto !important;
    }

    ${S} .process-section-embed .process-header {
      text-align: center !important;
      margin-bottom: 70px !important;
      opacity: 0;
      animation: shiProcessFadeInUp 0.8s forwards !important;
    }

    ${S} .process-section-embed .process-label {
      font-family: 'Play', sans-serif !important;
      color: var(--primary-green) !important;
      font-size: 13px !important;
      font-weight: 700 !important;
      letter-spacing: 3px !important;
      text-transform: uppercase !important;
      display: block !important;
      margin-bottom: 16px !important;
    }

    ${S} .process-section-embed .process-heading {
      font-family: 'Play', sans-serif !important;
      font-size: 48px !important;
      font-weight: 700 !important;
      color: var(--dark-blue) !important;
      line-height: 1.2 !important;
    }

    ${S} .process-section-embed .process-description {
      font-family: 'Poppins', sans-serif !important;
      font-size: 16px !important;
      color: var(--text-gray) !important;
      line-height: 1.7 !important;
      max-width: 800px !important;
      margin: 20px auto 0 !important;
      text-align: center !important;
    }

    ${S} .process-section-embed .process-steps {
      display: flex !important;
      justify-content: space-between !important;
      align-items: flex-start !important;
      position: relative !important;
      gap: 16px !important;
    }

    /* Línea punteada horizontal centrada verticalmente con los números */
    ${S} .process-section-embed .process-steps::before {
      content: '' !important;
      position: absolute !important;
      top: 121px !important;
      left: 5% !important;
      right: 5% !important;
      height: 2px !important;
      background: repeating-linear-gradient(
        to right,
        var(--line-gray) 0,
        var(--line-gray) 24px,
        transparent 24px,
        transparent 40px
      ) !important;
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
      opacity: 0;
      transform: translateY(40px);
      animation: shiProcessFadeInUp 0.7s forwards !important;
    }

    ${S} .process-section-embed .process-step:nth-child(1) { animation-delay: 0.1s !important; }
    ${S} .process-section-embed .process-step:nth-child(2) { animation-delay: 0.25s !important; }
    ${S} .process-section-embed .process-step:nth-child(3) { animation-delay: 0.4s !important; }
    ${S} .process-section-embed .process-step:nth-child(4) { animation-delay: 0.55s !important; }
    ${S} .process-section-embed .process-step:nth-child(5) { animation-delay: 0.7s !important; }

    ${S} .process-section-embed .icon-wrapper {
      width: 72px !important;
      height: 72px !important;
      position: relative !important;
      margin-bottom: 0 !important;
    }

    ${S} .process-section-embed .icon-bg {
      position: absolute !important;
      inset: 0 !important;
      background-color: var(--primary-green) !important;
      opacity: 0.12;
      border-radius: 50% !important;
    }

    ${S} .process-section-embed .icon-svg {
      position: absolute !important;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      width: 28px !important;
      height: 28px !important;
      stroke: #2ec8a1;
    }

    ${S} .process-section-embed .icon-connector {
      width: 2px !important;
      height: 35px !important;
      background-color: #CBD5E0;
      margin: 0 auto !important;
      position: relative !important;
      z-index: 2 !important;
    }

    /* Recuadro blanco 100% opaco que tapa la línea punteada por completo */
    ${S} .process-section-embed .step-number {
      font-family: 'Play', sans-serif !important;
      font-size: 22px !important;
      font-weight: 700 !important;
      color: rgba(46, 200, 161, 0.3);
      background-color: #FFFFFF !important;
      padding: 4px 14px !important;
      margin: 0 auto !important;
      line-height: 1 !important;
      position: relative !important;
      z-index: 3 !important;
      border-radius: 6px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      box-shadow: 0 0 0 2px #FFFFFF !important;
    }

    ${S} .process-section-embed .step-title {
      font-family: 'Play', sans-serif !important;
      font-size: 16px !important;
      font-weight: 700 !important;
      margin-top: 16px !important;
      margin-bottom: 12px !important;
      color: #0E182C;
    }

    ${S} .process-section-embed .step-description {
      font-size: 13px !important;
      color: var(--text-gray) !important;
      line-height: 1.65 !important;
      max-width: 220px !important;
    }

    ${S} .process-section-embed .cta-wrapper {
      margin-top: 64px !important;
      text-align: center !important;
      opacity: 0;
      animation: shiProcessFadeInUp 0.8s 0.9s forwards !important;
    }

    ${S} .process-section-embed .cta-button {
      display: inline-flex !important;
      align-items: center !important;
      gap: 10px !important;
      background-color: var(--dark-blue) !important;
      color: #FFFFFF !important;
      font-family: 'Poppins', sans-serif !important;
      font-size: 15px !important;
      font-weight: 500 !important;
      padding: 16px 32px !important;
      border-radius: 8px !important;
      text-decoration: none !important;
      transition: background-color 0.3s, transform 0.3s !important;
    }

    ${S} .process-section-embed .cta-button:hover {
      background-color: #1a2a45 !important;
      transform: translateY(-2px) !important;
    }

    /* ANIMACIONES CICLO ACUMULATIVO 12s EXCLUSIVAMENTE CON SINTAXIS CSS VÁLIDA (SIN !IMPORTANT INTERNO) */
    @keyframes c1-transform { 0%, 90% { transform: scale(1.12); } 95%, 100% { transform: scale(1); } }
    @keyframes c1-bg { 0%, 90% { opacity: 1; transform: scale(1.05); } 95%, 100% { opacity: 0.12; transform: scale(1); } }
    @keyframes c1-stroke { 0%, 90% { stroke: #FFFFFF; } 95%, 100% { stroke: #2ec8a1; } }
    @keyframes c1-number { 0%, 90% { color: #2ec8a1; } 95%, 100% { color: rgba(46, 200, 161, 0.3); } }
    @keyframes c1-title { 0%, 90% { color: #2ec8a1; } 95%, 100% { color: #0E182C; } }
    @keyframes c1-conn { 0%, 90% { background-color: #2ec8a1; } 95%, 100% { background-color: #CBD5E0; } }

    @keyframes c2-transform { 0%, 20% { transform: scale(1); } 23.33%, 90% { transform: scale(1.12); } 95%, 100% { transform: scale(1); } }
    @keyframes c2-bg { 0%, 20% { opacity: 0.12; transform: scale(1); } 23.33%, 90% { opacity: 1; transform: scale(1.05); } 95%, 100% { opacity: 0.12; transform: scale(1); } }
    @keyframes c2-stroke { 0%, 20% { stroke: #2ec8a1; } 23.33%, 90% { stroke: #FFFFFF; } 95%, 100% { stroke: #2ec8a1; } }
    @keyframes c2-number { 0%, 20% { color: rgba(46, 200, 161, 0.3); } 23.33%, 90% { color: #2ec8a1; } 95%, 100% { color: rgba(46, 200, 161, 0.3); } }
    @keyframes c2-title { 0%, 20% { color: #0E182C; } 23.33%, 90% { color: #2ec8a1; } 95%, 100% { color: #0E182C; } }
    @keyframes c2-conn { 0%, 20% { background-color: #CBD5E0; } 23.33%, 90% { background-color: #2ec8a1; } 95%, 100% { background-color: #CBD5E0; } }

    @keyframes c3-transform { 0%, 40% { transform: scale(1); } 43.33%, 90% { transform: scale(1.12); } 95%, 100% { transform: scale(1); } }
    @keyframes c3-bg { 0%, 40% { opacity: 0.12; transform: scale(1); } 43.33%, 90% { opacity: 1; transform: scale(1.05); } 95%, 100% { opacity: 0.12; transform: scale(1); } }
    @keyframes c3-stroke { 0%, 40% { stroke: #2ec8a1; } 43.33%, 90% { stroke: #FFFFFF; } 95%, 100% { stroke: #2ec8a1; } }
    @keyframes c3-number { 0%, 40% { color: rgba(46, 200, 161, 0.3); } 43.33%, 90% { color: #2ec8a1; } 95%, 100% { color: rgba(46, 200, 161, 0.3); } }
    @keyframes c3-title { 0%, 40% { color: #0E182C; } 43.33%, 90% { color: #2ec8a1; } 95%, 100% { color: #0E182C; } }
    @keyframes c3-conn { 0%, 40% { background-color: #CBD5E0; } 43.33%, 90% { background-color: #2ec8a1; } 95%, 100% { background-color: #CBD5E0; } }

    @keyframes c4-transform { 0%, 60% { transform: scale(1); } 63.33%, 90% { transform: scale(1.12); } 95%, 100% { transform: scale(1); } }
    @keyframes c4-bg { 0%, 60% { opacity: 0.12; transform: scale(1); } 63.33%, 90% { opacity: 1; transform: scale(1.05); } 95%, 100% { opacity: 0.12; transform: scale(1); } }
    @keyframes c4-stroke { 0%, 60% { stroke: #2ec8a1; } 63.33%, 90% { stroke: #FFFFFF; } 95%, 100% { stroke: #2ec8a1; } }
    @keyframes c4-number { 0%, 60% { color: rgba(46, 200, 161, 0.3); } 63.33%, 90% { color: #2ec8a1; } 95%, 100% { color: rgba(46, 200, 161, 0.3); } }
    @keyframes c4-title { 0%, 60% { color: #0E182C; } 63.33%, 90% { color: #2ec8a1; } 95%, 100% { color: #0E182C; } }
    @keyframes c4-conn { 0%, 60% { background-color: #CBD5E0; } 63.33%, 90% { background-color: #2ec8a1; } 95%, 100% { background-color: #CBD5E0; } }

    @keyframes c5-transform { 0%, 80% { transform: scale(1); } 83.33%, 90% { transform: scale(1.12); } 95%, 100% { transform: scale(1); } }
    @keyframes c5-bg { 0%, 80% { opacity: 0.12; transform: scale(1); } 83.33%, 90% { opacity: 1; transform: scale(1.05); } 95%, 100% { opacity: 0.12; transform: scale(1); } }
    @keyframes c5-stroke { 0%, 80% { stroke: #2ec8a1; } 83.33%, 90% { stroke: #FFFFFF; } 95%, 100% { stroke: #2ec8a1; } }
    @keyframes c5-number { 0%, 80% { color: rgba(46, 200, 161, 0.3); } 83.33%, 90% { color: #2ec8a1; } 95%, 100% { color: rgba(46, 200, 161, 0.3); } }
    @keyframes c5-title { 0%, 80% { color: #0E182C; } 83.33%, 90% { color: #2ec8a1; } 95%, 100% { color: #0E182C; } }
    @keyframes c5-conn { 0%, 80% { background-color: #CBD5E0; } 83.33%, 90% { background-color: #2ec8a1; } 95%, 100% { background-color: #CBD5E0; } }

    ${S} .process-section-embed .process-step:nth-child(1) .icon-wrapper { animation: c1-transform 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(1) .icon-bg { animation: c1-bg 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(1) .icon-svg { animation: c1-stroke 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(1) .step-number { animation: c1-number 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(1) .step-title { animation: c1-title 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(1) .icon-connector { animation: c1-conn 12s infinite !important; }

    ${S} .process-section-embed .process-step:nth-child(2) .icon-wrapper { animation: c2-transform 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(2) .icon-bg { animation: c2-bg 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(2) .icon-svg { animation: c2-stroke 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(2) .step-number { animation: c2-number 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(2) .step-title { animation: c2-title 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(2) .icon-connector { animation: c2-conn 12s infinite !important; }

    ${S} .process-section-embed .process-step:nth-child(3) .icon-wrapper { animation: c3-transform 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(3) .icon-bg { animation: c3-bg 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(3) .icon-svg { animation: c3-stroke 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(3) .step-number { animation: c3-number 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(3) .step-title { animation: c3-title 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(3) .icon-connector { animation: c3-conn 12s infinite !important; }

    ${S} .process-section-embed .process-step:nth-child(4) .icon-wrapper { animation: c4-transform 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(4) .icon-bg { animation: c4-bg 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(4) .icon-svg { animation: c4-stroke 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(4) .step-number { animation: c4-number 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(4) .step-title { animation: c4-title 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(4) .icon-connector { animation: c4-conn 12s infinite !important; }

    ${S} .process-section-embed .process-step:nth-child(5) .icon-wrapper { animation: c5-transform 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(5) .icon-bg { animation: c5-bg 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(5) .icon-svg { animation: c5-stroke 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(5) .step-number { animation: c5-number 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(5) .step-title { animation: c5-title 12s infinite !important; }
    ${S} .process-section-embed .process-step:nth-child(5) .icon-connector { animation: c5-conn 12s infinite !important; }

    @keyframes shiProcessFadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 991px) {
      ${S} .process-section-embed { padding: 80px 20px !important; }
      ${S} .process-section-embed .process-steps {
        flex-direction: column !important;
        align-items: center !important;
        gap: 48px !important;
      }
      ${S} .process-section-embed .process-steps::before { display: none !important; }
      ${S} .process-section-embed .icon-connector { display: none !important; }
      ${S} .process-section-embed .process-heading { font-size: 36px !important; }
      ${S} .process-section-embed .step-description { max-width: 320px !important; }
      ${S} .process-section-embed .step-title { margin-top: 16px !important; }
      
      ${S} .process-section-embed .process-step .icon-wrapper,
      ${S} .process-section-embed .process-step .icon-bg,
      ${S} .process-section-embed .process-step .icon-svg,
      ${S} .process-section-embed .process-step .step-number,
      ${S} .process-section-embed .process-step .step-title,
      ${S} .process-section-embed .process-step .icon-connector {
        animation: none !important;
      }
      ${S} .process-section-embed .process-step .step-number { color: #2ec8a1 !important; }
      ${S} .process-section-embed .process-step .step-title { color: #0E182C !important; }
      ${S} .process-section-embed .process-step .icon-bg { opacity: 0.12 !important; }
      ${S} .process-section-embed .process-step .icon-svg { stroke: #2ec8a1 !important; }
    }

    @media (max-width: 479px) {
      ${S} .process-section-embed .process-heading { font-size: 28px !important; }
      ${S} .process-section-embed .step-title { font-size: 18px !important; }
    }
  `;

  var HTML = `
    <section class="process-section-embed">
      <div class="container">
        <div class="process-header">
          <span class="process-label">OUR PROCESS</span>
          <h2 class="process-heading">Implementation Process</h2>
          <p class="process-description">Safeguard your finances and optimize your accounting operations with AI Workflow Automation. From fraud detection and compliance gap alignment to the seamless automation of A/R, A/P, and reconciliations, our solution delivers measurable results and peace of mind.</p>
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
            <div class="icon-connector icon-connector-top"></div>
            <div class="step-number">01</div>
            <div class="icon-connector icon-connector-bottom"></div>
            <h3 class="step-title">AI Opportunity Assessment</h3>
            <p class="step-description">We start by identifying the low-hanging fruit—the areas where AI can deliver the fastest and biggest return on investment.</p>
          </div>

          <div class="process-step">
            <div class="icon-wrapper">
              <div class="icon-bg"></div>
              <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div class="icon-connector icon-connector-top"></div>
            <div class="step-number">02</div>
            <div class="icon-connector icon-connector-bottom"></div>
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
            <div class="icon-connector icon-connector-top"></div>
            <div class="step-number">03</div>
            <div class="icon-connector icon-connector-bottom"></div>
            <h3 class="step-title">Seamless Integration & Support</h3>
            <p class="step-description">We manage the entire integration process and provide ongoing support to ensure your team is empowered and your systems are running smoothly.</p>
          </div>

          <div class="process-step">
            <div class="icon-wrapper">
              <div class="icon-bg"></div>
              <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <div class="icon-connector icon-connector-top"></div>
            <div class="step-number">04</div>
            <div class="icon-connector icon-connector-bottom"></div>
            <h3 class="step-title">Testing and Optimization</h3>
            <p class="step-description">We simulate workflows to identify and fix gaps. Optimize for performance, accuracy, and usability before going live.</p>
          </div>

          <div class="process-step">
            <div class="icon-wrapper">
              <div class="icon-bg"></div>
              <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
            </div>
            <div class="icon-connector icon-connector-top"></div>
            <div class="step-number">05</div>
            <div class="icon-connector icon-connector-bottom"></div>
            <h3 class="step-title">Deployment & Monitoring</h3>
            <p class="step-description">Full deployment with fraud detection, thresholds and compliance reports tracking in place. Ongoing monitoring and optimization.</p>
          </div>
        </div>

        <div class="cta-wrapper">
          <a href="https://calendly.com/becyberaware/30-minutes-with-dan-stratton-cissp-ccsp-cciso" target="_blank" rel="noopener noreferrer" class="cta-button">
            Schedule a call
            <span class="cta-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  `;

  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[our-process-widget] Container #' + ROOT_ID + ' not found.');
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
