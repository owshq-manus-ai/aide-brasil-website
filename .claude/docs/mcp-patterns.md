# MCP Query Patterns Cookbook

**Version:** 2.0
**Last Updated:** 2025-12-03
**Related:** [perfect-executor-model.md](./perfect-executor-model.md)

---

## Overview

Model Context Protocol (MCP) servers provide real-time access to external documentation, code examples, and community resources. This cookbook provides ready-to-use query patterns for the Perfect Executor Model.

---

## Available MCP Servers

| Server | Tool Prefix | Best For |
|--------|-------------|----------|
| **Context7** | `mcp__upstash-context-7-mcp__*` | Official library documentation |
| **Ref Tools** | `mcp__ref-tools-ref-tools-mcp__*` | Microsoft Learn, tutorials |
| **Exa** | `mcp__exa__*` | Code search, community examples |
| **Firecrawl** | `mcp__krieg-2065-firecrawl-mcp-server__*` | Deep web scraping |

---

## Context7 Patterns

Context7 retrieves up-to-date documentation from official library sources.

### Step 1: Resolve Library ID

Before querying documentation, resolve the library ID:

```typescript
// Resolve Microsoft Fabric docs
mcp__upstash-context-7-mcp__resolve-library-id({
  libraryName: "microsoft fabric"
})
// Returns: /microsoftdocs/fabric-docs

// Resolve Delta Lake docs
mcp__upstash-context-7-mcp__resolve-library-id({
  libraryName: "delta lake"
})
// Returns: /delta-io/delta

// Resolve PySpark docs
mcp__upstash-context-7-mcp__resolve-library-id({
  libraryName: "pyspark"
})
// Returns: /apache/spark
```

### Step 2: Query Documentation

```typescript
mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "{library-id}",
  topic: "{topic-keywords}",
  tokens: 5000  // Adjust based on needed detail
})
```

### Common Context7 Queries

#### Workspace Monitoring
```typescript
mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
  topic: "workspace monitoring eventhouse logs semantic model",
  tokens: 5000
})
```

#### OneLake Diagnostics
```typescript
mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
  topic: "OneLake diagnostics storage blob logs audit data access",
  tokens: 5000
})
```

#### Spark Diagnostic Emitters
```typescript
mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
  topic: "spark diagnostic emitters logging eventhouse",
  tokens: 5000
})
```

#### KQL Reference
```typescript
mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
  topic: "KQL Kusto query language operators functions aggregations",
  tokens: 8000  // KQL has many operators
})
```

#### Data Factory Pipelines
```typescript
mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
  topic: "data factory pipeline copy activity dataflow orchestration",
  tokens: 5000
})
```

#### Row-Level Security
```typescript
mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
  topic: "row level security RLS security policy T-SQL warehouse",
  tokens: 5000
})
```

#### Git Integration
```typescript
mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
  topic: "git integration azure devops github workspace deployment",
  tokens: 5000
})
```

#### Copilot Features
```typescript
mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
  topic: "copilot fabric natural language code generation KQL SQL",
  tokens: 5000
})
```

---

## Ref Tools Patterns

Ref Tools searches documentation sites and reads specific URLs.

### Search Documentation

```typescript
mcp__ref-tools-ref-tools-mcp__ref_search_documentation({
  query: "{search-query}"
})
```

### Read Specific URL

```typescript
mcp__ref-tools-ref-tools-mcp__ref_read_url({
  url: "{url-from-search-results}"
})
```

### Common Ref Tools Queries

#### Microsoft Learn Tutorials
```typescript
// Search for tutorials
mcp__ref-tools-ref-tools-mcp__ref_search_documentation({
  query: "Microsoft Fabric workspace monitoring setup tutorial"
})

// Read specific tutorial
mcp__ref-tools-ref-tools-mcp__ref_read_url({
  url: "https://learn.microsoft.com/en-us/fabric/fundamentals/workspace-monitoring-overview"
})
```

#### GitHub Samples
```typescript
// Search for samples
mcp__ref-tools-ref-tools-mcp__ref_search_documentation({
  query: "Microsoft Fabric samples GitHub monitoring KQL"
})

// Read specific sample
mcp__ref-tools-ref-tools-mcp__ref_read_url({
  url: "https://github.com/microsoft/fabric-samples/tree/main/monitoring"
})
```

#### REST API Documentation
```typescript
mcp__ref-tools-ref-tools-mcp__ref_search_documentation({
  query: "Microsoft Fabric REST API workspace items pipelines"
})
```

#### Private Documentation
```typescript
// Include ref_src=private for user's private docs
mcp__ref-tools-ref-tools-mcp__ref_search_documentation({
  query: "fabric logging SDK internal documentation ref_src=private"
})
```

---

## Exa Patterns

Exa provides AI-powered web search and code context retrieval.

### Web Search

