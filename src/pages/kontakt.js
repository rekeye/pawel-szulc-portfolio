import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/organisms/layout";
import ContactGroup from "../components/organisms/contactGroup";

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
}) => (
  <Layout classes='main'>
    <h2>{heading}</h2>
    <p>{encouragement}</p>
    <ContactGroup
      phoneNumber={phoneNumber}
      email={email}
      facebook={facebook}
      instagram={instagram}
      linkedin={linkedIn}
    />
  </Layout>
);

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
