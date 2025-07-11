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
    tags: ["Career Guidance", "Students", "ShikshaX", "Internships", "Skill", "AI", "Resume"],
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
      title: "Medivault",
      category: "Blockchain",
      tags: ["Peer Learning", "Group Study", "Live Chat"],
      description:
        "A collaborative learning platform that connects students for group studies, resource sharing, and peer-to-peer learning.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Django", "WebRTC", "Redis", "PostgreSQL"],
      githubUrl: "https://github.com/Vishalghuge111/medivault",
      liveUrl: "https://studybuddy-demo.vercel.app",
      slug: "medivault",
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
    title: "Women Safety App",
    category: "Android",
    tags: ["Safety", "SOS", "Location Tracking", "Emergency"],
    description:
      "An Android-based mobile app designed to enhance women's safety by providing quick emergency alerts, real-time location sharing, and trusted contacts communication.",
    image: "/projects/android/women-safety-app.webp",
    technologies: ["Java", "XML", "Android Studio", "Google Maps API", "SMS Manager"],
    githubUrl: "https://github.com/vishalghuge111/women-safety-app", 
    liveUrl: "", 
    slug: "women-safety-app",
    problem:
      "In emergency situations, women often do not have enough time to reach out for help manually, and many safety apps are either complex or lack quick-response features.",
    solution:
      "This app enables users to send instant SOS alerts with location to predefined emergency contacts by just pressing a button or shaking the phone. It also includes features like fake call alerts, live tracking, and quick helpline access.",
    features: [
      "Single-tap SOS alert with GPS location",
      "Shake-to-send emergency message",
      "Live location tracking using Google Maps API",
      "Auto SMS to trusted contacts",
    ]
  },

  {
  id: "6",
  title: "IoT Based Home Automation",
  category: "IoT",
  tags: ["Embedded Systems", "Smart Home", "ESP8266", "Alexa", "Automation"],
  description:
    "A IoT based smart home automation system that enables users to control electrical appliances remotely using Wi-Fi.",
  image: "/projects/iot/IoT-Smart-Home-Automation.webp", 
  technologies: ["Arduino IDE", "NodeMCU", "ESP8266", "Relays", "Sensors", "C/C++"],
  githubUrl: "https://github.com/vishalghuge111/iot-based-home-automation",
  liveUrl: "", // optional, can omit if not hosted
  slug: "iot-based-home-automation",
  problem:
    "Controlling home appliances manually can be inconvenient, especially for elderly or disabled individuals. Additionally, energy inefficiency occurs when devices are left on unintentionally.",
  solution:
    "The system uses NodeMCU (ESP8266) to connect appliances to Wi-Fi and allows users to control them wirelessly through a mobile interface or IoT dashboard. It helps users turn appliances ON/OFF, monitor device state, and automate usage patterns.",
  features: [
    "Remote control of lights and fans via web or app UI",
    "Built using NodeMCU (ESP8266) with Arduino code",
    "Relay module integration to control high-voltage devices",
    "Wi-Fi-based real-time communication",
    "Basic sensor input for future automation (e.g. motion, temperature)",
    "Low-cost and scalable for multiple rooms or appliances",
  ]
}
];

export const projects = projectsData;
export default projectsData;
