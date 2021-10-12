import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/organisms/layout";

// markup
const ContactPage = ({
  data: {
    graphCmsContactPage: {
      heading,
      encouragement,
      phoneNumber,
      email,
      facebook,
      instagram,
      linkedIn,
    },
  },
}) => {
  return (
    <Layout classes='main'>
      <h2>{heading}</h2>
      <p>{encouragement}</p>
    </Layout>
  );
};

export const query = graphql`
  {
    graphCmsContactPage {
      heading
      encouragement
      phoneNumber
      email
      facebook
      instagram
      linkedIn
    }
  }
`;

export default ContactPage;
