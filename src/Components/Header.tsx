import * as React from "react";
import Logo from "./Logo"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

function Header() {
  return (
    <>
      <Logo imgLink="https://i.postimg.cc/MHphj266/LB-Logo.jpg" alt="logo" />
      <HamburgerMenu />
    </>
  )
}

export default Header;