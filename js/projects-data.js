//  PROJECT DATA
// ============================================================
const projects = {
'project-1': {
category: 'Brand Identity', year: '2024',
title: 'Identity System — Founder Brand',
subtitle: 'A complete visual identity system crafted from the ground up for a tech-focused founder building a personal brand in the digital space.',
client: 'Tech Founder (Personal Brand)', duration: '3 Weeks',
deliverables: ['Logo Design','Colour System','Typography Suite','Brand Guidelines','Business Card Design','Social Media Kit'],
tools: ['Adobe Illustrator','Adobe Photoshop','Figma'],
mainImage: 'images/project1.png',
overviewTitle: 'Building a Personal Brand from Scratch',
overview: [
'This project was about creating a brand identity that feels both personal and professional — something that communicates expertise and builds trust at first glance.',
'Working closely with the founder, I developed a complete visual system built around clarity and distinctiveness. Every element — from the logo mark to the colour palette — was crafted with intention and strategic purpose.',
'The result is a cohesive identity system that gives the client a strong, recognisable presence across all digital and print touchpoints.'
],
gallery: { cols: 4, rows: 3, items: ['images/project1.png', 'images/project1.png', 'images/project1.png', 'images/project1.png', 'images/project1.png', 'images/project1.png', 'images/project1.png', 'images/project1.png', 'images/project1.png', 'images/project1.png', 'images/project1.png', 'images/project1.png'] },
process: [
{ title: 'Discovery & Strategy', body: 'Deep-dive session to understand the founder\'s vision, audience, values, and competitive landscape. Defined the brand personality and positioning before any visual work began.' },
{ title: 'Concept Development', body: 'Explored multiple visual directions through moodboards and initial concept sketches. Refined the strongest concept based on strategic alignment and feedback.' },
{ title: 'Identity Design', body: 'Developed the logo, colour system, and typography suite. Each element was tested across multiple contexts to ensure flexibility and consistency.' },
{ title: 'Guidelines & Delivery', body: 'Compiled a comprehensive brand guidelines document covering logo usage, colour codes, typography hierarchy, and do\'s and don\'ts for the brand.' }
],
results: [{ num:'100%', label:'Brand Consistency Achieved' },{ num:'3x', label:'Stronger Visual Presence' },{ num:'2 Wks', label:'Time to Full System' },{ num:'∞', label:'Scalable Brand Foundation' }],
prev: null, next: 'project-2'
},
'project-2': {
category: 'Social Media Design', year: '2024',
title: 'Content System — Creator Brand',
subtitle: 'A cohesive carousel series, story templates, and full content system designed for a content creator\'s rebrand launch across Instagram and LinkedIn.',
client: 'Content Creator', duration: '2 Weeks',
deliverables: ['Carousel Templates','Story Templates','Post Grid System','Brand Color Application','Font Hierarchy System'],
tools: ['Figma','Adobe Photoshop','Canva Pro'],
mainImage: 'images/project2.png',
overviewTitle: 'A Content System Built for Consistency',
overview: [
'The challenge was creating a recognisable visual language for a content creator who wanted to stand out while maintaining flexibility for diverse content types.',
'I developed a modular content design system — templates, grids, and visual rules — that the client could use confidently and consistently without needing to start from scratch every time.',
'The system elevated the creator\'s digital presence, making their content instantly recognisable while keeping production efficient.'
],
gallery: { cols: 4, rows: 2, items: ['images/project2.png', 'images/project2.png', 'images/project2.png', 'images/project2.png', 'images/project2.png', 'images/project2.png', 'images/project2.png', 'images/project2.png'] },
process: [
{ title: 'Brand Audit', body: 'Reviewed the existing content and identified inconsistencies. Understood the creator\'s tone, audience, and content pillars.' },
{ title: 'Visual Direction', body: 'Established a refined visual direction that respected the creator\'s existing audience while elevating their design quality.' },
{ title: 'Template System Design', body: 'Built a full set of modular templates in Figma — carousel slides, story frames, highlight covers, and post formats — all built on a consistent grid.' },
{ title: 'Handover & Training', body: 'Delivered editable files with clear instructions so the client could use and update their templates independently.' }
],
results: [{ num:'40+', label:'Templates Delivered' },{ num:'100%', label:'Consistent Brand Voice' },{ num:'2x', label:'Content Production Speed' },{ num:'→‘', label:'Audience Engagement' }],
prev: 'project-1', next: 'project-3'
},
'project-3': {
category: 'Campaign Concepts', year: '2024',
title: 'Launch Campaign — Product Brand',
subtitle: 'Full campaign visual direction and messaging for a product brand\'s market entry — from concept to launch-ready creative assets.',
client: 'Product Brand (Startup)', duration: '4 Weeks',
deliverables: ['Campaign Concept','Visual Direction','Key Visuals','Ad Creatives','Campaign Messaging','Launch Assets'],
tools: ['Adobe Illustrator','Adobe Photoshop','Figma','Adobe After Effects'],
mainImage: 'images/project3.png',
overviewTitle: 'A Launch Campaign Built for Impact',
overview: [
'This project required creating a campaign that would introduce a new product to the market with clarity, excitement, and a strong visual identity.',
'I developed the full campaign concept — from the overarching idea and messaging framework to the visual language and key art direction.',
'Every creative decision was aligned with the brand\'s positioning and designed to generate interest, build trust, and drive action from day one.'
],
gallery: { cols: 4, rows: 3, items: ['images/project3.png', 'images/project3.png', 'images/project3.png', 'images/project3.png', 'images/project3.png', 'images/project3.png', 'images/project3.png', 'images/project3.png', 'images/project3.png', 'images/project3.png', 'images/project3.png', 'images/project3.png'] },
process: [
{ title: 'Market Research', body: 'Analysed the competitive landscape to identify white space and opportunities for the product\'s positioning and communication.' },
{ title: 'Campaign Concept', body: 'Developed the campaign idea, core message, and visual theme that would guide all creative output.' },
{ title: 'Visual Development', body: 'Created key visuals, typography treatments, and the colour story for the campaign — building a distinctive visual identity for the launch.' },
{ title: 'Asset Production', body: 'Produced all launch-ready creative assets — ad formats, social visuals, and marketing materials — ready for immediate deployment.' }
],
results: [{ num:'Day 1', label:'Launch-Ready Delivery' },{ num:'15+', label:'Creative Assets Produced' },{ num:'100%', label:'Brand-Aligned Execution' },{ num:'→‘', label:'Market Entry Visibility' }],
prev: 'project-2', next: 'project-4'
},
'project-4': {
category: 'Creative Strategy', year: '2024',
title: 'Brand Framework — Consultancy',
subtitle: 'Positioning, messaging architecture, and communication strategy for a growing consultancy firm seeking clarity in a competitive market.',
client: 'Business Consultancy', duration: '3 Weeks',
deliverables: ['Brand Positioning','Messaging Framework','Communication Strategy','Brand Story','Content Pillars','Strategy Document'],
tools: ['Notion','Figma','Google Docs'],
mainImage: 'images/project4.jpg',
overviewTitle: 'Strategic Clarity for a Growing Business',
overview: [
'The consultancy had strong expertise but was struggling to communicate its value clearly and consistently. The goal was to build a strategic framework that would guide all future communication.',
'I worked through a discovery process to understand the firm\'s strengths, target clients, and competitive advantages — then translated those insights into a clear, usable brand framework.',
'The result gave the team a shared language, a compelling brand story, and a communication architecture that could scale as the business grows.'
],
gallery: { cols: 4, rows: 2, items: ['images/project4.png', 'images/project4.png', 'images/project4.png', 'images/project4.png', 'images/project4.png', 'images/project4.png', 'images/project4.png'] },
process: [
{ title: 'Discovery Sessions', body: 'Conducted in-depth interviews with the founding team to extract the brand\'s core strengths, values, and differentiators.' },
{ title: 'Competitive Analysis', body: 'Mapped the competitive landscape to identify positioning opportunities and gaps the brand could own.' },
{ title: 'Framework Development', body: 'Built the brand positioning statement, messaging hierarchy, content pillars, and communication guidelines.' },
{ title: 'Documentation & Presentation', body: 'Delivered a clear, well-structured strategy document with practical guidelines the team could implement immediately.' }
],
results: [{ num:'1 Doc', label:'Complete Strategy Framework' },{ num:'Clear', label:'Brand Positioning Established' },{ num:'5 Pillars', label:'Content Strategy Defined' },{ num:'→‘', label:'Team Alignment & Confidence' }],
prev: 'project-3', next: 'project-5'
},
'project-5': {
category: 'Brand Identity', year: '2024',
title: 'Visual Direction — Startup',
subtitle: 'Colour system, typography hierarchy, and brand guidelines designed for an early-stage startup ready to present itself to the world.',
client: 'Early-Stage Startup', duration: '2 Weeks',
deliverables: ['Colour System','Typography Hierarchy','Brand Guidelines','Logo Refinement','Application Examples'],
tools: ['Adobe Illustrator','Figma'],
mainImage: 'images/project5.png',
overviewTitle: 'Giving a Startup Its Visual Identity',
overview: [
'At the early stage, a startup needs to look credible and distinctive — even before it has a large team or budget. This project was about building that foundation.',
'I focused on creating a tight, well-considered visual system — colour palette, typography, and usage rules — that would make the startup look polished and professional from day one.',
'The brand guidelines ensure the team can apply the identity consistently as they grow, without needing to reinvent the wheel every time.'
],
gallery: { cols: 4, rows: 3, items: ['images/project5.png', 'images/project5.png', 'images/project5.png', 'images/project5.png', 'images/project5.png', 'images/project5.png', 'images/project5.png', 'images/project5.png', 'images/project5.png', 'images/project5.png', 'images/project5.png', 'images/project5.png'] },
process: [
{ title: 'Brand Direction', body: 'Defined the visual personality — modern, trustworthy, and approachable — based on the startup\'s values and target audience.' },
{ title: 'Colour & Typography', body: 'Built a primary and secondary colour system with accessibility in mind, paired with a clear typographic hierarchy.' },
{ title: 'Logo Refinement', body: 'Refined the existing logomark to align with the new visual direction and ensure it works across all sizes and backgrounds.' },
{ title: 'Guidelines Document', body: 'Produced a concise brand guidelines document with real usage examples to empower the team.' }
],
results: [{ num:'Day 1', label:'Investor-Ready Brand' },{ num:'100%', label:'Visual Consistency' },{ num:'→‘', label:'Perceived Credibility' },{ num:'WCAG', label:'Accessible Colour System' }],
prev: 'project-4', next: 'project-6'
},
'project-6': {
category: 'Social Media Design', year: '2024',
title: 'Brand Templates — Business Owner',
subtitle: 'Reusable content templates and promotional graphics designed for a business owner\'s social media channels — built for flexibility and brand consistency.',
client: 'Business Owner', duration: '1.5 Weeks',
deliverables: ['Post Templates','Promotional Graphics','Story Templates','Highlight Covers','Editable File System'],
tools: ['Canva Pro','Figma','Adobe Photoshop'],
mainImage: 'images/project6.png',
overviewTitle: 'Empowering a Business Owner to Show Up Consistently',
overview: [
'This business owner was creating content regularly but without a consistent visual system — every post looked different, making it hard to build brand recognition.',
'I created a set of flexible, on-brand templates that the owner could use independently — without needing design skills — while maintaining a professional, cohesive look.',
'The templates were built with ease of use in mind: editable colours, swappable images, and clear structure so content creation became faster and more consistent.'
],
gallery: { cols: 3, rows: 2, items: ['images/project6.png', 'images/project6.png', 'images/project6.png', 'images/project6.png', 'images/project6.png', 'images/project6.png'] },
process: [
{ title: 'Brand Understanding', body: 'Reviewed the client\'s existing brand assets, colour preferences, and content types to understand what templates were most needed.' },
{ title: 'Template Architecture', body: 'Planned a template system covering all key content formats — announcements, quotes, promotions, and general posts.' },
{ title: 'Design & Build', body: 'Designed and built all templates with clear placeholder zones, brand colours, and typography already applied.' },
{ title: 'File Delivery & Walkthrough', body: 'Delivered all editable files with a short walkthrough guide so the client could start using them immediately with confidence.' }
],
results: [{ num:'25+', label:'Templates Delivered' },{ num:'3x', label:'Faster Content Creation' },{ num:'100%', label:'Brand Consistency' },{ num:'→‘', label:'Professional Presence' }],
prev: 'project-5', next: null
}
};


// ============================================================