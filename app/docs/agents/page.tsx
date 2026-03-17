import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Bot, Brain, Wrench, MessageSquare, Code } from "lucide-react";

export const metadata = {
  title: "AI Agents | AI Agent Automation Docs",
  description:
    "Learn how AI agents work in the automation platform including configuration, providers, models, and execution behavior.",
};

export default function AgentsDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Core Module
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          AI Agent System
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Autonomous agents that can reason, use tools, and execute multi-step
          tasks with full observability.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">What is an Agent?</h2>
        <p className="text-muted-foreground leading-relaxed">
          An agent is an AI-powered execution unit that receives a goal, reasons
          about how to achieve it, selects and uses appropriate tools, and
          produces structured outputs. Unlike simple prompt chains, agents have
          agency—they decide which actions to take based on context and
          feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            {
              icon: Brain,
              title: "Reasoning Engine",
              desc: "Agents use LLMs to plan, make decisions, and adapt to unexpected situations.",
            },
            {
              icon: Wrench,
              title: "Tool Selection",
              desc: "Automatically chooses the right tool for each sub-task from a registry of capabilities.",
            },
            {
              icon: MessageSquare,
              title: "Memory & Context",
              desc: "Maintains conversation history and retrieves relevant past interactions.",
            },
            {
              icon: Code,
              title: "Structured Output",
              desc: "Returns validated JSON responses that can be consumed by downstream steps.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card/30"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Agent Configuration</h2>
        <p className="text-muted-foreground leading-relaxed">
          Agents are defined with a system prompt, model selection, tool access
          list, and execution constraints. Each agent runs in isolation with its
          own context window.
        </p>
        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              agent-definition.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "name": "research_assistant",
  "system_prompt": "You are a research assistant. Your job is to gather information from the web, analyze it, and provide concise summaries.",
  "model": "gpt-4",
  "temperature": 0.7,
  "max_tokens": 2000,
  "tools": ["web_search", "text_summarizer", "file_writer"],
  "memory_enabled": true,
  "max_iterations": 5
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Agent Execution Flow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: "1",
              title: "Receive Goal",
              desc: "Agent gets a high-level task description.",
            },
            {
              step: "2",
              title: "Plan Actions",
              desc: "LLM breaks down the goal into executable steps.",
            },
            {
              step: "3",
              title: "Execute Tools",
              desc: "Agent calls tools sequentially or in parallel.",
            },
            {
              step: "4",
              title: "Return Result",
              desc: "Final output is validated and logged.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="p-6 text-center space-y-2 border-primary/20 bg-primary/5"
            >
              <div className="text-3xl font-bold text-primary">{item.step}</div>
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <h3 className="font-bold text-lg mb-3">Agent Safety & Guardrails</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Maximum iteration limits
            prevent infinite loops
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Tool permissions are
            enforced at the executor level
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> Output validation ensures
            structured responses
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span> All actions are logged for
            audit and debugging
          </li>
        </ul>
      </Card>
    </div>
  );
}
