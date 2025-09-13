import { useTranslation } from "react-i18next";
import { TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useResumeData } from "../context/useResumeData";
import type React from "react";

const PersonalInfo = () => {
  const { t } = useTranslation();
  const { resumeData, updateResumeData } = useResumeData();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    updateResumeData("personalInfo", {
      ...resumeData.personalInfo,
      name,
    });
  };

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const jobTitle = e.target.value;
    updateResumeData("personalInfo", {
      ...resumeData.personalInfo,
      jobTitle,
    });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const location = e.target.value;
    updateResumeData("personalInfo", {
      ...resumeData.personalInfo,
      location,
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    updateResumeData("personalInfo", {
      ...resumeData.personalInfo,
      phone,
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    updateResumeData("personalInfo", {
      ...resumeData.personalInfo,
      email,
    });
  };

  const handleLinkedinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const linkedin = e.target.value;
    updateResumeData("personalInfo", {
      ...resumeData.personalInfo,
      linkedin,
    });
  };

  const handleGitHubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const github = e.target.value;
    updateResumeData("personalInfo", {
      ...resumeData.personalInfo,
      github,
    });
  };

  const handlePersonalWebsiteChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const personalWebsite = e.target.value;
    updateResumeData("personalInfo", {
      ...resumeData.personalInfo,
      personalWebsite,
    });
  };

  return (
    <div className="d-flex flex-column align-items-center gap-2 p-3">
      <h5>{t("info.title")}</h5>
      <Row>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.name")}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleNameChange(e);
            }}
            value={resumeData.personalInfo.name}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.jobTitle")}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleJobTitleChange(e);
            }}
            value={resumeData.personalInfo.jobTitle}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.location")}
            value={resumeData.personalInfo.location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleLocationChange(e);
            }}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.phone")}
            value={resumeData.personalInfo.phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handlePhoneChange(e);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.email")}
            value={resumeData.personalInfo.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleEmailChange(e);
            }}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.linkedin")}
            value={resumeData.personalInfo.linkedin}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleLinkedinChange(e);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.github")}
            value={resumeData.personalInfo.github}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleGitHubChange(e);
            }}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextField
            className="m-1"
            id="outlined-required"
            label={t("info.personalWebsite")}
            value={resumeData.personalInfo.personalWebsite}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handlePersonalWebsiteChange(e);
            }}
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
