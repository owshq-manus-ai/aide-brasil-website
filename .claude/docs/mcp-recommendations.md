# MCP Recommendations for AIDE Brasil

**Purpose:** Recommended MCP servers for maximum frontend/mobile development experience
**Version:** 1.0
**Last Updated:** 2025-12-26

---

## Currently Installed MCPs

| MCP Server | Status | Primary Use |
|------------|--------|-------------|
| **Context7** (`upstash-context-7-mcp`) | ✅ Active | Library documentation |
| **Exa** (`exa`) | ✅ Active | Code search, web research |
| **Ref-tools** (`ref-tools-ref-tools-mcp`) | ✅ Active | Documentation search |
| **Firecrawl** (`krieg-2065-firecrawl-mcp-server`) | ✅ Active | Deep web scraping |

---

## Recommended MCPs to Install

### 1. Puppeteer MCP (HIGH PRIORITY)

**Why:** Critical for social media image generation and visual testing

**Repository:** `github.com/anthropics/mcp-server-puppeteer`

**Use Cases:**
- Generate LinkedIn/Instagram images from HTML templates
- Visual regression testing
- Screenshot capture for documentation
- Browser automation for testing

**Installation:**
```bash
npm install -g @anthropic-ai/mcp-server-puppeteer
```

**Configuration (.claude/settings.json):**
```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-puppeteer"],
      "env": {
        "PUPPETEER_HEADLESS": "true"
      }
    }
  }
}
```

**Agent Integration:**
```typescript
// In social-media-image-generator.md
tools: ..., mcp__puppeteer__*
```

---

### 2. GitHub MCP (HIGH PRIORITY)

**Why:** Direct GitHub integration for PRs, issues, and code review

**Repository:** `github.com/anthropics/mcp-server-github`

**Use Cases:**
- Create pull requests directly
- Review PRs with inline comments
- Manage issues
- Access private repositories
- Check CI/CD status

**Installation:**
```bash
npm install -g @anthropic-ai/mcp-server-github
```

**Configuration:**
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

**Agent Integration:**
```typescript
// In code-reviewer.md
tools: ..., mcp__github__create_pull_request, mcp__github__create_issue
```

---

### 3. Filesystem MCP (MEDIUM PRIORITY)

**Why:** Enhanced file operations beyond Read/Write

**Repository:** `github.com/anthropics/mcp-server-filesystem`

**Use Cases:**
- Bulk file operations
- Directory watching
- File system events
- Advanced search patterns

**Configuration:**
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-filesystem"],
      "env": {
        "ALLOWED_PATHS": "/Users/luanmorenomaciel/GitHub/aide-brasil-website"
      }
    }
  }
}
```

---

### 4. Brave Search MCP (MEDIUM PRIORITY)

**Why:** Alternative search for when Exa has rate limits

**Repository:** `github.com/anthropics/mcp-server-brave-search`

**Use Cases:**
- Web search backup
- Different search perspective
- Recent news and updates

**Configuration:**
```json
{
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "${BRAVE_API_KEY}"
      }
    }
  }
}
```

---

### 5. Slack MCP (LOW PRIORITY - Future Backend)

**Why:** Team notifications and alerts

**Repository:** `github.com/anthropics/mcp-server-slack`

**Use Cases:**
- Notify team of deployments
- Alert on errors
- Share build status
- Integration with workflows

---

## MCP Query Patterns for Frontend Development

### React Documentation

```typescript
// Get React hook documentation
mcp__upstash-context-7-mcp__resolve-library-id({
  libraryName: "react"
})
// Returns: /facebook/react

mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/facebook/react",
  topic: "useEffect cleanup memory leak",
  tokens: 5000
})
```

### TailwindCSS Patterns

```typescript
// Get Tailwind utilities
mcp__upstash-context-7-mcp__resolve-library-id({
  libraryName: "tailwindcss"
})
// Returns: /tailwindlabs/tailwindcss

mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/tailwindlabs/tailwindcss",
  topic: "backdrop-filter blur glassmorphism",
  tokens: 3000
})
```

### Framer Motion Animations

```typescript
// Get animation documentation
mcp__upstash-context-7-mcp__resolve-library-id({
  libraryName: "framer motion"
})
// Returns: /framer/motion

mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/framer/motion",
  topic: "whileInView scroll animation variants",
  tokens: 5000
})
```

### Code Examples Search

```typescript
// Search for implementation examples
mcp__exa__get_code_context_exa({
  query: "React form validation Brazilian phone mask 2025",
  tokensNum: 8000
})
```

### Deep Research

```typescript
// When you need comprehensive information
mcp__krieg-2065-firecrawl-mcp-server__firecrawl_deep_research({
  query: "React 18 performance optimization patterns production",
  maxDepth: 5,
  maxUrls: 30,
  timeLimit: 120
})
```

---

## MCP Usage by Agent

| Agent | Primary MCPs | Query Types |
|-------|--------------|-------------|
| **the-planner** | Context7, Exa, Firecrawl | Architecture research |
| **code-reviewer** | Exa | Security patterns, best practices |
| **rapid-page-builder** | Exa | Component examples |
| **animation-architect** | Context7 (Framer Motion) | Animation patterns |
| **debug-detective** | Exa | Error solutions |
| **form-wizard** | Context7 (React) | Form patterns |
| **mobile-experience** | Exa | Mobile optimization |
| **performance-guardian** | Exa, Context7 | Performance patterns |

---

## MCP Rate Limits & Fallbacks

### Context7

```
Limits: Generally unlimited for library docs
Fallback: Use Exa code search if Context7 is slow
```

### Exa

```
Limits: ~1000 queries/day
Fallback: Use Firecrawl deep_research or web_search_exa sparingly
```

### Firecrawl

```
Limits: Based on plan
Fallback: Use Exa web_search for simpler queries
```

### Fallback Strategy

```typescript
// Primary: Context7
try {
  result = await mcp__upstash-context-7-mcp__get-library-docs(...)
} catch {
  // Fallback: Exa
  result = await mcp__exa__get_code_context_exa(...)
}
```

---

## Best Practices

### 1. Parallel Queries

When validating information, query multiple sources in parallel:

```
PARALLEL:
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│  Context7   │ │    Exa      │ │ Ref-tools   │
│ (official)  │ │ (community) │ │ (tutorials) │
└─────────────┘ └─────────────┘ └─────────────┘
        ↓               ↓               ↓
              RECONCILE RESULTS
```

### 2. Token Optimization

```typescript
// Simple validation: 2000-3000 tokens
tokens: 2000

// Moderate research: 5000 tokens
tokens: 5000

// Comprehensive: 8000-10000 tokens
tokens: 10000
```

### 3. Topic Keyword Optimization

```
❌ TOO VAGUE: "react"
❌ TOO SPECIFIC: "useEffect with async function and cleanup for fetching data from REST API with error handling"
✅ BALANCED: "useEffect async cleanup fetch error handling"
```

### 4. Caching Considerations

- WebFetch has 15-minute cache
- Context7 results are generally stable
- Exa livecrawl: "preferred" for fresh, "fallback" for cached

---

## Installation Priority Summary

| Priority | MCP | Reason |
|----------|-----|--------|
| **HIGH** | Puppeteer | Critical for image generation |
| **HIGH** | GitHub | Direct PR/issue management |
| **MEDIUM** | Filesystem | Enhanced file operations |
| **MEDIUM** | Brave Search | Search backup |
| **LOW** | Slack | Future backend integration |

---

## Future Considerations

### When Adding Backend

```
Recommended MCPs for Backend:
- PostgreSQL MCP (database operations)
- Redis MCP (caching)
- AWS MCP (cloud services)
- Docker MCP (container management)
```

### When Adding Testing

```
Recommended MCPs for Testing:
- Playwright MCP (E2E testing)
- Puppeteer MCP (visual testing)
- Coverage MCP (code coverage)
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-12-26 | Initial recommendations |