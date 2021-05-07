import React from "react";
import HeroComponent from "./HeroComponent";
import OurActionsComponent from "./OurActionsComponent";
import News from './News'


const MainPage = ({ lang, isMobile }) => {
  return (
    <>
      <HeroComponent lang={lang} />
      <OurActionsComponent lang={lang}/>
      <News lang={lang} />
    </>
  );
};

export default MainPage;
