"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks, whatsAppUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-white/10 bg-black/88 shadow-2xl shadow-black/45 backdrop-blur-xl"
          : "border-white/5 bg-black/48 backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-10",
          isScrolled ? "h-16" : "h-20",
        )}
      >
        <Link
          href="#inicio"
          className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-kiip-yellow"
          aria-label="Ir para o início"
        >
          <span
            className={cn(
              "relative block transition-all duration-300",
              isScrolled ? "h-10 w-36" : "h-12 w-44",
            )}
          >
            <Image
              src="/images/logo-kiip-white.png"
              alt="KIIP Assessoria e Soluções Automotivas"
              fill
              priority
              loading="eager"
              sizes="(min-width: 1024px) 176px, 144px"
              className="object-contain object-left"
            />
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-300 transition hover:bg-white/8 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-kiip-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 overflow-hidden rounded-full bg-kiip-yellow px-5 py-3 text-sm font-black text-black shadow-[0_0_28px_rgba(245,197,24,0.2)] transition hover:-translate-y-0.5 hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Contato
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white transition hover:border-kiip-yellow hover:text-kiip-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-kiip-yellow lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-white/10 bg-black/96 transition-[grid-template-rows] duration-300 lg:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <nav className="grid gap-1 px-5 py-5" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/8 px-1 py-4 text-sm font-black uppercase tracking-[0.18em] text-zinc-200 transition hover:text-kiip-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-kiip-yellow"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-kiip-yellow px-5 py-4 text-sm font-black text-black"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Solicitar atendimento
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
