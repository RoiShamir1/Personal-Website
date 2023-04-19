import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Images/kid_and_computer.png";
import Particle from "../Particle";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Roi Shamir :)</strong>
              </h1>

              <div class="Typewriter" data-testid="typewriter-wrapper">
                <span class="Typewriter__wrapper">A Full-Stack Developer</span>
              </div>
              <h5 className="description">
                
              </h5>

              {/* <div style={{ padding: 50, textAlign: "left" }}>
                <span class="Typewriter__wrapper">A young Software Developer</span>
                <span class="Typewriter__cursor">|</span>
              </div> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
