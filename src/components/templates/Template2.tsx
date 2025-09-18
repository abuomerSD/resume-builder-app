import { useTranslation } from "react-i18next";

const Template2 = () => {
  const { t } = useTranslation();
  return (
    <div className="d-flex justify-content-center align-items-center">
      {t("general.developing")}
    </div>
  );
};

export default Template2;
