//  CONTACT FORM — ADDITION
//  On submit: sends email via EmailJS + opens WhatsApp
//  with the full enquiry pre-filled.
// ============================================================
function handleSubmit(e) {
e.preventDefault();
const form  = e.target;
const btn   = document.getElementById('submitBtn');

const senderName   = (form.name.value    || '').trim();
const senderEmail  = (form.email.value   || '').trim();
const projectField = (form.project.value || '').trim();
const serviceField = (form.service.value || '').trim();
const messageField = (form.message.value || '').trim();

btn.disabled  = true;
btn.innerHTML = 'Sending…';

// Build WhatsApp message
const waLines = [
`👋 *New enquiry from ${senderName}*`,
`📧 Email: ${senderEmail}`,
projectField ? `💼 Project: ${projectField}` : null,
serviceField ? `🎨 Service: ${serviceField}` : null,
`\n💬 Message:\n${messageField}`,
].filter(Boolean).join('\n');
const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waLines)}`;

// Helper to reset button
const resetBtn = () => {
setTimeout(() => {
btn.innerHTML = 'Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
btn.style.background = '';
btn.disabled = false;
}, 4500);
};

// Try EmailJS
if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
const templateParams = {
to_name:    'Othman',
from_name:  senderName,
from_email: senderEmail,
project:    projectField || '—',
service:    serviceField || '—',
message:    messageField,
};

emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
.then(() => {
window.open(waURL, '_blank');
btn.innerHTML  = '✓ Sent! Check WhatsApp too';
btn.style.background = 'linear-gradient(135deg,#0a4a2a,#1a8a3a,#00ff88)';
showNotification('✓ Message sent to email & WhatsApp!');
form.reset();
resetBtn();
})
.catch(() => {
// Email failed — fall back to WhatsApp only
window.open(waURL, '_blank');
btn.innerHTML  = '✓ Sent via WhatsApp';
btn.style.background = 'linear-gradient(135deg,#1a5a0a,#2a9a1a,#25D366)';
showNotification('WhatsApp opened with your enquiry. Email delivery had an issue.');
form.reset();
resetBtn();
});
} else {
// EmailJS not configured yet — WhatsApp only
window.open(waURL, '_blank');
btn.innerHTML  = '✓ Sent via WhatsApp';
btn.style.background = 'linear-gradient(135deg,#1a5a0a,#2a9a1a,#25D366)';
showNotification('Your enquiry was sent via WhatsApp!');
form.reset();
resetBtn();
}
}

function showNotification(msg) {
const n = document.getElementById('notification');
n.textContent = msg || '✓ Message sent!';
n.classList.add('show');
setTimeout(() => n.classList.remove('show'), 5000);
}