import { projectsData } from "./projectData.js"
import { blogData } from "./blogData.js"
import { experienceData } from "./experienceData.js"

// Enhanced search data with more comprehensive content and proper fallbacks
export const searchData = [
  // Projects
  ...projectsData.map((project) => ({
    ...project,
    type: "project",
    tags: project.tags || project.technologies || [],
    searchableContent: `${project.title} ${project.description} ${(project.technologies || []).join(" ")} ${project.problem || ""} ${project.solution || ""} ${(project.features || []).join(" ")} web development full stack mern react node mongodb javascript typescript nextjs express firebase tailwind css html python django vue angular docker aws git programming software engineer developer portfolio project application website platform system database api frontend backend mobile responsive design ui ux user interface experience modern clean professional innovative smart solution digital technology coding development programming`,
  })),

  // Blogs
  ...blogData.map((blog) => ({
    ...blog,
    type: "blog",
    tags: blog.tags || [],
    searchableContent: `${blog.title} ${blog.excerpt} ${(blog.tags || []).join(" ")} ${blog.content || ""} tutorial guide development programming blog article post writing technical documentation learning education tips tricks best practices coding software engineering web development react javascript typescript node mongodb express firebase tailwind css html python django vue angular docker aws git`,
  })),

  // Experience
  ...experienceData.map((experience) => ({
    ...experience,
    type: "experience",
    tags: experience.technologies || [],
    searchableContent: `${experience.company} ${experience.position} ${experience.description} ${(experience.technologies || []).join(" ")} work job internship career developer experience professional employment full time part time remote onsite software engineer full stack frontend backend programming coding development`,
  })),

  // Skills and general content
  {
    id: "skills-frontend",
    title: "Frontend Development Skills",
    description: "React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS",
    type: "skill",
    tags: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind"],
    searchableContent:
      "react nextjs javascript typescript html css tailwind frontend development ui user interface responsive design mobile web browser client side programming coding skills expertise technology stack modern framework library component state management hooks jsx tsx styling animation responsive grid flexbox",
  },
  {
    id: "skills-backend",
    title: "Backend Development Skills",
    description: "Node.js, Express, Python, Django, MongoDB, Firebase, APIs",
    type: "skill",
    tags: ["Node.js", "Express", "Python", "Django", "MongoDB", "Firebase"],
    searchableContent:
      "nodejs express python django mongodb firebase backend development server side api rest restful graphql database nosql sql authentication authorization middleware routing controllers models views templates orm database design architecture microservices serverless cloud deployment",
  },
  {
    id: "skills-tools",
    title: "Development Tools & Technologies",
    description: "Git, Docker, AWS, Vercel, VS Code, Figma",
    type: "skill",
    tags: ["Git", "Docker", "AWS", "Vercel", "VS Code", "Figma"],
    searchableContent:
      "git docker aws vercel vscode figma tools development environment version control containerization cloud computing deployment hosting design prototyping collaboration workflow automation ci cd continuous integration deployment devops infrastructure",
  },
  {
    id: "about-vishal",
    title: "About Vishal Ghuge",
    description: "Full Stack Developer from Maharashtra, India specializing in MERN stack",
    type: "about",
    tags: ["Full Stack", "MERN", "Developer", "Maharashtra", "India"],
    searchableContent:
      "vishal ghuge full stack developer mern javascript firebase maharashtra india about bio profile background story journey passion technology innovation smart products solutions problem solving creative thinking analytical skills communication teamwork leadership project management",
  },
  {
    id: "education-background",
    title: "Education Background",
    description: "Computer Science Engineering and Academic Qualifications",
    type: "education",
    tags: ["Computer Science", "Engineering", "Education", "University"],
    searchableContent:
      "education computer science engineering university college degree bachelor technology academic qualification study learning knowledge algorithms data structures software engineering database systems operating systems computer networks programming languages mathematics physics chemistry science stream hsc graduation",
  },
  {
    id: "achievements-awards",
    title: "Achievements and Awards",
    description: "Hackathon wins, academic excellence, and project accomplishments",
    type: "achievement",
    tags: ["Hackathon", "Awards", "Academic", "Excellence"],
    searchableContent:
      "achievements awards hackathon winner coding club leader academic excellence projects accomplishments recognition success competition programming contest development innovation creativity problem solving teamwork collaboration leadership mentoring teaching workshop organizing",
  },
  {
    id: "contact-hire",
    title: "Contact & Hire Information",
    description: "Get in touch for collaboration and project opportunities",
    type: "contact",
    tags: ["Contact", "Hire", "Collaboration", "Projects"],
    searchableContent:
      "contact hire collaboration freelance full time part time remote work opportunities projects consultation development services web application mobile responsive design custom solutions business enterprise startup email phone linkedin github instagram whatsapp social media networking professional",
  },
  {
    id: "careersetu-project",
    title: "CareerSetu - Career Guidance Platform",
    description: "AI-powered career guidance platform built with MERN stack",
    type: "project",
    tags: ["CareerSetu", "Career", "Guidance", "MERN", "AI"],
    searchableContent:
      "careersetu career guidance platform mern stack artificial intelligence machine learning recommendation system personalized advice job search resume building interview preparation skill assessment career path planning professional development mentorship networking industry insights market trends employment opportunities",
  },
  {
    id: "sppu-engineer-project",
    title: "SPPU Engineer - Educational Platform",
    description: "Educational platform for SPPU engineering students",
    type: "project",
    tags: ["SPPU", "Engineer", "Education", "Students"],
    searchableContent:
      "sppu engineer educational platform students engineering university college learning study materials notes previous year papers syllabus curriculum academic resources online learning e-learning digital education technology enhanced learning student portal",
  },
]
