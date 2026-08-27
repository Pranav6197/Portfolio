export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["JavaScript", "TypeScript", "C | C++", "Python", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: "layout",
    skills: ["React.js", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs ",
      "Microservices Architecture",
    ],
  },
  {
    title: "Databases & ORMs",
    icon: "database",
    skills: ["MongoDB", "MySQL", "Mongoose","NoSQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS (Lambda, S3, EC2, SQS)", "Docker", "CI/CD Pipelines"],
  },
  {
    title: "Tools & Practices",
    icon: "wrench",
    skills: [
      "Git & GitHub",
      "Bitbucket",
      "Postman API Testing",
      "Jest Testing",
      "VS Code",
      "Agile Development",
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
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "Problem Solving",
    ],
  },
];
