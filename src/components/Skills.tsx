import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h5>{t("skills.title")}</h5>
    </div>
  );
};

export default Skills;
