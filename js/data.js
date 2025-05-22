// Skills
export const skills = [
  {
    category: "Programming Languages",
    experience: "Proficient in Python, C++, Java, and JavaScript",
    skillsList: [
      { name: "Python", percentage: 100 },
      { name: "C++", percentage: 95 },
      { name: "C", percentage: 90 },
      { name: "Java", percentage: 85 },
      { name: "JavaScript", percentage: 85 },
      { name: "SQL", percentage: 80 },
      { name: "Assembly Basics", percentage: 70 }
    ]
  },
  {
    category: "CS Foundations & Algorithms",
    experience: "Strong grasp of core computer science principles",
    skillsList: [
      { name: "Set Theory", percentage: 90 },
      { name: "Discrete Math", percentage: 90 },
      { name: "Big-O Analysis", percentage: 85 },
      { name: "Greedy Algorithms", percentage: 80 },
      { name: "Probability", percentage: 75 }
    ]
  },
  {
    category: "Frameworks & Tools",
    experience: "Experienced with common development platforms",
    skillsList: [
      { name: "Flask", percentage: 90 },
      { name: "Docker", percentage: 80 },
      { name: "Git", percentage: 95 },
      { name: "GitHub", percentage: 90 },
      { name: "GitLab", percentage: 90 },
      { name: "SQLAlchemy", percentage: 85 },
      { name: "Anaconda", percentage: 80 },
      { name: "Firebase", percentage: 75 },
      { name: "VS Code", percentage: 100 }
    ]
  },
  {
    category: "Workflow & Testing",
    experience: "Agile practices and test methodologies",
    skillsList: [
      { name: "Agile Development", percentage: 95 },
      { name: "Scrum", percentage: 90 },
      { name: "Daily Standups", percentage: 85 },
      { name: "Sprint Review", percentage: 85 },
      { name: "Retrospective", percentage: 85 },
      { name: "User Stories", percentage: 90 },
      { name: "Unit Tests", percentage: 85 },
      { name: "End-to-End Testing", percentage: 80 },
      { name: "Trello", percentage: 85 },
      { name: "Jira", percentage: 85 },
      { name: "Microsoft Teams", percentage: 80 }
    ]
  },
  {
    category: "Security Knowledge",
    experience: "Relevant to Information Security coursework",
    skillsList: [
      { name: "AES Ciphers", percentage: 85 },
      { name: "Encryption Algorithms", percentage: 85 },
      { name: "MVC Pattern", percentage: 80 }
    ]
  }
];

// Projects
export const projects = [
  {
    title: "Stock Market Exchange Analysis App",
    description: "Developed a full-stack stock analysis platform using Flask and JavaScript. Integrated real-time data from Yahoo Finance and Alpha Vantage APIs. Implemented auto-refresh updates and stored user preferences with SQLAlchemy + SQLite.",
    tech: "Flask, Python, JavaScript, SQLAlchemy, SQLite, APIs",
    category: "Python",
    link: "#"
  },
  {
    title: "Restaurant Management System",
    description: "A full-stack restaurant management system built using React and Flask. Includes role-based access with JWT, payment integration via Stripe, and features like 'Call Waiter', dynamic allergen tagging, and a modular menu system.",
    tech: "React, Flask, SQLite, JWT, Stripe",
    category: "Javascript",
    link: "https://github.com/Wshmaalii/Restaurant_Management"
  }
];

// Qualifications
export const qualifications = [
  {
    type: 'school',
    date: "2023 – 2026",
    title: "BSc Computer Science (Information Security)",
    institution: "Royal Holloway, University of London",
    description: "Coursework: Computer & Network Security, Algorithms & Complexity, Operating Systems, OOP, Databases, Machine Fundamentals, Software Engineering, Mathematics for CS."
  },
  {
    type: 'school',
    date: "Dec 2024 – Mar 2025",
    title: "Google Data Analytics Certification",
    institution: "Google",
    description: "Proficiency in SQL, data validation, and large dataset analysis. Built workflows for data cleaning, preparation, and visualization."
  },
  {
    type: 'work',
    date: "Sep 2022 – Mar 2023",
    title: "Math Tutor",
    institution: "Private Tutoring",
    description: "Delivered 1:1 and group sessions in algebra, calculus, and statistics. Created custom study plans and improved student exam performance."
  },
  {
    type: 'work',
    date: "Sep 2022 – Mar 2023",
    title: "IT Support Assistant",
    institution: "Oasis International School",
    description: "Provided tech support for students and staff. Managed device issues, user accounts, classroom tech setup, and network troubleshooting."
  }
];
