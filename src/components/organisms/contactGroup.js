import React from "react";
import ContactType from "../molecules/contactType";

const ContactGroup = ({
  email,
  phoneNumber,
  twitter,
  facebook,
  instagram,
  linkedin,
}) => (
  <div className='button__group--contact'>
    {email && <ContactType type='email' content={email} />}
    {phoneNumber && <ContactType type='phone' content={phoneNumber} />}
    {twitter && <ContactType type='twitter' content={twitter} />}
    {facebook && <ContactType type='facebook' content={facebook} />}
    {instagram && <ContactType type='instagram' content={instagram} />}
    {linkedin && <ContactType type='linkedin' content={linkedin} />}
  </div>
);

export default ContactGroup;
