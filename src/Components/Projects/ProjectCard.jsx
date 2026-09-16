import React from "react";
import { FiExternalLink, FiGithub, FiPlayCircle } from "react-icons/fi";
import "./ProjectCard.css";

const linkIcons = { github: FiGithub, video: FiPlayCircle };

// A small architecture diagram: each step of the system, connected by animated links.
const Flow = ({ id, steps }) => (
  <div className="flow">
    <p className="flow-label" aria-hidden="true">
      ~/{id}/architecture
    </p>
    <ol className="flow-steps" aria-label="Architecture">
      {steps.map((step, index) => (
        <li key={step} className="flow-step">
          <span className="flow-node">{step}</span>
          {index < steps.length - 1 && <span className="flow-link" style={{ "--i": index }} aria-hidden="true" />}
        </li>
      ))}
    </ol>
  </div>
);

const ProjectCard = ({ project, compact = false }) => {
  const { id, title, year, category, summary, highlights = [], flow, tech, links } = project;

  return (
    <article className="panel project-card">
      <div className="project-meta">
        <span className="project-category">{category}</span>
        <span className="project-year">{year}</span>
      </div>
      <h3 className="project-title">{title}</h3>
      <Flow id={id} steps={flow} />
      <p className="project-summary">{summary}</p>
      {!compact && highlights.length > 0 && (
        <ul className="project-highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
      <ul className="tag-list" aria-label="Tech stack">
        {tech.map((item) => (
          <li key={item} className="tag">
            {item}
          </li>
        ))}
      </ul>
      <div className="project-links">
        {links.map(({ label, href, type }) => {
          const Icon = linkIcons[type] || FiExternalLink;
          return (
            <a
              key={href}
              className="project-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label}: ${title} (opens in a new tab)`}
            >
              <Icon aria-hidden="true" />
              {label}
            </a>
          );
        })}
      </div>
    </article>
  );
};

export default ProjectCard;
