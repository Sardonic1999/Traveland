import React from "react";
import { WrapItem, Wrapper, Title, Items } from "./Offers_Style";
import york from "../assets/york.png";
import china from "../assets/china.png";
import iran from "../assets/iran.png";
import bangladesh from "../assets/bangladesh.png";
import japan from "../assets/japan.png";

const Offers = () => {
  return (
    <Wrapper>
      <Title>
        <h2>Special Offers</h2>
        <p>
          With the New Year comes a refreshing sense of wanderlust, a longing in
          our souls <br /> to escape to warmer climates,{" "}
        </p>
      </Title>
      <WrapItem>
        <Items>
          <img src={york} alt="" />
          <h2>Statue of Liberty.</h2>
          <h5>New York</h5>
          <p>4 Day 5 Nights</p>
          <p>
            <span>$450/</span>person
          </p>
        </Items>
        <Items>
          <img src={china} alt="" />
          <h2>The Great Wall </h2>
          <h5>China</h5>
          <p>4 Day 5 Nights</p>
          <p>
            <span>$850/</span>person
          </p>
        </Items>
        <Items>
          <img src={iran} alt="" />
          <h2>Dizin</h2>
          <h5>Iran</h5>
          <p>4 Day 5 Nights</p>
          <p>
            <span>$550/</span>person
          </p>
        </Items>
        <Items>
          <img src={bangladesh} alt="" />
          <h2>Sajek Valley</h2>
          <h5>Bangladesh</h5>
          <p>4 Day 5 Nights</p>
          <p>
            <span>$400/</span>person
          </p>
        </Items>
        <Items>
          <img src={japan} alt="" />
          <h2>Osaka Castle.</h2>
          <h5>Japan</h5>
          <p>4 Day 5 Nights</p>
          <p>
            <span>$700/</span>person
          </p>
        </Items>
      </WrapItem>
    </Wrapper>
  );
};

export default Offers;
