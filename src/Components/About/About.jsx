import React from "react";
import Container from "react-bootstrap/Container";
import WindowBar from "../Common/WindowBar";
import { PageHeader, SectionHeading } from "../Common/Headings";
import { usePageTitle } from "../../hooks/usePageTitle";
import { bio, journey, quote, skillGroups, yamlFacts } from "../../data/profile";
import "./About.css";

const YamlFacts = ({ facts }) => (
  <pre className="yaml-body">
    <code>
      <span className="y-comment"># quick facts</span>
      {"\n"}
      {facts.map(({ key, value, list }) => (
        <React.Fragment key={key}>
          <span className="y-key">{key}</span>
          <span className="y-punct">:</span>
          {value && (
            <>
              {" "}
              <span className="y-value">{value}</span>
            </>
          )}
          {"\n"}
          {list?.map((item) => (
            <React.Fragment key={item}>
              {"  "}
              <span className="y-punct">- </span>
              <span className="y-value">{item}</span>
              {"\n"}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </code>
  </pre>
);

const About = () => {
  usePageTitle("About");

  return (
    <Container className="page">
      <PageHeader kicker="about" title="About me">
        Combat soldier turned engineer, now keeping production healthy at 365scores, with a focus on cloud, Kubernetes and
        automation.
      </PageHeader>

      <section className="page-section about-grid" aria-label="Introduction">
        <div className="panel about-bio">
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="about-quote">
            # <q>{quote.text}</q> — {quote.author}
          </p>
        </div>
        <aside className="panel yaml-card" aria-label="Quick facts">
          <WindowBar title="roi.yaml" />
          <YamlFacts facts={yamlFacts} />
        </aside>
      </section>

      <section className="page-section" aria-labelledby="toolbox">
        <SectionHeading id="toolbox" kicker="toolbox" title="Skills & tools">
          The technologies I've used in real projects, grouped by where they sit in the delivery pipeline.
        </SectionHeading>
        <div className="skill-groups">
          {skillGroups.map(({ title, icon: GroupIcon, skills }) => (
            <article key={title} className="panel skill-group">
              <h3 className="skill-group-title">
                <GroupIcon aria-hidden="true" />
                {title}
              </h3>
              <ul className="skill-list">
                {skills.map(({ name, icon: SkillIcon }) => (
                  <li key={name} className="skill-chip">
                    <SkillIcon aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section" aria-labelledby="journey">
        <SectionHeading id="journey" kicker="git log" title="My journey">
          From operational service to software development to running production systems.
        </SectionHeading>
        <ol className="timeline">
          {journey.map(({ period, title, org, description }) => (
            <li key={title} className="timeline-item">
              <span className="timeline-node" aria-hidden="true" />
              <p className="timeline-period">{period}</p>
              <div className="panel timeline-card">
                <h3 className="timeline-title">{title}</h3>
                <p className="timeline-org">{org}</p>
                <p className="timeline-text">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Container>
  );
};

export default About;
