import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Globe, HardDrive, Cpu, Terminal } from "lucide-react";

export const metadata = {
  title: "Local First Architecture | AI Agent Automation Docs",
  description:
    "Understand why AI Agent Automation is designed as a local-first AI automation platform.",
};

export default function LocalFirstDocs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Design Philosophy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Local-First Design
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Understand why we prioritize local execution and how it benefits your
          developer workflow and data security.
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed">
          The "Local-First" approach is more than just a deployment option—it's
          a fundamental design principle that affects everything from
          architecture to performance. By bringing the automation engine to your
          data, rather than sending your data to the engine, we eliminate
          latency, reduce security risks, and give you absolute control.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Key Advantages</h2>
          <div className="space-y-6">
            {[
              {
                icon: Zap,
                title: "Zero Latency",
                desc: "No round-trips to cloud servers for logic processing. Local execution is as fast as your hardware allows.",
              },
              {
                icon: Shield,
                title: "Air-Gapped Potential",
                desc: "Can be configured to run in completely offline environments for high-security applications.",
              },
              {
                icon: Globe,
                title: "No Subscription Limits",
                desc: "You aren't charged per task or per workflow. Your hardware is the only limit.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Card className="p-8 border-border/50 bg-card/30 flex flex-col justify-center space-y-8">
          <div className="space-y-4 text-center">
            <div className="inline-flex h-16 w-16 rounded-full bg-secondary/10 items-center justify-center mb-2">
              <HardDrive className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">The "Laptop-Cloud" Spectrum</h3>
            <p className="text-sm text-muted-foreground">
              Our architecture is portable across your entire development
              lifecycle.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                label: "Development",
                desc: "Run on your laptop while building workflows.",
              },
              {
                label: "Testing",
                desc: "Spin up isolated instances in CI/CD pipelines.",
              },
              {
                label: "Production",
                desc: "Deploy to your private VPC or on-prem servers.",
              },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                <span className="text-xs font-mono font-bold w-24">
                  {step.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  {step.desc}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Technical Implementation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Terminal,
              title: "Native CLI",
              desc: "Manage your local instance, check logs, and run tests directly from your terminal.",
            },
            {
              icon: Cpu,
              title: "Local Vectors",
              desc: "Document embeddings are stored in a local MongoDB instance, not a cloud vector DB.",
            },
            {
              icon: HardDrive,
              title: "File Storage",
              desc: "Execution artifacts and logs are written directly to your local filesystem.",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 border-border/50 bg-card/30 space-y-4">
              <div className="h-10 w-10 rounded-lg bg-muted/50 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-8 border-primary/20 bg-primary/5 text-center space-y-4">
        <h3 className="text-2xl font-bold">Embrace Data Sovereignty</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Local-first design isn't just about technical constraints—it's about
          freedom. Freedom from subscription fatigue, freedom from vendor
          lock-in, and freedom to control your own intelligent infrastructure.
        </p>
      </Card>
    </div>
  );
}
