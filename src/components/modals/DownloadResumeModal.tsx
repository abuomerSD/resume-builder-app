import type { JSX } from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

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
      const element = resumeRef.current;
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      //   const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    } else if (format === "docx") {
      const textContent = resumeRef.current.innerText;

      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                children: [new TextRun(textContent)],
              }),
            ],
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, "resume.docx");
    }
  }

  return (
    <>
      <div style={{ display: "none" }} ref={resumeRef}>
        {props.selectedTemplate}
      </div>

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
