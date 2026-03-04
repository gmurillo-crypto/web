/**
 * DYSOLVE CAMPAIGN — PAGE RENDERER
 * Reads from DYSOLVE content object and populates DOM
 */

function initPage(pageKey) {
  const g = DYSOLVE.global;
  const p = DYSOLVE[pageKey] || DYSOLVE.parents;

  // ── Page title ──
  document.title = p.pageTitle || g.siteName;

  // ── Nav CTA ──
  const navCTA = document.getElementById('nav-cta');
  if (navCTA) navCTA.textContent = g.navCTA;

  // ── Hero ──
  setText('hero-segment',  p.segment);
  setHTML('hero-headline', buildHeadline(p.heroHeadline, p.heroItalic));
  setText('hero-sub',      p.heroSub);
  setHref('hero-cta',      'https://dysolve.ai');
  setHTML('hero-cta',      p.heroCTA);
  setText('hero-note',     p.heroNote);

  // ── Video ──
  const iframe = document.getElementById('video-iframe');
  if (iframe && p.videoFolderId) {
    iframe.src = `https://drive.google.com/embeddedfolderview?id=${p.videoFolderId}#list`;
  }
  const vBtn = document.getElementById('video-folder-btn');
  if (vBtn && p.videoFolder) {
    vBtn.href = p.videoFolder;
  }
  const vHeroBtn = document.getElementById('video-link-hero');
  if (vHeroBtn && p.videoFolder) {
    vHeroBtn.href = '#videos';
  }

  // ── Media logos ──
  const logosEl = document.getElementById('media-logos');
  if (logosEl) {
    logosEl.innerHTML = g.mediaLogos.map(l => `<span class="logo-tag">${l}</span>`).join('');
  }

  // ── Stats (page-specific or global) ──
  const stats = p.stats || g.stats;
  const statsEl = document.getElementById('stats-row');
  if (statsEl) {
    statsEl.innerHTML = stats.map((s, i) =>
      `${i > 0 ? '<div class="divider"></div>' : ''}
      <div class="stat"><div class="stat-n">${s.n}</div><div class="stat-l">${s.l}</div></div>`
    ).join('');
  }

  // ── How it works ──
  setText('how-title', p.howTitle);
  setText('how-sub',   p.howSub);
  const stepsEl = document.getElementById('steps-grid');
  if (stepsEl && p.steps) {
    const accent = p.accentColor || '#10A9AB';
    const bg = pageKey === 'therapists' ? 'var(--purple-10)' :
               pageKey === 'voucherFamilies' ? 'var(--purple-10)' :
               'var(--teal-20)';
    const col = pageKey === 'therapists' || pageKey === 'voucherFamilies' ? 'var(--purple)' : 'var(--teal-d)';
    stepsEl.innerHTML = p.steps.map(s =>
      `<div class="step reveal">
        <div class="step-num" style="background:${bg};color:${col}">${s.n}</div>
        <h4>${s.title}</h4>
        <p>${s.body}</p>
      </div>`
    ).join('');
  }

  // ── Versus ──
  setText('versus-title', p.versusTitle);
  const versusEl = document.getElementById('versus-grid');
  if (versusEl) {
    const goodBg = pageKey === 'therapists' ? 'var(--purple)' :
                   pageKey === 'voucherFamilies' ? 'var(--purple)' :
                   pageKey === 'ogSwitchers' ? 'var(--teal)' : 'var(--teal)';
    const goodBorder = goodBg;
    versusEl.innerHTML = `
      <div class="vs-card vs-bad reveal">
        <div class="vs-tag">${p.versusBadTitle}</div>
        <h4>${p.versusBadHead}</h4>
        <ul class="vs-list">${p.versusBadItems.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      <div class="vs-card vs-good reveal" style="background:${goodBg};border-color:${goodBorder}">
        <div class="vs-tag">${p.versusGoodTitle}</div>
        <h4>${p.versusGoodHead}</h4>
        <ul class="vs-list">${p.versusGoodItems.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>`;
  }

  // ── Features ──
  const features = p.features || g.features;
  const featEl = document.getElementById('feature-list');
  if (featEl) {
    featEl.innerHTML = features.map(f =>
      `<li>
        <span class="check-icon" style="background:${p.accentColor || 'var(--teal)'}">
          <svg viewBox="0 0 12 12"><path d="M2 6l3 3 5-5"/></svg>
        </span>${f}
      </li>`
    ).join('');
  }

  // ── Guarantee ──
  setText('guarantee-text', p.guarantee || g.guarantee);

  // ── FAQ ──
  const faqEl = document.getElementById('faq-wrap');
  if (faqEl && g.faq) {
    faqEl.innerHTML = g.faq.map((item, i) =>
      `<div class="faq-item${i === 0 ? ' open' : ''}">
        <button class="faq-q" onclick="toggleFaq(this)">${item.q}
          <span class="faq-chevron"><svg viewBox="0 0 12 12" width="10" height="10"><path d="M2 4l4 4 4-4"/></svg></span>
        </button>
        <div class="faq-a">${item.a}</div>
      </div>`
    ).join('');
  }

  // ── Bottom CTA ──
  setText('cta-headline', p.ctaHeadline);
  setText('cta-body',     p.ctaBody);
  setHTML('cta-button',   p.ctaButton);
  setText('cta-note',     p.ctaNote);

  // ── Footer ──
  const footerEl = document.getElementById('footer-copy');
  if (footerEl) footerEl.innerHTML = `© 2026 Dysolve AI · <a href="${g.siteUrl}">${g.siteUrl.replace('https://','')}</a> · ${g.tagline}`;

  // ── Accent color patch ──
  if (p.accentColor && p.accentColor !== '#10A9AB') {
    const accent = p.accentColor;
    document.querySelectorAll('.btn-primary,.nav-cta,.check-icon,.step-num').forEach(el => {
      if (!el.style.background) el.style.background = accent;
    });
  }

  // ── Price badge accent ──
  const priceBadge = document.querySelector('.price-badge');
  if (priceBadge && p.accentColor && p.accentColor !== '#10A9AB') {
    priceBadge.style.background = p.accentColor + '18';
    priceBadge.style.color = p.accentColor;
    if (p.priceBadge) priceBadge.textContent = '✦ ' + p.priceBadge;
  } else if (priceBadge && p.priceBadge) {
    priceBadge.textContent = '✦ ' + p.priceBadge;
  }

  // ── Price display override ──
  if (p.priceDisplay) {
    const numEl = document.querySelector('.price-amount .num');
    if (numEl) numEl.textContent = p.priceDisplay;
    if (p.accentColor) numEl.style.color = p.accentColor;
  }
  if (p.priceSub) {
    const subEl = document.createElement('p');
    subEl.style.cssText = 'font-size:.82rem;color:var(--muted);margin-bottom:1.2rem;margin-top:-.4rem';
    subEl.textContent = p.priceSub;
    const priceAmount = document.querySelector('.price-amount');
    if (priceAmount) priceAmount.insertAdjacentElement('afterend', subEl);
  }
  if (p.pricePeriod) {
    const perEl = document.querySelector('.price-amount .per');
    if (perEl) perEl.textContent = p.pricePeriod;
  }

  // ── Bottom CTA bg ──
  const bottomCTA = document.querySelector('.bottom-cta');
  if (bottomCTA && p.accentColor && p.accentColor !== '#10A9AB') {
    bottomCTA.style.background = p.accentColor;
    const btnW = bottomCTA.querySelector('.btn-white');
    if (btnW) btnW.style.color = p.accentColor;
  }

  // ── Scroll reveal ──
  initReveal();
}

/* ── Utilities ── */
function setText(id, val) {
  const el = document.getElementById(id);
  if (el && val) el.textContent = val;
}
function setHTML(id, val) {
  const el = document.getElementById(id);
  if (el && val) el.innerHTML = val;
}
function setHref(id, val) {
  const el = document.getElementById(id);
  if (el && val) el.href = val;
}
function buildHeadline(headline, italic) {
  if (!italic || !headline.includes(italic)) return headline;
  return headline.replace(italic, `<em>${italic}</em>`);
}

/* ── FAQ accordion ── */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/* ── Scroll reveal ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(el => { if (!el.classList.contains('visible')) io.observe(el); });
}
