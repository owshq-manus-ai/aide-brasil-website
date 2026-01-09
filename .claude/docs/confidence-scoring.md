# Confidence Scoring System

**Version:** 2.0
**Last Updated:** 2025-12-03
**Related:** [perfect-executor-model.md](./perfect-executor-model.md)

---

## Overview

The Confidence Scoring System determines whether an agent should execute, ask for confirmation, or refuse a task. Unlike simple additive scoring, this system uses **agreement-based calculation** that explicitly detects conflicts between sources.

---

## Core Principle: Agreement Over Addition

### Why Not Additive?

The old additive model had a critical flaw:

```
OLD MODEL (Additive):
─────────────────────
KB says: "Use method A"           → 0.40
MCP says: "Use method B"          → 0.30
Community: Has examples           → 0.15
Recent: No changes                → 0.15
───────────────────────────────────────
TOTAL: 1.00 (High confidence!)

PROBLEM: KB and MCP DISAGREE, but score is still high!
```

The agreement-based model catches this:

```
NEW MODEL (Agreement-Based):
────────────────────────────
KB says: "Use method A"
MCP says: "Use method B"
Status: CONFLICT DETECTED → Confidence = INVESTIGATE

Result: Agent asks user which approach to use
```

---

## The Agreement Matrix

```
┌─────────────────────────────────────────────────────────────────────┐
│                      AGREEMENT MATRIX                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│              │ MCP AGREES      │ MCP DISAGREES   │ MCP SILENT      │
│              │ (confirms KB)   │ (contradicts)   │ (no info)       │
│ ─────────────┼─────────────────┼─────────────────┼─────────────────│
│              │                 │                 │                 │
│ KB HAS       │ HIGH            │ CONFLICT        │ MEDIUM          │
│ PATTERN      │ Base: 0.95      │ Base: 0.50      │ Base: 0.75      │
│              │ Range: 0.95-1.0 │ (investigate)   │ Range: 0.70-0.85│
│              │                 │                 │                 │
│ ─────────────┼─────────────────┼─────────────────┼─────────────────│
│              │                 │                 │                 │
│ KB SILENT    │ MCP-PRIMARY     │ N/A             │ LOW             │
│ (no pattern) │ Base: 0.85      │ (impossible)    │ Base: 0.50      │
│              │ Range: 0.80-0.90│                 │ Range: 0.40-0.60│
│              │                 │                 │                 │
└─────────────────────────────────────────────────────────────────────┘
```

### Scenario Definitions

#### HIGH (KB + MCP Agree)
- KB has documented pattern
- MCP confirms pattern is current
- Highest confidence scenario
- Safe to execute for all task tiers

#### MEDIUM (KB Only)
- KB has documented pattern
- MCP returned no relevant info (topic not covered, query failed)
- Moderate confidence
- Safe for Tier 3-4, ask user for Tier 1-2

#### MCP-PRIMARY (MCP Only)
- KB doesn't cover this topic
- MCP provides authoritative answer
- Good confidence but less project-specific
- Note: May not match project conventions

#### CONFLICT (KB vs MCP Disagree)
- KB says one thing, MCP says another
- ALWAYS triggers investigation
- Never execute without resolution
- See: Conflict Resolution Protocol

#### LOW (Neither Has Info)
- KB doesn't cover topic
- MCP returned nothing useful
- Requires research or user input
- Typically advisory-only response

---

## Confidence Modifiers

After determining base score from agreement matrix, apply modifiers:

### Recency Modifier

