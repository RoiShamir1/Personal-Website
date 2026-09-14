import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiDownload, FiLinkedin } from "react-icons/fi";
import Terminal from "./Terminal";
import ProjectCard from "../Projects/ProjectCard";
import SocialLinks from "../Common/SocialLinks";
import { SectionHeading } from "../Common/Headings";
import { usePageTitle } from "../../hooks/usePageTitle";
import {
  CV_URL,
  focusAreas,
  lifecycle,
  linkedInUrl,
  profile,
  projects,
  terminalSession,
  terminalSummary,
} from "../../data/profile";
import "./Home.css";

const featuredProjects = projects.filter((project) => project.featured);

const Lifecycle = ({ stages }) => (
  <div className="panel lifecycle">
    <span className="lifecycle-label">pipeline</span>
    <ol className="lifecycle-stages" aria-label="DevOps lifecycle">
      {stages.map((stage, index) => (
        <li key={stage} className="lifecycle-stage">
          <span className="lifecycle-chip" style={{ "--i": index }}>
            <FiCheck aria-hidden="true" />
            {stage}
          </span>
          {index < stages.length - 1 && (
            <span className="lifecycle-arrow" aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
    <span className="lifecycle-status">
      <span className="status-dot" aria-hidden="true" />
      passing
    </span>
  </div>
);

const Home = () => {
  usePageTitle();

  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">
                <span className="status-dot" aria-hidden="true" />
                {profile.eyebrow}
              </p>
              <h1 className="hero-title">
                Hi, I'm{" "}
                <span className="hero-name">
                  <span className="text-grad">{profile.name}</span>{" "}
                  <span className="wave" role="img" aria-label="waving hand">
                    👋
                  </span>
                </span>
              </h1>
              <p className="hero-role">
                {profile.role} <span>{profile.roleDetail}</span>
              </p>
              <p className="hero-lead">{profile.tagline}</p>
              <div className="hero-actions">
                <Link to="/projects" className="btn-ui btn-ui--primary">
                  View projects
                  <FiArrowRight aria-hidden="true" />
                </Link>
                <a href={CV_URL} className="btn-ui btn-ui--ghost" download>
                  <FiDownload aria-hidden="true" />
                  Download CV
                </a>
              </div>
              <SocialLinks />
            </div>
            <div className="hero-terminal">
              <Terminal session={terminalSession} summary={terminalSummary} />
            </div>
          </div>
        </Container>
      </section>

      <section className="section" aria-labelledby="what-i-do">
        <Container>
          <SectionHeading id="what-i-do" kicker="what i do" title="From commit to production">
            I care about the whole delivery path — how code is built, tested, shipped and kept healthy once it's live.
          </SectionHeading>
          <Lifecycle stages={lifecycle} />
          <div className="focus-grid">
            {focusAreas.map(({ icon: Icon, title, description, tools }) => (
              <article key={title} className="panel focus-card">
                <span className="focus-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="focus-title">{title}</h3>
                <p className="focus-text">{description}</p>
                <ul className="tag-list">
                  {tools.map((tool) => (
                    <li key={tool} className="tag">
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--tight-top" aria-labelledby="featured-work">
        <Container>
          <div className="section-head-row">
            <SectionHeading id="featured-work" kicker="featured work" title="Recent projects">
              Pipelines, containers and AI — each card maps out how the pieces connect.
            </SectionHeading>
            <Link to="/projects" className="btn-ui btn-ui--ghost">
              All projects
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="project-grid project-grid--compact">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--tight-top">
        <Container>
          <div className="panel cta-panel">
            <div>
              <p className="kicker">next step</p>
              <h2 className="cta-title">Let's build something reliable.</h2>
              <p className="cta-text">Have a role, a project or a question? LinkedIn is the fastest way to reach me.</p>
            </div>
            <div className="cta-actions">
              <a href={linkedInUrl} className="btn-ui btn-ui--primary" target="_blank" rel="noopener noreferrer">
                <FiLinkedin aria-hidden="true" />
                Connect on LinkedIn
              </a>
              <Link to="/about" className="btn-ui btn-ui--ghost">
                More about me
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
