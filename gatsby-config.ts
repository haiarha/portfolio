import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: [
    // "gatsby-plugin-styled-components",
    // "gatsby-plugin-google-gtag",
    // "gatsby-plugin-image",
    // "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    // "gatsby-transformer-remark",
    // "gatsby-plugin-sharp",
    // "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: "./src/",
      },
      __key: "src",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "gatsby-node.ts",
        path: "./gatsby-node.ts",
      },
      __key: "gatsby-node.ts",
    },
  ],
};

export default config;
