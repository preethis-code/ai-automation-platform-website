import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vmdeshpande.github.io/ai-automation-platform-website"

  const routes = [
    "",
    "/features",
    "/roadmap",
    "/showcase",
    "/community",
    "/architecture",
    "/execution-model",
    "/internals",

    "/docs",
    "/docs/quickstart",
    "/docs/installation",
    "/docs/deployment",
    "/docs/configuration",
    "/docs/workflows",
    "/docs/agents",
    "/docs/tools",
    "/docs/memory",
    "/docs/rag",
    "/docs/scheduler",
    "/docs/runner",
    "/docs/logs",
    "/docs/security",
    "/docs/local-first",
    "/docs/api-reference",
    "/docs/architecture",
    "/docs/why",
    "/docs/why-compare"
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.startsWith("/docs") ? 0.7 : 0.8,
  }))
}