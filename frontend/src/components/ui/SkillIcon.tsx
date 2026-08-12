import {
  Cloud,
  Cpu,
  Database,
  Layout,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  cpu: Cpu,
};

export function SkillIcon({ name }: { name: string }) {
  const Icon = iconMap[name] ?? Cpu;
  return <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.75} />;
}
