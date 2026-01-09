# Knowledge Base Integration Guide

**Version:** 2.0
**Last Updated:** 2025-12-03
**Related:** [perfect-executor-model.md](./perfect-executor-model.md)

---

## Overview

The Knowledge Base (KB) is the foundation of the Perfect Executor Model's **Grounding** pillar. This guide explains how agents should effectively use the KB for reliable, consistent answers.

---

## KB Structure

```
.claude/kb/
├── README.md                           # KB navigation hub
├── 00-quick-start/                     # Getting started (3 files)
├── 01-logging-monitoring/              # Logging & monitoring (11 files)
├── 02-data-engineering/                # Data engineering (6 files)
├── 03-real-time-intelligence/          # Real-time analytics (4 files)
├── 04-data-warehouse/                  # Data warehouse (1 file)
├── 05-apis-sdks/                       # APIs & SDKs (5 files)
├── 06-governance-security/             # Security & governance (1 file)
├── 07-cicd-automation/                 # CI/CD (2 files)
├── 08-ai-capabilities/                 # AI features (2 files)
└── 09-whats-new-2025/                  # Latest updates (4 files)
```

### Section Purposes

| Section | Purpose | When to Use |
|---------|---------|-------------|
| 00-quick-start | Platform fundamentals | Onboarding, overview questions |
| 01-logging-monitoring | All logging systems | Monitoring, KQL, diagnostics |
| 02-data-engineering | Notebooks, pipelines, Spark | ETL, transformations |
| 03-real-time-intelligence | Eventstream, Eventhouse, KQL | Streaming, real-time |
| 04-data-warehouse | Warehouse features | SQL, warehouse queries |
| 05-apis-sdks | REST API, Python SDK | Automation, integration |
| 06-governance-security | RLS, DDM, encryption | Security, compliance |
| 07-cicd-automation | Git, deployment | CI/CD, DevOps |
| 08-ai-capabilities | Copilot, ML models | AI features |
| 09-whats-new-2025 | Recent changes | Breaking changes, new features |

---

## KB Integration Rules

### Rule 1: Always Read Before Answering

For any domain question, the agent MUST read relevant KB files first.

```
❌ WRONG: Answer from memory
"To enable workspace monitoring, go to Settings > Monitoring..."

✅ CORRECT: Read KB, then answer
Step 1: Read .claude/kb/01-logging-monitoring/01-workspace-monitoring.md
Step 2: Extract pattern from KB
Step 3: Answer with KB reference

"To enable workspace monitoring (from KB: 01-workspace-monitoring.md):
1. Navigate to Workspace Settings
2. Select 'Monitoring' tab
..."
```

### Rule 2: Cite Your Sources

Every substantive answer should reference the KB file used.

```
✅ GOOD: With citation
"Here's the KQL query for slow DAX queries:

```kql
SemanticModelLogs
| where DurationMs > 5000
| project ItemName, DurationMs, QueryText
```

Source: .claude/kb/01-logging-monitoring/08-kql-queries.md"

❌ BAD: No citation
"Here's a query: [query]"
```

### Rule 3: Note KB Gaps

When KB doesn't cover a topic, explicitly note this.

```
✅ GOOD: Acknowledge gap
"I don't have a validated KB pattern for Eventstream monitoring.

KB gap: .claude/kb/01-logging-monitoring/ doesn't have Eventstream-specific content.

I'll use MCP sources for this answer (confidence: 0.80 - MCP only)."

❌ BAD: Pretend KB has it
"Based on documentation..." (when KB doesn't have it)
```

### Rule 4: Trust KB for Project Context

KB contains project-specific patterns that may differ from generic documentation.

```
Example: SDK Usage

Generic (MCP): Use standard Python logging
Project KB: Use FabricLogger from fabric_logging/sdk.py

Resolution: KB wins for project-specific context
```

---

## KB Query Patterns

### Pattern 1: Single File Read

For focused questions on one topic:

```python
# Question: "How do I enable workspace monitoring?"

# Step 1: Identify relevant file
kb_file = ".claude/kb/01-logging-monitoring/01-workspace-monitoring.md"

# Step 2: Read the file
Read(file_path=kb_file)

# Step 3: Extract relevant section
# Look for: setup instructions, prerequisites, configuration

# Step 4: Answer with citation
```

### Pattern 2: Multi-File Read

For questions spanning multiple topics:

