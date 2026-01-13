"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Workflow,
  Wrench,
  Clock,
  Database,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

/* -----------------------------
   Expandable Block
------------------------------ */

function InternalBlock({
  icon: Icon,
  title,
  summary,
  details,
}: {
  icon: any;
  title: string;
  summary: string;
  details: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      className="p-8 border-border/50 bg-card/40 cursor-pointer transition hover:bg-card/50"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <Icon className="h-9 w-9 text-primary mb-3" />
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground max-w-3xl">{summary}</p>
        </div>

        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && (
        <ul className="mt-6 list-disc list-inside text-muted-foreground space-y-2">
          {details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}
    </Card>
  );
}

/* -----------------------------
   Page
------------------------------ */

export default function InternalsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto pt-32 pb-20 px-4 text-center">
        <Badge
          variant="outline"
          className="mb-6 px-4 py-1.5 border-primary/20 bg-primary/5 text-primary"
        >
          System Internals
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          No Magic. Just Execution.
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This page documents how AI Agent Automation actually runs workflows —
          from task creation to final persistence — with nothing hidden.
        </p>
      </section>

      {/* Execution Spine */}
      <section className="container mx-auto pb-24 px-4">
        <Card className="p-10 border-border/50 bg-card/30">
          <h2 className="text-3xl font-bold mb-4">
            The Execution Spine
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl">
            Every workflow execution follows the same immutable path.  
            No shortcuts. No branching logic injected by agents.
          </p>

          <pre className="mt-6 rounded-xl bg-black/40 p-6 text-sm text-muted-foreground overflow-x-auto">
{`trigger → task → agent runner → step executor → persistence`}
          </pre>
        </Card>
      </section>

      {/* Core Internals */}
      <section className="container mx-auto pb-24 px-4 space-y-8">
        <InternalBlock
          icon={Cpu}
          title="Agent Runner"
          summary="The top-level orchestrator that executes workflows deterministically."
          details={[
            "Receives a task ID and workflow definition",
            "Loads agent configuration (model, tools, temperature)",
            "Maintains isolated execution context",
            "Executes steps strictly in declared order",
            "Never mutates workflow definitions at runtime",
          ]}
        />

        <InternalBlock
          icon={Workflow}
          title="Step Executor"
          summary="Runs exactly one step with strict input/output contracts."
          details={[
            "Validates inputs before execution",
            "Runs step logic in isolation",
            "Captures output or error explicitly",
            "Persists result immediately",
            "Stops execution on first failure",
          ]}
        />

        <InternalBlock
          icon={Wrench}
          title="Tool Registry"
          summary="A controlled extension layer for agent capabilities."
          details={[
            "Tools are explicitly registered",
            "Each tool defines its input schema",
            "No implicit filesystem or network access",
            "Executed via sandboxed code paths",
            "Designed for future permission boundaries",
          ]}
        />

        <InternalBlock
          icon={Clock}
          title="Scheduler"
          summary="Time-based trigger system — not an execution engine."
          details={[
            "Evaluates cron expressions",
            "Creates tasks at scheduled times",
            "Never executes workflow logic directly",
            "Idempotent by design",
          ]}
        />

        <InternalBlock
          icon={Database}
          title="Persistence & Logs"
          summary="Execution history is a first-class system artifact."
          details={[
            "Workflows are immutable definitions",
            "Tasks are immutable execution records",
            "Step outputs are permanently stored",
            "Logs enable replay and debugging",
          ]}
        />
      </section>

      {/* Invariants */}
      <section className="container mx-auto pb-24 px-4">
        <Card className="p-12 border-border/50 bg-card/40 text-center">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">
            Engine Invariants (Never Broken)
          </h3>

          <ul className="text-lg text-muted-foreground space-y-2 max-w-3xl mx-auto">
            <li>No hidden retries</li>
            <li>No implicit agent state</li>
            <li>No cross-task memory leakage</li>
            <li>No mutation of past executions</li>
          </ul>
        </Card>
      </section>

      {/* Why This Matters */}
      <section className="container mx-auto pb-32 px-4 text-center">
        <Card className="p-12 md:p-16 border-border/50 bg-card/30">
          <h3 className="text-3xl font-bold mb-4">
            Why This Design Exists
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AI systems become dangerous when behavior cannot be explained.
            These internals exist to ensure every execution is observable,
            reproducible, and auditable — even months later.
          </p>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
