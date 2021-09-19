exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      projects: { nodes },
    },
  } = await graphql(`
    {
      projects: allGraphCmsProduct(filter: { stage: { eq: PUBLISHED } }) {
        nodes {
          id
          slug
        }
      }
    }
  `);
  nodes.forEach(({ id, slug }) => {
    createPage({
      path: `/projects/${slug}`,
      component: require.resolve("./src/templates/projectPage.js"),
      context: {
        id,
      },
    });
  });
};
