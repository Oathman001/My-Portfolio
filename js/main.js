//  EMAILJS SETUP — ADDITION
// ============================================================
//
//  ✓ HOW TO ACTIVATE EMAIL DELIVERY:
//
//  1. Go to https://emailjs.com and create a free account.
//  2. Add an Email Service (use Gmail — connect your
//     creativeoathman@gmail.com account).
//     → Copy the Service ID and paste it below.
//
//  3. Create an Email Template. Use these variable names:
//       {{to_name}}    — your name (pre-filled as "Othman")
//       {{from_name}}  — sender's name
//       {{from_email}} — sender's email
//       {{project}}    — project / business
//       {{service}}    — service interested in
//       {{message}}    — the message body
//     → Copy the Template ID and paste it below.
//
//  4. Go to Account → API Keys → copy your Public Key.
//     → Paste it below.
//
//  Replace the three placeholder strings and you're done.
// ============================================================
const EMAILJS_PUBLIC_KEY  = 'd2DwHor0ROmH3bZYE';   // → replace
const EMAILJS_SERVICE_ID  = 'service_bzl8zqi';   // → replace
const EMAILJS_TEMPLATE_ID = 'template_qnzb2dl';  // → replace

// Your WhatsApp number — digits only, include country code
const WHATSAPP_NUMBER = '2349061822492';

// Initialise EmailJS
(function () {
if (typeof emailjs !== 'undefined') {
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}
})();


// ============================================================
//  LOSSLESS WEBP PAIRING
//  WebP lossless is mathematically identical to the PNG - zero
//  quality difference - but ~30% smaller. Browsers that don't
//  support WebP silently fall back to the verified PNG.
// ============================================================
const WEBP_COVERS = {
  'images/project2.png': 'images/project2.webp',
  'images/project3.png': 'images/project3.webp',
  'images/project6.png': 'images/project6.webp'
};

function picMarkup(src, imgAttrs) {
  const webp = WEBP_COVERS[src];
  const img = `<img src="${src}" ${imgAttrs}>`;
  return webp
    ? `<picture><source type="image/webp" srcset="${webp}">${img}</picture>`
    : img;
}

// ============================================================
//  RENDER PROJECT GALLERY (DYNAMIC)
// ============================================================
function renderGallery(gallery) {
  // Get the gallery section container
  const container = document.getElementById('detail-gallery-section');
  // Remove all existing gallery rows
  const existingRows = container.querySelectorAll('.project-gallery-grid');
  existingRows.forEach(row => row.remove());

  // Support both new format (cols, rows, items) and old format (row1, row2...)
  if (gallery.cols !== undefined && gallery.items) {
    // New format: split items array into rows based on cols
    const cols = gallery.cols;
    const items = gallery.items;
    let rowIndex = 0;
    for (let i = 0; i < items.length; i += cols) {
      const rowItems = items.slice(i, i + cols);
      const rowDiv = document.createElement('div');
      rowDiv.className = `project-gallery-grid cols-${cols}`;
      rowDiv.id = `detail-gallery-row${rowIndex + 1}`;
      rowDiv.style.marginBottom = (i + cols < items.length) ? '1.5rem' : '0';
      rowDiv.innerHTML = rowItems.map(src =>
        `<div class="project-gallery-item">${src ? picMarkup(src, 'alt="Gallery image" loading="lazy" decoding="async" style="aspect-ratio:4/3; object-fit:cover;"') : `<div class="project-gallery-item-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Gallery Image</span></div>`}</div>`
      ).join('');
      container.appendChild(rowDiv);
      rowIndex++;
    }
  } else {
    // Old format: gallery with row1, row2, etc. keys
    const rowKeys = Object.keys(gallery).filter(k => k.startsWith('row'));
    rowKeys.forEach((key, index) => {
      const rowData = gallery[key];
      const rowId = `detail-gallery-${key}`;
      const rowDiv = document.createElement('div');
      rowDiv.className = 'project-gallery-grid cols-3';
      rowDiv.id = rowId;
      rowDiv.style.marginBottom = index < rowKeys.length - 1 ? '1.5rem' : '0';
      rowDiv.innerHTML = rowData.map(src =>
        `<div class="project-gallery-item">${src ? picMarkup(src, 'alt="Gallery image" loading="lazy" decoding="async" style="aspect-ratio:4/3; object-fit:cover;"') : `<div class="project-gallery-item-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Gallery Image</span></div>`}</div>`
      ).join('');
      container.appendChild(rowDiv);
    });
  }
}


// ============================================================

