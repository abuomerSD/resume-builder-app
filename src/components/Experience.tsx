import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h5>{t("experience.title")}</h5>
    </div>
  );
};

export default Experience;
