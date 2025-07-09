export const projectsData = [
  {
    id: "1",
    title: "CityConnect",
    category: "Smart City",
    tags: ["Government", "CivicTech", "Real-time"],
    description:
      "A comprehensive smart city platform that connects citizens with local government services, enabling efficient communication and service delivery.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    githubUrl: "https://github.com/vishal/cityconnect",
    liveUrl: "https://cityconnect-demo.vercel.app",
    slug: "cityconnect",
    problem:
      "Citizens often struggle to access government services efficiently, leading to long queues, paperwork delays, and poor communication between local authorities and residents.",
    solution:
      "CityConnect provides a unified digital platform where citizens can access various government services, track application status, report issues, and communicate directly with local authorities.",
    features: [
      "Real-time service request tracking",
      "Digital document submission",
      "Live chat with government officials",
      "Community forum for local discussions",
      "Mobile-responsive design",
      "Multi-language support",
    ],
  },
  {
    id: "2",
    title: "CareerSetu",
    category: "EdTech",
    tags: ["Career Guidance", "Students", "ShikshaX", "Internships", "Skill", "AI", "Resume Builder"],
    description: "A personalized career guidance platform for engineering and diploma students to explore opportunities, track learning, and build future-ready skills.",
    image: "/projects/careersetu/cover.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/vishalghuge111/career-setu",
    liveUrl: "https://careersetu.com",
    slug: "careersetu",
    problem:
      "Many students struggle to make informed career decisions due to lack of proper guidance, mentorship, and awareness about industry expectations. There's no unified platform combining learning, internships, and career growth tailored to students.",
    solution:
      "CareerSetu bridges this gap by offering AI-based career guidance, personalized learning paths, internship opportunities, and growth tools like resume builder, contests, and mentorship — all tailored for Indian college students.",
    features: [
      "AI-powered career matching based on skills and interests",
      "Skill gap analysis and tailored learning paths",
      "Resume builder with AI suggestions",
      "Weekly coding & quiz contests with leaderboard rewards",
      "Internship listings and AI-HR profile screening (upcoming)",
      "College ambassador and referral programs",
      "Custom plan management (Starter, Premium, Gold)",
      "Dynamic pricing with referral code discounts",
      "Mentorship portal to connect with industry experts",
      "Auto-generated access to Drive materials",
      "Monthly top performers rewarded with tech gadgets",
    ],
    gallery: [
      "/projects/careersetu/screenshot1.png",
      "/projects/careersetu/screenshot2.png",
      "/projects/careersetu/screenshot3.png",
      "/projects/careersetu/screenshot4.png",
    ]
  },
  {
    id: "3",
    title: "SPPU Engineer",
    slug: "sppu-engineer",
    category: "EdTech",
    tags: ["SPPU", "Study Notes", "Engineering", "Semester-wise", "Cashfree", "Google Drive"],
    description:
      "A semester-wise educational platform built for engineering students of Savitribai Phule Pune University (SPPU), offering structured study materials, previous year papers, and automated access through a clean, login-free experience.",
    image: "/projects/sppu/cover.png",
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Google Apps Script", "Google Drive", "Cashfree"],
    githubUrl: "https://github.com/Vishalghuge111/sppu-engineers",
    liveUrl: "https://sppuengineers.site",
    problem:
      "SPPU engineering students often struggle to find clean, syllabus-aligned, semester-wise study notes and previous year papers. Resources are scattered across Telegram groups, WhatsApp, and outdated blogs, wasting student time and causing confusion before exams.",
    solution:
      "SPPU Engineer solves this by offering a centralized platform tailored to the SPPU syllabus. Students can easily find semester-specific resources and get instant access to organized Google Drive folders after a simple one-time payment — all without requiring login or account creation.",
    features: [
      "Semester-wise subject listing with clear navigation",
      "Separate pages for each branch (e.g., Computer, IT, AIDS)",
      "Notes for 1st to 6th semester only — aligned to new SPPU pattern",
      "Google Drive integration to host and deliver notes securely",
      "Cashfree Payment Form + Google Apps Script for instant folder access",
      "Referral system with upto ₹50 discount for first-time users",
      "Professional, mobile-friendly design using Tailwind CSS",
      "No-login access system for frictionless experience",
      "Google Sheet-based backend to track paid students & access status",
      "Testimonials section showing real SPPU students (mostly from Pune colleges)",
    ],
    gallery: [
      "/projects/sppu/screenshot1.png",
      "/projects/sppu/screenshot2.png",
      "/projects/sppu/screenshot3.png",
      "/projects/sppu/screenshot4.png",
    ],
  },
    {
      id: "4",
      title: "StudyBuddy",
      category: "Education",
      tags: ["Peer Learning", "Group Study", "Live Chat"],
      description:
        "A collaborative learning platform that connects students for group studies, resource sharing, and peer-to-peer learning.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Django", "WebRTC", "Redis", "PostgreSQL"],
      githubUrl: "https://github.com/vishal/studybuddy",
      liveUrl: "https://studybuddy-demo.vercel.app",
      slug: "studybuddy",
      problem:
        "Students often struggle with isolation while studying and lack access to collaborative learning opportunities.",
      solution:
        "StudyBuddy creates virtual study groups where students can collaborate, share resources, and learn together in real-time.",
      features: [
        "Virtual study rooms",
        "Real-time collaboration tools",
        "Resource sharing library",
        "Study schedule coordination",
        "Peer tutoring marketplace",
        "Progress tracking and analytics",
      ],
    },
  {
    id: "5",
    title: "HealthHub",
    category: "HealthTech",
    tags: ["Medical", "Health Records", "Appointments"],
    description:
      "A comprehensive health management system that helps users track their health metrics, schedule appointments, and maintain medical records.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Angular", "Spring Boot", "MySQL", "Docker", "AWS"],
    githubUrl: "https://github.com/vishal/healthhub",
    liveUrl: "https://healthhub-demo.vercel.app",
    slug: "healthhub",
    problem:
      "Managing personal health records and coordinating healthcare services is often fragmented and inefficient.",
    solution:
      "HealthHub provides a centralized platform for health management, connecting patients, doctors, and healthcare providers.",
    features: [
      "Digital health records",
      "Appointment scheduling",
      "Medication reminders",
      "Health metrics tracking",
      "Doctor-patient communication",
      "Insurance integration",
    ],
  },
  {
    id: "6",
    title: "TaskFlow",
    category: "Productivity",
    tags: ["Project Management", "AI", "Task Optimization"],
    description:
      "An intelligent project management tool that uses AI to optimize task allocation, predict project timelines, and improve team productivity.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "GraphQL", "Python", "MongoDB", "Docker"],
    githubUrl: "https://github.com/vishal/taskflow",
    liveUrl: "https://taskflow-demo.vercel.app",
    slug: "taskflow",
    problem:
      "Traditional project management tools lack intelligence and often lead to poor resource allocation and missed deadlines.",
    solution:
      "TaskFlow uses machine learning to analyze team performance, predict bottlenecks, and suggest optimal task distributions.",
    features: [
      "AI-powered task allocation",
      "Predictive timeline analysis",
      "Team performance insights",
      "Automated progress reporting",
      "Resource optimization",
      "Integration with popular tools",
    ],
  },
  {
    id: "7",
    title: "SPPU Engineer",
    category: "EdTech",
    tags: ["SPPU", "Notes", "Semester-wise"],
    description: "Educational platform for SPPU engineering students",
    image: "/projects/sppu-engineers.png",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/Vishalghuge111/sppu-engineers",
    liveUrl: "https://sppuengineers.site",
    slug: "sppu-engineer",
    problem:
      "SPPU students often struggle to find structured, semester-wise resources tailored to the syllabus, especially for engineering subjects.",
    solution:
      "SPPU Engineer provides a centralized learning platform with curated study material, previous year papers, and tools that help students prepare effectively.",
    features: ["Study materials", "Previous year papers", "Interactive learning tools"],
  },
];

export const projects = projectsData;
export default projectsData;
