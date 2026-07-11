"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { faqItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-y border-white/10">
      {faqItems.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={faq.question} className="border-b border-white/10 last:border-b-0">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-black text-white transition hover:text-kiip-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-kiip-yellow sm:text-lg"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-kiip-yellow transition duration-300",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-4xl pb-6 text-sm leading-7 text-zinc-400 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
