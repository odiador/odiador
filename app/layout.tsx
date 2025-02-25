import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Manuel Amador Roa",
  description: "Portfolio web personal de Juan Manuel Amador Roa",
  keywords: ["Juan Manuel Amador", "Amador", "Odiador", "cafesports.odiador.dev", "odiador.dev", "Ingeniero", "Juan Amador", "Juan Manuel Amador Roa"],
  openGraph: {
    title: "Juan Manuel Amador Roa",
    description: "Portfolio web personal de Juan Manuel Amador Roa",
    url: "https://odiador.dev",
    siteName: "odiador.dev",
    images: [
      {
        url: "https://odiador.dev/favicon.svg",
        width: 325,
        height: 325,
        alt: "odiador.dev - Portfolio",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
