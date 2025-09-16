import { useResumeData } from "../../context/useResumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faGlobe,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

const Template1 = () => {
  const { resumeData } = useResumeData();
  const { t } = useTranslation();

  return (
    <div className="template1 p-3">
      {/* Personal Info Start */}
      <div className="d-flex justify-content-center">
        <h5>{resumeData.personalInfo.name}</h5>
      </div>
      <div className="d-flex justify-content-center">
        <h6>{resumeData.personalInfo.jobTitle}</h6>
      </div>
      <div className="d-flex justify-content-between gap-2 mt-2">
        <div className="d-flex gap-2 small-font w-50">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>{resumeData.personalInfo.location}</p>
        </div>
        <div className="d-flex gap-2 small-font w-50">
          <FontAwesomeIcon icon={faPhone} />
          <p>{resumeData.personalInfo.phone}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between gap-2">
        <div className="d-flex gap-2 small-font w-50">
          <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a
            href={resumeData.personalInfo.linkedin}
            target="_blank"
            className="cv-link"
          >
            {resumeData.personalInfo.linkedin}
          </a>
        </div>
        <div className="d-flex gap-2 small-font w-50">
          <FontAwesomeIcon icon={faGithub} />
          <a
            href={resumeData.personalInfo.github}
            target="_blank"
            className="cv-link"
          >
            {resumeData.personalInfo.github}
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between gap-2">
        <div className="d-flex gap-2 small-font w-50">
          <FontAwesomeIcon icon={faGlobe} />{" "}
          <a
            href={resumeData.personalInfo.personalWebsite}
            target="_blank"
            className="cv-link"
          >
            {resumeData.personalInfo.personalWebsite}
          </a>
        </div>
        <div className="d-flex gap-2 small-font w-50">
          <FontAwesomeIcon icon={faEnvelope} />
          <a
            href={`mailto:${resumeData.personalInfo.email}`}
            target="_blank"
            className="cv-link"
          >
            {resumeData.personalInfo.email}
          </a>
        </div>
      </div>
      {/* Personal Info End */}

      {/* Summary Start */}
      <div className="d-flex justify-content-center mt-3">
        <h6>{t("summary.title")}</h6>
      </div>
      <hr />
      <div className="paragraph mt-2">{resumeData.summary}</div>
      {/* Summary End */}

      {/* Education Start */}
      <div className="d-flex justify-content-center mt-3">
        <h6>{t("education.title")}</h6>
      </div>
      <hr />
      {resumeData.education.map((education) => (
        <>
          <div className="d-flex justify-content-between mt-2">
            <strong className="small-font">{education.school}</strong>
            <strong className="small-font">{education.year}</strong>
          </div>
          <div>
            <p className="small-font">{education.degree}</p>
          </div>
        </>
      ))}
      {/* Education End */}

      {/* Certifications Start */}
      <div className="d-flex justify-content-center mt-3">
        <h6>{t("certifications.title")}</h6>
      </div>
      <hr />
      {resumeData.certifications.map((certification) => (
        <>
          <div className="d-flex justify-content-between mt-2">
            <strong className="small-font">{certification.school}</strong>
            <strong className="small-font">{certification.year}</strong>
          </div>
          <div className="certification-link">
            <a className="small-font" href={certification.link} target="_blank">
              {certification.link}
            </a>
          </div>
        </>
      ))}
      {/* Certifications End */}

      {/* Experience Start */}
      <div className="d-flex justify-content-center mt-3">
        <h6>{t("experience.title")}</h6>
      </div>
      <hr />
      {resumeData.experience.map((exp) => (
        <>
          <div className="d-flex justify-content-between mt-2">
            <strong className="small-font">{exp.companyName}</strong>
            <strong className="small-font">{exp.location}</strong>
          </div>
          <div className="small-font d-flex justify-content-between">
            <p>{exp.jobTitle}</p>
            <p>{`${
              exp.fromDate ? dayjs(exp.fromDate).format("DD/MM/YYYY") : ""
            } - ${
              exp.toDate ? dayjs(exp.toDate).format("DD/MM/YYYY") : ""
            }`}</p>
          </div>
          <div className="mt-1">
            <p className="small-font white-space-prewrap">{exp.description}</p>
          </div>
        </>
      ))}
      {/* Experience End */}

      {/* Skills Start */}
      <div className="d-flex justify-content-center mt-3">
        <h6>{t("skills.title")}</h6>
      </div>
      <hr />
      {resumeData.skills.map((skill) => (
        <>
          <div className="d-flex small-font">
            <strong>{skill.category}:</strong>
            <p className="ms-1">{skill.description}</p>
          </div>
        </>
      ))}
      {/* Skills End */}

      {/* Projects Start */}
      <div className="d-flex justify-content-center mt-3">
        <h6>{t("projects.title")}</h6>
      </div>
      <hr />
      {resumeData.projects.map((project) => (
        <>
          <div className="small-font">
            <strong>{project.name}</strong>
            <p className="white-space-prewrap">{project.description}</p>
            <div className="d-flex">
              <p className="me-1">{t("projects.link")}:</p>
              <a href={project.link} target="_blank">
                {project.link}
              </a>
            </div>
          </div>
        </>
      ))}
      {/* Projects End */}

      {/* Languages Start */}
      <div className="d-flex justify-content-center mt-3">
        <h6>{t("languages.title")}</h6>
      </div>
      <hr />
      {resumeData.languages.map((language) => (
        <>
          <div className="small-font d-flex">
            <strong>{language.name}:</strong>
            <p className="ms-1">{language.level}</p>
          </div>
        </>
      ))}
      {/* Languages End */}
    </div>
  );
};

export default Template1;
