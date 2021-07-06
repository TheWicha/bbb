import React, { useEffect } from "react";
import HeroComponent from "./HeroComponent";
import OurActionsComponent from "./OurActionsComponent";
import News from "./News";
import Partners from "./Partners";
import BecomeAPartnerComponent from "./BecomeAPartnerComponent";

const MainPage = ({ lang, isMobile, data, pickId }) => {
  useEffect(() => {
    document.title = lang
      ? "Strona główna - Fundacja Biznes Bez Barier"
      : "Main Page - Business Without Barriers Foundation";
  }, [lang, data]);

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
