import type { Certification } from "./Certification";
import type { Education } from "./Education";
import type { Experience } from "./Experience";
import type { Language } from "./Language";
import type { Project } from "./Project";
import type { Skill } from "./Skill";

export interface ResumeData {
  personalInfo: {
    name: string;
    jobTitle: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    personalWebsite: string;
  };

  summary: string;
  education: Education[];
  certifications: Certification[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  languages: Language[];
}
