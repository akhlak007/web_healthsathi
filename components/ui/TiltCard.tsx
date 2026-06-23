"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className = "" }: TiltCardProps) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-y", `${x * 8}deg`);
    event.currentTarget.style.setProperty("--tilt-x", `${y * -8}deg`);
  }

  function handleMouseLeave(event: MouseEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
  }

  return (
    <div
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ "--tilt-x": "0deg", "--tilt-y": "0deg" } as CSSProperties}
    >
      {children}
    </div>
  );
}
