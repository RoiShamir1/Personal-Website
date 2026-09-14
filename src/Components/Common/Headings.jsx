import React from "react";

export const PageHeader = ({ kicker, title, children }) => (
  <header className="page-header">
    {kicker && <p className="kicker">{kicker}</p>}
    <h1 className="page-title">{title}</h1>
    {children && <p className="page-lead">{children}</p>}
  </header>
);

export const SectionHeading = ({ id, kicker, title, children }) => (
  <div className="section-head">
    {kicker && <p className="kicker">{kicker}</p>}
    <h2 id={id} className="section-title">
      {title}
    </h2>
    {children && <p className="section-sub">{children}</p>}
  </div>
);
