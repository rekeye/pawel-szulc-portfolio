import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Project = ({ data: { title, slug, dateOfCreation, image } }) => {
  const imageData = getImage(image);
  return (
    <Link className='project' to={`/projekty/${slug}`}>
      <GatsbyImage image={imageData} alt={title} />
      <p>{`${title}, ${dateOfCreation}`}</p>
    </Link>
  );
};

export default Project;
