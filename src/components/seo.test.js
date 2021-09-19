import React from "react";
import { render } from "@testing-library/react";
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
    const mockTitle = "Projekty | Paweł Szulc";
    const mockDescription =
      "Quis velit esse quis sit nulla. Reprehenderit amet enim reprehenderit voluptate quis officia commodo ex ad.";

    render(<SEO title='Projekty' />);
    const { title, metaTags } = Helmet.peek();

    expect(title).toBe(mockTitle);
    expect(metaTags[0].content).toBe(mockDescription);
    expect(metaTags.length).toBe(4);
  });
});
