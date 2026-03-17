import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Globe, Code, Box, Terminal, ArrowRight } from "lucide-react";

export const metadata = {
  title: "API Reference | AI Agent Automation Docs",
  description:
    "Complete API reference for the AI Agent Automation backend and workflow engine.",
};

export default function APIReferenceDocs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Reference
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          API Reference (REST)
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Integrate the AI Agent Automation Platform into your own applications
          using our structured REST API.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Introduction</h2>
        <p className="text-muted-foreground leading-relaxed">
          The platform exposes a versioned REST API (v1) for managing workflows,
          agents, schedules, and documents. All requests and responses use JSON.
        </p>
        <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Globe className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Base URL</h4>
            <code className="text-xs font-mono text-muted-foreground">
              http://localhost:5000/api/v1
            </code>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {[
          {
            title: "Workflows",
            icon: Box,
            endpoints: [
              {
                method: "GET",
                path: "/workflows",
                desc: "List all workflow definitions.",
              },
              {
                method: "POST",
                path: "/workflows",
                desc: "Create a new workflow definition.",
              },
              {
                method: "GET",
                path: "/workflows/:id",
                desc: "Get details of a specific workflow.",
              },
              {
                method: "POST",
                path: "/workflows/run",
                desc: "Trigger a manual execution of a workflow.",
              },
            ],
          },
          {
            title: "Agents",
            icon: Terminal,
            endpoints: [
              {
                method: "GET",
                path: "/agents",
                desc: "List all registered agent profiles.",
              },
              {
                method: "POST",
                path: "/agents",
                desc: "Register or update an agent profile.",
              },
              {
                method: "POST",
                path: "/agents/chat",
                desc: "Send a direct prompt to an agent.",
              },
            ],
          },
          {
            title: "Documents (RAG)",
            icon: Code,
            endpoints: [
              {
                method: "POST",
                path: "/documents/upload",
                desc: "Upload and ingest a PDF or text file.",
              },
              {
                method: "GET",
                path: "/documents/:id",
                desc: "Get ingestion status and metadata.",
              },
              {
                method: "POST",
                path: "/documents/query",
                desc: "Perform semantic search across documents.",
              },
            ],
          },
        ].map((section, i) => (
          <div key={i} className="space-y-6">
            <div className="flex items-center gap-2">
              <section.icon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{section.title}</h3>
            </div>
            <div className="grid gap-4">
              {section.endpoints.map((ep, j) => (
                <Card
                  key={j}
                  className="p-4 border-border/50 bg-card/30 hover:bg-card/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Badge
                        className={`${ep.method === "POST" ? "bg-success/20 text-success" : "bg-primary/20 text-primary"} border-none font-mono`}
                      >
                        {ep.method}
                      </Badge>
                      <code className="text-sm font-mono font-bold">
                        {ep.path}
                      </code>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {ep.desc}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Standard Error Response</h2>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              error-response.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "success": false,
  "error": {
    "code": "WORKFLOW_NOT_FOUND",
    "message": "The requested workflow ID does not exist.",
    "details": { "workflow_id": "wf_123" }
  }
}`}</code>
          </pre>
        </Card>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-secondary" />
          Interactive Documentation
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The backend automatically generates a Swagger / OpenAPI UI. When the
          server is running in development mode, you can access it at{" "}
          <code>http://localhost:5000/api-docs</code> to test endpoints
          directly.
        </p>
      </Card>
    </div>
  );
}
