import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Brain, Database, Search, Clock, Code, Shield } from "lucide-react";

export const metadata = {
  title: "Agent Memory System | AI Agent Automation Docs",
  description:
    "Learn how semantic memory allows AI agents to store and retrieve knowledge using embeddings and similarity search.",
};

export default function MemoryDocs() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Agent Intelligence
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Agent Memory
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          A vendor-agnostic, embedding-powered semantic memory system that
          enables agents to persist knowledge, recall context intelligently, and
          maintain continuity across workflow executions.
        </p>
      </div>

      {/* WHY MEMORY */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Why Memory Matters</h2>
        <p className="text-muted-foreground leading-relaxed">
          Without memory, every workflow execution starts from scratch. With
          semantic memory enabled, agents can retrieve relevant past
          interactions and facts using vector similarity — not keyword matching.
        </p>
      </div>

      {/* HOW IT WORKS */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">How It Works</h2>

        <div className="grid gap-6">
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">1. Embedding Generation</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When memory is stored, the content is converted into a vector
              embedding using the configured embedding provider. This is fully
              vendor-agnostic and supports OpenAI, Gemini, HuggingFace, and
              Ollama (local).
            </p>
          </Card>

          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">
              2. Cosine Similarity Search
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Before an LLM step runs, the system generates an embedding for the
              current prompt and compares it against stored memory using cosine
              similarity to retrieve the most relevant entries.
            </p>
          </Card>

          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">3. Threshold Filtering</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Only memories above a similarity threshold are injected. This
              prevents irrelevant memory pollution and keeps responses grounded.
            </p>
          </Card>

          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">4. Prompt Injection</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Retrieved memories are injected into the prompt with strong system
              instructions to ensure models — even smaller ones — properly
              utilize stored context.
            </p>
          </Card>
        </div>
      </div>

      {/* CONFIGURATION */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Using Memory in Workflows</h2>
        <p className="text-muted-foreground">
          Memory is opt-in per LLM step and configured through the Workflow
          Builder under Advanced Options.
        </p>

        <Card className="overflow-hidden border-border/50 bg-card/50">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-muted/30">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">
              llm-step.json
            </span>
          </div>
          <pre className="p-6 text-sm font-mono overflow-x-auto text-muted-foreground">
            <code>{`{
  "type": "llm",
  "prompt": "What is my project name?",
  "useMemory": true,
  "memoryTopK": 5
}`}</code>
          </pre>
        </Card>
      </div>

      {/* MEMORY SAFETY */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Memory Safety & Retention</h2>

        <div className="grid gap-6">
          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">Retention Policy</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Memory is capped per agent (default: 500 entries). Oldest entries
              are automatically pruned to prevent unbounded growth.
            </p>
          </Card>

          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">Token Guard</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Injected memory is character-limited to avoid context overflow and
              excessive token usage.
            </p>
          </Card>

          <Card className="p-6 border-border/50 bg-card/30">
            <h4 className="font-bold text-lg mb-2">Structured Storage</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Memory is stored in structured format (user + assistant) for
              cleaner retrieval and future RAG expansion.
            </p>
          </Card>
        </div>
      </div>

      {/* PROVIDER AGNOSTIC */}
      <Card className="p-6 border-secondary/20 bg-secondary/5">
        <div className="flex items-center gap-3 mb-3">
          <Shield className="h-5 w-5 text-secondary" />
          <h3 className="font-bold text-lg">Vendor-Agnostic by Design</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The memory system does not depend on any external vector database.
          Embeddings are generated via configured providers and stored locally
          in MongoDB. If an LLM provider does not support embeddings (e.g.,
          Groq), the system automatically falls back to a local embedding
          provider such as Ollama.
        </p>
      </Card>
    </div>
  );
}
