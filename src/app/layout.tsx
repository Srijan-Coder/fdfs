import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import FloatingMobileDock from "@/components/FloatingMobileDock";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  metadataBase: new URL(`https://${siteConfig.domain}`),
  alternates: {
    canonical: `https://${siteConfig.domain}`,
  },
  keywords: [
    "Dance Classes in Ghansoli",
    "Best Dance Academy Ghansoli Navi Mumbai",
    "Zumba Classes Ghansoli Sector 16",
    "Zumba Classes Ghansoli Sector 5",
    "Hip Hop Dance Classes Navi Mumbai",
    "Bollywood Dance Classes Ghansoli",
    "Kids Dance Academy Ghansoli",
    "Ladies Zumba Fitness Ghansoli",
    "Wedding Choreography Navi Mumbai",
    "Sangeet Dance Choreographer Ghansoli",
    "Avinash Mishra Dance",
    "Ankit Gupta Dance",
    "Flawless Dance & Fitness Studio",
    "FDFS Ghansoli",
    "Dance Studio Kopar Khairane",
    "Dance Studio Airoli",
    "Fitness Studio Mahape",
  ],
  authors: [
    { name: "Avinash Mishra" },
    { name: "Flawless Dance & Fitness Studio" },
  ],
  creator: "Flawless Dance & Fitness Studio",
  publisher: "Flawless Dance & Fitness Studio",
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
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.brandName,
    images: [
      {
        url: "/media/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Flawless Dance & Fitness Studio Ghansoli",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/media/hero.jpg"],
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Ghansoli, Navi Mumbai, Maharashtra, India",
    "geo.position": "19.1246;73.0039",
    "ICBM": "19.1246, 73.0039",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Multi-entity JSON-LD structured data for Google, Bing & AI GEO Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DanceSchool",
        "@id": `https://${siteConfig.domain}/#organization`,
        "name": siteConfig.brandName,
        "alternateName": "FDFS Ghansoli",
        "url": `https://${siteConfig.domain}`,
        "logo": `https://${siteConfig.domain}/logos/logo_monogram_liquid.svg`,
        "image": `https://${siteConfig.domain}/media/hero.jpg`,
        "description": siteConfig.seo.description,
        "telephone": "+918850120018",
        "email": siteConfig.email,
        "priceRange": "$$",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Net Banking",
        "openingHours": "Mo-Su 07:00-22:30",
        "sameAs": [
          siteConfig.instagramUrl,
          siteConfig.directorInstagramUrl,
          siteConfig.youtubeUrl
        ],
        "founder": {
          "@type": "Person",
          "name": "Avinash Mishra",
          "jobTitle": "Founder & Director",
          "sameAs": siteConfig.directorInstagramUrl
        },
        "areaServed": [
          "Ghansoli",
          "Navi Mumbai",
          "Kopar Khairane",
          "Airoli",
          "Mahape",
          "Vashi",
          "Rabale",
          "Maharashtra"
        ],
        "department": [
          {
            "@type": ["DanceSchool", "SportsActivityLocation"],
            "@id": `https://${siteConfig.domain}/#sector16`,
            "name": "Flawless Dance & Fitness Studio — Sector 16 Flagship",
            "telephone": "+918850120018",
            "openingHours": "Mo-Su 07:00-22:30",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "First Floor, Krishna Vihar, opp. Bus Stop, Sector 16, Talvali, Ghansoli Gaon",
              "addressLocality": "Ghansoli, Navi Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400701",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.1246,
              "longitude": 73.0039
            }
          },
          {
            "@type": ["DanceSchool", "SportsActivityLocation"],
            "@id": `https://${siteConfig.domain}/#sector5`,
            "name": "Flawless Dance & Fitness Studio — Sector 5 Station Branch",
            "telephone": "+919892226202",
            "openingHours": "Mo-Su 07:00-22:30",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot no. 64, Tilak School Rd, opp. Tilak International School, Sector 5",
              "addressLocality": "Ghansoli, Navi Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400701",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.1215,
              "longitude": 73.0012
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `https://${siteConfig.domain}/#website`,
        "url": `https://${siteConfig.domain}`,
        "name": siteConfig.brandName,
        "publisher": {
          "@id": `https://${siteConfig.domain}/#organization`
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark bg-[#0A0A0A]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#F2F0EB] antialiased selection:bg-accent selection:text-[#0A0A0A]">
        <SmoothScroll>
          <CustomCursor />
          <Header />
          {children}
          <Footer />
          <FloatingMobileDock />
        </SmoothScroll>
      </body>
    </html>
  );
}
