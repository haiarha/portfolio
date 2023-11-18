import { GatsbyNode } from "gatsby";
import { HTMLElement } from "node-html-parser";

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

  const projectFiles: string[] = fs.readdirSync(projectsPath);

  const projects = projectFiles.map<ProjectData>((projectFileName: string) => {
    const html = marked.parse(
      fs.readFileSync(path.join(projectsPath, projectFileName), {
        encoding: "utf8",
      })
    );
    const parsed: HTMLElement = htmlParser.parse(html);
    const h1Text: string | undefined = parsed.querySelector("h1")?.innerText;
    const imgSrc: string | undefined =
      parsed.querySelector("img")?.attributes.src;

    return {
      slug: projectFileName.replace(/\.[^.]+$/, ""),
      title: h1Text || projectFileName,
      // TODO
      imgSrc: imgSrc || "",
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

  projects.forEach((project) => {
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
