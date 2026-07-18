export type Topic = {
  slug: string;
  title: string;
  symbol: string;
  description: string;
  guidance: string;
  learningPath: string[];
  related: string[];
};

export const topics: Topic[] = [
  {
    slug: "state-management",
    title: "State Management",
    symbol: "◉",
    description:
      "Decide where state should live, how it flows through the application, and when to use State, Binding, Observable, and Environment.",
    guidance:
      "Start with local state and move it upward only when multiple features genuinely need access to it.",
    learningPath: [
      "Understand local state and view ownership.",
      "Pass state using bindings and observable models.",
      "Share dependencies through the environment.",
      "Design feature boundaries and application state."
    ],
    related: ["dependency-injection", "navigation", "testing"]
  },
  {
    slug: "navigation",
    title: "Navigation",
    symbol: "↗",
    description:
      "Build predictable navigation flows with NavigationStack, tabs, deep links, sheets, and independent feature routes.",
    guidance:
      "Keep navigation state explicit. Views should describe destinations while a focused routing model coordinates larger flows.",
    learningPath: [
      "Learn value-based NavigationStack APIs.",
      "Model destinations with enums.",
      "Support independent tab navigation.",
      "Add deep links and restoration."
    ],
    related: ["state-management", "dependency-injection", "testing"]
  },
  {
    slug: "swiftdata",
    title: "SwiftData",
    symbol: "◎",
    description:
      "Explore persistence, relationships, querying, syncing, migrations, previews, and production SwiftData patterns.",
    guidance:
      "Treat persistence models as part of your data boundary and keep user-interface state separate from stored domain data.",
    learningPath: [
      "Model and query persistent data.",
      "Handle relationships and deletion rules.",
      "Separate persistence from presentation.",
      "Add migrations and synchronization."
    ],
    related: ["state-management", "networking", "testing"]
  },
  {
    slug: "dependency-injection",
    title: "Dependency Injection",
    symbol: "⌘",
    description:
      "Manage services, clients, repositories, previews, and test doubles without hiding dependencies behind global singletons.",
    guidance:
      "Inject stable application dependencies near the composition root and pass feature-specific dependencies only where required.",
    learningPath: [
      "Identify true application dependencies.",
      "Create a composition root.",
      "Inject dependencies through Environment.",
      "Replace dependencies in tests and previews."
    ],
    related: ["state-management", "networking", "testing"]
  },
  {
    slug: "networking",
    title: "Networking",
    symbol: "⇄",
    description:
      "Design HTTP clients, endpoints, DTOs, authentication, caching, error handling, and resilient loading states.",
    guidance:
      "Keep transport concerns outside views. Decode network responses into intentional application models and surface meaningful errors.",
    learningPath: [
      "Build a reusable HTTP client.",
      "Model endpoints and request bodies.",
      "Separate DTOs from application models.",
      "Handle authentication, caching, and retries."
    ],
    related: ["dependency-injection", "state-management", "testing"]
  },
  {
    slug: "testing",
    title: "Testing",
    symbol: "✓",
    description:
      "Test business rules, dependencies, navigation, persistence, networking, and complete user workflows.",
    guidance:
      "Test observable behavior and business rules instead of private implementation details.",
    learningPath: [
      "Test pure rules and transformations.",
      "Replace external dependencies with controlled doubles.",
      "Write integration tests around feature boundaries.",
      "Use end-to-end tests for critical workflows."
    ],
    related: ["dependency-injection", "networking", "state-management"]
  }
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
