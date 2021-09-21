import React from "react";
import { Button, Container, Logo, Pages } from "./Navbar_Style";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <h3>Traveland</h3>
      </Logo>
      <Pages>
        <li>Home</li>
        <li>Location</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
      </Pages>
      <Button>Booking now</Button>
    </Container>
  );
};

export default Navbar;
