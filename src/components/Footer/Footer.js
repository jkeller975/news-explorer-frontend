import React from "react";
import githubIcon from "../../images/Github_Logo.svg";
import fbIcon from "../../images/FB_Logo.svg";

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
        <a
          href="https://practicum.com"
          rel="noreferrer"
          target="_blank"
          className="footer__menu-link"
        >
          Practicum
        </a>
        <a
          href="https://github.com/jkeller975"
          rel="noreferrer"
          target="_blank"
        >
          <img src={githubIcon} alt="GitHub" className="footer__menu-social" />
        </a>
        <a
          href="https://www.facebook.com/josh.keller.3994"
          rel="noreferrer"
          target="_blank"
        >
          <img src={fbIcon} alt="FaceBook" className="footer__menu-social" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
