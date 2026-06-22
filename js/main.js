/* Case study content — shared across all portfolio versions */
const CASES = {
  darwix: {
    title: "Voice Automation & Real-Time Agent Assist",
    meta: "Darwix AI · Product Management Intern · Feb–May 2026",
    tabs: {
      problem: {
        heading: "The Problem",
        body: `<p>BFSI contact centers handled high-volume inbound calls across leads, callbacks, and loan inquiries — but agents lacked real-time guidance, and voice automation workflows weren't standardized across use cases.</p>
        <ul>
          <li>Manual agent workflows caused inconsistent resolution quality</li>
          <li>No unified KPI framework to measure GenAI product performance</li>
          <li>Two GenAI products competing for engineering bandwidth without clear prioritization</li>
        </ul>`
      },
      approach: {
        heading: "My Approach",
        body: `<p>I owned PRD requirements end-to-end — mapping 5+ BFSI workflows, defining success KPIs, and aligning engineering on what to ship first.</p>
        <ul>
          <li><strong>Workflow mapping:</strong> Documented lead qualification, callback routing, and loan inquiry flows with trigger conditions and edge cases</li>
          <li><strong>Agent Assist PRD:</strong> Specified LLM prompt architecture, knowledge retrieval layers, and contextual response recommendations for live calls</li>
          <li><strong>Roadmap prioritization:</strong> Used impact vs. effort trade-offs across 2 GenAI products, factoring model latency, accuracy, and adoption</li>
          <li><strong>Metrics dashboard:</strong> Defined 6+ KPIs — latency, intent accuracy, adoption, resolution rate, escalation rate, and usage</li>
        </ul>`
      },
      impact: {
        heading: "Impact & Metrics",
        body: `<p>Shipped features used in production by contact center teams with measurable operational lift.</p>`,
        metrics: [
          { value: "50+", label: "Agents on Agent Assist" },
          { value: "5+", label: "BFSI workflows mapped" },
          { value: "6+", label: "GenAI KPIs tracked" },
          { value: "2", label: "Products prioritized on roadmap" }
        ]
      },
      learnings: {
        heading: "Key Learnings",
        body: `<ul>
          <li>GenAI products need <strong>separate KPIs for model quality and user adoption</strong> — optimizing one without the other creates false wins</li>
          <li>Agent-facing AI must account for <strong>latency budgets</strong> — sub-second recommendations matter more than perfect answers</li>
          <li>PRDs for voice products require <strong>exception paths</strong> (escalation, fallback, silence) not just happy-path flows</li>
        </ul>`
      }
    }
  },
  hero: {
    title: "H.Ai Chatbot & Dealer Portfolio Visibility",
    meta: "Hero Fincorp · Business Technology Solutions Intern · May–Aug 2025",
    tabs: {
      problem: {
        heading: "The Problem",
        body: `<p>Hero Fincorp's lending operations faced fragmented dealer data and low chatbot resolution rates — dealers couldn't get reliable portfolio visibility, and H.Ai struggled with intent coverage gaps.</p>
        <ul>
          <li>Inconsistent dealer codes caused downstream workflow failures</li>
          <li>Loan disbursal status was hard to track for dealer partners</li>
          <li>Chatbot couldn't resolve common queries without human escalation</li>
        </ul>`
      },
      approach: {
        heading: "My Approach",
        body: `<p>I worked cross-functionally with product, design, and backend to translate business rules into shippable requirements.</p>
        <ul>
          <li><strong>PRD collaboration:</strong> Defined user workflows and success KPIs for dealer portfolio and loan disbursal visibility features</li>
          <li><strong>Chatbot intent design:</strong> Mapped user intents, trigger conditions, and response flows for H.Ai to expand automated resolution</li>
          <li><strong>Validation logic:</strong> Translated complex business rules into dealer code standardization logic, reducing data inconsistencies</li>
          <li><strong>UI/API refinement:</strong> Partnered with designers and backend to fix edge-case failures in production</li>
        </ul>`
      },
      impact: {
        heading: "Impact & Metrics",
        body: `<p>Improved operational reliability and chatbot coverage across dealer-facing workflows.</p>`,
        metrics: [
          { value: "↓", label: "Data inconsistencies" },
          { value: "↑", label: "Intent coverage" },
          { value: "↑", label: "Disbursal visibility" },
          { value: "↓", label: "Production edge cases" }
        ]
      },
      learnings: {
        heading: "Key Learnings",
        body: `<ul>
          <li>Fintech products require <strong>validation at the data layer</strong> — fixing UI alone doesn't solve inconsistent upstream codes</li>
          <li>Chatbot design is <strong>intent architecture</strong>, not copywriting — triggers and fallbacks matter as much as responses</li>
          <li>Being the bridge between business and engineering means <strong>writing specs engineers can implement without guessing</strong></li>
        </ul>`
      }
    }
  },
  "resume-ai": {
    title: "AI Resume Screening & Relevance Scoring",
    meta: "Personal Project · Nov–Dec 2025",
    tabs: {
      problem: {
        heading: "The Problem",
        body: `<p>Recruiters spend hours manually screening resumes — comparing skills against job descriptions with no structured scoring or explainability.</p>
        <ul>
          <li>Manual screening doesn't scale for high-volume hiring</li>
          <li>No consistent way to explain why a candidate matched or didn't</li>
          <li>Recruiters need actionable insights, not just a pass/fail</li>
        </ul>`
      },
      approach: {
        heading: "My Approach",
        body: `<p>I designed an end-to-end AI workflow — from ingestion to scored, explainable output.</p>
        <ul>
          <li><strong>Structured extraction:</strong> Parsed resume data into normalized skill and experience fields</li>
          <li><strong>Semantic matching:</strong> Built relevance scoring (0–100) with skill gap analysis</li>
          <li><strong>Explainability:</strong> Every score comes with reasoning recruiters can act on</li>
          <li><strong>Delivery:</strong> Automated Google Sheets dashboard for consistent, scalable shortlisting</li>
        </ul>`
      },
      impact: {
        heading: "Impact & Metrics",
        body: `<p>Demonstrated product thinking applied to a real hiring pain point — with a shippable MVP, not a slide deck.</p>`,
        metrics: [
          { value: "0–100", label: "Relevance score scale" },
          { value: "↓", label: "Manual screening effort" },
          { value: "✓", label: "Explainable insights" },
          { value: "Auto", label: "Sheets dashboard" }
        ]
      },
      learnings: {
        heading: "Key Learnings",
        body: `<ul>
          <li>AI products for non-technical users need <strong>explainability as a first-class feature</strong></li>
          <li>The best MVP delivers output where users already work — <strong>Sheets, not a new dashboard</strong></li>
          <li>Scoring systems require <strong>calibration conversations</strong> with users to define what "good" looks like</li>
        </ul>`
      }
    }
  },
  leonardo: {
    title: "LeonardoAI User Retention Strategy",
    meta: "Product Case Study · Creative AI Platform",
    tabs: {
      problem: {
        heading: "The Problem",
        body: `<p>LeonardoAI faced declining user retention in a competitive creative AI market — users tried the product but didn't form lasting habits.</p>
        <ul>
          <li>Unclear which user behaviors predicted long-term retention</li>
          <li>No cohort-level view of activation and drop-off patterns</li>
          <li>Product team needed data-backed hypotheses for retention initiatives</li>
        </ul>`
      },
      approach: {
        heading: "My Approach",
        body: `<p>I conducted a full retention analysis using SQL, cohort analysis, and behavioral segmentation.</p>
        <ul>
          <li><strong>Cohort analysis:</strong> Tracked weekly activation cohorts to identify retention decay patterns</li>
          <li><strong>Behavioral segmentation:</strong> Analyzed first-transaction type, merchant behavior, and early habit formation windows</li>
          <li><strong>Root cause analysis:</strong> Investigated recharge failures and multi-type user retention differences</li>
          <li><strong>Recommendations:</strong> Prioritized interventions based on highest-leverage retention drivers</li>
        </ul>`
      },
      impact: {
        heading: "Impact & Metrics",
        body: `<p>Delivered actionable retention insights with clear hypotheses for product experiments.</p>`,
        metrics: [
          { value: "16+", label: "Analysis dimensions" },
          { value: "Cohort", label: "Weekly retention tracking" },
          { value: "7-day", label: "Habit formation window" },
          { value: "RCA", label: "Recharge failure analysis" }
        ]
      },
      learnings: {
        heading: "Key Learnings",
        body: `<ul>
          <li>Retention work starts with <strong>defining the activation event</strong> — not all first actions are equal</li>
          <li>Early behavior combos (within 7 days) are strong predictors of long-term retention</li>
          <li>PMs should pair <strong>quantitative cohort analysis with qualitative "why" hypotheses</strong> before proposing features</li>
        </ul>`
      }
    }
  }
};

