# 🔍 Portfolio Template Comprehensive Audit: Sarang ➔ Abhinav Tiwary

**Target Repository:** `C:\Users\abhin\Desktop\my_projects\Nextjs-cinematic-portfolio-main`  
**Audit Type:** Read-Only Static Codebase & Content Analysis  
**Date:** September 2026  

---

## 1. Executive Summary

- **Total Files Containing Personal Data / Template Attribution:** **36 code/config/markdown files** + **9 asset files** = **45 total files**.
- **Template Architecture:** **Heavily Scattered & Hardcoded**. While the original author separated parts of the bio into `src/app/about/content.js` and project categories into `src/app/work/content.js`, the majority of personal data, hero presentation, SEO metadata, Schema.org JSON-LD, navbar branding, admin branding, and email templates are hardcoded directly into JSX components and Next.js route handlers.
- **Missing Asset References:** The template code references `/resume.pdf` and `/og-image.png`, neither of which currently exist in `public/`.
- **Database Dependency:** Dynamic projects, inquiries, visitor analytics, reviews, and social links are wired to Supabase (PostgreSQL). If Supabase credentials are missing or the database is unseeded, fallbacks are used or features are bypassed.

---

## 2. File-by-File Inventory of Original Owner Data

Below is the complete file-by-file enumeration of every occurrence of the original owner's identity, personal copy, domain references, handles, and branding.

### A. Root & Documentation Files

| File Path | Line(s) | Content / Details |
| :--- | :--- | :--- |
| [`package.json`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/package.json) | L2 | `"name": "sarang"` |
| [`README.md`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/README.md) | L3, L9, L13, L17, L25, L27, L33-39, L45, L64, L68, L74, L116, L124-126, L132, L164, L171, L179, L183, L185, L191, L195, L210-213 | Template name ("Sarang"), author handles (`@5araang`, `@Saarangggg`), live URLs (`https://sarang-space.site`), Instagram links, repo clone URLs, star history widget. |
| [`CONTRIBUTING.md`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/CONTRIBUTING.md) | L1, L3, L18, L64 | Mentions "Sarang", repo URL (`https://github.com/5araang/nextjs-cinematic-portfolio.git`), and issue tracker link. |
| [`INSTALL.md`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/INSTALL.md) | L1, L3, L18, L22, L45 | Mentions "Sarang", repo clone URL (`https://github.com/Saarangggg/nextjs-cinematic-portfolio.git`). |
| [`CHANGELOG.md`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/CHANGELOG.md) | L3 | Mentions "Sarang — Open Source Cinematic Developer Portfolio". |
| [`LICENSE`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/LICENSE) | L3 | `Copyright (c) 2025 Sarang` |

---

### B. Public Directory Files (Static Metadata & Crawler Directives)

| File Path | Line(s) | Content / Details |
| :--- | :--- | :--- |
| [`public/BingSiteAuth.xml`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/public/BingSiteAuth.xml) | L3 | Hardcoded Bing Webmaster Console verification ID: `<user>8892D53953FBC8BB5D10827F7DF35CCF</user>`. Must be deleted or replaced. |
| [`public/searchwords.xml`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/public/searchwords.xml) | L4, L144-152 | XML `<title>Sarang — Search Keywords and AEO Metadata</title>`, local Kerala/Calicut geo tags ("Website Developer in Kerala", "Web Designer in Calicut", "Shopify Developer Kerala", "Freelance Web Developer Kerala", "Video Editor Kerala", "UI/UX Designer Kerala"). |
| [`public/llms.txt`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/public/llms.txt) | L1, L3, L7, L9, L13, L17, L20, L46-53, L64, L67, L69-73, L77-102, L105-112 | Complete machine-readable AI agent profile containing Sarang's identity, age (19), education (Cybersecurity student), location (India), services, completed project counts (6+ sites, 75+ videos, 500+ photos), email (`sarangwalle@gmail.com`), site links (`https://sarang-space.site`), and GitHub URLs. |
| [`public/llms-full.txt`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/public/llms-full.txt) | L1, L3, L7-15, L18, L81, L85-88, L90-93, L95-100, L104, L107, L110-112, L117-122 | Extended AI summary containing full personal background, 19yo Cybersecurity student details, freelance history from 2020, email, site URL, and GitHub. |

---

### C. App Router Configuration & Root Files (`src/app/`)