```typescript
mcp__exa__web_search_exa({
  query: "{search-query}",
  numResults: 8,           // Default: 8
  type: "auto",            // "auto", "fast", or "deep"
  livecrawl: "fallback"    // "fallback" or "preferred"
})
```

### Code Context Search

```typescript
mcp__exa__get_code_context_exa({
  query: "{code-search-query}",
  tokensNum: 5000  // 1000-50000
})
```

### Common Exa Queries

#### Community Examples
```typescript
mcp__exa__get_code_context_exa({
  query: "Microsoft Fabric KQL monitoring dashboard examples 2025",
  tokensNum: 5000
})
```

#### Production Implementations
```typescript
mcp__exa__web_search_exa({
  query: "Microsoft Fabric production monitoring implementation case study",
  numResults: 10,
  type: "deep"
})
```

#### Recent Updates
```typescript
mcp__exa__web_search_exa({
  query: "Microsoft Fabric workspace monitoring breaking changes 2025",
  numResults: 5,
  livecrawl: "preferred"  // Get freshest results
})
```

#### GitHub Code Search
```typescript
mcp__exa__get_code_context_exa({
  query: "site:github.com Microsoft Fabric Python SDK authentication example",
  tokensNum: 8000
})
```

#### Blog Posts
```typescript
mcp__exa__web_search_exa({
  query: "Microsoft Fabric monitoring best practices blog 2025",
  numResults: 5,
  type: "auto"
})
```

#### Stack Overflow Solutions
```typescript
mcp__exa__get_code_context_exa({
  query: "site:stackoverflow.com Microsoft Fabric KQL query error",
  tokensNum: 5000
})
```

---

## Firecrawl Patterns

Firecrawl provides deep web scraping for detailed content extraction.

### Scrape Single Page

```typescript
mcp__krieg-2065-firecrawl-mcp-server__firecrawl_scrape({
  url: "{url}",
  formats: ["markdown"],
  onlyMainContent: true
})
```

### Deep Research

```typescript
mcp__krieg-2065-firecrawl-mcp-server__firecrawl_deep_research({
  query: "{research-query}",
  maxDepth: 5,
  maxUrls: 50,
  timeLimit: 120
})
```

### Common Firecrawl Queries

#### Documentation Deep Dive
```typescript
mcp__krieg-2065-firecrawl-mcp-server__firecrawl_scrape({
  url: "https://learn.microsoft.com/en-us/fabric/fundamentals/workspace-monitoring-overview",
  formats: ["markdown"],
  onlyMainContent: true
})
```

#### Blog Post Extraction
```typescript
mcp__krieg-2065-firecrawl-mcp-server__firecrawl_scrape({
  url: "https://blog.fabric.microsoft.com/en-us/blog/announcing-workspace-monitoring",
  formats: ["markdown"],
  onlyMainContent: true
})
```

#### Research Complex Topic
```typescript
mcp__krieg-2065-firecrawl-mcp-server__firecrawl_deep_research({
  query: "Microsoft Fabric real-time monitoring architecture patterns",
  maxDepth: 3,
  maxUrls: 20,
  timeLimit: 60
})
```

---

## Query Strategy by Use Case

### Validation Query (KB + MCP Agreement)

When validating KB content against current documentation:

```
PARALLEL EXECUTION:

1. Context7 (Official)
   mcp__upstash-context-7-mcp__get-library-docs({
     context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
     topic: "{topic}",
     tokens: 5000
   })

2. Ref Tools (Tutorials)
   mcp__ref-tools-ref-tools-mcp__ref_search_documentation({
     query: "Microsoft Fabric {topic} tutorial"
   })

3. Exa (Community)
   mcp__exa__get_code_context_exa({
     query: "Microsoft Fabric {topic} examples 2025",
     tokensNum: 5000
   })

THEN: Compare all results with KB content
```

### Research Query (KB Gap)

When KB doesn't have coverage:

```
SEQUENTIAL EXECUTION:

1. Context7 (Official - Primary)
   mcp__upstash-context-7-mcp__get-library-docs({
     context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
     topic: "{topic}",
     tokens: 8000  // More tokens for comprehensive info
   })

2. IF Context7 insufficient, Exa (Community)
   mcp__exa__web_search_exa({
     query: "Microsoft Fabric {topic}",
     numResults: 10,
     type: "deep"
   })

3. IF still need more, Firecrawl (Deep Dive)
   mcp__krieg-2065-firecrawl-mcp-server__firecrawl_deep_research({
     query: "Microsoft Fabric {topic}",
     maxUrls: 30
   })

THEN: Synthesize findings, note confidence is MCP-only
```

### Breaking Change Detection

When checking for API changes or deprecations:

