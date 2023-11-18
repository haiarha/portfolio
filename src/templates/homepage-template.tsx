import React from "react";
import { PageProps, Link } from "gatsby";
import Page from "../components/Page";

const PageTemplate: React.FC<PageProps<{}, ProjectContext<HomepageData>>> = ({
  pageContext,
}) => {
  const { general, data } = pageContext;

  return (
    <Page>
      <h1 className="text-3xl font-bold underline">{general.homepageTitle}</h1>

      {data.projects.map((project, i) => (
        <div key={i}>
          <Link
            className="text-blue-800 dark:text-blue-400 hover:underline"
            to={`/project/${project.slug}`}
          >
            <img src={project.imgSrc} />
            {project.title}
          </Link>
        </div>
      ))}
    </Page>
  );
};

export default PageTemplate;