| File Path | Line(s) | Content / Details |
| :--- | :--- | :--- |
| [`src/app/layout.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/layout.js) | L15, L25-27, L36-38, L44-46, L51, L57-61, L77-80, L90-347, L370-377 | **Central Layout & Metadata:**<br>• `const BASE = "https://sarang-space.site"`<br>• Metadata titles, descriptions, and keywords naming Sarang.<br>• Twitter handle `@sarang`.<br>• Huge Schema.org JSON-LD graph (`Person`, `ProfessionalService`, `WebSite`, `ProfilePage`, `FAQPage`, `HowTo`) hardcoding Sarang's name, email `sarangwalle@gmail.com`, fake phone number `+91-0000000000`, 19-year-old student bio, and services.<br>• Search verification meta tags. |
| [`src/app/manifest.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/manifest.js) | L3-4, L12-13 | Web App Manifest: `name: "Sarang — Creative Developer"`, `short_name: "Sarang"`, icons pointing to `/photo/favicon.png`. |
| [`src/app/robots.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/robots.js) | L32 | `sitemap: "https://sarang-space.site/sitemap.xml"` |
| [`src/app/sitemap.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/sitemap.js) | L3 | `const BASE = "https://sarang-space.site"` |

---

### D. App Pages & Content Files (`src/app/`)

