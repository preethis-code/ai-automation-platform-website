"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Navigation({
  onDocsToggle,
}: {
  onDocsToggle?: () => void;
}) {
  const [siteMenuOpen, setSiteMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Left */}
          <div className="flex items-center gap-2">
            {onDocsToggle && (
              <button
                onClick={onDocsToggle}
                className="md:hidden p-2 rounded-md hover:bg-accent"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}

            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                AI Agent Automation
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 ml-10">
            <Link href="/docs" className="text-sm font-medium hover:text-primary">
              Docs
            </Link>

            {/* Explore Dropdown */}
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Explore
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <div className="grid w-64 gap-1 p-2">
                      {[
                        ["/roadmap", "Roadmap", "Where the project is headed"],
                        ["/architecture", "Architecture", "Execution boundaries & system layout"],
                        ["/execution-model", "Execution Model", "What happens when a workflow runs"],
                        ["/internals", "Internals", "Engine components & design decisions"],
                      ].map(([href, title, desc]) => (
                        <NavigationMenuLink key={href} asChild>
                          <Link href={href} className="rounded-md p-3 hover:bg-accent">
                            <div className="font-medium">{title}</div>
                            <div className="text-xs text-muted-foreground">
                              {desc}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="/showcase"
              className="text-sm font-medium hover:text-primary"
            >
              Showcase
            </Link>

            <Link
              href="/community"
              className="text-sm font-medium hover:text-primary"
            >
              Community
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="https://github.com/vmDeshpande/ai-agent-automation"
                target="_blank"
              >
                GitHub
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/docs">Get started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSiteMenuOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-accent"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {siteMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSiteMenuOpen(false)}
          />

          <aside className="absolute right-0 top-0 h-full w-72 bg-background border-l border-border flex flex-col">
            <div className="h-16 flex items-center justify-between px-4 border-b border-border">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setSiteMenuOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-2">
              {[
                ["/docs", "Docs"],
                ["/roadmap", "Roadmap"],
                ["/architecture", "Architecture"],
                ["/execution-model", "Execution Model"],
                ["/internals", "Internals"],
                ["/showcase", "Showcase"],
                ["/community", "Community"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setSiteMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-border space-y-2">
              <Button className="w-full" asChild>
                <Link href="/docs">Get started</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link
                  href="https://github.com/vmDeshpande/ai-agent-automation"
                  target="_blank"
                >
                  GitHub
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
