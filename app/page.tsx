import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

import {
  Bot,
  Workflow,
  Calendar,
  MessageSquare,
  Brain,
  Shield,
  Zap,
  ChevronRight,
  Check,
  X,
  Code2,
  Terminal,
  Database,
} from "lucide-react";
import Link from "next/link";
import { Github } from "lucide-react";

export const metadata = {
  title: "AI Agent Automation | Open Source AI Workflow Engine",
  description:
    "AI Agent Automation is a local-first AI automation platform for building intelligent workflows with agents, tools, document RAG, and persistent memory.",
  keywords: [
    "AI automation",
    "AI workflow engine",
    "self hosted AI agents",
    "AI automation platform",
    "Zapier alternative",
    "n8n alternative",
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none">
          <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative flex flex-col items-center text-center space-y-8 animate-slide-up">
          <Badge
            variant="outline"
            className="px-4 py-1.5 border-primary/20 bg-primary/5 text-primary"
          >
            <Zap className="h-3.5 w-3.5 mr-2" />
            Open Source AI Execution Engine
          </Badge>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance max-w-5xl leading-[1.1]">
            Automate with Agents,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {" "}
              Stay Private.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            The self-hosted alternative to n8n and Zapier. Build, run, and
            schedule intelligent agent-driven pipelines entirely on your own
            infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up animate-delay-100">
            <Button
              size="lg"
              className="text-lg px-8 h-14 rounded-full"
              asChild
            >
              <Link href="/docs">
                Start Building
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 h-14 rounded-full bg-background/50 backdrop-blur"
              asChild
            >
              <a
                href="https://github.com/vmDeshpande/ai-agent-automation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </a>
            </Button>
          </div>

          <div className="pt-12 w-full max-w-4xl animate-slide-up animate-delay-200">
            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error/50" />
                  <div className="w-3 h-3 rounded-full bg-warning/50" />
                  <div className="w-3 h-3 rounded-full bg-success/50" />
                </div>
                <div className="ml-4 text-xs font-mono text-muted-foreground">
                  terminal — git clone
                </div>
              </div>
              <div className="p-6 text-left font-mono text-sm md:text-base bg-black/40">
                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">1</span>
                  <span className="text-primary">git</span> clone
                  https://github.com/vmDeshpande/ai-agent-automation.git
                </div>

                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">2</span>
                  <span className="text-primary">cd</span> ai-agent-automation
                </div>

                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">3</span>
                  <span className="text-primary">npm</span> install
                  <span className="text-muted-foreground">
                    # installs backend & frontend deps
                  </span>
                </div>

                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">4</span>
                  <span className="text-primary">npm</span> run dev
                  <span className="text-muted-foreground"># backend</span>
                </div>

                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">4</span>
                  <span className="text-primary">npm</span> run worker
                  <span className="text-muted-foreground"># worker</span>
                </div>

                <div className="flex gap-4">
                  <span className="text-muted-foreground select-none">5</span>
                  <span className="text-primary">npm</span> run start
                  <span className="text-muted-foreground">
                    # frontend dashboard
                  </span>
                </div>

                <div className="mt-3 text-success">
                  ✓ Dashboard running on{" "}
                  <span className="font-mono">http://localhost:3000</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="border-y border-border/50 bg-muted/10">
        <div className="container mx-auto py-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">100% Local-First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your agents, your data, your infrastructure. No external API
                calls for logic processing, ensuring total privacy and zero
                vendor lock-in.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Developer-Centric</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built by developers for developers. Modular architecture with
                clear boundaries between the Agent Runner, Step Executor, and
                Scheduler.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Production Ready</h3>
              <p className="text-muted-foreground leading-relaxed">
                Not a demo. A real execution engine with MongoDB persistence,
                cron-based scheduling, and full execution observability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto py-24 md:py-32 px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            The Modular AI Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build production-grade autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Bot,
              title: "Autonomous Agent Runner",
              desc: "A centralized executor with safety guards that manages structured inputs and outputs per step.",
            },
            {
              icon: Workflow,
              title: "Workflow Automation",
              desc: "Deterministic execution of multi-step pipelines including LLM reasoning, HTTP calls, and file ops.",
            },
            {
              icon: Calendar,
              title: "Cron Scheduler",
              desc: "Built-in cron engine for recurring background tasks, reporting, and long-running automations.",
            },
            {
              icon: MessageSquare,
              title: "Document Chat (RAG)",
              desc: "Upload PDFs for grounded extraction and semantic chunking using a local vector store.",
            },
            {
              icon: Brain,
              title: "Persistent Memory",
              desc: "Agents store facts, preferences, and context to enable adaptive and personalized automation.",
            },
            {
              icon: Terminal,
              title: "Tool Registry",
              desc: "Extend agent capabilities with pluggable tools for web browsing, email, and shell execution.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-8 border-border/50 bg-card/30 hover:bg-card/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <item.icon className="h-24 w-24" />
              </div>
              <item.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Engineered for Freedom</h2>
          <p className="text-xl text-muted-foreground">
            Why developers are switching from SaaS automation to self-hosted
            agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              {
                title: "No Usage Limits",
                desc: "Run 10 or 10,000 workflows for the same cost: zero.",
              },
              {
                title: "Total Data Privacy",
                desc: "Sensitive data never leaves your infrastructure.",
              },
              {
                title: "Zero Vendor Lock-in",
                desc: "Own your code, your workflows, and your agents.",
              },
              {
                title: "Custom Logic",
                desc: "Integrate with internal databases and APIs without proxies.",
              },
            ].map((point, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 h-6 w-6 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-success" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{point.title}</h4>
                  <p className="text-muted-foreground">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-full">
            <Card className="h-full border-border/50 bg-card/40 backdrop-blur p-8 flex flex-col justify-center overflow-hidden">
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 rounded-xl bg-error/10 border border-error/20 opacity-50">
                  <span className="font-mono">Zapier / n8n Cloud</span>
                  <X className="h-5 w-5 text-error" />
                </div>
                <div className="flex justify-center">
                  <div className="h-12 w-px bg-border relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-background text-xs font-mono text-muted-foreground">
                      VS
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-6 rounded-xl bg-success/10 border border-success/30 shadow-lg shadow-success/10">
                  <span className="font-bold text-lg">AI Agent Automation</span>
                  <Check className="h-6 w-6 text-success" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto py-24 mb-12 px-4">
        <div className="relative rounded-[2rem] overflow-hidden border border-primary/20 bg-gradient-to-b from-primary/10 to-transparent p-12 md:p-24 text-center">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
              Ready to take control of your AI automation?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-full"
                asChild
              >
                <Link href="/docs">Read the Docs</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg rounded-full bg-transparent"
                asChild
              >
                <a
                  href="https://github.com/vmDeshpande/ai-agent-automation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
