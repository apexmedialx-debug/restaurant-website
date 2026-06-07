import type { Metadata } from "next";
import { Gilda_Display, Josefin_Sans } from "next/font/google";
import "./globals.css";

const gildaDisplay = Gilda_Display({
  variable: "--font-gilda",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALMA — Portuguese Restaurant",
  description:
    "A Lisbon-born kitchen rooted in tradition and driven by season. Bacalhau, cataplana, and natural wine in the heart of Alfama.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${gildaDisplay.variable} ${josefinSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
