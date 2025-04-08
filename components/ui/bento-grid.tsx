import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  meta,
  status,
  tags,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
  meta?: string;
  status?: string;
  tags?: string[];
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "backdrop-blur-lg [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-slate-900/70 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      // Always fully visible - no animations or transitions that might hide it
      "opacity-100 visible",
      className,
    )}
    style={{
      // Ensures the card is fully visible without any transforms
      opacity: "1 !important",
      transform: "none !important",
      visibility: "visible" as const
    }}
  >
    <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-slate-600/40 p-2 md:rounded-[1.5rem] md:p-3">
      <GlowingEffect 
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
        variant="default"
      />
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-slate-900/70 backdrop-blur-sm p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
        <div className="relative flex flex-1 flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <div className="w-fit rounded-lg border-[0.75px] border-cyan-500/30 bg-slate-800/90 p-2">
              <Icon className="h-6 w-6 text-cyan-400" />
            </div>
            {status && (
              <span className="rounded-full bg-slate-800/90 px-2.5 py-0.5 text-xs font-medium text-cyan-400">
                {status}
              </span>
            )}
          </div>
          
          <div className="space-y-3">
            <div>
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                {name}
              </h3>
              {meta && (
                <p className="text-sm text-cyan-400/80">{meta}</p>
              )}
            </div>
            <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-300">
              {description}
            </p>
          </div>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="rounded-full bg-slate-800/90 px-2 py-0.5 text-xs text-cyan-400/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <Button 
            variant="default" 
            asChild 
            size="sm" 
            className="pointer-events-auto bg-cyan-500 hover:bg-cyan-400 text-white font-medium"
          >
            <a href={href}>
              {cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
