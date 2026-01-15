# Bootcamp Briefing Template

> **Copy this template, fill in all fields, and paste to `/bootcamp` command**

---

## BRIEFING TEMPLATE

```yaml
# ============================================
# BOOTCAMP BRIEFING - Fill all fields below
# ============================================

# BASIC INFO (Required)
name: "Zero a Producao com Apache Kafka"           # Full bootcamp name
slug: "zero-prod-apache-kafka"                      # URL slug (kebab-case)
component_name: "KafkaBootcamp"                     # React component name (PascalCase)
title_highlight: "Apache Kafka"                     # Word with gradient effect
subtitle: "Use Kafka como sua plataforma de streaming - com pipelines que processam milhoes de eventos por segundo"
date_range: "15-18 Mar 2026"                        # Format: "DD-DD Mon YYYY"
time: "20:00 BRT"                                   # Daily start time
duration: "12 horas"                                # Total hours (typically 12h for 4-day bootcamp)
total_days: 4                                       # Number of days

# THEME (Required)
# Primary color for the bootcamp (used throughout)
# Options: coral (#E07A5F), purple, blue, green, orange
# Note: coral is the default bootcamp theme
theme: "coral"
primary_color: "#E07A5F"        # Main accent color
secondary_color: "#F0A090"      # Lighter variant

# PRICING (Required)
pricing:
  early_bird:
    price: "897"
    status: "sold_out"          # sold_out | current | upcoming
  current:
    name: "Lote Decisao"
    price: "1.197"
    original_price: "1.397"
    installments: "12x de R$ 119,63"
    spots_left: 47
    status: "current"
  final:
    price: "1.397"
    status: "upcoming"

# PAYMENT GATEWAY (Required)
eduzz_checkout_url: "https://sun.eduzz.com/XXXXXXXX"   # Eduzz product URL
countdown_target: "2026-03-10T00:00:00-03:00"          # Countdown end date

# HERO SECTION (Required)
hero:
  headline: "Do Zero a Producao"                       # Main headline (before highlight)
  transformation_promise: "Use Kafka como sua plataforma de streaming - com pipelines que escalam automaticamente"

  # Status badges shown in hero
  badges:
    - label: "Online"
      color: "green"
    - label: "185 Inscritos"
      color: "coral"
    - label: "Streaming"
      color: "purple"
    - label: "12 Horas Hands-On"
      color: "green"

  # Learning points in right card (6 items)
  learning_points:
    - text: "Arquitetura Kafka: brokers, partitions, replication e consumer groups"
      icon: "Server"
    - text: "Producers & Consumers: batching, acknowledgments e error handling"
      icon: "Terminal"
    - text: "Kafka Streams: processamento real-time com windowing e aggregations"
      icon: "Brain"
    - text: "Connect & Schema Registry: integracoes enterprise type-safe"
      icon: "Database"
    - text: "Monitoring com Prometheus & Grafana: metricas que importam"
      icon: "Gauge"
    - text: "Deploy em Producao: Docker, Kubernetes e estrategias de escala"
      icon: "Rocket"

  # Value propositions (3 items)
  value_props:
    - icon: "Bot"
      text: "Construa pipelines que processam milhoes de eventos em tempo real"
    - icon: "Terminal"
      text: "Processo guiado: do cluster local ao deploy em producao"
    - icon: "Rocket"
      text: "Sistema real funcionando com monitoramento completo"

# PROMISE SECTION - 8 Superpowers (Required)
promise:
  section_badge: "Seu Arsenal Completo"
  section_title: "8 Superpoderes do"
  section_title_highlight: "Apache Kafka"
  section_title_suffix: "que Ninguem Ensina"

  features:
    - title: "Cluster Architecture"
      description: "Configure um cluster Kafka production-ready com replication e fault tolerance automaticos"
      highlight: "production-ready"
      color: "orange"
      icon: "Server"

    - title: "Producer Patterns"
      description: "Domine patterns de producao - batching, compression, idempotency e exactly-once semantics"
      highlight: "exactly-once semantics"
      color: "purple"
      icon: "FileText"

    - title: "Consumer Groups"
      description: "Escale consumers horizontalmente com rebalancing automatico e offset management"
      highlight: "rebalancing automatico"
      color: "blue"
      icon: "Users"

    - title: "Kafka Streams"
      description: "Processe streams em tempo real com joins, aggregations e windowing sem cluster Flink/Spark"
      highlight: "sem cluster Flink/Spark"
      color: "green"
      icon: "Brain"

    - title: "Schema Registry"
      description: "Garanta compatibilidade de schemas com Avro/Protobuf e evolucao segura de contratos"
      highlight: "evolucao segura"
      color: "cyan"
      icon: "Shield"

    - title: "Kafka Connect"
      description: "Integre com 200+ sistemas usando conectores prontos - CDC, S3, Elasticsearch e mais"
      highlight: "200+ sistemas"
      color: "pink"
      icon: "Webhook"

    - title: "Observability"
      description: "Monitore lag, throughput e latencia com dashboards Grafana production-ready"
      highlight: "dashboards Grafana"
      color: "amber"
      icon: "BarChart3"

    - title: "Production Deploy"
      description: "Deploy em Kubernetes com operators, auto-scaling e disaster recovery configurado"
      highlight: "disaster recovery"
      color: "red"
      icon: "Rocket"

# DIFFERENTIATORS - 6 Reasons (Required)
differentiators:
  section_badge: "O Que Faz a Diferenca"
  section_title: "6 Razoes Para"
  section_title_highlight: "Nunca Mais"
  section_title_suffix: "Fazer Curso de Streaming"

  items:
    - title: "Problema Real, Nao Demo"
      description: "Outros cursos: datasets de exemplo. Aqui: event-driven architecture - processando eventos reais desde o dia 1."
      highlight: "event-driven architecture"
      icon: "ArrowRight"

    - title: "Producao, Nao Tutorial"
      description: "Outros cursos: cluster local. Aqui: deploy em Kubernetes com monitoramento e alertas funcionando."
      highlight: "Kubernetes com monitoramento"
      icon: "Cloud"

    - title: "Streams, Nao Apenas Topics"
      description: "Outros cursos: param no consumer. Aqui: Kafka Streams processando e transformando dados em real-time."
      highlight: "Kafka Streams"
      icon: "Brain"

    - title: "Schema Evolution, Nao Breaking Changes"
      description: "Outros cursos: ignoram schemas. Aqui: Schema Registry com compatibilidade e contratos versionados."
      highlight: "contratos versionados"
      icon: "Shield"

    - title: "Observability, Nao Apenas Logs"
      description: "Outros cursos: println debug. Aqui: Prometheus + Grafana com metricas de negocio e alertas inteligentes."
      highlight: "metricas de negocio"
      icon: "BarChart3"

    - title: "Portfolio, Nao Certificado"
      description: "Outros cursos: PDF no LinkedIn. Aqui: sistema completo no GitHub para mostrar em entrevistas."
      highlight: "sistema completo no GitHub"
      icon: "Trophy"

# JOURNEY - 8 Steps (Required)
journey:
  section_badge: "Sua Jornada em 4 Dias"
  section_title: "8 Passos Para"
  section_title_highlight: "Sair do Zero"
  section_title_suffix: "e Entregar em Producao"

  steps:
    - number: 1
      title: "Entender Event-Driven"
      subtitle: "Request-Response -> Event Streaming"
      description: "Transforme sua mentalidade de APIs sincronas para arquiteturas event-driven. Voce sai entendendo quando usar Kafka."
      skills: ["Event Sourcing", "CQRS Basics", "Use Case Analysis"]
      personas: ["Software Engineer", "Architect"]
      icon: "Users"

    - number: 2
      title: "Subir Cluster Local"
      subtitle: "Docker Compose -> Kafka Running"
      description: "Configure um cluster Kafka completo com Zookeeper, brokers e ferramentas. Em 30 minutos voce tem um ambiente funcional."
      skills: ["Docker Compose", "Kafka Configuration", "Local Development"]
      personas: ["Developer", "DevOps"]
      icon: "Terminal"

    - number: 3
      title: "Dominar Producers"
      subtitle: "Fire-and-Forget -> Guaranteed Delivery"
      description: "Implemente producers com acks, retries e idempotency. Seus eventos chegam exatamente uma vez."
      skills: ["Producer API", "Serialization", "Error Handling"]
      personas: ["Backend Engineer", "Data Engineer"]
      icon: "FileText"

    - number: 4
      title: "Escalar Consumers"
      subtitle: "Single Consumer -> Consumer Group"
      description: "Configure consumer groups com rebalancing, offset commit e error recovery. Escale horizontalmente sem perder mensagens."
      skills: ["Consumer API", "Offset Management", "Partition Assignment"]
      personas: ["Backend Engineer", "Platform Engineer"]
      icon: "Users"

    - number: 5
      title: "Processar com Streams"
      subtitle: "Poll Loop -> Stream Processing"
      description: "Use Kafka Streams para joins, aggregations e windowing. Processe milhoes de eventos sem cluster separado."
      skills: ["Kafka Streams API", "Stateful Processing", "Windowing"]
      personas: ["Data Engineer", "ML Engineer"]
      icon: "Brain"
      is_core: true

    - number: 6
      title: "Garantir Schemas"
      subtitle: "JSON Chaos -> Schema Registry"
      description: "Implemente Schema Registry com Avro. Evolua schemas sem quebrar consumers existentes."
      skills: ["Avro", "Schema Evolution", "Compatibility Modes"]
      personas: ["Data Engineer", "Platform Engineer"]
      icon: "Shield"

    - number: 7
      title: "Monitorar Tudo"
      subtitle: "Logs -> Observability Stack"
      description: "Configure Prometheus e Grafana com dashboards de lag, throughput e latencia. Alertas antes dos problemas."
      skills: ["JMX Metrics", "Grafana Dashboards", "Alerting"]
      personas: ["SRE", "DevOps"]
      icon: "BarChart3"

    - number: 8
      title: "Deployar em Producao"
      subtitle: "Local -> Kubernetes"
      description: "Deploy com Strimzi operator, configuracoes de producao e disaster recovery. Sistema pronto para escalar."
      skills: ["Kubernetes", "Strimzi Operator", "Production Config"]
      personas: ["Platform Engineer", "SRE"]
      icon: "Rocket"

# TECH STACK (Required)
# Logos displayed in the dock component
tech_stack:
  - name: "Apache Kafka"
    logo: "/images/logos/kafka-icon.webp"
  - name: "Docker"
    logo: "/images/logos/docker-icon.webp"
  - name: "Kubernetes"
    logo: "/images/logos/kubernetes-icon.webp"
  - name: "Prometheus"
    logo: "/images/logos/prometheus-icon.webp"
  - name: "Grafana"
    logo: "/images/logos/grafana-icon.webp"
  - name: "Python"
    logo: "/images/logos/python-icon.webp"

# AUDIENCE SECTION (Required)
audience:
  section_badge: "Voce Se Encaixa?"
  section_title: "3 Perfis que Vao"
  section_title_highlight: "Multiplicar Resultados"
  section_title_suffix: "com Streaming"

  # Target profiles (3 items)
  profiles:
    - title: "Data Engineers"
      description: "Cansados de batch pipelines - prontos para streaming que processa eventos em millisegundos"
      transformation: "Batch hourly -> Real-time streaming"
      fit: "perfect"
      icon: "Database"

    - title: "Backend Engineers"
      description: "Querem sair de REST sincrono para arquiteturas event-driven que escalam horizontalmente"
      transformation: "Sync APIs -> Async events"
      fit: "perfect"
      icon: "Code2"

    - title: "Platform Engineers"
      description: "Ja dominam infra - agora querem adicionar streaming como servico para os times"
      transformation: "Ad-hoc setup -> Platform service"
      fit: "good"
      icon: "Server"

  # Prerequisites (3 items)
  prerequisites:
    - requirement: "Docker e Linux"
      description: "docker run e comandos basicos de terminal - se voce ja usou containers, esta pronto"
      level: "basic"
      icon: "Terminal"

    - requirement: "Python ou Java"
      description: "Uma das duas linguagens para os clients - escolha a que voce prefere"
      level: "basic"
      icon: "Code2"

    - requirement: "Vontade de Aprender"
      description: "Kafka tem curva de aprendizado - mas em 4 dias voce domina o essencial"
      level: "mindset"
      icon: "Brain"

# DELIVERABLES (Required - 8 items)
deliverables:
  - text: "Cluster Kafka multi-broker funcionando"
    value: "Docker ou Kubernetes"
  - text: "Pipeline producer-consumer completo"
    value: "Com error handling e retries"
  - text: "Aplicacao Kafka Streams"
    value: "Joins, aggregations, windowing"
  - text: "Schema Registry configurado"
    value: "Avro + compatibility modes"
  - text: "Stack de observability"
    value: "Prometheus + Grafana dashboards"
  - text: "Deploy Kubernetes production-ready"
    value: "Strimzi operator + configs"
  - text: "Repositorio GitHub completo"
    value: "Clone e rode em 5 minutos"
  - text: "Certificado de conclusao"
    value: "Para seu LinkedIn"

# INSTRUCTOR (Optional - defaults to Luan Moreno)
instructor:
  name: "Luan Moreno"
  title: "Principal AI & Autonomous Systems Engineer"
  company: "@Pythian"
  bio: "Especialista em arquiteturas de streaming e sistemas distribuidos, com experiencia implementando Kafka em ambientes enterprise de alta escala."
  photo: "/images/team/luan-moreno-5.png"
  achievements:
    - "Implementou Kafka em +30 projetos enterprise"
    - "Processou +500 milhoes de eventos/dia em producao"
    - "Treinou +300 engenheiros em streaming"
    - "Arquitetou pipelines para Fortune 500"
```

