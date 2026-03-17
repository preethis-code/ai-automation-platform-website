import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Workflow,
  Calendar,
  MessageSquare,
  Brain,
  Mail,
  FileText,
  Globe,
  Shield,
  Database,
  Code,
  GitBranch,
  Lock,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";

export const metadata = {
  title: "Platform Features | AI Agent Automation",
  description:
    "Explore features of AI Agent Automation including agent workflows, document RAG search, semantic memory, automation tools, and scheduling.",
  keywords: [
    "AI automation features",
    "AI workflow tools",
    "AI agents automation",
    "self hosted automation",
  ],
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Header */}
          <div className="text-center space-y-4 animate-slide-up">
            <Badge variant="outline" className="px-4 py-1">
              Platform Capabilities
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              A Local-First AI Automation Engine
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Build, execute, and scale intelligent workflows powered by AI
              agents — without giving up control of your data, logic, or
              infrastructure.
            </p>
          </div>

          {/* Execution Engine */}
          <section className="space-y-10">
            <h2 className="text-3xl font-bold">Execution Engine</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Bot,
                  title: "Deterministic AI Agent Runtime",
                  description:
                    "A production-grade agent runtime that executes AI reasoning, tool calls, and decisions step-by-step with full traceability.",
                  features: [
                    "Structured inputs and outputs",
                    "Tool-calling with guardrails",
                    "Multi-model support",
                    "Failure-safe execution",
                  ],
                },
                {
                  icon: Workflow,
                  title: "Workflow Orchestration",
                  description:
                    "Compose complex multi-step pipelines that combine AI reasoning, system tools, and external APIs in a deterministic order.",
                  features: [
                    "Sequential execution",
                    "Conditional branching",
                    "Context propagation",
                    "Error short-circuiting",
                  ],
                },
                {
                  icon: Calendar,
                  title: "Built-in Scheduler",
                  description:
                    "Run workflows automatically using cron schedules or time-based triggers — no external services required.",
                  features: [
                    "Cron expressions",
                    "Recurring tasks",
                    "Timezone aware",
                    "Dynamic task creation",
                  ],
                },
                {
                  icon: MessageSquare,
                  title: "Document Chat (RAG)",
                  description:
                    "Upload documents and query them using retrieval-augmented generation. Responses are grounded strictly in your data.",
                  features: [
                    "Local vector storage",
                    "Semantic search",
                    "Chunked indexing",
                    "Source-aware answers",
                  ],
                },
                {
                  icon: Brain,
                  title: "Agent Memory",
                  description:
                    "Agents can retain context across executions, enabling personalization, learning, and long-running intelligence.",
                  features: [
                    "Persistent memory store",
                    "Semantic recall",
                    "Conversation history",
                    "Context summarization",
                  ],
                },
                {
                  icon: Shield,
                  title: "Execution Observability",
                  description:
                    "Every workflow run is fully observable — inspect logs, inputs, outputs, and failures at every step.",
                  features: [
                    "Step-level logs",
                    "Error traces",
                    "Execution timing",
                    "Audit-ready records",
                  ],
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:border-primary/50 transition-all"
                >
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          {/* Automation Tools */}
          <section className="space-y-10">
            <h2 className="text-3xl font-bold">Automation Tooling</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Mail,
                  title: "Email Automation",
                  description:
                    "Send notifications, parse inboxes, and trigger workflows from email events.",
                },
                {
                  icon: FileText,
                  title: "File System Operations",
                  description:
                    "Read, write, transform, and persist files as part of automated workflows.",
                },
                {
                  icon: Globe,
                  title: "Browser Automation",
                  description:
                    "Scrape pages, capture screenshots, and automate web interactions using headless browsers.",
                },
                {
                  icon: Database,
                  title: "Database Access",
                  description:
                    "Query and manipulate structured data from databases and local stores.",
                },
                {
                  icon: Code,
                  title: "Custom Scripts",
                  description:
                    "Run custom Node.js or shell scripts for advanced automation logic.",
                },
                {
                  icon: GitBranch,
                  title: "API Integrations",
                  description:
                    "Interact with REST APIs, webhooks, and internal services without middleware.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:border-secondary/50 transition-all"
                >
                  <item.icon className="h-10 w-10 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Privacy */}
          <section className="space-y-10">
            <h2 className="text-3xl font-bold">Privacy & Control by Design</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Lock,
                  title: "Local-First Architecture",
                  description:
                    "Your workflows, documents, and agent memory stay on your machine — never sent to third-party servers.",
                },
                {
                  icon: Cpu,
                  title: "On-Device Execution",
                  description:
                    "Run AI locally or bring your own API keys. You decide where computation happens.",
                },
                {
                  icon: Layers,
                  title: "Secure Persistence",
                  description:
                    "Workflow state, logs, and memory are stored securely and can be encrypted at rest.",
                },
                {
                  icon: Terminal,
                  title: "Transparent Audit Trail",
                  description:
                    "Every action is logged. Nothing is hidden. Ideal for regulated and security-sensitive environments.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 border-primary/20 bg-primary/5"
                >
                  <item.icon className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
