import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import MainPage from "./components/MainPage/MainPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Founder from "./components/Founder/Founder";
import Contact from "./components/Contact/Contact";

function App() {
  const [lang, setLang] = useState(true);
  const [width, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <>
      <Router>
        {width > 550 ? <Header lang={lang} setLang={setLang} /> : <HeaderMobile lang={lang} setLang={setLang} />}
        <Switch>
          <Route exact path="/">
            <MainPage lang={lang} isMobile={width} />
          </Route>
          <Route path="/o-nas">
            <AboutUs lang={lang} isMobile={width} />
          </Route>
          <Route path="/fundator">
            <Founder lang={lang} isMobile={width} />
          </Route>
          <Route path="/kontakt">
            <Contact lang={lang} isMobile={width} />
          </Route>
        </Switch>
        <Footer lang={lang} isMobile={width} />
      </Router>
    </>
  );
}

export default App;

/* <H1>NAGŁÓWEK POZIOMU I</H1>
<H2>Nagłówek poziomu II</H2>
<H3>NAGŁÓWEK POZIOMU III</H3>
<P style={{ maxWidth: "50ch" }}>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
  diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
  accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
</P>
<YellowButton>BUTTON I</YellowButton>
<WhiteButton>BUTTON II</WhiteButton>
<StyledLink href="#">Button III poziomu link <FontAwesomeIcon style={{verticalAlign: "-0.2em"}} icon={('fas', faAngleRight)} /></StyledLink> */
