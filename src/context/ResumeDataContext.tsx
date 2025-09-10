import { createContext } from "react";
import type { ResumeData } from "../types/ResumeData";

export interface ResumeDataContextType {
  resumeData: ResumeData;
  updateResumeData: <K extends keyof ResumeData>(
    section: K,
    value: ResumeData[K]
  ) => void;
  resetResumeData: () => void;
}

export const ResumeDataContext = createContext<
  ResumeDataContextType | undefined
>(undefined);
