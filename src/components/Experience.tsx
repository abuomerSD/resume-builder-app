import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column align-items-center gap-2 p-3">
      <h5>{t("experience.title")}</h5>
      <Row className="m-2">
        <Col xs={12} md={6} className="mt-2">
          <TextField label={t("experience.companyName")} />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField label={t("experience.location")} />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField label={t("experience.jobTitle")} />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <DatePicker label={t("experience.fromDate")} />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <DatePicker label={t("experience.toDate")} />
        </Col>
      </Row>
      <Row>
        <button className="btn btn-second">{t("certifications.add")}</button>
      </Row>
      <Row className="mt-3">
        <Col>
          <Link to={"/certifications"} className="btn-link m-2">
            {`<< ${t("certifications.title")}`}
          </Link>
          <Link to={"/skills"} className="btn-link">
            {`${t("skills.title")} >>`}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
