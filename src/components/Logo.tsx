type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const color = variant === "light" ? "text-white" : "text-violet-deep";

  return (
    <span
      className={`font-display inline-flex items-baseline gap-[2px] text-2xl font-bold italic tracking-tight ${color} ${className}`}
    >
      swap
      <span className="relative inline-flex items-baseline">
        c
        <span className="relative inline-block h-[0.62em] w-[0.9em] translate-y-[0.06em]">
          <span className="absolute left-0 top-0 h-[0.62em] w-[0.5em] rounded-full border-[0.14em] border-current" />
          <span className="absolute right-0 top-0 h-[0.62em] w-[0.5em] rounded-full border-[0.14em] border-current" />
        </span>
      </span>
    </span>
  );
}
