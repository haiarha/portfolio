import React from "react";
import { PageProps, Link } from "gatsby";

const PageTemplate: React.FC<PageProps<{}, ProjectContext<HomepageData>>> = ({
  pageContext,
}) => {
  const { general, data } = pageContext;

  const projectPageNumber = general.projectsPerPage * (data.pageNumber - 1) + 1;
  return (
    <div className="bg-slate-100">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {data.projects.map((project, i) => (
        <div key={i}>
          <Link
            className="text-blue-800 dark:text-blue-400 hover:underline"
            to={`/project/${projectPageNumber + i}`}
          >
            {project.title}
          </Link>
        </div>
      ))}

      <hr className="h-1 bg-slate-900" />

      {data.pagesCount > 1 &&
        Array.from({ length: data.pagesCount }, (_, i) => i + 1).map(
          (pageNumber) => (
            <Link
              key={pageNumber}
              className={[
                "mr-2",
                "hover:underline",
                pageNumber === data.pageNumber ? "font-bold" : "font-normal",
              ].join(" ")}
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
