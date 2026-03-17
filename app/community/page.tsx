import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  MessageCircle,
  Heart,
  Users,
  Star,
  GitPullRequest,
  MessageSquare,
  Globe,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Community | AI Agent Automation",
  description:
    "Join the community building AI Agent Automation. Contribute on GitHub, participate in discussions, and collaborate on open-source AI workflows.",
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto py-24 px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-20 animate-slide-up">
          <Badge variant="outline" className="px-4 py-1">
            Community
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Built in Public. Powered by Developers.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            This project grows through open collaboration. Whether you’re here
            to explore, contribute, or build on top of it — you’re welcome.
          </p>
        </div>

        {/* Community Channels */}
        <section className="max-w-6xl mx-auto mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* GitHub */}
            <Card className="p-8 text-center space-y-5 hover:border-primary/50 transition-all">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Github className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Open Source on GitHub</h3>
              <p className="text-muted-foreground leading-relaxed">
                The entire platform is MIT licensed. Explore the codebase, open
                issues, and contribute directly to the core engine.
              </p>
              <Button size="lg" className="w-full" asChild>
                <a
                  href="https://github.com/vmDeshpande/ai-agent-automation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="mr-2 h-4 w-4" />
                  Star the Repository
                </a>
              </Button>
            </Card>

            {/* Discussions */}
            <Card className="p-8 text-center space-y-5 hover:border-secondary/50 transition-all">
              <div className="mx-auto h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Community Discussions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ask questions, propose ideas, and discuss architecture decisions
                with other developers using the platform.
              </p>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <a
                  href="https://github.com/vmDeshpande/ai-agent-automation/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discussions
                </a>
              </Button>
            </Card>

            {/* Contribution */}
            <Card className="p-8 text-center space-y-5 hover:border-primary/50 transition-all">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Contribute & Collaborate</h3>
              <p className="text-muted-foreground leading-relaxed">
                Improve documentation, add new tools, refine workflows, or help
                others get started.
              </p>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a
                  href="https://github.com/vmDeshpande/ai-agent-automation/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Contribution Docs
                </a>
              </Button>
            </Card>

            {/* Reddit */}
            {/* Reddit */}
            <Card className="p-8 text-center space-y-5 hover:border-orange-500/50 transition-all">
              <div className="mx-auto h-16 w-16 rounded-full bg-orange-500/10 flex items-center justify-center">
                <Globe className="h-8 w-8 text-orange-500" />
              </div>

              <h3 className="text-2xl font-bold">Join the Reddit Community</h3>

              <p className="text-muted-foreground leading-relaxed">
                Follow development updates, share ideas, and discuss AI
                automation architecture with other builders in the community
                subreddit.
              </p>

              <Button size="lg" variant="outline" className="w-full" asChild>
                <a
                  href="https://www.reddit.com/r/AgentAutomation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join r/AgentAutomation
                </a>
              </Button>
            </Card>
          </div>
        </section>

        {/* How to Contribute */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Ways to Get Involved</h2>
            <p className="text-muted-foreground leading-relaxed">
              There’s no single way to contribute. Pick what fits your skills
              and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: GitPullRequest,
                title: "Submit Code",
                desc: "Fix bugs, improve performance, or add new agent tools and features.",
              },
              {
                icon: MessageSquare,
                title: "Improve Documentation",
                desc: "Clarify guides, add examples, and help others understand the system.",
              },
              {
                icon: Heart,
                title: "Share Workflows",
                desc: "Publish real-world automation templates for others to reuse.",
              },
              {
                icon: Users,
                title: "Support the Community",
                desc: "Help answer questions and guide new contributors.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-6 flex gap-4 items-start border-border/50 bg-card/30"
              >
                <item.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