//  OPEN PROJECT DETAIL
// ============================================================
function openProject(projectId, fromRoute) {
const p = projects[projectId];
if (!p) { showPage('portfolio', true); return; }
window._currentProject = projectId;
if (!fromRoute) { syncHash('project/' + projectId); }
document.getElementById('detail-category').textContent = p.category;
document.getElementById('detail-year').textContent = p.year;
document.getElementById('detail-title').textContent = p.title;
document.getElementById('detail-subtitle').textContent = p.subtitle;
const mainImgEl = document.getElementById('detail-main-image');
mainImgEl.innerHTML = p.mainImage
? picMarkup(p.mainImage, `alt="${p.title}" loading="lazy" decoding="async" style="width:100%; height:100%; object-fit:cover;"`)
: `<div class="project-main-image-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Project Cover Image</span></div>`;
document.getElementById('detail-overview-title').textContent = p.overviewTitle;
document.getElementById('detail-overview-p1').textContent = p.overview[0] || '';
document.getElementById('detail-overview-p2').textContent = p.overview[1] || '';
document.getElementById('detail-overview-p3').textContent = p.overview[2] || '';
document.getElementById('detail-client').textContent = p.client;
document.getElementById('detail-category-2').textContent = p.category;
document.getElementById('detail-year-2').textContent = p.year;
document.getElementById('detail-duration').textContent = p.duration;
document.getElementById('detail-deliverables').innerHTML = p.deliverables.map(d => `<li>${d}</li>`).join('');
document.getElementById('detail-tools').innerHTML = p.tools.map(t => `<li>${t}</li>`).join('');

// Render gallery dynamically based on number of rows
renderGallery(p.gallery);

document.getElementById('detail-process').innerHTML = p.process.map((step, i) =>
`<div class="process-step"><div class="process-step-num">0${i+1}</div><div class="process-step-content"><h4>${step.title}</h4><p>${step.body}</p></div></div>`
).join('');
document.getElementById('detail-results').innerHTML = p.results.map(r =>
`<div class="result-card"><span class="result-num">${r.num}</span><span class="result-label">${r.label}</span></div>`
).join('');
const prevWrap = document.getElementById('detail-prev-wrap');
const nextWrap = document.getElementById('detail-next-wrap');
const prevTitle = document.getElementById('detail-prev-title');
const nextTitle = document.getElementById('detail-next-title');
if (p.prev && projects[p.prev]) { prevWrap.style.display='flex'; prevTitle.textContent=projects[p.prev].title; prevTitle.onclick=()=>openProject(p.prev); } else { prevWrap.style.display='none'; }
if (p.next && projects[p.next]) { nextWrap.style.display='flex'; nextTitle.textContent=projects[p.next].title; nextTitle.onclick=()=>openProject(p.next); } else { nextWrap.style.display='none'; }
showPage('project-detail');
}

function goBackToPortfolio() { routeTo('portfolio'); }


// ============================================================

//  HASH ROUTER (deep links + back/forward support)
//  Routes: '' | 'home' | 'about' | 'services' | 'portfolio'
//          | 'contact' | 'project/<project-id>'
// ============================================================
const VALID_PAGES = ['home', 'about', 'services', 'portfolio', 'contact'];
let _routing = false;

// Write the hash without triggering a second navigation pass.
function syncHash(fragment) {
  const target = fragment ? '#/' + fragment : '#/';
  if (window.location.hash === target) return;
  _routing = true;
  window.location.hash = target;
  setTimeout(() => { _routing = false; }, 0);
}

// Programmatic navigation: updates hash, lets the router render.
function routeTo(dest) {
  const target = dest ? '#/' + dest : '#/';
  if (window.location.hash === target) {
    handleRoute();
  } else {
    window.location.hash = target;
  }
}

// Read the current hash and render the matching view.
function handleRoute() {
  const raw = (window.location.hash || '').replace(/^#\/?/, '').trim();
  const parts = raw.split('/');
  if (parts[0] === 'project' && parts[1] && parts[1].trim() !== '') {
    if (projects[parts[1]]) {
      openProject(parts[1], true);
    } else {
      showPage('portfolio', true);
    }
    return;
  }
  const key = VALID_PAGES.includes(parts[0]) ? parts[0] : 'home';
  showPage(key, true);
}

window.addEventListener('hashchange', () => {
  if (_routing) return;
  handleRoute();
});


// ============================================================

//  PAGE NAVIGATION
// ============================================================
function showPage(page, fromRoute) {
if (!fromRoute && page !== 'project-detail') { syncHash(page === 'home' ? '' : page); }
document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
document.getElementById('page-' + page).classList.add('active');
document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
if (page === 'project-detail') {
const pl = document.getElementById('nav-portfolio');
if (pl) pl.classList.add('active');
} else {
const al = document.getElementById('nav-' + page);
if (al) al.classList.add('active');
}
window.scrollTo({ top: 0, behavior: 'smooth' });
setTimeout(() => initReveal(), 100);
}

function toggleMobile() { document.getElementById('mobileMenu').classList.toggle('open'); }

function initReveal() {
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));
}

function filterPortfolio(category, btn) {
document.querySelectorAll('.portfolio-tab').forEach(t => t.classList.remove('active'));
btn.classList.add('active');
document.querySelectorAll('.portfolio-card').forEach(card => {
if (category === 'all' || card.dataset.category === category) {
card.style.display = 'block';
setTimeout(() => { card.style.opacity='1'; card.style.transform='translateY(0)'; }, 20);
} else {
card.style.opacity = '0';
card.style.transform = 'translateY(12px)';
setTimeout(() => { card.style.display='none'; }, 300);
}
});
}


// ============================================================

window.addEventListener('scroll', () => {
const nav = document.getElementById('navbar');
nav.style.borderBottomColor = window.scrollY > 40 ? 'rgba(170,178,195,0.12)' : 'rgba(170,178,195,0.1)';
});

document.addEventListener('DOMContentLoaded', () => {
initReveal();
handleRoute();
});