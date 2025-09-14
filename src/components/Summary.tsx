import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import type { ChangeEvent } from "react";
import { useResumeData } from "../context/useResumeData";

const Summary = () => {
  const { t } = useTranslation();
  const { resumeData, updateResumeData } = useResumeData();

  function handleSummaryChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const summary = e.target.value;
    updateResumeData("summary", summary);
  }

  return (
    <div className="summary d-flex flex-column align-items-center gap-2 p-3">
      <h5>{t("summary.title")}</h5>
      <textarea
        name="summary"
        id="summary"
        className=" form-control  w-100 h-25 p-2"
        rows={10}
        placeholder={t("summary.title")}
        value={resumeData.summary}
        onChange={(e) => {
          handleSummaryChange(e);
        }}
      ></textarea>
      <Row>
        <Col>
          <Link to={"/personal-info"} className="btn-link m-2">
            {`<< ${t("info.title")}`}
          </Link>
          <Link to={"/education"} className="btn-link">
            {`${t("education.title")} >>`}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Summary;
