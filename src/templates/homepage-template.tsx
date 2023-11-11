import React from "react";
import { PageProps, Link } from "gatsby";

const PageTemplate: React.FC<PageProps<{}, ProjectContext<HomepageData>>> = ({
  pageContext,
}) => {
  const { general, data } = pageContext;

  const projectPageNumber = general.projectsPerPage * (data.pageNumber - 1) + 1;
  return (
    <div>
      {data.projects.map((project, i) => (
        <div key={i}>
          <Link to={`/project/${projectPageNumber + i}`}>{project.title}</Link>
        </div>
      ))}

      <hr />

      {data.pagesCount > 1 &&
        Array.from({ length: data.pagesCount }, (_, i) => i + 1).map(
          (pageNumber) => (
            <Link
              key={pageNumber}
              style={{
                marginRight: "10px",
                fontWeight: pageNumber === data.pageNumber ? "bold" : "normal",
              }}
              to={pageNumber === 1 ? "/" : `/p${pageNumber}`}
            >
              {pageNumber}
            </Link>
          )
        )}
    </div>
  );
};

export default PageTemplate;
