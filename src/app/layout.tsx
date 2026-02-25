import type { Metadata } from "next";
import { Playfair_Display, Poppins, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-hindi",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ram & Anshika | Wedding Celebration",
  description:
    "Join us in celebrating the beautiful union of Ram Pandey and Anshika Pandey. April 28, 2026 · Prayagraj.",
  openGraph: {
    title: "Ram & Anshika | Wedding Celebration",
    description:
      "Join us in celebrating the beautiful union of Ram Pandey and Anshika Pandey. April 28, 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${devanagari.variable}`}
    >
      <body className="bg-cream font-sans text-burgundy antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
