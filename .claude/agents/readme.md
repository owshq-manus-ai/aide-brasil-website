# Claude Code Agent Fleet for AIDE Brasil

This directory contains specialized Claude Code agents designed to automate and enhance development of the AIDE Brasil website. Each agent is an expert in their specific domain.

## 🎯 How Claude Code Agents Work

Claude Code agents are markdown files with a YAML frontmatter that defines:
- `name`: The agent identifier
- `description`: What the agent does
- `tools`: Which tools the agent can use (Read, Write, Edit, Bash, etc.)

After the frontmatter, the markdown content provides the agent's instructions and expertise.

## 📦 Available Agents

### 1. webinar-generator
**Purpose**: Generate complete 8-section webinar landing pages
```bash
# Invoke the agent using the Task tool
"Create a webinar about Python AI for March 20"
```

### 2. design-system
**Purpose**: Apply consistent visual themes and animations
```bash
# Apply design patterns to components
"Apply purple theme with 3-layer background to the new webinar page"
```

### 3. webhook-integration
**Purpose**: Configure form webhooks and data validation
```bash
# Set up form handling
"Add webhook configuration for the new Python AI webinar"
```

### 4. component-builder
**Purpose**: Create reusable React components
```bash
# Build new components
"Create an AnimatedCard component with hover effects"
```

### 5. mobile-experience
**Purpose**: Optimize for mobile-first design
```bash
# Ensure mobile optimization
"Optimize the webinar page for mobile devices and WhatsApp browser"
```

### 6. route-manager
**Purpose**: Manage React Router and navigation
```bash
# Configure routing
"Add lazy-loaded route for /webinars/python-ai"
```

### 7. content-optimizer
**Purpose**: Write conversion-focused Brazilian Portuguese content
```bash
# Optimize marketing copy
"Write compelling Portuguese headlines for the Python webinar"
```

### 8. template-architect
**Purpose**: Create and maintain reusable templates
```bash
# Extract patterns into templates
"Create a template from the successful Python webinar page"
```

### 9. performance-guardian
**Purpose**: Optimize performance and Core Web Vitals
```bash
# Analyze and optimize
"Optimize the homepage for better Lighthouse scores"
```

### 10. code-reviewer
**Purpose**: Review code for quality, security, and best practices
```bash
# Review recent changes
"Review the recent changes for security and performance issues"
```

### 11. social-media-image-generator
**Purpose**: Create LinkedIn and Instagram images from webinar data
```bash
# Generate complete image suite
"Create social media images for the CrewAI webinar"
```

### 12. social-media-copywriter
**Purpose**: Write conversion-focused Portuguese BR social posts
```bash
# Generate all copy variations
"Write social media posts for the Autonomous Agents webinar"
```

## 🚀 Using Agents in Claude Code

Agents are invoked using Claude Code's Task tool. When you need specialized work done:

1. **Direct invocation**: Ask Claude to use a specific agent
   ```
   "Use the webinar-generator agent to create a new React webinar"
   ```

2. **Automatic selection**: Claude will select the appropriate agent based on your request
   ```
   "Create a complete webinar page about Next.js"
   # Claude will automatically use webinar-generator
   ```

3. **Multiple agents**: Complex tasks may involve multiple agents
   ```
   "Create a webinar page and optimize it for mobile"
   # Uses webinar-generator then mobile-experience
   ```

## 📋 Agent Collaboration Pattern

For complex features, agents work together:

### Webinar Launch Pipeline
```
1. webinar-generator → Creates the page structure
2. content-optimizer → Writes Portuguese content
3. design-system → Applies theme and animations
4. webhook-integration → Configures forms
5. route-manager → Sets up routing
6. mobile-experience → Optimizes for mobile
7. performance-guardian → Final optimization
8. code-reviewer → Reviews code quality and security
```

### Social Media Marketing Pipeline
```
1. social-media-image-generator → Creates LinkedIn (1200x627) and Instagram (1080x1080) images
   • Generates 5 LinkedIn HTML templates (comparison, productivity, decision, problem/solution, journey)
   • Generates 3 Instagram HTML templates (bold stats, split, grid)
   • Uses Puppeteer to render HTML → PNG
   • Output: 8 high-quality images ready for posting

2. social-media-copywriter → Writes conversion-focused Portuguese BR posts
   • 5 LinkedIn variations (different psychological angles)
   • 3 Instagram captions (emoji-heavy, mobile-optimized)
   • Story snippets, carousel copy, Reels scripts
   • Output: Complete copy library with A/B testing variations
```

## 🛠️ Creating New Agents

To create a new agent:

1. Create a new `.md` file in `.claude/agents/`
2. Add YAML frontmatter:
   ```yaml
   ---
   name: agent-name
   description: Brief description of what the agent does
   tools: Read, Write, Edit, MultiEdit, Bash, Grep, Glob
   ---
   ```
3. Write the agent prompt with clear instructions
4. Include "When invoked:" section with step-by-step process
5. Test the agent with sample tasks

## 📊 Agent File Format

```markdown
---
name: example-agent
description: One-line description for quick reference
tools: Read, Write, Edit, MultiEdit, Bash
---

You are a specialized agent for [specific domain].

When invoked:
1. First step the agent takes
2. Second step
3. Continue with numbered steps
4. Final verification step

## Core Capabilities
- What the agent specializes in
- Key technologies it uses
- Patterns it follows

## Important Rules
- Critical rules the agent must follow
- Common mistakes to avoid

[Additional sections as needed]
```

## 🔍 Debugging Agents

If an agent isn't working as expected:

1. Check the YAML frontmatter is valid
2. Ensure the agent file ends with `.md`
3. Verify the tools list includes necessary capabilities
4. Test with simple, specific requests first

## 📈 Performance Tips

- Agents work best with specific, detailed requests
- Provide context about the current project state
- Let agents complete their specialized tasks without micromanaging
- Use multiple agents in sequence for complex features

## 🚦 Agent Status

All agents are:
- ✅ **Active**: Ready for use
- ✅ **Tested**: Validated on real tasks
- ✅ **Optimized**: Following Claude Code best practices

---

*Agent fleet ready. Use these specialized agents to build the AIDE Brasil website with speed and precision.*