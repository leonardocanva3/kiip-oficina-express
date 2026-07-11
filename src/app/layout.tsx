import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  applicationName: siteConfig.shortName,
  title: "KIIP Soluções Automotivas | Oficina Mecânica e Estética em Pelotas",
  description:
    "Oficina mecânica no Fragata, em Pelotas/RS, com diagnóstico automotivo, freios, suspensão, troca de óleo, lavagem, higienização, polimento e revitalização de faróis.",
  keywords: [
    "oficina mecanica em Pelotas",
    "mecanica no Fragata",
    "estetica automotiva em Pelotas",
    "lavagem automotiva em Pelotas",
    "diagnostico automotivo",
    "diagnostico automotivo em Pelotas",
    "freios em Pelotas",
    "suspensao em Pelotas",
    "revitalizacao de farois",
    "revitalizacao de farois em Pelotas",
    "higienizacao automotiva",
    "higienizacao automotiva em Pelotas",
    "polimento automotivo em Pelotas",
    "troca de oleo em Pelotas",
    "servicos automotivos em Pelotas",
  ],
  creator: "Leonardo Machado",
  publisher: siteConfig.name,
  category: "automotive",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: siteConfig.shortName,
    title: "KIIP Soluções Automotivas | Oficina Mecânica e Estética em Pelotas",
    description:
      "Mecânica, diagnóstico, freios, suspensão, troca de óleo, lavagem, higienização e estética automotiva no bairro Fragata, em Pelotas/RS.",
    images: [
      {
        url: "/images/hero-kiip.jpg",
        width: 1200,
        height: 630,
        alt: "KIIP Solucoes Automotivas em Pelotas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KIIP Soluções Automotivas | Oficina Mecânica e Estética em Pelotas",
    description:
      "Oficina mecânica, diagnóstico e estética automotiva no bairro Fragata, em Pelotas/RS.",
    images: ["/images/hero-kiip.jpg"],
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        <a
          href="#conteudo"
          className="sr-only fixed left-4 top-4 z-[100] rounded-full bg-kiip-yellow px-5 py-3 text-sm font-black text-black focus:not-sr-only focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Pular para o conteúdo
        </a>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
