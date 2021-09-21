import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1600px;
  height: 348px;
  box-sizing: border-box;
  background: rgba(38, 148, 153, 0.04);
  padding: 80px 190px;
  justify-content: space-around;
`;

export const LogoText = styled.div`
  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.06em;
    margin: 0px;
    padding-bottom: 40px;
    cursor: pointer;

    color: #000000;
  }
  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0.06em;
    margin: 0px;
    padding-bottom: 20px;
    cursor: pointer;

    color: #000000;
  }
  img {
    width: 20px;
    height: 20px;
    padding-right: 20px;
    cursor: pointer;
  }
`;

export const Pages = styled.div`
  li {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.06em;
    margin: 0px;
    color: #000000;
    padding-bottom: 20px;
    list-style-type: none;
    cursor: pointer;
  }
`;

export const Subscribe = styled.div`
  h1 {
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.06em;
    margin: 0px;

    padding-bottom: 40px;
    color: #000000;
  }
  input {
    width: 195px;
    height: 44px;
    outline: none;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: transparent;
    color: black;
    padding-left: 20px;
  }
  button {
    width: 103px;
    height: 44px;
    background: #c9453b;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;
