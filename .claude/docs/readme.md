# Perfect Executor Model Documentation

**Version:** 2.0
**Last Updated:** 2025-12-03

---

## Overview

This directory contains the architecture documentation for building reliable, trustworthy AI agents in Claude Code using the **Perfect Executor Model**.

---

## Quick Start

### Creating a New Agent

1. Read [executor-model.md](./executor-model.md) to understand the architecture
2. Copy [agent-template.md](./agent-template.md)
3. Fill in the template following the guidelines
4. Save to `.claude/agents/{agent-name}.md`
5. Validate against the checklist

### Understanding the Model

```
THE THREE PILLARS
─────────────────

┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│   GROUNDING   │  │  GUARDRAILS   │  │   GRACEFUL    │
│  (Knowledge)  │  │ (Validation)  │  │  DEGRADATION  │
└───────────────┘  └───────────────┘  └───────────────┘
       │                  │                  │
       │    PARALLEL      │                  │
       └──────────────────┼──────────────────┘
                          │
                    CONFIDENCE
                    CALCULATION
                          │
                    TASK TIER
                    THRESHOLD
                          │
                    EXECUTION
                    DECISION
```

---

## Documentation Index

| Document | Purpose | Read When |
|----------|---------|-----------|
| [executor-model.md](./executor-model.md) | Complete architecture specification | Understanding the overall system |
| [confidence-scoring.md](./confidence-scoring.md) | Detailed scoring mechanics | Implementing confidence calculation |
| [kb-integration.md](./kb-integration.md) | How to use the knowledge base | Working with KB files |
| [mcp-patterns.md](./mcp-patterns.md) | MCP query cookbook | Querying external sources |
| [agent-template.md](./agent-template.md) | Copy-paste template for new agents | Creating a new agent |

---

## Core Concepts

### Grounding (Knowledge)

Agents are grounded in validated knowledge from:
- **Local KB** (`.claude/kb/`) - Curated, project-specific content
- **Project Context** - CLAUDE.md, codebase patterns
- **Domain Expertise** - Agent prompt instructions

### Guardrails (Validation)

Before execution, agents validate using:
- **MCP Tools** - Context7, Ref Tools, Exa, Firecrawl
- **Agreement Check** - KB and MCP must agree
- **Confidence Scoring** - Agreement-based, not additive

### Graceful Degradation

When confidence is insufficient:
- **High confidence** → Execute
- **Medium confidence** → Execute with disclaimer
- **Low confidence** → Partial answer or ask user
- **Conflict detected** → Investigate before proceeding

---

## Key Decisions

### Parallel vs Sequential Validation

**Decision:** PARALLEL

Sources are queried simultaneously, then reconciled. This provides:
- Faster responses (no waiting)
- Better conflict detection
- Resilience (if one source fails, others work)

### Additive vs Agreement-Based Confidence

**Decision:** AGREEMENT-BASED

The old additive model hid conflicts. The new model:
- Explicitly detects KB vs MCP disagreements
- Forces resolution before execution
- Provides clearer confidence semantics

### Fixed vs Adaptive Thresholds

**Decision:** ADAPTIVE

Different tasks carry different risks:
- CRITICAL (0.98) - Security, production
- IMPORTANT (0.95) - Schema, orchestration
- STANDARD (0.90) - Queries, transforms
- ADVISORY (0.80) - Suggestions, reviews

---

## Directory Structure

```
.claude/
├── docs/                         ← You are here
│   ├── README.md                 ← This file
│   ├── executor-model.md         ← Core architecture
│   ├── confidence-scoring.md     ← Scoring mechanics
│   ├── kb-integration.md         ← KB usage guide
│   ├── mcp-patterns.md           ← MCP cookbook
│   └── agent-template.md         ← Agent template
│
├── agents/                       ← Agent definitions
│   ├── fabric-logging-specialist.md
│   ├── fabric-architect.md
│   ├── the-planner.md
│   └── ... (other agents)
│
├── kb/                           ← Knowledge base (by domain)
│   ├── microsoft-fabric/         ← Microsoft Fabric KB
│   │   ├── 00-quick-start/
│   │   ├── 01-logging-monitoring/
│   │   └── ... (other sections)
│   ├── lakeflow/                 ← Future: Lakeflow KB
│   └── {other-domain}/           ← Future: Other domains
│
└── claude.md                     ← Project instructions
```

---

## Related Resources

### Knowledge Base

- [kb/microsoft-fabric/readme.md](../kb/microsoft-fabric/readme.md) - Microsoft Fabric KB

### Project Context

- [CLAUDE.md](../claude.md) - Project instructions

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | 2025-12-03 | Parallel validation, adaptive thresholds, agreement-based confidence |
| 1.0 | 2025-01-01 | Initial three-layer sequential model |

---

*"Trust but Verify, Fail Gracefully"*
