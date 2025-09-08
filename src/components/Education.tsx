import { TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column align-items-center">
      <h5 className="mt-2">{t("education.title")}</h5>
      <Row className="m-2">
        <Col xs={12} md={6} className="mt-2 ml-2">
          <TextField label={t("education.school")} />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField label={t("education.year")} />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField label={t("education.degree")} />
        </Col>
      </Row>
      <Row>
        <button className="btn btn-second">{t("education.add")}</button>
      </Row>
      <Row className="mt-3">
        <Col>
          <Link to={"/summary"} className="btn-link m-2">
            {`<< ${t("summary.title")}`}
          </Link>
          <Link to={"/certifications"} className="btn-link">
            {`${t("certifications.title")} >>`}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
