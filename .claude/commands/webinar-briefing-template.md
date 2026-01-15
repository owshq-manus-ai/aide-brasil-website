# Webinar Briefing Template

> **Copy this template, fill in all fields, and paste to `/webinar` command**

---

## 📋 BRIEFING TEMPLATE

```yaml
# ============================================
# WEBINAR BRIEFING - Fill all fields below
# ============================================

# BASIC INFO (Required)
topic: "Apache Kafka"
title: "Dominando Apache Kafka"
highlight_word: "Kafka"
subtitle: "Construa pipelines de streaming em tempo real para produção enterprise"
date: "30 Jan 2025"
time: "20:00 BRT"
duration: "2 horas"

# THEME (Required - Choose ONE)
# Options: purple | blue | green | orange | coral
# - purple: AI/Tech/Innovation
# - blue: Data/Professional/Cloud
# - green: Growth/Success/Career
# - orange: Energy/Workshops
# - coral: Multi-Agent/CrewAI
theme: "blue"

# DESCRIPTION (Required)
# 1-2 sentences explaining the main value proposition
description: "Aprenda a construir sistemas de streaming de dados enterprise-grade com Apache Kafka. Do conceito à produção com as melhores práticas da indústria."

# WHAT YOU'LL LEARN (Required - Exactly 5 items)
what_you_learn:
  - "Arquitetura Kafka: Fundamentos de messaging distribuído"
  - "Producers & Consumers: Patterns de integração eficientes"
  - "Kafka Streams: Processamento em tempo real"
  - "Connect & Schema Registry: Integrações enterprise"
  - "Deploy em Produção: Monitoramento e escalabilidade"

# AGENDA (Required - Exactly 4 modules)
# Each module needs: time, module_name, topic, description
agenda:
  - time: "20:00"
    module: "Início"
    topic: "Kafka Architecture Deep Dive"
    description: "Entenda a arquitetura distribuída do Kafka - brokers, partitions, replication e como garantir alta disponibilidade"

  - time: "20:30"
    module: "Módulo 1"
    topic: "Producers & Consumers Mastery"
    description: "Domine patterns de produção e consumo - batching, acknowledgments, consumer groups e balanceamento"

  - time: "21:00"
    module: "Módulo 2"
    topic: "Stream Processing"
    description: "Kafka Streams e KSQL - processe milhões de eventos em tempo real com janelas e agregações"

  - time: "21:30"
    module: "Encerramento"
    topic: "Production Deployment"
    description: "Configure Kafka para produção - monitoring, alerting, security e estratégias de escalabilidade"

# BENEFITS (Required - Exactly 6 items)
# Each benefit needs: title, description, duration, level
benefits:
  - title: "Streaming Architecture"
    description: "Domine arquiteturas event-driven"
    duration: "30 min"
    level: "Intermediário"

  - title: "Real-Time Processing"
    description: "Processe milhões de eventos/segundo"
    duration: "25 min"
    level: "Avançado"

  - title: "Enterprise Patterns"
    description: "Patterns usados por Fortune 500"
    duration: "20 min"
    level: "Expert"

  - title: "Hands-On Demo"
    description: "Código ao vivo em ambiente real"
    duration: "30 min"
    level: "Prático"

  - title: "Production Deploy"
    description: "Do dev ao deploy com segurança"
    duration: "20 min"
    level: "Intermediário"

  - title: "Monitoring Setup"
    description: "Observe e escale seus clusters"
    duration: "15 min"
    level: "Avançado"

# STATISTICS (Required - Exactly 4 items)
# Use impressive numbers related to the technology
statistics:
  - value: 80
    suffix: "%"
    label: "Fortune 500"
    description: "Empresas usando Kafka em produção"

  - value: 7
    suffix: "T+"
    label: "Eventos/Dia"
    description: "Processados pelo LinkedIn"

  - value: 10
    suffix: "x"
    label: "Mais Rápido"
    description: "Que sistemas tradicionais"

  - value: 98
    suffix: "%"
    label: "Uptime"
    description: "Em clusters bem configurados"

# TESTIMONIAL (Required)
testimonial:
  quote: "Kafka revolucionou nossa arquitetura de dados. Migramos de batch para real-time e reduzimos latência de horas para segundos. O webinar da AIDE foi fundamental para isso."
  author: "Carlos Silva"
  role: "Data Architect @TechCorp Brasil"

# INSTRUCTOR (Optional - defaults to Luan Moreno)
# Only fill if different instructor
instructor:
  name: "Luan Moreno"
  title: "Principal AI & Autonomous Systems Engineer"
  company: "@Pythian"
  bio: "Especialista em arquiteturas de streaming e sistemas distribuídos, com experiência implementando Kafka em ambientes enterprise de alta escala."
  achievements:
    - "Implementou Kafka em +50 projetos enterprise"
    - "Processou +1 bilhão de eventos/dia em produção"
    - "Treinou +500 engenheiros em streaming"
    - "Speaker em KafkaSummit e conferências globais"
```