```python
# Question: "Set up monitoring with alerting"

# Step 1: Identify all relevant files
kb_files = [
    ".claude/kb/01-logging-monitoring/01-workspace-monitoring.md",  # Setup
    ".claude/kb/01-logging-monitoring/08-kql-queries.md",           # Queries
    ".claude/kb/01-logging-monitoring/09-monitoring-dashboards.md", # Dashboards
    ".claude/kb/01-logging-monitoring/10-best-practices.md",        # Alerts
]

# Step 2: Read all files (parallel if possible)
for kb_file in kb_files:
    Read(file_path=kb_file)

# Step 3: Synthesize information
# Combine setup + queries + dashboards + alerting

# Step 4: Answer with all citations
```

### Pattern 3: Section Overview First

For exploratory questions:

```python
# Question: "What logging options exist in Fabric?"

# Step 1: Read the overview file first
Read(file_path=".claude/kb/01-logging-monitoring/00-overview.md")

# Step 2: Based on overview, read specific files
# Overview mentions 6 logging systems, read each as needed

# Step 3: Provide comprehensive answer with structure from overview
```

### Pattern 4: Cross-Section Query

For questions spanning domains:

```python
# Question: "Secure my pipeline deployment"

# Step 1: Identify primary section
primary = ".claude/kb/07-cicd-automation/deployment-pipelines.md"

# Step 2: Identify supporting sections
supporting = [
    ".claude/kb/06-governance-security/security-overview.md",
    ".claude/kb/05-apis-sdks/authentication.md",
]

# Step 3: Read primary first, then supporting
Read(file_path=primary)
for kb_file in supporting:
    Read(file_path=kb_file)

# Step 4: Combine pipeline + security + auth patterns
```

---

## KB File Documentation Standards

### File Header

Every KB file should have:

```markdown
# {Title}

**Last Updated:** YYYY-MM-DD
**Source:** {Official doc URL or "Internal"}
**MCP Validation:** {date of last MCP check}

---

## Overview

{1-2 paragraph introduction}
```

### Content Structure

```markdown
## What is {Topic}?

{Explanation}

## Why Use {Topic}?

{Use cases, benefits}

## When to Use {Topic}?

{Decision criteria, scenarios}

---

## Setup & Configuration

### Prerequisites

{List requirements}

### Step-by-Step Setup

1. {Step 1}
2. {Step 2}
...

---

## Code Examples

### Example 1: {Scenario}

```{language}
{code}
```

{Explanation}

---

## Common Use Cases

### Use Case 1: {Name}

{Description and implementation}

---

## Troubleshooting

### Issue 1: {Problem}

**Symptoms:** {description}
**Solution:** {fix}

---

## Best Practices

1. **{Practice}**: {explanation}
2. **{Practice}**: {explanation}

---

## Related Documentation

- [{Related Topic}]({relative-path})
- [{External Link}]({url})
```

---

## KB Maintenance

### When to Update KB

| Trigger | Action |
|---------|--------|
| MCP shows newer API | Update KB with new syntax |
| Breaking change detected | Add warning to KB file |
| KB gap found | Create new KB file |
| User reports error | Verify and fix KB content |
| Quarterly review | Refresh all KB files via MCP |

### KB Update Workflow

```
1. DETECT
   - Agent finds KB pattern doesn't match MCP
   - User reports KB error
   - Scheduled refresh trigger

2. VALIDATE
   - Query MCP for current documentation
   - Compare with KB content
   - Identify specific changes

3. UPDATE
   - Edit KB file with new content
   - Update "Last Updated" date
   - Update "MCP Validation" date

4. VERIFY
   - Test agent with updated KB
   - Confirm KB + MCP agreement
```

### KB Gap Documentation

When gaps are found, log them:

```markdown
## KB Gaps Log

| Date | Topic | Section | Priority | Status |
|------|-------|---------|----------|--------|
| 2025-12-03 | Eventstream monitoring | 01-logging-monitoring | High | Open |
| 2025-12-01 | CLS examples | 06-governance-security | Medium | Open |
```

---

## Agent KB Integration Checklist

When creating or updating an agent:

### KB Mapping
- [ ] Primary KB section identified
- [ ] All relevant files listed with line counts
- [ ] Supporting sections documented
- [ ] File descriptions explain content

### Integration Code
- [ ] Agent reads KB before answering domain questions
- [ ] Agent cites KB file paths in responses
- [ ] Agent notes KB gaps explicitly
- [ ] Agent prefers KB for project-specific patterns

