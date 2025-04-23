export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  link?: string;
}

export interface CV {
  personalInfo: PersonalInfo;
  skillCategories: SkillCategory[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  certificates: Certificate[];
}
