import { useState, type JSX } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "../components/modals/ConfirmationModal";
import { useResumeData } from "../context/useResumeData";
import DownloadResumeModal from "../components/modals/DownloadResumeModal";

const ResumeBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<"1" | "2">("1"); // restrict to "1" | "2"

  const { t } = useTranslation();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const { resetResumeData } = useResumeData();
  const templates: Record<"1" | "2", JSX.Element> = {
    "1": <Template1 />,
    "2": <Template2 />,
  };

  function deleteResumeData() {
    resetResumeData();
    setShowConfirmationModal(false);
  }

  return (
    <div className="resume-builder">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <div className="resume-data-forms">
              <Outlet />
            </div>
          </Col>
          <Col xs={12} lg={6} className="resume-preview">
            <div className="w-100 d-flex justify-content-between">
              <select
                className="p-2"
                name="templates-select"
                id="templates-select"
                value={selectedTemplate}
                onChange={(e) =>
                  setSelectedTemplate(e.target.value as "1" | "2")
                }
              >
                <option value="1">{t("templates.1")}</option>
                <option value="2">{t("templates.2")}</option>
              </select>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-danger cursor-pointer fs-5"
                  onClick={() => setShowConfirmationModal(true)}
                />
                <FontAwesomeIcon
                  icon={faDownload}
                  className="text-success cursor-pointer fs-5"
                  onClick={() => setShowDownloadModal(true)}
                />
              </div>
            </div>
            <div className="mt-2 template">{templates[selectedTemplate]}</div>
          </Col>
        </Row>

        {/* Modals */}
        <ConfirmationModal
          title={t("modals.confirmation")}
          body={t("modals.deleteAllResumeData")}
          show={showConfirmationModal}
          onHide={() => setShowConfirmationModal(false)}
          okButtonText={t("modals.delete")}
          handler={deleteResumeData}
          handleClose={() => setShowConfirmationModal(false)}
        />

        <DownloadResumeModal
          title={t("modals.download")}
          show={showDownloadModal}
          onHide={() => setShowDownloadModal(false)}
          selectedTemplate={templates[selectedTemplate]}
        />
      </Container>
    </div>
  );
};

export default ResumeBuilder;
