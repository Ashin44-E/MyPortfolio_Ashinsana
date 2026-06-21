export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: 'Web Development' | 'Database' | 'Cloud' | 'Other';
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string; // Placeholder or actual image path
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level?: string }[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  gpa?: string;
  coursework?: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface ExperienceEntry {
  position: string;
  organization: string;
  duration: string;
  description: string[];
  technologies?: string[];
  type: 'Internship' | 'Freelance' | 'Volunteer' | 'Academic Project';
}

export interface AchievementEntry {
  title: string;
  description: string;
  date?: string;
}

export const portfolioData = {
  personalInfo: {
    fullName: "Shamal Ashinsana",
    title: "Information Technology Undergraduate | Aspiring Software Developer",
    introduction: "Passionate Information Technology undergraduate student with a strong foundation in software engineering, web development, and database management. Eager to apply academic knowledge to solve real-world problems and contribute to innovative projects as a software engineering intern.",
    internshipStatement: "Actively seeking an internship in Software Development, Web Development, or Full-Stack Development starting immediately.",
    email: "ashinsana899@gmail.com", // Placeholder Gmail address
    phone: "+94 72 246 5187", // Placeholder phone
    location: "Colombo, Sri Lanka",
    github: "https://github.com/Ashin44-E", // Placeholder GitHub URL
    linkedin: "https://www.linkedin.com/in/shamal-ashinsana", // Placeholder LinkedIn URL
    resumeUrl: "/CV_of_Shamal_Ashinsana.pdf",
  },
  aboutMe: {
    university: "Sri Lanka Institute of Information Technology",
    degree: "Bachelor of Science (Hons) in Information Technology",
    currentYear: "3rd Year Undergraduate",
    expectedGraduation: "December 2027",
    careerInterests: ["Full-Stack Web Development", "Mobile App Development", "Database Administration", "Cloud Engineering"],
    summary: "As an IT undergraduate, I have cultivated a diverse set of technical capabilities ranging from frontend interfaces to backend server configurations. My academic projects like CeylonLeaf and HelpAura showcase my ability to build secure, data-driven applications that streamline operations. I am a self-driven learner, having obtained multiple certifications from Cisco Networking Academy and Esoft Metro Campus to supplement my university education. I thrive in collaborative environments and am highly motivated to work under experienced developers to build production-grade systems."
  },
  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "C#" },
        { name: "PHP" }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Docker" },
        { name: "Linux" },
        { name: "VS Code" }
      ]
    },
    {
      category: "Cloud",
      skills: [
        { name: "AWS" },
        { name: "Azure" },
        { name: "Google Cloud" }
      ]
    }
  ] as SkillGroup[],
  projects: [
    {
      id: "ceylonleaf",
      title: "CeylonLeaf - Tea Plantation Management System",
      description: "A comprehensive web-based management system designed for tea estates to track workers, harvests, and tea production with secure authentication.",
      longDescription: "Developed to replace manual recording methods in tea estates, CeylonLeaf features role-based access control, interactive dashboards for estate managers, harvest tracking analytics, and worker attendance systems.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Axios", "Tailwind CSS", "REST APIs"],
      category: "Web Development",
      githubUrl: "https://github.com/Ashin44-E/Tea-Plantation-Management-System",
      liveUrl: "https://ceylonleaf.vercel.app/", // Placeholder
      imageUrl: "/images/ceylonleaf.jpg"
    },
    {
      id: "helpaura",
      title: "HelpAura - Online Help Desk",
      description: "An online customer support ticket management system where users submit support requests and administrators manage resolve workflows.",
      longDescription: "Designed and implemented to streamline customer support, replacing paper and email queues. It features user authentication, priority-based ticketing, comments logs, and status tracking dashboards for administrators.",
      techStack: ["Java Servlets", "JSP", "JDBC", "MySQL", "HTML5", "CSS3"],
      category: "Database",
      githubUrl: "https://github.com/Ashin44-E/HelpAura--Online-Help-Desk",
      imageUrl: "/images/helpaura.jpg"
    },
    {
      id: "jobsadawiya",
      title: "JobsAdawiya - Online Job Portal",
      description: "A web portal facilitating job seekers to search/apply for jobs and employers to post/manage vacancy listings.",
      longDescription: "Features a modern search system with filtering by job category and location. Employers receive real-time applicant details, while applicants can manage their profiles and track application states with modern AJAX UI components.",
      techStack: ["PHP", "MySQL", "AJAX", "JavaScript", "HTML5", "CSS3"],
      category: "Web Development",
      githubUrl: "https://github.com/Ashin44-E/Jobsadawiya--Online-Job-Portal",
      imageUrl: "/images/jobsadawiya.jpg"
    },
    {
      id: "habit-tracker",
      title: "Habit Tracker & Mood Journal Mobile App",
      description: "Interactive mobile application for tracking daily habits, logging moods with emojis, and receiving hydration notifications.",
      longDescription: "Built with a clean Android UI, this mobile application helps users maintain positive daily routines. Incorporates notification reminders, persistent offline data saving, custom home screen widgets, and interactive mood analytics.",
      techStack: ["Kotlin", "RecyclerView", "SharedPreferences", "Android Notifications", "Widgets"],
      category: "Other",
      githubUrl: "https://github.com",
      imageUrl: "/images/habittracker.jpg"
    }
  ] as Project[],
  education: [
    {
      degree: "BSc (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      duration: "2023 - Present",
      gpa: "3.5 / 4.00 (Current)",
      coursework: [        
        "Object-Oriented Programming (Java)",
        "Database Management Systems (SQL & MySQL)",
        "Data Structures & Algorithms",
        "Web Application Development",
        "Mobile Application Development",
        "Software Engineering",
        "Cloud Computing"
      ]
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Esoft Metro Campus",
      duration: "2018",
      coursework: [
        "Programming Fundamentals",
        "Systems Analysis & Design",
        "Web Design (HTML, CSS, JS)",
        "Database Systems (MySQL)"
      ]
    }
  ] as EducationEntry[],
  certifications: [
    {
      name: "Cambridge English (Entry Level) Certificate (KET)",
      issuer: "Council of Europe - Level A2"
    },
    {
      name: "Diploma in IT",
      issuer: "Esoft Metro Campus",
    },
    {
      name: "IT Essentials",
      issuer: "Cisco Networking Academy",
    },
    {
      name: "Network Essentials",
      issuer: "Cisco Networking Academy",
    },
    {
      name: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
    }
  ] as CertificationEntry[],
  experience: [
    {
      position: "Full Stack Developer (CeylonLeaf)",
      organization: "Academic Group Project",
      duration: "3 Months (2025)",
      description: [
        "Designed and implemented CeylonLeaf, a web-based tea plantation management application.",
        "Created RESTful APIs using Express/Node.js and managed a flexible MongoDB database schema.",
        "Integrated secure JWT user authentication and automated session management.",
        "Built responsive interfaces with Tailwind CSS and React, decreasing page load times."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      type: "Academic Project"
    },
    {
      position: "Database and Systems Lead (HelpAura)",
      organization: "Academic Group Project",
      duration: "3 Months (2025)",
      description: [
        "Co-designed a secure customer helpdesk database in MySQL to store user data and ticket information.",
        "Implemented backend request routing logic using Java Servlets and JSP views.",
        "Enabled parameterized JDBC connections to protect database transactions from SQL Injection."
      ],
      technologies: ["Java", "Servlets", "JSP", "MySQL", "JDBC"],
      type: "Academic Project"
    }
  ] as ExperienceEntry[],
  achievements: [

  ] as AchievementEntry[]
};
