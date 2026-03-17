import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

export const metadata = {
  title: "AI Agent Automation vs Zapier vs n8n",
  description:
    "Compare AI Agent Automation with traditional automation tools like Zapier and n8n.",
};

export default function WhyCompare() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5"
        >
          Comparison
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          How This Platform Compares
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          A transparent comparison with popular automation and AI workflow
          tools.
        </p>
      </div>

      <Card className="overflow-hidden border-border/50">
        <table className="w-full text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="p-4 text-left">Feature</th>
              <th className="p-4 text-left">This Platform</th>
              <th className="p-4 text-left">Typical Alternatives</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Runs Fully Locally", true, false],
              ["Deterministic Execution", true, false],
              ["No Subscription Required", true, false],
              ["Full Execution Logs", true, true],
              ["UI + Code Hybrid", true, false],
              ["Black-Box AI Steps", false, true],
            ].map(([label, ours, others], i) => (
              <tr key={i} className="border-t border-border/50">
                <td className="p-4 font-medium">{label}</td>
                <td className="p-4">
                  {ours ? (
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  ) : (
                    <XCircle className="h-4 w-4 text-destructive" />
                  )}
                </td>
                <td className="p-4">
                  {others ? (
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <XCircle className="h-4 w-4 text-muted-foreground" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card className="p-8 bg-card/30 border-border/50 space-y-4">
        <h2 className="text-2xl font-bold">
          Not a Replacement — a Different Philosophy
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          This platform isn’t trying to replace cloud-first tools. It exists for
          developers who want local execution, predictable behavior, and deep
          introspection into how their automation works.
        </p>
      </Card>
    </div>
  );
}
