import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiFileText, FiFolder, FiGithub, FiHome, FiUser } from "react-icons/fi";
import { githubUrl } from "../data/profile";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home", icon: FiHome },
  { to: "/about", label: "About", icon: FiUser },
  { to: "/projects", label: "Projects", icon: FiFolder },
  { to: "/resume", label: "Resume", icon: FiFileText },
];

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  useEffect(() => {
    if (!expanded) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expanded]);

  const close = () => setExpanded(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${expanded ? " is-open" : ""}`}>
      <Navbar expand="md" expanded={expanded} onToggle={setExpanded} variant="dark" className="site-nav">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand" onClick={close}>
            <span className="brand-mark" aria-hidden="true">
              RS
            </span>
            <span className="brand-name">
              Roi Shamir
              <span className="brand-cursor" aria-hidden="true">
                _
              </span>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="site-navigation" label={expanded ? "Close menu" : "Open menu"} className="nav-toggle">
            <span />
            <span />
            <span />
          </Navbar.Toggle>

          <Navbar.Collapse id="site-navigation">
            <ul className="navbar-nav nav-links ms-auto">
              {links.map(({ to, label, icon: Icon }) => (
                <li key={to} className="nav-item">
                  <NavLink to={to} end={to === "/"} className="nav-link" onClick={close}>
                    <Icon aria-hidden="true" />
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="nav-item nav-github">
                <a className="btn-ui btn-ui--ghost btn-ui--sm" href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FiGithub aria-hidden="true" />
                  GitHub
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
