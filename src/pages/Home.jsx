import Homee from "../components/Home";
import Tools from "../components/Tools";
import Banner from "../components/Banner";
import Caption from "../components/Caption";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Team from "../components/Team";
import Questions from "../components/Questions";

import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Homee />
      <Tools />
      <Banner />
      <Caption />
      <Testimonials />
      <Blog />
      <Team />
      <Questions />
    </Fragment>
  );
};

export default Home;
