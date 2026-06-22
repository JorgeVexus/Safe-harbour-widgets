(function () {
  'use strict';

  var ROOT_ID = 'shi-ai-systems-root';

  /* ── Inject external assets once ── */
  function injectLink(href, rel) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement('link');
    el.rel  = rel || 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
  }

  injectLink('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
  injectLink('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css');

  /* ── Scoped CSS ── */
  var CSS = `
    #${ROOT_ID} *, #${ROOT_ID} *::before, #${ROOT_ID} *::after {
      box-sizing: border-box; margin: 0; padding: 0;
    }
    #${ROOT_ID} {
      font-family: 'Poppins', sans-serif;
      color: #111;
    }
    .shi {
      display: flex;
      min-height: 520px;
      background: transparent;
    }
    .shi h1, .shi h2, .shi h3 {
      font-family: inherit;
      font-weight: 700;
      color: #111;
    }
    .shi-sidebar {
      width: 260px;
      min-width: 260px;
      padding: 2rem 1.25rem 1.5rem;
      display: flex;
      flex-direction: column;
      background: transparent;
    }
    .shi-eyebrow {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #1BBFA0;
      margin-bottom: 0.6rem;
    }
    .shi-heading {
      font-size: 22px;
      line-height: 1.2;
      margin-bottom: 0.75rem;
      color: #111;
    }
    .shi-desc {
      font-size: 12px;
      line-height: 1.65;
      color: #444;
      margin-bottom: 1.5rem;
    }
    .shi-nav {
      list-style: none;
      flex: 1;
    }
    .shi-nav li {
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 0.55rem 0.75rem 0.55rem 12px;
      font-size: 12.5px;
      cursor: pointer;
      color: #555;
      border-left: 2px solid transparent;
      border-radius: 0 8px 8px 0;
      transition: color 0.2s, border-color 0.2s, background 0.2s;
      line-height: 1.3;
      user-select: none;
    }
    .shi-nav li:hover { color: #111; }
    .shi-nav li.shi-on {
      color: #111;
      border-left-color: #1BBFA0;
      font-weight: 500;
      background: #f8fafc;
    }
    .shi-nav li .shi-ni {
      font-size: 13px;
      color: #1BBFA0;
      flex-shrink: 0;
    }
    .shi-help {
      padding: 1rem;
      background: #f8fafc;
      border-radius: 14px;
      margin-top: 1.25rem;
    }
    .shi-help-t {
      font-size: 11.5px;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: #111;
    }
    .shi-help-b {
      font-size: 11px;
      line-height: 1.5;
      color: #555;
      margin-bottom: 0.5rem;
    }
    .shi-help a {
      font-size: 11.5px;
      color: #1BBFA0;
      text-decoration: underline;
    }
    .shi-content {
      flex: 1;
      padding: 2rem 1.75rem;
      overflow: hidden;
      position: relative;
      background: transparent;
    }
    .shi-panel { display: none; }
    .shi-panel.shi-on {
      display: flex;
      align-items: center;
      gap: 1.75rem;
      animation: shi-slide-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    .shi-panel.shi-grid.shi-on { display: block; }
    @keyframes shi-slide-in {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .shi-img {
      width: 240px;
      min-width: 200px;
      height: 230px;
      border-radius: 12px;
      background: #f0f0f0;
      border: 0.5px solid #e2e2e2;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
    }
    .shi-img i { font-size: 36px; color: #aaa; opacity: 0.4; }
    .shi-img img { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; }
    .shi-tc { flex: 1; min-width: 0; }
    .shi-ti { font-size: 18px; color: #1BBFA0; margin-bottom: 0.6rem; }
    .shi-tt { font-size: 19px; line-height: 1.25; margin-bottom: 0.9rem; color: #111; }
    .shi-tb { font-size: 13px; line-height: 1.7; color: #444; margin-bottom: 1.25rem; }
    .shi-cta {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #1BBFA0;
      color: #03392D;
      font-family: 'Poppins', sans-serif;
      font-size: 12px;
      font-weight: 600;
      padding: 9px 18px;
      border-radius: 6px;
      text-decoration: none;
      transition: opacity 0.2s;
      white-space: nowrap;
    }
    .shi-cta:hover { opacity: 0.85; }
    .shi-cta i { font-size: 13px; }
    .shi-gh {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 1.25rem;
    }
    .shi-gh h2 { font-size: 20px; color: #111; }
    .shi-grid-industries {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.85rem;
    }
    .shi-ic { border-radius: 8px; border: 0.5px solid #e2e2e2; overflow: hidden; }
    .shi-ip {
      height: 90px;
      background: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .shi-ip i { font-size: 26px; color: #aaa; opacity: 0.4; }
    .shi-ip img { width: 100%; height: 100%; object-fit: cover; }
    .shi-il {
      padding: 7px 10px;
      font-size: 11.5px;
      font-weight: 500;
      color: #444;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .shi-il i { font-size: 13px; color: #1BBFA0; }
  `;

  /* ── HTML template ── */
  var HTML = `
    <div class="shi">
      <aside class="shi-sidebar">
        <p class="shi-eyebrow">AI &amp; Automation</p>
        <h1 class="shi-heading">Smart AI Systems</h1>
        <p class="shi-desc">Don't get left behind—harness the power of AI to drive innovation, reduce costs, and unlock new opportunities. Automate repetitive tasks, streamline workflows, and scale smarter, all while keeping a human-in-the-loop for adaptability and precision.</p>

        <ul class="shi-nav" role="tablist">
          <li class="shi-on" role="tab" aria-selected="true"  data-t="0"><i class="ti ti-bulb shi-ni" aria-hidden="true"></i>Strategic AI Consulting</li>
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

    /* Inject scoped styles */
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    /* Render HTML */
    root.innerHTML = HTML;

    /* Wire up tabs */
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
