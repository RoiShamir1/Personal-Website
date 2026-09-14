import React from "react";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import WindowBar from "./Common/WindowBar";
import { usePageTitle } from "../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("Page not found");
  const { pathname } = useLocation();

  return (
    <Container className="page">
      <div className="panel notfound">
        <WindowBar title="bash — 404" />
        <div className="notfound-body">
          <p className="notfound-cmd">
            <span>$</span> curl -I {pathname}
          </p>
          <p className="notfound-status">HTTP/2 404 · route not found</p>
          <h1 className="notfound-title">This page doesn't exist.</h1>
          <p className="notfound-text">The link may be broken, or the page may have moved.</p>
          <Link className="btn-ui btn-ui--primary" to="/">
            <FiHome aria-hidden="true" />
            cd ~ (back home)
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
