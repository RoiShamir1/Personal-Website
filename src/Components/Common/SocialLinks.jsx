import React from "react";
import { socials } from "../../data/profile";

const SocialLinks = () => (
  <ul className="social-links">
    {socials.map(({ label, href, icon: Icon }) => (
      <li key={label}>
        <a className="social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
          <Icon aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
