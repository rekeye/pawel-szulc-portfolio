import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Project from "../components/project";

// markup
const ProjectsPage = ({
  data: {
    allGraphCmsProject: { nodes },
  },
}) => {
  console.log(nodes);
  return (
    <Layout>
      <main className='main'>
        {nodes.map((project) => (
          <Project key={project.slug} data={project} />
        ))}
      </main>
    </Layout>
  );
};

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
