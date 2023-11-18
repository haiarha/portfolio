import React from "react";
import { PageProps, Link } from "gatsby";
import Page from "../components/Page";

import imgFallback from "../images/icon.png";

const PageTemplate: React.FC<PageProps<{}, PageContext<HomepageData>>> = ({
  pageContext,
}) => {
  const { general, data } = pageContext;

  return (
    <Page>
      <h1 className="text-3xl font-bold underline">{general.homepageTitle}</h1>

      {data.projects.map((project, i) => (
        <div key={i}>
          <Link
            className="text-blue-800 hover:underline"
            to={`/project/${project.slug}`}
          >
            <img
              src={project.imgSrc || imgFallback}
              className="object-cover w-64 h-64"
              alt={`Illustration of ${project.title}`}
            />
            {project.title}
          </Link>
        </div>
      ))}
    </Page>
  );
};

export default PageTemplate;
