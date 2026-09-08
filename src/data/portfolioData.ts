import { CourseModule, CapabilityVector, BlueprintProject, CredentialItem } from '../types';

export const HERO_BACKDROP_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCutdHZPfK98-glnMjjHBbmXNd1iXlO1JJZzJUhvtpIdpcTyUWxVEuvywxOod8fedXPX9vfm4Caaa7vIxwWZ2vFfUy52530-ZZbQqKGA7LVD3WKq2mnaeAxX8m56F5miJjUBGrYYlmawacc4qdDMYfAjSnBUsI2VhL7uPrDda3fKd-3Isg76udzwRqxy6rihlgKJofhSDbnGIza2vfAe0kbfBzhQ-QNTR-gnD3K7yUQmmAP2ELHwqYtyg';

export const PROFILE_DOSSIER = {
  quote: "“AI/ML student. Builder. Future engineer.”",
  coreDirective: "Undergraduate technologist specializing in Artificial Intelligence and Machine Learning at REVA University. Independently engineering modular web systems and training mathematical intuition toward production-grade, fault-tolerant predictive pipelines.",
  status: "ACTIVE PIPELINE RESEARCH",
  telemetry: [
    { label: "GEOGRAPHIC ANCHOR", value: "Bangalore, India", sub: "[KA-560064]" },
    { label: "ACADEMIC DEGREE", value: "B.Tech — AI & ML", sub: "School of C&IT" },
    { label: "AFFILIATION", value: "REVA University", sub: "Cohort 2024 - 2028" },
    { label: "CURRENT CGPA", value: "8.6 / 10.0", sub: "Verified Academic Record", highlight: true },
    { label: "SEMESTER RUNTIME", value: "Semester 03", sub: "Sophomore Cycle" },
    { label: "SYSTEM FOCUS", value: "Deep Learning & Web", sub: "Scalable Computational Logic" }
  ],
  sparklinePoints: [
    { term: "Semester 01", gpa: 8.4, x: 0, y: 40 },
    { term: "Mid-Term 01", gpa: 8.5, x: 100, y: 32 },
    { term: "Semester 02", gpa: 8.6, x: 200, y: 28 },
    { term: "Mid-Term 02", gpa: 8.65, x: 300, y: 16 },
    { term: "Internal Eval", gpa: 8.7, x: 400, y: 14 },
    { term: "Semester 03 (Current)", gpa: 8.8, x: 500, y: 8 }
  ]
};

export const COURSE_MODULES: CourseModule[] = [
  {
    id: "mod-01",
    code: "MOD_01",
    title: "Probability & Statistics",
    description: "Stochastic models & distribution algorithms",
    category: "Math",
    topics: ["Random Variables", "Probability Distributions", "Bayesian Inference", "Hypothesis Testing", "Markov Chains"],
    tools: ["Python", "SciPy", "NumPy"],
    status: "COMPLETED"
  },
  {
    id: "mod-02",
    code: "MOD_02",
    title: "Applied Python / Data Science",
    description: "Exploratory analytics, tensor structures & pipelining",
    category: "Core",
    topics: ["Vectorized Operations", "DataFrame Wrangling", "Feature Engineering", "Exploratory Data Analysis", "Signal Pipelining"],
    tools: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    status: "COMPLETED"
  },
  {
    id: "mod-03",
    code: "MOD_03",
    title: "Data Structures",
    description: "Trees, graphs, computational complexity analysis",
    category: "Core",
    topics: ["Binary Search Trees", "AVL Trees", "Graph Traversal (BFS/DFS)", "Dynamic Programming", "Asymptotic Big-O Analysis"],
    tools: ["C++", "Python", "GDB"],
    status: "COMPLETED"
  },
  {
    id: "mod-04",
    code: "MOD_04",
    title: "Database Management Systems",
    description: "Relational calculus, schema design & query logic",
    category: "Systems",
    topics: ["Entity-Relationship Modeling", "Relational Algebra", "Normalization (1NF to BCNF)", "Transaction ACID properties", "Indexing & Query Optimization"],
    tools: ["PostgreSQL", "MySQL", "SQLite"],
    status: "IN_PROGRESS"
  },
  {
    id: "mod-05",
    code: "MOD_05",
    title: "Object-Oriented Python",
    description: "Modular paradigms, encapsulation & systems",
    category: "Core",
    topics: ["Inheritance & Polymorphism", "Metaclasses & Dunder Methods", "Design Patterns", "Abstract Base Classes", "Unit Testing"],
    tools: ["Python 3.12", "pytest", "mypy"],
    status: "COMPLETED"
  },
  {
    id: "mod-06",
    code: "MOD_06",
    title: "Advanced Manufacturing / Industry 4.0",
    description: "Cyber-physical systems & telemetry streams",
    category: "Hardware",
    topics: ["Industrial IoT Protocols", "Smart Sensor Streams", "Automated Quality Control", "Digital Twins", "Predictive Maintenance"],
    tools: ["MQTT", "Telemetry Gateways", "Edge Compute"],
    status: "IN_PROGRESS"
  },
  {
    id: "mod-07",
    code: "MOD_07",
    title: "Robotics and Automation",
    description: "Kinematic pipelines & robotic sensors",
    category: "Hardware",
    topics: ["Forward & Inverse Kinematics", "Sensory Feedback Loops", "PID Controllers", "Actuator Dynamics", "Autonomous Path Planning"],
    tools: ["ROS Basics", "Kinematic Simulators"],
    status: "IN_PROGRESS"
  },
  {
    id: "mod-08",
    code: "MOD_08",
    title: "Chemical Technology for Computing",
    description: "Silicon hardware boundaries & energy substrates",
    category: "Hardware",
    topics: ["Semiconductor Lithography", "Bandgap Engineering", "Dielectric Layers", "Battery Chemistries", "Heat Dissipation Substrates"],
    tools: ["Material Analysis Toolkits"],
    status: "COMPLETED"
  }
];

