import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Workflow, Code, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Workflow Engine | AI Agent Automation Docs",
  description:
    "Understand how AI Agent Automation workflows orchestrate LLM reasoning, tools, and automation pipelines.",
};

export default function WorkflowsDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Core Concepts
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Workflow Automation
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Deterministic execution of multi-step pipelines including LLM
          reasoning, HTTP calls, and file operations.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">How Workflows Work</h2>
        <p className="text-muted-foreground leading-relaxed">
          Workflows are defined as ordered collections of steps. Each step
          represents a discrete action, which can be an AI agent reasoning task,
          a system tool execution, or a control flow operation.
        </p>

        <div className="grid gap-6 mt-8">
          {[
            {
              title: "Step-by-Step Execution",
              desc: "Every step is executed in sequence with full input/output validation. If a step fails, the entire workflow lifecycle is managed according to defined error policies.",
            },
            {
              title: "Structured Data Flow",
              desc: (
                <>
                  Each step receives a shared execution context. Outputs from
                  previous steps are automatically injected into later steps
                  using template variables such as{" "}
                  <code className="px-1 mx-1 rounded bg-muted font-mono text-sm">
                    {"{{last}}"}
                  </code>{" "}
                  or{" "}
                  <code className="px-1 mx-1 rounded bg-muted font-mono text-sm">
                    {"{{steps[n].output}}"}
                  </code>
                  .
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card/30"
            >
              <CheckCircle2 className="h-6 w-6 text-success shrink-0" />
              <div className="space-y-1">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Execution Lifecycle</h2>

        <ol className="space-y-4 text-muted-foreground list-decimal pl-6">
          <li>A workflow is created and stored with its step definitions.</li>
          <li>
            When triggered (manual, scheduler, or webhook), a new task is
            generated.
          </li>
          <li>
            The task is picked up by the Step Runner and executed sequentially.
          </li>
          <li>
            Each step produces an output that is stored and passed forward.
          </li>
          <li>Execution logs are persisted for inspection and debugging.</li>
          <li>
            The workflow completes with a final status: completed or failed.
          </li>
        </ol>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Supported Step Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "LLM Reasoning & Chat",
            "HTTP Request (GET/POST/PUT)",
            "Email Automation (SMTP/IMAP)",
            "File System (Read/Write/Append)",
            "Browser Automation (Playwright)",
            "Delay & Control Steps",
          ].map((type, i) => (
            <Card
              key={i}
              className="p-4 border-border/50 bg-card/30 flex items-center gap-3"
            >
              <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                <Workflow className="h-4 w-4" />
              </div>
              <span className="font-medium">{type}</span>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Example Definition</h2>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              workflow.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
    "id": "ai-research-agent",
    "name": "AI Research Agent",
    "description": "Automatically research a topic and summarize key findings.",
    "category": "AI",
    "icon": "🧠",
    "tags": [
        "research",
        "ai"
    ],
    "steps": [
        {
            "name": "Research Topic",
            "type": "llm",
            "prompt": "Research the topic: {{input.topic}} and produce detailed findings, facts, and key insights.",
            "useMemory": false,
            "memoryTopK": 5
        },
        {
            "name": "Summarize Findings",
            "type": "llm",
            "prompt": "Using the following research results, produce a clear and concise summary with bullet points:\n\n{{results}}",
            "useMemory": false,
            "memoryTopK": 5
        },
        {
            "name": "Send Email",
            "type": "email",
            "to": "test@gmail.com",
            "subject": "Testing Subject",
            "text": "This is Ai Agent Automation testing email."
        }
    ]
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Failure Handling</h2>

        <p className="text-muted-foreground leading-relaxed">
          If any step fails during execution, the workflow is immediately marked
          as failed. The runner records the error, preserves all previous
          outputs, and stops further execution to ensure deterministic behavior.
        </p>

        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Failed steps are logged with stack traces</li>
          <li>Previous step outputs remain accessible</li>
          <li>No silent retries or hidden state changes</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold">Data Flow & Templating</h2>
      <p className="text-muted-foreground leading-relaxed">
        Workflow steps communicate through a shared execution context. Each step
        can reference previous outputs using template variables, enabling
        powerful data pipelines without writing custom glue code.
      </p>
    </div>
  );
}
