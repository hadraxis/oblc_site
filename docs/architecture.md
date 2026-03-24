# Olivebank LC Architecture

Status: internal reference

This document defines the architecture for the Olivebank LC production website. It is the source of truth for how the site is structured, how it is deployed, and what belongs in scope now versus later.

---

## 1. Source Of Truth

`olivebank-site/` is the only production source of truth.

The following folders are reference only:
- `stuff/`
- `horizons-export.../`

Those folders may inform content, brand direction, or historical context, but they are never deployed and do not define the live site architecture.

---

## 2. Site Goals

The current site is a personal contractor storefront for Olivebank LC.

Primary goals:
- present Charles as the operator being hired
- present Olivebank LC as the legal and commercial entity
- explain what services are offered now
- make contact and inquiry paths obvious
- stay scalable for future offers without building them now

This is not an agency site, a blog platform, or a product suite.

---

## 3. Frontend Stack

The site is built as a static-first application using:
- Vite
- React
- Tailwind CSS

The production build output is the `dist/` folder.

Deployment target:
- Hostinger `public_html`

The app should work as a static site first, with optional lightweight backend hooks later for forms or integrations.

---

## 4. Page Architecture

V1 routes:
- `/` Home
- `/about` About
- `/services` Services
- `/contact` Contact

Recommended future routes:
- `/privacy`
- `/terms`
- `/offers/*`
- `/resources/*`

The V1 site should stay small and focused. Future routes should be added only when they serve the current business.

---

## 5. Homepage Architecture

The homepage is the core sales page for the site.

Recommended section order:
1. Hero
2. What I Do
3. Why Contract Instead Of Hire
4. Service Pillars
5. Automation And Marketing Systems
6. Who I Help
7. How I Work
8. About Charles
9. FAQ
10. Contact CTA

The homepage should answer these questions in order:
- who is this for
- what do you do
- why hire you
- what problems do you solve
- how do we start

---

## 6. Component Architecture

Components should be organized by purpose, not by page duplication.

Recommended structure:
- `components/layout`
- `components/sections`
- `components/cards`
- `components/forms`
- `components/ui`

Suggested responsibilities:
- `layout` contains header, footer, shell, and page wrappers
- `sections` contains homepage and page-specific blocks
- `cards` contains reusable content blocks for services, proof, and offers
- `forms` contains contact and intake components
- `ui` contains basic primitives like buttons, inputs, labels, dividers, badges

Reusable components should stay presentation-focused and not own page content.

---

## 7. Content And Data Separation

Site copy and structured data should be separated from UI components.

Recommended split:
- `content/` for page copy, messaging, FAQs, and metadata
- `data/` for structured lists such as services, links, proof points, and audiences
- `lib/` for helper logic such as SEO and schema generation

This keeps the site easy to update without editing components for every content change.

Use cases:
- changing service descriptions should update `content/services.js`
- adding proof points should update `data/proof.js`
- changing metadata should update `content/siteMeta.js` or a similar config file

---

## 8. Deployment Architecture

Production flow:
1. Work locally inside `olivebank-site/`
2. Run the static build
3. Publish the contents of `dist/`
4. Upload `dist/` to Hostinger `public_html`

Deployment rule:
- only built output ships
- source files remain local
- archive folders never ship

This keeps the production site simple and avoids coupling the live host to the project workspace structure.

---

## 9. Database And Backend Direction

The V1 site does not require a database for page rendering.

If lead capture or inquiry storage is needed later, treat backend storage as an operational add-on, not as part of the public website architecture.

Appropriate uses later:
- contact form persistence
- inquiry tracking
- automation logs
- CRM sync state

Not in scope for the site itself:
- CMS-driven page rendering
- database-driven content management
- app-style user accounts

---

## 10. Scalability Rules

The architecture must allow future offers without forcing them into the current homepage.

Rules:
- build the main site first
- keep offers modular
- add new routes only when they are ready to sell
- do not let future product ideas reshape the current site structure
- keep content, UI, and deployment concerns separated

Future additions can reuse the same design system and folder conventions, but they should remain isolated until they are actually part of the business.

---

## 11. Current Scope Boundaries

Current scope:
- Olivebank LC website
- personal contractor storefront
- sales, operations, automation, and marketing support

Not current scope:
- Culture-in-a-Box
- other future offers
- separate product sites
- dashboard products
- knowledgebase systems
- complex backend platforms

CIAB and other future offers are intentionally excluded from V1. They may be documented elsewhere, but they do not belong in the current production site architecture.

---

## 12. Practical Implementation Notes

Design direction should be derived from the brand, but the architecture should remain neutral enough to support future growth.

Implementation priorities:
- keep the app static-first
- keep routing minimal
- keep content editable through local files
- keep deployment simple for Hostinger
- keep future offers compartmentalized

If a feature does not help the current site sell the current service, it should stay out of V1.