---

## 🎯 HOW TO USE

### Option 1: Copy Full YAML (Recommended)

1. Copy the entire YAML block above
2. Fill in all your values
3. Run: `/webinar` and paste the YAML

### Option 2: Natural Language with Key Details

```
/webinar Create webinar: Dominando Apache Kafka

Topic: Apache Kafka for data engineers
Title: "Dominando Apache Kafka"
Highlight: "Kafka"
Subtitle: "Construa pipelines de streaming em tempo real"
Date: 30 Jan 2025 at 20:00 BRT
Duration: 2 horas
Theme: blue

What you'll learn:
1. Arquitetura Kafka: Fundamentos
2. Producers & Consumers: Patterns
3. Kafka Streams: Real-time
4. Connect: Enterprise integrations
5. Deploy: Production strategies

Agenda:
- 20:00 - Kafka Architecture
- 20:30 - Producers & Consumers
- 21:00 - Stream Processing
- 21:30 - Production Deploy

Description: Aprenda a construir sistemas de streaming enterprise-grade.

Testimonial: "Kafka revolucionou nossa arquitetura" - Carlos Silva, Data Architect
```

---

## 📊 THEME REFERENCE

| Theme | Gradient | Use For | Current Webinars |
|-------|----------|---------|------------------|
| 🟣 `purple` | `from-purple-600 to-violet-600` | AI/Tech | Autonomous Agents |
| 🔵 `blue` | `from-blue-600 to-cyan-600` | Data/Cloud | Dify.ai |
| 🟢 `green` | `from-emerald-600 to-green-600` | Growth | (available) |
| 🟠 `orange` | `from-orange-600 to-amber-600` | Energy | Claude Code, ChatGPT |
| 🔴 `coral` | `from-red-500 to-orange-500` | Multi-Agent | CrewAI |

---

## 📝 CONTENT GUIDELINES

### Title Pattern
Always: **"Dominando [Technology/Topic]"**

### Highlight Word
The word that will have the gradient effect in the title.
Usually the technology name: "Kafka", "Dify.ai", "CrewAI"

### Subtitle
One compelling sentence with value proposition.
Pattern: **"[Action verb] + [what] + [benefit]"**

Examples:
- "Construa pipelines de streaming em tempo real para produção enterprise"
- "Orquestre sistemas multi-agentes em produção com o framework usado por 60% das Fortune 500"

### What You'll Learn (5 items)
Format: **"[Topic]: [Brief explanation]"**

Examples:
- "Arquitetura LLMOps: Fundamentos da plataforma open-source"
- "Workflow Builder: Crie agentes AI sem código complexo"

### Benefits (6 items)
Each must have:
- **title**: 2-3 words
- **description**: 5-8 words
- **duration**: "XX min"
- **level**: Iniciante | Intermediário | Avançado | Expert | Prático

