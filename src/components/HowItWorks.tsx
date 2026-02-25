"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Link2, ShieldCheck, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.32, 0.72, 0, 1] as const; // cubic-bezier

type Step = {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
};

const stepsData: Step[] = [
  {
    id: "01",
    number: "01",
    icon: <Globe className="h-5 w-5" />,
    title: "Issuer emits credential",
    description:
      "Issuer calls the API/SDK; ACTA encrypts the payload and anchors it on-chain.",
    bullets: [
      "Canonical VC JSON.",
      "Public on-chain anchor for verification (Active / Revoked / Expired)",
      "We return verify link + QR code.",
    ],
  },
  {
    id: "02",
    number: "02",
    icon: <Link2 className="h-5 w-5" />,
    title: "Credential anchored on Stellar",
    description:
      "We publish the credential on Stellar Blockchain without sensitive PII.",
    bullets: [
      "Selective disclosure",
      "Minimal costs and latency",
      "We make issuing credentials on the Stellar blockchain simple.",
    ],
  },
  {
    id: "03",
    number: "03",
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Anyone verifies instantly",
    description:
      "Our dApp reader verifies the credential against the Stellar Blockchain.",
    bullets: [
      "No account needed",
      "The holder decides which PII to disclose.",
      "We show √/Δ/X and metadata (Issuer, type, tx).",
    ],
  },
];

function StepRow({
  step,
  isExpanded,
  onToggle,
  isLast,
  triggerId,
  contentId,
}: {
  step: Step;
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
  triggerId: string;
  contentId: string;
}) {
  return (
    <div
      className={cn("border-b border-white/10", isLast && "border-b-0")}
      role="presentation"
    >
      {/* Grid: number | icon | title + content area | chevron */}
      <div className="grid grid-cols-[auto_auto_1fr_auto] items-start gap-4">
        <button
          id={triggerId}
          type="button"
          aria-expanded={isExpanded}
          aria-controls={contentId}
          onClick={onToggle}
          className={cn(
            "col-span-4 grid grid-cols-subgrid items-center gap-4 py-5 text-left outline-none transition-colors",
            "focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
            "hover:opacity-90"
          )}
        >
          {/* Large step number */}
          <span
            className={cn(
              "tabular-nums font-semibold transition-colors duration-300",
              "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
              isExpanded ? "text-white" : "text-white/20"
            )}
            aria-hidden
          >
            {step.number}
          </span>

          {/* Icon: when expanded, white circle with black icon (larger circle) */}
          <span
            className={cn(
              "flex shrink-0 items-center justify-center rounded-full transition-all duration-300",
              isExpanded
                ? "bg-white p-3 text-black ring-1 ring-white/20"
                : "bg-transparent p-2 text-white/40"
            )}
            aria-hidden
          >
            {step.icon}
          </span>

          {/* Title */}
          <span
            className={cn(
              "text-lg font-semibold sm:text-xl md:text-2xl transition-colors duration-300",
              isExpanded ? "text-white" : "text-white/50"
            )}
          >
            {step.title}
          </span>

          {/* Chevron */}
          <span
            className={cn(
              "flex shrink-0 justify-self-end text-white/60 transition-all duration-300",
              isExpanded && "rotate-180 text-white"
            )}
            aria-hidden
          >
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
        </button>

        {/* Expandable content: spans same columns as number, icon, then content in title column */}
        <div
          className="col-span-4 grid grid-cols-subgrid transition-[grid-template-rows] duration-300"
          style={{
            gridTemplateRows: isExpanded ? "1fr" : "0fr",
            transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
          }}
          role="region"
          id={contentId}
          aria-labelledby={triggerId}
          hidden={!isExpanded}
        >
          <div className="min-h-0 overflow-hidden col-span-4 grid grid-cols-subgrid">
            <div className="col-start-3 col-span-2 min-h-0 overflow-hidden">
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease,
                    }}
                    className="pb-6 pr-0"
                  >
                    <div className="max-w-2xl">
                      <p className="text-sm text-white/70 sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="mt-4 space-y-4 text-sm text-white/70 sm:text-base">
                        {step.bullets.map((b, k) => (
                          <li key={k} className="flex items-start gap-2">
                            <span
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/60"
                              aria-hidden
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [openStep, setOpenStep] = useState<string>("01");
  const baseId = useId();

  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative w-full"
    >
      {/* Section label */}
      <p
        id="how-it-works-label"
        className="text-xs font-medium uppercase text-white/50 tracking-[0.4em]"
      >
        HOW IT WORKS
      </p>

      {/* Headline */}
      <h2
        id="how-it-works-heading"
        className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        Three steps.
        <br />
        <span className="text-[#616161]">Zero complexity.</span>
      </h2>

      {/* Accordion steps */}
      <div className="mt-10 sm:mt-12">
        {stepsData.map((step, index) => {
          const triggerId = `${baseId}-trigger-${step.id}`;
          const contentId = `${baseId}-content-${step.id}`;
          const isExpanded = openStep === step.id;
          return (
            <StepRow
              key={step.id}
              step={step}
              isExpanded={isExpanded}
              onToggle={() => setOpenStep(isExpanded ? "" : step.id)}
              isLast={index === stepsData.length - 1}
              triggerId={triggerId}
              contentId={contentId}
            />
          );
        })}
      </div>

      {/* Footer */}
      <p className="mt-12 text-center text-xs font-medium uppercase tracking-widest text-white/40">
        Powered by Stellar
      </p>
    </section>
  );
}
