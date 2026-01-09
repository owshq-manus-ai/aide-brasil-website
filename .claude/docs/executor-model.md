# The Perfect Executor Model v2.0

**Version:** 2.0
**Last Updated:** 2025-12-03
**Status:** Production Standard
**Applies To:** All Claude Code SubAgents

---

## Executive Summary

The Perfect Executor Model is a standardized architecture for building reliable, trustworthy AI agents in Claude Code. It solves the fundamental challenge of LLM systems: **how to execute tasks confidently without hallucination**.

**Core Principle:** *"Trust but Verify, Fail Gracefully"*

Every agent built on this model implements three pillars:
1. **Grounding** - Knowledge from validated sources
2. **Guardrails** - Validation before execution
3. **Graceful Degradation** - Safe handling of uncertainty

---

## The Three Pillars

```
                    THE PERFECT EXECUTOR MODEL
    ================================================================

    ┌─────────────────────────────────────────────────────────────┐
    │                                                             │
    │   ┌───────────────┐ ┌───────────────┐ ┌───────────────┐   │
    │   │   GROUNDING   │ │  GUARDRAILS   │ │   GRACEFUL    │   │
    │   │  (Knowledge)  │ │ (Validation)  │ │  DEGRADATION  │   │
    │   │               │ │               │ │               │   │
    │   │ "What do I    │ │ "Is it still  │ │ "What if I'm  │   │
    │   │  know?"       │ │  true?"       │ │  uncertain?"  │   │
    │   │               │ │               │ │               │   │
    │   │ - Local KB    │ │ - MCP Query   │ │ - Ask user    │   │
    │   │ - Project ctx │ │ - Agreement   │ │ - Partial ans │   │
    │   │ - Domain exp  │ │ - Recency     │ │ - Flag risk   │   │
    │   └───────────────┘ └───────────────┘ └───────────────┘   │
    │           │                 │                 │            │
    │           └─────────────────┼─────────────────┘            │
    │                             │                              │
    │                    PARALLEL EXECUTION                      │
    │                    (not sequential)                        │
    │                             │                              │
    │                             ▼                              │
    │              ┌─────────────────────────────┐               │
    │              │   CONFIDENCE CALCULATION    │               │
    │              │   (Agreement-Based)         │               │
    │              └─────────────────────────────┘               │
    │                             │                              │
    │                             ▼                              │
    │              ┌─────────────────────────────┐               │
    │              │   TASK TIER THRESHOLD       │               │
    │              │   (Adaptive by Risk)        │               │
    │              └─────────────────────────────┘               │
    │                             │                              │
    │                             ▼                              │
    │              ┌─────────────────────────────┐               │
    │              │   EXECUTION DECISION        │               │
    │              └─────────────────────────────┘               │
    │                                                             │
    └─────────────────────────────────────────────────────────────┘
```

---

## Pillar 1: Grounding (Knowledge)

Grounding ensures the agent operates from **validated, contextual knowledge** rather than parametric memory alone.

### Knowledge Hierarchy

```
Priority 1: Local Knowledge Base (.claude/kb/)
├── Curated, version-controlled content
├── Project-specific patterns and examples
├── Zero latency (local file read)
└── Highest trust for project context

Priority 2: Project Context
├── CLAUDE.md instructions
├── Existing codebase patterns
├── Recent git history
└── Current file context

Priority 3: Domain Expertise (Agent Prompt)
├── Agent-specific knowledge in prompt
├── Best practices and guardrails
├── Common patterns and anti-patterns
└── Domain vocabulary and concepts
```

### KB Integration Rules

1. **Always Read First** - Before answering domain questions, read relevant KB file
2. **Cite Sources** - Reference KB file paths in responses
3. **Trust but Verify** - KB is baseline, MCP validates currency
4. **Gap Detection** - Note when KB lacks coverage for a topic

### KB File Reference Pattern

Every agent MUST document its KB sources explicitly:

```markdown
## Your Knowledge Base

**Primary KB Section:** `.claude/kb/{section}/` ({X} files, {Y}+ lines)
- `file1.md` ({Z} lines) - {description}
- `file2.md` ({Z} lines) - {description}

**Supporting KB Sections:**
- `.claude/kb/{other-section}/` - {why relevant}
```

---

## Pillar 2: Guardrails (Validation)

Guardrails prevent execution of potentially incorrect or outdated information through **multi-source validation**.

### Parallel Validation Architecture

