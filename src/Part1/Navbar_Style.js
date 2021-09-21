import styled from "styled-components";

export const Container = styled.div`
  width: 1600px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 100px;
`;

export const Logo = styled.div`
  h3 {
    color: white;
    font-weight: normal;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.06em;
  }
`;

export const Pages = styled.div`
  display: flex;
  li {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #ffffff;
    list-style-type: none;
    padding: 0px 40px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  color: white;
  width: 163px;
  height: 51px;
  background: #c9453b;
  border-radius: 5px;
`;
