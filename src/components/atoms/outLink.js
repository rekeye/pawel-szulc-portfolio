import React from "react";

const OutLink = ({ href, classType, children }) => (
  <a
    className={
      classType
        ? `button button--contact button--${classType}`
        : "button button--contact"
    }
    href={href}>
    {children}
  </a>
);

export default OutLink;
