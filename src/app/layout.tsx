import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
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
  title: "SwapaPost - Your Location, Your Choice",
  description:
    "SwapaPost matches verified professionals in the same role for mutual posting swaps, so you can work closer to home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