const TAB_LABELS = { problem: "Problem", approach: "Approach", impact: "Impact", learnings: "Learnings" };

function renderCase(caseId) {
  const data = CASES[caseId];
  if (!data) return;
  const detail = document.getElementById("case-detail");
  const tabKeys = Object.keys(data.tabs);
  detail.innerHTML = `
    <div class="case-detail-header">
      <h3>${data.title}</h3>
      <span class="case-detail-meta">${data.meta}</span>
    </div>
    <div class="case-tabs" role="tablist">
      ${tabKeys.map((k, i) => `<button class="case-tab${i === 0 ? " active" : ""}" data-tab="${k}">${TAB_LABELS[k]}</button>`).join("")}
    </div>
    ${tabKeys.map((k, i) => {
      const tab = data.tabs[k];
      const metricsHtml = tab.metrics ? `<div class="case-metrics">${tab.metrics.map(m => `<div class="case-metric"><strong>${m.value}</strong><span>${m.label}</span></div>`).join("")}</div>` : "";
      return `<div class="case-panel${i === 0 ? " active" : ""}" data-panel="${k}"><h4>${tab.heading}</h4>${tab.body}${k === "impact" ? metricsHtml : ""}</div>`;
    }).join("")}`;
  detail.querySelectorAll(".case-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      detail.querySelectorAll(".case-tab").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
      detail.querySelectorAll(".case-panel").forEach(p => p.classList.toggle("active", p.dataset.panel === tab));
    });
  });
}

