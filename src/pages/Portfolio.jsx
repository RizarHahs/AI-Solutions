import OurPortfolio from "../components/OurPortfolio";
import Questions from "../components/Questions";
import Testimonials from "../components/Testimonials";
import Breadcrumb from "../components/Breadcrumb";

import React, { Fragment } from "react";

const Portfolio = () => {
  const paths = [
    { label: "Home >", href: "" },
    { label: "Portfolio", href: "/portfolio" },
  ];

  return (
    <Fragment>
      <Breadcrumb items={paths} />
      <div className="flex flex-col justify-between gap-[450px]">
        <OurPortfolio />
        <Testimonials />
      </div>
      <Questions />
    </Fragment>
  );
};

export default Portfolio;
