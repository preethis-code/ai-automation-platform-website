import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Wrench,
  Globe,
  Mail,
  FileText,
  Terminal,
  Clock,
  Code,
} from "lucide-react";

export const metadata = {
  title: "Automation Tools | AI Agent Automation Docs",
  description:
    "Extend AI workflows with automation tools including HTTP requests, file operations, browser automation, and email integrations.",
};

export default function ToolsDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Step Types
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Agent Tools & Step Types
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Pluggable modules that extend agent capabilities with actions like
          HTTP requests, email, file operations, and more.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Available Step Types</h2>
        <p className="text-muted-foreground">
          The platform supports a rich library of built-in step types. Each type
          is designed to handle a specific automation task with full error
          handling and logging.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Code,
              type: "LLM",
              title: "LLM / Agent Step",
              desc: "Invoke an AI agent with a prompt, tools, and context. Returns structured reasoning and output.",
              example: '{ "type": "agent", "prompt": "Analyze this data..." }',
            },
            {
              icon: Globe,
              type: "HTTP",
              title: "HTTP Request",
              desc: "Make REST API calls with full support for headers, authentication, and response parsing.",
              example:
                '{ "type": "http", "method": "GET", "url": "https://api.example.com" }',
            },
            {
              icon: Mail,
              type: "EMAIL",
              title: "Email Automation",
              desc: "Send emails via SMTP or fetch emails using IMAP. Supports attachments and templates.",
              example:
                '{ "type": "email", "to": "user@example.com", "subject": "Report" }',
            },
            {
              icon: FileText,
              type: "FILE",
              title: "File Operations",
              desc: "Read, write, or delete files. Supports JSON, CSV, TXT, and binary formats.",
              example:
                '{ "type": "file", "action": "write", "path": "/data/output.json" }',
            },
            {
              icon: Globe,
              type: "BROWSER",
              title: "Browser Automation",
              desc: "Scrape websites, fill forms, take screenshots using headless Playwright.",
              example:
                '{ "type": "browser", "action": "navigate", "url": "https://example.com" }',
            },
            {
              icon: Clock,
              type: "DELAY",
              title: "Delay / Wait",
              desc: "Pause workflow execution for a specified duration or until a condition is met.",
              example: '{ "type": "delay", "duration": 5000 }',
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-6 border-border/50 bg-card/30 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <Badge variant="secondary" className="text-xs font-mono">
                    {item.type}
                  </Badge>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {item.desc}
              </p>
              <Card className="p-3 bg-muted/50 border-border/30">
                <pre className="text-xs font-mono text-muted-foreground overflow-x-auto no-scrollbar">
                  {item.example}
                </pre>
              </Card>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          Conditional Logic & Branching
          <Badge variant="outline" className="text-primary border-primary/40">
            Under Development
          </Badge>
        </h2>
        <p className="text-muted-foreground">
          Use conditional steps to create dynamic workflows that adapt based on
          previous step outputs or external data.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              conditional-example.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "type": "condition",
  "condition": "{{steps.api_call.output.status}} === 200",
  "if_true": [
    { "type": "email", "to": "success@example.com", "subject": "Success!" }
  ],
  "if_false": [
    { "type": "email", "to": "error@example.com", "subject": "Failed" }
  ]
}`}</code>
          </pre>
        </Card>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-3">Building Custom Tools</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You can extend the platform by writing custom tool executors in
          Node.js. Each tool receives structured input, executes its logic, and
          returns validated output. See the /src/runner/executors directory in
          the repository for examples.
        </p>
      </Card>
    </div>
  );
}