```
                    USER QUERY
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
    ┌──────────┐  ┌──────────┐  ┌──────────┐
    │   KB     │  │   MCP    │  │  Cross-  │
    │  Query   │  │  Query   │  │   Val    │
    │  (0ms)   │  │ (2-3s)   │  │  (1-2s)  │
    └────┬─────┘  └────┬─────┘  └────┬─────┘
         │             │             │
         └─────────────┼─────────────┘
                       │
                       ▼
              ┌────────────────┐
              │  RECONCILIATION │
              │  (Agreement    │
              │   Calculation) │
              └────────────────┘
```

**Key Insight:** Sources are queried in PARALLEL, not sequentially. This:
- Reduces latency (don't wait for KB before MCP)
- Enables conflict detection
- Provides resilience (if one source fails, others still work)

### MCP Tools Available

| MCP Server | Purpose | Best For |
|------------|---------|----------|
| **Context7** | Official library documentation | API references, current syntax |
| **Ref Tools** | Microsoft Learn + GitHub search | Tutorials, examples |
| **Exa** | Code search + web discovery | Community patterns, recent posts |
| **Firecrawl** | Deep web scraping | Blog posts, case studies |

### MCP Query Strategy

```
For VALIDATION queries:
1. Context7: Get official current documentation
2. Ref Tools: Find tutorials/examples
3. Exa: Check community implementations

For RESEARCH queries:
1. Exa web_search: Recent developments
2. Firecrawl: Deep dive specific URLs
3. Context7: Official stance
```

---

## Pillar 3: Graceful Degradation

When confidence is insufficient, the agent must **fail safely** rather than hallucinate.

### Degradation Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                 GRACEFUL DEGRADATION LADDER                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Level 1: FULL EXECUTION (Confidence >= Threshold)         │
│  ─────────────────────────────────────────────────         │
│  "Here's the validated solution: [code/answer]"            │
│  Sources: KB confirmed, MCP validated                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Level 2: EXECUTE WITH DISCLAIMER (0.80 <= Conf < Thresh)  │
│  ─────────────────────────────────────────────────         │
│  "Here's a solution with medium confidence (0.85):         │
│   [code/answer]                                             │
│   Note: MCP didn't confirm, based on KB pattern only.      │
│   Please verify before production use."                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Level 3: PARTIAL ANSWER (0.60 <= Confidence < 0.80)       │
│  ─────────────────────────────────────────────────         │
│  "I can provide partial guidance:                          │
│   - What I know: [partial answer]                          │
│   - What I'm uncertain about: [gaps]                       │
│   - Suggested next steps: [research actions]"              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Level 4: ASK USER (Confidence < 0.60 OR Conflict)         │
│  ─────────────────────────────────────────────────         │
│  "I need clarification before proceeding:                  │
│   - KB says: [X]                                           │
│   - MCP says: [Y]                                          │
│   - Which approach should I use?"                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Level 5: REFUSE (Conflict + Critical Task)                │
│  ─────────────────────────────────────────────────         │
│  "I cannot safely execute this request:                    │
│   - Reason: [conflict/insufficient data]                   │
│   - Risk: [what could go wrong]                            │
│   - Alternative: [safer approach or manual steps]"         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Conflict Resolution Protocol

When KB and MCP disagree:

```
1. CHECK RECENCY
   - If MCP info is newer (API change, deprecation) → MCP wins
   - If MCP info is older or generic → KB wins (project-specific)

2. CHECK SPECIFICITY
   - More specific to the exact use case wins
   - General best practice < Project-specific pattern

3. CHECK RISK LEVEL
   - For CRITICAL tasks → Ask user, don't guess
   - For ADVISORY tasks → Use most recent, note uncertainty

4. STILL CONFLICTED?
   - Present both options to user
   - Explain trade-offs
   - Let user decide
```

---

## Confidence Calculation

### Agreement-Based Scoring (Not Additive)

The old model used additive scoring:
```
OLD: KB(0.40) + MCP(0.30) + Community(0.15) + Recency(0.15) = confidence
PROBLEM: Hides conflicts, always produces "reasonable" numbers
```

The new model uses **agreement-based scoring**:

```
┌──────────────────────────────────────────────────────────────────┐
│                    AGREEMENT MATRIX                              │
├──────────────┬──────────────┬──────────────┬────────────────────┤
│              │ MCP Agrees   │ MCP Disagrees│ MCP Silent         │
├──────────────┼──────────────┼──────────────┼────────────────────┤
│ KB Has       │ HIGH         │ CONFLICT     │ MEDIUM             │
│ Pattern      │ (0.95-1.00)  │ (investigate)│ (0.70-0.85)        │
├──────────────┼──────────────┼──────────────┼────────────────────┤
│ KB Silent    │ MCP-PRIMARY  │ N/A          │ LOW                │
│              │ (0.80-0.90)  │              │ (0.40-0.60)        │
└──────────────┴──────────────┴──────────────┴────────────────────┘
```

### Confidence Modifiers

After base agreement score, apply modifiers:

```
BASE SCORE (from agreement matrix)
    │
    ├── Recency Modifier
    │   └── Info < 3 months old: +0.05
    │   └── Info > 6 months old: -0.05
    │   └── Known breaking changes: -0.10
    │
    ├── Community Modifier
    │   └── 10+ examples found: +0.05
    │   └── Production implementations: +0.05
    │   └── No examples found: -0.05
    │
    ├── Specificity Modifier
    │   └── Exact use case match: +0.05
    │   └── Generic pattern: +0.00
    │   └── Tangentially related: -0.05
    │
    └── FINAL CONFIDENCE SCORE
```

### Example Calculation

```
Query: "How do I enable workspace monitoring in Fabric?"

Step 1: Parallel Query
├── KB: Read 01-workspace-monitoring.md → Has exact pattern
├── MCP: Context7 query → Confirms, matches KB
└── Community: Exa search → 25+ implementations

Step 2: Agreement Matrix
└── KB Has Pattern + MCP Agrees → HIGH (0.95 base)

Step 3: Modifiers
├── Recency: Info from Jan 2025, current → +0.05
├── Community: 25+ examples → +0.05
└── Specificity: Exact match → +0.05

Step 4: Final Score
└── 0.95 + 0.05 + 0.05 + 0.05 = 1.00 (capped)

Result: HIGH CONFIDENCE (1.00) → Execute
```

---

## Task Tier Thresholds

Different tasks carry different risks. The threshold for execution adapts accordingly.

### Tier Definitions

```
┌─────────────────────────────────────────────────────────────────┐
│                      TASK TIERS                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TIER 1: CRITICAL                        Threshold: 0.98       │
│  ─────────────────────────────────────────────────────────     │
│  Tasks where errors cause significant harm:                    │
│  • Security configurations (RLS, DDM, encryption)              │
│  • Production deployments                                       │
│  • Data deletion or destructive operations                     │
│  • Credential/secret handling                                   │
│  • Cross-tenant operations                                      │
│                                                                 │
│  Failure Mode: REFUSE if below threshold                       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TIER 2: IMPORTANT                       Threshold: 0.95       │
│  ─────────────────────────────────────────────────────────     │
│  Tasks with significant but recoverable impact:                │
│  • Schema changes (DDL statements)                             │
│  • Pipeline orchestration                                       │
│  • Cross-workspace operations                                   │
│  • API integrations                                             │
│  • Configuration changes                                        │
│                                                                 │
│  Failure Mode: ASK USER if below threshold                     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TIER 3: STANDARD                        Threshold: 0.90       │
│  ─────────────────────────────────────────────────────────     │
│  Routine tasks with low-moderate impact:                       │
│  • Query generation (KQL, SQL, DAX)                            │
│  • Code transformations                                         │
│  • Documentation generation                                     │
│  • Analysis and research tasks                                  │
│  • Report creation                                              │
│                                                                 │
│  Failure Mode: EXECUTE WITH DISCLAIMER if 0.80-0.90            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TIER 4: ADVISORY                        Threshold: 0.80       │
│  ─────────────────────────────────────────────────────────     │
│  Suggestions and recommendations:                               │
│  • Best practice recommendations                                │
│  • Architecture suggestions                                     │
│  • Performance optimization ideas                               │
│  • Code review comments                                         │
│  • Learning/explanation requests                                │
│                                                                 │
│  Failure Mode: PARTIAL ANSWER if 0.60-0.80                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Tier Classification Logic

Agents should classify tasks at the START of processing:

```python
def classify_task_tier(task_description: str, context: dict) -> int:
    """
    Classify task into tiers 1-4 based on keywords and context.
    """

    # Tier 1 indicators (CRITICAL)
    critical_keywords = [
        "security", "RLS", "row-level", "encryption", "secret",
        "credential", "production", "delete", "drop", "truncate",
        "permission", "role", "deploy to prod"
    ]

    # Tier 2 indicators (IMPORTANT)
    important_keywords = [
        "schema", "DDL", "CREATE TABLE", "ALTER", "pipeline",
        "orchestrat", "cross-workspace", "API", "integrat",
        "configuration", "setting"
    ]

    # Tier 3 indicators (STANDARD)
    standard_keywords = [
        "query", "KQL", "SQL", "DAX", "transform", "document",
        "analyze", "report", "generate"
    ]

    # Default to ADVISORY (Tier 4) for suggestions/explanations

    # Check in order of priority
    if any(kw in task_description.lower() for kw in critical_keywords):
        return 1  # CRITICAL
    elif any(kw in task_description.lower() for kw in important_keywords):
        return 2  # IMPORTANT
    elif any(kw in task_description.lower() for kw in standard_keywords):
        return 3  # STANDARD
    else:
        return 4  # ADVISORY
```

---

## Agent Template Structure

Every agent following this model MUST include these 8 sections:

```
┌─────────────────────────────────────────────────────────────────┐
│                    AGENT TEMPLATE SECTIONS                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SECTION 1: FRONTMATTER (Required)                             │
│  ──────────────────────────────────                            │
│  YAML header with name, description, tools, model              │
│                                                                 │
│  SECTION 2: IDENTITY & PHILOSOPHY (Required)                   │
│  ──────────────────────────────────                            │
│  Who you are, core belief, mission statement                   │
│                                                                 │
│  SECTION 3: GROUNDING - Knowledge Sources (Required)           │
│  ──────────────────────────────────                            │
│  KB files with descriptions, supporting sections               │
│                                                                 │
│  SECTION 4: GUARDRAILS - Validation System (Required)          │
│  ──────────────────────────────────                            │
│  Three-pillar validation, confidence thresholds                │
│                                                                 │
│  SECTION 5: GRACEFUL DEGRADATION (Required)                    │
│  ──────────────────────────────────                            │
│  What to do when uncertain, conflict resolution                │
│                                                                 │
│  SECTION 6: CAPABILITIES - Domain Expertise (Required)         │
│  ──────────────────────────────────                            │
│  What you can do, with detailed code examples                  │
│                                                                 │
│  SECTION 7: EXECUTION PATTERNS (Required)                      │
│  ──────────────────────────────────                            │
│  Step-by-step validation examples, MCP queries                 │
│                                                                 │
│  SECTION 8: BEST PRACTICES & MISSION (Required)                │
│  ──────────────────────────────────                            │
│  Always/never rules, closing mission statement                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

See `AGENT_TEMPLATE.md` for the complete copy-paste template.

---

## Implementation Checklist

When creating a new agent or updating an existing one:

### Pre-Implementation
- [ ] Identify primary KB section for this domain
- [ ] List supporting KB sections
- [ ] Define task tier for typical requests
- [ ] Choose appropriate confidence threshold

### Template Sections
- [ ] Section 1: Frontmatter with correct tools list
- [ ] Section 2: Clear identity and memorable philosophy
- [ ] Section 3: KB file mapping with line counts
- [ ] Section 4: Validation system with MCP queries
- [ ] Section 5: Graceful degradation ladder
- [ ] Section 6: Domain capabilities with code examples
- [ ] Section 7: At least 2 execution pattern examples
- [ ] Section 8: Best practices and mission statement

### Quality Checks
- [ ] KB files referenced actually exist
- [ ] MCP query examples are valid
- [ ] Code examples are tested and working
- [ ] Confidence thresholds match task tier
- [ ] Graceful degradation covers all scenarios

---

## Related Documentation

- [AGENT_TEMPLATE.md](../agents/AGENT_TEMPLATE.md) - Copy-paste template for new agents
- [confidence-scoring.md](./confidence-scoring.md) - Deep dive into confidence calculation
- [kb-integration.md](./kb-integration.md) - How to effectively use the knowledge base
- [mcp-patterns.md](./mcp-patterns.md) - MCP query cookbook and examples
- [agents/README.md](../agents/README.md) - Index of all available agents

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | 2025-12-03 | Parallel validation, adaptive thresholds, agreement-based confidence |
| 1.0 | 2025-01-01 | Initial three-layer sequential model |

---

**Remember:** The Perfect Executor Model exists to build **trust through transparency**. Users trust agents that explain their reasoning, cite their sources, and admit their limitations.

*"Trust but Verify, Fail Gracefully"*
