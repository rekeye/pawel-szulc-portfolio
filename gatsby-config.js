require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Paweł Szulc",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Project",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "Project",
        // Url to query from
        url: process.env.GRAPH_CMS_URL,
      },
    },
  ],
};
