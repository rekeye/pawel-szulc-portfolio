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
            gatsbyImageData(width: 400, layout: CONSTRAINED)
          }
        }
      }
    }
  `);
  nodes.forEach(
    ({ title, slug, dateOfCreation, description, image }, index) => {
      createPage({
        path: `/projects/${slug}`,
        component: require.resolve("./src/templates/projectPage.js"),
        context: {
          next: index + 1 === nodes.length ? null : nodes[index + 1].slug,
          title,
          dateOfCreation,
          description,
          image,
        },
      });
    }
  );
};
