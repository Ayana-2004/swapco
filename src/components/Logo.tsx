import Image from "next/image";

type LogoProps = {
  variant?: "horizontal" | "stacked";
  className?: string;
};

// Brandbook rule: the logo sits on solid white only, is never recoloured,
// and keeps clear space equal to the pin height on all sides.
export default function Logo({ variant = "horizontal", className = "" }: LogoProps) {
  if (variant === "stacked") {
    return (
      <Image
        src="/swapapost-logo.png"
        alt="SwapaPost"
        width={1002}
        height={705}
        className={`h-20 w-auto ${className}`}
      />
    );
  }

  return (
    <span role="img" aria-label="SwapaPost" className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src="/swapapost-emblem.png" alt="" width={1002} height={505} priority className="h-8 w-auto shrink-0" />
      <Image src="/swapapost-wordmark.png" alt="" width={936} height={126} priority className="h-[17px] w-auto shrink-0" />
    </span>
  );
}
