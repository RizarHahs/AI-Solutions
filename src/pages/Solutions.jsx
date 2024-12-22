import Breadcrumb from "../components/Breadcrumb";
import Solution from "../components/Solutions";
import Questions from "../components/Questions";

import React, { Fragment } from "react";

const Solutions = () => {
  const paths = [
    { label: "Home >", href: "/" },
    { label: "Solutions", href: "/solutions" },
  ];

  return (
    <Fragment>
      <div className="bg-gray-200">
        <Breadcrumb items={paths} />
      </div>
      <Solution />
      <Questions />
    </Fragment>
  );
};

export default Solutions;
