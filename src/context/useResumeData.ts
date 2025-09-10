import { useContext } from "react";
import { ResumeDataContext } from "./ResumeDataContext";

export const useResumeData = () => {
  const context = useContext(ResumeDataContext);
  if (!context) {
    throw new Error("useResumeData must be used inside ResumeDataProvider");
  }
  return context;
};
