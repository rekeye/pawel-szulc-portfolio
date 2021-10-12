import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import LinkButton from "../components/atoms/linkButton";
import ProjectTitle from "../components/molecules/projectTitle";
import Layout from "../components/organisms/layout";

const projectPage = ({ pageContext }) => {
  const { next, title, dateOfCreation, description, image } = pageContext;
  const imageData = getImage(image);
  return (
    <Layout>
      <main className='main'>
        <ProjectTitle title={title} date={dateOfCreation} />
        <p>{description}</p>
        <GatsbyImage image={imageData} alt={title} />
        {next && (
          <LinkButton important to={`/projects/${next}`}>
            Następny projekt
          </LinkButton>
        )}
        <LinkButton to='/projects'>Wróć do listy</LinkButton>
      </main>
    </Layout>
  );
};

export default projectPage;
