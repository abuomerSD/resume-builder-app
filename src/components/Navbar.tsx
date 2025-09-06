import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="nbar">
      <Container>
        <Navbar.Brand href="#home">
          <Link to={"/"} className="link">
            Resume Builder
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/summary"} className="link">
                Summary
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/education"} className="link">
                Education
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/certifications"} className="link">
                Certifications
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/experience"} className="link">
                Experience
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/skills"} className="link">
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/projects"} className="link">
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/languages"} className="link">
                Languauges
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