```
PARALLEL EXECUTION:

1. Exa (Recent News)
   mcp__exa__web_search_exa({
     query: "Microsoft Fabric {feature} breaking changes 2025",
     numResults: 5,
     livecrawl: "preferred"
   })

2. Context7 (Current Docs)
   mcp__upstash-context-7-mcp__get-library-docs({
     context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
     topic: "{feature} deprecated migration",
     tokens: 5000
   })

3. Ref Tools (Release Notes)
   mcp__ref-tools-ref-tools-mcp__ref_search_documentation({
     query: "Microsoft Fabric release notes {feature} changes"
   })

THEN: Flag any discrepancies with KB content
```

### Code Example Search

When user needs working code:

```
PARALLEL EXECUTION:

1. Exa Code Context (Primary)
   mcp__exa__get_code_context_exa({
     query: "Microsoft Fabric {language} {task} code example",
     tokensNum: 8000
   })

2. Ref Tools (GitHub)
   mcp__ref-tools-ref-tools-mcp__ref_search_documentation({
     query: "site:github.com Microsoft Fabric {task} {language}"
   })

3. Context7 (Official Examples)
   mcp__upstash-context-7-mcp__get-library-docs({
     context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
     topic: "{task} code sample {language}",
     tokens: 5000
   })

THEN: Compare examples, prefer production-tested code
```

---

## MCP Response Handling

### Successful Response

```
MCP returned: {content}

Action:
1. Extract relevant information
2. Compare with KB content
3. Determine agreement status
4. Calculate confidence modifier
```

### Empty Response

```
MCP returned: No results / Empty

Action:
1. Note MCP as "silent" for this topic
2. Fall back to KB-only confidence (0.70-0.85)
3. Try alternative query if critical
4. Note gap in response
```

### Error Response

```
MCP returned: Error / Timeout

Action:
1. Note MCP as "unavailable"
2. Fall back to KB-only confidence (0.70-0.85)
3. Log error for monitoring
4. Note limitation in response
```

### Conflicting Response

```
MCP contradicts KB

Action:
1. Flag as CONFLICT
2. Check recency (newer wins for API changes)
3. Check specificity (more specific wins)
4. If still unclear, present both to user
```

---

## Query Optimization

### Reduce Tokens

For simple validations:

```typescript
// Low tokens for confirmation
mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
  topic: "{specific-feature}",
  tokens: 2000  // Minimal for yes/no validation
})
```

### Increase Tokens

For comprehensive research:

```typescript
// High tokens for full context
mcp__upstash-context-7-mcp__get-library-docs({
  context7CompatibleLibraryID: "/microsoftdocs/fabric-docs",
  topic: "{broad-topic}",
  tokens: 10000  // Maximum detail
})
```

### Topic Keyword Optimization

```
❌ BAD: Too vague
topic: "monitoring"

❌ BAD: Too specific
topic: "SemanticModelLogs table DurationMs column filter greater than 5000"

✅ GOOD: Balanced
topic: "workspace monitoring eventhouse logs semantic model query"
```

---

## Parallel vs Sequential Queries

### Use Parallel When

- Validating KB content (need all sources at once)
- Time-sensitive requests
- Independent information sources

```
PARALLEL:
┌────────┐ ┌────────┐ ┌────────┐
│Context7│ │Ref Tool│ │  Exa   │
└───┬────┘ └───┬────┘ └───┬────┘
    └──────────┼──────────┘
               ▼
         [Reconcile]
```

### Use Sequential When

- Deep research (build on previous results)
- Following links from search results
- Resource-constrained situations

```
SEQUENTIAL:
┌────────┐
│Context7│
└───┬────┘
    ▼
┌────────┐  (if needed)
│Ref Tool│
└───┬────┘
    ▼
┌────────┐  (if still needed)
│Firecrawl│
└────────┘
```

---

## Error Handling

### Timeout Handling

```python
try:
    result = mcp_query(topic)
except TimeoutError:
    # Fall back to KB-only
    confidence = 0.75  # MEDIUM (KB only)
    note = "MCP timeout - using KB pattern only"
```

### Rate Limit Handling

```python
if "rate_limit" in error:
    # Wait and retry once
    time.sleep(5)
    result = mcp_query(topic)

    if "rate_limit" in error:
        # Fall back to KB-only
        confidence = 0.75
        note = "MCP rate limited - using KB pattern only"
```

### Invalid Response Handling

```python
if not is_valid_response(result):
    # Try alternative query
    alternative_result = mcp_query(alternative_topic)

    if not is_valid_response(alternative_result):
        # Fall back to KB-only
        confidence = 0.75
        note = "MCP returned invalid response - using KB pattern only"
```

---

## Related Documentation

- [perfect-executor-model.md](./perfect-executor-model.md) - Full architecture spec
- [confidence-scoring.md](./confidence-scoring.md) - How MCP affects confidence
- [kb-integration.md](./kb-integration.md) - KB usage patterns
- [AGENT_TEMPLATE.md](../agents/AGENT_TEMPLATE.md) - Agent template with MCP section

---

*"MCP is your window to the current world. Use it wisely."*
