import { TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column align-items-center gap-2 p-3">
      <h5>{t("skills.title")}</h5>
      <TextField label={t("skills.skillCategory")} className="form-control" />
      <textarea
        className="skill form-control m-2"
        placeholder={t("skills.description")}
        rows={5}
      ></textarea>
      <button className="btn btn-second">{t("skills.add")}</button>
      <Row className="mt-3">
        <Col>
          <Link to={"/experience"} className="btn-link m-2">
            {`<< ${t("experience.title")}`}
          </Link>
          <Link to={"/projects"} className="btn-link">
            {`${t("projects.title")} >>`}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
