import {
  Career,
  Opportunity,
  CareerRoadmap,
  Mentor,
  StudentProfile,
  AppNotification
} from '../types';

import heroImg from '../assets/images/hero_career_students_1790655857407.jpg';
import sarahChenImg from '../assets/images/mentor_sarah_chen_1790655872904.jpg';
import marcusVanceImg from '../assets/images/mentor_marcus_vance_1790655885891.jpg';
import priyaSharmaImg from '../assets/images/mentor_priya_sharma_1790655898544.jpg';

export const HERO_IMAGE = heroImg;

export const CAREERS: Career[] = [
  {
    id: 'full-stack-dev',
    title: 'Full-Stack Software Engineer',
    category: 'Technology',
    icon: 'Code2',
    tagline: 'Architect and build end-to-end web & cloud applications.',
    description:
      'Full-Stack Engineers build scalable frontend user experiences and reliable backend APIs, databases, and microservices powering modern platforms.',
    avgSalaryEntry: '$92,000 – $125,000 / yr',
    growthRate: '+25% projected growth (2024–2034)',
    requiredSkills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'REST & GraphQL APIs', 'Git'],
    popularRoles: ['Frontend Developer', 'Backend Engineer', 'Full-Stack Developer', 'Software Engineer I'],
    roadmapId: 'roadmap-full-stack',
    dayInLife:
      'Collaborate in daily standups, review code with peers, build new responsive UI components, write database migrations, and deploy cloud services.',
    educationRequirement: 'B.S. in Computer Science, Software Engineering, or equivalent portfolio & experience',
    topHiringCompanies: ['Stripe', 'Google', 'Meta', 'Amazon', 'Vercel']
  },
  {
    id: 'data-scientist-ai',
    title: 'Data Scientist & AI Specialist',
    category: 'Data & AI',
    icon: 'BrainCircuit',
    tagline: 'Turn raw data into predictive intelligence and production AI.',
    description:
      'Data Scientists and AI Specialists develop machine learning algorithms, statistical models, and generative AI pipelines to automate decisions and extract insights.',
    avgSalaryEntry: '$98,000 – $135,000 / yr',
    growthRate: '+35% projected growth (high demand)',
    requiredSkills: ['Python', 'SQL', 'PyTorch / TensorFlow', 'Pandas', 'Scikit-Learn', 'Statistics', 'Model Evaluation'],
    popularRoles: ['Data Scientist', 'Machine Learning Engineer', 'AI Research Assistant', 'Data Analyst'],
    roadmapId: 'roadmap-data-science',
    dayInLife:
      'Clean complex datasets, perform exploratory data analysis, train and fine-tune models, validate accuracy against benchmarks, and build inference APIs.',
    educationRequirement: 'B.S. / M.S. in Data Science, Statistics, Mathematics, or Computer Science',
    topHiringCompanies: ['OpenAI', 'Scale AI', 'Microsoft', 'Databricks', 'NVIDIA']
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX & Product Designer',
    category: 'Design & Creative',
    icon: 'Palette',
    tagline: 'Design human-centered, delightful, and intuitive digital interfaces.',
    description:
      'Product Designers conduct user research, synthesize design systems, craft interactive prototypes, and collaborate with engineers to bring products to life.',
    avgSalaryEntry: '$82,000 – $110,000 / yr',
    growthRate: '+18% steady market demand',
    requiredSkills: ['Figma', 'User Research', 'Design Systems', 'Prototyping', 'Wireframing', 'Information Architecture', 'Usability Testing'],
    popularRoles: ['Product Designer', 'UI/UX Designer', 'Interaction Designer', 'Visual Designer'],
    roadmapId: 'roadmap-ui-ux',
    dayInLife:
      'Conduct 1:1 user interviews, create wireframes and high-fidelity mockups in Figma, iterate on accessibility standards, and hand off specs to engineers.',
    educationRequirement: 'B.A. / B.S. in HCI, Interactive Design, Graphic Design, or strong design portfolio',
    topHiringCompanies: ['Figma', 'Apple', 'Airbnb', 'Notion', 'Spotify']
  },
  {
    id: 'product-manager',
    title: 'Associate Product Manager (APM)',
    category: 'Business & Product',
    icon: 'Compass',
    tagline: 'Define product strategy, lead cross-functional teams, and ship value.',
    description:
      'Product Managers sit at the intersection of business, technology, and user experience, defining roadmaps and prioritizing features that solve customer pain points.',
    avgSalaryEntry: '$95,000 – $130,000 / yr',
    growthRate: '+20% competitive entry tier',
    requiredSkills: ['Product Strategy', 'Data Analytics', 'Agile / Scrum', 'User Empathy', 'PRD Writing', 'A/B Testing', 'Stakeholder Management'],
    popularRoles: ['Associate Product Manager', 'Product Analyst', 'Technical PM Intern', 'Junior PM'],
    roadmapId: 'roadmap-product-management',
    dayInLife:
      'Analyze user engagement funnels, write product requirement specs, lead sprint planning with engineering and design, and evaluate feature launch KPIs.',
    educationRequirement: 'B.S. or B.A. in Engineering, Business, Cognitive Science, or related multidisciplinary fields',
    topHiringCompanies: ['Google APM', 'Uber', 'Salesforce', 'LinkedIn', 'Atlassian']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Engineer',
    category: 'Cybersecurity & Cloud',
    icon: 'Cloud',
    tagline: 'Automate infrastructure, CI/CD pipelines, and high availability systems.',
    description:
      'DevOps Engineers bridge software development and operations by automating deployment pipelines, configuring container orchestration, and monitoring system reliability.',
    avgSalaryEntry: '$94,000 – $128,000 / yr',
    growthRate: '+28% fast-growing industry',
    requiredSkills: ['Linux', 'Docker', 'Kubernetes', 'AWS / GCP / Azure', 'Terraform', 'CI/CD (GitHub Actions)', 'Prometheus / Grafana'],
    popularRoles: ['Cloud Engineer', 'DevOps Specialist', 'Site Reliability Engineer (SRE)', 'Infrastructure Analyst'],
    roadmapId: 'roadmap-cloud-devops',
    dayInLife:
      'Deploy immutable infrastructure code, configure secure Kubernetes clusters, monitor system alerts, and streamline deployment times for developer teams.',
    educationRequirement: 'B.S. in Computer Science, Information Technology, or relevant cloud certifications',
    topHiringCompanies: ['Datadog', 'Amazon Web Services', 'Cloudflare', 'HashiCorp', 'Red Hat']
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst & SOC Specialist',
    category: 'Cybersecurity & Cloud',
    icon: 'ShieldCheck',
    tagline: 'Defend organizations against cyber threats, vulnerabilities, and intrusions.',
    description:
      'Cybersecurity Analysts monitor digital networks, detect security breaches, conduct vulnerability assessments, and implement zero-trust defense architectures.',
    avgSalaryEntry: '$88,000 – $118,000 / yr',
    growthRate: '+32% critical talent shortage',
    requiredSkills: ['Network Security', 'SIEM Tools (Splunk)', 'Penetration Testing basics', 'Wireshark', 'Python / Bash', 'Security Compliance'],
    popularRoles: ['SOC Analyst I', 'Information Security Associate', 'Cyber Threat Hunter', 'Security Consultant'],
    roadmapId: 'roadmap-cybersecurity',
    dayInLife:
      'Review real-time firewall and endpoint logs, investigate anomalous intrusion alerts, patch system vulnerabilities, and conduct phishing resilience drills.',
    educationRequirement: 'B.S. in Cybersecurity, Computer Networks, or CompTIA Security+ / CEH certifications',
    topHiringCompanies: ['CrowdStrike', 'Palo Alto Networks', 'Mandiant', 'Cisco', 'Deloitte Cyber']
  },
  {
    id: 'fintech-quant',
    title: 'Financial Tech & Quantitative Analyst',
    category: 'Finance & Fintech',
    icon: 'TrendingUp',
    tagline: 'Engineer high-frequency algorithms and next-generation fintech systems.',
    description:
      'Fintech and Quantitative Analysts apply mathematical modeling, financial domain knowledge, and high-performance programming to build financial products.',
    avgSalaryEntry: '$105,000 – $145,000 / yr',
    growthRate: '+21% high compensation sector',
    requiredSkills: ['Python / C++', 'Financial Modeling', 'SQL', 'Time-Series Analysis', 'Risk Management', 'Algorithmic Trading basics'],
    popularRoles: ['Quantitative Research Analyst', 'Fintech Software Developer', 'Risk Analyst', 'Trading Technology Intern'],
    roadmapId: 'roadmap-fintech',
    dayInLife:
      'Backtest statistical trading strategies against market order books, build low-latency ledger transaction microservices, and optimize liquidity models.',
    educationRequirement: 'B.S. in Financial Engineering, Mathematics, Physics, Economics, or Computer Science',
    topHiringCompanies: ['Bloomberg', 'Two Sigma', 'Citadel', 'Stripe Financial', 'Jane Street']
  },
  {
    id: 'mobile-engineer',
    title: 'Mobile Application Engineer',
    category: 'Technology',
    icon: 'Smartphone',
    tagline: 'Craft seamless native and cross-platform mobile experiences.',
    description:
      'Mobile Engineers build responsive, offline-first mobile applications for billions of smartphone users worldwide using modern frameworks like Flutter, React Native, and Swift.',
    avgSalaryEntry: '$90,000 – $120,000 / yr',
    growthRate: '+23% mobile-first economy',
    requiredSkills: ['React Native / Flutter', 'Swift / Kotlin', 'State Management', 'Mobile UI Design', 'REST APIs', 'App Store Deployment'],
    popularRoles: ['iOS Developer', 'Android Developer', 'React Native Engineer', 'Mobile Software Associate'],
    roadmapId: 'roadmap-mobile',
    dayInLife:
      'Optimize mobile render cycles for smooth 60fps animations, integrate native camera and push notification APIs, and test across device screen sizes.',
    educationRequirement: 'B.S. in Computer Science or published mobile apps on App Store / Google Play',
    topHiringCompanies: ['Uber', 'Duolingo', 'Snap', 'Spotify', 'Robinhood']
  }
];

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-stripe-frontend',
    title: 'Frontend Engineering Intern — Summer 2027',
    company: 'Stripe',
    companyInitials: 'ST',
    companyLogoBg: 'bg-indigo-600',
    location: 'San Francisco, CA',
    workModel: 'Remote',
    type: 'Internship',
    stipendOrSalary: '$58 / hour + housing stipend',
    duration: '12 Weeks (May – August)',
    deadline: 'Oct 30, 2026',
    skillsRequired: ['React', 'TypeScript', 'CSS / Tailwind', 'Git'],
    category: 'Technology',
    description:
      'Join the Stripe Dashboard team building financial infrastructure for millions of businesses worldwide. You will craft high-performance UI components, streamline checkout analytics, and participate in design system governance.',
    responsibilities: [
      'Build reusable, accessible React components within Stripe internal component library.',
      'Collaborate with product designers and backend engineers to integrate REST APIs.',
      'Ship clean, well-tested code through pull requests and CI pipelines.',
      'Present your summer project to company engineering leadership.'
    ],
    perks: ['1:1 Senior Mentor Pairing', 'Remote Office Setup Stipend ($1,000)', 'Executive Speaker Series', 'Return Offer Consideration'],
    applicantsCount: 142,
    postedDate: '3 days ago'
  },
  {
    id: 'opp-google-apm',
    title: 'Associate Product Manager (APM) Intern',
    company: 'Google',
    companyInitials: 'GO',
    companyLogoBg: 'bg-blue-600',
    location: 'Mountain View, CA',
    workModel: 'Hybrid',
    type: 'Internship',
    stipendOrSalary: '$62 / hour + corporate housing',
    duration: '12 Weeks (Summer)',
    deadline: 'Nov 15, 2026',
    skillsRequired: ['Product Strategy', 'Data Analytics', 'User Research', 'Agile'],
    category: 'Business & Product',
    description:
      'Google legendary APM internship puts undergraduate students at the helm of real product initiatives. Define user journeys, craft product PRDs, and partner with AI engineers.',
    responsibilities: [
      'Analyze search & workspace telemetry to uncover user pain points.',
      'Draft comprehensive Product Requirement Documents (PRDs) for new features.',
      'Lead cross-functional sprints across engineering, UX design, and legal teams.',
      'Present product launch readiness reviews to senior directors.'
    ],
    perks: ['Global APM Community', 'On-campus Gourmet Dining', 'Mentorship from Staff PMs', 'High Full-Time Conversion'],
    applicantsCount: 310,
    postedDate: '1 day ago'
  },
  {
    id: 'opp-scale-ai-ml',
    title: 'Machine Learning Engineering Intern',
    company: 'Scale AI',
    companyInitials: 'SC',
    companyLogoBg: 'bg-purple-600',
    location: 'San Francisco, CA',
    workModel: 'On-site',
    type: 'Internship',
    stipendOrSalary: '$65 / hour + $2,500/mo housing',
    duration: '14 Weeks',
    deadline: 'Nov 05, 2026',
    skillsRequired: ['Python', 'PyTorch', 'Model Evaluation', 'Transformers', 'Docker'],
    category: 'Data & AI',
    description:
      'Scale is accelerating the development of frontier generative AI applications. Work with foundational LLMs, reinforcement learning from human feedback (RLHF), and high-throughput inference infrastructure.',
    responsibilities: [
      'Benchmark open-source foundational models on specialized evaluation datasets.',
      'Build automated evaluation pipelines for synthetic data generation.',
      'Optimize GPU inference batch sizes using vLLM and TensorRT.',
      'Author technical research reports on alignment accuracy.'
    ],
    perks: ['Daily Catered Meals', 'Access to High-Performance GPU Clusters', 'Weekly AI Seminar Papers', 'Commuter Reimbursement'],
    applicantsCount: 228,
    postedDate: '2 days ago'
  },
  {
    id: 'opp-figma-design',
    title: 'Product Design Intern — Systems & Tools',
    company: 'Figma',
    companyInitials: 'FG',
    companyLogoBg: 'bg-emerald-600',
    location: 'New York, NY',
    workModel: 'Hybrid',
    type: 'Internship',
    stipendOrSalary: '$52 / hour + housing allowance',
    duration: '12 Weeks',
    deadline: 'Nov 20, 2026',
    skillsRequired: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
    category: 'Design & Creative',
    description:
      'Design the very tools used by designers across the globe. You will iterate on collaborative canvas interactions, keyboard shortcut workflows, and modular design components.',
    responsibilities: [
      'Design end-to-end user flows for canvas productivity tools.',
      'Conduct interactive usability testing with community creators.',
      'Prototype micro-interactions and animations in Figma.',
      'Document design specifications for WebGL and browser engine teams.'
    ],
    perks: ['Figma Swag & Hardware Gear', 'Dedicated Design Lead Mentor', 'Studio Workshops', 'Flexible Working Hours'],
    applicantsCount: 189,
    postedDate: '4 days ago'
  },
  {
    id: 'opp-datadog-devops',
    title: 'Cloud Infrastructure & SRE Intern',
    company: 'Datadog',
    companyInitials: 'DD',
    companyLogoBg: 'bg-violet-600',
    location: 'Boston, MA',
    workModel: 'Hybrid',
    type: 'Internship',
    stipendOrSalary: '$48 / hour',
    duration: '12 Weeks',
    deadline: 'Dec 01, 2026',
    skillsRequired: ['Linux', 'Kubernetes', 'Docker', 'Go / Python', 'Terraform'],
    category: 'Cybersecurity & Cloud',
    description:
      'Help power observability for thousands of enterprises. You will build automation for distributed Kubernetes clusters and optimize metric telemetry processing pipelines.',
    responsibilities: [
      'Develop automated Terraform modules for multi-region cloud clusters.',
      'Assist in configuring canary deployment pipelines via GitHub Actions.',
      'Analyze latency metrics to resolve cloud container cold-starts.',
      'Participate in simulated incident response chaos engineering game-days.'
    ],
    perks: ['Certification Exam Vouchers', 'Tech Equipment Allowance', 'Hybrid Wellness Subsidy', 'Full-time Pipeline'],
    applicantsCount: 96,
    postedDate: '5 days ago'
  },
  {
    id: 'opp-crowdstrike-cyber',
    title: 'Cyber Threat Intelligence & SOC Intern',
    company: 'CrowdStrike',
    companyInitials: 'CS',
    companyLogoBg: 'bg-rose-600',
    location: 'Remote',
    workModel: 'Remote',
    type: 'Internship',
    stipendOrSalary: '$46 / hour',
    duration: '10 Weeks',
    deadline: 'Nov 12, 2026',
    skillsRequired: ['Network Security', 'Python', 'SIEM / Splunk', 'Linux'],
    category: 'Cybersecurity & Cloud',
    description:
      'Fight adversaries on the digital frontline. Work with the Falcon platform to detect adversary tactics, extract indicators of compromise (IOCs), and write threat mitigation playbooks.',
    responsibilities: [
      'Triage real-time threat intelligence feeds and categorize attack vectors.',
      'Automate threat artifact extraction using Python scripts.',
      'Draft adversary behavior summaries mapped to the MITRE ATT&CK framework.',
      'Assist senior analysts during threat hunting engagements.'
    ],
    perks: ['Remote Work Stipend', 'Cybersecurity Certification Sponsorship', '1-on-1 Threat Hunter Mentorship', 'Flexible Schedule'],
    applicantsCount: 84,
    postedDate: '6 days ago'
  },
  {
    id: 'opp-bloomberg-quant',
    title: 'Financial Software Engineer (New Grad / Co-op)',
    company: 'Bloomberg LP',
    companyInitials: 'BL',
    companyLogoBg: 'bg-amber-600',
    location: 'New York, NY',
    workModel: 'On-site',
    type: 'Full-time',
    stipendOrSalary: '$140,000 – $165,000 / year base',
    duration: 'Full-Time Position',
    deadline: 'Rolling Applications',
    skillsRequired: ['C++', 'Python', 'Distributed Systems', 'SQL', 'Financial Data'],
    category: 'Finance & Fintech',
    description:
      'Build ultra-low latency market data systems that power Bloomberg Terminal worldwide. Develop resilient C++ microservices processing millions of market updates per second.',
    responsibilities: [
      'Architect real-time streaming engines for global bond and equity feeds.',
      'Optimize multi-threaded C++ algorithmic code for sub-millisecond execution.',
      'Design reliable relational schemas and caching layers.',
      'Collaborate with financial market specialists to validate data integrity.'
    ],
    perks: ['Comprehensive Relocation Package', 'Comprehensive Health & Dental', 'Retirement 401(k) Match', 'Continuous Training Academy'],
    applicantsCount: 340,
    postedDate: '1 week ago'
  },
  {
    id: 'opp-notion-fullstack',
    title: 'Full-Stack Software Engineering Co-op',
    company: 'Notion',
    companyInitials: 'NT',
    companyLogoBg: 'bg-zinc-800',
    location: 'San Francisco, CA',
    workModel: 'Hybrid',
    type: 'Co-op',
    stipendOrSalary: '$55 / hour',
    duration: '6 Months (Jan – June 2027)',
    deadline: 'Nov 30, 2026',
    skillsRequired: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    category: 'Technology',
    description:
      'Help make Notion faster, more expressive, and collaborative. Co-ops write production code that directly touches millions of active workspaces around the world.',
    responsibilities: [
      'Implement collaborative text editing and database block features.',
      'Optimize page loading times and reduce DOM re-rendering bottlenecks.',
      'Ship backend microservices supporting real-time WebSocket sync.',
      'Engage in design discussions with product managers and team designers.'
    ],
    perks: ['Housing Stipend', 'Catered Lunches & Dinners', 'Commuter Pass', 'Book & Learning Allowance'],
    applicantsCount: 165,
    postedDate: '3 days ago'
  },
  {
    id: 'opp-microsoft-data',
    title: 'Data Science & Analytics Intern',
    company: 'Microsoft',
    companyInitials: 'MS',
    companyLogoBg: 'bg-sky-600',
    location: 'Redmond, WA',
    workModel: 'Hybrid',
    type: 'Internship',
    stipendOrSalary: '$56 / hour + housing',
    duration: '12 Weeks',
    deadline: 'Dec 10, 2026',
    skillsRequired: ['Python', 'SQL', 'Power BI / Tableau', 'Machine Learning'],
    category: 'Data & AI',
    description:
      'Join Microsoft Azure or Office 365 Data Science teams. Transform massive product usage telemetry into actionable customer retention and performance optimizations.',
    responsibilities: [
      'Design and evaluate A/B experiments for new feature deployments.',
      'Build statistical predictive models to forecast cloud compute consumption.',
      'Construct automated executive dashboards in Power BI and Python notebooks.',
      'Present analytical findings to senior business unit leaders.'
    ],
    perks: ['Summer Intern Hackathon', 'Housing & Transportation Covered', 'Health Club Membership', 'Full-time APM / SWE Pipeline'],
    applicantsCount: 275,
    postedDate: '4 days ago'
  },
  {
    id: 'opp-spotify-design',
    title: 'Design Systems & UI Engineering Intern',
    company: 'Spotify',
    companyInitials: 'SP',
    companyLogoBg: 'bg-emerald-700',
    location: 'New York, NY',
    workModel: 'Hybrid',
    type: 'Internship',
    stipendOrSalary: '$50 / hour',
    duration: '10 Weeks',
    deadline: 'Nov 25, 2026',
    skillsRequired: ['Figma', 'Design Systems', 'CSS / Motion', 'Accessibility'],
    category: 'Design & Creative',
    description:
      'Shape the sound and visual rhythm of Spotify. Contribute to our Encore design system, ensuring consistent accessibility, audio visualization, and micro-interactions across platforms.',
    responsibilities: [
      'Design accessible UI components adhering to WCAG AAA standards.',
      'Build interactive Figma prototypes demonstrating fluid transitions.',
      'Partner with engineers to verify token synchronization in code.',
      'Conduct inclusive design research with diverse listening cohorts.'
    ],
    perks: ['Free Spotify Premium for Life', 'Artist & Creator Studio Visits', 'Design Lab Days', 'Travel Reimbursement'],
    applicantsCount: 195,
    postedDate: '5 days ago'
  },
  {
    id: 'opp-razorpay-swe',
    title: 'Software Development Engineer I (Campus 2027)',
    company: 'Razorpay',
    companyInitials: 'RZ',
    companyLogoBg: 'bg-blue-700',
    location: 'Bengaluru, India',
    workModel: 'Hybrid',
    type: 'Full-time',
    stipendOrSalary: '₹22,00,000 – ₹28,00,000 / year total CTC',
    duration: 'Full-Time Position',
    deadline: 'Dec 15, 2026',
    skillsRequired: ['Golang / Java', 'PostgreSQL', 'Docker', 'Redis', 'Kafka'],
    category: 'Technology',
    description:
      'Power the financial infrastructure of digital businesses across South Asia. Build ultra-reliable payment gateways processing 10,000+ transactions per second.',
    responsibilities: [
      'Build scalable backend microservices handling high-throughput payments.',
      'Integrate banking APIs and implement automated failure fallback queues.',
      'Write comprehensive unit and integration test suites.',
      'Maintain 99.99% system availability during major festival shopping events.'
    ],
    perks: ['Health Insurance Coverage', 'Learning & Certification Budget', 'Flexible Work Setup', 'Annual Company Retreat'],
    applicantsCount: 420,
    postedDate: '1 week ago'
  },
  {
    id: 'opp-airbnb-mobile',
    title: 'Mobile Engineering Intern (iOS / Android)',
    company: 'Airbnb',
    companyInitials: 'AB',
    companyLogoBg: 'bg-red-500',
    location: 'San Francisco, CA',
    workModel: 'Remote',
    type: 'Internship',
    stipendOrSalary: '$57 / hour + $2,000 travel credit',
    duration: '12 Weeks',
    deadline: 'Nov 18, 2026',
    skillsRequired: ['Swift / Kotlin', 'Mobile UI', 'Git', 'REST APIs'],
    category: 'Technology',
    description:
      'Join Airbnb mobile engineers crafting experiences that help millions of guests explore the world. Build fluid guest search interactions, host onboarding, and offline booking support.',
    responsibilities: [
      'Develop pixel-perfect native screens using Swift / SwiftUI or Kotlin / Compose.',
      'Optimize image caching and offline data synchronization.',
      'Participate in code reviews with senior mobile architects.',
      'Ship improvements to the Airbnb app used by over 100M active travellers.'
    ],
    perks: ['$2,000 Airbnb Travel Credit', 'Remote Home Office Budget', 'Virtual Tech Talks', 'Mentorship Program'],
    applicantsCount: 215,
    postedDate: '2 days ago'
  }
];

