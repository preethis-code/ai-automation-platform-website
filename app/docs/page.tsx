import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Info, ShieldCheck, Zap, Bot, Layout, Terminal } from "lucide-react";

export const metadata = {
  title: "Documentation | AI Agent Automation",
  description:
    "Official documentation for AI Agent Automation including installation, workflows, agents, tools, and system architecture.",
};

export default function DocsIntroduction() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Documentation
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Introduction
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The AI Agent Automation Platform is a production-grade execution
          engine for building autonomous agents and intelligent workflows.
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg leading-relaxed text-muted-foreground">
          This project is designed as a{" "}
          <strong className="text-foreground">real execution engine</strong>,
          not a demo or prompt playground. It enables developers to orchestrate
          autonomous AI agents, automate backend workflows, run tasks on
          schedules, and inspect executions with full observability—all while
          remaining completely local and secure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "Autonomous Execution",
            desc: "Agents that reason, use tools, and complete tasks step-by-step.",
            icon: Bot,
          },
          {
            title: "Deterministic Workflows",
            desc: "Ordered pipelines with structured inputs and success tracking.",
            icon: Layout,
          },
          {
            title: "Privacy First",
            desc: "Self-hosted alternative to n8n or Zapier with zero vendor lock-in.",
            icon: ShieldCheck,
          },
          {
            title: "Developer Ready",
            desc: "Modular architecture using Node.js, Express, and MongoDB.",
            icon: Terminal,
          },
        ].map((item, i) => (
          <Card key={i} className="p-6 border-border/50 bg-card/30 flex gap-4">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 border-primary/20 bg-primary/5 relative overflow-hidden">
        <Zap className="absolute top-[-10%] right-[-5%] h-32 w-32 text-primary opacity-5 rotate-12" />
        <div className="flex gap-6">
          <Info className="h-8 w-8 text-primary shrink-0" />
          <div className="space-y-3">
            <h4 className="text-xl font-bold text-primary">Key Philosophy</h4>
            <p className="leading-relaxed text-muted-foreground">
              AutoFlow is built on the principle that automation should be a
              utility you control. We prioritize local execution and modular
              design to ensure that your intelligent pipelines are as secure as
              your internal databases.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
