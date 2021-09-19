import * as React from "react";
import Layout from "../components/layout";

const projectPage = ({ pageContext }) => {
  const { title, slug, dateOfCreation, description, image } = pageContext;
  console.log(title);
  return (
    <Layout>
      <div />
    </Layout>
  );
};

export default projectPage;
