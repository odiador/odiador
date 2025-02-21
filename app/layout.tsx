import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Manuel Amador Roa",
  description: "Portfolio web",
  metadataBase: new URL("https://odiador.dev"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body className={inter.className} >
        {children}
      </body>
    </html>
  );
}
