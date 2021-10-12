import * as React from "react";
import Layout from "../components/organisms/layout";

const projectPage = ({ pageContext }) => {
  const { title, dateOfCreation, description, image } = pageContext;
  return (
    <Layout>
      <main className='main'>
        <h4>{title}</h4>
        <p>{description}</p>
      </main>
    </Layout>
  );
};

export default projectPage;
