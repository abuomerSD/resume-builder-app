import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
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
            <img src="logo.svg" alt="logo" className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/personal-info"} className="link navbar-link">
              {t("info.title")}
            </NavLink>
            <NavLink to={"/summary"} className="link navbar-link">
              {t("summary.title")}
            </NavLink>
            <NavLink to={"/education"} className="link navbar-link">
              {t("education.title")}
            </NavLink>
            <NavLink to={"/certifications"} className="link navbar-link">
              {t("certifications.title")}
            </NavLink>
            <NavLink to={"/experience"} className="link navbar-link">
              {t("experience.title")}
            </NavLink>
            <NavLink to={"/skills"} className="link navbar-link">
              {t("skills.title")}
            </NavLink>
            <NavLink to={"/projects"} className="link navbar-link">
              {t("projects.title")}
            </NavLink>
            <NavLink to={"/languages"} className="link navbar-link me-2">
              {t("languages.title")}
            </NavLink>{" "}
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
