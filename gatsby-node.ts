import { GatsbyNode } from "gatsby";

const { marked } = require("./src/marked");
const path = require("path");
const fs = require("fs");
const htmlParser = require("node-html-parser");

const contentPath = path.join(__dirname, "src/content");
const projectsPath = path.join(contentPath, "projects");

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const general: GeneralData = require(path.join(contentPath, "general.json"));

  const files: string[] = fs.readdirSync(projectsPath);

  const projects = files.map<ProjectData>((file: string) => {
    const html = marked.parse(
      fs.readFileSync(path.join(projectsPath, file), { encoding: "utf8" })
    );
    const parsed = htmlParser.parse(html);
    const h1Text: string | undefined = parsed.querySelector("h1")?.innerText;
    const imgSrc: string | undefined = parsed.querySelector("img")?.attributes.src;

    console.log(11111, imgSrc);

    return {
      slug: file.replace(/\.[^.]+$/, ""),
      title: h1Text || file,
      // TODO
      imgSrc: imgSrc || '',
      html,
    };
  });

  createPage({
    path: `/`,
    component: path.resolve("./src/templates/homepage-template.tsx"),
    context: {
      general,
      data: {
        projects,
      },
    },
  });

  projects.forEach((project, i) => {
    createPage({
      path: `/project/${project.slug}`,
      component: path.resolve("./src/templates/project-template.tsx"),
      context: {
        general,
        data: project,
      },
    });
  });
};
