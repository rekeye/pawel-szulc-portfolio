module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Pawel Szulc | Portfolio",
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
        url: "https://api-eu-central-1.graphcms.com/v2/ckto5qx0u0tfm01yzg1j4a85i/master",
      },
    },
  ],
};
