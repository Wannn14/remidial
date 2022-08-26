import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import OurSer from "./OurService";
import WhyU from "./WhyUs";
import Testi from "./Testimonial";
import SeWa from "./SeWa";
import FAQ from "./FAQ";
import FooTer from "./fooTer";

const LandingPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <OurSer></OurSer>
      <WhyU></WhyU>
      <Testi></Testi>
      <SeWa></SeWa>
      <FAQ></FAQ>
      <FooTer></FooTer>
    </>
  );
};

export default LandingPage;
