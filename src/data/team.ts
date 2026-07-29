export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  image?: string;
}

export const team: TeamMember[] = [
  { name: "Anthony Agbo", role: "Founder", bio: "Built a 19,000-line production system before raising external capital. Leading product vision and AI architecture." },
  { name: "Anna Esioka", role: "Chief Operating Officer", bio: "Driving operations, partnerships, and growth strategy across African startup ecosystems." },
  { name: "Ogenyi Onzi Christian", role: "Chief Financial Officer", bio: "Financial leadership, business model design, and investment strategy." },
  { name: "Enejo Sunday", role: "AI Engineer", bio: "Building intelligent agents, scoring models, and the AI orchestration layer." },
  { name: "Wireford Eshakwu", role: "Software Engineer", bio: "Core platform development, system architecture, and product engineering." },
  { name: "Ogwuche Caleb", role: "DevOps & Security Engineer", bio: "Infrastructure, deployment, security, and platform reliability." },
  { name: "Andrew Adakole", role: "Full-Stack Engineer", bio: "End-to-end product development across frontend and backend systems." },
  { name: "Opeyemi Alegbeye", role: "Backend Engineer", bio: "Backend systems, data architecture, and API development." },
  { name: "Chimcha Titus", role: "Frontend Engineer", bio: "User interface development, design systems, and frontend architecture." },
];
