import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { useTranslation } from "react-i18next";
import type { ToastProps } from "../../types/ToastProps";
const ErrorToast = (props: ToastProps) => {
  const { t } = useTranslation();

  return (
    <div className="toast-container">
      <Row>
        <Col xs={6}>
          <Toast
            onClose={props.onClose}
            show={props.show}
            bg="danger"
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{t("error.title")}</strong>
            </Toast.Header>
            <Toast.Body className="text-white">{props.message}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export default ErrorToast;
