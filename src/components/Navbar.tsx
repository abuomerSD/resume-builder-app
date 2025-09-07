import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FormControlLabel, Switch } from "@mui/material";

function NavBar() {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";

  const handleChangeLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <Navbar expand="lg" className="nbar">
      <Container>
        <Navbar.Brand href="#home">
          <Link to={"/"} className="link">
            {t("title")}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/summary"} className="link">
                {t("summary.title")}
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/education"} className="link">
                {t("education.title")}
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/certifications"} className="link">
                {t("certifications.title")}
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/experience"} className="link">
                {t("experience.title")}
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/skills"} className="link">
                {t("skills.title")}
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/projects"} className="link">
                {t("projects.title")}
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/languages"} className="link">
                {t("languages.title")}
              </Link>
            </Nav.Link>
            <FormControlLabel
              control={
                <Switch checked={isArabic} onChange={handleChangeLanguage} />
              }
              label={isArabic ? "العربية" : "English"}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
