import styled from "styled-components";
import main from "../assets/main.png";

export const Wrapper = styled.div`
  background-image: url(${main});
  padding-top: 35px;
  width: 1600px;
  height: 850px;
`;

export const Text = styled.div`
  padding: 200px 200px;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 65px;
    line-height: 120%;
    color: #ffffff;
    margin: 0px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    color: #ffffff;
    opacity: 0.6;
    margin: 0px;
    padding: 30px 0px;
  }
`;

export const Button = styled.button`
  width: 187px;
  height: 59px;
  background: #c9453b;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`;
