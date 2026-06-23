"use client";

import { useState } from "react";

type NetworkImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function NetworkImage({ src, alt, className = "", imageClassName = "", priority = false }: NetworkImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-label={alt}
        className={`relative overflow-hidden bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,118,110,0.72))] ${className}`}
      />
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        referrerPolicy="no-referrer"
        className={`h-full w-full object-cover ${imageClassName}`}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
