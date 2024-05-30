import React from "react";
import LandingPage from "./landingPage/LandingPage";
import AboutSec from "./about-sec/AboutSec";
import OpeningTime from "./openingTime-sec/OpeningTime";
import MenuSec from "./menu-sec/MenuSec";
import ContactSec from "./contace-sec/ContactSec";

export default function Home({ contactPop, closePopUp, openPopUp }) {
  return (
    <div className="">
      <LandingPage
        contactPop={contactPop}
        closePopUp={closePopUp}
        openPopUp={openPopUp}
      />
      <AboutSec />
      <OpeningTime openPopUp={openPopUp} />
      <MenuSec />
      <ContactSec />
    </div>
  );
}
