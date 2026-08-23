export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["JavaScript 🚀", "TypeScript ⚡", "C | C++", "Python 🐍", "SQL 📊"],
  },
  {
    title: "Frontend Development",
    icon: "layout",
    skills: ["React.js 💎", "TypeScript", "Tailwind CSS ✨", "HTML5", "CSS3", "Responsive UI"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    skills: [
      "Node.js ⚙️",
      "Express.js 🔗",
      "REST APIs 📡",
      "JWT Authentication 🔐",
      "Role-Based Access Control",
      "Microservices Architecture",
    ],
  },
  {
    title: "Databases & ORMs",
    icon: "database",
    skills: ["MongoDB 🍃", "MySQL", "Mongoose", "Schema Design", "Query Optimization", "Indexing"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS (Lambda, S3, EC2, SQS) ☁️", "Docker 🐳", "Containerization", "CI/CD Pipelines", "AWS Cloudinary"],
  },
  {
    title: "Tools & Practices",
    icon: "wrench",
    skills: [
      "Git & GitHub 📚",
      "Bitbucket",
      "Postman API Testing 📮",
      "Jest Testing 🧪",
      "VS Code",
      "Agile Development 🔄",
      "Linux CLI",
      "Claude",
      "Gemini",
      "Cursor",
    ],
  },
  {
    title: "Computer Science Fundamentals",
    icon: "cpu",
    skills: [
      "Data Structures & Algorithms 🧠",
      "Object-Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "System Design Basics",
      "Problem Solving",
    ],
  },
];
