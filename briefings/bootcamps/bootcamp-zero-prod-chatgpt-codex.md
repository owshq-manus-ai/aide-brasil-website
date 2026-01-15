# Bootcamp Briefing: Do Zero a Produção com ChatGPT Codex

> **ChatGPT Codex Bootcamp**
> Learn to use ChatGPT Codex as your autonomous coding agent in the cloud.

---

## BRIEFING

```yaml
# ============================================
# BOOTCAMP BRIEFING - ChatGPT Codex
# ============================================

# BASIC INFO (Required)
name: "Do Zero a Produção com ChatGPT Codex"
slug: "zero-prod-chatgpt-codex"
component_name: "ChatGPTCodexBootcamp"
title_highlight: "ChatGPT Codex"
subtitle: "Use o Codex como seu engenheiro na nuvem — com agentes que escrevem, testam e entregam código autonomamente"
date_range: "11-14 Fev 2026"
time: "20:00 BRT"
duration: "12 horas"
total_days: 4

# THEME (Required) - Gray for professional tools
theme: "gray"
primary_color: "#6b7280"
secondary_color: "#9ca3af"
accent_color: "#374151"
light_color: "#d1d5db"

# PRICING (Required)
pricing:
  early_bird:
    price: "897"
    status: "current"
  current:
    name: "Lote Decisão"
    price: "1.197"
    original_price: "1.397"
    installments: "12x de R$ 119,63"
    spots_left: 100
    status: "upcoming"
  final:
    price: "1.397"
    status: "upcoming"

# PAYMENT GATEWAY (Required)
eduzz_checkout_url: "https://sun.eduzz.com/XXXXXXXX"
countdown_target: "2026-02-07T00:00:00-03:00"

# HERO SECTION (Required)
hero:
  headline: "Do Zero a Produção"
  transformation_promise: "Use o Codex como seu engenheiro na nuvem — com agentes que escrevem, testam e entregam código autonomamente"

  # Status badges (4 items)
  badges:
    - label: "Online"
      color: "green"
    - label: "Lançamento"
      color: "theme"
    - label: "Cloud-Native"
      color: "blue"
    - label: "12 Horas Hands-On"
      color: "green"

  # Learning points in right card - EXACTLY 6 items
  learning_points:
    - text: "Codex Environment: sandbox cloud, file system e execução autônoma"
      icon: "Terminal"
    - text: "Prompt Engineering: estruturar instruções para código production-ready"
      icon: "FileText"
    - text: "API Integration: conectar Codex com serviços externos via requests"
      icon: "Webhook"
    - text: "Data Pipeline: ETL completo com pandas, SQL e visualização"
      icon: "Database"
    - text: "Testing Automation: pytest, coverage e CI/CD integrado"
      icon: "Shield"
    - text: "Production Deploy: do Codex para AWS/GCP com automação total"
      icon: "Rocket"

  # Value propositions - EXACTLY 3 items
  value_props:
    - icon: "Bot"
      text: "Delegue tarefas complexas para um agente que executa código na nuvem"
    - icon: "Terminal"
      text: "Processo completo: do problema ao deploy, sem configurar ambiente local"
    - icon: "Rocket"
      text: "Sistema real funcionando em 4 dias — com testes e monitoramento"

# PROMISE SECTION - EXACTLY 8 Features (Required)
promise:
  section_badge: "SEU ARSENAL COMPLETO"
  section_title: "8 Superpoderes do"
  section_title_highlight: "ChatGPT Codex"
  section_title_suffix: "que Ninguém Ensina"

  features:
    - title: "Cloud Sandbox"
      description: "Execute código em ambiente isolado com Python, Node e ferramentas pré-instaladas — sem configurar nada local"
      highlight: "sem configurar nada"
      color: "blue"
      icon: "Cloud"

    - title: "File System Access"
      description: "Leia, escreva e manipule arquivos diretamente — o Codex gerencia seu workspace como um dev sênior"
      highlight: "dev sênior"
      color: "purple"
      icon: "FolderOpen"

    - title: "Package Management"
      description: "Instale qualquer biblioteca Python ou Node com pip/npm — o Codex resolve dependências automaticamente"
      highlight: "resolve dependências"
      color: "green"
      icon: "Package"

    - title: "API Requests"
      description: "Conecte com qualquer API externa — REST, GraphQL, webhooks funcionando em segundos"
      highlight: "segundos"
      color: "cyan"
      icon: "Webhook"

    - title: "Data Analysis"
      description: "Pandas, matplotlib, seaborn prontos para uso — de CSV cru a insights visuais em uma conversa"
      highlight: "insights visuais"
      color: "orange"
      icon: "BarChart3"

    - title: "Code Generation"
      description: "Gere código production-ready com docstrings, tipos e testes — não código de tutorial"
      highlight: "production-ready"
      color: "pink"
      icon: "Code2"

    - title: "Error Debugging"
      description: "O Codex lê o erro, entende o contexto e corrige — debug autônomo sem você intervir"
      highlight: "debug autônomo"
      color: "amber"
      icon: "Bug"

    - title: "Iterative Refinement"
      description: "Refine código através de conversas — cada iteração melhora qualidade e performance"
      highlight: "cada iteração melhora"
      color: "red"
      icon: "RefreshCw"

# DIFFERENTIATORS - EXACTLY 6 Reasons (Required)
differentiators:
  section_badge: "O QUE FAZ A DIFERENÇA"
  section_title: "6 Razões Para"
  section_title_highlight: "Nunca Mais"
  section_title_suffix: "Fazer Curso de Prompt"

  # Bottom statement (strikethrough pattern)
  bottom_statement:
    others_teach: "prompts"
    we_teach: "operar agentes autônomos"

  items:
    - title: "Cloud, Não Local"
      description: "Outros cursos: você configura ambiente. Aqui: Codex roda na nuvem — zero setup, zero conflito de dependências."
      highlight: "zero setup"
      icon: "Cloud"

    - title: "Execução, Não Sugestão"
      description: "Outros cursos: IA sugere código. Aqui: Codex executa, testa e entrega resultado — você vê funcionando."
      highlight: "executa, testa e entrega"
      icon: "Play"

    - title: "Autonomia Real"
      description: "Outros cursos: você copia e cola. Aqui: Codex resolve problemas sozinho — debug, retry e adaptação automáticos."
      highlight: "resolve problemas sozinho"
      icon: "Bot"

    - title: "Pipeline Completo"
      description: "Outros cursos: funções isoladas. Aqui: sistema end-to-end — da entrada de dados ao dashboard final."
      highlight: "end-to-end"
      icon: "GitBranch"

    - title: "Production Export"
      description: "Outros cursos: código fica no chat. Aqui: exporta para GitHub, deploya em cloud — código real em produção."
      highlight: "código real em produção"
      icon: "Upload"

    - title: "Portfólio Concreto"
      description: "Outros cursos: certificado PDF. Aqui: projeto funcionando no GitHub — mostre o que você construiu."
      highlight: "projeto funcionando"
      icon: "Trophy"

# JOURNEY - EXACTLY 8 Steps (Required)
journey:
  section_badge: "SUA JORNADA EM 4 DIAS"
  section_title: "8 Passos Para"
  section_title_highlight: "Dominar o Codex"
  section_title_suffix: "e Entregar em Produção"

  steps:
    - number: 1
      title: "Entender o Ambiente Codex"
      subtitle: "Chat Básico → Sandbox Poderoso"
      description: "Descubra o que o Codex realmente pode fazer — file system, packages, execução. Você sai sabendo explorar o ambiente."
      skills: ["Codex Capabilities", "Environment Exploration", "Effective Prompting"]
      personas: ["Developer", "Data Analyst"]
      icon: "Search"
      is_core: false

    - number: 2
      title: "Estruturar Prompts Efetivos"
      subtitle: "Pedido Vago → Instrução Precisa"
      description: "Aprenda a dar instruções que geram código de qualidade. Pattern de prompts que funcionam toda vez."
      skills: ["Prompt Engineering", "Specification Writing", "Quality Instructions"]
      personas: ["Software Engineer", "Tech Lead"]
      icon: "FileText"
      is_core: false

    - number: 3
      title: "Manipular Dados"
      subtitle: "CSV Cru → DataFrame Limpo"
      description: "Use pandas no Codex para limpar, transformar e analisar dados. De arquivo cru a insights em minutos."
      skills: ["Pandas Mastery", "Data Cleaning", "Exploratory Analysis"]
      personas: ["Data Analyst", "Data Engineer"]
      icon: "Database"
      is_core: false

    - number: 4
      title: "Integrar APIs Externas"
      subtitle: "Sistema Isolado → Conectado ao Mundo"
      description: "Conecte o Codex com APIs REST — autenticação, requests, parsing de resposta. Dados externos fluindo."
      skills: ["REST APIs", "Authentication", "Error Handling"]
      personas: ["Backend Engineer", "Integration Specialist"]
      icon: "Webhook"
      is_core: false

    - number: 5
      title: "Construir Pipeline ETL"
      subtitle: "Tarefas Manuais → Pipeline Automático"
      description: "Monte um pipeline completo: extract de API, transform com pandas, load para destino. Tudo automatizado."
      skills: ["ETL Design", "Data Pipelines", "Automation"]
      personas: ["Data Engineer", "Analytics Engineer"]
      icon: "GitBranch"
      is_core: false

    - number: 6
      title: "Gerar Visualizações"
      subtitle: "Números → Gráficos que Comunicam"
      description: "Crie dashboards e visualizações com matplotlib e seaborn. De dados a insights visuais prontos para apresentar."
      skills: ["Data Visualization", "Chart Design", "Storytelling"]
      personas: ["Data Analyst", "BI Developer"]
      icon: "BarChart3"
      is_core: true

    - number: 7
      title: "Testar e Validar"
      subtitle: "Código Frágil → Sistema Robusto"
      description: "Adicione testes com pytest, valide edge cases. Codex escreve os testes e roda — coverage automático."
      skills: ["Testing", "Quality Assurance", "CI/CD Basics"]
      personas: ["QA Engineer", "Software Engineer"]
      icon: "Shield"
      is_core: false

    - number: 8
      title: "Exportar para Produção"
      subtitle: "Sandbox → Cloud Real"
      description: "Leve o código do Codex para GitHub, configure CI/CD, deploye em AWS/GCP. Sistema real em produção."
      skills: ["Production Deploy", "Cloud Services", "DevOps Basics"]
      personas: ["DevOps", "Platform Engineer"]
      icon: "Rocket"
      is_core: false

# TECH STACK - EXACTLY 6 Categories (Required)
tech_stack:
  section_title: "Tecnologias que Você Vai Dominar"
  section_description: "Stack completo para criar pipelines de dados e sistemas autônomos com ChatGPT Codex"

  categories:
    - name: "AI Platform"
      items: ["OpenAI Platform", "ChatGPT Codex"]
      icon: "Bot"
      color: "blue"

    - name: "Languages"
      items: ["Python", "SQL"]
      icon: "Terminal"
      color: "purple"

    - name: "Data Stack"
      items: ["Pandas", "Matplotlib", "Seaborn"]
      icon: "Database"
      color: "green"

    - name: "APIs"
      items: ["REST APIs", "Requests", "JSON"]
      icon: "Webhook"
      color: "cyan"

    - name: "Testing"
      items: ["Pytest", "Coverage"]
      icon: "Shield"
      color: "orange"

    - name: "Deploy"
      items: ["GitHub", "AWS Lambda", "GCP Cloud Run"]
      icon: "Rocket"
      color: "pink"

# AUDIENCE SECTION (Required)
audience:
  section_badge: "VOCÊ SE ENCAIXA?"
  section_title: "3 Perfis que Vão"
  section_title_highlight: "Multiplicar Resultados"
  section_title_suffix: "com Codex"

  # Target profiles - EXACTLY 3 items
  profiles:
    - title: "Data Analysts"
      description: "Cansados de scripts manuais — prontos para um assistente que executa análises completas por você"
      transformation: "Excel manual → Pipeline automático"
      fit: "perfect"
      icon: "BarChart3"

    - title: "Developers"
      description: "Querem acelerar desenvolvimento com um agente que escreve, testa e debugga código"
      transformation: "Código lento → Entrega rápida"
      fit: "perfect"
      icon: "Code2"

    - title: "Product Managers"
      description: "Precisam prototipar rápido — Codex transforma ideias em POCs funcionais em horas"
      transformation: "Ideia → POC funcionando"
      fit: "good"
      icon: "Lightbulb"

  # Prerequisites - EXACTLY 3 items
  prerequisites:
    - requirement: "Python Básico"
      description: "Variáveis, loops, funções — se você já escreveu um script, está pronto"
      level: "basic"
      icon: "Code2"

    - requirement: "ChatGPT Plus"
      description: "Sua ferramenta principal — $20/mês com acesso ao Codex"
      level: "tool"
      icon: "Bot"

    - requirement: "Vontade de Aprender"
      description: "O resto você aprende no bootcamp — chegue com curiosidade"
      level: "mindset"
      icon: "Brain"

  # Bottom note
  bottom_note: "Não é sobre ser expert — é sobre estar pronto para acelerar. Se você já escreveu um script Python, você está pronto."

# DELIVERABLES - EXACTLY 8 Items (Required)
deliverables:
  - text: "Repositório GitHub completo"
    value: "Clone e rode em 5 minutos"
  - text: "Pipeline ETL funcionando"
    value: "API → Transformação → Output"
  - text: "Dashboard de visualização"
    value: "Gráficos prontos para apresentar"
  - text: "Suite de testes pytest"
    value: "Coverage > 80%"
  - text: "Documentação automática"
    value: "Docstrings e README gerados"
  - text: "CI/CD configurado"
    value: "GitHub Actions pronto"
  - text: "Deploy em cloud"
    value: "AWS Lambda ou GCP Cloud Run"
  - text: "Projeto portfólio"
    value: "Mostre em entrevistas"

# FINAL CTA (Required)
final_cta:
  today_state: "Pedindo código ao ChatGPT"
  future_state: "Operando o Codex como dev sênior"
  headline: "Automatizando com Codex"
  subheadline: "ou Fazendo Manual?"
  tagline_strikethrough: "Copia e cola"
  tagline_highlight: "Pipeline Automatizado"
  bottom_text: "Zero trabalho manual. 100% automação."

# INSTRUCTOR (Optional - defaults to Luan Moreno)
instructor:
  name: "Luan Moreno"
  title: "Principal AI & Autonomous Systems Engineer"
  company: "@Pythian"
  photo: "/images/team/luan-moreno-5.png"
  achievements:
    - "Pioneiro em AI-Assisted Development"
    - "Implementou pipelines com Codex em +15 projetos"
    - "Treinou +400 profissionais em ferramentas OpenAI"
    - "Arquitetou sistemas de automação para Fortune 500"
```

---

## NOTES

### Theme - Gray (Professional)
- Primary: `#6b7280` (Gray-500)
- Secondary: `#9ca3af` (Gray-400)
- Accent: `#374151` (Gray-700)
- Light: `#d1d5db` (Gray-300)

### Required Images
- Background: `/images/backgrounds/dominando-chatgpt-codex.png` (needs to be created)
- Tech logos in `/public/images/logos/` (optional - will show placeholders)

### Eduzz URL
- Needs to be configured after creating the product on Eduzz

---

_This briefing is ready for the /bootcamp command._
