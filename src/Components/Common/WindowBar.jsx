import React from "react";

const WindowBar = ({ title }) => (
  <div className="window-bar">
    <span className="window-dots" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
    <span className="window-title">{title}</span>
  </div>
);

export default WindowBar;
