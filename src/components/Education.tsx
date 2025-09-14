import { TextField } from "@mui/material";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useResumeData } from "../context/useResumeData";
import { useState } from "react";
import type { Education } from "../types/Education";
import ErrorToast from "./toasts/ErrorToast";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = () => {
  const { t } = useTranslation();
  const { resumeData, updateResumeData } = useResumeData();
  const [school, setSchool] = useState("");
  const [year, setYear] = useState("");
  const [degree, setDegree] = useState("");
  const [showErrorToast, setShowErrorToast] = useState(false);

  function handleAddEducation(): void {
    if (school && year && degree) {
      const education: Education = {
        school,
        year,
        degree,
      };
      updateResumeData("education", [...resumeData.education, education]);

      // clear the text fields
      setSchool("");
      setDegree("");
      setYear("");
    } else {
      setShowErrorToast(true);
    }
  }

  function handleDeleteEducation(education: Education) {
    const educationList = resumeData.education.filter((ed) => {
      return education !== ed;
    });
    updateResumeData("education", educationList);
  }

  return (
    <div className="d-flex flex-column align-items-center p-3">
      <ErrorToast
        show={showErrorToast}
        message={t("error.fillAllFields")}
        onClose={() => {
          setShowErrorToast(false);
        }}
      />
      <h5>{t("education.title")}</h5>
      <Row className="m-2">
        <Col xs={12} md={6} className="mt-2 ml-2">
          <TextField
            label={t("education.school")}
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField
            label={t("education.year")}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField
            label={t("education.degree")}
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <button className="btn btn-second" onClick={handleAddEducation}>
          {t("education.add")}
        </button>
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

      {/* Education List */}
      <div className="m-2 w-100">
        <ListGroup className="m-3">
          {resumeData.education.map((education) => (
            <ListGroup.Item className="list-element">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <h6>{education.school}</h6>
                  <p>{education.degree}</p>
                  <p>{education.year}</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-danger cursor-pointer"
                    onClick={() => {
                      handleDeleteEducation(education);
                    }}
                  />
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Experience;
