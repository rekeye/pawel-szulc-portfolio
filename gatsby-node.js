exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      projects: { nodes },
    },
  } = await graphql(`
    {
      projects: allGraphCmsProject(filter: { stage: { eq: PUBLISHED } }) {
        nodes {
          title
          slug
          dateOfCreation
          description
          image {
            url
            localFile {
              childImageSharp {
                gatsbyImageData(width: 400, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);
  nodes.forEach(({ title, slug, dateOfCreation, description, image }) => {
    createPage({
      path: `/projects/${slug}`,
      component: require.resolve("./src/templates/projectPage.js"),
      context: {
        title,
        slug,
        dateOfCreation,
        description,
        image,
      },
    });
  });
};
