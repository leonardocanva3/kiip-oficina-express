import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-kiip-yellow">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-black leading-tight text-zinc-950 sm:text-4xl lg:text-5xl",
          light && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-8 text-zinc-600 sm:text-lg",
            light && "text-zinc-300",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
