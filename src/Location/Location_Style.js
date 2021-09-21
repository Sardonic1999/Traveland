import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 140px;
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
  padding: 0px 230px;
`;

export const Items = styled.div`
  width: 360px;
  height: 500px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  img {
    width: 358px;
    height: 331px;
    border-radius: 10px 10px 0px 0px;
  }
  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #000000;
    margin: 0px;
    padding-top: 35px;
  }
  p {
    font-weight: normal;
    font-size: 15px;
    line-height: 160%;
    text-align: center;
    color: #000000;
    opacity: 0.6;
    margin: 0px;
    padding: 10px 27px 30px 27px;
  }
`;
