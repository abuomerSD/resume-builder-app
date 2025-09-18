import type { JSX } from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
// import { Document, Packer, Paragraph, TextRun } from "docx";
// import { saveAs } from "file-saver";
import html2pdf from "html2pdf.js";

interface DownloadResumeModalProps {
  title: string;
  show: boolean;
  onHide: () => void;
  selectedTemplate: JSX.Element;
}

const DownloadResumeModal = (props: DownloadResumeModalProps) => {
  const { t } = useTranslation();
  const [format, setFormat] = useState<"docx" | "pdf">("pdf");

  const resumeRef = useRef<HTMLDivElement>(null);

  async function downloadResume() {
    if (!resumeRef.current) return;

    if (format === "pdf") {
      console.log(
        "resumeRef.current size:",
        resumeRef.current?.offsetWidth,
        resumeRef.current?.offsetHeight
      );

      html2pdf()
        .set({
          margin: 10,
          filename: `resume-${Date.now()}.pdf`,
          html2canvas: { scale: 2, useCORS: true, allowTaint: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(resumeRef.current)
        .save();
    } else if (format === "docx") {
      console.log("docx");
    }
  }

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={props.show} onHide={props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="d-flex flex-column justify-content-center align-items-center">
              {/* cv preview */}
              <div
                style={
                  {
                    // display: "none",
                    // position: "absolute",
                    // top: "-10000px",
                    // left: 0,
                    // width: "210mm",
                    // minHeight: "297mm",
                    // background: "white",
                  }
                }
                ref={resumeRef}
              >
                {props.selectedTemplate}
              </div>

              {/* select file format */}
              <select
                className="p-2 m-2"
                value={format}
                onChange={(e) => setFormat(e.target.value as "docx" | "pdf")}
              >
                <option value="docx">docx</option>
                <option value="pdf">pdf</option>
              </select>
              <Button onClick={downloadResume} variant="success">
                {t("modals.download")}
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default DownloadResumeModal;
