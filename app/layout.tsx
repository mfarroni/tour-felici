import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tour Felici srl — Custodi della Montagna dal 1984 | Dolomiti",
  description:
    "Agenzia di pubblica utilità e servizi per l'ambiente nelle Dolomiti UNESCO. Guide Alpine IFMGA, tutela della biodiversità, educazione ecologica e comunità locali.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} ${geistMono.variable} font-sans bg-dolomia-light text-ardesia antialiased min-h-screen selection:bg-ocra selection:text-abete-dark`}
      >
        {children}
      </body>
    </html>
  );
}

