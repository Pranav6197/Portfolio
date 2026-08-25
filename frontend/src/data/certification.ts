export type Certification = {
  name: string;
  issuer: string;
  issued?: string;
  expires?: string;
  credentialId?: string;
  url: string;
  imageUrl: string;
};

export const certifications: Certification[] = [
  {
    name: "Foundation: Introduction to LangChain - Python",
    issuer: "LangChain Academy",
    issued: "August 23, 2026",
    expires: "August 22, 2028",
    credentialId: "ubywqt85gf",
    url: "https://academy.langchain.com/certificates/ubywqt85gf",
    imageUrl: "/Pranav%20Bhawari%20-%202026-08-23_page-0001.jpg",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic Education",
    url: "https://verify.skilljar.com/c/5e5bxywgopf9",
    imageUrl: "/Introduction%20to%20Model%20Context%20Protocol%20-%20Anthropic%20Education.jpg",
  },
];