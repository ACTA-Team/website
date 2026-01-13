import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import "./globals.css";
import { PostHogProvider } from "@/providers/PostHogProvider";
import { ACTA_OFFICIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://acta.build"),
  title: "ACTA | Verifiable Credentials on Stellar",
  description:
    "ACTA is the new infrastructure for digital trust. Issue, verify, and manage verifiable credentials on the Stellar blockchain using Soroban smart contracts. Decentralized, secure, and tamper-proof digital credentials.",
  keywords: [
    "verifiable credentials",
    "stellar",
    "soroban",
    "blockchain credentials",
    "digital credentials",
    "decentralized identity",
    "DID",
    "on-chain verification",
    "blockchain verification",
    "digital trust",
    "ACTA",
  ],
  authors: [{ name: "ACTA Team" }],
  creator: "ACTA Team",
  publisher: "ACTA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://acta.build",
    siteName: "ACTA",
    title: "ACTA | Verifiable Credentials on Stellar",
    description:
      "The new infrastructure for digital trust. Issue, verify, and manage verifiable credentials on the Stellar blockchain.",
    images: [
      {
        url: "/Acta-logo.png",
        width: 1200,
        height: 630,
        alt: "ACTA - Verifiable Credentials on Stellar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACTA | Verifiable Credentials on Stellar",
    description:
      "The new infrastructure for digital trust. Issue, verify, and manage verifiable credentials on the Stellar blockchain.",
    images: ["/Acta-logo.png"],
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
  verification: {
    // Add Google Search Console verification if available
    // google: "your-verification-code",
  },
};

// Schema.org JSON-LD for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ACTA",
  applicationCategory: "Blockchain Application",
  operatingSystem: "Web",
  url: "https://acta.build",
  logo: "https://acta.build/Acta-logo.png",
  description:
    "ACTA is the new infrastructure for digital trust. Issue, verify, and manage verifiable credentials on the Stellar blockchain using Soroban smart contracts.",
  sameAs: [
    ACTA_OFFICIAL_LINKS.github,
    ACTA_OFFICIAL_LINKS.twitter,
    ACTA_OFFICIAL_LINKS.linkedin,
    ACTA_OFFICIAL_LINKS.instagram,
    ACTA_OFFICIAL_LINKS.docs,
    ACTA_OFFICIAL_LINKS.dapp,
  ],
  offers: {
    "@type": "Offer",
    price: "1",
    priceCurrency: "USDC",
    description: "$1 USDC per credential",
  },
  featureList: [
    "Verifiable Credentials",
    "On-chain verification",
    "Stellar blockchain",
    "Soroban smart contracts",
    "Decentralized identity",
    "Tamper-proof credentials",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
