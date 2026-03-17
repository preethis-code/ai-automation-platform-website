"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Rocket,
  Wrench,
  Server,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "Project Roadmap | AI Agent Automation",
  description:
    "See the future roadmap for AI Agent Automation including workflow templates, visual graphs, plugin system, and multi-agent automation.",
};

/* -----------------------------
   Expandable Item
------------------------------ */

function RoadmapItem({
  title,
  status,
  details,
}: {
  title: string;
  status: "Stable" | "In Progress" | "Planned" | "Research";
  details: string;
}) {
  const [open, setOpen] = useState(false);

  const statusStyles = {
    Stable: "border-green-500/40 text-green-500",
    "In Progress": "border-blue-500/40 text-blue-500",
    Planned: "border-primary/40 text-primary",
    Research: "border-muted-foreground/40 text-muted-foreground",
  };

  return (
    <Card
      onClick={() => setOpen(!open)}
      className="cursor-pointer p-6 border-border/50 bg-card/40 hover:bg-card/60 transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-lg">{title}</p>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className={statusStyles[status]}>
            {status}
          </Badge>

          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {open && (
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          {details}
        </p>
      )}
    </Card>
  );
}

/* -----------------------------
   Section
------------------------------ */

function Section({ title, subtitle, icon: Icon, progress, items }: any) {
  return (
    <section className="container mx-auto pb-24 px-4">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-7 w-7 text-primary" />
        <h2 className="text-4xl font-bold">{title}</h2>
        <span className="text-muted-foreground">{subtitle}</span>
      </div>

      {/* Progress */}
      <div className="mb-8 h-2 w-full rounded-full bg-border overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item: any) => (
          <RoadmapItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

/* -----------------------------
   Page
------------------------------ */

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto pt-32 pb-20 px-4 text-center">
        <Badge
          variant="outline"
          className="mb-6 px-4 py-1.5 border-primary/20 bg-primary/5 text-primary"
        >
          Project Roadmap
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          The Path to a Full AI Automation Platform
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This roadmap outlines how AI Agent Automation evolves from a workflow
          engine into a full automation platform. Features are introduced
          gradually to maintain determinism, observability, and system
          reliability.
        </p>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto pb-20 px-4">
        <Card className="p-10 border-border/50 bg-card/40">
          <h2 className="text-3xl font-bold mb-4">Roadmap Philosophy</h2>

          <p className="text-lg text-muted-foreground max-w-3xl">
            The platform grows in layers. First usability, then automation
            power, followed by developer ecosystem features and finally
            production infrastructure. Each step builds on the previous one to
            keep the system predictable and maintainable.
          </p>
        </Card>
      </section>

      {/* Phase 1 */}
      <Section
        title="Phase 1"
        subtitle="Usability & Onboarding"
        icon={CheckCircle2}
        progress={80}
        items={[
          {
            title: "Workflow Template System",
            status: "Stable",
            details:
              "Provide a built-in library of reusable workflow templates such as research agents, blog generators, and GitHub automation pipelines.",
          },
          {
            title: "Visual Workflow Graph",
            status: "Stable",
            details:
              "Add a node-based visualization of workflows so users can understand and debug execution flows more easily.",
          },
          {
            title: "Agent Playground",
            status: "Planned",
            details:
              "Allow developers to test agents, prompts, and models directly without building a workflow.",
          },
        ]}
      />

      {/* Phase 2 */}
      <Section
        title="Phase 2"
        subtitle="Automation Capabilities"
        icon={Rocket}
        progress={35}
        items={[
          {
            title: "Conditional Logic Steps",
            status: "Planned",
            details:
              "Introduce conditional branching inside workflows allowing steps such as IF, SWITCH, and dynamic execution paths.",
          },
          {
            title: "Trigger System",
            status: "Planned",
            details:
              "Enable workflows to run automatically from events such as webhooks, cron schedules, API calls, or external services.",
          },
          {
            title: "Document Workflow Integration",
            status: "Stable",
            details:
              "Allow workflows to query documents indexed in the RAG system and use the results inside automation pipelines.",
          },
        ]}
      />

      {/* Phase 3 */}
      <Section
        title="Phase 3"
        subtitle="Developer Ecosystem"
        icon={Wrench}
        progress={20}
        items={[
          {
            title: "Tool Marketplace / Plugin System",
            status: "Research",
            details:
              "Allow developers to build and share custom automation tools such as Slack integrations, GitHub automations, and database connectors.",
          },
          {
            title: "CLI Tool",
            status: "Planned",
            details:
              "Provide a developer CLI for running workflows, inspecting logs, and deploying automation pipelines directly from the terminal.",
          },
          {
            title: "Public Workflow Sharing",
            status: "Planned",
            details:
              "Allow workflows to be shared via links and imported into other installations to encourage community contributions.",
          },
        ]}
      />

      {/* Phase 4 */}
      <Section
        title="Phase 4"
        subtitle="Platform Scale & Production"
        icon={Server}
        progress={10}
        items={[
          {
            title: "Workflow Versioning",
            status: "Research",
            details:
              "Introduce version history and rollback capability for workflows to safely evolve automation pipelines.",
          },
          {
            title: "Hybrid RAG Search",
            status: "Planned",
            details:
              "Combine vector search with keyword search to improve document retrieval accuracy for structured and factual queries.",
          },
          {
            title: "Multi-Agent Workflows",
            status: "Planned",
            details:
              "Enable workflows where multiple specialized agents collaborate sequentially to complete complex tasks.",
          },
          {
            title: "Workflow Execution Timeline Upgrade",
            status: "Planned",
            details:
              "Improve observability by adding step durations, retry tracking, error classification, and performance metrics.",
          },
          {
            title: "Docker One-Click Deploy",
            status: "Stable",
            details:
              "Provide an easy self-hosting experience with a single Docker command for developers and teams.",
          },
          {
            title: "Monitoring Dashboard",
            status: "Research",
            details:
              "Add system metrics such as workflow runs, success rate, runtime statistics, and agent activity monitoring.",
          },
        ]}
      />

      {/* CTA */}
      <section className="container mx-auto pb-32 px-4 text-center">
        <Card className="p-14 border-primary/20 bg-primary/5">
          <h3 className="text-3xl font-bold mb-4">Built in Public</h3>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI Agent Automation is developed openly. Feedback, ideas, and
            contributions from developers help shape the future direction of the
            platform.
          </p>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
