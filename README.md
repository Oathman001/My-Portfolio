# Personal Portfolio Website

A personal portfolio website built with HTML, CSS, and JavaScript. This is a single-page application (SPA) with smooth page transitions, showcasing projects, services, and contact information.

## Project Structure

```
├── Index.html          # Main HTML file with all page sections
├── css/
│   └── main.css        # All styles (formerly inline in HTML)
├── js/
│   ├── main.js         # Page navigation, EmailJS setup, scroll animations
│   ├── projects-data.js # Project data and definitions
│   └── contact-form.js   # Contact form handler and WhatsApp integration
└── images/
    ├── profile.jpeg    # Profile image
    ├── about.jpg       # About section image
    ├── lifestyle.jpg   # Lifestyle image
    ├── work.jpg        # Work image
    └── project1-6.*    # Project images
```

## Features

- **Single Page Application** — All pages are sections within Index.html, shown/hidden via JavaScript
- **6 Pages** — Home, About, Services, Portfolio, Project Detail, Contact
- **Smooth Transitions** — Page fade-in animations
- **Project Filtering** — Filter portfolio items by category
- **Contact Form** — Integrated with EmailJS for email submissions
- **WhatsApp Integration** — Quick message button
- **Responsive Design** — Works on mobile, tablet, and desktop
- **Scroll Animations** — Elements animate as they scroll into view

## Technologies Used

- HTML5
- CSS3 (no frameworks)
- Vanilla JavaScript (no frameworks)
- EmailJS (for contact form)
- WhatsApp API (for quick messaging)

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `Index.html` in any modern web browser
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

#### EmailJS Setup
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Get your public key and replace `YOUR_PUBLIC_KEY` in `js/main.js`
3. Set up an email template in EmailJS dashboard

#### WhatsApp Number
In `js/contact-form.js`, update the WhatsApp number:

```javascript
const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";
```

## Deployment

This is a static site that can be deployed anywhere:

- **GitHub Pages** (recommended — free)
- Netlify
- Vercel
- Any web host

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