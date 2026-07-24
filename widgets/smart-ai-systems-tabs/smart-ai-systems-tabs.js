(function () {
  'use strict';

  var ROOT_ID = 'shi-ai-systems-root';
  var S = '#' + ROOT_ID;

  /* ── Inject external assets once ── */
  function injectLink(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement('link');
    el.rel  = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
  }

  injectLink('https://fonts.googleapis.com/css2?family=Play:wght@700&family=Poppins:wght@300;400;500;600;700&display=swap');
  injectLink('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css');

  /* ── Scoped CSS — all rules prefixed with #shi-ai-systems-root ── */
  var CSS = `
    ${S}, ${S} * , ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      font-family: 'Poppins', sans-serif !important;
      text-align: left !important;
    }

    ${S} {
      color: #111 !important;
      width: 100% !important;
      display: block !important;
      overflow: hidden !important;
    }

    /* reset headings completely */
    ${S} h1, ${S} h2, ${S} h3, ${S} h4 {
      font-family: 'Play', sans-serif !important;
      font-weight: 700 !important;
      color: #111 !important;
      margin: 0 !important;
      padding: 0 !important;
      line-height: 1.25 !important;
      letter-spacing: normal !important;
    }

    /* reset paragraphs and lists */
    ${S} p  { margin: 0 !important; padding: 0 !important; }
    ${S} ul { margin: 0 !important; padding: 0 !important; list-style: none !important; }
    ${S} li { margin: 0 !important; padding: 0 !important; }
    ${S} a  { text-decoration: none !important; }

    /* ── Outer wrapper ── */
    ${S} .shi {
      display: flex !important;
      flex-direction: row !important;
      align-items: stretch !important;
      min-height: 560px !important;
      background: transparent !important;
      width: 100% !important;
      overflow: hidden !important;
    }

    /* ── Sidebar ── */
    ${S} .shi-sidebar {
      width: 25% !important;
      min-width: 260px !important;
      max-width: none !important;
      flex-shrink: 0 !important;
      padding: 0 1.5rem 1.5rem 0 !important;
      display: flex !important;
      flex-direction: column !important;
      background: transparent !important;
    }

    /* ── Tab nav ── */
    ${S} .shi-nav {
      flex: 1 !important;
    }

    ${S} .shi-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      min-height: 56px !important;
      padding: 0 16px !important;
      font-size: 13px !important;
      line-height: 1.25 !important;
      font-weight: 500 !important;
      cursor: pointer !important;
      color: #555 !important;
      border-left: 3px solid transparent !important;
      border-top: none !important;
      border-right: none !important;
      border-bottom: none !important;
      border-radius: 0 10px 10px 0 !important;
      transition: color 0.2s, border-color 0.2s, background 0.2s !important;
      user-select: none !important;
      background: transparent !important;
    }

    ${S} .shi-nav li:hover { color: #111 !important; }

    ${S} .shi-nav li.shi-on {
      color: #111 !important;
      border-left-color: #1BBFA0 !important;
      font-weight: 600 !important;
      background: #f8fafc !important;
    }

    ${S} .shi-nav li .shi-ni {
      width: 18px !important;
      height: 18px !important;
      flex: 0 0 18px !important;
      flex-shrink: 0 !important;
      display: block !important;
      background: #9AA6B2 !important;
      -webkit-mask: var(--shi-icon) center / contain no-repeat !important;
      mask: var(--shi-icon) center / contain no-repeat !important;
      opacity: 0.8 !important;
      transition: background 0.2s, opacity 0.2s !important;
    }

    ${S} .shi-nav li:hover .shi-ni {
      background: #7B8794 !important;
      opacity: 1 !important;
    }

    ${S} .shi-nav li.shi-on .shi-ni {
      background: #1BBFA0 !important;
      opacity: 1 !important;
    }

    /* ── Need help box ── */
    ${S} .shi-help {
      padding: 24px !important;
      background: #f8fafc !important;
      border: 1px solid #F1F5F9 !important;
      border-radius: 14px !important;
      margin-top: 1.25rem !important;
    }

    ${S} .shi-help-t {
      font-family: 'Play', sans-serif !important;
      font-size: 14px !important;
      line-height: 1.35 !important;
      font-weight: 700 !important;
      margin-bottom: 0.45rem !important;
      color: #111 !important;
    }

    ${S} .shi-help-b {
      font-size: 12px !important;
      line-height: 1.55 !important;
      color: #111 !important;
      margin-bottom: 0.75rem !important;
    }

    ${S} .shi-help a {
      font-size: 12px !important;
      color: #1BBFA0 !important;
      font-weight: 700 !important;
      text-decoration: underline !important;
    }

    /* ── Content area ── */
    ${S} .shi-content {
      flex: 0 0 75% !important;
      min-width: 0 !important;
      padding: 2rem 0 2rem 1.75rem !important;
      overflow: hidden !important;
      background: transparent !important;
      min-height: 560px !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      align-items: flex-start !important;
    }

    /* ── Panels ── */
    ${S} .shi-panel { display: none !important; }

    ${S} .shi-panel.shi-on {
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      gap: clamp(32px, 3.4vw, 64px) !important;
      justify-content: space-between !important;
      width: 100% !important;
      min-height: 430px !important;
      min-width: 0 !important;
      animation: shi-slide-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
    }

    ${S} .shi-panel.shi-grid.shi-on {
      display: block !important;
      width: 100% !important;
    }

    @keyframes shi-slide-in {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ── Image placeholder ── */
    ${S} .shi-img {
      flex: 0 1 48% !important;
      width: auto !important;
      min-width: 320px !important;
      max-width: 520px !important;
      height: clamp(260px, 24vw, 400px) !important;
      border-radius: 16px !important;
      background: #f0f0f0 !important;
      border: 0.5px solid #e2e2e2 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex-shrink: 0 !important;
      overflow: hidden !important;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25) !important;
    }

    ${S} .shi-img i {
      font-size: 36px !important;
      color: #aaa !important;
      opacity: 0.4 !important;
    }

    ${S} .shi-img img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      border-radius: 16px !important;
      display: block !important;
    }

    /* ── Text column ── */
    ${S} .shi-tc {
      flex: 0 1 48% !important;
      max-width: 520px !important;
      min-width: 0 !important;
    }

    ${S} .shi-ti {
      width: 38px !important;
      height: 38px !important;
      margin-bottom: 0.9rem !important;
      display: block !important;
      object-fit: contain !important;
    }

    ${S} .shi-tt {
      font-family: 'Play', sans-serif !important;
      font-size: clamp(20px, 1.85vw, 30px) !important;
      line-height: 1.22 !important;
      margin-bottom: 1.4rem !important;
      color: #111 !important;
      font-weight: 700 !important;
    }

    ${S} .shi-tb {
      font-size: 14px !important;
      line-height: 1.65 !important;
      color: #111 !important;
      margin-bottom: 1.55rem !important;
    }

    /* ── CTA button ── */
    ${S} .shi-cta {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 10px !important;
      min-height: 40px !important;
      background: #1BBFA0 !important;
      color: #fff !important;
      font-family: 'Play', sans-serif !important;
      font-size: 13px !important;
      font-weight: 700 !important;
      padding: 10px 16px !important;
      border-radius: 8px !important;
      text-decoration: none !important;
      transition: opacity 0.2s !important;
      white-space: nowrap !important;
      line-height: 1 !important;
      border: none !important;
    }

    ${S} .shi-cta:hover { opacity: 0.85 !important; }
    ${S} .shi-cta img {
      width: 14px !important;
      height: 14px !important;
      display: block !important;
      flex-shrink: 0 !important;
    }

    /* ── Industry grid & KPI Cards ── */
    ${S} .kpi-cards, ${S} .kpi-card, ${S} .kpi-cards *, ${S} .kpi-card * {
      text-align: left !important;
    }

    ${S} .shi-gh {
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 1rem !important;
      flex-wrap: wrap !important;
      margin-bottom: 1.25rem !important;
    }

    ${S} .shi-gh h2 {
      font-size: 20px !important;
      color: #111 !important;
      font-weight: 700 !important;
    }

    /* ── Industry grid ── */
    ${S} .shi-grid-industries {
      display: grid !important;
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 0.85rem !important;
      width: 100% !important;
    }

    ${S} .shi-ic {
      border-radius: 8px !important;
      border: 0.5px solid #e2e2e2 !important;
      overflow: hidden !important;
      text-align: left !important;
    }

    ${S} .shi-ip {
      height: 90px !important;
      background: #f0f0f0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      overflow: hidden !important;
    }

    ${S} .shi-ip i { font-size: 26px !important; color: #aaa !important; opacity: 0.4 !important; }
    ${S} .shi-ip img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }

    ${S} .shi-il {
      padding: 7px 10px !important;
      font-size: 11.5px !important;
      font-weight: 500 !important;
      color: #444 !important;
      display: flex !important;
      align-items: center !important;
      gap: 5px !important;
      line-height: 1.4 !important;
      text-align: left !important;
    }

    ${S} .shi-il i { font-size: 13px !important; color: #1BBFA0 !important; }
  `;

  /* ── HTML template ── */
  var HTML = `
    <div class="shi">
      <aside class="shi-sidebar">
        <ul class="shi-nav" role="tablist">
          <li class="shi-on" role="tab" aria-selected="true" data-t="0"><span class="shi-ni" style="--shi-icon: url('https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba64480068d7c8f4d88_strategic%20ai%20consulting%20icon.svg')" aria-hidden="true"></span>Strategic AI Consulting</li>
          <li role="tab" aria-selected="false" data-t="1"><span class="shi-ni" style="--shi-icon: url('https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba5b550267ae318c7a0_ai%20transformation%20bundle%20icon.svg')" aria-hidden="true"></span>AI Transformation Bundle</li>
          <li role="tab" aria-selected="false" data-t="2"><span class="shi-ni" style="--shi-icon: url('https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba4585299f4854b10db_Ai%20workflow%20assesment%20icon.svg')" aria-hidden="true"></span>AI Workflow Assessment</li>
          <li role="tab" aria-selected="false" data-t="3"><span class="shi-ni" style="--shi-icon: url('https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba688f8dc3c9b6853c9_Our%20approach%20Icon.svg')" aria-hidden="true"></span>Our Approach</li>
          <li role="tab" aria-selected="false" data-t="4"><span class="shi-ni" style="--shi-icon: url('https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba4b221c183c36dbf22_Ai%20across%20industry.svg')" aria-hidden="true"></span>AI Across Your Industry</li>
        </ul>

        <div class="shi-help">
          <p class="shi-help-t">Need help deciding?</p>
          <p class="shi-help-b">Our architects can design a custom roadmap for your business.</p>
          <a href="#">Talk to an expert</a>
        </div>
      </aside>

      <div class="shi-content">

        <div class="shi-panel shi-on" id="shi-p0" role="tabpanel">
          <div class="shi-tc">
            <img class="shi-ti" src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba64480068d7c8f4d88_strategic%20ai%20consulting%20icon.svg" alt="" aria-hidden="true">
            <h2 class="shi-tt">Properly Integrated AI Drives Profits, Productivity and Success</h2>
            <p class="shi-tb">Many organizations struggle to identify where AI can provide the most value. Our assessment narrows the focus to processes and workflows with maximum potential impact where AI will deliver the greatest operational and financial return.</p>
            <a href="#" class="shi-cta">Identify High-Impact Workflows <img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493869da8eb02bf63548dc_Icon%20arrow%20button.svg" alt="" aria-hidden="true"></a>
          </div>
          <div class="shi-img" aria-hidden="true"><img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69bd7d8f4cae26139e37b652_strtegic%20ai%20consulting%20image.webp" alt=""></div>
        </div>

        <div class="shi-panel" id="shi-p1" role="tabpanel">
          <div class="shi-img" aria-hidden="true"><img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69bd7fe891b12561f09d862f_ai%20workflow%20assestment%20image.webp" alt=""></div>
          <div class="shi-tc">
            <img class="shi-ti" src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba5b550267ae318c7a0_ai%20transformation%20bundle%20icon.svg" alt="" aria-hidden="true">
            <h2 class="shi-tt">Unlock Your AI Potential</h2>
            <p class="shi-tb">Is your business ready for AI? Our bundled assessment evaluates your readiness and pinpoints the most valuable AI opportunities. By identifying high-impact workflows, we create a clear roadmap for AI integration, ensuring a faster ROI and long-term scalability for your business.</p>
            <a href="#" class="shi-cta">Accelerate Your AI Transformation <img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493869da8eb02bf63548dc_Icon%20arrow%20button.svg" alt="" aria-hidden="true"></a>
          </div>
        </div>

        <div class="shi-panel" id="shi-p2" role="tabpanel">
          <div class="shi-img" aria-hidden="true"><img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69bd7ed84459f56bb58e187f_ai%20transformation%20bundle%20image.webp" alt=""></div>
          <div class="shi-tc">
            <img class="shi-ti" src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba4585299f4854b10db_Ai%20workflow%20assesment%20icon.svg" alt="" aria-hidden="true">
            <h2 class="shi-tt">Precision Mapping for AI Success</h2>
            <p class="shi-tb">Our AI Workflow Assessment meticulously documents and analyzes key processes, delivering actionable roadmaps for AI-driven transformation and a developer-ready blueprint that accelerates your path to AI-powered optimization.</p>
            <a href="#" class="shi-cta">Evaluate Your AI Readiness <img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493869da8eb02bf63548dc_Icon%20arrow%20button.svg" alt="" aria-hidden="true"></a>
          </div>
        </div>

        <div class="shi-panel" id="shi-p3" role="tabpanel">
          <div class="shi-tc">
            <img class="shi-ti" src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a492ba688f8dc3c9b6853c9_Our%20approach%20Icon.svg" alt="" aria-hidden="true">
            <h2 class="shi-tt">Our Approach To AI Transformation</h2>
            <p class="shi-tb">We help businesses thrive by harnessing AI in a way that multiplies human potential instead of replacing it—where strategy and culture come first, workflows are redesigned, and you turn time and profit losses into a durable competitive advantage that keeps you ahead.</p>
            <a href="#" class="shi-cta">Multiply Your Team's Potential <img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493869da8eb02bf63548dc_Icon%20arrow%20button.svg" alt="" aria-hidden="true"></a>
          </div>
          <div class="shi-img" aria-hidden="true"><img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69bd815bbdd71aa442354eab_our%20approach%20ai%20image.webp" alt=""></div>
        </div>

        <div class="shi-panel shi-grid" id="shi-p4" role="tabpanel">
          <div class="shi-gh">
            <h2>AI Across Your Industry</h2>
            <a href="#" class="shi-cta">Find Your Industry's AI Blueprint <img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/6a493869da8eb02bf63548dc_Icon%20arrow%20button.svg" alt="" aria-hidden="true"></a>
          </div>
          <div class="shi-grid-industries">
            <div class="shi-ic"><div class="shi-ip"><img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69bd8293a63f19f47e3572c3_logistics%20%26%20supply%20chain.webp" alt=""></div><div class="shi-il"><i class="ti ti-truck" aria-hidden="true"></i>Logistics &amp; Supply Chain</div></div>
            <div class="shi-ic"><div class="shi-ip"><img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69bd8293e9bee729cd2b1d24_retail%20%26%20ecommerce.webp" alt=""></div><div class="shi-il"><i class="ti ti-shopping-cart" aria-hidden="true"></i>Retail &amp; E-commerce</div></div>
            <div class="shi-ic"><div class="shi-ip"><img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69bd82934e9f0e1e149ca86b_finance.webp" alt=""></div><div class="shi-il"><i class="ti ti-coin" aria-hidden="true"></i>Finance</div></div>
            <div class="shi-ic"><div class="shi-ip"><img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69bd82936fa1f3aab1a03d39_Manufacturing.webp" alt=""></div><div class="shi-il"><i class="ti ti-settings-2" aria-hidden="true"></i>Manufacturing</div></div>
            <div class="shi-ic"><div class="shi-ip"><img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69bd8293c30a0daddbcfa3fb_skilled%20trades.webp" alt=""></div><div class="shi-il"><i class="ti ti-tool" aria-hidden="true"></i>Skilled Trades &amp; Field Services</div></div>
            <div class="shi-ic"><div class="shi-ip"><img src="https://cdn.prod.website-files.com/69bb0bc5f95cd9124b67936f/69bd8293f904be53df6d3894_healthcare.webp" alt=""></div><div class="shi-il"><i class="ti ti-heart-rate-monitor" aria-hidden="true"></i>Healthcare</div></div>
          </div>
        </div>

      </div>
    </div>
  `;

  /* ── Mount ── */
  function mount() {
    var root = document.getElementById(ROOT_ID);
    if (!root) {
      console.warn('[shi-widget] Container #' + ROOT_ID + ' not found.');
      return;
    }

    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    root.innerHTML = HTML;

    var tabs   = root.querySelectorAll('.shi-nav li');
    var panels = root.querySelectorAll('.shi-panel');
    var cur    = 0;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var idx = parseInt(this.dataset.t);
        if (idx === cur) return;

        tabs[cur].classList.remove('shi-on');
        tabs[cur].setAttribute('aria-selected', 'false');
        panels[cur].classList.remove('shi-on');

        cur = idx;
        tabs[cur].classList.add('shi-on');
        tabs[cur].setAttribute('aria-selected', 'true');

        var p = panels[cur];
        p.style.animation = 'none';
        p.offsetHeight;
        p.style.animation = '';
        p.classList.add('shi-on');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

})();
