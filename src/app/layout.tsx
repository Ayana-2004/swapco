import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

// Faircode brand typeface — used only in the Faircode-branded footer credit
// and "Faircode initiative" section, per Faircode_Brand_Guidelines.pdf.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Swapco — Your Location, Your Choice",
  description:
    "Swapco matches verified professionals in the same role for mutual posting swaps, so you can work closer to home. Confirmed over real voice & video calls, no texts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${geist.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white font-body text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