export const ROADMAPS: Record<string, CareerRoadmap> = {
  'roadmap-full-stack': {
    id: 'roadmap-full-stack',
    careerId: 'full-stack-dev',
    careerTitle: 'Full-Stack Software Engineer',
    category: 'Technology',
    overview:
      'A structured, step-by-step roadmap to transition from foundational programming to building full-stack, cloud-deployed web applications ready for top tech internships.',
    phases: [
      {
        id: 'fs-phase-1',
        phaseNumber: 1,
        level: 'Beginner',
        title: 'Phase 1: Web Foundations & Modern JavaScript',
        estimatedWeeks: '4–6 Weeks',
        description:
          'Master the bedrock languages of the web, understand how browsers render content, and gain fluency in modern asynchronous TypeScript.',
        concepts: [
          {
            id: 'fs-c1',
            title: 'HTML5 Semantic Structure & Modern CSS Layouts',
            description: 'Semantic tags, Flexbox, CSS Grid, mobile-first responsive design, and CSS variables.',
            timeEstimate: '1.5 Weeks'
          },
          {
            id: 'fs-c2',
            title: 'JavaScript ES6+ & Asynchronous Programming',
            description: 'Destructuring, array methods, Promises, async/await, closures, and the Event Loop.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'fs-c3',
            title: 'Version Control with Git & GitHub Workflow',
            description: 'Branching, committing, rebasing, pull requests, resolving merge conflicts, and code reviews.',
            timeEstimate: '1 Week'
          },
          {
            id: 'fs-c4',
            title: 'TypeScript Essentials & Type Safety',
            description: 'Interfaces, types, generics, type narrowing, and compiler setup with Vite.',
            timeEstimate: '1.5 Weeks'
          }
        ],
        recommendedSkills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript', 'Git & GitHub'],
        courses: [
          {
            title: 'CS50x: Introduction to Computer Science',
            provider: 'Harvard / edX',
            duration: '10 Weeks',
            isFree: true,
            level: 'Beginner',
            linkText: 'Free on edX'
          },
          {
            title: 'Modern JavaScript from the Beginning',
            provider: 'freeCodeCamp',
            duration: '20 Hours',
            isFree: true,
            level: 'Beginner',
            linkText: 'Free YouTube Series'
          }
        ],
        projects: [
          {
            title: 'Interactive Student Budget & Expense Tracker',
            description: 'A responsive web application with local storage persistence, category breakdowns, and dynamic filtering.',
            techStack: ['HTML5', 'CSS Grid', 'TypeScript', 'LocalStorage'],
            difficulty: 'Beginner'
          },
          {
            title: 'Real-Time GitHub Profile Explorer',
            description: 'Fetches public GitHub repositories via REST API, calculates repository stats, and renders language badges.',
            techStack: ['TypeScript', 'Tailwind CSS', 'Fetch API'],
            difficulty: 'Beginner'
          }
        ]
      },
      {
        id: 'fs-phase-2',
        phaseNumber: 2,
        level: 'Intermediate',
        title: 'Phase 2: Frontend Mastery & Backend API Architecture',
        estimatedWeeks: '6–8 Weeks',
        description:
          'Deep dive into component-driven architecture with React, state management, and build robust RESTful backend servers with Node.js and SQL.',
        concepts: [
          {
            id: 'fs-c5',
            title: 'React Fundamentals: Hooks, Props, and State',
            description: 'useState, useEffect, useMemo, custom hooks, and component lifecycle best practices.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'fs-c6',
            title: 'Node.js & Express API Development',
            description: 'Routing, middleware, request validation, JWT authentication, and error handling.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'fs-c7',
            title: 'Relational Database Design with PostgreSQL & Prisma',
            description: 'Entity relationships (1:1, 1:N, N:M), foreign keys, indexes, and schema migrations.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'fs-c8',
            title: 'Client-Side State & Data Fetching',
            description: 'React Query / TanStack Query, optimistic UI updates, and caching patterns.',
            timeEstimate: '1.5 Weeks'
          }
        ],
        recommendedSkills: ['React 19', 'Tailwind CSS', 'Node.js / Express', 'PostgreSQL', 'Prisma ORM'],
        courses: [
          {
            title: 'Full Stack Open: Deep Dive Into Modern Web',
            provider: 'University of Helsinki',
            duration: 'Self-paced',
            isFree: true,
            level: 'Intermediate',
            linkText: 'Open Source Curriculum'
          },
          {
            title: 'PostgreSQL Tutorial for Beginners',
            provider: 'PostgreSQL.org / Coursera',
            duration: '15 Hours',
            isFree: true,
            level: 'Intermediate',
            linkText: 'Community Docs & Labs'
          }
        ],
        projects: [
          {
            title: 'Campus Collaboration & Study Group Platform',
            description: 'A full-stack web app where students create study groups, schedule sessions, and share course notes.',
            techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
            difficulty: 'Intermediate'
          },
          {
            title: 'TaskFlow: Collaborative Kanban Board',
            description: 'Real-time drag-and-drop task board with user authentication, activity audit trails, and tag filters.',
            techStack: ['React', 'Tailwind', 'Express', 'JWT Auth'],
            difficulty: 'Intermediate'
          }
        ]
      },
      {
        id: 'fs-phase-3',
        phaseNumber: 3,
        level: 'Advanced',
        title: 'Phase 3: Production Engineering, Docker & Cloud Deployment',
        estimatedWeeks: '6–8 Weeks',
        description:
          'Level up to senior-caliber practices: containerization, CI/CD automated testing, cloud hosting, and system design fundamentals for interviews.',
        concepts: [
          {
            id: 'fs-c9',
            title: 'Containerization with Docker & Multi-Stage Builds',
            description: 'Writing Dockerfiles, Docker Compose for local development, and optimizing image size.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'fs-c10',
            title: 'CI/CD Pipelines & Automated Testing',
            description: 'GitHub Actions, automated linting, unit tests with Vitest, and end-to-end testing with Playwright.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'fs-c11',
            title: 'Cloud Deployment & Serverless Platforms',
            description: 'Deploying services on Vercel, Render, AWS ECS / Cloud Run, and setting up custom domains.',
            timeEstimate: '1.5 Weeks'
          },
          {
            id: 'fs-c12',
            title: 'System Design & Scalability Principles',
            description: 'Caching with Redis, load balancers, database sharding, and rate limiting.',
            timeEstimate: '2 Weeks'
          }
        ],
        recommendedSkills: ['Docker', 'GitHub Actions', 'AWS / Cloud Run', 'Redis', 'Vitest', 'System Design'],
        courses: [
          {
            title: 'Docker & Kubernetes: The Practical Guide',
            provider: 'Udemy / Academind',
            duration: '22 Hours',
            isFree: false,
            level: 'Advanced',
            linkText: 'Interactive Video Labs'
          },
          {
            title: 'System Design Primer',
            provider: 'Donne Martin / GitHub',
            duration: 'Comprehensive Guide',
            isFree: true,
            level: 'Advanced',
            linkText: 'Open Source GitHub Repo'
          }
        ],
        projects: [
          {
            title: 'Cloud-Deployed Microservices URL Shortener & Analytics',
            description: 'Production system capable of handling 5,000 req/sec with Redis caching, rate limiting, and click telemetry.',
            techStack: ['Node.js', 'Redis', 'PostgreSQL', 'Docker', 'GitHub Actions'],
            difficulty: 'Advanced'
          },
          {
            title: 'AI Resume Scanner & Feedback SaaS',
            description: 'Full-stack SaaS that parses PDF resumes, computes keyword match scores, and provides structured feedback.',
            techStack: ['React', 'TypeScript', 'Express', 'Docker', 'Stripe Billing'],
            difficulty: 'Advanced'
          }
        ]
      }
    ]
  },
  'roadmap-data-science': {
    id: 'roadmap-data-science',
    careerId: 'data-scientist-ai',
    careerTitle: 'Data Scientist & Machine Learning Specialist',
    category: 'Data & AI',
    overview:
      'Master data manipulation, statistical modeling, machine learning algorithms, and deep learning architectures to land top AI and data science internships.',
    phases: [
      {
        id: 'ds-phase-1',
        phaseNumber: 1,
        level: 'Beginner',
        title: 'Phase 1: Python Programming, Math & Exploratory Data Analysis',
        estimatedWeeks: '4–6 Weeks',
        description: 'Build mathematical foundations in linear algebra, calculus, probability, and master the Python scientific computing stack.',
        concepts: [
          {
            id: 'ds-c1',
            title: 'Python for Data Science (NumPy & Vectorization)',
            description: 'Array operations, broadcasting, memory efficiency, and mathematical computations.',
            timeEstimate: '1.5 Weeks'
          },
          {
            id: 'ds-c2',
            title: 'Data Wrangling with Pandas',
            description: 'DataFrames, merging, groupby aggregations, handling missing data, and time-series indexing.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'ds-c3',
            title: 'Data Visualization & Storytelling',
            description: 'Creating publication-ready charts using Matplotlib, Seaborn, and interactive Plotly figures.',
            timeEstimate: '1 Week'
          },
          {
            id: 'ds-c4',
            title: 'Essential Statistics & Probability Theory',
            description: 'Descriptive stats, distributions, hypothesis testing (p-values, t-tests), and Bayes theorem.',
            timeEstimate: '1.5 Weeks'
          }
        ],
        recommendedSkills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Applied Statistics', 'SQL'],
        courses: [
          {
            title: 'Mathematics for Machine Learning Specialization',
            provider: 'Imperial College London / Coursera',
            duration: '6 Weeks',
            isFree: true,
            level: 'Beginner',
            linkText: 'Audit for Free'
          },
          {
            title: 'Python Data Science Handbook',
            provider: 'Jake VanderPlas / O’Reilly',
            duration: 'Self-paced',
            isFree: true,
            level: 'Beginner',
            linkText: 'Free Online Book'
          }
        ],
        projects: [
          {
            title: 'College Admissions & Placement Trends EDA',
            description: 'Analyze multi-year university graduation datasets, identify salary predictors, and build an interactive dashboard.',
            techStack: ['Python', 'Pandas', 'Seaborn', 'Jupyter Notebook'],
            difficulty: 'Beginner'
          }
        ]
      },
      {
        id: 'ds-phase-2',
        phaseNumber: 2,
        level: 'Intermediate',
        title: 'Phase 2: Classical Machine Learning & Feature Engineering',
        estimatedWeeks: '6–8 Weeks',
        description: 'Implement supervised and unsupervised machine learning algorithms from scratch and master Scikit-Learn pipelines.',
        concepts: [
          {
            id: 'ds-c5',
            title: 'Supervised Learning: Regression & Classification',
            description: 'Linear/Logistic regression, Decision Trees, Random Forests, and Gradient Boosting (XGBoost).',
            timeEstimate: '2.5 Weeks'
          },
          {
            id: 'ds-c6',
            title: 'Unsupervised Learning & Clustering',
            description: 'K-Means clustering, Hierarchical clustering, and dimensionality reduction via PCA.',
            timeEstimate: '1.5 Weeks'
          },
          {
            id: 'ds-c7',
            title: 'Model Validation, Bias-Variance & Metrics',
            description: 'K-Fold cross-validation, ROC-AUC, Precision-Recall curves, F1 score, and hyperparameter tuning.',
            timeEstimate: '1.5 Weeks'
          },
          {
            id: 'ds-c8',
            title: 'Feature Engineering & Data Preprocessing Pipelines',
            description: 'Encoding categorical variables, scaling, feature selection, and handling class imbalances (SMOTE).',
            timeEstimate: '1.5 Weeks'
          }
        ],
        recommendedSkills: ['Scikit-Learn', 'XGBoost', 'LightGBM', 'PCA', 'Model Evaluation'],
        courses: [
          {
            title: 'Machine Learning Specialization',
            provider: 'Andrew Ng / DeepLearning.AI',
            duration: '8 Weeks',
            isFree: true,
            level: 'Intermediate',
            linkText: 'Audit on Coursera'
          }
        ],
        projects: [
          {
            title: 'Student Internship Placement Predictor',
            description: 'Trained XGBoost model that forecasts student job placement probability based on GPA, project count, and internships.',
            techStack: ['Python', 'Scikit-Learn', 'XGBoost', 'Streamlit'],
            difficulty: 'Intermediate'
          }
        ]
      },
      {
        id: 'ds-phase-3',
        phaseNumber: 3,
        level: 'Advanced',
        title: 'Phase 3: Deep Learning, NLP & Generative AI Systems',
        estimatedWeeks: '8–10 Weeks',
        description: 'Explore neural networks with PyTorch, transformers, embeddings, and deployment of ML models as production APIs.',
        concepts: [
          {
            id: 'ds-c9',
            title: 'Deep Learning with PyTorch',
            description: 'Tensors, autograd, building custom neural network layers, loss functions, and optimizers (Adam).',
            timeEstimate: '2.5 Weeks'
          },
          {
            id: 'ds-c10',
            title: 'Natural Language Processing & Transformer Architecture',
            description: 'Self-attention mechanism, BERT, tokenization, sentence transformers, and vector embeddings.',
            timeEstimate: '2.5 Weeks'
          },
          {
            id: 'ds-c11',
            title: 'Retrieval-Augmented Generation (RAG) & LLM Fine-Tuning',
            description: 'Vector databases (Pinecone / Chroma), semantic search, prompting strategies, and LoRA fine-tuning.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'ds-c12',
            title: 'MLOps: Serving Models with FastAPI & Docker',
            description: 'Building REST inference endpoints, model artifact versioning (MLflow), and monitoring drift.',
            timeEstimate: '2 Weeks'
          }
        ],
        recommendedSkills: ['PyTorch', 'Transformers (Hugging Face)', 'FastAPI', 'Vector Databases', 'MLOps'],
        courses: [
          {
            title: 'Practical Deep Learning for Coders',
            provider: 'Fast.ai',
            duration: 'Self-paced',
            isFree: true,
            level: 'Advanced',
            linkText: 'Free Fast.ai Course'
          }
        ],
        projects: [
          {
            title: 'Semantic College Course Recommender (RAG)',
            description: 'Vector search system using Hugging Face embeddings to match student career goals with college syllabi.',
            techStack: ['PyTorch', 'Hugging Face', 'FastAPI', 'ChromaDB', 'Docker'],
            difficulty: 'Advanced'
          }
        ]
      }
    ]
  },
  'roadmap-ui-ux': {
    id: 'roadmap-ui-ux',
    careerId: 'ui-ux-designer',
    careerTitle: 'UI/UX & Product Designer',
    category: 'Design & Creative',
    overview:
      'Learn user research methodologies, master Figma design systems, construct interactive prototypes, and assemble a world-class portfolio that catches recruiters attention.',
    phases: [
      {
        id: 'ux-phase-1',
        phaseNumber: 1,
        level: 'Beginner',
        title: 'Phase 1: Design Principles & Figma Mechanics',
        estimatedWeeks: '3–5 Weeks',
        description: 'Understand the foundations of visual hierarchy, typography, spatial geometry, and master essential Figma tooling.',
        concepts: [
          {
            id: 'ux-c1',
            title: 'Visual Hierarchy, Contrast & Typography Scales',
            description: 'Leading, kerning, type scales, measure, and creating visual focal points.',
            timeEstimate: '1 Week'
          },
          {
            id: 'ux-c2',
            title: 'Figma Fundamentals: Auto Layout & Constraints',
            description: 'Responsive frames, nested auto layouts, min/max dimensions, and layout grids.',
            timeEstimate: '1.5 Weeks'
          },
          {
            id: 'ux-c3',
            title: 'Color Theory & Accessible Palette Creation',
            description: '60-30-10 distribution, WCAG 2.1 AA/AAA contrast ratios, and semantic status colors.',
            timeEstimate: '1 Week'
          }
        ],
        recommendedSkills: ['Figma', 'Visual Hierarchy', 'Typography', 'Auto Layout', 'Color Theory'],
        courses: [
          {
            title: 'Google UX Design Professional Certificate',
            provider: 'Google / Coursera',
            duration: '3 Months',
            isFree: true,
            level: 'Beginner',
            linkText: 'Audit on Coursera'
          }
        ],
        projects: [
          {
            title: 'Redesign of University Course Registration Portal',
            description: 'Identify pain points in your college class enrollment system and craft an intuitive mobile-first redesign.',
            techStack: ['Figma', 'Auto Layout', 'Interactive Components'],
            difficulty: 'Beginner'
          }
        ]
      },
      {
        id: 'ux-phase-2',
        phaseNumber: 2,
        level: 'Intermediate',
        title: 'Phase 2: User Research, Wireframing & Design Systems',
        estimatedWeeks: '5–7 Weeks',
        description: 'Conduct real interviews, create journey maps, and build modular, tokenized design systems.',
        concepts: [
          {
            id: 'ux-c4',
            title: 'Qualitative & Quantitative User Research',
            description: 'Writing interview scripts, conducting 1:1 user testing, card sorting, and survey design.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'ux-c5',
            title: 'Information Architecture & Wireframing',
            description: 'Site maps, user flows, low-fidelity wireframes, and eliminating cognitive friction.',
            timeEstimate: '1.5 Weeks'
          },
          {
            id: 'ux-c6',
            title: 'Scalable Design Systems & Component Variants',
            description: 'Creating reusable buttons, inputs, modals with boolean/text properties and design tokens.',
            timeEstimate: '2 Weeks'
          }
        ],
        recommendedSkills: ['User Testing', 'Wireframing', 'Design Systems', 'Design Tokens'],
        courses: [
          {
            title: 'Design Systems with Figma',
            provider: 'Figma Education',
            duration: '8 Hours',
            isFree: true,
            level: 'Intermediate',
            linkText: 'Free Figma Tutorials'
          }
        ],
        projects: [
          {
            title: 'Campus Food Delivery & Dining Hall App Case Study',
            description: 'End-to-end case study including empathy maps, persona creation, wireframes, and design system documentation.',
            techStack: ['Figma', 'Miro', 'User Testing'],
            difficulty: 'Intermediate'
          }
        ]
      },
      {
        id: 'ux-phase-3',
        phaseNumber: 3,
        level: 'Advanced',
        title: 'Phase 3: High-Fidelity Prototyping & Portfolio Presentation',
        estimatedWeeks: '5–6 Weeks',
        description: 'Build realistic micro-interactions, prepare developer handoff specifications, and publish a compelling portfolio.',
        concepts: [
          {
            id: 'ux-c7',
            title: 'Advanced Interactive Prototyping in Figma',
            description: 'Variables, conditional logic, expressions, and smart animate transitions.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'ux-c8',
            title: 'Design Handoff & Engineer Collaboration',
            description: 'Documenting edge cases, responsive breakpoint specs, and design token sync.',
            timeEstimate: '1.5 Weeks'
          },
          {
            id: 'ux-c9',
            title: 'Portfolio Storytelling & Case Study Craft',
            description: 'Structuring case studies: Problem, constraints, research insights, iterations, and business impact.',
            timeEstimate: '2 Weeks'
          }
        ],
        recommendedSkills: ['Advanced Figma Prototyping', 'Variables', 'Design Handoff', 'Portfolio Storytelling'],
        courses: [
          {
            title: 'Refactoring UI',
            provider: 'Adam Wathan & Steve Schoger',
            duration: 'Self-paced',
            isFree: false,
            level: 'Advanced',
            linkText: 'Book & Video Tutorials'
          }
        ],
        projects: [
          {
            title: 'Fintech Mobile Banking App for Gen-Z',
            description: 'Complete high-fidelity interactive prototype with realistic smart animation transfers and savings goals.',
            techStack: ['Figma Variables', 'Smart Animate', 'WCAG Audits'],
            difficulty: 'Advanced'
          }
        ]
      }
    ]
  },
  'roadmap-cloud-devops': {
    id: 'roadmap-cloud-devops',
    careerId: 'cloud-devops',
    careerTitle: 'Cloud & DevOps Engineer',
    category: 'Cybersecurity & Cloud',
    overview:
      'Learn Linux systems administration, networking, Docker containerization, Kubernetes orchestration, Terraform Infrastructure as Code, and CI/CD automation.',
    phases: [
      {
        id: 'devops-p1',
        phaseNumber: 1,
        level: 'Beginner',
        title: 'Phase 1: Linux Administration, Bash & Networking Basics',
        estimatedWeeks: '4 Weeks',
        description: 'Master the command line, understand processes, storage, permissions, and fundamental TCP/IP networking.',
        concepts: [
          {
            id: 'devops-c1',
            title: 'Linux Fundamentals & Shell Scripting',
            description: 'File permissions, systemd service management, cron jobs, and writing Bash automation scripts.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'devops-c2',
            title: 'Computer Networking for DevOps',
            description: 'DNS resolution, HTTP/HTTPS, SSL/TLS certificates, reverse proxies, and subnets.',
            timeEstimate: '2 Weeks'
          }
        ],
        recommendedSkills: ['Linux CLI', 'Bash Scripting', 'SSH', 'DNS / Reverse Proxy', 'Git'],
        courses: [
          {
            title: 'Linux Journey',
            provider: 'LinuxJourney.com',
            duration: 'Self-paced',
            isFree: true,
            level: 'Beginner',
            linkText: 'Free Interactive Guide'
          }
        ],
        projects: [
          {
            title: 'Automated Multi-Site Nginx Web Server Deployment',
            description: 'Bash script configuring automated SSL cert generation with Let’s Encrypt and reverse proxy rules.',
            techStack: ['Linux', 'Bash', 'Nginx', 'Certbot'],
            difficulty: 'Beginner'
          }
        ]
      },
      {
        id: 'devops-p2',
        phaseNumber: 2,
        level: 'Intermediate',
        title: 'Phase 2: Containers, CI/CD & Cloud Providers (AWS/GCP)',
        estimatedWeeks: '6 Weeks',
        description: 'Package applications into immutable containers, build automated deployment pipelines, and configure cloud virtual networks.',
        concepts: [
          {
            id: 'devops-c3',
            title: 'Docker & Container Architecture',
            description: 'Writing minimal multi-stage Dockerfiles, Docker networking, volumes, and healthchecks.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'devops-c4',
            title: 'CI/CD Automation with GitHub Actions',
            description: 'Creating reusable workflow templates, environment secrets, and automated testing gates.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'devops-c5',
            title: 'Cloud Foundations (AWS / GCP)',
            description: 'Virtual Private Clouds (VPCs), EC2 compute instances, IAM policies, and S3 object storage.',
            timeEstimate: '2 Weeks'
          }
        ],
        recommendedSkills: ['Docker', 'Docker Compose', 'GitHub Actions', 'AWS / GCP Core Services', 'IAM'],
        courses: [
          {
            title: 'AWS Certified Cloud Practitioner Training',
            provider: 'AWS Skill Builder',
            duration: '20 Hours',
            isFree: true,
            level: 'Intermediate',
            linkText: 'Official Free AWS Training'
          }
        ],
        projects: [
          {
            title: 'Zero-Downtime Containerized CI/CD Pipeline',
            description: 'Full GitHub Action workflow building and scanning Docker images, then deploying to cloud instances.',
            techStack: ['Docker', 'GitHub Actions', 'AWS EC2', 'Trivy Scanner'],
            difficulty: 'Intermediate'
          }
        ]
      },
      {
        id: 'devops-p3',
        phaseNumber: 3,
        level: 'Advanced',
        title: 'Phase 3: Kubernetes Orchestration, Terraform & Monitoring',
        estimatedWeeks: '6–8 Weeks',
        description: 'Orchestrate scalable microservices in production Kubernetes clusters, manage infrastructure via code, and build Prometheus/Grafana monitors.',
        concepts: [
          {
            id: 'devops-c6',
            title: 'Kubernetes Pods, Deployments & Services',
            description: 'Cluster architecture, Deployments, Services, Ingress controllers, and Helm charts.',
            timeEstimate: '3 Weeks'
          },
          {
            id: 'devops-c7',
            title: 'Infrastructure as Code with Terraform',
            description: 'State management, modular Terraform code, provider configurations, and drift detection.',
            timeEstimate: '2 Weeks'
          },
          {
            id: 'devops-c8',
            title: 'Observability & Monitoring with Prometheus & Grafana',
            description: 'Metric scrapers, alerting thresholds, creating cluster dashboards, and distributed tracing.',
            timeEstimate: '2 Weeks'
          }
        ],
        recommendedSkills: ['Kubernetes', 'Helm', 'Terraform', 'Prometheus', 'Grafana'],
        courses: [
          {
            title: 'Kubernetes for the Absolute Beginners',
            provider: 'KodeKloud',
            duration: 'Self-paced',
            isFree: false,
            level: 'Advanced',
            linkText: 'Hands-on Browser Labs'
          }
        ],
        projects: [
          {
            title: 'Production Multi-Node Kubernetes Cluster with Auto-Scaling',
            description: 'Automated Terraform code provisioning a complete cloud Kubernetes cluster with ingress and metrics dashboards.',
            techStack: ['Terraform', 'Kubernetes (K8s)', 'Helm', 'Grafana'],
            difficulty: 'Advanced'
          }
        ]
      }
    ]
  }
};

