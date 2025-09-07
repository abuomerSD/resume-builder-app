import { useTranslation } from "react-i18next";

const Languages = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h5>{t("certifications.title")}</h5>
    </div>
  );
};

export default Languages;
