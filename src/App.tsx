import { type ReactNode, useEffect } from "react";
import NavBar from "./components/Navbar";
import ResumeBuilder from "./pages/ResumeBuilder";
import { useTranslation } from "react-i18next";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type AppProps = {
  children?: ReactNode;
};

function App({ children }: AppProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n.language, i18n]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NavBar />
      <ResumeBuilder />
      {children}
    </LocalizationProvider>
  );
}

export default App;
