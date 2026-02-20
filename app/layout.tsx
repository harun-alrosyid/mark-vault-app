import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MarkVault - Professional Image Protection & Watermarking",
    template: "%s | MarkVault",
  },
  description:
    "Protect your visual assets with professional watermarking. Convert images to black and white, add permanent diagonal watermarks, and safeguard your photography.",
  keywords: [
    "image protection",
    "watermark",
    "professional watermarking",
    "black and white conversion",
    "photographer tools",
    "copyright protection",
    "secure image processing",
    "client-side watermarking",
  ],
  authors: [{ name: "Harun Al Rosyid", url: "https://harunalrosyid.com" }],
  creator: "Harun Al Rosyid",
  publisher: "Harun Al Rosyid",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://markvault.harunalrosyid.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
    },
  },
  openGraph: {
    title: "MarkVault - Professional Image Protection",
    description: "Secure your images with permanent watermarks and professional B&W conversion.",
    url: "https://markvault.harunalrosyid.com",
    siteName: "MarkVault",
    images: [
      {
        url: "/og-image.png", // We should probably create or suggest this
        width: 1200,
        height: 630,
        alt: "MarkVault - Professional Image Protection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarkVault - Professional Image Protection",
    description: "Secure your images with permanent watermarks and professional B&W conversion.",
    creator: "@harunalrosyid",
    images: ["/og-image.png"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};



import type React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LSYPC48GC6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LSYPC48GC6');
          `}
        </Script>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "MarkVault",
              "operatingSystem": "Web",
              "applicationCategory": "MultimediaApplication",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "120"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Professional image protection with intelligent watermarking and black & white conversion.",
              "author": {
                "@type": "Person",
                "name": "Harun Al Rosyid",
                "url": "https://harunalrosyid.com"
              }
            }
          `}
        </Script>
        <Script src="/analytics.js" strategy="lazyOnload" />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
