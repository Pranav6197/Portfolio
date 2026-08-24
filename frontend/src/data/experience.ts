export type ExperienceItem = {
  role: string;
  company: string;
  product?: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  tech: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "Backend Developer Intern",
    company: "Codewits Solutions Pvt. Ltd.",
    product: "Perimeters.io a.k.a  WatchGuard Cloud Detection and Response (CloudDR)",
    period: "Dec 2025 — May 2026",
    location: "Baner, Pune",
    type: "Internship",
    highlights: [
      "Architected and maintained scalable backend services and REST APIs using TypeScript, Node.js, MongoDB, and AWS Lambda, contributing to a microservices architecture for cloud-based SaaS workflows.",
      "Increased backend test coverage from ~45% to ~80%, reducing regression defects during testing by approximately 30% through Jest unit testing, Postman API validation, and structured Bitbucket code reviews.",
      "Improved average API response time from approximately 600 ms to 350 ms by implementing pagination, optimized database queries, and efficient data retrieval strategies.",
      "Collaborated in an agile team to deliver secure, production-ready features with a focus on performance, maintainability, and clean architecture.",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "AWS Lambda",
      "AWS SQS",
      "Docker",
      "Jest",
      "Postman",
      "Bitbucket",
    ],
  },
];
