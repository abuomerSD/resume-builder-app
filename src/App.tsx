import { useEffect } from "react";
import NavBar from "./components/Navbar";
import ResumeBuilder from "./pages/ResumeBuilder";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    window.document.dir = i18n.dir();
  });
  return (
    <>
      <NavBar />
      <ResumeBuilder />
    </>
  );
}

export default App;
