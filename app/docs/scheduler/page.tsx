import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Repeat, Zap, Code } from "lucide-react";

export const metadata = {
  title: "Scheduler | AI Agent Automation Docs",
  description:
    "Schedule AI workflows with cron jobs and recurring automation tasks.",
};

export default function SchedulerDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Automation
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Scheduler System
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Cron-based task scheduler for recurring workflows, background jobs,
          and time-triggered automations.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">How the Scheduler Works</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Scheduler is a standalone service that evaluates cron expressions
          and triggers workflows at specified intervals. It runs independently
          of the main API server, ensuring reliable execution even during high
          load.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: Clock,
              title: "Cron Expressions",
              desc: "Define schedules using standard cron syntax (minute, hour, day, month, weekday).",
            },
            {
              icon: Repeat,
              title: "Recurring Execution",
              desc: "Workflows are automatically queued and executed based on the schedule.",
            },
            {
              icon: Zap,
              title: "Timezone Support",
              desc: "All schedules respect the configured timezone for accurate triggering.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-6 border-border/50 bg-card/30 flex flex-col items-center text-center gap-3"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Creating a Scheduled Workflow</h2>
        <p className="text-muted-foreground">
          Attach a cron schedule to any workflow definition. The scheduler will
          automatically create execution instances at the specified times.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              scheduled-workflow.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "name": "Daily Report Generator",
  "schedule": {
    "cron": "0 9 * * *",
    "timezone": "America/New_York",
    "enabled": true
  },
  "steps": [
    {
      "type": "agent",
      "prompt": "Generate a summary report of yesterday's activity."
    },
    {
      "type": "email",
      "to": "team@example.com",
      "subject": "Daily Report",
      "body": "{{steps[0].output}}"
    }
  ]
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Common Cron Patterns</h2>
        <div className="grid gap-4">
          {[
            { pattern: "*/5 * * * *", desc: "Every 5 minutes" },
            { pattern: "0 * * * *", desc: "Every hour at minute 0" },
            { pattern: "0 9 * * *", desc: "Every day at 9:00 AM" },
            { pattern: "0 9 * * 1", desc: "Every Monday at 9:00 AM" },
            {
              pattern: "0 0 1 * *",
              desc: "First day of every month at midnight",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 rounded-lg border border-border/50 bg-card/30"
            >
              <code className="text-sm font-mono text-primary">
                {item.pattern}
              </code>
              <span className="text-sm text-muted-foreground">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-3">Scheduler Management</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> View all active schedules
            via the API or dashboard
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Pause or resume schedules
            without deleting them
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Execution history is
            logged for audit and debugging
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Failed executions can
            trigger retry or alerting workflows
          </li>
        </ul>
      </Card>
    </div>
  );
}
