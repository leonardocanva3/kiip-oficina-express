import Image from "next/image";

import { whatsAppUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar a KIIP no WhatsApp"
      className="whatsapp-float fixed right-5 top-24 z-40 inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.32)] transition-transform duration-300 hover:scale-[1.07] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 sm:bottom-24 sm:right-7 sm:top-auto sm:h-16 sm:w-16"
    >
      <Image
        src="/images/whatsapp.png"
        alt=""
        fill
        sizes="(min-width: 640px) 64px, 56px"
        className="object-contain"
        aria-hidden="true"
      />
    </a>
  );
}
