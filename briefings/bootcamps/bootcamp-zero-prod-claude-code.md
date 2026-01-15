# Bootcamp Briefing: Do Zero a Producao com Claude Code

> **Reverse engineered from production bootcamp**
> This briefing documents the existing Claude Code bootcamp for replication and reference.

---

## BRIEFING

```yaml
# ============================================
# BOOTCAMP BRIEFING - Claude Code (Production)
# ============================================

# BASIC INFO (Required)
name: "Do Zero a Producao com Claude Code"
slug: "zero-prod-claude-code"
component_name: "ClaudeCodeBootcamp"
title_highlight: "Claude Code"
subtitle: "Use Claude Code como seu time de engenharia - com agentes que escrevem, revisam e deployam codigo por voce"
date_range: "28-31 Jan 2026"
time: "20:00 BRT"
duration: "12 horas"
total_days: 4

# THEME (Required)
theme: "coral"
primary_color: "#E07A5F"
secondary_color: "#F0A090"

# PRICING (Required)
pricing:
  early_bird:
    price: "897"
    status: "sold_out"
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
eduzz_checkout_url: "https://sun.eduzz.com/39YDP2YJ9O"
countdown_target: "2026-01-24T00:00:00-03:00"

# HERO SECTION (Required)
hero:
  headline: "Do Zero a Producao"
  transformation_promise: "Use Claude Code como seu time de engenharia - com agentes que escrevem, revisam e deployam codigo por voce"

  # Status badges shown in hero
  badges:
    - label: "Online"
      color: "green"
    - label: "185 Inscritos"
      color: "coral"
    - label: "Agentes"
      color: "purple"
    - label: "12 Horas Hands-On"
      color: "green"

  # Learning points in right card (6 items)
  learning_points:
    - text: "Setup profissional: CLAUDE.md, MCPs, SubAgents e Hooks"
      icon: "Terminal"
    - text: "Context Engineering: estruturar contexto para respostas precisas"
      icon: "Brain"
    - text: "Arquitetura Adapter: design multi-cloud (GCP, AWS, Azure)"
      icon: "Server"
    - text: "Pipeline GenAI completo: extracao com LLM -> BigQuery -> Hex"
      icon: "Cpu"
    - text: "LLMOps com Langfuse: custo, latencia e qualidade"
      icon: "Gauge"
    - text: "CI/CD para GenAI: GitHub Actions + quality gates"
      icon: "Rocket"

  # Value propositions (3 items)
  value_props:
    - icon: "Bot"
      text: "Orquestre uma frota de agentes que escrevem codigo por voce"
    - icon: "Terminal"
      text: "Processo guiado: do requisito ao deploy, sem vibe coding"
    - icon: "Rocket"
      text: "Sistema real em producao com observabilidade completa"

# PROMISE SECTION - 8 Superpowers (Required)
promise:
  section_badge: "Seu Arsenal Completo"
  section_title: "8 Superpoderes do"
  section_title_highlight: "Claude Code"
  section_title_suffix: "que Ninguem Ensina"

  features:
    - title: "CLAUDE.md"
      description: "Faca o Claude entender seu projeto inteiro com um unico arquivo de contexto permanente"
      highlight: "contexto permanente"
      color: "orange"
      icon: "FileText"

    - title: "MCPs (Model Context Protocol)"
      description: "Conecte bancos, APIs e ferramentas externas - o Claude executa acoes reais via servidores MCP"
      highlight: "servidores MCP"
      color: "purple"
      icon: "Server"

    - title: "Knowledge Base"
      description: "Injete documentacao e padroes do projeto para respostas precisas, nao genericas"
      highlight: "documentacao e padroes"
      color: "blue"
      icon: "BookOpen"

    - title: "SubAgents"
      description: "Delegue tarefas complexas para uma frota de agentes especializados que trabalham em paralelo"
      highlight: "agentes especializados"
      color: "green"
      icon: "Users"

    - title: "Commands"
      description: "Automatize workflows repetitivos com comandos personalizados - digite uma vez, execute sempre"
      highlight: "comandos personalizados"
      color: "cyan"
      icon: "Terminal"

    - title: "Hooks"
      description: "Dispare acoes automaticamente em eventos do codigo - lint, test, deploy sem intervencao"
      highlight: "acoes automaticamente"
      color: "pink"
      icon: "Webhook"

    - title: "Skills"
      description: "Empacote capacidades reutilizaveis que transformam o Claude em especialista do seu dominio"
      highlight: "capacidades reutilizaveis"
      color: "amber"
      icon: "Wand2"

    - title: "Prompts & Templates"
      description: "Garanta outputs consistentes com prompts estruturados - mesmo resultado, toda vez"
      highlight: "outputs consistentes"
      color: "red"
      icon: "Settings"

# DIFFERENTIATORS - 6 Reasons (Required)
differentiators:
  section_badge: "O Que Faz a Diferenca"
  section_title: "6 Razoes Para"
  section_title_highlight: "Nunca Mais"
  section_title_suffix: "Fazer Curso de Prompt"

  items:
    - title: "Problema Real, Nao Demo"
      description: "Outros cursos: datasets de exemplo. Aqui: invoice intelligence - extraindo dados de notas fiscais reais desde o dia 1."
      highlight: "invoice intelligence"
      icon: "ArrowRight"

    - title: "Agente, Nao Autocomplete"
      description: "Outros cursos: ChatGPT como assistente. Aqui: Claude Code como seu par de programacao - escreve, revisa e deploya codigo."
      highlight: "par de programacao"
      icon: "Bot"

    - title: "Multi-Cloud, Nao Vendor Lock"
      description: "Outros cursos: amarrados em um provider. Aqui: arquitetura 100% portavel - GCP hoje, AWS ou Azure amanha."
      highlight: "100% portavel"
      icon: "Cloud"

    - title: "LLMOps, Nao So Prompt"
      description: "Outros cursos: param no prompt. Aqui: observabilidade com Langfuse - custo, latencia, qualidade e drift monitorados."
      highlight: "observabilidade com Langfuse"
      icon: "BarChart3"

    - title: "Autonomia, Nao Manual"
      description: "Outros cursos: voce executa tudo. Aqui: CrewAI Agents operando sozinhos - com supervisao e alertas inteligentes."
      highlight: "CrewAI Agents"
      icon: "Settings"

    - title: "Producao, Nao Certificado"
      description: "Outros cursos: PDF no LinkedIn. Aqui: sistema completo rodando - projeto real para mostrar em entrevistas."
      highlight: "sistema completo rodando"
      icon: "Trophy"

# JOURNEY - 8 Steps (Required)
journey:
  section_badge: "Sua Jornada em 4 Dias"
  section_title: "8 Passos Para"
  section_title_highlight: "Sair do Zero"
  section_title_suffix: "e Entregar em Producao"

  steps:
    - number: 1
      title: "Traduzir Negocio em Contexto"
      subtitle: "Requisito Vago -> Spec Precisa"
      description: "Transforme reunioes confusas em especificacoes que a IA entende. Voce sai com um CLAUDE.md pronto para o projeto."
      skills: ["Problem Framing", "Context Engineering", "Requirement -> Spec"]
      personas: ["AI Data Engineer", "Tech Lead"]
      icon: "Users"

    - number: 2
      title: "Ativar sua Frota de Agentes"
      subtitle: "Solo Coder -> Time de IA"
      description: "Configure MCPs, SubAgents e Hooks. No final, voce tem agentes especializados prontos para executar tarefas por voce."
      skills: ["AI-Native Workflow", "Agent Orchestration", "Context Management"]
      personas: ["Senior Engineer", "Staff Engineer"]
      icon: "Terminal"

    - number: 3
      title: "Prototipar em Minutos"
      subtitle: "Ideia -> Codigo Funcionando"
      description: "Monte um sandbox local com Python + LLM. Valide hipoteses em minutos, nao dias. Testes automatizados desde o inicio."
      skills: ["Rapid Prototyping", "Test-Driven GenAI", "Local Dev Workflow"]
      personas: ["GenAI Engineer", "Backend Engineer"]
      icon: "FlaskConical"

    - number: 4
      title: "Desenhar sem Vendor Lock"
      subtitle: "GCP Hoje -> Qualquer Cloud Amanha"
      description: "Arquitetura com Adapter Pattern: mude de provider sem reescrever codigo. Voce sai com um blueprint replicavel."
      skills: ["Cloud Architecture", "Adapter Design", "Systems Thinking"]
      personas: ["Cloud Architect", "Platform Engineer"]
      icon: "Cloud"

    - number: 5
      title: "Subir Infra como Codigo"
      subtitle: "Console Manual -> Terraform Automatico"
      description: "Provisione IAM, buckets, BigQuery e Cloud Run com Terraform. Destrua e recrie ambientes em um comando."
      skills: ["IaC para GenAI", "Environment Management", "Cloud Security"]
      personas: ["Platform Engineer", "DevOps"]
      icon: "Server"

    - number: 6
      title: "Colocar GenAI em Producao"
      subtitle: "Invoice -> Dado Estruturado -> Dashboard"
      description: "Pipeline completo funcionando: upload de invoice -> extracao com Gemini -> BigQuery -> Hex. Com observabilidade Langfuse."
      skills: ["Production Pipelines", "LLMOps", "Data + GenAI Integration"]
      personas: ["AI Data Engineer", "GenAI Engineer"]
      icon: "Brain"
      is_core: true

    - number: 7
      title: "Automatizar Deploy"
      subtitle: "Push Manual -> CI/CD Completo"
      description: "GitHub Actions rodando testes, validacoes e deploy automatico. Versionamento de prompts incluido."
      skills: ["CI/CD para GenAI", "Quality Gates", "Release Engineering"]
      personas: ["Software Engineer", "DevOps"]
      icon: "GitBranch"

    - number: 8
      title: "Operar com Agentes Autonomos"
      subtitle: "Voce de Plantao -> CrewAI de Plantao"
      description: "CrewAI Agents fazendo triagem, RCA e abrindo PRs automaticamente. Voce supervisiona, nao executa."
      skills: ["Operational Excellence", "Autonomous DataOps", "Incident Response"]
      personas: ["DataOps", "SRE for Data & AI"]
      icon: "Bot"

# TECH STACK (Required)
tech_stack:
  - name: "Anthropic"
    logo: "/images/logos/anthropic-icon.webp"
  - name: "Claude Code"
    logo: "/images/logos/claude-code-icon.webp"
  - name: "Cursor IDE"
    logo: "/images/logos/cursor-icon.webp"
  - name: "GitHub"
    logo: "/images/logos/github-icon.webp"
  - name: "Python"
    logo: "/images/logos/python-logo.webp"
  - name: "Google Cloud"
    logo: "/images/logos/google-cloud-logo.webp"
  - name: "Gemini"
    logo: "/images/logos/google-gemini-icon.webp"
  - name: "AWS"
    logo: "/images/logos/aws-icon.webp"
  - name: "Azure"
    logo: "svg-inline"
  - name: "CrewAI"
    logo: "/images/logos/crewai-icon.webp"

# AUDIENCE SECTION (Required)
audience:
  section_badge: "Voce Se Encaixa?"
  section_title: "3 Perfis que Vao"
  section_title_highlight: "Multiplicar Resultados"
  section_title_suffix: "com Agentes"

  # Target profiles (3 items)
  profiles:
    - title: "Data Engineers"
      description: "Cansados de pipelines manuais - prontos para agentes que constroem e mantem infraestrutura por voce"
      transformation: "Script manual -> Pipeline autonomo"
      fit: "perfect"
      icon: "Database"

    - title: "Analytics Engineers"
      description: "Querem sair do dbt/SQL tradicional para analytics com extracao inteligente e dashboards que se atualizam sozinhos"
      transformation: "Relatorio estatico -> Insight em tempo real"
      fit: "perfect"
      icon: "BarChart3"

    - title: "Software Engineers"
      description: "Ja dominam codigo - agora querem multiplicar output com uma frota de agentes especializados"
      transformation: "Solo coder -> Time de IA"
      fit: "good"
      icon: "Code2"

  # Prerequisites (3 items)
  prerequisites:
    - requirement: "SQL e Python"
      description: "SELECT, JOINs e funcoes basicas - se voce ja escreveu um script, esta pronto"
      level: "basic"
      icon: "Code2"

    - requirement: "Git"
      description: "git add, commit, push - o resto voce aprende no bootcamp"
      level: "basic"
      icon: "GitBranch"

    - requirement: "Claude Code Pro"
      description: "Sua arma principal - $20/mes que paga em 1 hora de produtividade"
      level: "tool"
      icon: "Terminal"

# DELIVERABLES (Required - 8 items)
deliverables:
  - text: "Repositorio GitHub production-ready"
    value: "Clone e rode em 5 minutos"
  - text: "Pipeline GenAI completo em producao"
    value: "Invoice -> BigQuery -> Dashboard"
  - text: "Infra GCP via Terraform"
    value: "Destrua e recrie em 1 comando"
  - text: "CI/CD com GitHub Actions"
    value: "Push = Deploy automatico"
  - text: "Observabilidade com Langfuse"
    value: "Custo, latencia, qualidade"
  - text: "DataOps com CrewAI Agents"
    value: "Eles operam, voce supervisiona"
  - text: "Arquitetura Multi-Cloud"
    value: "GCP hoje, AWS/Azure amanha"
  - text: "Projeto pronto para portfolio"
    value: "Mostre em entrevistas"

# INSTRUCTOR (Optional - defaults to Luan Moreno)
instructor:
  name: "Luan Moreno"
  title: "Principal AI & Autonomous Systems Engineer"
  company: "@Pythian"
  bio: "Especialista em arquiteturas de AI-Native Development e sistemas autonomos, com experiencia implementando agentes de codigo em ambientes enterprise de alta escala."
  photo: "/images/team/luan-moreno-5.png"
  achievements:
    - "Pioneiro em AI-Native Development Workflow"
    - "Implementou Claude Code em +20 projetos enterprise"
    - "Treinou +500 engenheiros em agentes autonomos"
    - "Arquitetou pipelines GenAI para Fortune 500"
```

---

## NOTES

### Background Image
- Uses: `/images/backgrounds/dominando-chatgpt-agent-builder.png`
- Applied in Hero section with radial mask for seamless blend

### Color Theme
- Primary: `#E07A5F` (Coral)
- Secondary: `#F0A090` (Light coral)
- Gradient: `from-coral to-coral`

### Special Features
- TechStackDock component with magnification effect (macOS-style)
- 11 technologies in dock (8 visible on mobile)
- Mobile-optimized with reduced animations for performance

---

_This briefing was reverse-engineered from the production Claude Code bootcamp._
