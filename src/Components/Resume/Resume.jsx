import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FiDownload, FiExternalLink, FiLinkedin } from "react-icons/fi";
import { PageHeader } from "../Common/Headings";
import { usePageTitle } from "../../hooks/usePageTitle";
import { CV_URL, linkedInUrl } from "../../data/profile";
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MAX_PAGE_WIDTH = 880;

const ResumeError = () => (
  <div className="resume-error">
    <p>The preview couldn't be loaded, but the PDF is still available.</p>
    <a className="btn-ui btn-ui--primary" href={CV_URL} download>
      <FiDownload aria-hidden="true" />
      Download CV
    </a>
  </div>
);

const Resume = () => {
  usePageTitle("Resume");
  const viewerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);

  // Render the PDF at the viewer's actual width so it is sharp on every screen size.
  useEffect(() => {
    const viewer = viewerRef.current;
    const measure = () => {
      const styles = window.getComputedStyle(viewer);
      const innerWidth = viewer.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
      const nextWidth = Math.floor(Math.min(MAX_PAGE_WIDTH, innerWidth));
      // Shrink immediately (never overflow), but ignore tiny growth to avoid re-rendering the PDF constantly.
      setPageWidth((current) => (nextWidth < current || nextWidth - current >= 8 ? nextWidth : current));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewer);
    return () => observer.disconnect();
  }, []);

  return (
    <Container className="page">
      <PageHeader kicker="resume" title="Resume">
        A one-page summary of my background. Prefer a file? Download the PDF.
      </PageHeader>

      <div className="resume-actions">
        <a className="btn-ui btn-ui--primary" href={CV_URL} download>
          <FiDownload aria-hidden="true" />
          Download CV
        </a>
        <a className="btn-ui btn-ui--ghost" href={CV_URL} target="_blank" rel="noopener noreferrer">
          <FiExternalLink aria-hidden="true" />
          Open in new tab
        </a>
        <a className="btn-ui btn-ui--ghost" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <FiLinkedin aria-hidden="true" />
          LinkedIn
        </a>
      </div>

      <div className="panel resume-viewer" ref={viewerRef}>
        {pageWidth > 0 && (
          <Document
            file={CV_URL}
            className="resume-doc"
            loading={<div className="resume-skeleton" />}
            error={<ResumeError />}
            onLoadSuccess={({ numPages: count }) => setNumPages(count)}
          >
            {Array.from({ length: numPages }, (_, index) => (
              <Page
                key={index + 1}
                pageNumber={index + 1}
                width={pageWidth}
                renderTextLayer={false}
                loading={<div className="resume-skeleton" style={{ width: pageWidth }} />}
              />
            ))}
          </Document>
        )}
      </div>
    </Container>
  );
};

export default Resume;
