import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

import { navLinks, siteConfig, whatsAppUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer
      id="contato"
      className="relative overflow-hidden border-t border-white/10 bg-black px-5 py-16 text-white sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(115deg,transparent_0%,transparent_44%,rgba(245,197,24,0.08)_44.2%,rgba(245,197,24,0.08)_45%,transparent_45.2%),radial-gradient(circle_at_82%_18%,rgba(245,197,24,0.13),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_0.75fr_0.9fr]">
        <div>
          <div className="relative mb-7 h-16 w-56">
            <Image
              src="/images/logo-kiip-white.png"
              alt="KIIP Assessoria e Soluções Automotivas"
              fill
              sizes="224px"
              className="object-contain object-left"
            />
          </div>
          <p className="max-w-xl text-base leading-8 text-zinc-400">
            Mecânica, diagnóstico, estética, lavagem e conservação automotiva
            com atendimento direto no bairro Fragata, em Pelotas/RS.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-kiip-yellow">
            Navegação
          </h3>
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-zinc-300 transition hover:text-kiip-yellow"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-kiip-yellow">
            Atendimento
          </h3>
          <div className="grid gap-5 text-sm text-zinc-300">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 transition hover:text-kiip-yellow"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </a>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-kiip-yellow"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-kiip-yellow"
            >
              <FaInstagram className="h-5 w-5" aria-hidden="true" />
              Instagram KIIP
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} KIIP Assessoria e Soluções Automotivas. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            className="font-semibold text-zinc-300 transition hover:text-kiip-yellow"
            href={siteConfig.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leonardo Machado
          </a>
        </p>
      </div>
    </footer>
  );
}
