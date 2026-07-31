import Image from "next/image";

type DeviceFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function DeviceFrame({ src, alt, className = "", priority = false }: DeviceFrameProps) {
  return (
    <div className={`device-frame relative aspect-[402/874] w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 60vw, 320px"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
