import Link from "next/link";
import { Zap, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-primary flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                AI Agent Automation
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              An open-source, self-hosted AI automation engine built for
              developers who care about privacy, control, and transparency.
            </p>
            <a
              href="https://github.com/vmDeshpande/ai-agent-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="text-muted-foreground hover:text-primary"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/features/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/architecture/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/workflows"
                  className="text-muted-foreground hover:text-primary"
                >
                  Workflows
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/vmDeshpande/ai-agent-automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vmDeshpande/ai-agent-automation/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Issues & Bugs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vmDeshpande/ai-agent-automation/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          {/* Project */}
          <div>
            <h3 className="font-semibold mb-4">Project</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/community/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <a
                  href="https://opensource.org/licenses/MIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  MIT License
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Local-First · Open Source
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Agent Automation
          </p>
          <p className="text-sm text-muted-foreground">
            Built by developers, for developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
