import { TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Languages = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2 p-3">
      <h5>{t("languages.title")}</h5>
      <TextField label={t("languages.languageName")} className="form-control" />
      <TextField
        label={t("languages.languageLevel")}
        className="form-control"
      />
      <button className="btn btn-second">{t("languages.add")}</button>
      <Row className="mt-3">
        <Col>
          <Link to={"/projects"} className="btn-link m-2">
            {`<< ${t("projects.title")}`}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Languages;
