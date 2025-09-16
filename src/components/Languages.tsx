import { TextField } from "@mui/material";
import { useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useResumeData } from "../context/useResumeData";
import type { Language } from "../types/Language";
import ErrorToast from "./toasts/ErrorToast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Languages = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const { resumeData, updateResumeData } = useResumeData();
  const [showErrorToast, setShowErrorToast] = useState(false);

  function handleAddLanguage() {
    const language: Language = { name, level };

    if (name && level) {
      updateResumeData("languages", [...resumeData.languages, language]);

      // clear text fields
      setName("");
      setLevel("");
    } else {
      setShowErrorToast(true);
    }
  }

  function handleDeleteLanguage(language: Language) {
    updateResumeData(
      "languages",
      resumeData.languages.filter((l) => l !== language)
    );
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2 p-3">
      <ErrorToast
        show={showErrorToast}
        onClose={() => setShowErrorToast(false)}
        message={t("error.fillAllFields")}
      />
      <h5>{t("languages.title")}</h5>
      <TextField
        label={t("languages.languageName")}
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label={t("languages.languageLevel")}
        className="form-control"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />
      <button className="btn btn-second" onClick={handleAddLanguage}>
        {t("languages.add")}
      </button>
      <Row className="mt-3">
        <Col>
          <Link to={"/projects"} className="btn-link m-2">
            {`<< ${t("projects.title")}`}
          </Link>
        </Col>
      </Row>

      {/* Skills List */}
      <div className="mt-2 w-100">
        <ListGroup className="m-3">
          {resumeData.languages.map((language) => (
            <ListGroup.Item className="list-element">
              <div className="d-flex justify-content-between gap-1">
                <div className="">
                  <h6>{language.name}</h6>
                  <p>{language.level}</p>
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
                        handleDeleteLanguage(language);
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

export default Languages;
