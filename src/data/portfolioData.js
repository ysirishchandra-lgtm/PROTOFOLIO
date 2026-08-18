import { 
    Code2, 
    Database, 
    Layout, 
    Server, 
    Terminal, 
    Cpu, 
    Globe, 
    BookOpen,
    BrainCircuit,
    Award
  } from "lucide-react";
  
  export const portfolioData = {
    personal: {
      name: "Sirish Chandra Yellanki",
      roles: ["Full-Stack Developer", "AI & Software Builder", "CSE Student @ KMCE", "Building Real-World Software"],
      tagline: "Building practical software products and integrating AI into real-world applications.",
      objective: "Motivated Computer Science & Engineering student seeking a software development internship to apply programming, full-stack development, database, and problem-solving skills in real-world projects. Interested in building practical software products, learning modern technologies, and contributing effectively to development teams.",
      location: "Hyderabad, Telangana, India",
      email: "ysirishchandra@gmail.com",
      phone: "+91 99490 32496",
      github: "https://github.com/ysirishchandra-lgtm",
      linkedin: "https://www.linkedin.com/feed/",
      twitter: "https://x.com/home",
      avatar: "/profile.jpg",
      resumeUrl: "#",
      availability: "Available for Internships",
    },
    
    strengths: [
      "Problem Solving", "Team Leadership", "Communication", 
      "Quick Learning", "Collaboration", "Adaptability"
    ],
  
    interests: [
      "Software Development", "Full-Stack Development", "Artificial Intelligence", 
      "Data Structures & Algorithms", "Backend & Cloud Technologies", "Product Development"
    ],
  
    education: [
      {
        institution: "Keshav Memorial College of Engineering (KMCE), Hyderabad",
        degree: "B.Tech — Computer Science & Engineering",
        duration: "2025–Present",
        description: "Currently pursuing bachelor's degree focusing on computer science fundamentals and software engineering."
      },
      {
        institution: "Narayana Junior College",
        degree: "Intermediate (Class XII)",
        duration: "Graduated",
        description: "Marks: 887"
      },
      {
        institution: "Sri Sai School",
        degree: "SSC (Class X)",
        duration: "Graduated",
        description: "CGPA: 8.0"
      }
    ],
  
    leadership: [
      {
        title: "SAP Hackathon Participant",
        description: "Collaborated on problem ideation, solution design, technical discussions, and prototype development for a real-world technology challenge."
      },
      {
        title: "Hackathon Team Leader — AVIATORS",
        description: "Led a student team through ideation, technical planning, task coordination, solution development, and presentation."
      },
      {
        title: "Class Representative — KMCE",
        description: "Coordinate student–faculty communication, academic announcements, submissions, polls, and class activities."
      }
    ],
  
    skills: {
      categories: [
        {
          name: "Frontend Development",
          icon: Layout,
          skills: ["HTML", "CSS", "React.js", "Vite", "JavaScript"]
        },
        {
          name: "Backend & APIs",
          icon: Server,
          skills: ["Node.js", "Express.js", "REST APIs", "Python", "Java", "C", "C++"]
        },
        {
          name: "Database & Cloud",
          icon: Database,
          skills: ["Supabase", "PostgreSQL", "Vercel", "Local Storage"]
        },
        {
          name: "AI & LLMs",
          icon: BrainCircuit,
          skills: ["Ollama", "Prompt Engineering", "LLM Integration", "Local LLM Workflows"]
        },
        {
          name: "Tools & DevOps",
          icon: Terminal,
          skills: ["Git", "GitHub", "VS Code", "Docker", "JWT", "bcrypt"]
        }
      ]
    },
  
    projects: [
      {
        title: "FounderMind",
        description: "An AI Chief-of-Staff platform for founders covering meetings, tasks, documents, conversations, and persistent memory. Features authentication, backend CRUD APIs, local LLM workflows, AI orchestration, persistent-memory architecture, and analytics concepts.",
        tags: ["React.js", "Node.js", "Express.js", "Supabase", "Ollama"],
        github: "https://github.com/ysirishchandra-lgtm",
        demo: "",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", 
      },
      {
        title: "Campus Canteen",
        description: "A responsive college canteen ordering platform for menu browsing, cart management, and food ordering. Implemented authentication, menu management, order processing, and an admin dashboard for incoming orders integrated with Supabase.",
        tags: ["React.js", "Node.js", "Supabase", "Vercel"],
        github: "https://github.com/ysirishchandra-lgtm/campus-canteen",
        demo: "",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
      },
      {
        title: "Ask My Notes",
        description: "An application concept focused on personalized access to information stored in a user's notes. Designed to organize notes and help users retrieve relevant information efficiently using AI.",
        tags: ["React.js", "AI", "Knowledge Processing"],
        github: "https://github.com/ysirishchandra-lgtm/ASK-MY-NOTES",
        demo: "",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
      }
    ]
  };
  
