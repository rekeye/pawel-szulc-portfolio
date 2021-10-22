import React from "react";
import OutLink from "../atoms/outLink";
import Phone from "../atoms/phone";
import Email from "../atoms/email";
import Twitter from "../atoms/twitter";
import Facebook from "../atoms/facebook";
import Instagram from "../atoms/instagram";
import LinkedIn from "../atoms/linkedin";

const ContactType = ({ type, content }) => {
  switch (type) {
    case "phone":
      return (
        <OutLink href={`tel:${content}`}>
          <Phone />
          <span>{content}</span>
        </OutLink>
      );
    case "email":
      return (
        <OutLink href={`mailto:${content}`}>
          <Email />
          <span>{content}</span>
        </OutLink>
      );
    default:
      return (
        <OutLink href={content} classType={type}>
          {
            {
              twitter: <Twitter />,
              facebook: <Facebook />,
              instagram: <Instagram />,
              linkedin: <LinkedIn />,
            }[type]
          }
          <span>{type}</span>
        </OutLink>
      );
  }
};

export default ContactType;
