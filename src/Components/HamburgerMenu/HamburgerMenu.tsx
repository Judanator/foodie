import * as React from "react";

import "./hamburger-menu.scss";

export default function HamburgerMenu() {
 const [isOpen, setIsOpen] = React.useState(false);

 return (
  <>
   <button
    type="submit"
    onClick={() => setIsOpen(!isOpen)}
    style={{
     padding: 0,
     border: "none",
     background: "none",
     cursor: "pointer",
     float: "right",
    }}
   >
    <img
     src="https://i.postimg.cc/K8BsjvP7/hamburger-menu.jpg"
     alt="hamburger menu"
    />
   </button>
   {isOpen && (
    <div className="drawerNav">
     <a href="#"> PRICING </a>
     <a href="#"> TEAM </a>
     <a href="#"> CONTACT US </a>
    </div>
   )}
  </>
 );
}
