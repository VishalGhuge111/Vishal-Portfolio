import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    // Enhanced system prompt with comprehensive knowledge about Vishal
    const systemPrompt = `You are Viru, the AI assistant of Vishal Ghuge. You know everything about his projects like CareerSetu, SPPU Engineer, skills, resume, achievements, internships, and goals. You speak in helpful, professional, friendly tone. If the user asks for anything related to Vishal, answer confidently. If not related, reply clearly and politely.

Key information about Vishal Ghuge:
- Full Stack Developer specializing in MERN Stack, JavaScript, Firebase, and Tailwind CSS
- Created CareerSetu: A comprehensive career guidance platform
- Built SPPU Engineer: Educational platform for engineering students
- Languages: English, Hindi, Marathi
- Location: Maharashtra, India
- 3+ years of experience, 15+ projects, 10+ technologies, 5+ internships
- Passionate about building smart products and innovative solutions
- Available for hire and collaboration

Answer questions about his work, projects, skills, experience, and background with confidence and detail.`

    // Simulate AI response (replace with actual AI API call)
    let response = ""

    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("who is vishal") || lowerMessage.includes("about vishal")) {
      response =
        "Vishal Ghuge is a passionate Full Stack Developer from Maharashtra, India. He specializes in the MERN stack, JavaScript, Firebase, and Tailwind CSS. With 3+ years of experience, he has built 15+ projects including CareerSetu (a career guidance platform) and SPPU Engineer (an educational platform). He speaks English, Hindi, and Marathi, and is always excited to work on innovative solutions!"
    } else if (lowerMessage.includes("careersetu")) {
      response =
        "CareerSetu is one of Vishal's flagship projects - a comprehensive career guidance platform built with the MERN stack. It helps students and professionals make informed career decisions through personalized recommendations, skill assessments, and industry insights. The platform features React frontend, Node.js backend, MongoDB database, and Express server, showcasing Vishal's full-stack development expertise."
    } else if (lowerMessage.includes("sppu engineer")) {
      response =
        "SPPU Engineer is an educational platform that Vishal created specifically for SPPU engineering students. Built with Next.js, Firebase, and Tailwind CSS, it provides study materials, previous year papers, and interactive learning tools to help students excel in their academics. It's a great example of how Vishal combines technology with education to solve real-world problems."
    } else if (lowerMessage.includes("languages") || lowerMessage.includes("speak")) {
      response =
        "Vishal is multilingual! He speaks three languages fluently: English (for global communication), Hindi (widely spoken across India), and Marathi (his native language from Maharashtra). This linguistic diversity helps him connect with a broader audience and work effectively in diverse teams."
    } else if (lowerMessage.includes("skills") || lowerMessage.includes("technologies")) {
      response =
        "Vishal has expertise in 10+ technologies! His core skills include: Frontend - React, Next.js, JavaScript, Tailwind CSS; Backend - Node.js, Express; Database - MongoDB, Firebase; Tools - Git, AWS. He's particularly strong in the MERN stack and modern web development practices, always staying updated with the latest technologies."
    } else if (lowerMessage.includes("experience") || lowerMessage.includes("work")) {
      response =
        "Vishal has 3+ years of professional experience in full-stack development. He has completed 5+ internships, worked on 15+ projects, and mastered 10+ technologies. His experience ranges from building educational platforms to career guidance systems, always focusing on creating user-centric solutions that solve real problems."
    } else if (lowerMessage.includes("projects") || lowerMessage.includes("recent project")) {
      response =
        "Vishal has built 15+ projects! His most notable ones include CareerSetu (career guidance platform) and SPPU Engineer (educational platform). His recent work focuses on full-stack web applications using React, Node.js, and modern databases. Each project showcases his ability to build scalable, user-friendly solutions from concept to deployment."
    } else if (
      lowerMessage.includes("hire") ||
      lowerMessage.includes("contact") ||
      lowerMessage.includes("work together")
    ) {
      response =
        "Vishal is available for hire and collaboration! He's passionate about working on innovative projects and building smart solutions. You can reach out to him through his portfolio contact form, LinkedIn, or email. He's particularly interested in full-stack development projects, educational technology, and career-focused platforms."
    } else if (lowerMessage.includes("location") || lowerMessage.includes("where")) {
      response =
        "Vishal is based in Maharashtra, India. This location gives him access to India's thriving tech ecosystem while maintaining cost-effective development services. He's comfortable working with global teams across different time zones and has experience collaborating remotely on various projects."
    } else {
      response =
        "I'm here to help you learn about Vishal Ghuge and his work! You can ask me about his projects (like CareerSetu or SPPU Engineer), his technical skills, experience, languages he speaks, or how to get in touch with him. What would you like to know?"
    }

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("Error in Viru API:", error)
    return NextResponse.json({ error: "Sorry, I'm having trouble processing your request right now." }, { status: 500 })
  }
}
