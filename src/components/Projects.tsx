import { TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2 p-3">
      <h5>{t("projects.title")}</h5>
      <TextField label={t("projects.projectName")} className="form-control" />
      <TextField label={t("projects.projectLink")} className="form-control" />
      <textarea
        className="skill form-control m-2"
        placeholder={t("projects.description")}
        rows={5}
      ></textarea>
      <button className="btn btn-second">{t("projects.add")}</button>
      <Row className="mt-3">
        <Col>
          <Link to={"/skills"} className="btn-link m-2">
            {`<< ${t("skills.title")}`}
          </Link>
          <Link to={"/languages"} className="btn-link">
            {`${t("languages.title")} >>`}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
