import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Bot,
  Cpu,
  Check,
  X,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Search,
  MessageSquare,
  Lock,
} from "lucide-react";

import Link from "next/link";

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto py-24 px-4">
        {/* Hero */}
        <div className="text-center space-y-4 mb-20 animate-slide-up">
          <Badge
            variant="outline"
            className="px-4 py-1.5 border-primary/20 bg-primary/5 text-primary"
          >
            Showcase
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance max-w-5xl mx-auto">
            Engineered for <span className="text-primary">Performance</span> &{" "}
            <span className="text-secondary">Privacy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover why developers choose our platform for production AI
            automation. Technical deep dives, benchmarks, and competitive
            comparisons.
          </p>
        </div>

        {/* Technical Deep Dive Section */}
        <section className="space-y-16 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Execution Principles</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unlike cloud-based automation platforms that run your data
                through shared multi-tenant environments, our execution engine
                treats every workflow as an isolated, local process.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Cpu,
                    title: "Stateless Execution Engine",
                    desc: "The core runner is designed for high-concurrency without shared state, ensuring deterministic results for every step.",
                  },
                  {
                    icon: Search,
                    title: "Semantic Tool Selection",
                    desc: "Agents don't just 'guess' which tool to use; they use a high-precision vector search to find the optimal tool for the current context.",
                  },
                  {
                    icon: MessageSquare,
                    title: "Context-Aware RAG",
                    desc: "Our PDF ingestion engine uses sliding-window chunking with overlap to preserve semantic meaning across document sections.",
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
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8 border-border/50 bg-muted/20 relative overflow-hidden h-[500px] flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping opacity-20" />
                <div className="absolute inset-8 border-2 border-secondary/20 rounded-full animate-pulse opacity-40" />
                <div className="absolute inset-16 border-2 border-primary/20 rounded-full animate-ping opacity-20 delay-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background p-6 rounded-3xl border-2 border-primary shadow-2xl z-10">
                    <Bot className="h-12 w-12 text-primary" />
                  </div>
                </div>
                {[
                  {
                    icon: Lock,
                    color: "text-secondary",
                    pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-4",
                  },
                  {
                    icon: BarChart3,
                    color: "text-primary",
                    pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4",
                  },
                  {
                    icon: Zap,
                    color: "text-warning",
                    pos: "left-0 top-1/2 -translate-x-4 -translate-y-1/2",
                  },
                  {
                    icon: TrendingUp,
                    color: "text-success",
                    pos: "right-0 top-1/2 translate-x-4 -translate-y-1/2",
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

        {/* Benchmarks Section */}
        <section className="space-y-12 mb-32">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Performance Benchmarks</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world execution metrics comparing local-first automation to
              cloud alternatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Execution Latency",
                value: "-85%",
                desc: "Average reduction in workflow overhead compared to cloud-based alternatives.",
                metric: "Local vs SaaS",
              },
              {
                title: "Data Sovereignty",
                value: "100%",
                desc: "Percentage of data that remains on-premises throughout the execution lifecycle.",
                metric: "Compliance Rate",
              },
              {
                title: "Deployment Cost",
                value: "0.00$",
                desc: "Standard platform cost per million tasks (Infrastructure excluded).",
                metric: "Variable Fee",
              },
            ].map((stat, i) => (
              <Card
                key={i}
                className="p-8 text-center border-border/50 bg-card/30 flex flex-col justify-center"
              >
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                  {stat.metric}
                </span>
                <span className="text-5xl font-bold text-primary mb-4">
                  {stat.value}
                </span>
                <h4 className="text-xl font-bold mb-2">{stat.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.desc}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="space-y-12 mb-32">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Why We Are Different</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A transparent look at how our platform stacks up against
              established tools like n8n and Zapier.
            </p>
          </div>

          <Card className="overflow-hidden border-border/50 bg-card/30">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-border/50 bg-muted/20">
                  <tr>
                    <th className="p-6 text-sm font-bold uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="p-6 text-sm font-bold uppercase tracking-wider text-primary">
                      Our Platform
                    </th>
                    <th className="p-6 text-sm font-bold uppercase tracking-wider">
                      n8n / Zapier
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    {
                      label: "Data Privacy",
                      us: "100% Local (Air-gapped capable)",
                      them: "Cloud-hosted (Data leaves your VPC)",
                    },
                    {
                      label: "Execution Engine",
                      us: "Native Node.js / Express Worker",
                      them: "Proprietary Cloud Scheduler",
                    },
                    {
                      label: "Usage Fees",
                      us: "Unlimited (Zero cost per execution)",
                      them: "Credit-based / Tiered usage fees",
                    },
                    {
                      label: "AI Agents",
                      us: "Autonomous Tool-enabled Agents",
                      them: "Basic Linear Prompt Chains",
                    },
                    {
                      label: "Deployment",
                      us: "Your Laptop, VM, or Private Cloud",
                      them: "SaaS or Managed Cloud Only",
                    },
                    {
                      label: "Vendor Lock-in",
                      us: "None (Open Source MIT Core)",
                      them: "High (Proprietary execution logic)",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-muted/10 transition-colors">
                      <td className="p-6 font-medium">{row.label}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-2 text-primary font-bold">
                          <Check className="h-4 w-4 text-success" />
                          {row.us}
                        </div>
                      </td>
                      <td className="p-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <X className="h-4 w-4 text-error opacity-50" />
                          {row.them}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-8 py-20 bg-primary/5 rounded-[3rem] border border-primary/20 relative overflow-hidden">
          <Zap className="absolute top-[-20%] right-[-10%] h-64 w-64 text-primary opacity-5 rotate-12" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready to Switch?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join the growing community of developers who value privacy,
              control, and unlimited automation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-14 px-10 text-lg rounded-full"
                asChild
              >
                <Link href="/docs/installation">
                  Install Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg rounded-full bg-transparent"
                asChild
              >
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </section>
        <p className="mt-6 text-sm text-muted-foreground">
          Want to see exactly how tasks, steps, and agents execute?
          <Link href="/internals" className="text-primary hover:underline ml-1">
            Explore system internals →
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
