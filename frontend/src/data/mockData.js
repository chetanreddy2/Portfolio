// Mock data for portfolio - will be replaced with backend later

export const personalInfo = {
  name: "M Chetan Reddy",
  title: "Computer Science & Engineering Student",
  tagline: "Building innovative solutions with code",
  bio: "A highly motivated and detail-oriented Computer Science and Engineering student, seeking an opportunity to apply skills in Data Structures, Algorithms, and core computing principles to solve real-world problems. Eager to contribute to innovative projects while continuously learning and growing in the field of technology.",
  email: "mchetanreddy2@gmail.com",
  phone: "+91-9346962232",
  github: "https://github.com/chetanreddy2",
  linkedin: "https://linkedin.com/in/chetan-reddy",
  resumeUrl: "/assets/resume.pdf"
};

export const skills = {
  technical: [
    { name: "Python", category: "Programming" },
    { name: "SQL", category: "Programming" },
    { name: "Java", category: "Programming" },
    { name: "HTML", category: "Web Development" },
    { name: "CSS", category: "Web Development" },
    { name: "React", category: "Web Development" },
    { name: "Data Structures", category: "Concepts" },
    { name: "Algorithms", category: "Concepts" },
    { name: "OOP", category: "Concepts" },
    { name: "YOLOv5", category: "AI/ML" },
    { name: "OpenCV", category: "AI/ML" }
  ],
  soft: [
    "Effective Communication",
    "Problem Solving",
    "Teamwork",
    "Time Management",
    "Adaptability"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Obstacle Recognition for Autonomous Vehicles",
    subtitle: "AI and LiDAR Integration",
    description: "Developed a real-time obstacle detection system using YOLOv5 and OpenCV to identify and track vehicles, pedestrians, and roadblocks. Integrated depth estimation and object tracking to assist safe navigation for autonomous vehicles.",
    technologies: ["Python", "YOLOv5", "OpenCV", "LiDAR", "AI/ML"],
    github: "https://github.com/chetanreddy2",
    highlights: [
      "Real-time object detection and tracking",
      "Depth estimation for safe navigation",
      "Multi-class detection (vehicles, pedestrians, roadblocks)"
    ]
  },
  {
    id: 2,
    title: "Online Bus Ticket Booking System",
    subtitle: "Full-Stack Web Application",
    description: "Developed a simple and user-friendly bus ticket booking platform using Java for the backend and HTML/CSS for the frontend. The system enables users to search, book, and cancel tickets online, streamlining the overall process.",
    technologies: ["Java", "HTML", "CSS", "Database"],
    github: "https://github.com/chetanreddy2",
    highlights: [
      "User-friendly booking interface",
      "Search and filter functionality",
      "Ticket cancellation system",
      "Reduced manual errors in booking process"
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Jain (Deemed-to-be) University, Bengaluru",
    duration: "2022 - 2026 (Expected)",
    grade: "CGPA: 7.5"
  },
  {
    degree: "Intermediate (12th)",
    institution: "Narayana Junior College, Tirupati",
    duration: "2020 - 2022",
    grade: "86%"
  },
  {
    degree: "Secondary (10th)",
    institution: "Sri Chaitanya High School, Tirupati",
    duration: "2019 - 2020",
    grade: "96%"
  }
];

export const certifications = [
  {
    name: "Linux Fundamentals",
    issuer: "Coursera",
    year: "2024"
  },
  {
    name: "Introduction to Java",
    issuer: "Coursera",
    year: "2024"
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    year: "2023"
  }
];
