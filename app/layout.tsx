import type { Metadata } from "next";
import { Cormorant, Raleway } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
