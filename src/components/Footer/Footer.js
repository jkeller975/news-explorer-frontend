import React from "react";
import { Link } from "react-router-dom";
import githubIcon from "../../images/Github_Logo.svg";
import fbIcon from "../../images/FB_Logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Keller, Powered by News API
      </p>
      <nav className="footer__menu">
        <a href="https://practicum.com" className="footer__menu-link">
          Home
        </a>
        <a href="https://practicum.com" className="footer__menu-link">
          Practicum
        </a>
        <img src={githubIcon} alt="GitHub" className="footer__menu-social" />
        <img src={fbIcon} alt="FaceBook" className="footer__menu-social" />
      </nav>
    </footer>
  );
}

export default Footer;
