import React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";

import Helmet from "react-helmet";
import SEO from "./seo";

describe("SEO component", () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: "Paweł Szulc",
          description:
            "Quis velit esse quis sit nulla. Reprehenderit amet enim reprehenderit voluptate quis officia commodo ex ad.",
        },
      },
    });
  });

  it("renders the tests correctly", () => {
    const tree = renderer.create(<SEO title='Projekty' />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
