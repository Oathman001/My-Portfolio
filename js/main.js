//  EMAILJS SETUP â€” ADDITION
// ============================================================
//
//  âœ… HOW TO ACTIVATE EMAIL DELIVERY:
//
//  1. Go to https://emailjs.com and create a free account.
//  2. Add an Email Service (use Gmail â€” connect your
//     creativeoathman@gmail.com account).
//     â†’ Copy the Service ID and paste it below.
//
//  3. Create an Email Template. Use these variable names:
//       {{to_name}}    â€” your name (pre-filled as "Othman")
//       {{from_name}}  â€” sender's name
//       {{from_email}} â€” sender's email
//       {{project}}    â€” project / business
//       {{service}}    â€” service interested in
//       {{message}}    â€” the message body
//     â†’ Copy the Template ID and paste it below.
//
//  4. Go to Account â†’ API Keys â†’ copy your Public Key.
//     â†’ Paste it below.
//
//  Replace the three placeholder strings and you're done.
// ============================================================
const EMAILJS_PUBLIC_KEY  = 'd2DwHor0ROmH3bZYE';   // â† replace
const EMAILJS_SERVICE_ID  = 'service_bzl8zqi';   // â† replace
const EMAILJS_TEMPLATE_ID = 'template_qnzb2dl';  // â† replace

// Your WhatsApp number â€” digits only, include country code
const WHATSAPP_NUMBER = '2349061822492';

// Initialise EmailJS
(function () {
if (typeof emailjs !== 'undefined') {
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}
})();


// ============================================================

//  OPEN PROJECT DETAIL
// ============================================================
function openProject(projectId) {
const p = projects[projectId];
if (!p) return;
window._currentProject = projectId;
document.getElementById('detail-category').textContent = p.category;
document.getElementById('detail-year').textContent = p.year;
document.getElementById('detail-title').textContent = p.title;
document.getElementById('detail-subtitle').textContent = p.subtitle;
const mainImgEl = document.getElementById('detail-main-image');
mainImgEl.innerHTML = p.mainImage
? `<img src="${p.mainImage}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;">`
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
document.getElementById('detail-gallery-row1').innerHTML = p.gallery.row1.map(src =>
`<div class="project-gallery-item">${src ? `<img src="${src}" alt="Gallery image" style="aspect-ratio:4/3; object-fit:cover;">` : `<div class="project-gallery-item-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Gallery Image</span></div>`}</div>`
).join('');
document.getElementById('detail-gallery-row2').innerHTML = p.gallery.row2.map(src =>
`<div class="project-gallery-item">${src ? `<img src="${src}" alt="Gallery image" style="aspect-ratio:4/3; object-fit:cover;">` : `<div class="project-gallery-item-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Gallery Image</span></div>`}</div>`
).join('');
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

function goBackToPortfolio() { showPage('portfolio'); }


// ============================================================

//  PAGE NAVIGATION
// ============================================================
function showPage(page) {
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
document.getElementById('nav-home').classList.add('active');
});