import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 30px;
  width: 1600px;
  height: fit-content;
  box-sizing: border-box;
  padding-bottom: 100px;
  background: #ffffff;
`;
export const Title = styled.div`
  text-align: center;
  padding-bottom: 50px;
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 43px;
    line-height: 140%;
    color: #000000;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    color: #000000;

    opacity: 0.6;
  }
`;

export const WrapSide = styled.div`
  display: flex;
  padding: 0px 230px;
`;

export const Left = styled.div`
  img {
    width: 554px;
    height: 397px;
    border-radius: 10px;
  }
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: #000000;
  }
  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    color: #000000;

    opacity: 0.6;
  }
  h4 {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #000000;
  }
`;

export const Right = styled.div``;

export const ItemWrap = styled.div`
  display: flex;
  padding: 0px 30px 30px 30px;
`;

export const Img = styled.img`
  width: 263px;
  height: 201px;
  border-radius: 10px;
  padding-right: 30px;
`;

export const Text = styled.div`
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #000000;
    margin: 0px;
    padding-top: 30px;
  }
  p {
    font-weight: normal;
    font-size: 15px;
    line-height: 160%;
    color: #000000;
    opacity: 0.6;
  }
  h5 {
    font-weight: normal;
    font-size: 20px;
    line-height: 150%;
    color: #000000;
    opacity: 0.8;
    margin: 0px;
  }
`;
