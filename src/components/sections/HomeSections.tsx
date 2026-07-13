import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Droplets,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Wrench,
} from "lucide-react";

import { Faq } from "@/components/sections/Faq";
import { Reveal } from "@/components/ui/Reveal";
import { jsonLd, siteConfig, whatsAppUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const heroServices = ["Mecânica", "Diagnóstico", "Estética", "Higienização"];

const serviceBlocks = [
  {
    eyebrow: "01 / Mecânica",
    title: "Mecânica e manutenção",
    text: "Executamos serviços preventivos e corretivos voltados à segurança, desempenho e confiabilidade do veículo. A atuação inclui freios, suspensão, motor, fluidos, filtros e diagnóstico eletrônico, buscando identificar a causa antes da substituição de componentes.",
    image: "/images/galeria-01.jpg",
    alt: "Manutenção mecânica em motor automotivo",
    icon: Wrench,
    services: [
      "Freios",
      "Óleo e filtros",
      "Motor",
      "Suspensão",
      "Diagnóstico eletrônico",
      "Filtro de ar-condicionado",
    ],
  },
  {
    eyebrow: "02 / Acabamento",
    title: "Estética e conservação",
    text: "Os processos de revitalização e acabamento restauram a aparência do veículo utilizando técnicas específicas para pintura, faróis, vidros e superfícies internas, preservando materiais e aumentando sua durabilidade.",
    image: "/images/galeria-02.jpg",
    alt: "Polimento automotivo profissional",
    icon: Sparkles,
    services: [
      "Revitalização de faróis",
      "Revitalização de vidros",
      "Polimento",
      "Enceramento",
      "Hidratação de couro",
    ],
  },
  {
    eyebrow: "03 / Limpeza técnica",
    title: "Lavagem e higienização",
    text: "A higienização automotiva remove resíduos, poeira, fungos e contaminantes presentes no interior e exterior do veículo. São utilizados produtos específicos para cada superfície, contribuindo para conservação, conforto e valorização do automóvel.",
    image: "/images/galeria-03.jpg",
    alt: "Higienização técnica de banco automotivo com extratora",
    icon: Droplets,
    services: [
      "Lavagem de veículos",
      "Lavagem de picapes",
      "Limpeza de motor",
      "Higienização interna",
      "Bancos em tecido",
      "Estofados",
    ],
  },
];

const differentials = [
  {
    title: "Atendimento direto",
    text: "Contato simples pelo WhatsApp para entender a necessidade e orientar o melhor caminho.",
  },
  {
    title: "Soluções completas",
    text: "Mecânica, estética, limpeza e conservação reunidas em uma única assessoria automotiva.",
  },
  {
    title: "Transparência",
    text: "Comunicação objetiva sobre o serviço, a condição do veículo e o próximo passo.",
  },
  {
    title: "Cuidado nos detalhes",
    text: "Atenção ao acabamento, à segurança e aos pontos que fazem diferença na entrega.",
  },
];

const processSteps = [
  "Fale com a KIIP",
  "Explique a necessidade",
  "Receba a orientação",
  "Agende o atendimento",
];

const gallery = [
  {
    src: "/images/sobre-kiip.jpg",
    label: "Inspeção técnica",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/galeria-02.jpg",
    label: "Estética automotiva",
    className: "",
  },
  {
    src: "/images/farol-antes-depois.jpg",
    label: "Revitalização de faróis",
    className: "",
  },
  {
    src: "/images/galeria-03.jpg",
    label: "Higienização interna",
    className: "md:col-span-2",
  },
];

export function HomeSections() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Positioning />
      <Services />
      <LocalServiceContext />
      <HeadlightFeature />
      <Differentials />
      <Process />
      <Gallery />
      <Trust />
      <Location />
      <FaqSection />
      <FinalCta />
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-kiip-yellow">
      <span className="h-px w-10 bg-kiip-yellow" />
      {children}
    </p>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen overflow-hidden bg-black px-5 pt-24 text-white sm:px-8 lg:px-10"
    >
      <Image
        src="/images/hero-kiip.jpg"
        alt="Mecânico trabalhando em veículo dentro de oficina"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_50%] opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.93)_34%,rgba(5,5,5,0.56)_66%,rgba(5,5,5,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_42%,rgba(245,197,24,0.14),transparent_32%)]" />
      <div className="absolute -right-24 top-0 hidden h-full w-[42vw] -skew-x-12 border-l border-kiip-yellow/25 bg-white/[0.025] lg:block" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center pb-28 pt-14">
        <Reveal className="max-w-4xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-12 w-1.5 -skew-x-12 bg-kiip-yellow shadow-[0_0_28px_rgba(245,197,24,0.45)]" />
            <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-300">
              Assessoria e soluções automotivas
            </p>
          </div>
          <h1 className="max-w-5xl text-[clamp(2.15rem,7.3vw,5.5rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
            Seu carro exige mais do que manutenção.
          </h1>
          <p className="mt-5 text-[clamp(1.65rem,3.45vw,3.3rem)] font-black uppercase leading-none text-kiip-yellow">
            Exige cuidado completo.
          </p>
          <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-xl">
            Mecânica, diagnóstico, estética e conservação automotiva em um só
            lugar, com atendimento direto e soluções para cada necessidade do
            seu veículo.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-kiip-yellow px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-black shadow-[0_0_38px_rgba(245,197,24,0.22)] transition hover:-translate-y-0.5 hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Solicitar atendimento
            </Link>
            <Link
              href="#sobre"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/[0.035] px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-kiip-yellow hover:text-kiip-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-kiip-yellow"
            >
              Conhecer a KIIP
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="mr-16 mt-8 grid grid-cols-2 overflow-hidden rounded-lg border border-white/10 bg-black/68 backdrop-blur-xl sm:hidden">
            {heroServices.map((service, index) => (
              <div
                key={service}
                className="flex min-h-14 items-center justify-between border-b border-r border-white/10 px-4 py-3 last:border-r-0"
              >
                <span className="text-[0.58rem] font-black uppercase tracking-[0.12em] text-white min-[410px]:text-[0.64rem]">
                  {service}
                </span>
                <span className="text-[0.68rem] font-black text-kiip-yellow">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-8 bottom-5 hidden sm:block lg:inset-x-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-lg border border-white/10 bg-black/68 backdrop-blur-xl md:grid-cols-4">
          {heroServices.map((service, index) => (
            <div
              key={service}
              className="flex items-center justify-between border-b border-r border-white/10 px-4 py-4 last:border-r-0 md:border-b-0 sm:px-6"
            >
              <span className="text-xs font-black uppercase tracking-[0.18em] text-white">
                {service}
              </span>
              <span className="text-xs font-black text-kiip-yellow">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Positioning() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(245,197,24,0.08),transparent_32%),linear-gradient(#111113_1px,transparent_1px),linear-gradient(90deg,#111113_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px] opacity-60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionLabel>Posicionamento</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-tight sm:text-5xl">
            Não somos apenas uma oficina.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-300">
            A KIIP reúne soluções mecânicas e estéticas para cuidar do veículo
            por completo. Da segurança ao acabamento, cada serviço é realizado
            com atenção, responsabilidade e orientação clara.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative">
            <div className="absolute -left-5 top-8 h-40 w-2 -skew-x-12 bg-kiip-yellow" />
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50">
              <Image
                src="/images/sobre-kiip.jpg"
                alt="Inspeção automotiva em oficina organizada"
                width={1500}
                height={1125}
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="aspect-[16/11] w-full object-cover object-center opacity-92"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-kiip-yellow">
                  segurança + acabamento + orientação
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="servicos"
      className="bg-[#080808] px-5 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Serviços</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl">
              Três frentes. Um cuidado completo.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              A estrutura de serviços foi pensada para resolver o que o veículo
              precisa sem transformar o atendimento em um catálogo confuso.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10">
          {serviceBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.05}>
              <article
                className={cn(
                  "grid overflow-hidden rounded-lg border border-white/10 bg-zinc-950/88 shadow-2xl shadow-black/25 lg:grid-cols-2",
                  index % 2 === 1 && "lg:[&_.service-media]:order-2",
                )}
              >
                <div className="service-media relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
                  <Image
                    src={block.image}
                    alt={block.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
                  <div className="absolute left-6 top-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/50 text-kiip-yellow backdrop-blur">
                    <block.icon size={25} aria-hidden="true" />
                  </div>
                </div>

                <div className="relative p-7 sm:p-10 lg:p-12">
                  <div className="absolute right-8 top-0 h-28 w-1.5 -skew-x-12 bg-kiip-yellow/90" />
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-kiip-yellow">
                    {block.eyebrow}
                  </p>
                  <h3 className="mt-4 max-w-xl text-2xl font-black uppercase leading-tight sm:text-4xl">
                    {block.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                    {block.text}
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {block.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 border-t border-white/10 pt-3"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 text-kiip-yellow"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-bold text-zinc-200">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex items-center gap-2 rounded-full border border-kiip-yellow/50 bg-kiip-yellow px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Solicitar orientação
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalServiceContext() {
  const localTerms = [
    "Oficina mecânica em Pelotas",
    "Mecânica no Fragata",
    "Troca de óleo",
    "Freios e suspensão",
    "Diagnóstico automotivo",
    "Lavagem e higienização",
    "Polimento automotivo",
    "Revitalização de faróis",
  ];

  return (
    <section className="bg-black px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 border-y border-white/10 py-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <Reveal>
          <SectionLabel>Pelotas / Fragata</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl">
            Atendimento automotivo com leitura técnica e orientação clara.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-3xl text-lg leading-9 text-zinc-300">
            Para quem busca oficina mecânica em Pelotas, mecânica no Fragata ou
            serviços de estética automotiva em Pelotas, a KIIP concentra
            manutenção, diagnóstico, limpeza e conservação em uma jornada direta
            pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {localTerms.map((term) => (
              <span
                key={term}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-zinc-300"
              >
                {term}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HeadlightFeature() {
  return (
    <section className="relative overflow-hidden bg-[#151515] px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_15%,rgba(245,197,24,0.18),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black">
            <Image
              src="/images/farol-antes-depois.jpg"
              alt="Processo de revitalização de farol automotivo"
              width={1500}
              height={1125}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[16/10] w-full object-cover object-center opacity-92"
            />
            <div className="absolute left-6 top-6 rounded-full border border-kiip-yellow/35 bg-black/65 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-kiip-yellow backdrop-blur">
              Visibilidade e proteção
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <SectionLabel>Faróis</SectionLabel>
          <h2 className="text-3xl font-black uppercase leading-[1] tracking-tight sm:text-5xl">
            Faróis renovados. Mais visibilidade. Mais segurança.
          </h2>
          <p className="mt-6 text-lg leading-9 text-zinc-300">
            O tratamento remove a camada superficial oxidada do policarbonato,
            recuperando transparência, melhorando a eficiência da iluminação e
            aumentando a proteção contra a ação do tempo por meio da aplicação
            de proteção UV.
          </p>
          <Link
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-kiip-yellow px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Quero revitalizar meus faróis
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section id="diferenciais" className="bg-black px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Diferenciais</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl">
            Confiança construída no atendimento.
          </h2>
        </Reveal>
        <div className="mt-14 grid border-y border-white/10 lg:grid-cols-4">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="h-full border-b border-white/10 py-8 lg:border-b-0 lg:border-r lg:px-7 lg:last:border-r-0">
                <span className="text-6xl font-black leading-none text-white/10">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-2xl font-black uppercase text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-[#0b0b0c] px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Processo</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl">
            Do primeiro contato ao agendamento.
          </h2>
        </Reveal>
        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/12 md:block" />
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.05}>
              <div className="relative border-l border-white/12 pl-6 md:border-l-0 md:pl-0">
                <span className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full border border-kiip-yellow/45 bg-black text-xl font-black text-kiip-yellow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-black uppercase leading-tight text-white">
                  {step}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="bg-black px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Galeria</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h2 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl">
              Visual técnico, limpo e direto.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              Um mosaico editorial preparado para receber fotos reais da KIIP,
              mantendo presença visual e coerência automotiva.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid auto-rows-[260px] gap-4 md:grid-cols-4">
          {gallery.map((item, index) => (
            <Reveal key={item.src} delay={index * 0.04} className={item.className}>
              <figure className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent opacity-85 transition group-hover:opacity-100" />
                <figcaption className="absolute bottom-5 left-5 text-sm font-black uppercase tracking-[0.18em] text-white">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="bg-[#111113] px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionLabel>Confiança</SectionLabel>
          <h2 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl">
            Atendimento claro do primeiro contato à entrega.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border-l border-kiip-yellow pl-7">
            <p className="text-xl leading-9 text-zinc-300">
              A KIIP valoriza orientação direta, comunicação simples e
              facilidade pelo WhatsApp. Você explica a necessidade do veículo,
              recebe direcionamento e agenda o atendimento sem burocracia.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Phone, label: "Contato direto" },
                { icon: ClipboardCheck, label: "Orientação objetiva" },
                { icon: BadgeCheck, label: "Entrega cuidadosa" },
              ].map((item) => (
                <div key={item.label} className="border-t border-white/10 pt-4">
                  <item.icon className="mb-3 h-6 w-6 text-kiip-yellow" aria-hidden="true" />
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-white">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="localizacao" className="bg-black px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <SectionLabel>Localização</SectionLabel>
          <h2 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl">
            KIIP no bairro Fragata.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Atendimento em Pelotas/RS para manutenção, diagnóstico, lavagem,
            higienização e estética automotiva, com rota fácil pelo Google Maps.
          </p>
          <div className="mt-8 grid gap-5 text-zinc-300">
            <div className="flex gap-4 border-t border-white/10 pt-5">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-kiip-yellow" aria-hidden="true" />
              <p className="leading-8">
                Rua Caetano Gotuzzo, 160
                <br />
                Fragata - Pelotas/RS
                <br />
                CEP 96045-470
              </p>
            </div>
            <div className="flex gap-4 border-t border-white/10 pt-5">
              <Phone className="mt-1 h-6 w-6 shrink-0 text-kiip-yellow" aria-hidden="true" />
              <p className="leading-8">
                WhatsApp
                <br />
                {siteConfig.phone}
              </p>
            </div>
            <div className="flex gap-4 border-t border-white/10 pt-5">
              <Clock className="mt-1 h-6 w-6 shrink-0 text-kiip-yellow" aria-hidden="true" />
              <p className="leading-8">{siteConfig.hours}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-kiip-yellow px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Abrir no Google Maps
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/14 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-kiip-yellow hover:text-kiip-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-kiip-yellow"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-lg border border-white/10 p-2 shadow-2xl shadow-black/40">
            <iframe
              title="Localização da KIIP Soluções Automotivas em Pelotas"
              src={siteConfig.mapsEmbedUrl}
              width="100%"
              height="560"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full rounded-md md:h-[560px]"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="bg-[#0b0b0c] px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl">
            Perguntas frequentes.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-12">
          <Faq />
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-10">
      <Image
        src="/images/hero-kiip.jpg"
        alt="Oficina automotiva em atendimento"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-35"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.88)_48%,rgba(0,0,0,0.58)_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-4xl">
            <SectionLabel>Próximo passo</SectionLabel>
            <h2 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Seu veículo merece cuidado completo.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-zinc-300">
              Fale com a KIIP e encontre a solução certa para manutenção,
              estética, limpeza e conservação.
            </p>
            <Link
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-16 items-center justify-center gap-2 rounded-full bg-kiip-yellow px-9 py-5 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_0_42px_rgba(245,197,24,0.2)] transition hover:-translate-y-0.5 hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              Chamar no WhatsApp
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
