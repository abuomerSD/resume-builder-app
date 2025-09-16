import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useResumeData } from "../context/useResumeData";
import ErrorToast from "./toasts/ErrorToast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import type { Experience } from "../types/Experience";

const Experience = () => {
  const { t } = useTranslation();
  const { resumeData, updateResumeData } = useResumeData();
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [fromDate, setFromDate] = useState<Dayjs | null>(dayjs());
  const [description, setDescription] = useState("");
  const [toDate, setToDate] = useState<Dayjs | null>(dayjs());
  const [showErrorToast, setShowErrorToast] = useState(false);

  function handleAddExperience(): void {
    if (companyName && location && jobTitle && fromDate && toDate) {
      updateResumeData("experience", [
        ...resumeData.experience,
        { companyName, location, jobTitle, fromDate, toDate, description },
      ]);

      // clear text fields
      setCompanyName("");
      setLocation("");
      setJobTitle("");
      setDescription("");
      setFromDate(dayjs());
      setToDate(dayjs());
    } else {
      setShowErrorToast(true);
    }
  }

  function handleDeleteExperience(experience: Experience) {
    const experiences = resumeData.experience.filter(
      (exp) => exp !== experience
    );
    updateResumeData("experience", experiences);
  }

  return (
    <div className="d-flex flex-column align-items-center gap-2 p-3">
      <ErrorToast
        show={showErrorToast}
        message={t("error.fillAllFields")}
        onClose={() => setShowErrorToast(false)}
      />
      <h5>{t("experience.title")}</h5>
      <Row className="m-2">
        <Col xs={12} md={6} className="mt-2">
          <TextField
            label={t("experience.companyName")}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField
            label={t("experience.location")}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <TextField
            label={t("experience.jobTitle")}
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <DatePicker
            label={t("experience.fromDate")}
            value={fromDate}
            onChange={(newValue) => setFromDate(newValue)}
          />
        </Col>
        <Col xs={12} md={6} className="mt-2">
          <DatePicker
            label={t("experience.toDate")}
            value={toDate}
            onChange={(newValue) => setToDate(newValue)}
          />
        </Col>
      </Row>
      <div className="w-100 p-3">
        <textarea
          name="description"
          id="description"
          className="form-control description w-100 p-2"
          rows={10}
          placeholder={t("experience.description")}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
      </div>
      <Row>
        <button className="btn btn-second" onClick={handleAddExperience}>
          {t("certifications.add")}
        </button>
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

      {/* Experience List */}
      <div className="mt-2 w-100">
        <ListGroup className="m-3">
          {resumeData.experience.map((experience) => (
            <ListGroup.Item className="list-element">
              <div className="d-flex justify-content-between gap-1">
                <div className="">
                  <h6>{experience.companyName}</h6>
                  <p>{experience.location}</p>
                  <strong>{experience.jobTitle}</strong>
                  <p>{`${
                    experience.fromDate
                      ? dayjs(experience.fromDate).format("DD/MM/YYYY")
                      : ""
                  } - ${
                    experience.toDate
                      ? dayjs(experience.toDate).format("DD/MM/YYYY")
                      : ""
                  }`}</p>
                  <p className=" mt-1 white-space-prewrap">
                    {experience.description}
                  </p>
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
                        handleDeleteExperience(experience);
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

export default Experience;
