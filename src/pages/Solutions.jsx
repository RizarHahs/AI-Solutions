import OurPortfolio from "../components/OurPortfolio";
import Questions from "../components/Questions";
import Testimonials from "../components/Testimonials";
import Breadcrumb from "../components/Breadcrumb";

import React, { Fragment } from "react";

const Solutions = () => {
  const paths = [{ label: "Portfolio", href: "" }];

  return (
    <Fragment>
      <Breadcrumb items={paths} />
      <Solutions />

      <Questions />
    </Fragment>
  );
};

export default Solutions;
