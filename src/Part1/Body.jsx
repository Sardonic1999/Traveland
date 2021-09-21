import React from "react";
import { Wrapper, Text, Button } from "./Body_Style";
import Navbar from "./Navbar";

const Body = () => {
  return (
    <Wrapper>
      <Navbar />
      <Text>
        <h1>
          Railtrips To Here, <br /> There And Everywhere!
        </h1>
        <p>
          We all wish to start our year the best way possible and <br /> also
          according to a common belief if you have a great <br /> start to your.
        </p>
        <Button>Explore more</Button>
      </Text>
    </Wrapper>
  );
};

export default Body;
