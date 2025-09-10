import { useEffect, useState, type ReactNode } from "react";
import type { ResumeData } from "../types/ResumeData";
import { ResumeDataContext } from "./ResumeDataContext";

// Default data
const defaultResumeData: ResumeData = {
  personalInfo: {
    email: "",
    github: "",
    jobTitle: "",
    linkedin: "",
    location: "",
    name: "",
    personalWebsite: "",
    phone: "",
  },
  summary: "",
  education: [],
  certifications: [],
  experience: [],
  skills: [],
  projects: [],
  languages: [],
};

export const ResumeDataProvider = ({ children }: { children: ReactNode }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    try {
      const saved = localStorage.getItem("resumeData");
      return saved ? (JSON.parse(saved) as ResumeData) : defaultResumeData;
    } catch {
      return defaultResumeData;
    }
  });

  // Save to localStorage whenever resumeData changes
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  const updateResumeData = <K extends keyof ResumeData>(
    section: K,
    value: ResumeData[K]
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const resetResumeData = () => {
    setResumeData(defaultResumeData);
    localStorage.removeItem("resumeData");
  };

  return (
    <ResumeDataContext.Provider
      value={{ resumeData, updateResumeData, resetResumeData }}
    >
      {children}
    </ResumeDataContext.Provider>
  );
};