---

## HOW TO USE

### Option 1: File Path (Recommended)

1. Save your filled briefing as `briefings/bootcamp-[slug].md`
2. Run: `/bootcamp briefings/bootcamp-zero-prod-apache-kafka.md`

### Option 2: Inline YAML

1. Copy the entire YAML block above
2. Fill in all your values
3. Run: `/bootcamp` and paste the YAML

---

## THEME REFERENCE

| Theme | Primary Color | Use For |
|-------|---------------|---------|
| `coral` | #E07A5F | Default bootcamp theme |
| `purple` | #8B5CF6 | AI/ML focused bootcamps |
| `blue` | #3B82F6 | Cloud/Data bootcamps |
| `green` | #22C55E | DevOps/Automation |
| `orange` | #F97316 | Intensive workshops |

---

## SECTION STRUCTURE

A bootcamp consists of 8 sections (modular components):

```
1. Hero Section
   - ClaudeCodeBootcampHero.jsx
   - Status badges, headline, learning points, CTAs

2. Promise Section
   - PromiseSection.jsx
   - 8 superpowers/features grid

3. Differentiator Section
   - DifferentiatorSection.jsx
   - 6 reasons why different

4. Journey Timeline
   - JourneyTimeline.jsx
   - 8-step expandable timeline

5. Stack Section
   - StackSection.jsx
   - Tech logos carousel

6. Audience Section
   - AudienceSection.jsx
   - 3 profiles + 3 prerequisites

7. Pricing Section
   - PricingSection.jsx
   - 3-tier pricing + deliverables

8. Final CTA Section
   - FinalCTASection.jsx
   - Last call to action
```

