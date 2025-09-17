import { TextField } from "@mui/material";
import { useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useResumeData } from "../context/useResumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "../types/Project";
import ErrorToast from "./toasts/ErrorToast";

const Projects = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const { resumeData, updateResumeData } = useResumeData();
  const [showErrorToast, setShowErrorToast] = useState(false);

  function handleDeleteProject(project: Project) {
    updateResumeData(
      "projects",
      resumeData.projects.filter((p) => p !== project)
    );
  }

  function handleAddProject() {
    const project: Project = { name, link, description };
    if (name && link && description) {
      updateResumeData("projects", [...resumeData.projects, project]);

      // clear text fields
      setName("");
      setLink("");
      setDescription("");
    } else {
      setShowErrorToast(true);
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2 p-3">
      <ErrorToast
        show={showErrorToast}
        onClose={() => setShowErrorToast(false)}
        message={t("error.fillAllFields")}
      />
      <h5>{t("projects.title")}</h5>
      <TextField
        label={t("projects.projectName")}
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label={t("projects.projectLink")}
        className="form-control"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <textarea
        className="skill form-control m-2"
        placeholder={t("projects.description")}
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ resize: "none" }}
      ></textarea>
      <button className="btn btn-second" onClick={handleAddProject}>
        {t("projects.add")}
      </button>
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

      {/* Projects List */}
      <div className="mt-2 w-100">
        <ListGroup className="m-3">
          {resumeData.projects.map((project) => (
            <ListGroup.Item className="list-element">
              <div className="d-flex justify-content-between gap-1">
                <div className="">
                  <h6>{project.name}</h6>
                  <a href={project.link} target="_blank">
                    {project.link}
                  </a>
                  <p className="white-space-prewrap">{project.description}</p>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <div className="d-flex">
                    {/* <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="text-primary cursor-pointer"
                    /> */}
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-danger cursor-pointer"
                      onClick={() => {
                        handleDeleteProject(project);
                      }}
                    />
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Projects;
