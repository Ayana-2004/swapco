import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  if (variant === "light") {
    return (
      <span className={`inline-flex ${className}`}>
        <Image
          src="/swapco-logo.png"
          alt="Swapco"
          width={583}
          height={106}
          priority
          className="h-6 w-auto sm:h-7"
        />
      </span>
    );
  }

  return (
    <span
      role="img"
      aria-label="Swapco"
      className={`inline-block h-6 bg-violet sm:h-7 ${className}`}
      style={{
        aspectRatio: "583 / 106",
        WebkitMaskImage: "url(/swapco-logo.png)",
        maskImage: "url(/swapco-logo.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
      }}
    />
  );
}
