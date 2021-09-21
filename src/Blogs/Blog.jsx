import React from "react";
import {
  Title,
  Wrapper,
  WrapSide,
  Left,
  Right,
  Text,
  ItemWrap,
  Img,
} from "./Blog_Style";
import main2 from "../assets/main2.png";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";

const Blog = () => {
  return (
    <Wrapper>
      <Title>
        <h2>From Blog & News</h2>
        <p>
          Welcome to Community Conversations, a new interview series featuring{" "}
          <br /> Intrepid travellers, creatives and activists in our community.
        </p>
      </Title>
      <WrapSide>
        <Left>
          <img src={main2} alt="" />
          <h3>Banff National Park</h3>
          <p>
            Banff National Park lies in the heart of the majestic Rocky <br />
            Mountains in the province of Alberta, and showcases <br /> some of
            Canada's most beautiful scenery. <br /> Turquoise-colored lakes,
            snow-capped peaks, and glaciers <br /> are all easily accessible
          </p>
          <h4>@thomasalva_adison</h4>
        </Left>
        <Right>
          <ItemWrap>
            <Img src={pic1} alt="image" />
            <Text>
              <h3>The Hiroshima Peace!</h3>
              <p>
                It was formally opened to the <br /> public in August that year.
              </p>
              <h5>@shova_bd88</h5>
            </Text>
          </ItemWrap>
          <ItemWrap>
            <Img src={pic2} alt="image" />
            <Text>
              <h3>The faithful prayers!</h3>
              <p>
                A major pilgrimage center for <br /> Hindus, the holy city.
              </p>
              <h5>@shova_bd88</h5>
            </Text>
          </ItemWrap>
          <ItemWrap>
            <Img src={pic3} alt="image" />
            <Text>
              <h3>Colourful waters!</h3>
              <p>
                Forest-driven water and energy <br /> cycles are poorly.
              </p>
              <h5>@shova_bd88</h5>
            </Text>
          </ItemWrap>
        </Right>
      </WrapSide>
    </Wrapper>
  );
};

export default Blog;
