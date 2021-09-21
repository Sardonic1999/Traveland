import React from "react";
import Body from "./Part1/Body";
import Location from "./Location/Location";
import Offers from "./Offers/Offers";
import Blog from "./Blogs/Blog";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div>
      <Body />
      <Location />
      <Offers />
      <Blog />
      <Footer />
    </div>
  );
};

export default Root;