| File Path | Line(s) | Content / Details |
| :--- | :--- | :--- |
| [`src/app/about/content.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/about/content.js) | L32-42, L44, L90-92 | Personal biography: mentions "Kerala", "Vedavyasa Arts and Science College", "BSc in Cybersecurity", freelance project statistics, career timeline (2020, 2022, 2024), and `RESUME_URL = "/resume.pdf"`. |
| [`src/app/about/page.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/about/page.js) | L5-12 | Page metadata: title, description, keywords, canonical URL `https://sarang-space.site/about`, OpenGraph metadata mentioning Sarang, 19yo, India. |
| [`src/app/about/page.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/about/page.jsx) | L5-12 | **Exact duplicate** of `src/app/about/page.js` with identical Sarang metadata. (One of these files should be deleted during refactoring to prevent Next.js build collisions). |
| [`src/app/contact/content.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/contact/content.js) | — | Contains `SECTION = { label: "Get In Touch" }`, list of country codes, and tech/creative tool icons. Clean of personal names, but lacks social links or email configuration. |
| [`src/app/contact/page.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/contact/page.js) | L5-12 | Page metadata: title, description, canonical `https://sarang-space.site/contact`, OpenGraph mentioning Sarang. |
| [`src/app/projects/page.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/projects/page.js) | L7-14 | Page metadata: title, description, canonical `https://sarang-space.site/projects`, OpenGraph mentioning "Case Studies & Client Work by Sarang". |
| [`src/app/coming-soon/page.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/coming-soon/page.jsx) | L81 | Branding label: `<p ...>Sarang</p>`. |
| [`src/app/admin/login/page.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/admin/login/page.jsx) | L34 | Admin Login heading: `<span ...>Sarang</span>`. |

---

### E. Backend API Routes (`src/app/api/`)

| File Path | Line(s) | Content / Details |
| :--- | :--- | :--- |
| [`src/app/api/admin/send-email/route.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/api/admin/send-email/route.js) | L52, L58-60, L67, L81 | Outgoing Resend email configuration:<br>• `from: 'Sarang <support@sarang-space.site>'`<br>• Headshot image: `https://sarang-space.site/photo/about%20me.png`<br>• HTML heading `<h2>Sarang</h2>` & `Creative Developer`<br>• Footer link `sarang-space.site`<br>• Inquiries DB record `name: 'Sent by Sarang'`. |
| [`src/app/api/contact/route.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/api/contact/route.js) | L51 | Resend contact sender address: `from: 'Portfolio Contact <support@sarang-space.site>'`. |
| [`src/app/api/llms/route.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/api/llms/route.js) | L12-15, L19, L71-78 | Machine-readable API returning JSON for LLMs: hardcoded `name: "Sarang"`, `email: "sarangwalle@gmail.com"`, `website: "https://sarang-space.site"`, bio, project statistics, and all page URLs. |

---

### F. Components (`src/components/`)

| File Path | Line(s) | Content / Details |
| :--- | :--- | :--- |
| [`src/components/Hero.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/components/Hero.jsx) | L50-52, L59, L68-91 | **100% Hardcoded Hero Section:**<br>• Tagline: "Digital Experience Designer"<br>• Giant Hero Text: `{"Sarang.".split("")}`<br>• Three hardcoded bio paragraphs: "I create *immersive* digital experiences...", "I mainly work with React, Shopify, Flutter...", "So far, I've completed *6* *websites*, edited *75+* *videos*, and created *500+* *photo* *edits*... Currently, I'm focusing on a *job* *app* and a *billing* *app*..." |
| [`src/components/About.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/components/About.jsx) | L65, L106 | • Line 65: Background photo alt text `alt="Sarang"`.<br>• Line 106: Resume download link `href={RESUME_URL}` (pointing to `/resume.pdf`). |
| [`src/components/Contact.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/components/Contact.jsx) | L39, L41 | • Line 39: Default fallback WhatsApp number `919999999999`.<br>• Line 41: WhatsApp message template `Hi Sarang! My name is ${form.name}...`. |
| [`src/components/ContactPopup.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/components/ContactPopup.jsx) | L48 | Fallback WhatsApp number: `process.env.NEXT_PUBLIC_WHATSAPP_NUMBER \|\| "919999999999"`. |
| [`src/components/Footer.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/components/Footer.jsx) | L72, L78-79, L124, L127 | **Hardcoded Footer:**<br>• Tagline: "Creative Developer"<br>• Name: `<span className="block text-white">Sarang</span>`<br>• Email: `sarangwalle@gmail.com`<br>• Copyright: `© {new Date().getFullYear()} Sarang Walle. All rights reserved.` |
| [`src/components/Navbar.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/components/Navbar.jsx) | L94-96, L174 | • Logo image: `/photo/logo navbar inverse.png`<br>• Logo alt text: `alt="Sarang — Portfolio Designer & Creative Developer"`<br>• Mobile drawer footer branding: `Sarang · Portfolio`. |
| [`src/components/ProfileCard.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/components/ProfileCard.jsx) | L19, L31-33, L297 | Component default props: `name = 'Sarang'`, `handle = 'sarang'`, `avatarUrl = '/photo/about me.webp'`, and line 297 comment `Use Sarang's brand orange color as backing glow!`. |
| [`src/components/SeoContent.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/components/SeoContent.jsx) | L17, L26, L29, L34, L43, L52, L76-80, L94, L96, L124, L129, L131-132 | **Hidden Crawler SEO Text (139 lines):**<br>• Name "Sarang" used across `h1`, `h2`, `article` tags.<br>• Geo keywords: "Kerala", "Calicut".<br>• Stats: 6+ websites, 75+ videos, 500+ photos, freelancing since 2020.<br>• Contact info: `https://sarang-space.site` and `sarangwalle[at]gmail.com`. |
| [`src/components/admin/AdminNav.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/components/admin/AdminNav.jsx) | L86-88 | Admin sidebar logo: `S<span className="sidebar-label">arang</span>`. |

---

### G. Views (`src/views/`)

| File Path | Line(s) | Content / Details |
| :--- | :--- | :--- |
| [`src/views/about.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/views/about.jsx) | L46-47, L71-76, L91, L143-148, L173 | • Line 47: Image `alt="Sarang"`.<br>• Lines 72-76 & 144-148: Hardcoded `ProfileCard` props: `name="Sarang"`, `handle="sarang"`, `avatarUrl="/photo/Sarang.png"`, `miniAvatarUrl="/photo/Sarang.png"`.<br>• Lines 91, 173: `RESUME_URL` (`/resume.pdf`). |
| [`src/views/contact.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/views/contact.jsx) | L37, L39 | • Line 37: Fallback WhatsApp number `919999999999`.<br>• Line 39: WhatsApp message template `Hi Sarang! My name is ${form.name}...`. |
| [`src/views/open-source.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/views/open-source.jsx) | L25-26, L125, L137 | Hardcoded GitHub repository info: `GITHUB_USER = "Saarangggg"`, `GITHUB_REPO = "Saarangggg/nextjs-cinematic-portfolio"`, repository link, and ZIP download URL. *(Note: This view is currently unrouted, i.e., no `/open-source` page route exists in `src/app`).* |

---

### H. Binary Asset Files Containing Original Identity / Branding

| File Path | Description & Usage |
| :--- | :--- |
| [`public/photo/Sarang.png`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/public/photo/Sarang.png) | **Headshot / Avatar:** The original owner's face, used in `ProfileCard` across `/about`. |
| [`public/photo/about me.webp`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/public/photo/about%20me.webp) | **Portrait Background:** Photo of the original owner used as background in `About.jsx` and `src/views/about.jsx`. |
| [`public/photo/logo navbar.png`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/public/photo/logo%20navbar.png) | **Logo Asset:** Custom graphical signature/logo for Sarang. |
| [`public/photo/logo navbar inverse.png`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/public/photo/logo%20navbar%20inverse.png) | **Logo Asset (Inverse):** High-contrast navbar logo for Sarang used in `Navbar.jsx`. |
| [`public/photo/favicon.png`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/public/photo/favicon.png) | Favicon image (75 KB) featuring Sarang's brand icon. |
| [`src/app/favicon.png`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/favicon.png) | Duplicate of `public/photo/favicon.png`. |
| [`src/app/icon.png`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/icon.png) | Duplicate of `public/photo/favicon.png`. |
| [`src/app/apple-icon.png`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/apple-icon.png) | Duplicate of `public/photo/favicon.png`. |
| [`public/favicon.ico`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/public/favicon.ico) | Default favicon icon file. |

---

## 3. Centralized vs. Scattered Architecture Analysis

### Current Status: **Scattered-Hardcoded Template**

Although the template contains two files named `content.js`:
- `src/app/about/content.js` (about text, skills icons, experience)
- `src/app/work/content.js` (fallback project placeholders)

The reality is that content management is fragmented across multiple layers:
1. **Hero Section (`Hero.jsx`):** Completely hardcoded JSX. Not connected to any config file.
2. **Footer (`Footer.jsx`):** Name, email, and copyright are hardcoded in JSX. Social links are dynamically fetched from the database (`/api/settings?key=social_links`).
3. **Navbar (`Navbar.jsx`):** Image logo and alt text are hardcoded in JSX.
4. **About Page (`src/views/about.jsx`):** Imports bio lines from `content.js`, but hardcodes `name="Sarang"`, `avatarUrl="/photo/Sarang.png"`, and `handle="sarang"` in its JSX `ProfileCard` tags.
5. **SEO & AEO (`layout.js`, `SeoContent.jsx`, `manifest.js`, `robots.js`, `sitemap.js`, `searchwords.xml`):** Hardcoded across 6 separate files with repetitive bio paragraphs and keywords.
6. **API Endpoints (`/api/llms`, `/api/admin/send-email`, `/api/contact`):** Hardcoded JSON feeds and email footers.

> [!TIP]
> **Recommended Refactoring Strategy:**  
> During implementation, unify all personal data into a single master config file (e.g. `src/config/site.js` or `src/config/profile.js`) exporting name, taglines, bio paragraphs, social URLs, contact email, WhatsApp number, and SEO metadata. All components, layouts, and API routes can then consume this single source of truth.

---

## 4. Assets & Copy: Items Needing Abhinav's Assets vs. Pure Text Swaps

### 📸 Assets Needed from Abhinav Tiwary Before Replacement:
1. **Headshot / Avatar Image:**
   - Replaces `public/photo/Sarang.png` (used in `ProfileCard.jsx`).
   - Replaces or provides backdrop for `public/photo/about me.webp` (About section background).
2. **Resume PDF File:**
   - Must be placed at `public/resume.pdf` (the file is currently missing in the repository).
3. **Brand / Navbar Logo:**
   - Replaces `public/photo/logo navbar.png` and `public/photo/logo navbar inverse.png`.
   - *Alternative:* Can be converted to clean SVG/text typography (e.g., "Abhinav Tiwary" or "AT").
4. **Site Favicons & App Icons:**
   - Replaces `public/photo/favicon.png`, `public/favicon.ico`, `src/app/favicon.png`, `src/app/icon.png`, `src/app/apple-icon.png`.
5. **OpenGraph Banner Image:**
   - Must be created and placed at `public/og-image.png` (1200 × 630 px) for social sharing previews (Twitter/LinkedIn cards).
6. **Project Media / Screenshots:**
   - Images/videos for Abhinav's showcase projects to upload to Supabase storage or store in `public/projects/`.
7. **Cinematic Scrubbing Video Decision:**
   - `public/videos/optimized.mp4` and `optimized-rev.mp4` are 3D camera-lens animation loops. They do not contain personal faces. Abhinav can choose to keep this cinematic 3D lens visual as-is, or provide a custom video.

### ✍️ Pure Text Swaps (Can be populated immediately from Abhinav's Profile/Knowledge Base):
- **Full Name:** Sarang ➔ Abhinav Tiwary
- **Tagline & Titles:** Creative Developer & Digital Designer ➔ AI Engineer / Full-Stack Developer
- **Location:** Kerala, India ➔ Abhinav's current city/location
- **Education & Background:** Vedavyasa Arts and Science College (BSc Cybersecurity) ➔ Abhinav's educational background
- **Email:** `sarangwalle@gmail.com` ➔ Abhinav's personal email
- **Social Handles:**
  - GitHub: `Saarangggg` / `5araang` ➔ Abhinav's GitHub profile
  - LinkedIn, X/Twitter, Instagram, Portfolio domain
- **WhatsApp Contact Number:** `919999999999` ➔ Abhinav's phone number
- **Hero & SEO Copy:** Replace references to 75+ video edits and Shopify stores with Abhinav's actual engineering metrics, technical stack, and software projects.

---

## 5. Licensing & Attribution Analysis

- **License Type:** **MIT License** (documented in `LICENSE` and `README.md`).
- **Copyright Statement:** `Copyright (c) 2025 Sarang`.
- **Author's Stated Terms:**
  - In `README.md` FAQ #1 & #2, the author explicitly grants:
    - *"Can I use Sarang for commercial projects? Yes! Sarang is 100% free and open-source under the MIT License. You can modify, brand, host, and deploy it commercially without restriction."*
    - *"Can I remove credits or alter footer links? Yes! You have complete freedom to remove, modify, or add any credits, footer links, and branding elements."*
- **Legal Compliance Requirement:**
  - Standard MIT License requires retaining the `LICENSE` file in the source repository with the copyright notice intact.
  - Front-end visible credits and footer branding can be completely replaced with Abhinav's personal branding without violating the license.

---

## 6. Analytics, Search Verification & Deployment Accounts Requiring Replacement

The following external services, accounts, and IDs are tied to the original owner and must be replaced:

| Service / Tool | Location | Current Value / Setting | Action Required |
| :--- | :--- | :--- | :--- |
| **Bing Webmaster Tools** | `public/BingSiteAuth.xml` | `8892D53953FBC8BB5D10827F7DF35CCF` | Delete file or replace with Abhinav's Bing user hash. |
| **Bing Webmaster Verification** | `src/app/layout.js` (L376) | `NEXT_PUBLIC_BING_VERIFICATION` | Update in `.env.local` to Abhinav's ID. |
| **Google Search Console** | `src/app/layout.js` (L371) | `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Update in `.env.local` to Abhinav's verification tag. |
| **Vercel Analytics** | `src/app/layout.js` (L4, L383) | `@vercel/analytics` | Tied automatically to whoever deploys to Vercel. Ensure Abhinav's Vercel project has Web Analytics enabled. |
| **Resend (Email API)** | `src/app/api/admin/send-email/route.js`, `src/app/api/contact/route.js` | `support@sarang-space.site` | Replace sender domain with Abhinav's verified custom domain (e.g. `hello@abhinavtiwary.com`) or Resend testing email. Add `RESEND_API_KEY` to `.env.local`. |
| **Supabase Project** | `src/lib/supabase.js`, `src/middleware.js` | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` | Connect to Abhinav's own Supabase project. Initialize tables using `supabase/migrations/run-sql-supabase.sql`. |
| **Site Base Domain** | `src/app/layout.js`, `sitemap.js`, `robots.js`, `llms.txt` | `https://sarang-space.site` | Replace with Abhinav's production domain URL. |
| **Admin Panel Credentials** | `src/middleware.js`, `src/app/api/admin/login` | `ADMIN_PASSWORD`, `JWT_SECRET` | Generate random JWT secret using `node generate-secret.js` and set secure admin password in `.env.local`. |
| **WhatsApp Inquiries** | `src/components/Contact.jsx`, `src/views/contact.jsx` | `NEXT_PUBLIC_WHATSAPP_NUMBER` | Set in `.env.local` without leading `+` (e.g., `919876543210`). |
| **Coming Soon Passcode** | `src/middleware.js` | `COMING_SOON_PASSWORD` | Set development bypass password in `.env.local`. |

---

## 7. Additional Architectural Anomalies Found

1. **Duplicate Page File:**
   - Both [`src/app/about/page.js`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/about/page.js) and [`src/app/about/page.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/app/about/page.jsx) exist with identical contents. Next.js can throw build errors or routing ambiguity when two page extensions match the same segment. One should be removed.
2. **Missing `/work` Route:**
   - `sitemap.js` and `llms.txt` reference `https://sarang-space.site/work`, but `src/app/work/` only contains `content.js` and no `page.js`. Navigating to `/work` directly results in a 404.
3. **Orphaned View:**
   - [`src/views/open-source.jsx`](file:///C:/Users/abhin/Desktop/my_projects/Nextjs-cinematic-portfolio-main/src/views/open-source.jsx) is fully implemented with GitHub API counters and download buttons, but has no corresponding page route under `src/app/open-source/`.
4. **Legacy Mongoose Code:**
   - `src/lib/mongodb.js` and `src/lib/models/` contain unused Mongoose schemas that throw an error if `MONGODB_URI` is evaluated (`connectDB` is fortunately not imported in active routes).
