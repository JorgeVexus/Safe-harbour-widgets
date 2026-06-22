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

  injectLink('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
  injectLink('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css');

  /* ── Scoped CSS — all rules prefixed with #shi-ai-systems-root ── */
  var CSS = `
    ${S}, ${S} * , ${S} *::before, ${S} *::after {
      box-sizing: border-box !important;
      font-family: 'Poppins', sans-serif !important;
      text-align: left !important;
    }

    ${S} { color: #111 !important; }

    /* reset headings completely */
    ${S} h1, ${S} h2, ${S} h3, ${S} h4 {
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
    }

    /* ── Sidebar ── */
    ${S} .shi-sidebar {
      width: 300px !important;
      min-width: 300px !important;
      max-width: 300px !important;
      flex-shrink: 0 !important;
      padding: 2rem 1.5rem 1.5rem !important;
      display: flex !important;
      flex-direction: column !important;
      background: transparent !important;
    }

    ${S} .shi-eyebrow {
      font-size: 10px !important;
      font-weight: 600 !important;
      letter-spacing: 0.12em !important;
      text-transform: uppercase !important;
      color: #1BBFA0 !important;
      margin-bottom: 0.6rem !important;
      line-height: 1.4 !important;
    }

    ${S} .shi-heading {
      font-size: 22px !important;
      line-height: 1.2 !important;
      margin-bottom: 0.75rem !important;
      color: #111 !important;
      font-weight: 700 !important;
    }

    ${S} .shi-desc {
      font-size: 12px !important;
      line-height: 1.65 !important;
      color: #444 !important;
      margin-bottom: 1.5rem !important;
    }

    /* ── Tab nav ── */
    ${S} .shi-nav {
      flex: 1 !important;
    }

    ${S} .shi-nav li {
      display: flex !important;
      align-items: center !important;
      gap: 9px !important;
      padding: 0.55rem 0.75rem 0.55rem 12px !important;
      font-size: 12.5px !important;
      font-weight: 400 !important;
      cursor: pointer !important;
      color: #555 !important;
      border-left: 2px solid transparent !important;
      border-top: none !important;
      border-right: none !important;
      border-bottom: none !important;
      border-radius: 0 8px 8px 0 !important;
      transition: color 0.2s, border-color 0.2s, background 0.2s !important;
      line-height: 1.3 !important;
      user-select: none !important;
      background: transparent !important;
    }

    ${S} .shi-nav li:hover { color: #111 !important; }

    ${S} .shi-nav li.shi-on {
      color: #111 !important;
      border-left-color: #1BBFA0 !important;
      font-weight: 500 !important;
      background: #f8fafc !important;
    }

    ${S} .shi-nav li .shi-ni {
      font-size: 14px !important;
      color: #1BBFA0 !important;
      flex-shrink: 0 !important;
      line-height: 1 !important;
    }

    /* ── Need help box ── */
    ${S} .shi-help {
      padding: 1rem !important;
      background: #f8fafc !important;
      border-radius: 14px !important;
      margin-top: 1.25rem !important;
    }

    ${S} .shi-help-t {
      font-size: 11.5px !important;
      font-weight: 600 !important;
      margin-bottom: 0.25rem !important;
      color: #111 !important;
      line-height: 1.4 !important;
    }

    ${S} .shi-help-b {
      font-size: 11px !important;
      line-height: 1.5 !important;
      color: #555 !important;
      margin-bottom: 0.5rem !important;
    }

    ${S} .shi-help a {
      font-size: 11.5px !important;
      color: #1BBFA0 !important;
      text-decoration: underline !important;
    }

    /* ── Content area ── */
    ${S} .shi-content {
      flex: 1 !important;
      min-width: 0 !important;
      padding: 2rem 1.75rem !important;
      overflow: hidden !important;
      background: transparent !important;
      min-height: 560px !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
    }

    /* ── Panels ── */
    ${S} .shi-panel { display: none !important; }

    ${S} .shi-panel.shi-on {
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      gap: 1.75rem !important;
      animation: shi-slide-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
    }

    ${S} .shi-panel.shi-grid.shi-on {
      display: block !important;
    }

    @keyframes shi-slide-in {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ── Image placeholder ── */
    ${S} .shi-img {
      width: 240px !important;
      min-width: 200px !important;
      max-width: 240px !important;
      height: 230px !important;
      border-radius: 12px !important;
      background: #f0f0f0 !important;
      border: 0.5px solid #e2e2e2 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex-shrink: 0 !important;
      overflow: hidden !important;
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
      border-radius: 12px !important;
      display: block !important;
    }

    /* ── Text column ── */
    ${S} .shi-tc {
      flex: 1 !important;
      min-width: 0 !important;
    }

    ${S} .shi-ti {
      font-size: 20px !important;
      color: #1BBFA0 !important;
      margin-bottom: 0.6rem !important;
      display: block !important;
      line-height: 1 !important;
    }

    ${S} .shi-tt {
      font-size: 19px !important;
      line-height: 1.25 !important;
      margin-bottom: 0.9rem !important;
      color: #111 !important;
      font-weight: 700 !important;
    }

    ${S} .shi-tb {
      font-size: 13px !important;
      line-height: 1.7 !important;
      color: #444 !important;
      margin-bottom: 1.25rem !important;
    }

    /* ── CTA button ── */
    ${S} .shi-cta {
      display: inline-flex !important;
      align-items: center !important;
      gap: 7px !important;
      background: #1BBFA0 !important;
      color: #03392D !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      padding: 9px 18px !important;
      border-radius: 6px !important;
      text-decoration: none !important;
      transition: opacity 0.2s !important;
      white-space: nowrap !important;
      line-height: 1 !important;
      border: none !important;
    }

    ${S} .shi-cta:hover { opacity: 0.85 !important; }
    ${S} .shi-cta i { font-size: 13px !important; }

    /* ── Industry grid header ── */
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
    }

    ${S} .shi-ic {
      border-radius: 8px !important;
      border: 0.5px solid #e2e2e2 !important;
      overflow: hidden !important;
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
    }

    ${S} .shi-il i { font-size: 13px !important; color: #1BBFA0 !important; }
  `;

  /* ── HTML template ── */
  var HTML = `
    <div class="shi">
      <aside class="shi-sidebar">
        <p class="shi-eyebrow">AI &amp; Automation</p>
        <h1 class="shi-heading">Smart AI Systems</h1>
        <p class="shi-desc">Don't get left behind—harness the power of AI to drive innovation, reduce costs, and unlock new opportunities. Automate repetitive tasks, streamline workflows, and scale smarter, all while keeping a human-in-the-loop for adaptability and precision.</p>

        <ul class="shi-nav" role="tablist">
          <li class="shi-on" role="tab" aria-selected="true" data-t="0"><i class="ti ti-bulb shi-ni" aria-hidden="true"></i>Strategic AI Consulting</li>
          <li role="tab" aria-selected="false" data-t="1"><i class="ti ti-layers-subtract shi-ni" aria-hidden="true"></i>AI Transformation Bundle</li>
          <li role="tab" aria-selected="false" data-t="2"><i class="ti ti-route shi-ni" aria-hidden="true"></i>AI Workflow Assessment</li>
          <li role="tab" aria-selected="false" data-t="3"><i class="ti ti-chart-arrows-vertical shi-ni" aria-hidden="true"></i>Our Approach</li>
          <li role="tab" aria-selected="false" data-t="4"><i class="ti ti-building-factory-2 shi-ni" aria-hidden="true"></i>AI Across Your Industry</li>
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
            <i class="ti ti-bulb shi-ti" aria-hidden="true"></i>
            <h2 class="shi-tt">Properly Integrated AI Drives Profits, Productivity and Success</h2>
            <p class="shi-tb">Many organizations struggle to identify where AI can provide the most value. Our assessment narrows the focus to processes and workflows with maximum potential impact where AI will deliver the greatest operational and financial return.</p>
            <a href="#" class="shi-cta">Identify High-Impact Workflows <i class="ti ti-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div class="shi-img" aria-hidden="true"><i class="ti ti-photo"></i></div>
        </div>

        <div class="shi-panel" id="shi-p1" role="tabpanel">
          <div class="shi-img" aria-hidden="true"><i class="ti ti-photo"></i></div>
          <div class="shi-tc">
            <i class="ti ti-layers-subtract shi-ti" aria-hidden="true"></i>
            <h2 class="shi-tt">Unlock Your AI Potential</h2>
            <p class="shi-tb">Is your business ready for AI? Our bundled assessment evaluates your readiness and pinpoints the most valuable AI opportunities. By identifying high-impact workflows, we create a clear roadmap for AI integration, ensuring a faster ROI and long-term scalability for your business.</p>
            <a href="#" class="shi-cta">Accelerate Your AI Transformation <i class="ti ti-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>

        <div class="shi-panel" id="shi-p2" role="tabpanel">
          <div class="shi-img" aria-hidden="true"><i class="ti ti-photo"></i></div>
          <div class="shi-tc">
            <i class="ti ti-route shi-ti" aria-hidden="true"></i>
            <h2 class="shi-tt">Precision Mapping for AI Success</h2>
            <p class="shi-tb">Our AI Workflow Assessment meticulously documents and analyzes key processes, delivering actionable roadmaps for AI-driven transformation and a developer-ready blueprint that accelerates your path to AI-powered optimization.</p>
            <a href="#" class="shi-cta">Evaluate Your AI Readiness <i class="ti ti-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>

        <div class="shi-panel" id="shi-p3" role="tabpanel">
          <div class="shi-tc">
            <i class="ti ti-chart-arrows-vertical shi-ti" aria-hidden="true"></i>
            <h2 class="shi-tt">Our Approach To AI Transformation</h2>
            <p class="shi-tb">We help businesses thrive by harnessing AI in a way that multiplies human potential instead of replacing it—where strategy and culture come first, workflows are redesigned, and you turn time and profit losses into a durable competitive advantage that keeps you ahead.</p>
            <a href="#" class="shi-cta">Multiply Your Team's Potential <i class="ti ti-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div class="shi-img" aria-hidden="true"><i class="ti ti-photo"></i></div>
        </div>

        <div class="shi-panel shi-grid" id="shi-p4" role="tabpanel">
          <div class="shi-gh">
            <h2>AI Across Your Industry</h2>
            <a href="#" class="shi-cta">Find Your Industry's AI Blueprint <i class="ti ti-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div class="shi-grid-industries">
            <div class="shi-ic"><div class="shi-ip"><i class="ti ti-photo"></i></div><div class="shi-il"><i class="ti ti-truck" aria-hidden="true"></i>Logistics &amp; Supply Chain</div></div>
            <div class="shi-ic"><div class="shi-ip"><i class="ti ti-photo"></i></div><div class="shi-il"><i class="ti ti-shopping-cart" aria-hidden="true"></i>Retail &amp; E-commerce</div></div>
            <div class="shi-ic"><div class="shi-ip"><i class="ti ti-photo"></i></div><div class="shi-il"><i class="ti ti-coin" aria-hidden="true"></i>Finance</div></div>
            <div class="shi-ic"><div class="shi-ip"><i class="ti ti-photo"></i></div><div class="shi-il"><i class="ti ti-settings-2" aria-hidden="true"></i>Manufacturing</div></div>
            <div class="shi-ic"><div class="shi-ip"><i class="ti ti-photo"></i></div><div class="shi-il"><i class="ti ti-tool" aria-hidden="true"></i>Skilled Trades &amp; Field Services</div></div>
            <div class="shi-ic"><div class="shi-ip"><i class="ti ti-photo"></i></div><div class="shi-il"><i class="ti ti-heart-rate-monitor" aria-hidden="true"></i>Healthcare</div></div>
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
