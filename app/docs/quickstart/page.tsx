import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Terminal, Rocket, CheckCircle2, Cpu, Workflow } from "lucide-react";

export const metadata = {
  title: "Quickstart Guide | AI Agent Automation Docs",
  description:
    "Get started quickly with AI Agent Automation by installing the platform and running your first AI workflow.",
};

export default function QuickstartPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Getting Started
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Quickstart
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Build and run your first AI-powered automation workflow in minutes —
          fully local, privacy-first, and under your control.
        </p>
      </div>

      {/* Intro */}
      <Card className="p-6 bg-card/40 border-border/60">
        <p className="text-muted-foreground leading-relaxed">
          This platform is designed around <strong>local AI agents</strong> and
          <strong> deterministic workflows</strong>. Nothing is hidden, nothing
          is sent to third-party SaaS platforms by default.
          <br />
          <br />
          You define agents, compose workflows, and execute tasks using a runner
          that you own and operate.
        </p>
      </Card>

      {/* Step 1 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Cpu className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">1. Create an Agent</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          An agent represents an autonomous unit that can reason, use tools, and
          execute steps. Agents can send emails, read/write files, browse the
          web, or call language models.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-blue-400">
            {`{
  "name": "Research Agent",
  "description": "Summarizes and analyzes information",
  "tools": ["llm", "email", "file", "browser"]
}`}
          </pre>
        </div>
      </section>

      {/* Step 2 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Workflow className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">2. Define a Workflow</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          A workflow is a sequence of steps executed in order. Each step
          produces structured output that feeds into the next step.
        </p>

        <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-green-400">
            {`{
  "name": "Daily Report Workflow",
  "steps": [
    { "type": "llm", "prompt": "Summarize today's updates" },
    { "type": "file", "action": "write", "path": "./runtime/report.txt" },
    { "type": "email", "to": "me@example.com" }
  ]
}`}
          </pre>
        </div>
      </section>

      {/* Step 3 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Rocket className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">3. Execute with the Runner</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          The runner picks up tasks, executes each step, logs output, and
          updates execution state in real time.
        </p>

        <Card className="p-6 bg-card/40 border-border/60">
          <div className="flex items-center gap-3 font-mono text-sm text-primary">
            <Terminal className="h-4 w-4" />
            <span>npm run worker</span>
          </div>

          <div className="mt-4 space-y-2 font-mono text-sm">
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle2 className="h-4 w-4" />
              <span>Task claimed: workflow_01</span>
            </div>
            <div className="text-muted-foreground">
              → Executing step: LLM prompt
            </div>
            <div className="text-muted-foreground">
              → Writing output to runtime/
            </div>
          </div>
        </Card>
      </section>

      {/* Explanation Lifecycle */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">
          What Happens When You Run a Workflow
        </h2>

        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Every workflow execution follows a deterministic lifecycle.
          Understanding this flow helps you debug failures, optimize steps, and
          reason about agent behavior with confidence.
          <br />
          <br />
          When you click “Run Workflow”, the platform follows a deterministic
          execution path. Here’s what happens under the hood:
        </p>

        <div className="relative border-l-2 border-primary/20 ml-4 pl-8 space-y-10">
          {[
            [
              "Workflow Initialization",
              "Runner initializes the workflow and its steps.",
            ],
            ["Task Claiming", "Runner claims the task for execution."],
            [
              "Step Runner Initialization",
              "Step runner sets up execution context.",
            ],
            [
              "Tool Execution",
              "Each step is dispatched to the appropriate tool implementation.",
            ],
            ["Logs", "Execution logs are recorded for each step."],
            ["Status", "Task status is updated in real-time."],
          ].map(([title, desc]) => (
            <div key={title} className="relative">
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background" />
              <h4 className="font-bold">{title}</h4>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <h2 className="text-2xl font-bold">
        How the System Works (Mental Model)
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Think of the platform as three coordinated systems working together:
      </p>
      <ul className="list-disc pl-6 text-muted-foreground space-y-2">
        <li>
          <strong>Workflows</strong> define what should happen
        </li>
        <li>
          <strong>Tasks</strong> are runtime executions of workflows
        </li>
        <li>
          <strong>Agents & Tools</strong> perform each step deterministically
        </li>
      </ul>

      {/* Final Note */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <p className="text-muted-foreground">
          🎯 That’s it. You now have a fully local AI automation system running
          under your control. No vendor lock-in, no black boxes, no hidden
          costs.
        </p>
      </Card>
    </div>
  );
}
