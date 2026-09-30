import Image from "next/image";

type DeviceFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

// App screenshots are 720x1600 (9:20) and already include the status bar.
export default function DeviceFrame({ src, alt, className = "", priority = false }: DeviceFrameProps) {
  return (
    <div className={`device-frame relative aspect-[9/20] w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 60vw, 320px"
        className="object-cover object-top"
        priority={priority}
      />
    </div>
  );
}
