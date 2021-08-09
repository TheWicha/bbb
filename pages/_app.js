import "../styles/globals.css";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Footer from "../components/Footer";



function MyApp({ Component, pageProps, posts }) {
  const [lang, setLang] = useState(true);
  const [width, setInnerWidth] = useState(600 || window.innerWidth);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
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

      {width > 550 ? <Header lang={lang} setLang={setLang} /> : <HeaderMobile lang={lang} setLang={setLang} />}
      <Component pickId={handlePickOneNews} click={handleClick} data={data} lang={lang} isMobile={width} {...pageProps} />
      <Footer lang={lang} isMobile={width} />
    </>
  );
}

export default MyApp;
