export const navigationItems = [
  { label: "Work", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const siteContent = {
  profile: {
    name: "Abdulsamad Raji",
    title: "Data Analyst | Power BI, SQL, Excel & AI-Driven Analytics",
    location: "Nigeria",
    email: "abdulraji35@gmail.com",
    phone: "+2349133821340",
    linkedin: "https://www.linkedin.com/in/abdulsamad-raji35/",
    cvPath: "/abdulsamad-raji-cv.pdf",
    headline: "Turning raw data into clear decisions, faster reporting, and smarter operational insight.",
    subheadline:
      "Results-driven data analyst with 3+ years of experience across dashboards, SQL workflows, and AI-assisted analytics systems that help teams move from scattered information to confident action.",
    availability: "Open to internships, full-time roles, freelance analytics work, and impactful collaborations.",
    stats: [
      { value: "3+ Years", label: "analytics experience" },
      { value: "30%", label: "faster reporting delivered" },
      { value: "5 Roles", label: "across analytics and engineering" },
    ],
  },
  about: {
    intro:
      "I combine strong analytical thinking, business-focused storytelling, and engineering discipline to build dashboards, workflows, and decision-support tools that people actually use.",
    body: [
      "My background spans data analysis, aerospace engineering, and AI prompt engineering. That mix helps me approach problems with structure, curiosity, and a bias for clarity.",
      "Across Power BI, SQL, Excel, Python, and modern AI tooling, I focus on transforming raw and fragmented data into reliable insight, cleaner reporting processes, and practical systems that support better day-to-day decisions.",
    ],
    highlights: [
      "Advanced analytics for operational excellence",
      "Dashboard design, DAX, ETL, and data modeling",
      "RAG systems, LangChain workflows, and AI tool building",
    ],
  },
  skills: [
    {
      title: "Analytics & BI",
      items: [
        "Power BI",
        "Excel",
        "SQL",
        "DAX",
        "Dashboard Development",
        "Data Visualization",
        "Data Analysis",
        "Data Modeling",
      ],
    },
    {
      title: "AI & Automation",
      items: [
        "Generative AI",
        "Prompt Engineering",
        "Agentic AI Systems",
        "RAG Pipelines",
        "LangChain",
        "LangGraph",
        "API Integration",
        "AI Tool Building",
      ],
    },
    {
      title: "Programming & Delivery",
      items: [
        "Python",
        "ETL Workflows",
        "Complex Problem Solving",
        "Analytical Thinking",
        "Team Collaboration",
        "Multi-Tasking",
      ],
    },
  ],
  featuredProjects: [
    {
      title: "AI Conversational Data Analyst",
      summary:
        "Built an intelligent analytics assistant that routes questions through SQL or retrieval-augmented generation to return useful answers from structured and unstructured data.",
      problem:
        "Teams often struggle to query business data quickly when insights live across databases, documents, and multiple tools.",
      impact:
        "Created a reusable workflow for natural-language question answering, result persistence, and faster access to decision-ready information.",
      technologies: ["Python", "LangChain", "LangGraph", "RAG", "SQL", "APIs"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Personal Expense Tracker",
      summary:
        "Developed a lightweight Streamlit application that helps users log, monitor, and understand personal spending in a more structured way.",
      problem:
        "Manual expense tracking is inconsistent and makes it difficult to spot trends, control spending, or build financial awareness.",
      impact:
        "Turned everyday expense logging into a clearer, more usable system for monitoring habits and spending behavior.",
      technologies: ["Python", "Streamlit", "Data Visualization"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Student Registration & Feedback App",
      summary:
        "Built a Python-based application for capturing student registration details and collecting feedback through a more organized digital workflow.",
      problem:
        "Student onboarding and feedback collection can become fragmented, inconsistent, and difficult to manage manually.",
      impact:
        "Improved structure and accessibility for registration data and feedback collection within a single streamlined tool.",
      technologies: ["Python", "Streamlit", "Form Workflows"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Hotel Reservation Analysis",
      summary:
        "Analyzed hotel booking and revenue patterns using optimized SQL workflows to surface clearer performance insights.",
      problem:
        "Hospitality datasets often contain hidden trends that are difficult to identify without structured querying and analysis.",
      impact:
        "Helped uncover booking and revenue trends that can support pricing, operations, and performance tracking decisions.",
      technologies: ["SQL", "Power BI", "Data Modeling"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Cost of Living Analysis",
      summary:
        "Delivered an end-to-end analytics project using Power BI and DAX to compare regional cost patterns through interactive visuals.",
      problem:
        "Comparing living costs across locations requires a clean analytical model, consistent measures, and intuitive reporting.",
      impact:
        "Produced a more interactive, region-aware reporting experience for exploring cost comparisons with confidence.",
      technologies: ["Power BI", "DAX", "Geographic Modeling", "SQL"],
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Coffee Shop Market Analysis",
      summary:
        "Created a market analysis project around coffee shop performance and trends in New York City.",
      problem:
        "Business decisions become harder when sales, market, or customer patterns are not translated into a clear analytical story.",
      impact:
        "Converted raw market data into a more useful view of patterns and opportunities for business interpretation.",
      technologies: ["Excel", "Market Analysis", "Data Storytelling"],
      githubUrl: "#",
      demoUrl: "#",
    },
  ],
  experience: [
    {
      role: "AI & Prompt Engineering",
      company: "Qubyte Flow",
      location: "Remote",
      period: "Aug 2025 - Dec 2025",
      bullets: [
        "Built AI-driven applications with Python and Streamlit, including an expense tracker and a student registration system.",
        "Designed and implemented retrieval-augmented generation systems for question answering across structured and unstructured data.",
        "Developed agentic AI workflows with LangChain and LangGraph, using nodes and edges to control reasoning and execution paths.",
        "Integrated APIs, SQL databases, and hybrid AI pipelines to dynamically route queries and persist results for reuse.",
      ],
    },
    {
      role: "Data Analyst",
      company: "Bilikis Store, Coca-Cola Depot",
      location: "Niger State",
      period: "Apr 2023 - Present",
      bullets: [
        "Gather raw data from diverse sources and structure it into business-ready information using stored procedures and reporting workflows.",
        "Design dashboards, enforce data quality rules, and conduct regular reviews to maintain database consistency and integrity.",
        "Transform raw operational data into actionable intelligence through analysis and visualization.",
        "Protect data consistency, confidentiality, and accuracy through validation and compliance measures.",
      ],
    },
    {
      role: "Data Analyst",
      company: "High Impact Bootcamp",
      location: "Remote, UK",
      period: "Jan 2024 - May 2024",
      bullets: [
        "Designed interactive Excel dashboards with pivot tables, charts, and advanced functions to simplify complex datasets.",
        "Performed ETL on client datasets using SQL to extract trends and optimize operations.",
        "Collaborated with stakeholders to align data solutions with business needs.",
        "Reduced loan performance reporting time by 30% through analytics optimization.",
      ],
    },
    {
      role: "Data Analyst Intern",
      company: "Mentorness",
      location: "Remote, India",
      period: "May 2024 - Jun 2024",
      bullets: [
        "Delivered end-to-end Power BI analytics with standardized geographic modeling.",
        "Engineered dynamic DAX measures for regional cost comparison analysis.",
        "Built optimized SQL pipelines for hotel performance insights.",
        "Created SQL-based workflows to uncover hotel booking and revenue trends.",
      ],
    },
    {
      role: "Aircraft Maintenance Intern",
      company: "International Aviation College",
      location: "Ilorin, Kwara State",
      period: "May 2022 - Oct 2022",
      bullets: [
        "Assisted senior technicians with troubleshooting, diagnostics, and maintenance while following strict safety standards.",
        "Supported preventive maintenance programs to maintain aircraft airworthiness.",
        "Procured tools and parts and maintained detailed maintenance documentation.",
        "Participated in safety briefings and followed risk mitigation protocols.",
      ],
    },
  ],
  achievements: [
    "Reduced loan performance reporting time by 30% through analytics optimization.",
    "Built RAG-enabled AI tools that answer questions from both structured and unstructured data.",
    "Combined engineering discipline with analytics and AI to deliver clearer operational insight.",
  ],
  education: {
    degree: "Bachelor of Engineering in Aeronautical and Astronautical Engineering",
    school: "Kwara State University, Malete, Kwara State, Nigeria",
    period: "2018 - 2023",
  },
  certifications: [
    "Data Analysis - High Impact Career (2024)",
    "Data Analysis Intern - Mentorness (2024)",
    "AI & Prompt Engineering - Qubyte Flow (2025)",
  ],
  trust: {
    principles: [
      {
        title: "Insight With Structure",
        description:
          "I do more than visualize numbers. I build the logic, cleanup, and modeling needed to make those insights trustworthy.",
      },
      {
        title: "Business-Ready Communication",
        description:
          "My work is designed to help non-technical stakeholders understand what matters, what changed, and what to do next.",
      },
      {
        title: "Modern Analytical Range",
        description:
          "From Excel and SQL to Power BI, Python, and agentic AI systems, I can adapt the toolset to the problem.",
      },
    ],
    testimonials: [
      {
        quote:
          "Placeholder testimonial: add a short recommendation from a manager, mentor, recruiter, or client here.",
        author: "Name Here",
        role: "Manager / Mentor / Client",
      },
      {
        quote:
          "Placeholder testimonial: this space is intentionally left ready for a real quote once you collect one.",
        author: "Name Here",
        role: "Team Lead / Collaborator",
      },
    ],
  },
  contact: {
    heading: "Let's build reporting, analytics, or AI workflows that make decisions easier.",
    copy:
      "If you are hiring for a data role, need a dashboard project, or want help turning messy information into a clearer system, I'd love to hear from you.",
  },
} as const;

// EDIT GUIDE:
// 1. Update personal details, links, and the CV file path in `profile`.
// 2. Replace `githubUrl` and `demoUrl` placeholders with real links for each project.
// 3. If you add a real headshot, place it in `/public` and update the hero component.
// 4. Replace testimonial placeholders with real recommendations when available.
