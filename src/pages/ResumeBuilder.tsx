import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const ResumeBuilder = () => {
  return (
    <div className="resume-builder">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <div className="resume-data-forms">
              <Outlet />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="resume-preview"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeBuilder;
