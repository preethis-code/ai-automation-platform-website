"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Workflow,
  Bot,
  PenTool as Tool,
  Terminal,
  Database,
  Shield,
  Cpu,
  Lock,
  FileCode,
  Calendar,
  Layers,
  Search,
  Settings,
  Code,
  Server,
  Rocket,
  History,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/", icon: FileCode },
      { title: "Installation", href: "/docs/installation/", icon: Terminal },
      { title: "Quickstart", href: "/docs/quickstart/", icon: Rocket },
      { title: "Configuration", href: "/docs/configuration/", icon: Settings },
    ],
  },
  {
    title: "Why This Platform",
    items: [
      { title: "Overview", href: "/docs/why/", icon: Shield },
      { title: "Comparison & Alternatives", href: "/docs/why-compare/", icon: Layers },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Architecture", href: "/docs/architecture/", icon: Layers },
      { title: "Workflows", href: "/docs/workflows/", icon: Workflow },
      { title: "AI Agents", href: "/docs/agents/", icon: Bot },
      { title: "Step Runner", href: "/docs/runner/", icon: Cpu },
    ],
  },
  {
    title: "Modules & Features",
    items: [
      { title: "Agent Tools", href: "/docs/tools/", icon: Tool },
      { title: "Scheduler", href: "/docs/scheduler/", icon: Calendar },
      { title: "Document Chat (RAG)", href: "/docs/rag/", icon: Search },
      { title: "Agent Memory", href: "/docs/memory/", icon: Database },
      { title: "Execution Logs", href: "/docs/logs/", icon: History },
    ],
  },
  {
    title: "Reference & Ops",
    items: [
      { title: "API Reference", href: "/docs/api-reference/", icon: Code },
      { title: "Deployment", href: "/docs/deployment/", icon: Server },
      { title: "Security & Privacy", href: "/docs/security/", icon: Lock },
      { title: "Local-First Design", href: "/docs/local-first/", icon: Shield },
    ],
  },
];

export function DocsSidebar({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="space-y-8">
      {sidebarItems.map((section, i) => (
        <div key={i} className="space-y-3">
          <h4 className="px-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
            {section.title}
          </h4>

          <div className="grid gap-0.5 text-sm">
            {section.items.map((item, j) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={j}
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "group flex items-center rounded-md px-2 py-1.5 transition-colors",
                    active
                      ? "bg-accent text-primary font-semibold"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-2.5 h-4 w-4",
                      active
                        ? "text-primary"
                        : "text-muted-foreground/50 group-hover:text-foreground"
                    )}
                  />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
