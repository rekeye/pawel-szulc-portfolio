import React from "react";
import ContactType from "../molecules/contactType";

const ContactGroup = ({
  email,
  phoneNumber,
  facebook,
  instagram,
  linkedin,
}) => (
  <div>
    {email && <ContactType type='email' content={email} />}
    {phoneNumber && <ContactType type='phone' content={phoneNumber} />}
    {facebook && <ContactType type='facebook' content={facebook} />}
    {instagram && <ContactType type='instagram' content={instagram} />}
    {linkedin && <ContactType type='linkedin' content={linkedin} />}
  </div>
);

export default ContactGroup;
