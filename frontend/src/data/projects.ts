export type Project = {
  id: string;
  name: string;
  summary: string;
  impact: string;
  tech: string[];
  github: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "travelgo",
    name: "Travelgo",
    summary:
      "Full-stack travel blogging platform featuring multi-image galleries, secure content creation, and comprehensive user profile management.",
    impact:
      "Engineered a complete REST API supporting authentication, authorization, content management, pagination, and filtering, reducing data retrieval overhead by approximately 40%. Integrated AWS S3 and Multer for secure cloud image storage, multi-file uploads, cover photo selection, and gallery management, reducing local storage dependency by 90%.",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "AWS S3", "AWS SQS", "AWS Lambda", "Docker", "JWT"],
    github: "https://github.com/Pranav6197/travelgo",
    demo: "https://travelgo-pearl.vercel.app/",
    featured: true,
  },
  {
    id: "healthbooker",
    name: "HealthBooker",
    summary:
      "Healthcare appointment platform supporting Patient, Doctor, and Admin workflows with appointment scheduling, approval management, and persistent MongoDB data storage.",
    impact:
      "Built and secured 20+ REST APIs using JWT authentication, role-based authorization, hashing, and server-side validation. Designed scalable MongoDB schemas and optimized database queries through indexing and efficient data retrieval, improving appointment and user-management API performance by approximately 35%.",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "JWT", "RBAC", "AWS EC2"],
    github: "https://github.com/Pranav6197/HealthBooker",
    featured: true,
  },
  {
    id: "whisper",
    name: "Whisper",
    summary:
      "Real-time messaging platform engineered with Socket.IO WebSocket for low-latency bi-directional communication and instant message delivery.",
    impact:
      "Developed and secured REST API endpoints for authentication, user management, conversations, and message history using JWT-based authentication with HTTP Only cookies. Optimized MongoDB data models, indexing strategies, and backend validation pipelines, reducing message retrieval latency by approximately 40% while improving application scalability and reliability.",
    tech: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "WebSocket", "Docker", "AWS EC2", "JWT"],
    github: "https://github.com/Pranav6197/Whisper",
    featured: true,
  },
  {
    id: "batch-simulator",
    name: "Batch Operating System Simulation",
    summary:
      "Operating systems simulation demonstrating batch processing, CPU scheduling algorithms, job queue management, and process lifecycle management.",
    impact:
      "Modeled complex CPU scheduling algorithms (FCFS, SJF, Priority Scheduling) and queue management to visualize performance trade-offs, resource utilization, and process state transitions in batch processing systems.",
    tech: ["C++", "Data Structures", "Operating Systems", "Algorithms", "CLI", "Process Management"],
    github: "https://github.com/Pranav6197/Batch-Operating-System-Simulation-",
    featured: false,
  },
];
