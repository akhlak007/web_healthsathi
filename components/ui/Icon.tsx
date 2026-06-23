import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  BookOpenCheck,
  Bot,
  Building2,
  CalendarClock,
  CheckCircle2,
  CircleHelp,
  ClipboardCheck,
  DatabaseZap,
  Download,
  FileHeart,
  HeartPulse,
  Hospital,
  LockKeyhole,
  MapPin,
  Microscope,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Trash2,
  UsersRound
} from "lucide-react";
import type { IconName } from "@/types/content";

const iconMap: Partial<Record<IconName, LucideIcon>> = {
  Activity,
  BadgeCheck,
  BookOpenCheck,
  Bot,
  Building2,
  CalendarClock,
  CheckCircle2,
  CircleHelp,
  ClipboardCheck,
  DatabaseZap,
  Download,
  FileHeart,
  HeartPulse,
  Hospital,
  LockKeyhole,
  MapPin,
  Microscope,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Trash2,
  UsersRound
};

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className, strokeWidth = 1.8 }: IconProps) {
  const LucideIconComponent = iconMap[name] ?? Activity;

  return <LucideIconComponent aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}
