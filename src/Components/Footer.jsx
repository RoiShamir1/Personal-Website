import React from "react";
import Container from "react-bootstrap/Container";
import SocialLinks from "./Common/SocialLinks";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <p className="footer-copy">© {year} Roi Shamir · Built with React, deployed on Vercel</p>
        <p className="footer-status">
          <span className="status-dot" aria-hidden="true" />
          all systems operational
        </p>
        <SocialLinks />
      </Container>
    </footer>
  );
};

export default Footer;
