import { useState, type JSX } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";
import { useTranslation } from "react-i18next";

const ResumeBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<"1" | "2">("1"); // restrict to "1" | "2"

  const { t } = useTranslation();
  const templates: Record<"1" | "2", JSX.Element> = {
    "1": <Template1 />,
    "2": <Template2 />,
  };

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
            <select
              className="p-2"
              name="templates-select"
              id="templates-select"
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value as "1" | "2")}
            >
              <option value="1">{t("templates.1")}</option>
              <option value="2">{t("templates.2")}</option>
            </select>
            <div className="mt-2 template">{templates[selectedTemplate]}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeBuilder;
