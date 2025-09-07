import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Summary = () => {
  const { t } = useTranslation();

  return (
    <div className="summary d-flex flex-column align-items-center gap-2 m-2">
      <h5>{t("summary.title")}</h5>
      <textarea
        name="summary"
        id="summary"
        className=" form-control  w-100 h-25 p-2"
        rows={10}
      ></textarea>
      <Link to={"`/education"} className="btn-link">
        {t("education.title")}
      </Link>
      -
    </div>
  );
};

export default Summary;
