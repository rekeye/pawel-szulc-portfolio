import React from "react";
import { Link } from "gatsby";

const LinkButton = ({ important, to, children }) => {
  return (
    <Link className={important ? "button button--important" : "button"} to={to}>
      {children}
    </Link>
  );
};

export default LinkButton;
