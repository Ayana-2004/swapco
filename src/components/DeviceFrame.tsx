import Image from "next/image";

type DeviceFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

// App screenshots are 720x1600 (9:20) and already include the status bar.
// The 9:20 ratio sits on the screen, not the frame, so the bezel never
// narrows it and object-cover never crops the clock off the sides.
export default function DeviceFrame({ src, alt, className = "", priority = false }: DeviceFrameProps) {
  return (
    <div className={`device-frame w-full ${className}`}>
      <div className="device-screen relative aspect-[9/20] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 60vw, 320px"
          className="object-cover object-top"
          priority={priority}
        />
      </div>
    </div>
  );
}
