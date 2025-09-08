import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column align-items-center gap-2">
      <h5 className="mt-2">{t("skills.title")}</h5>
    </div>
  );
};

export default Skills;
