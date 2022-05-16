import * as React from "React";

import Header from "../../Components/Header";
import Text from "../../Components/Text/Text";
import GenerateWebsiteForm from "../../Components/GenerateWebsiteForm";

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
   <Text title={homepageTitle} className="homePageTitle" />
   <GenerateWebsiteForm />
  </>
 );
}

export default HomePage;
