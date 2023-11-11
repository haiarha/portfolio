import React from "react";
import { PageProps } from "gatsby";

const PageTemplate: React.FC<PageProps<{}, ProjectContext<HomepageData>>> = ({
  pageContext,
}) => {
  const { general, data } = pageContext;

  const projectPageNumber = general.projectsPerPage * (data.pageNumber - 1) + 1;
  return (
    <div>
      {data.projects.map((project, i) => (
        <div key={i}>
          <a href={`/project/${projectPageNumber + i}`}>{project.title}</a>
        </div>
      ))}

      <hr />

      {data.pagesCount > 1 &&
        Array.from({ length: data.pagesCount }, (_, i) => i + 1).map(
          (pageNumber) => (
            <a
              key={pageNumber}
              style={{
                marginRight: "10px",
                fontWeight: pageNumber === data.pageNumber ? "bold" : "normal",
              }}
              href={pageNumber === 1 ? "/" : `/p${pageNumber}`}
            >
              {pageNumber}
            </a>
          )
        )}
    </div>
  );
};

export default PageTemplate;