```
┌─────────────────────────────────────────────────────────────────────┐
│                      RECENCY MODIFIER                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Information Age          │ Modifier  │ Rationale                  │
│ ──────────────────────────┼───────────┼────────────────────────────│
│  < 1 month old            │ +0.05     │ Very current               │
│  1-3 months old           │ +0.03     │ Likely current             │
│  3-6 months old           │  0.00     │ Baseline                   │
│  6-12 months old          │ -0.03     │ May have changed           │
│  > 12 months old          │ -0.05     │ Verify before using        │
│  Known breaking change    │ -0.15     │ High risk of outdated      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Community Modifier

```
┌─────────────────────────────────────────────────────────────────────┐
│                     COMMUNITY MODIFIER                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Evidence Level           │ Modifier  │ Rationale                  │
│ ──────────────────────────┼───────────┼────────────────────────────│
│  Production implementations│ +0.05    │ Proven in real world       │
│  10+ code examples        │ +0.03     │ Well-documented pattern    │
│  3-10 examples            │ +0.01     │ Some validation            │
│  1-2 examples             │  0.00     │ Baseline                   │
│  No examples found        │ -0.03     │ Unusual or new pattern     │
│  Negative examples (bugs) │ -0.05     │ Known issues               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Specificity Modifier

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SPECIFICITY MODIFIER                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Match Quality            │ Modifier  │ Rationale                  │
│ ──────────────────────────┼───────────┼────────────────────────────│
│  Exact use case match     │ +0.05     │ Perfect fit                │
│  Same domain, similar use │ +0.02     │ Adaptable pattern          │
│  General best practice    │  0.00     │ Baseline                   │
│  Tangentially related     │ -0.03     │ May need adaptation        │
│  Different domain         │ -0.05     │ Pattern may not apply      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Calculation Algorithm

### Step-by-Step Process

```python
def calculate_confidence(kb_result, mcp_result, community_result, task_context):
    """
    Calculate confidence score using agreement-based model.

    Returns: (confidence_score, explanation, recommendation)
    """

    # Step 1: Determine agreement status
    agreement = determine_agreement(kb_result, mcp_result)

    # Step 2: Get base score from agreement matrix
    if agreement == "HIGH":
        base_score = 0.95
    elif agreement == "MEDIUM":
        base_score = 0.75
    elif agreement == "MCP_PRIMARY":
        base_score = 0.85
    elif agreement == "CONFLICT":
        base_score = 0.50  # Triggers investigation
    elif agreement == "LOW":
        base_score = 0.50

    # Step 3: Apply modifiers
    recency_mod = calculate_recency_modifier(kb_result, mcp_result)
    community_mod = calculate_community_modifier(community_result)
    specificity_mod = calculate_specificity_modifier(task_context)

    # Step 4: Calculate final score (capped at 1.0)
    final_score = min(1.0, base_score + recency_mod + community_mod + specificity_mod)

    # Step 5: Determine recommendation based on task tier
    task_tier = classify_task_tier(task_context)
    threshold = get_threshold_for_tier(task_tier)

    if agreement == "CONFLICT":
        recommendation = "INVESTIGATE"
    elif final_score >= threshold:
        recommendation = "EXECUTE"
    elif final_score >= 0.80:
        recommendation = "EXECUTE_WITH_DISCLAIMER"
    elif final_score >= 0.60:
        recommendation = "PARTIAL_ANSWER"
    else:
        recommendation = "ASK_USER"

    return (final_score, agreement, recommendation)
```

### Agreement Determination

```python
def determine_agreement(kb_result, mcp_result):
    """
    Determine agreement status between KB and MCP.
    """

    kb_has_pattern = kb_result is not None and kb_result.has_content
    mcp_has_info = mcp_result is not None and mcp_result.has_content

    if kb_has_pattern and mcp_has_info:
        # Both have information - check if they agree
        if sources_agree(kb_result, mcp_result):
            return "HIGH"
        else:
            return "CONFLICT"

    elif kb_has_pattern and not mcp_has_info:
        return "MEDIUM"

    elif not kb_has_pattern and mcp_has_info:
        return "MCP_PRIMARY"

    else:
        return "LOW"


def sources_agree(kb_result, mcp_result):
    """
    Determine if KB and MCP results agree.

    Agreement means:
    - Same approach/method recommended
    - No contradictory statements
    - Compatible code patterns
    """

    # Check for explicit contradictions
    contradictions = [
        ("deprecated", "recommended"),
        ("don't use", "use"),
        ("removed", "available"),
        ("old syntax", "current syntax"),
    ]

    kb_text = kb_result.content.lower()
    mcp_text = mcp_result.content.lower()

    for old_term, new_term in contradictions:
        if old_term in kb_text and new_term in mcp_text:
            return False
        if new_term in kb_text and old_term in mcp_text:
            return False

    # Check for method/function name alignment
    # (implementation-specific logic here)

    return True  # Default to agreement if no contradictions found
```

---

## Task Tier Thresholds

