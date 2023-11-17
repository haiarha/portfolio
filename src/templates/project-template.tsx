import React from "react";
import { PageProps } from "gatsby";
import Page from "../components/Page";

const PageTemplate: React.FC<PageProps<{}, ProjectContext<ProjectData>>> = ({
  pageContext,
}) => {
  const { title, content } = pageContext.data;

  return (
    <Page>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Page>
  );
};

export default PageTemplate;
