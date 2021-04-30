import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>My Portfolio</h2>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>
          <div className="footer-link-items">
            <h2>Socials</h2>
            <a href="https://www.linkedin.com/in/dan-tyler-97296990/">
              LinkedIn
            </a>
            <a href="https://github.com/ddottyler">GitHub</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              DTPortfolio <i className="fas fa-user-astronaut" />
            </Link>
          </div>
          <div className="social-icons">
            <ExternalLink
              className="social-icon-link github"
              href="https://github.com/ddottyler"
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fab fa-github-square" />
            </ExternalLink>
            <ExternalLink
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/dan-tyler-97296990/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </ExternalLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
