import { TextField } from "@mui/material";
import { useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useResumeData } from "../context/useResumeData";
import ErrorToast from "./toasts/ErrorToast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import type { Skill } from "../types/Skill";

const Skills = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { updateResumeData, resumeData } = useResumeData();
  const [showErrorToast, setShowErrorToast] = useState(false);

  function handleAddSkill() {
    const skill = { category, description };
    if (category && description) {
      updateResumeData("skills", [...resumeData.skills, skill]);
      // clear the text fields
      setCategory("");
      setDescription("");
    } else {
      setShowErrorToast(true);
    }
  }

  function handleDeleteSkill(skill: Skill) {
    updateResumeData(
      "skills",
      resumeData.skills.filter((s) => s !== skill)
    );
  }

  return (
    <div className="d-flex flex-column align-items-center gap-2 p-3">
      <ErrorToast
        show={showErrorToast}
        onClose={() => setShowErrorToast(false)}
        message={t("error.fillAllFields")}
      />
      <h5>{t("skills.title")}</h5>
      <TextField
        label={t("skills.skillCategory")}
        className="form-control"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <textarea
        className="skill form-control m-2"
        placeholder={t("skills.description")}
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button className="btn btn-second" onClick={handleAddSkill}>
        {t("skills.add")}
      </button>
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

      {/* Skills List */}
      <div className="mt-2 w-100">
        <ListGroup className="m-3">
          {resumeData.skills.map((skill) => (
            <ListGroup.Item className="list-element">
              <div className="d-flex justify-content-between gap-1">
                <div className="">
                  <h6>{skill.category}</h6>
                  <p>{skill.description}</p>
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
                        handleDeleteSkill(skill);
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

export default Skills;
