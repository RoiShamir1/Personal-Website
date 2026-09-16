import React from "react";
import Container from "react-bootstrap/Container";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import { PageHeader, SectionHeading } from "../Common/Headings";
import { usePageTitle } from "../../hooks/usePageTitle";
import { earlierWork, githubUrl, projects } from "../../data/profile";
import "./Projects.css";

const Projects = () => {
  usePageTitle("Projects");

  return (
    <Container className="page">
      <PageHeader kicker="projects" title="Things I've built">
        From CI/CD pipelines and containerized microservices to AI and full-stack apps. Every card maps out how the pieces
        connect.
      </PageHeader>

      <section className="page-section" aria-label="Projects">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="page-section" aria-labelledby="earlier-work">
        <SectionHeading id="earlier-work" kicker="archive" title="Earlier work">
          Smaller projects from my first steps as a developer.
        </SectionHeading>
        <ul className="earlier-list">
          {earlierWork.map(({ title, stack, href }) => (
            <li key={href}>
              <a className="earlier-item" href={href} target="_blank" rel="noopener noreferrer">
                <span>
                  <span className="earlier-title">{title}</span>
                  <span className="earlier-stack">{stack}</span>
                </span>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <div className="projects-more">
          <a className="btn-ui btn-ui--ghost" href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FiGithub aria-hidden="true" />
            Everything else is on GitHub
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Projects;