### Maintenance
- [ ] KB files referenced actually exist
- [ ] KB content is current (check MCP validation date)
- [ ] Agent handles KB read failures gracefully

---

## KB vs MCP: When Each Wins

### KB Wins When

| Scenario | Reason |
|----------|--------|
| Project-specific pattern | KB has custom implementation |
| Internal conventions | KB follows project standards |
| Validated production code | KB code is tested |
| Stable features | KB pattern hasn't changed |

### MCP Wins When

| Scenario | Reason |
|----------|--------|
| API change | MCP has newer syntax |
| Deprecation notice | MCP shows official deprecation |
| New feature | KB doesn't have coverage yet |
| Breaking change | MCP reflects current state |

### Resolution Matrix

```
┌──────────────┬──────────────────┬───────────────────────────────┐
│ KB Status    │ MCP Status       │ Resolution                    │
├──────────────┼──────────────────┼───────────────────────────────┤
│ Has pattern  │ Confirms         │ HIGH confidence, use KB       │
│ Has pattern  │ Shows change     │ CONFLICT, investigate         │
│ Has pattern  │ No info          │ MEDIUM confidence, use KB     │
│ No pattern   │ Has info         │ MCP-PRIMARY, cite MCP         │
│ No pattern   │ No info          │ LOW confidence, ask user      │
└──────────────┴──────────────────┴───────────────────────────────┘
```

---

## Examples

### Example 1: Successful KB Hit

```
User: "Show me how to query slow DAX queries"

Agent Process:
1. Identify KB file: 01-logging-monitoring/08-kql-queries.md
2. Read file: Found "Slow Query Analysis" section
3. Extract KQL query pattern
4. MCP validation: Context7 confirms syntax
5. Agreement: HIGH (KB + MCP agree)

Response:
"Here's the validated KQL query (Confidence: 0.98):

```kql
SemanticModelLogs
| where Timestamp > ago(24h)
| where OperationName == "QueryEnd"
| where DurationMs > 5000
| project ItemName, User, DurationMs, QueryText
| order by DurationMs desc
```

Source: .claude/kb/01-logging-monitoring/08-kql-queries.md
MCP: Context7 confirmed (current syntax)"
```

### Example 2: KB Gap with MCP Fallback

```
User: "How do I monitor Eventstream throughput?"

Agent Process:
1. Search KB: 01-logging-monitoring/ - no Eventstream file
2. Search KB: 03-real-time-intelligence/eventstreams.md - no monitoring section
3. KB status: GAP
4. MCP query: Context7 "Eventstream monitoring metrics"
5. MCP status: Has info
6. Agreement: MCP-PRIMARY (0.85)

Response:
"I don't have a validated KB pattern for Eventstream monitoring.

KB gap: .claude/kb/ doesn't have Eventstream monitoring content.

Based on MCP sources (Confidence: 0.85):

[MCP-sourced information]

Note: This hasn't been validated against project patterns.
Consider adding to KB after verification.

Source: Context7 (Microsoft Fabric docs)"
```

### Example 3: KB vs MCP Conflict

```
User: "How do I get workspace ID in a notebook?"

Agent Process:
1. Read KB: fabric_logging/utils.py pattern
   → Uses spark.conf.get("trident.workspace.id")
2. MCP query: Context7 shows mssparkutils.runtime.context
3. Agreement: CONFLICT

Response:
"I found conflicting approaches:

KB (project pattern):
```python
workspace_id = spark.conf.get("trident.workspace.id")
```
Source: fabric_logging/utils.py

MCP (official docs):
```python
workspace_id = mssparkutils.runtime.context['currentWorkspaceId']
```
Source: Microsoft Fabric documentation

Analysis:
- Both methods work in Fabric notebooks
- KB uses Spark config (project convention)
- MCP uses mssparkutils (official method)

Project recommendation: Use KB pattern for consistency with fabric_logging SDK.

Which approach would you prefer?"
```

---

## Related Documentation

- [perfect-executor-model.md](./perfect-executor-model.md) - Full architecture spec
- [confidence-scoring.md](./confidence-scoring.md) - Scoring mechanics
- [mcp-patterns.md](./mcp-patterns.md) - MCP query examples
- [kb/README.md](../kb/readme.md) - KB navigation hub

---

*"The KB is your source of truth. Trust it, cite it, maintain it."*
