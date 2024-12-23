import ContactUss from "../components/ContactUs";
import Breadcrumb from "../components/Breadcrumb";

import React, { Fragment } from "react";

const ContactUs = () => {
  const paths = [
    { label: "Home >", href: "" },
    { label: "ContactUs", href: "/contactus" },
  ];

  return (
    <Fragment>
      <Breadcrumb items={paths} />
      <ContactUss />
    </Fragment>
  );
};

export default ContactUs;
