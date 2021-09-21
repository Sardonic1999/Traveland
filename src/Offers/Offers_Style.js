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

export const WrapItem = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 100px;
`;

export const Items = styled.div`
  width: 263px;
  height: fit-content;
  border-radius: 10px;
  box-sizing: border-box;
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #000000;
    margin: 0px;
    padding: 10px;
  }
  h5 {
    font-weight: normal;
    font-size: 20px;
    line-height: 150%;
    color: #000000;
    margin: 0px;
    padding: 10px;

    opacity: 0.9;
  }
  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
    opacity: 0.8;
    margin: 0px;
    padding: 10px;

    span {
      color: red;
    }
  }
`;
