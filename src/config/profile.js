// ─────────────────────────────────────────────────────────────
//  CENTRAL PROFILE CONFIGURATION
//  Single source of truth for Abhinav Tiwary's portfolio.
//  Contains profile, experience, 3 featured home-page projects,
//  and 12 full showcase projects.
// ─────────────────────────────────────────────────────────────

export const profile = {
  // ── Core Identity ──────────────────────────────────────────
  name: "Abhinav Tiwary",
  firstName: "Abhinav",
  lastName: "Tiwary",
  handle: "abhinavtiwary",
  role: "AI/ML Engineer & Full-Stack Developer",
  headline: "Building Resilient AI Systems & Scalable Architectures",
  tagline: "Engineering leakage-free intelligence from foundation to interface.",

  // ── Bios & Introductions ───────────────────────────────────
  shortBio: "AI/ML Engineer and Full-Stack Developer specializing in autonomous agent systems, leakage-free machine learning pipelines, and production web architectures.",
  bioHeading: {
    line1: "Crafting",
    line2: "intelligent",
    line3: "systems.",
  },
  bio: [
    "I am an *AI/ML Engineer* and *Full-Stack Developer* pursuing my B.Tech in Computer Science & Engineering (Specialization: AI & ML) at Arka Jain University.",
    "My focus centers on *autonomous multi-agent orchestration*, *leakage-free machine learning pipelines*, and *enterprise-grade web systems* built for measurable business utility.",
    "I prioritize *rigorous validation*, *grounded AI verifiers*, and *calibrated decision boundaries* over speculative heuristics — building reliable software that stands up to production scrutiny."
  ],

  // ── Hero Section (Animated Text on Home Page) ──────────────
  heroIntro: [
    "I build *production-grade* AI agents, *leakage-free* machine learning systems, and *high-performance* web platforms.",
    "From *autonomous SOC orchestration* and *statutory tax audit intelligence* to *calibrated fraud detection*, my focus is end-to-end engineering rigor.",
    "Every project is *open-source*, rigorously tested, and engineered for real-world reliability."
  ],

  // ── Education & Background ────────────────────────────────
  education: {
    degree: "B.Tech in Computer Science & Engineering (Specialization: AI & ML)",
    institution: "Arka Jain University, Jamshedpur, India",
    status: "2024 – 2028 (3rd Year) · CGPA: 8.20 / 10.0",
  },
  location: {
    city: "Jamshedpur, Jharkhand",
    country: "India",
  },

  // ── Contact Details ────────────────────────────────────────
  contact: {
    email: "abhinavtiwary498@gmail.com",
    whatsappNumber: "919835045034",
    defaultDialCode: "91",
  },

  // ── Social & Online Profiles ───────────────────────────────
  socialLinks: {
    github: "https://github.com/abhinavtiwary15",
    githubUsername: "abhinavtiwary15",
    githubRepo: "abhinavtiwary15/Portfolio",
    linkedin: "https://linkedin.com/in/abhinav-tiwary-ai",
    huggingface: "https://huggingface.co/abhinavtiwary",
    twitter: "https://x.com/abhinavtiwary",
    twitterHandle: "@abhinavtiwary",
    instagram: "",
  },

  // ── Assets & URLs ──────────────────────────────────────────
  resumeUrl: "/resume.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  logoUrl: "/photo/logo-placeholder.png",
  avatarUrl: "/photo/avatar-placeholder.png",
  ogImage: "/og-image.png",

  // ── Statistics & Metric Highlights ─────────────────────────
  stats: {
    metric1: { value: "12+", label: "Open Source Projects" },
    metric2: { value: "284K+", label: "Transactions Benchmarked" },
    metric3: { value: "34+", label: "Automated Tests" },
  },

  // ── Professional Experience ────────────────────────────────
  experience: [
    {
      id: "exp-1",
      role: "AI/ML Engineer Intern",
      company: "Venturing Digitally Pvt. Ltd.",
      location: "Remote, India",
      period: "May 2026 – Jul 2026",
      type: "Internship",
      highlights: [
        "Engineered and deployed end-to-end ML and retrieval pipelines across structured tabular, transactional, and text datasets, strictly enforcing leakage-free preprocessing inside cross-validation folds.",
        "Owned the tool-calling and orchestration layer solo: implemented request parsing, deterministic tool routing, Pydantic schema validation, and defensive error boundaries prior to production release.",
        "Benchmarked tree ensembles (XGBoost, LightGBM, Random Forest) against linear baselines, tuning decision thresholds and addressing extreme class imbalance via SMOTE and precision-recall sweeps."
      ],
      skills: ["Python", "scikit-learn", "XGBoost", "LightGBM", "SMOTE", "Pydantic", "FastAPI", "Docker"]
    },
    {
      id: "exp-2",
      role: "Microsoft Learn Student Ambassador (MLSA)",
      company: "Microsoft",
      location: "Arka Jain University (Campus Lead)",
      period: "2026 – Present",
      type: "Leadership",
      highlights: [
        "Founded 'Students for Startups' to bridge student builders with early-stage founders for collaborative mentorship, hiring, and technical feedback.",
        "Organized and led technical hands-on workshops on Microsoft Azure AI, cloud infrastructure, and agentic workflows for 150+ engineering students at Arka Jain University."
      ],
      skills: ["Azure AI", "Cloud Infrastructure", "Agentic Workflows", "Community Leadership", "Technical Speaking"]
    }
  ],

  // ── Task 1: 3 Featured Projects (Home Page) ────────────────
  // Featured in exact required order: DecisionForge, AgentGuard, Credit Card Fraud Detection
  featuredProjects: [
    {
      id: "decisionforge",
      num: "01",
      name: "DecisionForge",
      domain: "Full-stack",
      category: "Full-stack",
      badge: "Open Source",
      one_liner: "GST Input Tax Credit audit intelligence platform combining BigQuery analytical views with Gemini explanations protected by a numeric-grounding verification guard.",
      homeExcerpt: "The numeric grounding verifier checks every generated figure against source invoice data, discarding hallucinated amounts in favor of deterministic templates. The AI is treated as a verified drafting assistant, not an unquestioned oracle.",
      tech_stack: ["React 19", "Node.js", "Express 5", "Google BigQuery", "Google Gemini", "Tailwind CSS v4", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/Decisionforge",
      projectPageHref: "/projects#decisionforge",
      accentColor: "#38bdf8",
      metricBadge: "BigQuery + Gemini Guard | 18% CGST Rec.",
      placeholderLabel: "Enterprise Financial Architecture & Verifier"
    },
    {
      id: "agentguard",
      num: "02",
      name: "AgentGuard",
      domain: "GenAI / Agentic",
      category: "GenAI/Agentic",
      badge: "Open Source",
      one_liner: "Autonomous AI security operations center orchestrating 5 specialized Azure OpenAI agents for real-time threat triage, investigation, and automated containment.",
      homeExcerpt: "Engineered a lightweight asynchronous agent framework using typed Python classes rather than heavy agent wrappers, with resilient local in-memory fallbacks enabling complete offline operation with zero cloud dependencies.",
      tech_stack: ["FastAPI", "Python 3.11", "Azure OpenAI (GPT-4o)", "Azure AI Search", "WebSocket", "React 18", "Docker"],
      github_url: "https://github.com/abhinavtiwary15/AgentGuard",
      projectPageHref: "/projects#agentguard",
      accentColor: "#c084fc",
      metricBadge: "5 Autonomous Agents | MITRE ATT&CK RAG",
      placeholderLabel: "Multi-Agent SOC Orchestration Engine"
    },
    {
      id: "credit-card-fraud-detection",
      num: "03",
      name: "Credit Card Fraud Detection",
      domain: "Machine Learning",
      category: "ML",
      badge: "Open Source",
      one_liner: "Calibrated, leakage-free fraud classification pipeline on 284K+ transactions with SMOTE in-pipeline oversampling, tuning operating thresholds to boost precision to 87.5% at 78.6% recall.",
      homeExcerpt: "Prioritized PR-AUC over deceptive ROC-AUC under extreme 578:1 imbalance, calibrating the decision threshold to 0.9793 to surge precision from 36.1% to 87.5% at controlled recall.",
      tech_stack: ["Python", "scikit-learn", "XGBoost", "LightGBM", "imbalanced-learn", "Streamlit", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/Credit-Card-Fraud-Detection-ML",
      projectPageHref: "/projects#credit-card-fraud-detection",
      accentColor: "#34d399",
      metricBadge: "PR-AUC: 0.8506 | Precision: 87.5% | 284K Rows",
      placeholderLabel: "Calibrated Imbalance Classification Pipeline"
    }
  ],

  // ── Task 2: 12 Projects Showcase (Projects Page) ────────────
  // Balanced spread across Full-stack (3), GenAI/Agentic (4), Machine Learning (5)
  projects: [
    {
      id: "decisionforge",
      name: "DecisionForge",
      domain: "Full-stack",
      category: "Full-stack",
      badge: "Open Source",
      one_liner: "GST Input Tax Credit audit intelligence platform combining BigQuery analytical views with Gemini explanations protected by a numeric-grounding verification guard.",
      description: "Corporate tax teams face severe financial exposure (18% annual interest and penalties under Section 16(2)(aa) of CGST Act) when reconciling purchase registers against supplier GSTR-2B filings, while standard LLMs hallucinate financial amounts. DecisionForge pairs BigQuery analytical views with a custom numeric-grounding verification guard that audits every generated figure against source invoice data. Non-grounded numbers are automatically discarded in favor of deterministic templates, eliminating financial liability from model hallucinations.",
      tech_stack: ["React 19", "Vite", "Tailwind CSS v4", "Node.js", "Express 5", "Google BigQuery", "Google Gemini", "Python", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/Decisionforge",
      quantifiable_impact: "Audits Section 16(2)(aa) 18% annual interest exposure; classifies invoices into 7 categories with ₹100 tolerance; segments risk across 4 financial tiers (Critical >₹50k, High >₹25k, Medium, Low); dual Python/Node test suites.",
      accentColor: "#38bdf8",
      metricBadge: "BigQuery Views + Grounding Guard | Section 16(2)(aa)",
      placeholderLabel: "DecisionForge Enterprise Architecture",
      image_url: "/projects/decisionforge.png"
    },
    {
      id: "agentguard",
      name: "AgentGuard",
      domain: "GenAI / Agentic",
      category: "GenAI/Agentic",
      badge: "Open Source",
      one_liner: "Autonomous AI security operations center orchestrating 5 specialized Azure OpenAI agents for real-time threat triage, investigation, and automated containment.",
      description: "Security operations teams face alert fatigue and slow manual triage across high-volume enterprise telemetry, requiring automated multi-agent coordination. AgentGuard orchestrates five specialized autonomous AI agents (Sentinel, Oracle, Nexus, Striker, and Herald) to ingest logs, execute RAG investigations over MITRE ATT&CK, route high-impact incidents, and automate containment like IP blocking. Built in pure async Python with typed classes rather than bloated agent wrappers, the system includes resilient local in-memory fallbacks enabling complete offline operation.",
      tech_stack: ["FastAPI", "Python 3.11", "Azure OpenAI (GPT-4o)", "Azure AI Search", "WebSocket", "React 18", "TypeScript", "Tailwind CSS", "Docker"],
      github_url: "https://github.com/abhinavtiwary15/AgentGuard",
      quantifiable_impact: "Orchestrates 5 autonomous AI agents; includes 3 attack simulation scenarios (SQL injection, credential stuffing, insider exfiltration); zero paid cloud dependency requirement via local fallbacks.",
      accentColor: "#c084fc",
      metricBadge: "5 Autonomous Agents | MITRE ATT&CK RAG",
      placeholderLabel: "AgentGuard SOC Orchestration Architecture",
      image_url: "/projects/agentguard.png"
    },
    {
      id: "credit-card-fraud-detection",
      name: "Credit Card Fraud Detection",
      domain: "Machine Learning",
      category: "ML",
      badge: "Open Source",
      one_liner: "Calibrated, leakage-free fraud classification pipeline on 284K+ transactions with SMOTE in-pipeline oversampling, tuning operating thresholds to boost precision to 87.5% at 78.6% recall.",
      description: "Detecting fraud under severe class imbalance (0.17% fraud rate across 284,807 transactions) is undermined when naive models report 99.8% baseline accuracy while catching zero fraud, and default 0.50 thresholds produce unworkable false alarm rates. This leakage-free pipeline strictly encapsulates RobustScaler and SMOTE oversampling within cross-validation folds and optimizes PR-AUC over deceptive ROC-AUC metrics. By calibrating the decision threshold along the precision-recall curve to 0.9793, XGBoost precision was elevated from 36.1% to 87.5% at 78.6% recall.",
      tech_stack: ["Python", "scikit-learn", "XGBoost", "LightGBM", "imbalanced-learn (SMOTE)", "pandas", "NumPy", "Streamlit", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/Credit-Card-Fraud-Detection-ML",
      quantifiable_impact: "Evaluated on 284,807 transactions with 0.17% fraud prevalence (578:1 imbalance); XGBoost achieved PR-AUC 0.8506 and ROC-AUC 0.9837; decision threshold calibrated to 0.9793, raising precision from 36.1% to 87.5% at 78.6% recall; 4 automated tests.",
      accentColor: "#34d399",
      metricBadge: "PR-AUC: 0.8506 | Precision: 87.5% | 284,807 Rows",
      placeholderLabel: "Leakage-Free Fraud Classification Pipeline"
    },
    {
      id: "verifyhire",
      name: "VerifyHire",
      domain: "Full-stack",
      category: "Full-stack",
      badge: "Open Source",
      one_liner: "Full-stack hiring-fraud detection platform scoring candidate authenticity across 5 real signals using deterministic NLP, Gemini Vision, and Fastify microservices.",
      description: "HR tech platforms frequently present deceptive mockups and simulated features rather than honest, compliant candidate fraud verification pipelines. VerifyHire computes an auditable Candidate Authenticity Score across five weighted verification signals using stylometric resume NLP, timeline plausibility via Gemini 1.5 Flash, periodic interview webcam monitoring, and cross-tenant HMAC-SHA256 fraud hashing. The platform replaced simulated UI stubs with a production-grade Fastify, Redis/BullMQ, and Next.js 14 architecture.",
      tech_stack: ["Fastify", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Next.js 14", "React", "Tailwind CSS", "Google Gemini", "Stripe API", "pytest", "jest"],
      github_url: "https://github.com/abhinavtiwary15/VerifyHire",
      quantifiable_impact: "Evaluates Candidate Authenticity Score across 5 weighted signals (25% Resume, 20% Work, 20% Online, 25% Vision, 10% Cross-tenant); captures video frames every 8s; HMAC-SHA256 salt security; pytest/jest test coverage.",
      accentColor: "#38bdf8",
      metricBadge: "5 Verification Signals | Redis/BullMQ Queue",
      placeholderLabel: "VerifyHire Pre-Employment Fraud Engine"
    },
    {
      id: "trustcall",
      name: "TrustCall",
      domain: "Full-stack",
      category: "Full-stack",
      badge: "Open Source",
      one_liner: "Full-stack real-time call fraud detection platform with FastAPI, React, Chrome extension, and Celery alerting, audited to eliminate arbitrary code execution and credential risks.",
      description: "Real-time voice and video call fraud tools often present polished interfaces while masking severe security vulnerabilities and uncalled alerting hooks. TrustCall connects a Manifest V3 Chrome extension to an async FastAPI backend and Celery workers to compute heuristic DSP audio risk metrics and stream live alerts over WebSockets. A rigorous security audit remediated arbitrary code execution vulnerabilities (pickle deserialization), default database credentials, and broken alerting wires before release.",
      tech_stack: ["FastAPI", "Python", "SQLAlchemy (async)", "PostgreSQL", "Celery", "React", "TypeScript", "Tailwind CSS", "Chrome Extension", "librosa", "Docker Compose", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/TrustCall",
      quantifiable_impact: "Audited and eliminated 4 critical security vulnerabilities (pickle RCE, hardcoded secret, default DB password, missing RBAC); 13 automated tests across async endpoints and alerting pipelines.",
      accentColor: "#38bdf8",
      metricBadge: "Chrome Ext + Celery + WebSockets | 4 Vulnerabilities Fixed",
      placeholderLabel: "TrustCall Real-Time Call Telemetry Engine"
    },
    {
      id: "researchmind",
      name: "ResearchMind",
      domain: "GenAI / Agentic",
      category: "GenAI/Agentic",
      badge: "Open Source",
      one_liner: "Iterative multi-agent research pipeline in LangGraph catching hallucinated sources by capping critic scores and routing revisions back through web search.",
      description: "Unconstrained multi-agent feedback loops incentivize LLMs to hallucinate plausible-looking peer-reviewed citations when pressured by an automated critic that cannot verify external truth. ResearchMind uncovers and resolves a 66% fake citation rate in naive loops by enforcing hard programmatic score caps (<7) until external citation verification passes cleanly. Failed claims are routed back through live web search with Tavily and BeautifulSoup, preventing fluent prose from masking unverified claims.",
      tech_stack: ["Python", "LangGraph", "Mistral", "Tavily Search API", "BeautifulSoup", "Pydantic", "Streamlit", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/ResearchMind",
      quantifiable_impact: "Exposed and remediated 66% fake citation rate in naive feedback loops; enforced hard programmatic score caps (<7) until verification passes; 4 collaborative agents; 9 automated tests.",
      accentColor: "#c084fc",
      metricBadge: "LangGraph Multi-Agent Loop | Remediated 66% Fake DOIs",
      placeholderLabel: "ResearchMind Iterative Grounding Loop"
    },
    {
      id: "mitra-ai",
      name: "Mitra AI",
      domain: "GenAI / Agentic",
      category: "GenAI/Agentic",
      badge: "Open Source",
      one_liner: "Full-stack loneliness intervention platform combining deterministic NLP scoring and UCLA loneliness profiling with swappable LLM coaching and a database-enforced action gate.",
      description: "Conversational AI tools often trap lonely users in passive infinite-chat loops rather than encouraging real-world social reconnection. Mitra AI couples deterministic NLP relationship profiling calibrated against the UCLA Loneliness Scale with swappable LLM coaching and a database-backed action gate. The FastAPI/SQLAlchemy action gate actively halts conversational chat until users complete and report real-world reconnection actions.",
      tech_stack: ["FastAPI", "Python", "spaCy", "Groq", "Google Gemini", "Mistral", "PostgreSQL", "SQLAlchemy", "Streamlit", "Plotly", "Docker", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/Mitra-Ai",
      quantifiable_impact: "Evaluates contacts against UCLA Loneliness Scale; outputs top 1-3 prioritized contacts; verified with 34 automated unit and integration tests.",
      accentColor: "#c084fc",
      metricBadge: "UCLA Loneliness Profiling | 34 Automated Tests",
      placeholderLabel: "Mitra AI Anti-Engagement System"
    },
    {
      id: "vakil-ai",
      name: "Vakil AI",
      domain: "GenAI / Agentic",
      category: "GenAI/Agentic",
      badge: "Open Source",
      one_liner: "Statute-grounded legal Q&A assistant for Indian MSMEs featuring ChromaDB RAG, section-aware chunking, and an empirically calibrated two-layer hallucination defense.",
      description: "Delivering legal information to Indian MSMEs requires strict factual reliability, as hallucinated provisions or out-of-scope legal advice carry severe financial liabilities. Vakil AI indexes official legislative statutes directly from the indiacode.gov.in REST API with immutable manifests, utilizing section-aware chunking in ChromaDB. A two-layer defense enforces an empirically calibrated vector distance cutoff (0.52–0.90 in-scope vs 1.11–1.62 out-of-scope) before prompting Gemini to require explicit statutory section citations.",
      tech_stack: ["Python", "ChromaDB", "India Code REST API", "sentence-transformers", "Google Gemini", "Streamlit", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/Vakil-AI",
      quantifiable_impact: "Covers 4 core commercial Acts with verifiable API UUIDs; embedding distances empirically calibrated for in-scope (0.52–0.90) vs out-of-scope (1.11–1.62); 8 automated tests including two-layer defense verification.",
      accentColor: "#c084fc",
      metricBadge: "ChromaDB Legal RAG | Calibrated Distance Cutoff (0.52–0.90)",
      placeholderLabel: "Vakil AI Statutory Retrieval Architecture"
    },
    {
      id: "customer-churn-prediction",
      name: "Customer Churn Prediction",
      domain: "Machine Learning",
      category: "ML",
      badge: "Open Source",
      one_liner: "Cost-optimized customer churn prediction system framing classification thresholds around asymmetric business risk, lifting recall from 56.1% to 95.7% and saving $45K on holdout.",
      description: "Standard churn models optimize abstract statistical metrics like F1 or accuracy at default 0.50 thresholds, neglecting the asymmetric business cost where losing a customer ($1,000 LTV) far exceeds an outreach intervention ($50). Benchmarking eight candidate configurations revealed near-identical ROC-AUC scores (0.845–0.847), confirming that algorithmic choice offered minimal leverage. By deriving a cost-optimal classification threshold of tau* = 0.09 from business unit economics, churner recall surged from 56.1% to 95.7%, saving ~$45,000 on holdout records.",
      tech_stack: ["Python", "scikit-learn", "XGBoost", "LightGBM", "imbalanced-learn", "pandas", "NumPy", "Streamlit", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/Customer-Churn-Prediction-ML",
      quantifiable_impact: "Evaluated on 7,043 customer records (26.5% churn); 8 candidate configurations yielded 0.845–0.847 ROC-AUC; cost-minimizing threshold tau* = 0.09 boosted recall from 56.1% to 95.7% (capturing 358 of 374 churners), reducing holdout cost by ~$45,000; 4 automated tests.",
      accentColor: "#34d399",
      metricBadge: "Cost-Utility Threshold tau*=0.09 | $45K Saved",
      placeholderLabel: "Economic Risk Calibration Pipeline"
    },
    {
      id: "coronary-heart-disease-risk-assessment",
      name: "Coronary Heart Disease Risk Assessment",
      domain: "Machine Learning",
      category: "ML",
      badge: "Open Source",
      one_liner: "Clinically-framed cardiac risk assessment pipeline using Platt scaling calibration and SHAP TreeExplainer, prioritizing 89.16% recall over misleading unscaled accuracy baselines.",
      description: "Clinical prediction pipelines often report misleadingly high accuracy by masking clinical missing-value artifacts (such as zero cholesterol) and producing uncalibrated binary verdicts. This pipeline resolved an 18.7% missing-data artifact and trained a Random Forest optimized for Recall (89.16%) and F2-score (0.8829). Predictions are calibrated via Platt scaling (Brier score 0.105) and explained through SHAP TreeExplainer feature attributions within a Streamlit portal carrying physician equipment disclosures.",
      tech_stack: ["Python", "scikit-learn", "XGBoost", "SHAP (TreeExplainer)", "pandas", "NumPy", "Streamlit", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/Heart-Disease-Prediction-ML",
      quantifiable_impact: "Trained on 918 patient records; resolved 18.7% (172 records) missing cholesterol artifacts; champion Random Forest achieved 89.16% Recall, 0.8829 F2-score, and 0.105 Brier calibration score; 4 automated tests.",
      accentColor: "#34d399",
      metricBadge: "89.16% Recall | Brier Score: 0.105 | SHAP Explanations",
      placeholderLabel: "Calibrated Cardiac Risk Assessment Model"
    },
    {
      id: "bengaluru-house-price-prediction",
      name: "Bengaluru House Price Prediction",
      domain: "Machine Learning",
      category: "ML",
      badge: "Open Source",
      one_liner: "Leakage-free real estate regression pipeline identifying and resolving target-informed row filtering to achieve converged CV (0.543) and test (0.561) R² scores with price-quartile diagnostics.",
      description: "Filtering real estate outliers across an entire dataset using target-derived metrics (price_per_sqft) prior to train/test splitting artificially sanitizes test sets, causing test R² to unrealistically beat cross-validation scores. By detecting and fixing this subtle data leakage, Gradient Boosting CV (0.543) and test (0.561) scores properly converged, while log transforms compressed target skewness from 8.06 to 0.86. Residual analysis diagnosed a systematic ~53 Lakh luxury tier under-prediction.",
      tech_stack: ["Python", "scikit-learn", "XGBoost", "pandas", "NumPy", "matplotlib", "seaborn", "Streamlit", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/House-Price-Prediction-ML",
      quantifiable_impact: "Reduced target skewness from 8.06 to 0.86; converged Gradient Boosting to CV R² = 0.543 and test R² = 0.561 (remediating invalid pre-fix test R² 0.832 vs CV R² 0.696 divergence); identified ~53 Lakh luxury tier residual gap; 5 automated tests.",
      accentColor: "#34d399",
      metricBadge: "Eliminated Pre-Split Row Leakage | Converged CV/Test R²",
      placeholderLabel: "Leakage-Free Real Estate Valuation Engine"
    },
    {
      id: "used-car-price-estimator",
      name: "Used-Car Price Estimator",
      domain: "Machine Learning",
      category: "ML",
      badge: "Open Source",
      one_liner: "End-to-end regression ML pipeline estimating used car prices with leakage-free ColumnTransformer preprocessing, frequency-thresholded cardinality encoding, and 5-model benchmarking.",
      description: "Estimating used car valuations from real-world listings is corrupted by extreme typo outliers, dirty unit strings, and high-cardinality categorical features. By diagnosing an extreme divergence between cross-validation and test metrics, the pipeline traced and purged a single $26.3M listing typo and pooled 1,590 models into ~216 categories using frequency-thresholded encoding. A leakage-free ColumnTransformer pipeline benchmarks five regression models, deploying a champion Random Forest model (R² = 0.78, MAE ≈ $4,237).",
      tech_stack: ["Python", "scikit-learn", "XGBoost", "LightGBM", "pandas", "NumPy", "Streamlit", "pytest"],
      github_url: "https://github.com/abhinavtiwary15/Car-Price-Prediction-ML",
      quantifiable_impact: "Achieved Random Forest test R² = 0.78 and MAE ≈ $4,237; pooled 1,590 unique models down to ~216 frequent categories; purged a single $26.3M listing outlier; validated by 8 automated tests.",
      accentColor: "#34d399",
      metricBadge: "Purged $26.3M Outlier | 1,590 Models Pooled | R²: 0.78",
      placeholderLabel: "High-Cardinality Valuation ML Pipeline"
    }
  ],

  // ── Backward-compatible services list ──────────────────────
  services: [
    {
      name: "Autonomous AI Agents & LLM Systems",
      description: "Multi-agent systems, statutory RAG retrieval, and grounded tool-calling orchestration with Azure OpenAI, LangGraph, and Gemini.",
      technologies: ["FastAPI", "LangGraph", "Azure OpenAI", "ChromaDB", "Python"],
    },
    {
      name: "Machine Learning & Predictive Modeling",
      description: "Leakage-free ML pipelines, extreme class imbalance calibration, cost-utility threshold tuning, and SHAP explainability.",
      technologies: ["scikit-learn", "XGBoost", "LightGBM", "SMOTE", "pandas"],
    },
    {
      name: "Full-Stack Web Engineering",
      description: "Enterprise-grade web applications, BigQuery analytical views, microservice task queues, and cinematic React/Next.js interfaces.",
      technologies: ["Next.js", "React 19", "Fastify", "Node.js", "Tailwind CSS", "Redis"],
    },
  ],

  // ── SEO & OpenGraph Defaults ───────────────────────────────
  seo: {
    title: "Abhinav Tiwary — AI/ML Engineer & Full-Stack Developer",
    titleTemplate: "%s — Abhinav Tiwary",
    description: "Portfolio of Abhinav Tiwary: AI/ML Engineer and Full-Stack Developer. Featuring open-source projects in autonomous AI agents, leakage-free ML pipelines, and scalable enterprise architectures.",
    keywords: [
      "Abhinav Tiwary", "AI Engineer", "Machine Learning Engineer",
      "Full Stack Developer", "Autonomous Agents", "DecisionForge", "AgentGuard",
      "Credit Card Fraud Detection", "Next.js", "FastAPI", "Python", "React"
    ],
  },
};

export default profile;
