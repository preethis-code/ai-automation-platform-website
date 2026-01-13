"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  CircleDashed,
  Rocket,
  Eye,
  ChevronDown,
} from "lucide-react";

/* -----------------------------
   Expandable Item
------------------------------ */

function RoadmapItem({
  title,
  status,
  details,
  muted = false,
}: {
  title: string;
  status: "Stable" | "Planned" | "Experimental";
  details: string;
  muted?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      onClick={() => setOpen(!open)}
      className={`cursor-pointer p-6 border-border/50 transition-all ${
        muted
          ? "bg-card/20 hover:bg-card/30"
          : "bg-card/30 hover:bg-card/50"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <p
          className={`text-lg ${
            muted ? "text-muted-foreground" : ""
          }`}
        >
          {title}
        </p>

        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className={`${
              status === "Stable"
                ? "border-success/40 text-success"
                : status === "Planned"
                ? "border-primary/40 text-primary"
                : "border-muted-foreground/40 text-muted-foreground"
            }`}
          >
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

function Section({
  title,
  subtitle,
  icon: Icon,
  progress,
  items,
  muted = false,
}: any) {
  return (
    <section className="container mx-auto pb-24 px-4">
      <div className="flex items-center gap-3 mb-4">
        <Icon
          className={`h-7 w-7 ${
            muted ? "text-muted-foreground" : "text-primary"
          }`}
        />
        <h2 className="text-4xl font-bold">{title}</h2>
        <span className="text-muted-foreground">{subtitle}</span>
      </div>

      {/* Progress */}
      <div className="mb-8 h-2 w-full rounded-full bg-border overflow-hidden">
        <div
          className={`h-full ${
            muted ? "bg-muted-foreground/40" : "bg-primary"
          } transition-all duration-700`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item: any) => (
          <RoadmapItem key={item.title} {...item} muted={muted} />
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
          Built in Public. Shipped with Intent.
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This roadmap explains not just <em>what</em> is coming — but
          <em> why</em>, and under what constraints.
        </p>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto pb-20 px-4">
        <Card className="p-10 border-border/50 bg-card/40">
          <h2 className="text-3xl font-bold mb-4">How to Read This Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Features move forward only when they preserve determinism,
            debuggability, and operational safety. Dates are less important
            than correctness.
          </p>
        </Card>
      </section>

      {/* Now */}
      <Section
        title="Now"
        subtitle="Stable & Actively Used"
        icon={CheckCircle2}
        progress={100}
        items={[
          {
            title: "Deterministic workflow execution engine",
            status: "Stable",
            details:
              "Workflows execute step-by-step with no hidden retries, shared state, or magic behavior.",
          },
          {
            title: "Agent-driven step execution",
            status: "Stable",
            details:
              "Agents execute explicit steps (LLM, HTTP, Tool, Delay) with strict input/output boundaries.",
          },
          {
            title: "Task-based execution model",
            status: "Stable",
            details:
              "Every run produces an immutable task record with full traceability.",
          },
        ]}
      />

      {/* Next */}
      <Section
        title="Next"
        subtitle="Planned & Designed"
        icon={Rocket}
        progress={55}
        items={[
          {
            title: "WebSocket-based live execution updates",
            status: "Planned",
            details:
              "Move from polling to event-driven updates for steps, logs, and status changes.",
          },
          {
            title: "Plugin-based tool system",
            status: "Planned",
            details:
              "Allow safe extension of agent capabilities with permission boundaries.",
          },
        ]}
      />

      {/* Later */}
      <Section
        title="Later"
        subtitle="Experimental & Optional"
        icon={CircleDashed}
        progress={20}
        muted
        items={[
          {
            title: "Advanced persistent agent memory",
            status: "Experimental",
            details:
              "Requires strong guarantees around isolation, correctness, and replayability.",
          },
          {
            title: "Distributed execution workers",
            status: "Experimental",
            details:
              "Only considered once single-node execution is fully observable and robust.",
          },
        ]}
      />

      {/* CTA */}
      <section className="container mx-auto pb-32 px-4 text-center">
        <Card className="p-14 border-primary/20 bg-primary/5">
          <Eye className="h-10 w-10 mx-auto mb-6 text-primary" />
          <h3 className="text-3xl font-bold mb-4">
            This Roadmap Is a Conversation
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you care about execution engines, agent systems, or automation
            internals — your feedback directly shapes this project.
          </p>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
