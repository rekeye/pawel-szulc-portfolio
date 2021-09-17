import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";

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
      <header className='header'>
        <Link to='/'>
          <h1>{title}</h1>
        </Link>
        <button
          className={nav ? "hamburger hamburger--open" : "hamburger"}
          onClick={() => setNav(!nav)}>
          <div />
          <div />
          <div />
        </button>
        <nav className={nav ? "nav nav--open" : "nav"}>
          <Link to='/'>Strona główna</Link>
          <Link to='/kontakt'>Kontakt</Link>
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