export const CAPABILITY_VECTORS: CapabilityVector[] = [
  {
    id: "vect-01",
    vectorId: "VECT_01 // CORE_LANGUAGE",
    categoryTag: "CORE_LANGUAGE",
    statusTag: "100% FOCUS",
    statusType: "primary",
    title: "Python",
    description: "Primary computational language used for algorithm synthesis, numerical simulations, and server-side logic.",
    footerStandard: "STANDARD: PEP8 // OOP // SCRIPTING"
  },
  {
    id: "vect-02",
    vectorId: "VECT_02 // SCIENTIFIC_COMPUTING",
    categoryTag: "SCIENTIFIC_COMPUTING",
    statusTag: "STABLE",
    statusType: "tertiary",
    title: "Data & Computing",
    description: "High-throughput tensor manipulations, exploratory pipelines, and computational visualizations.",
    tags: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    footerStandard: "DATA TRANSFORMS & STAT PLOTTING"
  },
  {
    id: "vect-03",
    vectorId: "VECT_03 // PREDICTIVE_SYSTEMS",
    categoryTag: "PREDICTIVE_SYSTEMS",
    statusTag: "ACTIVE DEPLOY",
    statusType: "primary",
    title: "Machine Learning",
    description: "Statistical classification, regressions, clustered patterns, feature transformations, and evaluation metrics.",
    tags: ["Scikit-learn", "Supervised ML", "Unsupervised ML", "Model Evaluation", "One-Hot Encoding", "Train-Test Split"],
    footerStandard: "MODEL TUNING & VALIDATION RUNTIME"
  },
  {
    id: "vect-04",
    vectorId: "VECT_04 // SOFTWARE_ARCH",
    categoryTag: "SOFTWARE_ARCH",
    statusTag: "FOUNDATIONAL",
    statusType: "outline",
    title: "Software Engineering",
    description: "Algorithmic complexity, clean microservices, reactive UI semantics, and structured API layers.",
    tags: ["Data Structures & Algorithms", "Object-Oriented Python", "Flask", "HTML5 / CSS3 / JavaScript"],
    footerStandard: "END-TO-END PIPELINES & CLIENT VIEWS"
  },
  {
    id: "vect-05",
    vectorId: "VECT_05 // PERSISTENCE",
    categoryTag: "PERSISTENCE",
    statusTag: "OPERATIONAL",
    statusType: "tertiary",
    title: "Database Systems",
    description: "Data modeling, normal forms, transactional integrity, and structured persistence engines.",
    tags: ["DBMS Architecture", "Relational Schemas", "SQL Logic"],
    footerStandard: "ACID GUARANTEES & NORMALIZATION"
  },
  {
    id: "vect-06",
    vectorId: "VECT_06 // INFRASTRUCTURE",
    categoryTag: "INFRASTRUCTURE",
    statusTag: "DAILY USE",
    statusType: "primary",
    title: "Tools & Versioning",
    description: "Distributed source control, automated collaboration trees, repository synchronization, and shell environments.",
    tags: ["Git", "GitHub", "CLI Systems"],
    footerStandard: "ATOMIC COMMITS // BRANCH ORCHESTRATION"
  }
];

