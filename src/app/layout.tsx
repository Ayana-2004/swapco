import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

// SwapaPost body and UI font, and the fallback for Helvetica Neue headings.
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

// Faircode brand typeface - used only in the Faircode-branded footer credit
// and "Faircode initiative" section, per Faircode_Brand_Guidelines.pdf.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.seoTitle,
    template: `%s - ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalEntity, url: SITE.website }],
  creator: SITE.legalEntity,
  publisher: SITE.legalEntity,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    title: SITE.seoTitle,
    description: SITE.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.seoTitle,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-scroll-behavior tells Next 16 to drop scroll-smooth during route
    // changes, so a new page opens at the top instead of gliding up to it.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${geist.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