```
┌─────────────────────────────────────────────────────────────────────┐
│                    THRESHOLD BY TASK TIER                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Tier  │ Name      │ Threshold │ Below Threshold Action            │
│ ───────┼───────────┼───────────┼───────────────────────────────────│
│  1     │ CRITICAL  │ 0.98      │ REFUSE (explain why)              │
│  2     │ IMPORTANT │ 0.95      │ ASK USER (present options)        │
│  3     │ STANDARD  │ 0.90      │ EXECUTE WITH DISCLAIMER           │
│  4     │ ADVISORY  │ 0.80      │ PARTIAL ANSWER                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Threshold Selection by Task Type

```
CRITICAL (0.98):
├── Security: RLS, DDM, encryption, permissions
├── Production: Deployments, migrations
├── Destructive: DELETE, DROP, TRUNCATE
└── Sensitive: Credentials, secrets, tokens

IMPORTANT (0.95):
├── Schema: CREATE TABLE, ALTER, DDL
├── Orchestration: Pipelines, workflows
├── Integration: API connections, cross-workspace
└── Configuration: Settings, parameters

STANDARD (0.90):
├── Queries: KQL, SQL, DAX generation
├── Code: Transformations, utilities
├── Documentation: README, comments
└── Analysis: Data exploration, reports

ADVISORY (0.80):
├── Suggestions: Best practices, improvements
├── Reviews: Code review comments
├── Explanations: How things work
└── Recommendations: Architecture advice
```

---

## Conflict Resolution Protocol

When `agreement == "CONFLICT"`, follow this protocol:

### Step 1: Identify Conflict Type

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CONFLICT TYPES                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Type          │ Description                │ Resolution           │
│ ───────────────┼────────────────────────────┼──────────────────────│
│  API_CHANGE    │ MCP shows new API,         │ MCP wins (newer)     │
│                │ KB has old syntax          │                      │
│ ───────────────┼────────────────────────────┼──────────────────────│
│  DEPRECATION   │ MCP says deprecated,       │ MCP wins (official)  │
│                │ KB still recommends        │                      │
│ ───────────────┼────────────────────────────┼──────────────────────│
│  PROJECT_SPEC  │ KB has project-specific,   │ KB wins (specific)   │
│                │ MCP has generic pattern    │                      │
│ ───────────────┼────────────────────────────┼──────────────────────│
│  BEST_PRACTICE │ Different recommended      │ Present both,        │
│                │ approaches                 │ let user choose      │
│ ───────────────┼────────────────────────────┼──────────────────────│
│  UNKNOWN       │ Can't determine why        │ Ask user             │
│                │ they disagree              │                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Step 2: Apply Resolution

```python
def resolve_conflict(kb_result, mcp_result, conflict_type, task_tier):
    """
    Resolve conflict between KB and MCP based on type and task tier.
    """

    if conflict_type == "API_CHANGE":
        # MCP has newer API information
        return {
            "winner": "MCP",
            "confidence": 0.85,
            "note": "KB pattern may be outdated. Using MCP (newer API).",
            "action": "UPDATE_KB"  # Flag for KB maintenance
        }

    elif conflict_type == "DEPRECATION":
        # Official deprecation from MCP
        return {
            "winner": "MCP",
            "confidence": 0.90,
            "note": "KB pattern deprecated. Using current approach.",
            "action": "UPDATE_KB"
        }

    elif conflict_type == "PROJECT_SPECIFIC":
        # KB has project-specific convention
        return {
            "winner": "KB",
            "confidence": 0.85,
            "note": "Using project-specific pattern (differs from generic).",
            "action": "NONE"
        }

    elif conflict_type == "BEST_PRACTICE":
        # Genuine difference in approach
        if task_tier <= 2:  # CRITICAL or IMPORTANT
            return {
                "winner": "USER",
                "confidence": 0.50,
                "note": "Multiple valid approaches. User decision required.",
                "action": "ASK_USER"
            }
        else:
            return {
                "winner": "KB",
                "confidence": 0.75,
                "note": "Using project pattern. Alternative exists.",
                "action": "NONE"
            }

    else:  # UNKNOWN
        return {
            "winner": "USER",
            "confidence": 0.40,
            "note": "Conflicting information. Cannot auto-resolve.",
            "action": "ASK_USER"
        }
