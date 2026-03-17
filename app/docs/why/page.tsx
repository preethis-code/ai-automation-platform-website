import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Cpu, Workflow, Lock } from "lucide-react";

export const metadata = {
  title: "Why AI Agent Automation | Platform Philosophy",
  description:
    "Learn the philosophy behind building deterministic AI automation systems.",
};

export default function WhyPlatform() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Why This Platform
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Built for Developers Who Want Control
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          This platform is designed for engineers who want deterministic
          automation, local execution, and full ownership of their AI workflows.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: Shield,
            title: "Privacy by Design",
            desc: "Your data never leaves your machine unless you explicitly send it. No hidden cloud processing.",
          },
          {
            icon: Cpu,
            title: "Deterministic Execution",
            desc: "Every workflow runs step-by-step with predictable state, logs, and outcomes.",
          },
          {
            icon: Workflow,
            title: "Composable Automation",
            desc: "Build complex pipelines using simple, inspectable steps instead of black-box magic.",
          },
          {
            icon: Lock,
            title: "No Vendor Lock-In",
            desc: "Run locally, self-host, or deploy privately without depending on proprietary services.",
          },
        ].map((item, i) => (
          <Card key={i} className="p-6 bg-card/30 border-border/50 space-y-3">
            <item.icon className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-primary/5 border-primary/20 text-center space-y-4">
        <h2 className="text-2xl font-bold">Who Is This For?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Backend engineers, automation builders, AI tinkerers, and teams who
          want transparency, control, and local-first intelligence.
        </p>
      </Card>
    </div>
  );
}
