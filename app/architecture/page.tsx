import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ArchitectureCanvas from "@/components/architecture/architecture-canvas";
import {
  Layers,
  PlayCircle,
  Wrench,
  Clock,
  Database,
  ShieldCheck,
} from "lucide-react";

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto pt-32 pb-20 px-4 text-center">
        <Badge
          variant="outline"
          className="mb-6 px-4 py-1.5 border-primary/20 bg-primary/5 text-primary"
        >
          System Architecture
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Designed for Execution,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {" "}
            Not Guesswork
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          AI Agent Automation is built as a deterministic execution engine with
          strict boundaries between orchestration, execution, and observation.
        </p>
      </section>

      {/* High-Level Flow */}
      <section className="container mx-auto pb-24 px-4">
        <Card className="p-8 md:p-12 border-border/50 bg-card/40">
          <h2 className="text-3xl font-bold mb-4">High-Level Execution Flow</h2>

          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            This diagram represents the actual execution boundaries in the
            system. Every block is a real component. Every connection is a
            controlled data flow. You can drag nodes to explore the
            architecture.
          </p>

          <ArchitectureCanvas />

          <p className="mt-6 text-muted-foreground max-w-3xl">
            Unlike static diagrams, this canvas reflects how execution actually
            happens — with strict separation between orchestration, execution,
            scheduling, and persistence.
          </p>
        </Card>
      </section>

      {/* Core Components */}
      <section className="container mx-auto pb-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* API */}
          <Card className="p-8 border-border/50 bg-card/30">
            <PlayCircle className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">REST API Layer</h3>
            <p className="text-muted-foreground leading-relaxed">
              Responsible only for validation, persistence, and orchestration.
              The API never executes workflow logic directly.
            </p>
            <ul className="mt-4 list-disc list-inside text-muted-foreground">
              <li>Creates workflows & tasks</li>
              <li>Persists execution state</li>
              <li>Triggers engine execution</li>
            </ul>
          </Card>

          {/* Agent Runner */}
          <Card className="p-8 border-border/50 bg-card/30">
            <Layers className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Agent Runner</h3>
            <p className="text-muted-foreground leading-relaxed">
              The central orchestrator. It executes workflow steps in strict
              order and enforces deterministic behavior.
            </p>
            <ul className="mt-4 list-disc list-inside text-muted-foreground">
              <li>Sequential step execution</li>
              <li>Error propagation</li>
              <li>Agent context isolation</li>
            </ul>
          </Card>

          {/* Step Executor */}
          <Card className="p-8 border-border/50 bg-card/30">
            <Wrench className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Step Executor</h3>
            <p className="text-muted-foreground leading-relaxed">
              Executes a single step with clearly defined inputs and outputs.
              Each step is sandboxed by type.
            </p>
            <ul className="mt-4 list-disc list-inside text-muted-foreground">
              <li>LLM calls</li>
              <li>HTTP requests</li>
              <li>Tool execution</li>
              <li>Delay / timing steps</li>
            </ul>
          </Card>

          {/* Scheduler */}
          <Card className="p-8 border-border/50 bg-card/30">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Scheduler</h3>
            <p className="text-muted-foreground leading-relaxed">
              A cron-based trigger system that creates tasks without coupling
              execution logic to time.
            </p>
            <ul className="mt-4 list-disc list-inside text-muted-foreground">
              <li>Cron expressions</li>
              <li>Background execution</li>
              <li>No UI dependency</li>
            </ul>
          </Card>

          {/* Persistence */}
          <Card className="p-8 border-border/50 bg-card/30">
            <Database className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Persistence Layer</h3>
            <p className="text-muted-foreground leading-relaxed">
              MongoDB stores immutable execution history alongside mutable
              workflow definitions.
            </p>
            <ul className="mt-4 list-disc list-inside text-muted-foreground">
              <li>Workflows</li>
              <li>Tasks</li>
              <li>Agents</li>
              <li>Execution logs</li>
            </ul>
          </Card>

          {/* Safety */}
          <Card className="p-8 border-border/50 bg-card/30">
            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Safety Boundaries</h3>
            <p className="text-muted-foreground leading-relaxed">
              The system is designed so failures are isolated, observable, and
              recoverable.
            </p>
            <ul className="mt-4 list-disc list-inside text-muted-foreground">
              <li>No hidden retries</li>
              <li>No implicit agent state</li>
              <li>No cross-task leakage</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="container mx-auto pb-32 px-4 text-center">
        <Card className="p-12 md:p-16 border-border/50 bg-card/40">
          <h3 className="text-3xl font-bold mb-4">
            Why These Boundaries Matter
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Clear separation of concerns makes the system easier to debug,
            extend, audit, and trust. This is what allows AI automation to move
            from demos to production systems.
          </p>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
