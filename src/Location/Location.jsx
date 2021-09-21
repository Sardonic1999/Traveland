import React from "react";
import { Items, Title, WrapItem, Wrapper } from "./Location_Style";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Location = () => {
  return (
    <Wrapper>
      <Title>
        <h2>Popular Location</h2>
        <p>
          For every one of us, travel came first. We’ve spent years living as
          nomads, pioneers, and <br /> voyagers— from island hopping in the
        </p>
      </Title>
      <WrapItem>
        <Items>
          <img src={img1} alt="" />
          <h4>Istanbul, Turkey</h4>
          <p>
            Istanbul is a major city in Turkey that <br /> straddles Europe.{" "}
          </p>
        </Items>
        <Items>
          <img src={img2} alt="" />
          <h4>Kuala Lumpur, malaysia</h4>
          <p>
            A 272-step long trek leads you to <br /> this century.
          </p>
        </Items>
        <Items>
          <img src={img3} alt="" />
          <h4>Seoul, South Korea</h4>
          <p>
            South Korea officially the Republic of <br /> Korea is a country in
            East Asia.
          </p>
        </Items>
      </WrapItem>
    </Wrapper>
  );
};

export default Location;