---

## FILE NAMING CONVENTION

```
Page Component:       [Name]Bootcamp.jsx
Hero Component:       [Name]BootcampHero.jsx
Other Components:     [Section]Section.jsx (shared)

Example for "Kafka":
  - KafkaBootcamp.jsx
  - KafkaBootcampHero.jsx
  - (shared sections from ClaudeCodeBootcamp)
```

---

## CONTENT GUIDELINES

### Title Pattern
**"Do Zero a Producao [Technology]"** or **"[Technology]: Do Zero a Producao"**

### Subtitle
One transformation promise (max 120 chars).
Pattern: **"Use [Tech] como [benefit] - com [specific outcome]"**

### Learning Points (6 items)
Format: **"[Topic]: [specific skill or outcome]"**

### Journey Steps (8 items)
Each step must have:
- **subtitle**: Before → After transformation
- **skills**: 3 specific skills learned
- **personas**: 2 relevant job titles
- **is_core**: true for the main module (usually step 5 or 6)

### Deliverables (8 items)
Concrete outputs, not promises.
Format: **{ text: "What they get", value: "Specific detail" }**

---

## CHECKLIST BEFORE SUBMITTING

- [ ] All 6 hero learning points filled
- [ ] All 8 promise features with icons and colors
- [ ] All 6 differentiators with highlights
- [ ] All 8 journey steps with skills and personas
- [ ] All 6 tech stack logos with paths
- [ ] All 3 audience profiles with transformations
- [ ] All 3 prerequisites with levels
- [ ] All 8 deliverables with values
- [ ] Eduzz checkout URL configured
- [ ] Countdown target date set
- [ ] Pricing tiers configured

---

_This template ensures your bootcamp matches the exact pattern of the Claude Code bootcamp._
