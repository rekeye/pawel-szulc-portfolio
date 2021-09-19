import React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";

import Layout from "./layout";

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: "Test title",
      },
    },
  }));
});

describe("Layout", () => {
  it("Layout component renders correctly", () => {
    const tree = renderer
      .create(
        <Layout>
          <div />
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
