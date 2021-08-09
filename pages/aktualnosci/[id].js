import React, { useState } from "react";
import styled from "styled-components";
import { mainYellow, secondaryBlack, mainBlack } from "../../styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import chevron from "../../images/icons/chevron_ul.png";
import authorImage from "../../images/Aktualności/01.png";
import authorImage2 from "../../images/Aktualności/02.png";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch(`https://aktualnosci.biznesbezbarier.org/wp-json/wp/v2/posts?order=desc&per_page=100&_embed`);
  const data = await res.json();

  const paths = data.map((post) => {
    let stringId = post.id.toString();
    return {
      params: { id: stringId },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://aktualnosci.biznesbezbarier.org//wp-json/wp/v2/posts?include[]=${id}&_embed`);
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
};

const SingleNews = ({ news, lang }) => {
  const [authorRole] = useState("Prezes Fundacji");
  const [dataToRender, setDatatoRender] = useState([]);

  const replacer = (text) => {
    return text
      .replace("&#8216;", "'")
      .replace("&#8220;", '"')
      .replace("&#8221;", '"')
      .replace("&#8217;", "'")
      .replace("&#8211;", "-");
  };

  const trimmer = (t) => {
    if (t.length > 40) {
      let newText = t.slice(0, 40);
      return newText + "...";
    }
    return replacer(t);
  };

  return (
    <>
      <Head>
        <title>Aktualności - {news[0].title.rendered}</title>
        <meta property="og:title" content={news[0].title.rendered} key="title" />
        <meta property="og:image" content={news[0]._embedded["wp:featuredmedia"][0].source_url} key="image" />
        <meta property="og:description" content={news[0].excerpt.rendered} key="description" />
        <meta property='og:url' content={`https://biznesbezbarier.org/aktualnosci/${news[0].id}`}/>
      </Head>
      {news.length < 1 ? (
        <section className="newsFundationContainer">ładownie...</section>
      ) : (
        <>
        {console.log(news)}
          <div className="newsSiteNameWrapper">
            <ul className="newsOkruszki">
              <li>
                <Link href="/">
                  <a className="newsFirstLink">
                    {lang ? `Strona Główna` : "Main Page"}
                    <FontAwesomeIcon
                      icon={("fas", faAngleRight)}
                      style={{ verticalAlign: "-0.525em", height: "1.4em", color: mainYellow, width: "1.7em" }}
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/aktualnosc">
                  <a className="newsFirstLink">
                    {" "}
                    {lang ? `Aktualności` : "News"}{" "}
                    <FontAwesomeIcon
                      icon={("fas", faAngleRight)}
                      style={{ verticalAlign: "-0.525em", height: "1.4em", color: mainYellow, width: "1.7em" }}
                    />
                  </a>
                </Link>
              </li>

              <li aria-hidden="true">
                <p className="newsSecondLink">{trimmer(news[0].title.rendered)}</p>
              </li>
            </ul>
          </div>

          <section className="newsFundationWrapper">
            <div className="newsFundationContainer">
              <div style={{ width: "100%" }}>
                <h1>{replacer(news[0].title.rendered)}</h1>
                <div className="newsDynamicNews" dangerouslySetInnerHTML={{ __html: news[0].content.rendered }}></div>
                <h2 className="newsTittleH2">Autor: </h2>
                <div className="newsAuthorWrapper">
                  {}
                  <div>
                    <img
                      className="newsStyledImg"
                      src={news[0].author !== 7 ? authorImage2 : authorImage}
                      alt={
                        news[0].author === 7
                          ? lang
                            ? `Prezes Fundacji Biznes Bez Barier - Magdalena Raszdorf`
                            : `President of the Business Without Barriers Foundation - Magdalena Raszdorf,`
                          : lang
                          ? `Fundacja Biznes Bez Barier`
                          : `Business Without Barriers Foundation`
                      }
                    />
                  </div>
                  <div>
                    {news && news[0].author !== 7 ? (
                      ""
                    ) : (
                      <p className="newsAuthorName">{news[0]._embedded.author[0].name}</p>
                    )}

                    {news && news[0].author !== 7 ? "" : <p>{authorRole}</p>}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

/* Id autorów */

/* Maciej = 9  */

/* Magda = 7 */

/* Łukasz = 8  */

const AuthorName = styled.p`
  margin: 0;
  font-weight: bold;
`;

const StyledImg = styled.img`
  max-width: 150px;
  width: 100%;
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  & div {
    padding-left: 20px;
  }
`;

const TittleH2 = styled.h2`
  font-size: clamp(1.4rem, 3.3vw, 2.4rem);
  color: ${secondaryBlack};
  font-weight: 400;
  &::after {
    content: "";
    width: 64px;
    height: 3px;
    background-color: ${mainYellow};
    display: block;
  }
`;

const DynamicNews = styled.div`
  line-height: 1.5;
  & h2 {
    font-size: clamp(1.4rem, 3.3vw, 2.4rem);
    color: ${secondaryBlack};
    font-weight: 400;
    &::after {
      content: "";
      width: 64px;
      height: 3px;
      background-color: ${mainYellow};
      display: block;
    }
  }
  & a {
    color: #705501;
    font-weight: 900;
  }
  & ul {
    padding: 0;
    list-style-image: url(${chevron});
    max-width: 700px;
  }
  & li {
    padding: 10px;
    margin-left: 20px;
  }
  & img {
    max-width: 900px;
    width: 100%;
  }
`;

const Okruszki = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 0;
`;

const SiteNameWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0.2em auto 0 auto;
`;

const FirstLink = styled(Link)`
  cursor: pointer;
  font-size: 16px;
  color: #2c2c2c;
  text-decoration: none;
  padding: 0.1rem 0;
  position: relative;
  border-bottom: 1px solid ${secondaryBlack};
  &:hover {
    border-bottom: 2px solid ${mainBlack};
  }
`;
const SecondLink = styled.p`
  font-size: 16px;
  color: #2c2c2c;
  text-decoration: none;
  padding: 0.1rem 0;
  position: relative;
`;

const FundationWrapper = styled.section`
  background-color: white;
`;

const FundationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  padding: 2em;
  flex-direction: row;
`;

export default SingleNews;
