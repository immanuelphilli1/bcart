import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Bcart`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `mulish\:400,400i,600,600i,700,700i`, // you can specify different font weights and styles here
      ],
      display: 'swap',
    },
  },]
};

export default config;