### Statistics (4 items)
Use impressive numbers. Format:
- **value**: number (e.g., 80, 7, 10)
- **suffix**: unit (e.g., "%", "k+", "M+", "x", "T+")
- **label**: 2-3 words
- **description**: 4-6 words

---

## ✅ CHECKLIST BEFORE SUBMITTING

- [ ] All 5 "What You'll Learn" items filled
- [ ] All 4 agenda modules with times and descriptions
- [ ] All 6 benefits with duration and level
- [ ] All 4 statistics with impressive numbers
- [ ] Testimonial with quote, author, and role
- [ ] Theme is different from recent webinars (check current usage)
- [ ] Date format: "DD Mon YYYY" (e.g., "30 Jan 2025")
- [ ] Time format: "HH:MM BRT" (e.g., "20:00 BRT")

---

## 🎯 EXAMPLE: Complete Briefing

```yaml
topic: "n8n Automation"
title: "Dominando n8n"
highlight_word: "n8n"
subtitle: "Automatize workflows enterprise sem código com a plataforma open-source líder"
date: "15 Fev 2025"
time: "20:00 BRT"
duration: "2 horas"
theme: "green"

description: "Aprenda a criar automações complexas com n8n, a plataforma no-code que compete com Zapier e Make. Do básico ao deploy enterprise."

what_you_learn:
  - "Arquitetura n8n: Fundamentos da plataforma open-source"
  - "Nodes & Triggers: Conecte +400 integrações"
  - "Workflows Complexos: Lógica condicional e loops"
  - "AI Integration: Conecte LLMs aos seus workflows"
  - "Self-Hosting: Deploy em produção escalável"

agenda:
  - time: "20:00"
    module: "Início"
    topic: "n8n Platform Overview"
    description: "Arquitetura e conceitos - entenda como n8n se diferencia de Zapier/Make"
  - time: "20:30"
    module: "Módulo 1"
    topic: "Building Workflows"
    description: "Crie workflows complexos com triggers, nodes e lógica avançada"
  - time: "21:00"
    module: "Módulo 2"
    topic: "AI & Advanced Nodes"
    description: "Integre ChatGPT, Claude e outros LLMs nos seus workflows"
  - time: "21:30"
    module: "Encerramento"
    topic: "Enterprise Deployment"
    description: "Self-host n8n com Docker, Kubernetes e estratégias de escala"

benefits:
  - title: "No-Code Power"
    description: "Automatize sem programação"
    duration: "30 min"
    level: "Iniciante"
  - title: "400+ Integrations"
    description: "Conecte todas suas ferramentas"
    duration: "25 min"
    level: "Intermediário"
  - title: "AI Workflows"
    description: "LLMs integrados nativamente"
    duration: "25 min"
    level: "Avançado"
  - title: "Self-Hosted"
    description: "Controle total dos dados"
    duration: "20 min"
    level: "Expert"
  - title: "Hands-On Demo"
    description: "Automações ao vivo"
    duration: "30 min"
    level: "Prático"
  - title: "Templates"
    description: "Workflows prontos para usar"
    duration: "10 min"
    level: "Iniciante"

statistics:
  - value: 400
    suffix: "+"
    label: "Integrações"
    description: "Nodes disponíveis"
  - value: 50
    suffix: "k+"
    label: "GitHub Stars"
    description: "Comunidade ativa"
  - value: 10
    suffix: "x"
    label: "Mais Barato"
    description: "Que Zapier Enterprise"
  - value: 95
    suffix: "%"
    label: "Satisfação"
    description: "Entre usuários enterprise"

testimonial:
  quote: "n8n substituiu 15 ferramentas diferentes na nossa stack. A economia foi de R$50k/mês e a flexibilidade é incomparável."
  author: "Marina Costa"
  role: "CTO @StartupBR"
```

---

_This template ensures your webinar matches the exact pattern of existing production webinars._
