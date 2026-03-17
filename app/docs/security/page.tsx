import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Lock,
  EyeOff,
  Key,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Security | AI Agent Automation Docs",
  description:
    "Security principles of AI Agent Automation including local-first architecture and infrastructure ownership.",
};

export default function SecurityDocs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Compliance & Safety
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Security & Privacy
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Learn how the platform ensures total data sovereignty and execution
          safety through a local-first, privacy-centric architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: EyeOff,
            title: "Zero Data Leakage",
            desc: "Sensitive data never leaves your infrastructure. All processing happens on your own hardware.",
          },
          {
            icon: Lock,
            title: "Isolated Execution",
            desc: "Workflows run in isolated environments to prevent cross-contamination or unauthorized access.",
          },
          {
            icon: Key,
            title: "Secret Management",
            desc: "Credentials are stored exclusively in environment variables or a local encrypted vault.",
          },
        ].map((item, i) => (
          <Card key={i} className="p-6 border-border/50 bg-card/30 space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Privacy Philosophy</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Traditional automation tools (Zapier, n8n Cloud) require you to send
          your data to their servers. We believe that for many use
          cases—especially involving proprietary data or sensitive customer
          information—this is an unacceptable risk. Our platform is built on
          three core pillars:
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Complete Data Ownership",
              desc: "You own the database, the logs, and the code. We have zero access to your data or usage patterns.",
            },
            {
              title: "Local Execution",
              desc: "Workflow logic, AI reasoning, and tool executions occur strictly on your local machine or private cloud.",
            },
            {
              title: "No Hidden Telemetry",
              desc: "The open-source core contains no tracking pixels, analytics, or phone-home mechanisms.",
            },
          ].map((point, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card/30"
            >
              <CheckCircle2 className="h-6 w-6 text-success shrink-0" />
              <div className="space-y-1">
                <h4 className="font-bold text-lg">{point.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Execution Guardrails</h2>
        <Card className="p-8 border-primary/20 bg-primary/5 relative overflow-hidden">
          <ShieldCheck className="absolute top-[-10%] right-[-5%] h-32 w-32 text-primary opacity-5 rotate-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Runtime Safety</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Timeout limits for
                  every step execution
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Memory usage
                  constraints for worker processes
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Restricted filesystem
                  access for tool executors
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Audit & Transparency</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Full execution logs
                  for every workflow run
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Input/Output
                  sanitization for all tool calls
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> Open-source codebase
                  for community security auditing
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Shield className="h-5 w-5 text-secondary" />
          Security Best Practices
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          To maintain a secure environment, we recommend following these
          guidelines:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">1.</span> Never commit{" "}
            <code>.env</code> files to git
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">2.</span> Use strong, unique API
            keys for LLM providers
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">3.</span> Restrict MongoDB access
            to localhost or your VPC
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">4.</span> Regularly audit workflow
            logs for unusual activity
          </li>
        </ul>
      </Card>
    </div>
  );
}
