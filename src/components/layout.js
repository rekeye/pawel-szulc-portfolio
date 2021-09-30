import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import SEO from "./seo";
import Hamburger from "./hamburger";

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [nav, setNav] = useState(false);

  return (
    <>
      <SEO title={title} />
      <header className='header'>
        <Link to='/'>
          <h2>{title}</h2>
        </Link>
        <Hamburger handleNav={setNav} nav={nav} />
        <nav className={nav ? "nav nav--open" : "nav"}>
          <Link to='/'>Strona główna</Link>
          <Link to='/projects'>Projekty</Link>
          <Link to='/contact'>Kontakt</Link>
        </nav>
      </header>

      {children}

      <footer>© {new Date().getFullYear()}, Szymon Paluch</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
