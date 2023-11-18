import React from "react";
import { PageProps } from "gatsby";
import Page from "../components/Page";

const PageTemplate: React.FC<PageProps<{}, ProjectContext<ProjectData>>> = ({
  pageContext,
}) => {
  const { slug, title, html } = pageContext.data;

  return (
    <Page>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};

export default PageTemplate;
