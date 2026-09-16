import { useEffect } from "react";

const SITE_NAME = "Roi Shamir";

export const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — NOC Engineer · Cloud & DevOps`;
  }, [title]);
};
