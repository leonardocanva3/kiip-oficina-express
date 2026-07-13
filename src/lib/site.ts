import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Car,
  ClipboardCheck,
  Droplets,
  Gauge,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

export const siteConfig = {
  name: "KIIP Assessoria e Soluções Automotivas",
  shortName: "KIIP Soluções Automotivas",
  phone: "+55 53 99128-7750",
  phoneRaw: "5553991287750",
  instagram: "https://www.instagram.com/kiippelotas/",
  address: "Rua Caetano Gotuzzo, 160 - Fragata - Pelotas/RS - CEP 96045-470",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Rua%20Caetano%20Gotuzzo%2C%20160%2C%20Fragata%2C%20Pelotas%20-%20RS%2C%2096045-470",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Rua%20Caetano%20Gotuzzo%2C%20160%2C%20Fragata%2C%20Pelotas%20-%20RS%2C%2096045-470&z=16&output=embed",
  baseUrl: "https://www.kiippelotas.com.br",
  developerUrl: "https://www.oleonardomachado.com.br/",
  hours: "Segunda a sexta, das 8h às 18h. Sábados mediante agendamento.",
};

export const whatsAppMessage =
  "Olá! Conheci a KIIP pelo site e gostaria de solicitar atendimento para meu veículo.";

export const whatsAppUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
  whatsAppMessage,
)}`;

export type ServiceCategory = {
  title: string;
  kicker: string;
  icon: LucideIcon;
  services: {
    name: string;
    description: string;
    icon: LucideIcon;
  }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Mecânica e manutenção",
    kicker: "Precisão para rodar com segurança",
    icon: Wrench,
    services: [
      {
        name: "Serviços em freios",
        description:
          "Inspeção e manutenção para preservar resposta, controle e segurança.",
        icon: ShieldCheck,
      },
      {
        name: "Troca de óleo e filtros",
        description:
          "Cuidado preventivo com fluidos e filtros adequados ao uso do veículo.",
        icon: Droplets,
      },
      {
        name: "Serviços de motor",
        description:
          "Avaliação técnica para corrigir falhas, ruídos e perda de desempenho.",
        icon: Gauge,
      },
      {
        name: "Serviços de suspensão",
        description:
          "Manutenção para estabilidade, conforto e dirigibilidade no dia a dia.",
        icon: Car,
      },
      {
        name: "Diagnóstico de injeção eletrônica",
        description:
          "Leitura e orientação técnica para identificar alertas e anomalias.",
        icon: ClipboardCheck,
      },
      {
        name: "Troca de filtro de ar-condicionado",
        description:
          "Mais qualidade do ar interno e melhor eficiência do sistema.",
        icon: Sparkles,
      },
    ],
  },
  {
    title: "Estética e conservação",
    kicker: "Acabamento renovado e protegido",
    icon: Sparkles,
    services: [
      {
        name: "Revitalização de faróis",
        description:
          "Recupera transparência, melhora a aparência e contribui para visibilidade.",
        icon: ShieldCheck,
      },
      {
        name: "Revitalização de vidros",
        description:
          "Tratamento para melhorar aspecto visual e auxiliar na condução segura.",
        icon: Sparkles,
      },
      {
        name: "Polimento automotivo",
        description:
          "Correções de brilho e acabamento para valorizar a pintura do veículo.",
        icon: BadgeCheck,
      },
      {
        name: "Enceramento profissional",
        description:
          "Proteção e brilho com aplicação cuidadosa para conservação da pintura.",
        icon: Car,
      },
      {
        name: "Hidratação de couro",
        description:
          "Cuidado para preservar textura, toque e aparência dos revestimentos.",
        icon: Sparkles,
      },
    ],
  },
  {
    title: "Lavagem e higienização",
    kicker: "Limpeza completa por dentro e por fora",
    icon: Droplets,
    services: [
      {
        name: "Lavagem de veículos pequenos",
        description:
          "Limpeza externa e acabamento para carros compactos e sedans.",
        icon: Droplets,
      },
      {
        name: "Lavagem de veículos grandes",
        description:
          "Cuidado dimensionado para SUVs, vans e veículos de maior porte.",
        icon: Car,
      },
      {
        name: "Lavagem de picapes",
        description:
          "Atendimento para cabine, carroceria e pontos de uso intenso.",
        icon: Car,
      },
      {
        name: "Lavagem completa de motor",
        description:
          "Limpeza criteriosa do cofre do motor com orientação adequada.",
        icon: Gauge,
      },
      {
        name: "Higienização interna",
        description:
          "Cuidado com cabines, painéis, carpetes e regiões de contato frequente.",
        icon: Sparkles,
      },
      {
        name: "Higienização de bancos em tecido",
        description:
          "Tratamento para remover sujeiras e renovar a sensação do interior.",
        icon: BadgeCheck,
      },
      {
        name: "Higienização de sofás e estofados",
        description:
          "Serviço preparado também para estofados fora do veículo.",
        icon: Sparkles,
      },
    ],
  },
];

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "KIIP", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Localização", href: "#localizacao" },
  { label: "FAQ", href: "#faq" },
];

export const faqItems = [
  {
    question: "Quais serviços a KIIP oferece?",
    answer:
      "A KIIP oferece mecânica, diagnóstico automotivo, manutenção preventiva, troca de óleo e filtros, suspensão, freios, lavagem, higienização, polimento, enceramento e revitalização de faróis.",
  },
  {
    question: "Preciso agendar o atendimento?",
    answer:
      "O agendamento ajuda a equipe a entender sua necessidade e organizar melhor o atendimento do veículo. O contato pode ser feito diretamente pelo WhatsApp.",
  },
  {
    question: "A KIIP atende veículos de todos os portes?",
    answer:
      "A KIIP atende diferentes portes de veículos, incluindo carros pequenos, veículos grandes e picapes. Para demandas específicas, fale pelo WhatsApp.",
  },
  {
    question: "É possível solicitar orçamento pelo WhatsApp?",
    answer:
      "Sim. Você pode explicar o que precisa, enviar informações do veículo e receber orientação inicial ou orçamento pelo WhatsApp.",
  },
  {
    question: "A KIIP realiza serviços mecânicos e estéticos?",
    answer:
      "Sim. A proposta da KIIP é reunir manutenção mecânica, diagnóstico, limpeza, conservação e estética automotiva em um único lugar.",
  },
  {
    question: "Onde a KIIP está localizada?",
    answer:
      "A KIIP fica na Rua Caetano Gotuzzo, 160, no bairro Fragata, em Pelotas/RS, CEP 96045-470.",
  },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.baseUrl}/#organization`,
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      logo: `${siteConfig.baseUrl}/images/logo-kiip-white.png`,
      sameAs: [siteConfig.instagram],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: "BR-RS",
        availableLanguage: "Portuguese",
      },
    },
    {
      "@type": ["LocalBusiness", "AutoRepair"],
      "@id": `${siteConfig.baseUrl}/#autorepair`,
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      image: [
        `${siteConfig.baseUrl}/images/hero-kiip.jpg`,
        `${siteConfig.baseUrl}/images/sobre-kiip.jpg`,
        `${siteConfig.baseUrl}/images/galeria-01.jpg`,
      ],
      telephone: siteConfig.phone,
      sameAs: [siteConfig.instagram],
      parentOrganization: {
        "@id": `${siteConfig.baseUrl}/#organization`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Caetano Gotuzzo, 160",
        addressLocality: "Pelotas",
        addressRegion: "RS",
        postalCode: "96045-470",
        addressCountry: "BR",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Pelotas",
          addressRegion: "RS",
          addressCountry: "BR",
        },
        {
          "@type": "Place",
          name: "Fragata, Pelotas/RS",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços automotivos da KIIP",
        itemListElement: serviceCategories.map((category) => ({
          "@type": "OfferCatalog",
          name: category.title,
          itemListElement: category.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              serviceType: category.title,
              areaServed: "Pelotas/RS",
              provider: {
                "@id": `${siteConfig.baseUrl}/#autorepair`,
              },
            },
          })),
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.baseUrl}/#website`,
      url: siteConfig.baseUrl,
      name: siteConfig.shortName,
      inLanguage: "pt-BR",
      publisher: {
        "@id": `${siteConfig.baseUrl}/#organization`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.baseUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteConfig.baseUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.baseUrl}/#faq`,
      inLanguage: "pt-BR",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};
