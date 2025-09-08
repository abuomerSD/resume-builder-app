import { TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column align-items-center">
      <h5 className="mt-2">{t("certifications.title")}</h5>
      <Row className="m-2">
        <Col xs={12} md={6} className="mt-2 ml-2">
          <TextField label={t("certifications.school")} />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField label={t("certifications.year")} />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField label={t("certifications.link")} />
        </Col>
      </Row>
      <Row>
        <button className="btn btn-second">{t("certifications.add")}</button>
      </Row>
      <Row className="mt-3">
        <Col>
          <Link to={"/education"} className="btn-link m-2">
            {`<< ${t("education.title")}`}
          </Link>
          <Link to={"/experience"} className="btn-link">
            {`${t("experience.title")} >>`}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Certifications;
