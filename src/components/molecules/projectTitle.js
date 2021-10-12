import React from "react";

const ProjectTitle = ({ title, date }) => (
  <div className='title__container'>
    <h4>{title}</h4>
    <h4>{date}</h4>
  </div>
);

export default ProjectTitle;
