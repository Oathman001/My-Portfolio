# Personal Portfolio Website

A personal portfolio website built with HTML, CSS, and JavaScript. This is a single-page application (SPA) with smooth page transitions, showcasing projects, services, and contact information.

## Project Structure

```
├── index.html            # Main HTML file with all page sections
├── 404.html              # Custom 404 error page
├── manifest.json         # PWA manifest (installability, theme colors, icons)
├── vercel.json           # Vercel SPA fallback for clean URLs
├── css/
│   └── main.css          # All styles (formerly inline in HTML)
├── js/
│   ├── main.js           # History-API router, EmailJS setup, scroll animations, WebP pairing
│   ├── projects-data.js # Project data and definitions
│   └── contact-form.js   # Contact form handler and WhatsApp integration
├── images/
│   ├── profile.jpeg    # Profile image (hero, social preview, favicon, manifest)
│   ├── about.jpg       # About section image
│   ├── lifestyle.jpg   # Lifestyle image
│   ├── work.jpg        # Work image
│   ├── project1-6.*    # Project images (PNG + WebP variants)
│   └── social-preview.png # 1200×630 social share image (recommended)
├── robots.txt          # SEO robots directives
├── sitemap.xml         # Sitemap for search engines
└── LICENSE
```

## Routing

This site uses the **History API** for clean, crawlable URLs (no `#` fragments):

| URL | Page |
|-----|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/portfolio` | Portfolio |
| `/contact` | Contact |
| `/contact?service=Brand%20Identity` | Contact with service pre-filled |
| `/project/project-1` | Project detail |

Navigation is handled client-side via `history.pushState()`; the browser back/forward buttons work through the `popstate` event. The `vercel.json` rewrite rule tells Vercel to serve `index.html` for every route, so direct URL loads and page refreshes work correctly.

> **Note:** `rewrites` are applied *after* Vercel's static file check, so assets like `/css/main.css` and `/images/*` are still served directly — only unmatched routes fall through to the SPA. Because the rule is a catch-all, `404.html` is effectively unreachable and unknown URLs render the SPA instead.


## Features

- **Single Page Application** — All pages are sections within index.html, shown/hidden via JavaScript
- **6 Pages** — Home, About, Services, Portfolio, Project Detail, Contact
- **Smooth Transitions** — Page fade-in animations
- **Project Filtering** — Filter portfolio items by category
- **Contact Form** — Integrated with EmailJS for email submissions
- **WhatsApp Integration** — Quick message button + WhatsApp fallback for contact form
- **Responsive Design** — Works on mobile, tablet, and desktop
- **Scroll Animations** — Elements animate as they scroll into view
- **SEO Optimized** — JSON-LD structured data, keyword/author meta tags, Open Graph & Twitter cards
- **Social Sharing** — Proper og:image (1200×630 social preview), Twitter Card support
- **PWA Ready** — manifest.json for installability on mobile/desktop
- **Performance** — WebP image pairing, lazy-loading, preconnect hints, inline SVG favicon
- **Accessibility** — `aria-current` on active nav links, `aria-label` on buttons
- **Back-to-Top Button** — Floating scroll-to-top button appears after scrolling
- **Custom 404 Page** — Friendly error page with navigation back home

## Technologies Used

- HTML5
- CSS3 (no frameworks)
- Vanilla JavaScript (no frameworks)
- EmailJS (for contact form)
- WhatsApp API (for quick messaging)

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. That's it! No build process required

### Customizing

#### Add/Edit Projects
Edit `js/projects-data.js` to add, remove, or modify projects:

```javascript
const projects = {
  project1: {
    title: "Project Title",
    category: "Web Design",
    image: "images/project1.png",
    // ... other project details
  }
  // Add more projects here
};
```

#### EmailJS Setup (already configured)
The EmailJS keys in `js/main.js` are pre-filled. To verify or update:

1. Sign in at [emailjs.com](https://www.emailjs.com/)
2. `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, and `EMAILJS_TEMPLATE_ID` are set in `js/main.js`

#### WhatsApp Number
Update the WhatsApp number in `js/main.js`:

```javascript
const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";
```

## Deployment

This is a static site that can be deployed anywhere:

- **Vercel** (current host)
- Netlify
- GitHub Pages
- Any web host

### Vercel Setup (current)

1. Go to [vercel.com/new](https://vercel.com/new) and import `Oathman001/My-Portfolio`
2. Framework Preset: **Other**
3. Build Command: *leave empty*
4. Output Directory: `.`
5. `vercel.json` in the repo root supplies the SPA rewrite automatically — no build step required

Deploys happen automatically on every push to `main`. Preview deployments are generated for other branches.

> **Note:** The entry file must be lowercase `index.html`. Vercel's filesystem is case-sensitive Linux, so `Index.html` will not be served at `/`.

### GitHub Pages Setup

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select source: main branch
4. Your site will be live at `https://yourusername.github.io/your-repo-name/`

## Browser Compatibility

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

MIT License

---

**Note:** This is a static portfolio. No server-side processing required.