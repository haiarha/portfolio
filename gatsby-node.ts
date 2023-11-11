import { GatsbyNode } from "gatsby";

const path = require("path");

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const general: any = require("./src/data/general.json");

  // Fetch data from your JSON file
  const projects: any[] = require("./src/data/projects.json");

  const pagesCount = Math.ceil(projects.length / general.projectsPerPage);

  for (let pageNumber = 1; pageNumber <= pagesCount; pageNumber++) {
    const start = (pageNumber - 1) * general.projectsPerPage;
    createPage({
      path: pageNumber === 1 ? `/` : `/p${pageNumber}`,
      component: path.resolve("./src/templates/homepage-template.tsx"),
      context: {
        general,
        data: {
          projects: projects.slice(start, start + general.projectsPerPage),
          pageNumber,
          pagesCount,
          projectsPerPage: general.projectsPerPage
        },
      },
    });
  }

  // Create a page for each item in the JSON file
  projects.forEach((data, i) => {
    createPage({
      path: `/project/${i + 1}`,
      component: path.resolve("./src/templates/project-template.tsx"),
      context: {
        general,
        data,
      },
    });
  });
};

exports.onCreatePage = ({ actions, page }) => {
  actions.createPage(page)
}
