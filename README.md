# EverTrust Overseas Website

Premium multi-page React + Tailwind website for EverTrust Overseas, designed for a modern global export brand.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router

## Pages

- Home
- About Us
- Products
- Product Detail
- Services
- Contact Us
- Inquiry
- Certifications

## Folder Structure

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── CTASection.jsx
    │   ├── ContactForm.jsx
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── InquiryForm.jsx
    │   ├── PageHero.jsx
    │   ├── ProductCard.jsx
    │   ├── SectionIntro.jsx
    │   ├── ServiceCard.jsx
    │   ├── StatCard.jsx
    │   ├── TestimonialCard.jsx
    │   └── WhatsAppFloat.jsx
    ├── data/
    │   └── siteData.js
    ├── hooks/
    │   └── useScrollToTop.jsx
    ├── layouts/
    │   └── SiteLayout.jsx
    ├── pages/
    │   ├── AboutPage.jsx
    │   ├── CertificationsPage.jsx
    │   ├── ContactPage.jsx
    │   ├── HomePage.jsx
    │   ├── InquiryPage.jsx
    │   ├── ProductDetailPage.jsx
    │   ├── ProductsPage.jsx
    │   └── ServicesPage.jsx
    └── styles/
        └── index.css
```

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Notes

- Product, service, testimonial, and company content is centralized in `src/data/siteData.js`.
- Forms currently use client-side validation and demo submission states.
- To go live, connect the forms to your backend, CRM, or email workflow.
- The language selector is scaffolded so additional translated content can be layered in cleanly.
