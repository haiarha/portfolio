// gatsby-node.ts
import { GatsbyNode } from "gatsby"

const path = require("path")

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const general: any[] = require("./src/data/projects.json")

  // Fetch data from your JSON file
  const jsonData: any[] = require("./src/data/projects.json")

  createPage({
    path: `/`,
    component: path.resolve("./src/templates/homepage-template.tsx"),
    context: {
      general,
      data: jsonData
    },
  })

  // Create a page for each item in the JSON file
  jsonData.forEach((data, i) => {
    createPage({
      path: `/project/${i+1}`,
      component: path.resolve("./src/templates/project-template.tsx"),
      context: {
        general,
        data
      },
    })
  })
}
