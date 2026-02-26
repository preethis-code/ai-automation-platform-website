import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Settings, Key, Database, Globe, Code, Shield } from "lucide-react";

export default function ConfigurationDocs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Setup
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Configuration & Environment
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Complete guide to configuring the AI Agent Automation Platform using
          environment variables and configuration files.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">The .env File</h2>
        <p className="text-muted-foreground leading-relaxed">
          The primary way to configure the backend engine is through environment
          variables. Copy the
          <code>.env.example</code> file to <code>.env</code> in the{" "}
          <code>backend</code> directory.
        </p>

        <div className="space-y-6">
          {[
            {
              title: "Server Settings",
              icon: Globe,
              vars: [
                {
                  name: "PORT",
                  desc: "The port the Express server will listen on (default: 5000).",
                },
                {
                  name: "NODE_ENV",
                  desc: "Set to 'production' or 'development'.",
                },
              ],
            },
            {
              title: "Database Configuration",
              icon: Database,
              vars: [
                {
                  name: "MONGO_URI",
                  desc: "The connection string for your MongoDB instance.",
                },
              ],
            },
            {
              title: "AI Provider Settings",
              icon: Key,
              vars: [
                {
                  name: "OLLAMA_HOST",
                  desc: "Base URL of your local Ollama instance (e.g., http://localhost:11434). Required when using the 'ollama' provider.",
                },
                {
                  name: "GROQ_API_KEY",
                  desc: "API key for the Groq provider. Required when using Groq-hosted LLM models.",
                },
                {
                  name: "OPENAI_API_KEY",
                  desc: "API key for OpenAI models (e.g., gpt-4o, gpt-4o-mini). Required when using the 'openai' provider.",
                },
                {
                  name: "GEMINI_API_KEY",
                  desc: "API key for Google Gemini models (e.g., gemini-2.5-flash). Required when using the 'gemini' provider.",
                },
                {
                  name: "HF_API_KEY",
                  desc: "Optional: API key for Hugging Face Inference API. Required only when using the 'huggingface' provider.",
                },
              ],
            },
            {
              title: "Security & Secret",
              icon: Shield,
              vars: [
                {
                  name: "JWT_SECRET",
                  desc: "A strong secret for signing authentication tokens.",
                },
              ],
            },
          ].map((section, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
              <div className="grid gap-3">
                {section.vars.map((v, j) => (
                  <div
                    key={j}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg border border-border/50 bg-card/30"
                  >
                    <code className="text-sm font-mono text-primary font-bold min-w-[180px]">
                      {v.name}
                    </code>
                    <span className="text-sm text-muted-foreground">
                      {v.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Advanced Configuration</h2>
        <p className="text-muted-foreground leading-relaxed">
          For more granular control, you can modify the configuration objects in{" "}
          <code>src/config/index.ts</code>. This includes settings for:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Worker Settings",
              desc: "Adjust the number of concurrent workflow executions and retry intervals.",
            },
            {
              title: "Embedding Config",
              desc: "Switch between different embedding models and chunk sizes for RAG.",
            },
            {
              title: "Logging Policies",
              desc: "Configure log retention periods and verbosity levels.",
            },
            {
              title: "Scheduler Intervals",
              desc: "Change how often the scheduler polls for pending jobs.",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 border-border/50 bg-card/30 space-y-2">
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Example .env</h2>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              .env
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`# Server
PORT=5000
MONGO_URI=
JWT_SECRET=

# ---------------------------------------
# AI Providers
# Only configure providers you plan to use.
# The system auto-detects availability based on these variables.
# ---------------------------------------

# Cloud Providers
GROQ_API_KEY=
OPENAI_API_KEY=
GEMINI_API_KEY=
HF_API_KEY=

# Local Provider (Ollama)
OLLAMA_HOST=http://localhost:11434

# ---------------------------------------
# Worker Runtime Settings
# ---------------------------------------

WORKER_POLL_INTERVAL_MS=2000   # Poll interval in ms (default: 2000)
WORKER_BATCH_SIZE=1            # Number of tasks to claim at once
WORKER_MAX_ATTEMPTS=3          # Max retry attempts per task

# ---------------------------------------
# Optional: Service Authentication
# ---------------------------------------

WORKER_SERVICE_TOKEN=`}</code>
          </pre>
        </Card>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Settings className="h-5 w-5 text-secondary" />
          Pro-Tip: Run Models Locally with Ollama
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You can run LLMs locally using Ollama for faster iteration and zero
          API costs. Set <code>OLLAMA_HOST</code> in your <code>.env</code>,
          create an agent with provider <code>ollama</code>, and assign it to
          your workflow. The system will automatically route execution to your
          local model.
        </p>
      </Card>
    </div>
  );
}
