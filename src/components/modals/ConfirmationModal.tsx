import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";

interface ConfirmationModalProps {
  title: string;
  body: string;
  okButtonText: string;
  show: boolean;
  onHide: () => void;
  handler: () => void;
  handleClose: () => void;
}

function ConfirmationModal(props: ConfirmationModalProps) {
  const { t } = useTranslation();
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.body}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            {t("modals.close")}
          </Button>
          <Button variant="danger" onClick={props.handler}>
            {props.okButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConfirmationModal;
