import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Server, Shield, Database, Cpu, Globe, ArrowRight } from "lucide-react";

export const metadata = {
  title: "System Architecture | AI Agent Automation Docs",
  description:
    "Detailed architecture documentation of the AI Agent Automation engine.",
};

export default function ArchitectureDocs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          System Design
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Backend Architecture
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          A deep dive into the modular, production-grade execution engine that
          powers your autonomous workflows.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Execution Engine Layers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "API Layer",
              icon: Globe,
              desc: "Express server handling REST requests, authentication, and workflow registration.",
              items: ["Route Handlers", "Input Validation", "Auth Middleware"],
            },
            {
              title: "Orchestration Layer",
              icon: Cpu,
              desc: "The Step Runner manages the workflow lifecycle, state transitions, and variable passing.",
              items: [
                "Step Runner",
                "Variable Interpolation",
                "Error Policy Engine",
              ],
            },
            {
              title: "Persistence Layer",
              icon: Database,
              desc: "MongoDB stores workflow definitions, execution logs, and agent memory.",
              items: [
                "Mongoose Models",
                "Vector Search (RAG)",
                "Execution History",
              ],
            },
          ].map((layer, i) => (
            <Card
              key={i}
              className="p-6 border-border/50 bg-card/30 flex flex-col h-full"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <layer.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{layer.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
                {layer.desc}
              </p>
              <ul className="space-y-2 border-t border-border/50 pt-4">
                {layer.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-xs font-mono"
                  >
                    <ArrowRight className="h-3 w-3 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Component Interaction</h2>
        <Card className="p-8 border-border/50 bg-muted/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The platform follows a unidirectional data flow for executions.
                Triggers are captured by the API or Scheduler, which then hands
                off the execution to the Runner. The Runner interacts with
                various Executors (LLM, Tools) while updating the state in
                MongoDB.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Stateless API",
                    desc: "The frontend is a pure dashboard interacting with the API server.",
                  },
                  {
                    title: "Isolated Workers",
                    desc: "Step execution can be distributed across multiple worker processes.",
                  },
                  {
                    title: "Event Driven",
                    desc: "Logs and status updates are persisted as events occur.",
                  },
                ].map((point, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">{point.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
              {/* Abstract Architecture Diagram */}
              <div className="absolute inset-0 border-2 border-dashed border-primary/10 rounded-3xl" />
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="col-span-2 p-4 rounded-xl border border-primary/30 bg-primary/5 text-center">
                  <span className="text-xs font-mono font-bold text-primary">
                    API SERVER (REST)
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card/50 text-center">
                  <span className="text-[10px] font-mono text-muted-foreground">
                    SCHEDULER
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card/50 text-center">
                  <span className="text-[10px] font-mono text-muted-foreground">
                    WORKER POOL
                  </span>
                </div>
                <div className="col-span-2 p-6 rounded-2xl border-2 border-secondary/50 bg-secondary/5 text-center shadow-xl shadow-secondary/10">
                  <span className="text-sm font-mono font-bold text-secondary">
                    AGENT RUNNER
                  </span>
                </div>
                <div className="col-span-2 flex justify-center gap-4">
                  <div className="px-4 py-2 rounded-lg border border-border bg-muted/30">
                    <Database className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="px-4 py-2 rounded-lg border border-border bg-muted/30">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Execution Engine Flow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              title: "Initialization",
              desc: "Load workflow definition and initialize context.",
            },
            {
              title: "Pre-execution",
              desc: "Validate inputs and resolve variable templates.",
            },
            {
              title: "Processing",
              desc: "Dispatch steps to specialized executors (LLM, HTTP, etc.).",
            },
            {
              title: "Post-execution",
              desc: "Normalize outputs and persist execution logs.",
            },
          ].map((step, i) => (
            <Card key={i} className="p-6 border-border/30 bg-card/20 relative">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-background border border-border flex items-center justify-center text-xs font-bold text-primary">
                {i + 1}
              </div>
              <h4 className="font-bold mb-2">{step.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Server className="h-5 w-5 text-secondary" />
          Modular Extensibility
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The architecture is designed to be plug-and-play. You can easily add
          new executors by implementing a standard interface in the{" "}
          <code>backend/src/runner/executors</code> directory. This allows the
          platform to support any third-party service or custom internal logic
          with minimal effort.
        </p>
      </Card>
    </div>
  );
}
