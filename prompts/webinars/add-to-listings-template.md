# 📋 Add Webinar to Listings Page Template

## Purpose
This template helps you add newly created webinars to the main webinars listing page at `/webinars`.

## Instructions
After creating a new webinar component, use this template to add it to the WebinarsPage.jsx listings.

---

## STEP 1: Locate the webinars array in `/src/webinars/WebinarsPage.jsx`

Find the line that starts with:
```jsx
const webinars = [
```

## STEP 2: Add your new webinar object to the array

Add this object to the webinars array (customize with your webinar details):

```jsx
{
  id: [NEXT_ID], // Increment from the last webinar ID
  slug: '[WEBINAR_SLUG]', // e.g., 'domine-autonomous-code-agents'
  title: '[WEBINAR_TITLE]', // e.g., 'Dominando Autonomous Code Agents'
  subtitle: '[WEBINAR_SUBTITLE]', // Short description for the card
  date: '[WEBINAR_DATE]', // e.g., '4 Fev 2025'
  time: '[WEBINAR_TIME]', // e.g., '20:00'
  duration: '[DURATION]', // e.g., '2h'
  attendees: [INITIAL_ATTENDEES], // e.g., 247
  description: '[CARD_DESCRIPTION]', // 2-3 line description for the listing card
  topics: ['[TOPIC_1]', '[TOPIC_2]', '[TOPIC_3]', '[TOPIC_4]'], // e.g., ['Claude Code', 'MCP', 'Agents', 'IA']
  gradient: 'from-[PRIMARY_COLOR] to-[SECONDARY_COLOR]', // e.g., 'from-purple-600 to-violet-600'
  icon: [ICON_COMPONENT], // e.g., Bot, Brain, Code2, Cpu, etc.
  level: '[LEVEL]', // e.g., 'Iniciante', 'Intermediário', 'Avançado'
  spots: [TOTAL_SPOTS], // e.g., 500
  exclusive: [TRUE/FALSE], // Is this an exclusive webinar?
  popular: [TRUE/FALSE] // Is this a popular/featured webinar?
}
```

---

## EXAMPLE: Adding the Autonomous Agents Webinar

Here's how the Autonomous Agents webinar would be added:

```jsx
const webinars = [
  {
    id: 1,
    slug: 'domine-claude-code',
    // ... existing Claude Code webinar
  },
  {
    id: 2,
    slug: 'domine-autonomous-code-agents',
    title: 'Dominando Autonomous Code Agents',
    subtitle: 'Compare e domine os 4 principais agentes de código autônomo do mercado',
    date: '4 Fev 2025',
    time: '20:00',
    duration: '2h',
    attendees: 247,
    description: 'Descubra as técnicas secretas para revolucionar seu workflow com agentes autônomos. Aprenda OpenAI Codex, Claude Code, Replit e Warp em uma sessão intensiva com demonstrações práticas.',
    topics: ['OpenAI Codex', 'Claude Code', 'Replit', 'Warp'],
    gradient: 'from-purple-600 to-violet-600',
    icon: Bot,
    level: 'Avançado',
    spots: 500,
    exclusive: false,
    popular: true
  }
]
```

---

## STEP 3: Import the icon if needed

If you're using a new icon that isn't already imported, add it to the imports at the top of WebinarsPage.jsx:

```jsx
import {
  Calendar, Clock, Users, CheckCircle, Search, Filter,
  Brain, Code2, Database, GitBranch, Sparkles, TrendingUp,
  Bot, // Add your icon here if not already imported
  // ... other icons
} from 'lucide-react'
```

---

## Color Gradient Options

Common gradient combinations that work well:
- Orange theme: `from-orange-600 to-amber-600`
- Purple theme: `from-purple-600 to-violet-600`
- Blue theme: `from-blue-600 to-cyan-600`
- Green theme: `from-green-600 to-emerald-600`
- Pink theme: `from-pink-600 to-rose-600`
- Red theme: `from-red-600 to-orange-600`

---

## Icon Options

Available icons from lucide-react:
- `Bot` - For AI/Agents topics
- `Brain` - For AI/Learning topics
- `Code2` - For coding topics
- `Database` - For data topics
- `GitBranch` - For DevOps topics
- `Cpu` - For technical/hardware topics
- `Rocket` - For performance topics
- `Shield` - For security topics
- `Zap` - For speed/optimization topics
- `Trophy` - For achievement/mastery topics

---

## Complete Workflow Summary

1. **Create Webinar Component**: Use `webinar-generator.md` template
2. **Save Component**: Place in `/src/webinars/[slug]/[ComponentName].jsx`
3. **Add Route**: Update `App.jsx` with new route
4. **Add to Listings**: Use this template to add to `WebinarsPage.jsx`
5. **Test**: Navigate to `/webinars` to see your new webinar card

---

## Validation Checklist

Before saving, ensure:
- [ ] ID is unique and incremented from last webinar
- [ ] Slug matches the folder name in `/src/webinars/`
- [ ] Route in App.jsx uses the same slug
- [ ] Icon is imported at the top of the file
- [ ] Gradient colors are valid Tailwind classes
- [ ] All required fields are filled
- [ ] Topics array has relevant keywords

---

**This template ensures your webinar appears correctly on the listings page with all the proper metadata and styling!**