export const MENTORS: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Sarah Chen',
    role: 'Senior Staff Software Engineer',
    company: 'Stripe',
    photo: sarahChenImg,
    category: 'Technology',
    expertise: ['Full-Stack Systems', 'System Design', 'Resume Review', 'Tech Interview Prep'],
    experienceYears: 7,
    alumniOf: 'UC Berkeley (B.S. CS 2019)',
    bio: 'Former Google intern, now leading payments infrastructure at Stripe. I love helping college students crack technical interviews, build standout portfolio projects, and navigate career offers.',
    rating: 4.96,
    reviewsCount: 142,
    sessionCount: 280,
    availableDays: ['Tuesdays', 'Thursdays', 'Saturdays'],
    availableSlots: ['05:00 PM EST', '06:00 PM EST', '07:30 PM EST']
  },
  {
    id: 'mentor-2',
    name: 'Marcus Vance',
    role: 'Lead Product Designer',
    company: 'Figma',
    photo: marcusVanceImg,
    category: 'Design & Creative',
    expertise: ['UI/UX Design Systems', 'Portfolio Review', 'Design Critiques', 'Career Transition'],
    experienceYears: 8,
    alumniOf: 'Carnegie Mellon University (MDes 2018)',
    bio: 'Product Designer at Figma focusing on developer tooling and design tokens. I mentor aspiring student designers on crafting clear, impactful case studies that land interviews.',
    rating: 4.98,
    reviewsCount: 118,
    sessionCount: 215,
    availableDays: ['Mondays', 'Wednesdays', 'Sundays'],
    availableSlots: ['04:00 PM EST', '05:30 PM EST', '07:00 PM EST']
  },
  {
    id: 'mentor-3',
    name: 'Dr. Priya Sharma',
    role: 'Staff AI Research Scientist',
    company: 'Scale AI',
    photo: priyaSharmaImg,
    category: 'Data & AI',
    expertise: ['Machine Learning', 'Generative AI & LLMs', 'Grad School vs Industry', 'Research Papers'],
    experienceYears: 6,
    alumniOf: 'Stanford University (Ph.D. AI 2021) & IIT Delhi',
    bio: 'Leading alignment and evaluation frameworks for frontier foundation models. Passionate about guiding undergraduate students toward high-impact AI research and industry roles.',
    rating: 4.99,
    reviewsCount: 164,
    sessionCount: 310,
    availableDays: ['Thursdays', 'Fridays', 'Saturdays'],
    availableSlots: ['03:00 PM PST', '04:30 PM PST', '06:00 PM PST']
  },
  {
    id: 'mentor-4',
    name: 'David O’Connor',
    role: 'Senior Product Manager',
    company: 'Google',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    category: 'Business & Product',
    expertise: ['Product Management', 'APM Interview Prep', 'Strategy Frameworks', 'PRD Writing'],
    experienceYears: 9,
    alumniOf: 'Harvard College (B.A. Economics 2017)',
    bio: 'Alumnus of Google APM rotational program. Over 7 years evaluating product candidates and mentoring students from non-traditional and traditional backgrounds.',
    rating: 4.92,
    reviewsCount: 95,
    sessionCount: 190,
    availableDays: ['Mondays', 'Thursdays'],
    availableSlots: ['06:00 PM EST', '07:00 PM EST']
  },
  {
    id: 'mentor-5',
    name: 'Aisha Al-Mansoor',
    role: 'Lead Cloud & SRE Architect',
    company: 'Datadog',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    category: 'Cybersecurity & Cloud',
    expertise: ['DevOps & Cloud', 'Kubernetes', 'Infrastructure as Code', 'Tech Roadmaps'],
    experienceYears: 7,
    alumniOf: 'University of Texas at Austin',
    bio: 'Specialized in scaling distributed systems, cloud cost optimization, and mentoring students eager to break into cloud architecture without getting overwhelmed.',
    rating: 4.95,
    reviewsCount: 88,
    sessionCount: 165,
    availableDays: ['Wednesdays', 'Saturdays'],
    availableSlots: ['04:00 PM CST', '05:30 PM CST']
  },
  {
    id: 'mentor-6',
    name: 'Rohit Kulkarni',
    role: 'Quantitative Trading Strategist',
    company: 'Bloomberg',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    category: 'Finance & Fintech',
    expertise: ['Fintech Engineering', 'Algorithmic Trading', 'C++ / Python', 'Financial Interviews'],
    experienceYears: 6,
    alumniOf: 'Georgia Tech (B.S. Applied Math & CS)',
    bio: 'Developing low latency trading algorithms for fixed income markets. Here to help students demystify Wall Street quantitative engineering and fintech opportunities.',
    rating: 4.91,
    reviewsCount: 76,
    sessionCount: 140,
    availableDays: ['Tuesdays', 'Fridays'],
    availableSlots: ['06:30 PM EST', '08:00 PM EST']
  }
];

