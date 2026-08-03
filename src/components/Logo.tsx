import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const logo = (
    <Image
      src="/swapco-logo.png"
      alt="Swapco"
      width={583}
      height={106}
      priority
      className="h-6 w-auto sm:h-7"
    />
  );

  if (variant === "light") {
    return <span className={`inline-flex ${className}`}>{logo}</span>;
  }

  return (
    <span
      className={`inline-flex items-center rounded-full bg-sky-500 px-4 py-2 ${className}`}
    >
      {logo}
    </span>
  );
}