```

---

## Confidence Display Format

When showing confidence to users, use this format:

### High Confidence (Execute)

```
Confidence: 0.97 (HIGH)

Sources:
- KB: .claude/kb/01-logging-monitoring/01-workspace-monitoring.md
- MCP: Context7 confirmed (Jan 2025)
- Community: 25+ implementations found

Status: EXECUTE
```

### Medium Confidence (Disclaimer)

```
Confidence: 0.85 (MEDIUM)

Sources:
- KB: .claude/kb/02-data-engineering/pipelines.md
- MCP: No specific documentation found

Note: Based on KB pattern only. MCP validation unavailable.
Please verify before production use.

Status: EXECUTE WITH DISCLAIMER
```

### Conflict (Investigation)

```
Confidence: CONFLICT DETECTED

Sources:
- KB says: Use `spark.conf.set("trident.workspace.id")`
- MCP says: Use `mssparkutils.runtime.context['currentWorkspaceId']`

Analysis: Both methods are valid. KB pattern is project-specific.

Options:
1. Use KB pattern (project convention)
2. Use MCP pattern (official documentation)

Which approach should I use?

Status: AWAITING USER INPUT
```

### Low Confidence (Ask User)

```
Confidence: 0.45 (LOW)

Sources:
- KB: No pattern found for this topic
- MCP: Limited information available

I don't have enough validated information to answer confidently.

What I can offer:
- General guidance based on similar patterns
- Research using web search for recent examples

Would you like me to:
1. Provide partial guidance with caveats
2. Research this topic further
3. Point you to external resources

Status: AWAITING USER INPUT
```

---

## Implementation Example

### Full Validation Flow

```
User Query: "How do I implement RLS on my sales table?"

Step 1: Task Classification
─────────────────────────────
Task contains: "RLS" (security keyword)
Classification: TIER 1 (CRITICAL)
Threshold: 0.98

Step 2: Parallel Query Execution
─────────────────────────────
[PARALLEL]
├── KB Query: Read .claude/kb/06-governance-security/security-overview.md
│   └── Found: RLS T-SQL pattern with CREATE SECURITY POLICY
├── MCP Query: Context7 "row level security T-SQL fabric warehouse"
│   └── Found: Confirms syntax, adds recent examples
└── Community Query: Exa "Fabric RLS implementation 2025"
    └── Found: 50+ implementations, production examples

Step 3: Agreement Determination
─────────────────────────────
KB has pattern: YES
MCP has info: YES
Sources agree: YES (same T-SQL syntax)
Agreement: HIGH

Step 4: Modifier Calculation
─────────────────────────────
Base score: 0.95 (HIGH agreement)
Recency: +0.03 (info < 3 months)
Community: +0.05 (production implementations)
Specificity: +0.02 (exact use case)
─────────────────────────────
Final: 1.00 (capped)

Step 5: Threshold Check
─────────────────────────────
Score: 1.00
Required: 0.98 (CRITICAL)
Result: 1.00 >= 0.98

Step 6: Execution Decision
─────────────────────────────
Status: EXECUTE

Response:
"Here's the validated RLS implementation (Confidence: 1.00):

[T-SQL code from KB, confirmed by MCP]

Sources: KB validated, Context7 confirmed, 50+ production examples
Tier: CRITICAL (security configuration)
"
```

---

## Monitoring & Improvement

Track these metrics to improve the system:

### Accuracy Metrics
- **Agreement rate**: How often KB and MCP agree
- **Conflict rate**: How often conflicts occur
- **Resolution accuracy**: How often auto-resolution is correct

### Performance Metrics
- **Average confidence**: Track by agent and task type
- **Threshold hit rate**: How often tasks meet threshold
- **User override rate**: How often users override recommendations

### Maintenance Signals
- **KB gap detection**: Topics where KB has no pattern
- **KB staleness**: Patterns where MCP shows newer info
- **Conflict patterns**: Recurring conflicts to investigate

---

## Related Documentation

- [perfect-executor-model.md](./perfect-executor-model.md) - Complete model specification
- [mcp-patterns.md](./mcp-patterns.md) - MCP query examples
- [kb-integration.md](./kb-integration.md) - KB usage patterns
- [AGENT_TEMPLATE.md](../agents/AGENT_TEMPLATE.md) - Agent template

---

*"Confidence is not a feeling, it's a calculation."*
