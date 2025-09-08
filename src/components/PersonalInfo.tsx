import { useTranslation } from "react-i18next";
import { TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column align-items-center gap-2">
      <h5 className="mt-2">{t("info.title")}</h5>
      <Row>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.name")}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.jobTitle")}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.location")}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.phone")}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.email")}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.linkedin")}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.github")}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.personalWebsite")}
          />
        </Col>
      </Row>
      <Link to={"/summary"} className="btn-link">
        {`${t("summary.title")} >>`}
      </Link>
    </div>
  );
};

export default PersonalInfo;
