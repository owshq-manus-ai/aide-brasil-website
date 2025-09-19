# 📁 Webinar Prompts Organization Guide

## ✅ Files to KEEP

### 1. **MASTER-TEMPLATE-WEBINAR.md** (PRIMARY)
- **Purpose**: The definitive template for generating new webinar pages
- **Based on**: Actual working implementation (AutonomousAgentsWebinar.jsx)
- **Use this**: For all new webinar generation
- **Updated**: September 2024

### 2. **dominando-autonomous-code-agents.md** (REFERENCE)
- **Purpose**: Example of a filled template with real content
- **Keep for**: Reference on how to fill variables
- **Status**: Completed webinar example

---

## 📦 Files to ARCHIVE (Can be deleted or moved to /archive)

### 1. **webinar-generator.md**
- **Reason**: Outdated, 34KB file with old structure
- **Replaced by**: MASTER-TEMPLATE-WEBINAR.md

### 2. **webinar-generator-v2.md**
- **Reason**: Intermediate version, references WebhookForm incorrectly
- **Replaced by**: MASTER-TEMPLATE-WEBINAR.md

### 3. **MASTER-WEBINAR-PROMPT.md**
- **Reason**: Incomplete, references wrong paths
- **Replaced by**: MASTER-TEMPLATE-WEBINAR.md

### 4. **add-to-listings-template.md**
- **Reason**: Different purpose (for listing pages, not full webinars)
- **Action**: Keep if needed for listing pages, otherwise archive

### 5. **add-to-listings-v2.md**
- **Reason**: Duplicate/update of add-to-listings-template
- **Action**: Keep latest version only

---

## 🎯 Recommended Structure

```
prompts/webinars/
├── MASTER-TEMPLATE-WEBINAR.md     # Primary template
├── README-ORGANIZATION.md          # This file
├── examples/
│   └── dominando-autonomous-code-agents.md  # Example
└── archive/                        # Old versions
    ├── webinar-generator.md
    ├── webinar-generator-v2.md
    └── MASTER-WEBINAR-PROMPT.md
```

---

## 🚀 How to Use

1. **For new webinars**: Use `MASTER-TEMPLATE-WEBINAR.md`
2. **For examples**: Check `examples/` folder
3. **For listing updates**: Use appropriate add-to-listings template

---

## ⚠️ Important Notes

- The actual webinar components are in `/src/features/webinars/pages/`
- Routes are configured in `/src/App.jsx`
- Webhooks are configured in `/src/config/webhook-endpoints.js`
- DO NOT use WebhookForm component (use inline form handling)
- Background images go in `/public/images/backgrounds/`

---

Last Updated: September 2024