import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import Seo from "../molecules/seo";
import Hamburger from "../atoms/hamburger";

const Layout = ({ classes, children }) => {
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
      <Seo title={title} />
      <header className='header'>
        <Link to='/'>
          <h2>{title}</h2>
        </Link>
        <Hamburger handleNav={setNav} nav={nav} />
        <nav className={nav ? "nav nav--open" : "nav"}>
          <Link to='/'>Strona główna</Link>
          <Link to='/projekty'>Projekty</Link>
          <Link to='/kontakt'>Kontakt</Link>
        </nav>
      </header>

      <main className={classes}>{children}</main>

      <footer>© {new Date().getFullYear()}, Szymon Paluch</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
