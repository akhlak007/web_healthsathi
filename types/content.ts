export type NavLink = {
  label: string;
  href: string;
};

export type IconName =
  | "Activity"
  | "BadgeCheck"
  | "BookOpenCheck"
  | "Bot"
  | "Building2"
  | "CalendarClock"
  | "ChartNoAxesCombined"
  | "CheckCircle2"
  | "CircleHelp"
  | "ClipboardCheck"
  | "DatabaseZap"
  | "Download"
  | "FileHeart"
  | "HeartPulse"
  | "Hospital"
  | "LockKeyhole"
  | "MapPin"
  | "Microscope"
  | "PhoneCall"
  | "ShieldCheck"
  | "Sparkles"
  | "Stethoscope"
  | "Trash2"
  | "UsersRound";

export type ButtonLink = {
  label: string;
  href: string;
};

export type DownloadLink = ButtonLink & {
  platform: string;
  eyebrow: string;
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: IconName;
};

export type Highlight = {
  title: string;
  body: string;
  icon: IconName;
};

export type Vision = {
  title: string;
  subtitle: string;
  concept: string;
  feature: string;
  icon: IconName;
  accent: string;
};

export type ResearchCategory = {
  name: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LegalSection = {
  title: string;
  body?: string;
  items?: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  focus: string;
};

export type TimelineItem = {
  title: string;
  description: string;
};
