import React from "react";
import HeroComponent from "./HeroComponent";
import OurActionsComponent from "./OurActionsComponent";
import News from './News'
import Partners from "./Partners";
import BecomeAPartnerComponent from "./BecomeAPartnerComponent";


const MainPage = ({ lang, isMobile }) => {
  return (
    <>
      <HeroComponent lang={lang} />
      <OurActionsComponent lang={lang}/>
      <News lang={lang} />
      <Partners lang={lang} />
      <BecomeAPartnerComponent lang={lang}/>
    </>
  );
};

export default MainPage;
