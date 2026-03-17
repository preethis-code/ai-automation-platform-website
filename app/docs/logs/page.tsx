import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Shield, History, Activity, Code, Bug } from "lucide-react";

export const metadata = {
  title: "Execution Logs | AI Agent Automation Docs",
  description:
    "Inspect workflow execution logs, step results, and debugging information.",
};

export default function ExecutionLogsPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Observability & Debugging
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Execution Logs
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Every workflow execution produces a complete, immutable audit trail —
          allowing you to debug failures, analyze performance, and understand
          agent behavior at every step.
        </p>
      </div>

      {/* Why Logs Matter */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Why Execution Logs Matter</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          In AI automation, failures are inevitable — models hallucinate, APIs
          timeout, tools misbehave. This platform treats observability as a{" "}
          <strong className="text-foreground">first-class feature</strong>. Logs
          are not an afterthought; they are the foundation for trust, safety,
          and reproducibility.
        </p>
      </section>

      {/* Observability Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Observability Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 border-border/50 bg-card/30 text-center space-y-2">
            <History className="h-8 w-8 mx-auto text-primary opacity-80" />
            <h4 className="font-semibold">Run History</h4>
            <p className="text-xs text-muted-foreground">
              Every workflow trigger creates a permanent execution record.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30 text-center space-y-2">
            <Activity className="h-8 w-8 mx-auto text-green-500 opacity-80" />
            <h4 className="font-semibold">Step-Level Status</h4>
            <p className="text-xs text-muted-foreground">
              Track success, failure, retries, and timing for each step.
            </p>
          </Card>
          <Card className="p-4 border-border/50 bg-card/30 text-center space-y-2">
            <Code className="h-8 w-8 mx-auto text-blue-500 opacity-80" />
            <h4 className="font-semibold">Payload Inspection</h4>
            <p className="text-xs text-muted-foreground">
              Full visibility into inputs, outputs, and intermediate results.
            </p>
          </Card>
        </div>
      </section>

      {/* Log Structure */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Log Structure</h2>
        <p className="text-muted-foreground max-w-3xl">
          Logs are stored per task execution and indexed by workflow, step, and
          timestamp. This enables efficient querying, debugging, and replay.
        </p>

        <div className="rounded-md border border-border/50 overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead>Field</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  field: "trace_id",
                  desc: "Unique identifier for a full workflow execution",
                  ex: "tr_8273ab91",
                },
                {
                  field: "step_id",
                  desc: "The workflow step being executed",
                  ex: "email_send_01",
                },
                {
                  field: "status",
                  desc: "Execution result of the step",
                  ex: "SUCCESS | FAILED | RETRY",
                },
                {
                  field: "latency",
                  desc: "Execution time in milliseconds",
                  ex: "482ms",
                },
                {
                  field: "payload",
                  desc: "Input parameters and output results",
                  ex: "{ input, output }",
                },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-mono text-primary text-xs">
                    {row.field}
                  </TableCell>
                  <TableCell className="text-sm">{row.desc}</TableCell>
                  <TableCell className="font-mono text-muted-foreground text-xs">
                    {row.ex}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <h2 className="text-2xl font-bold">Where Logs Are Stored</h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        Execution logs are persisted locally in MongoDB under each task record.
        They are indexed by workflow ID, task ID, step ID, and timestamp.
      </p>

      {/* Debugging Flow */}
      <Card className="p-6 border-red-500/20 bg-red-500/5">
        <div className="flex gap-4">
          <Bug className="h-6 w-6 text-red-500 shrink-0" />
          <div className="space-y-2">
            <h4 className="font-bold">Failure Debugging Workflow</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When a workflow fails, inspect the failed step’s log entry to view
              the exact error, model output, and tool response. You can replay
              executions with identical context to validate fixes or tune
              prompts without re-triggering upstream steps.
            </p>
          </div>
        </div>
      </Card>

      {/* Trust & Safety */}
      <Card className="p-6 border-blue-500/20 bg-blue-500/5">
        <div className="flex gap-4">
          <Shield className="h-6 w-6 text-blue-500 shrink-0" />
          <div className="space-y-2">
            <h4 className="font-bold">Trust & Compliance</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Because all logs are stored locally and never leave your
              environment, this system provides stronger privacy guarantees than
              cloud-hosted automation platforms. This is critical for sensitive
              workflows and regulated data.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
