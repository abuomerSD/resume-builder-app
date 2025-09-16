import { TextField } from "@mui/material";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useResumeData } from "../context/useResumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import type { Certification } from "../types/Certification";
import { useState } from "react";
import ErrorToast from "./toasts/ErrorToast";

const Certifications = () => {
  const { t } = useTranslation();
  const { resumeData, updateResumeData } = useResumeData();
  const [school, setSchool] = useState("");
  const [year, setYear] = useState("");
  const [link, setLink] = useState("");
  const [showErrorToast, setShowErrorToast] = useState(false);

  function handleDeleteCertification(certification: Certification) {
    const certifications = resumeData.certifications.filter(
      (cer) => certification !== cer
    );
    updateResumeData("certifications", certifications);
  }

  function handleAddCertification() {
    if (school && year && link) {
      updateResumeData("certifications", [
        ...resumeData.certifications,
        { school, year, link },
      ]);

      // clear text fields
      setSchool("");
      setYear("");
      setLink("");
    } else {
      setShowErrorToast(true);
    }
  }

  return (
    <div className="d-flex flex-column align-items-center p-3">
      <ErrorToast
        message={t("error.fillAllFields")}
        show={showErrorToast}
        onClose={() => {
          setShowErrorToast(false);
        }}
      />
      <h5>{t("certifications.title")}</h5>
      <Row className="m-2">
        <Col xs={12} md={6} className="mt-2 ml-2">
          <TextField
            label={t("certifications.school")}
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField
            label={t("certifications.year")}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField
            label={t("certifications.link")}
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <button className="btn btn-second" onClick={handleAddCertification}>
          {t("certifications.add")}
        </button>
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

      {/* Certifications List */}
      <div className="m-2 w-100">
        <ListGroup className="m-3">
          {resumeData.certifications.map((certification) => (
            <ListGroup.Item className="list-element">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <h6>{certification.school}</h6>
                  <p>{certification.year}</p>
                  <a
                    href={certification.link}
                    target="_blank"
                    className="text-decoration-none overflow-hidden cv-link"
                  >
                    {certification.link}
                  </a>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-danger cursor-pointer"
                    onClick={() => {
                      handleDeleteCertification(certification);
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

export default Certifications;