export const BLUEPRINT_PROJECTS: BlueprintProject[] = [
  {
    id: "proj-01",
    code: "[SYS_AI_01]",
    tag: "PIPELINE_DEV",
    category: "AI / ML INTELLIGENT SYSTEM PIPELINE",
    title: "AI / ML Intelligent System Pipeline",
    subtitle: "Automated Prediction & Feature Engine",
    schematicType: "SCHEMATIC // PIPELINE",
    techStack: "SCK_LRN",
    statusReadout: "PROJECT DETAILS COMING SOON // IN ACTIVE DEVELOPMENT",
    statusType: "primary",
    description: "Automated end-to-end data ingestion, adaptive normalization, and model benchmarking framework. Features stochastic gradient calibration and real-time loss telemetry tracking.",
    architectureDetails: [
      "Dynamic data cleaning and automatic categorical imputation",
      "K-fold cross-validation pipeline with early-stopping triggers",
      "Exportable ONNX and serialized model artifacts",
      "Sub-millisecond inference serving endpoint benchmark"
    ],
    metrics: {
      "Target Accuracy": "94.8%",
      "Latency Target": "< 18ms",
      "Data Volume": "500k+ Samples",
      "Framework": "Scikit-Learn / PyTorch"
    },
    githubSlug: "scalbore/ai-pipeline-engine"
  },
  {
    id: "proj-02",
    code: "[SYS_WEB_02]",
    tag: "APP_DEPLOY",
    category: "FULL-STACK WEB APPLICATION",
    title: "Full-Stack Web Application",
    subtitle: "Modular Micro-Client & Python Backend",
    schematicType: "SCHEMATIC // REST_API",
    techStack: "FLASK // JS",
    statusReadout: "PROJECT DETAILS COMING SOON // REPOSITORY SYNC PENDING",
    statusType: "tertiary",
    description: "High-concurrency web platform engineered with asynchronous Python Flask endpoints, token-based session verification, and responsive reactive client orchestration.",
    architectureDetails: [
      "Strict RESTful resource routing with OpenAPI specification",
      "Normalized relational schema design with connection pooling",
      "Zero-dependency lightweight client state management",
      "Sub-second page cold boot and deterministic payload caching"
    ],
    metrics: {
      "Response Time": "45ms Avg",
      "Architecture": "Client-Server Micro",
      "Session Security": "HMAC-SHA256",
      "Runtime": "Python 3.12 / Vite"
    },
    githubSlug: "scalbore/modular-flask-web"
  },
  {
    id: "proj-03",
    code: "[SYS_EXP_03]",
    tag: "RESEARCH_LAB",
    category: "EXPERIMENTAL NEURAL BUILD",
    title: "Experimental Neural Build",
    subtitle: "Computational Matrix Optimization",
    schematicType: "SCHEMATIC // SYNAPSE_NET",
    techStack: "NUMPY // TENSOR",
    statusReadout: "PROJECT DETAILS COMING SOON // BENCHMARKING",
    statusType: "primary",
    description: "Fundamental neural network layer implemented from mathematical first principles strictly using raw tensor manipulations and manual backpropagation derivation.",
    architectureDetails: [
      "Custom autograd-compatible matrix operations built in NumPy",
      "Custom activation functions (GELU, LeakyReLU, Softmax)",
      "AdamW and SGD with Nesterov momentum optimizers",
      "Visual gradient flow diagnostic monitor and weight distribution inspector"
    ],
    metrics: {
      "Pure NumPy Implementation": "100%",
      "Gradient Check": "Relative Error < 1e-7",
      "Vectorization": "SIMD Accelerated",
      "Layer Types": "Dense / Conv2D / Dropout"
    },
    githubSlug: "scalbore/from-scratch-neural-net"
  }
];

export const CREDENTIAL_ITEMS: CredentialItem[] = [
  {
    id: "cred-01",
    index: "01.",
    title: "Ignite India 5.0 — Wadhwani Foundation",
    badge: "42 HOURS",
    description: "Certificate of Content Completion | Ideation, Business Modeling, Financial Structuring & Opportunity Mapping",
    completedDate: "DEC 2025",
    status: "ISSUED",
    hours: "42 Hours",
    verificationHash: "0x8F92A1...WADHWANI_IGNITE5_CONTENT",
    issuer: "Wadhwani Foundation"
  },
  {
    id: "cred-02",
    index: "02.",
    title: "Ignite India 5.0 — Wadhwani Foundation",
    badge: "42 HOURS",
    description: "Certificate of Program Completion | Hands-on Entrepreneurial Training, Go-to-Market Feasibility & Practice Venture",
    completedDate: "JAN 2026",
    status: "ISSUED",
    hours: "42 Hours",
    verificationHash: "0x3C41B7...WADHWANI_IGNITE5_PROGRAM",
    issuer: "Wadhwani Foundation"
  },
  {
    id: "cred-03",
    index: "03.",
    title: "Python (Matplotlib) Specialized Course",
    badge: "SPECIALIZED",
    description: "Data Visualization & Computational Graphic Renderings | Multi-figure subplots, statistical charts & aesthetics",
    completedDate: "CURRICULUM FINISHED",
    status: "CERTIFICATE PENDING",
    verificationHash: "0xpending...MATPLOTLIB_DATA_VIZ_ACAD",
    issuer: "Specialized Coursework Division"
  }
];

export const IDENTITY_JSON = {
  engineer: "Tavish Sharma",
  handle: "scalbore",
  affiliation: "REVA University, Bangalore",
  status: "Undergraduate (3rd Sem)",
  metrics: {
    cgpa: 8.6,
    focus_areas: ["AI/ML Pipelines", "Full-Stack Development", "DSA"]
  },
  repositories: "Actively syncing computational builds & exploratory notebooks"
};
