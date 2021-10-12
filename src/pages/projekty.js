import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/organisms/layout";
import Project from "../components/organisms/project";

// markup
const ProjectsPage = ({
  data: {
    allGraphCmsProject: { nodes },
  },
}) => (
  <Layout classes='main main--projects'>
    {nodes.map((project) => (
      <Project key={project.slug} data={project} />
    ))}
  </Layout>
);

export const query = graphql`
  {
    allGraphCmsProject {
      nodes {
        title
        slug
        dateOfCreation
        image {
          url
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default ProjectsPage;
