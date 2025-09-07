import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h5>{t("projects.title")}</h5>
    </div>
  );
};

export default Projects;
