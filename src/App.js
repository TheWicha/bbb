import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import MainPage from "./components/MainPage/MainPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Founder from "./components/Founder/Founder";
import Contact from "./components/Contact/Contact";
import FundationPrograms from "./components/FundationPrograms/FundationPrograms";
import Recrutment from "./components/Recrutment/Recrutment";
import Audit from "./components/Audit/Audit";
import OurExperts from "./components/OurExperts/OurExperts";
import Certificate from "./components/Certificate/Certificate";
import Raports from "./components/Raports/Raports";
import Declaration from "./components/Declaration/Declaration";
import Cookies from "./components/Cookies/Cookies";
import Map from "./components/Map/Map";
import Cv from "./components/FundationPrograms/Cv";
import News from "./components/News/News";
import SingleNews from "./components/News/SingleNews";

function App() {
  const [lang, setLang] = useState(true);
  const [width, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, [width]);

  const [data, setData] = useState([]);
  const [postsAmount, setPostsAmount] = useState(6);
  const [singleNews, setSingleNews] = useState([]);

  useEffect(() => {
    const url = `https://aktualnosci.biznesbezbarier.org/wp-json/wp/v2/posts?order=desc&per_page=${postsAmount}&_embed`;

    const getData = async () => {
      const res = await fetch(url, {
        method: "GET",
      });

      const data = await res.json();

      setData(data);
    };
    getData();
  }, [postsAmount]);

  const handleClick = () => {
    setPostsAmount((prevState) => prevState + 6);
  };

  const handlePickOneNews = (id) => {
    const singlePost = data.filter((v) => v.id === id);
    setSingleNews(singlePost);
  };

  return (
    <>
      <Router>
        {width > 550 ? <Header lang={lang} setLang={setLang} /> : <HeaderMobile lang={lang} setLang={setLang} />}
        <Switch>
          <Route exact path="/">
            <MainPage pickId={handlePickOneNews} data={data} lang={lang} isMobile={width} />
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
          <Route path="/rekrutacja-onz">
            <Recrutment lang={lang} isMobile={width} />
          </Route>
          <Route path="/audyt-dostepnosci">
            <Audit lang={lang} isMobile={width} />
          </Route>
          <Route path="/nasi-specjalisci">
            <OurExperts lang={lang} isMobile={width} />
          </Route>
          <Route path="/certyfikaty-csr">
            <Certificate lang={lang} isMobile={width} />
          </Route>
          <Route path="/raporty-finansowe">
            <Raports lang={lang} isMobile={width} />
          </Route>
          <Route path="/deklaracja-dostepnosci">
            <Declaration lang={lang} isMobile={width} />
          </Route>
          <Route path="/polityka-prywatnosci">
            <Cookies lang={lang} isMobile={width} />
          </Route>
          <Route path="/mapa">
            <Map lang={lang} isMobile={width} />
          </Route>
          <Switch>
            <Route exact path="/aktualnosci">
              <News pickId={handlePickOneNews} click={handleClick} data={data} lang={lang} isMobile={width} />
            </Route>
            <Route path="/aktualnosci/:id">
              <SingleNews data={singleNews} lang={lang} isMobile={width} />
            </Route>
            <Route exact path="/programy-fundacji">
              <FundationPrograms lang={lang} isMobile={width} />
            </Route>
            <Route path="/programy-fundacji/:id">
              <Cv lang={lang} isMobile={width} />
            </Route>
          </Switch>
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
