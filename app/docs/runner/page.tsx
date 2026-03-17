import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Layers,
  Zap,
  AlertTriangle,
  Repeat,
  Network,
  PlayCircle,
  Database,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Workflow Runner | AI Agent Automation Docs",
  description:
    "Understand how the workflow runner executes automation pipelines step-by-step.",
};

export default function StepRunnerPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Core Engine
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Step Runner
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The Step Runner is the heart of the platform — responsible for
          claiming tasks, executing workflow steps sequentially, managing
          context, and persisting results.
        </p>
      </div>

      {/* High-level Architecture */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">How the Runner Fits In</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-card/30 space-y-3">
            <Database className="h-6 w-6 text-blue-500" />
            <h4 className="font-bold">Database</h4>
            <p className="text-sm text-muted-foreground">
              Stores workflows, tasks, step definitions, logs, and schedules.
            </p>
          </Card>

          <Card className="p-6 bg-card/30 space-y-3">
            <PlayCircle className="h-6 w-6 text-green-500" />
            <h4 className="font-bold">Scheduler</h4>
            <p className="text-sm text-muted-foreground">
              Creates tasks automatically based on cron or time-based triggers.
            </p>
          </Card>

          <Card className="p-6 bg-card/30 space-y-3">
            <Layers className="h-6 w-6 text-primary" />
            <h4 className="font-bold">Step Runner</h4>
            <p className="text-sm text-muted-foreground">
              Claims tasks and executes steps in strict order.
            </p>
          </Card>

          <Card className="p-6 bg-card/30 space-y-3">
            <Network className="h-6 w-6 text-yellow-500" />
            <h4 className="font-bold">Executor</h4>
            <p className="text-sm text-muted-foreground">
              Dispatches each step to the correct tool implementation.
            </p>
          </Card>
        </div>
      </section>

      {/* Step Lifecycle */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Lifecycle of a Task</h2>

        <div className="relative border-l-2 border-primary/20 ml-4 pl-8 space-y-10">
          {[
            [
              "Polling",
              "Runner polls for PENDING tasks that are ready to execute.",
            ],
            [
              "Claiming",
              "Task is atomically marked RUNNING to prevent double execution.",
            ],
            [
              "Context Init",
              "Initial execution context is created for the task.",
            ],
            [
              "Step Execution",
              "Each step runs sequentially using the shared context.",
            ],
            [
              "Persistence",
              "Step results and logs are written to the database.",
            ],
            ["Completion", "Task is marked COMPLETED or FAILED."],
          ].map(([title, desc]) => (
            <div key={title} className="relative">
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background" />
              <h4 className="font-bold">{title}</h4>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Step Types */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Supported Step Types</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["LLM", "Run prompts with context injection and memory support."],
            ["HTTP", "Call external APIs with dynamic payloads."],
            ["File", "Read and write files inside the sandboxed runtime."],
            ["Email", "Send templated emails using workflow data."],
            ["Delay", "Pause execution for a specified duration."],
            ["Browser", "Take screenshots, evaluate scripts, extract content."],
          ].map(([name, desc]) => (
            <Card key={name} className="p-6 bg-card/30 space-y-2">
              <h4 className="font-bold">{name} Step</h4>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Context & Memory */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Execution Context & Memory</h2>

        <Card className="p-6 bg-card/30 space-y-4">
          <p className="text-muted-foreground">
            Every task maintains a mutable execution context that is passed
            between steps.
          </p>

          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
            <li>
              <code>{"{{last}}"}</code>
              references the previous step output
            </li>
            <li>Named variables can be injected into prompts and payloads</li>
            <li>Agent memory can persist facts across multiple tasks</li>
          </ul>

          <div className="flex items-center gap-2 text-sm text-primary">
            <ArrowRight className="h-4 w-4" />
            Context is the glue that makes workflows intelligent
          </div>
        </Card>
      </section>

      <p className="text-muted-foreground leading-relaxed">
        The Step Runner guarantees deterministic execution: each step runs only
        after the previous one completes successfully, with full access to all
        prior outputs.
      </p>

      {/* Error Handling */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Error Handling & Reliability</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 border-red-500/20 bg-red-500/5 space-y-3">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <h4 className="font-bold">Failures</h4>
            <p className="text-sm text-muted-foreground">
              Errors are captured per step with stack traces and timestamps.
            </p>
          </Card>

          <Card className="p-6 border-blue-500/20 bg-blue-500/5 space-y-3">
            <Repeat className="h-5 w-5 text-blue-500" />
            <h4 className="font-bold">Retries</h4>
            <p className="text-sm text-muted-foreground">
              Steps can retry with backoff before marking the task as failed.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
