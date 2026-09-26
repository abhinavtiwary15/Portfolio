import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TrackVisit from "@/components/TrackVisit";
import { Analytics } from "@vercel/analytics/next";
import NewsletterPopup from "@/components/NewsletterPopup";
import profile from "@/config/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap"
});

const BASE = profile.siteUrl;

export const viewport = {
  themeColor: "#ff6b1a",
};

export const metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: profile.seo.title,
    template: profile.seo.titleTemplate,
  },
  description: profile.seo.description,
  keywords: profile.seo.keywords,
  authors: [{ name: profile.name, url: BASE }],
  creator: profile.name,
  publisher: profile.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: profile.seo.title,
    title: profile.seo.title,
    description: profile.seo.description,
    images: [{
      url: profile.ogImage,
      width: 1200,
      height: 630,
      alt: profile.seo.title,
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
    images: [profile.ogImage],
    creator: profile.socialLinks.twitterHandle,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",

  alternates: { canonical: BASE },

  category: "portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      "name": profile.name,
      "url": BASE,
      "jobTitle": profile.role,
      "description": profile.shortBio,
      "knowsAbout": profile.seo.keywords,
      "hasOccupation": [
        {
          "@type": "Occupation",
          "name": profile.role,
          "occupationLocation": { "@type": "Country", "name": profile.location.country },
          "skills": profile.seo.keywords.join(", ")
        }
      ],
      "makesOffer": profile.services.map((svc) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": svc.name,
          "description": svc.description,
        }
      })),
      "sameAs": Object.values(profile.socialLinks).filter(url => typeof url === "string" && url.startsWith("http")),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE}/#localbusiness`,
      "name": `${profile.name} — ${profile.role}`,
      "image": `${BASE}${profile.ogImage}`,
      "url": BASE,
      "telephone": `+${profile.contact.whatsappNumber}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": profile.location.city,
        "addressCountry": profile.location.country
      },
      "priceRange": "$$",
      "description": profile.shortBio,
      "founder": { "@id": `${BASE}/#person` }
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      "url": BASE,
      "name": `${profile.name} — ${profile.role}`,
      "description": profile.seo.description,
      "publisher": { "@id": `${BASE}/#person` },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE}/#profilepage`,
      "url": BASE,
      "name": `${profile.name} — Portfolio`,
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "mainEntity": { "@id": `${BASE}/#person` },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
          { "@type": "ListItem", "position": 2, "name": "Projects", "item": `${BASE}/projects` },
          { "@type": "ListItem", "position": 3, "name": "Work", "item": `${BASE}/work` },
          { "@type": "ListItem", "position": 4, "name": "About", "item": `${BASE}/about` },
          { "@type": "ListItem", "position": 5, "name": "Contact", "item": `${BASE}/contact` },
        ],
      },
    },
    {
      "@type": "ItemList",
      "name": "Portfolio Services",
      "itemListElement": profile.services.map((svc, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": svc.name,
        "description": svc.description,
      })),
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `What services does ${profile.name} offer?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": profile.services.map(s => s.name).join(", ")
          }
        },
        {
          "@type": "Question",
          "name": `How can I contact ${profile.name}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `You can reach out through the contact form at ${BASE}/contact or email ${profile.contact.email}.`
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": `How to Get in Touch with ${profile.name}`,
      "description": `Steps to reach out to ${profile.name}`,
      "totalTime": "PT5M",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Visit the contact page",
          "text": `Go to ${BASE}/contact to find the contact form and inquiry options.`,
          "url": `${BASE}/contact`
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Describe your project",
          "text": "Fill out the contact form with your project details and timeline.",
          "url": `${BASE}/contact`
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${BASE}/#webpage`,
      "url": BASE,
      "name": profile.seo.title,
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "description": profile.seo.description,
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".hero-tagline", ".about-summary", "article p"]
      }
    }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* ── Resource hints ── */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ip-api.com" />

        {/* ── Structured Data for Google + AI bots ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── LLMs.txt discovery (AI chatbot standard) ── */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />

        {/* ── Custom Search/Keywords XML index for AEO ── */}
        <link rel="search" type="application/xml" href="/searchwords.xml" title="Search Keywords" />

        {/* ── Google Search Console verification ── */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}

        {/* ── Bing Webmaster Tools verification ── */}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body>
        <TrackVisit />
        <div className="bottom-blur" aria-hidden="true" />
        {children}
        <Analytics />
        <NewsletterPopup />
      </body>
    </html>
  );
}
