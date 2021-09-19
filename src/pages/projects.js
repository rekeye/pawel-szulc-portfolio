import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Project from "../components/Project";

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
          localFile {
            childImageSharp {
              gatsbyImageData(width: 400, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;

export default ProjectsPage;
