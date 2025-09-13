import { useResumeData } from "../../context/useResumeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Template1 = () => {
  const { resumeData } = useResumeData();
  return (
    <div className="template1 p-3">
      {/* Personal Info Start */}
      <div className="d-flex justify-content-center">
        <h5>{resumeData.personalInfo.name}</h5>
      </div>
      <div className="d-flex justify-content-center">
        <h6>{resumeData.personalInfo.jobTitle}</h6>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="paragraph">{resumeData.personalInfo.location}</p>
        </div>
        <div className="d-flex gap-2">
          <FontAwesomeIcon icon={faPhone} />
          <p className="paragraph">{resumeData.personalInfo.phone}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2">
          <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a
            className="paragraph"
            href={resumeData.personalInfo.linkedin}
            target="_blank"
          >
            {resumeData.personalInfo.linkedin}
          </a>
        </div>
        <div className="d-flex gap-2 paragraph">
          <FontAwesomeIcon icon={faGithub} />
          <p className="paragraph">{resumeData.personalInfo.github}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2">
          <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a
            className="paragraph"
            href={resumeData.personalInfo.linkedin}
            target="_blank"
          >
            {resumeData.personalInfo.linkedin}
          </a>
        </div>
        <div className="d-flex gap-2 paragraph">
          <FontAwesomeIcon icon={faGithub} />
          <p className="paragraph">{resumeData.personalInfo.github}</p>
        </div>
      </div>
      {/* Personal Info End */}
      <hr />
    </div>
  );
};

export default Template1;
