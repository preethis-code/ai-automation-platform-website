import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Installation Guide | AI Agent Automation",
  description:
    "Install AI Agent Automation locally and run the workflow automation engine with agents, tools, and scheduling.",
};

export default function InstallationDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Get Started
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Set up the AI Agent Automation Platform locally. No cloud required.
          Everything runs on your machine.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Prerequisites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Node.js 18.x or higher",
            "MongoDB (local or Atlas)",
            "npm or yarn",
            "LLM API Key (OpenAI, Gemini, Groq, etc.)",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-muted/20"
            >
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Setup */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Setup Steps</h2>

        {/* Step 1 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              1
            </div>
            Clone the Repository
          </h3>
          <Card className="p-4 bg-muted/30 border-border/50">
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                git clone https://github.com/vmDeshpande/ai-agent-automation.git
                {"\n"}
                cd ai-agent-automation
              </code>
            </pre>
          </Card>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              2
            </div>
            Backend Configuration
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Install backend dependencies and configure environment variables.
          </p>
          <Card className="p-4 bg-muted/30 border-border/50">
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                cd backend{"\n"}
                npm install{"\n"}
                cp .env.example .env
              </code>
            </pre>
          </Card>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              3
            </div>
            Run Backend & Worker
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            The backend handles APIs and state. The worker executes workflows.
            Run them in <strong>separate terminals</strong>.
          </p>
          <Card className="p-4 bg-muted/30 border-border/50 space-y-3">
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                # Terminal 1 (API server){"\n"}
                npm run dev
              </code>
            </pre>
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                # Terminal 2 (Worker / Step Runner){"\n"}
                npm run worker
              </code>
            </pre>
          </Card>
        </div>

        {/* Step 4 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
              4
            </div>
            Start the Frontend
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            The frontend provides the dashboard and workflow UI.
          </p>
          <Card className="p-4 bg-muted/30 border-border/50">
            <pre className="text-sm font-mono text-muted-foreground">
              <code>
                cd frontend{"\n"}
                npm install{"\n"}
                npm run dev
              </code>
            </pre>
          </Card>
        </div>
      </div>

      {/* Success */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Verify Installation</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          If everything is running correctly:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>
            Frontend is available at <strong>http://localhost:3000</strong>
          </li>
          <li>
            Backend API runs on <strong>http://localhost:5000</strong>
          </li>
          <li>Worker logs show step execution activity</li>
        </ul>
      </div>
    </div>
  );
}
