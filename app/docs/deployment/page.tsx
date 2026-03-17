import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Server,
  Globe,
  HardDrive,
  Terminal,
  Shield,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Deployment Guide | AI Agent Automation",
  description:
    "Deploy AI Agent Automation in production environments with Docker, Node.js, and MongoDB.",
};

export default function DeploymentDocs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Operations
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Deployment Guide
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Transition from local development to a production-grade deployment on
          your own infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            icon: Terminal,
            title: "Development (Local)",
            desc: "Run directly on your laptop using npm scripts. Ideal for building and testing workflows.",
            items: ["npm run dev", "npm run worker", "Local MongoDB"],
          },
          {
            icon: Server,
            title: "Production (VM/VPS)",
            desc: "Deploy to a dedicated server or VPS (AWS, DigitalOcean, etc.) using PM2 or Docker.",
            items: ["PM2 Process Manager", "Nginx Proxy", "Remote MongoDB"],
          },
        ].map((item, i) => (
          <Card
            key={i}
            className="p-8 border-border/50 bg-card/30 flex flex-col"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed flex-grow">
              {item.desc}
            </p>
            <div className="space-y-2 border-t border-border/50 pt-6">
              {item.items.map((it, j) => (
                <div key={j} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>{it}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Production Deployment (PM2)</h2>
        <p className="text-muted-foreground leading-relaxed">
          For a robust production setup on a single server, we recommend using
          PM2 to manage your processes.
        </p>
        <Card className="p-6 bg-muted/30 border-border/50 space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-xs font-mono font-bold">
              ecosystem.config.js
            </span>
          </div>
          <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
            <code>{`module.exports = {
  apps: [
    {
      name: "agent-api",
      script: "./dist/server.js",
      env: { NODE_ENV: "production" }
    },
    {
      name: "agent-worker",
      script: "./dist/worker.js",
      instances: "max",
      env: { NODE_ENV: "production" }
    }
  ]
};`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Deployment Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: HardDrive,
              title: "On-Premises",
              desc: "Deploy to your own bare-metal hardware for maximum data control and performance.",
            },
            {
              icon: Globe,
              title: "Cloud VPC",
              desc: "Deploy to a private cloud network with restricted external access for high-security workflows.",
            },
            {
              icon: Shield,
              title: "Hybrid",
              desc: "Keep the execution engine local but interact with cloud-based LLM providers via encrypted tunnels.",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 border-border/50 bg-card/30 space-y-4">
              <div className="h-10 w-10 rounded-lg bg-muted/50 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-6 border-primary/20 bg-primary/5">
        <h3 className="font-bold text-lg mb-2">Network Configuration</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If you plan to access the dashboard remotely, ensure you set up an
          Nginx reverse proxy with SSL (Let's Encrypt). We recommend keeping the
          API server behind a firewall and only exposing the necessary ports. If
          using local LLMs, ensure the worker instances have high-bandwidth
          network access to your model server.
        </p>
      </Card>
    </div>
  );
}
