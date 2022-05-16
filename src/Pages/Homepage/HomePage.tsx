import * as React from "React";
import styled from "styled-components";
import Header from "../../Components/Header";
import Title from "../../Components/Title/Title";

import { PinkCharacter } from "../../Components/styled";

import "./homepage.css";

// Leaving the variable outside of homepage component so it won't be part of re-render cycle.
const homepageTitle = (
 <>
  <PinkCharacter>F</PinkCharacter>OR
  <PinkCharacter> R</PinkCharacter>ESTAURANTS
  <PinkCharacter>.</PinkCharacter>
 </>
);

function HomePage() {
 return (
  <>
   <Header />
   <Title title={homepageTitle} className="homePageTitle" />
  </>
 );
}

export default HomePage;
