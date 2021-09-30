import React from "react";

const Hamburger = ({ handleNav, nav }) => (
  <button
    className={nav ? "hamburger hamburger--open" : "hamburger"}
    onClick={() => handleNav(!nav)}>
    <div />
    <div />
    <div />
  </button>
);

export default Hamburger;
