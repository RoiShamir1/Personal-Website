import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Particle from "../Particle";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who I'm :<strong className="purple"></strong>
            </h1>
            <Aboutcard />
          </Col>
          
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skills: </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools:</strong>
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
};

export default About;
