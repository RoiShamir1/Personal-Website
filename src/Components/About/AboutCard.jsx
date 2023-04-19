import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roi Shamir </span>
            from <span className="purple"> Israel.</span>
            <br />A 22, released combat soldier, an enthusiastic and proficient programmer with a drive to craft top-notch software. I am thrilled to
            announce that I am currently exploring new possibilities to collaborate with an innovative and dynamic team of experts in the software
            development industry. I recently completed a 10-month track in Software Development (Web) at Sela College in soldiers to High-Tech
            program, where I gained valuable knowledge and experience in programming languages such as C#, JavaScript, TypeScript, Node Js, HTML, CSS,
            and SQL.
            <br />
          </p>
          <p style={{ color: "rgb(82 426 172)" }}>"Believe you can and you're halfway there." </p>
          <footer className="blockquote-footer">Theodore Roosevelt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
