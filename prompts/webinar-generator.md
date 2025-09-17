# 🚀 Webinar Page Generator Prompt Template

## Instructions
Copy this prompt, fill in the [VARIABLES], and paste into Claude to generate a complete webinar landing page.

---

## PROMPT TEMPLATE:

Create a high-converting webinar landing page using the exact structure and design patterns from our Claude Code webinar template.

**IMPORTANT**: Use the EXACT same component structure, animations, and design patterns, only changing the content and color theme.

### WEBINAR CONFIGURATION:

**Theme Colors:**
- Primary Color: [PRIMARY_COLOR] (e.g., "blue-500")
- Secondary Color: [SECONDARY_COLOR] (e.g., "cyan-500")
- Metallic Background Tones: [METALLIC_HEX_1], [METALLIC_HEX_2] (e.g., "#0f1a2a, #0f0f1a")
- Accent Colors: Use variations of primary/secondary

**Basic Information:**
- Webinar Title: [WEBINAR_TITLE]
- Subtitle: [WEBINAR_SUBTITLE]
- Date: [DATE]
- Time: [TIME]
- Duration: [DURATION]
- Target Audience: [TARGET_AUDIENCE]

### SECTION 1 - HERO:
- Main Headline: [MAIN_HEADLINE]
- Subheadline: [SUBHEADLINE]
- CTA Button Text: [CTA_TEXT]
- Urgency Message: [URGENCY_MESSAGE]
- Background: Use metallic gradient with [METALLIC_HEX_1] and [METALLIC_HEX_2]

### SECTION 2 - IMPACT/TRANSFORMATION:

**Before (Traditional/Current State):**
- Title: [BEFORE_TITLE]
- Subtitle: [BEFORE_SUBTITLE]
- Problems (6 items with time/impact):
  1. [PROBLEM_1] - [IMPACT_1]
  2. [PROBLEM_2] - [IMPACT_2]
  3. [PROBLEM_3] - [IMPACT_3]
  4. [PROBLEM_4] - [IMPACT_4]
  5. [PROBLEM_5] - [IMPACT_5]
  6. [PROBLEM_6] - [IMPACT_6]
- Bottom Result: [NEGATIVE_OUTCOME]

**After (With Solution):**
- Title: [AFTER_TITLE]
- Subtitle: [AFTER_SUBTITLE]
- Benefits (6 items with metrics):
  1. [BENEFIT_1] - [METRIC_1]
  2. [BENEFIT_2] - [METRIC_2]
  3. [BENEFIT_3] - [METRIC_3]
  4. [BENEFIT_4] - [METRIC_4]
  5. [BENEFIT_5] - [METRIC_5]
  6. [BENEFIT_6] - [METRIC_6]
- Bottom Result: [POSITIVE_OUTCOME]

### SECTION 3 - BENEFITS:
Main Benefits (3 cards):
1. Icon: [ICON_1], Title: [BENEFIT_TITLE_1], Description: [BENEFIT_DESC_1]
2. Icon: [ICON_2], Title: [BENEFIT_TITLE_2], Description: [BENEFIT_DESC_2]
3. Icon: [ICON_3], Title: [BENEFIT_TITLE_3], Description: [BENEFIT_DESC_3]

### SECTION 4 - AGENDA:
Timeline items (4-6 items):
1. Time: [TIME_1], Topic: [TOPIC_1], Description: [DESC_1]
2. Time: [TIME_2], Topic: [TOPIC_2], Description: [DESC_2]
3. Time: [TIME_3], Topic: [TOPIC_3], Description: [DESC_3]
4. Time: [TIME_4], Topic: [TOPIC_4], Description: [DESC_4]
[Add more if needed]

### SECTION 5 - INSTRUCTOR:
- Name: [INSTRUCTOR_NAME]
- Title: [INSTRUCTOR_TITLE]
- Company: [COMPANY]
- Bio: [BIO]
- Photo Path: [PHOTO_PATH]
- Achievements (4):
  1. [ACHIEVEMENT_1]
  2. [ACHIEVEMENT_2]
  3. [ACHIEVEMENT_3]
  4. [ACHIEVEMENT_4]
- LinkedIn: [LINKEDIN_URL]
- Instagram: [INSTAGRAM_URL]

### SECTION 6 - NUMBERS/STATISTICS:
- Stat 1: Number: [NUMBER_1], Label: [LABEL_1], Sublabel: [SUBLABEL_1]
- Stat 2: Number: [NUMBER_2], Label: [LABEL_2], Sublabel: [SUBLABEL_2]
- Stat 3: Number: [NUMBER_3], Label: [LABEL_3], Sublabel: [SUBLABEL_3]
- Testimonial Quote: [TESTIMONIAL_QUOTE]
- Testimonial Author: [AUTHOR_NAME]
- Testimonial Role: [AUTHOR_ROLE]

### SECTION 7 - GUARANTEE:
- Guarantee Title: [GUARANTEE_TITLE]
- Guarantee Items (3):
  1. [GUARANTEE_1]
  2. [GUARANTEE_2]
  3. [GUARANTEE_3]

### SECTION 8 - FINAL CTA:
- Headline: [FINAL_HEADLINE]
- Subheadline: [FINAL_SUBHEADLINE]
- Form Title: [FORM_TITLE]
- Button Text: [BUTTON_TEXT]
- Features (3):
  1. [FEATURE_1] - [FEATURE_DESC_1]
  2. [FEATURE_2] - [FEATURE_DESC_2]
  3. [FEATURE_3] - [FEATURE_DESC_3]

### TECHNICAL REQUIREMENTS:
1. Use the exact same file structure as ClaudeCodeWebinar.jsx
2. Maintain all animations (framer-motion)
3. Keep the cyberpunk corner bracket badges
4. Use the same glass morphism effects
5. Implement animated counters for statistics
6. Include the countdown timer
7. Keep responsive breakpoints (mobile-first)
8. Use the same form validation logic
9. Maintain the metallic background gradient pattern
10. Keep all hover effects and transitions

### COLOR REPLACEMENT RULES:
- Replace all orange-500 with [PRIMARY_COLOR]
- Replace all amber-500 with [SECONDARY_COLOR]
- Replace red colors in "Before" section with complementary dark colors
- Adjust opacity values to match the new color scheme
- Keep white text for contrast

### OUTPUT FORMAT:
Generate the complete React component code with:
- All imports
- State management
- Event handlers
- Full JSX structure
- Tailwind classes adapted to new colors
- Comments marking each section

---

## EXAMPLE USAGE:

For a Data Engineering webinar, you would fill:
- PRIMARY_COLOR: "blue-500"
- SECONDARY_COLOR: "cyan-500"
- WEBINAR_TITLE: "Dominando Engenharia de Dados com IA"
- BEFORE_TITLE: "Pipeline de Dados Tradicional"
- [... and so on]

---

## NOTES:
- This template generates ~1500 lines of production-ready code
- Estimated time to fill variables: 5-10 minutes
- Estimated time for Claude to generate: 30 seconds
- Total time from idea to deployed page: ~15 minutes

## BONUS PROMPTS:

### Generate Color Scheme:
"Suggest a metallic color scheme for a webinar about [TOPIC]. Include primary, secondary, and background hex codes that match our cyberpunk metallic aesthetic."

### Generate Content:
"Create compelling copy for a webinar about [TOPIC] targeting [AUDIENCE]. Include all sections: problems, benefits, agenda items, and guarantees."

### Generate Images:
"Describe 3 hero background images for a [TOPIC] webinar that would work with a [COLOR] metallic theme and cyberpunk aesthetic."