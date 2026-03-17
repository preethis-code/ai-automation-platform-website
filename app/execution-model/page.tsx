import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  ListOrdered,
  CheckCircle,
  XCircle,
  RotateCcw,
  AlertTriangle,
} from "lucide-react";
import { ExecutionCanvas } from "@/components/execution-model/execution-canvas";

export const metadata = {
  title: "Workflow Execution Model | AI Agent Automation",
  description:
    "Learn how workflows execute deterministically in AI Agent Automation including task runners, step execution, and runtime context.",
};

export default function ExecutionModelPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto pt-32 pb-20 px-4 text-center">
        <Badge
          variant="outline"
          className="mb-6 px-4 py-1.5 border-primary/20 bg-primary/5 text-primary"
        >
          Execution Model
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Deterministic Execution,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {" "}
            Visualized
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Workflows run as structured programs. Every step, decision, and
          failure is explicit.
        </p>
      </section>

      {/* Visual Execution Principles */}
      <section className="container mx-auto pb-32 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Explanation */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Execution Is a Program,
              <span className="text-primary"> Not a Conversation</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Every workflow run becomes a <strong>Task</strong>. Tasks execute
              like deterministic programs — not probabilistic chats. Each step
              is ordered, observable, and final.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: ListOrdered,
                  title: "Strict Step Order",
                  desc: "Steps execute sequentially. No future access. No branching unless explicitly defined.",
                },
                {
                  icon: CheckCircle,
                  title: "Immutable Outputs",
                  desc: "Once a step completes, its output is frozen and permanently recorded.",
                },
                {
                  icon: XCircle,
                  title: "Fail-Fast Semantics",
                  desc: "Execution stops immediately on failure. No hidden retries or silent recovery.",
                },
                {
                  icon: RotateCcw,
                  title: "Explicit Re-runs",
                  desc: "Re-running a workflow creates a new task. History is never mutated.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/30"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Metaphor */}
          <Card className="p-8 border-border/50 bg-muted/20 relative overflow-hidden h-[480px] flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              {/* Rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping opacity-20" />
              <div className="absolute inset-8 border-2 border-secondary/20 rounded-full animate-pulse opacity-40" />
              <div className="absolute inset-16 border-2 border-primary/20 rounded-full animate-ping opacity-20 delay-300" />

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background p-6 rounded-3xl border-2 border-primary shadow-2xl z-10">
                  <Play className="h-12 w-12 text-primary" />
                </div>
              </div>

              {/* Orbiting Guarantees */}
              {[
                {
                  icon: ListOrdered,
                  color: "text-primary",
                  pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-4",
                },
                {
                  icon: CheckCircle,
                  color: "text-success",
                  pos: "right-0 top-1/2 translate-x-4 -translate-y-1/2",
                },
                {
                  icon: XCircle,
                  color: "text-error",
                  pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4",
                },
                {
                  icon: RotateCcw,
                  color: "text-secondary",
                  pos: "left-0 top-1/2 -translate-x-4 -translate-y-1/2",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`absolute ${item.pos} bg-card p-3 rounded-xl border border-border shadow-lg z-20`}
                >
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Canvas */}
      <section className="container mx-auto pb-24 px-4">
        <ExecutionCanvas /> <br />
        <div className="flex items-start gap-3 mb-6 max-w-2xl">
          <div className="mt-2 h-px w-8 bg-primary/60" />
          <p className="text-sm text-muted-foreground">
            This trace shows how a workflow executes as a deterministic program
            — progressing step by step, succeeding linearly, or stopping
            immediately on failure.
          </p>
        </div>
      </section>

      {/* Rules */}
      <section className="container mx-auto pb-24 px-4">
        <h2 className="text-3xl font-bold mb-8">Execution Guarantees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 border-border/50 bg-card/30">
            <CheckCircle className="h-10 w-10 text-success mb-4" />
            <h3 className="text-2xl font-bold mb-3">Success is Linear</h3>
            <p className="text-muted-foreground">
              Steps execute strictly in order. Outputs are persisted and passed
              forward without mutation.
            </p>
          </Card>

          <Card className="p-8 border-border/50 bg-card/30">
            <XCircle className="h-10 w-10 text-error mb-4" />
            <h3 className="text-2xl font-bold mb-3">Failure is Final</h3>
            <p className="text-muted-foreground">
              Execution stops immediately on failure. No retries, no guessing,
              no silent recovery.
            </p>
          </Card>

          <Card className="p-8 border-border/50 bg-card/30">
            <RotateCcw className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Re-runs are New Tasks</h3>
            <p className="text-muted-foreground">
              Every run creates a new immutable task. History is preserved.
            </p>
          </Card>

          <Card className="p-8 border-border/50 bg-card/30">
            <AlertTriangle className="h-10 w-10 text-warning mb-4" />
            <h3 className="text-2xl font-bold mb-3">No Hidden AI Magic</h3>
            <p className="text-muted-foreground">
              Agents cannot invent steps, retry silently, or change workflows
              during execution.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
