# /webinar-card - Add Webinar to Listings

## Purpose
Add a card for an existing webinar to the WebinarsListPage.jsx listings.

## Usage
```
/webinar-card [slug]
```

## Example
```
/webinar-card dominando-apache-kafka
```

## What This Command Does

### Step 1: Locate Webinar Component
Find the webinar component file:
```bash
ls src/features/webinars/pages/*Webinar.jsx | grep -i [topic]
```

### Step 2: Extract Metadata
Read the webinar component and extract:
- `webinar.title`
- `webinar.subtitle`
- `webinar.date`
- `webinar.time`
- `webinar.duration`
- `webinar.gradient`
- `webinar.description`
- `attendeeCount` initial value
- "O que você vai aprender" section (5 bullets → 4 topics)

### Step 3: Determine Card Properties
- **id**: Next available ID (max existing + 1)
- **icon**: Based on topic (Bot, Database, Code2, Brain, etc.)
- **level**: Infer from content (Iniciante/Intermediário/Avançado)
- **exclusive**: false (always)
- **popular**: true if attendees > 200

### Step 4: Check Icon Import
Verify the icon is imported in WebinarsListPage.jsx. Add if missing.

### Step 5: Insert Card
Add card object at END of webinars array in WebinarsListPage.jsx:
```javascript
{
  id: [next-id],
  slug: '[slug]',
  title: '[extracted-title]',
  subtitle: '[extracted-subtitle]',
  date: '[extracted-date]',
  time: '[extracted-time]',
  duration: '[extracted-duration]',
  attendees: [extracted-count],
  description: '[extracted-description]',
  topics: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'],
  gradient: '[extracted-gradient]',
  icon: [selected-icon],
  level: '[inferred-level]',
  spots: 500,
  exclusive: false,
  popular: [true/false]
}
```

### Step 6: Validate
```bash
npm run build
```

### Step 7: Report
```
✅ WEBINAR CARD ADDED!

📄 File: /src/features/webinars/pages/WebinarsListPage.jsx
🆔 Card ID: [id]
🔗 Slug: [slug]
🎨 Icon: [icon-name]

Card Details:
- Title: [title]
- Date: [date]
- Time: [time]
- Gradient: [gradient]
- Level: [level]

✅ Build Status: Passed

🚀 View at: http://localhost:5173/webinars
```

## Icon Selection

| Topic | Icon |
|-------|------|
| AI/LLMs/Agents | Bot |
| Code/Development | Code2 |
| Data/Database/LLMOps | Database |
| Architecture/System | Cpu |
| Frameworks | Layers |
| Automation/Speed | Zap |
| Multi-Agent | Users |
| Intelligence | Brain |

**NEVER use Network icon** - it doesn't render!

## Topics Extraction

Extract EXACTLY 4 topics from the "O que você vai aprender" section.
Keep them concise (2-4 words each).

## Error Handling

- **Component not found**: Report and suggest creating webinar first
- **Card already exists**: Report and skip
- **Build fails**: Report error, suggest fix
