import * as React from "react";
import { graphql } from "gatsby";
import LinkButton from "../components/atoms/linkButton";

// markup
const IndexPage = ({
  data: {
    graphCmsIndexPage: { heading, jobTitles, about },
  },
}) => {
  return (
    <main className='main--index'>
      <h1>{heading}</h1>
      <h3>{jobTitles}</h3>
      <p>{about}</p>
      <LinkButton to='/projects'>Sprawdź moje prace</LinkButton>
      <LinkButton to='/contact' important>
        Kontakt
      </LinkButton>
    </main>
  );
};

export const query = graphql`
  {
    graphCmsIndexPage {
      heading
      jobTitles
      about
    }
  }
`;

export default IndexPage;