export const SUCCESS_STORIES = [
  {
    id: 'story-1',
    studentName: 'Elena Rostova',
    college: 'University of Michigan, Ann Arbor',
    major: 'Computer Science, Class of 2026',
    rolePlaced: 'Software Engineering Intern',
    company: 'Stripe',
    quote:
      'Career Connect step-by-step Full-Stack Roadmap helped me prioritize what projects to build instead of getting lost in tutorial loops. My mentor Sarah gave me actionable feedback on my resume that got me 3 tier-1 interviews within 2 weeks.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    keyTakeaway: 'Built 2 production full-stack apps & completed 4 mentor mock interviews'
  },
  {
    id: 'story-2',
    studentName: 'Tariq Johnson',
    college: 'Georgia Institute of Technology',
    major: 'Industrial Design & HCI, Class of 2026',
    rolePlaced: 'Product Design Intern',
    company: 'Figma',
    quote:
      'The design roadmap clarified exactly how to structure design tokens and user testing. The 1:1 portfolio review with Marcus made all the difference when presenting to the Figma hiring committee.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    keyTakeaway: 'Revamped design case studies and learned interactive Figma variable prototyping'
  },
  {
    id: 'story-3',
    studentName: 'Ananya Deshmukh',
    college: 'UC San Diego',
    major: 'Data Science & Cognitive Science, Class of 2025',
    rolePlaced: 'Machine Learning Associate',
    company: 'Scale AI',
    quote:
      'Coming from an undergraduate program, breaking into generative AI seemed intimidating. Following the structured NLP and PyTorch phases gave me the confidence to ace technical evaluations and land my dream role.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    keyTakeaway: 'Mastered PyTorch pipelines and deployed a semantic course search project'
  }
];

