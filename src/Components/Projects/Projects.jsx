import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import game from "../../Images/Projects/game.png";
import box from "../../Images/Projects/Box.jpg";
import library from "../../Images/Projects/library.png";
import shopAngular from "../../Images/Projects/shopAngular.png";
import website from "../../Images/Projects/website.png";
import ApiFlights from "../../Images/Projects/flightsApi.png";
import Netflix from "../../Images/Projects/Netflix.png";
import Amazon from "../../Images/Projects/Amazon.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong>Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ApiFlights}
              isBlog={false}
              title="Flights control"
              description="Server side in C# that provide an Api of flight and loggers that save entry time and departure time for 1-8 Terminals all the loggers store in SQL server and in Angular server side in localhost port 4200. To run this project go to FinalProjectClient than open cmd and write 'npm i' than write 'ng serve'. Than go to FinalProjectASP and select 'multiple startup project' and click FinalProjectASP for the first project and 'simulation' for the second project. Make sure the server is run on localhost 7097. Finally open http://localhost:4200 on your browser."
              ghLink="https://github.com/RoiShamir1/Flight-Control-Angular"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix streaming"
              description="A node js server that provide an API of movies and series and client of React that present a streaming platform like Netflix that you can sign up and watch the TV shows, In addition a search page that help you to find the movie or serie you want."
              ghLink="https://github.com/RoiShamir1/Netflix-Streaming-Platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon}
              isBlog={false}
              title="Amazon store"
              description="A node js server that provide an API of product and client of React that present an amazon store that you can sign up and purchase products the products can be sorted to lowest price and highest price."
              ghLink="https://github.com/RoiShamir1/Amazon-Store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="Movies Catalog Website"
              description="A cool movies catalog website that provide details and comments about movies and as admin you can edit and delete them."
              ghLink="https://github.com/RoiShamir1/Movies-Catalog-Website"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopAngular}
              isBlog={false}
              title="Angular Product Website"
              description="This project is a mini second hand store that everyone can sell his product by 'Add new product form' make price and some details about his product. As the buyer you can buy a product and see his full details :). To open the project open cmd on the folder you pull the project write 'npm i' to install nude_module folder and than write 'npm run server' after you did it Don't close the window, open another win of cmd of the folder and than write 'ng serve', After you did it go to your browser and write in the URL 'localhost:4200' and the project will show up."
              ghLink="https://github.com/RoiShamir1/Angular-Product-Website"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={box}
              isBlog={false}
              title="Project-Box-DataStructures"
              description="This project is a console application that used to store different sizes of box to data structure (SortedDictionary). When someone whats to buy box or many boxes the system search the box in running time of Log(N). to run the application click on 'ProjectBox.csproj' and than in the green arrow on Visual Studio."
              ghLink="https://github.com/RoiShamir1/Project-Box-DataStructures"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Wpf Library Json"
              description="Application that create and stores in Json array movie or book by his criteria , And also edit or delete them, In addition can sort movie/book by price or id and present a report of the discount."
              ghLink="https://github.com/RoiShamir1/Wpf-Library-Json"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Dodge game"
              description="A slippery game :) based on Wpf C#. To run in click on 'GAME3.csproj' and than click on the green arrow on V.S."
              ghLink="https://github.com/RoiShamir1/Dodge-Game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
