type WaveDividerProps = {
  tone?: "light" | "dark" | "brand";
  flip?: boolean;
};

export function WaveDivider({ tone = "light", flip = false }: WaveDividerProps) {
  const fill = tone === "dark" ? "#0F172A" : tone === "brand" ? "#14B8A6" : "#F8FAFC";

  return (
    <div className={`relative -mb-px h-14 overflow-hidden ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          fill={fill}
          d="M0,64 C180,104 320,12 520,40 C700,64 840,122 1040,78 C1210,40 1310,30 1440,54 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