export const INITIAL_STUDENT_PROFILE: StudentProfile = {
  name: 'Alex Morgan',
  headline: 'Junior Computer Science Major @ State University | Aspiring Full-Stack & Cloud Engineer',
  email: 'alex.morgan@university.edu',
  phone: '+1 (555) 234-8901',
  college: 'State University',
  degree: 'B.S. in Computer Science',
  graduationYear: 'May 2027',
  cgpa: '3.82 / 4.0',
  location: 'San Jose, CA (Open to Remote / Relocation)',
  bio:
    'Passionate about building scalable web applications and intuitive software. Actively building projects with React, TypeScript, and PostgreSQL. Seeking a Summer 2027 Software Engineering Internship.',
  github: 'https://github.com/alexmorgan-student',
  linkedin: 'https://linkedin.com/in/alexmorgan-cs',
  portfolio: 'https://alexmorgan.dev',
  skills: [
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'HTML5 / CSS3',
    'Tailwind CSS',
    'PostgreSQL',
    'Git & GitHub',
    'Python',
    'REST APIs',
    'Docker basics'
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'CampuSync — Student Event & Club Discovery Platform',
      description:
        'A responsive web application allowing university student clubs to post events, manage RSVP lists, and send automated email reminders.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://campusync-demo.dev',
      githubUrl: 'https://github.com/alexmorgan/campusync',
      date: 'Spring 2026'
    },
    {
      id: 'proj-2',
      title: 'DevMetric — GitHub Repository Health & Pulse Analyzer',
      description:
        'Analyzes open-source GitHub repositories to compute code churn, contributor velocity, and pull request review times using the GitHub GraphQL API.',
      techStack: ['TypeScript', 'GraphQL', 'Chart.js', 'Express'],
      liveUrl: 'https://devmetric-demo.dev',
      githubUrl: 'https://github.com/alexmorgan/devmetric',
      date: 'Winter 2025'
    }
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Coursera / Meta',
      issueDate: 'January 2026',
      credentialId: 'META-FE-984210'
    },
    {
      id: 'cert-2',
      name: 'PostgreSQL Database Administration & Queries',
      issuer: 'freeCodeCamp',
      issueDate: 'November 2025',
      credentialId: 'FCC-SQL-4412'
    }
  ],
  resumeFileName: 'Alex_Morgan_SWE_Resume_2026.pdf',
  resumeFileSize: '184 KB',
  resumeLastUpdated: 'September 24, 2026',
  savedOpportunityIds: ['opp-stripe-frontend', 'opp-notion-fullstack'],
  appliedOpportunities: [
    {
      id: 'app-1',
      opportunityId: 'opp-stripe-frontend',
      appliedDate: 'Sep 26, 2026',
      status: 'Under Review',
      notes: 'Applied with revised resume following Sarah Chen advice'
    }
  ],
  bookedSessions: [
    {
      id: 'session-1',
      mentorId: 'mentor-1',
      mentorName: 'Sarah Chen',
      mentorRole: 'Senior Staff Software Engineer',
      mentorCompany: 'Stripe',
      topic: 'Full-Stack Technical Interview Prep & System Architecture',
      date: 'Tomorrow, Oct 02, 2026',
      time: '06:00 PM EST',
      status: 'Upcoming',
      meetingLink: 'https://meet.google.com/xyz-carc-con'
    }
  ],
  completedRoadmapConceptIds: ['fs-c1', 'fs-c2', 'fs-c3', 'fs-c4', 'fs-c5'],
  tasks: [
    {
      id: 'task-1',
      title: 'Attend 1:1 Mentorship Session with Sarah Chen (Stripe)',
      dueDate: 'Tomorrow at 06:00 PM',
      category: 'Mentorship',
      completed: false
    },
    {
      id: 'task-2',
      title: 'Submit application for Google APM Intern before deadline',
      dueDate: 'In 4 days',
      category: 'Application',
      completed: false
    },
    {
      id: 'task-3',
      title: 'Complete Phase 2 Concept: Node.js & Express API Development',
      dueDate: 'This Weekend',
      category: 'Learning',
      completed: false
    },
    {
      id: 'task-4',
      title: 'Add live demo video to CampuSync GitHub README',
      dueDate: 'Oct 05, 2026',
      category: 'General',
      completed: true
    }
  ]
};

export const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-1',
    title: 'Mentor Session Confirmed',
    message: 'Your 1:1 Technical Interview Prep with Sarah Chen (Stripe) is confirmed for Tomorrow at 06:00 PM EST.',
    timestamp: '2 hours ago',
    type: 'mentor',
    read: false
  },
  {
    id: 'notif-2',
    title: 'New Matching Opportunity',
    message: 'Stripe posted "Frontend Engineering Intern — Summer 2027" matching 85% of your profile skills.',
    timestamp: '1 day ago',
    type: 'opportunity',
    read: false
  },
  {
    id: 'notif-3',
    title: 'Roadmap Milestone Achieved',
    message: 'You completed all concepts in "Phase 1: Web Foundations & Modern JavaScript". Great momentum!',
    timestamp: '3 days ago',
    type: 'system',
    read: true
  }
];
