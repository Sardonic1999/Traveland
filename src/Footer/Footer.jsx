import React from "react";
import { Wrapper, LogoText, Pages, Subscribe } from "./Footer_Style";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import google from "../assets/google.png";

const Footer = () => {
  return (
    <Wrapper>
      <LogoText>
        <h1>Trevland</h1>
        <p>Contact us</p>
        <p>@shovasatkhira88.com</p>
        <img src={facebook} alt="" />
        <img src={insta} alt="" />
        <img src={twitter} alt="" />
        <img src={google} alt="" />
      </LogoText>
      <Pages>
        <li>Services</li>
        <li>About</li>
        <li>Our story</li>
        <li>Benefits</li>
        <li>Branding</li>
      </Pages>
      <Pages>
        <li>Legal</li>
        <li>Terms & Conditions</li>
        <li>Privecy Policy</li>
        <li>Terms of use</li>
      </Pages>
      <Subscribe>
        <h1>SUBSCRIBE NOW</h1>
        <input type="text" />
        <button>Send</button>
      </Subscribe>
    </Wrapper>
  );
};

export default Footer;