document.querySelectorAll(".case-card").forEach(card => {
  const select = () => {
    document.querySelectorAll(".case-card").forEach(c => {
      c.classList.toggle("active", c === card);
      c.setAttribute("aria-pressed", c === card);
    });
    renderCase(card.dataset.case);
  };
  card.addEventListener("click", select);
  card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(); } });
});

renderCase("darwix");

const nav = document.getElementById("nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40), { passive: true });

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

document.querySelectorAll(".reveal").forEach(el => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); } });
  }, { threshold: 0.15 });
  obs.observe(el);
});

function animateCounter(el, target, suffix = "") {
  const dur = 1800, start = performance.now();
  const tick = now => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const card = entry.target;
    animateCounter(card.querySelector(".signal-num"), parseInt(card.dataset.count, 10), card.dataset.suffix || "");
    counterObserver.unobserve(card);
  });
}, { threshold: 0.5 });
document.querySelectorAll(".signal-card").forEach(c => counterObserver.observe(c));

document.querySelectorAll(".section").forEach(s => {
  s.style.opacity = "0";
  s.style.transform = "translateY(30px)";
  s.style.transition = "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.style.opacity = "1"; entry.target.style.transform = "translateY(0)"; }
    });
  }, { threshold: 0.08 }).observe(s);
});

const riceObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll(".bar").forEach((bar, i) => {
      const w = bar.style.getPropertyValue("--w");
      bar.style.width = "0";
      setTimeout(() => { bar.style.width = w; bar.style.transition = "width 1s cubic-bezier(0.22,1,0.36,1)"; }, i * 80);
    });
    riceObserver.unobserve(entry.target);
  });
}, { threshold: 0.3 });
const riceBoard = document.querySelector(".rice-board");
if (riceBoard) riceObserver.observe(riceBoard);

document.getElementById("contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const subject = encodeURIComponent(`Portfolio inquiry from ${fd.get("name")}`);
  const body = encodeURIComponent(`From: ${fd.get("name")} (${fd.get("email")})\n\n${fd.get("message")}`);
  window.location.href = `mailto:lovepreetsingh40888@gmail.com?subject=${subject}&body=${body}`;
});
