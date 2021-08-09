import React, { useEffect } from "react";
import HeroComponent from "./HeroComponent";
import OurActionsComponent from "./OurActionsComponent";
import News from "./News";
import Partners from "./Partners";
import BecomeAPartnerComponent from "./BecomeAPartnerComponent";
import Head from "next/Head";

const MainPage = ({ lang, data, pickId, posts }) => {
  return (
    <>


      <HeroComponent lang={lang} />
      <OurActionsComponent lang={lang} />
      {lang && <News pickId={pickId} data={data} lang={lang} />}
      <Partners lang={lang} />
      <BecomeAPartnerComponent lang={lang} />
    </>
  );
};

export default MainPage;
