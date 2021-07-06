import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mainYellow, secondaryBlack, mainBlack } from "../../styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import chevron from "../../images/icons/chevron_ul.png";
import authorImage from "../../images/Aktualności/01.png";
import authorImage2 from "../../images/Aktualności/02.png";

const SingleNews = ({ lang }) => {
  const [authorRole] = useState("Prezes Fundacji");
  const [dataToRender, setDatatoRender] = useState([]);

  useEffect(() => {
    const url = `https://aktualnosci.biznesbezbarier.org/wp-json/wp/v2/posts?order=desc&per_page=100&_embed`;

    const getData = async () => {
      const res = await fetch(url, {
        method: "GET",
      });

      const posts = await res.json();

      let pathname = window.location.pathname.split("/");
      let slug = pathname[pathname.length - 1];
      const singlePost = posts.filter((post) => post.slug === slug);
      setDatatoRender(singlePost);
    };
    getData();
    return () => {};
  }, []);

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
      {dataToRender.length < 1 ? (
        <FundationContainer>ładownie...</FundationContainer>
      ) : (
        <>
          <SiteNameWrapper>
            <Okruszki>
              <li>
                <FirstLink to="/">{lang ? `Strona Główna` : "Main Page"}</FirstLink>
                <FontAwesomeIcon
                  icon={("fas", faAngleRight)}
                  style={{ verticalAlign: "-0.525em", height: "1.4em", color: mainYellow, width: "1.7em" }}
                />
              </li>
              <li>
                <FirstLink to="/aktualnosci">{lang ? `Aktualności` : "News"}</FirstLink>
                <FontAwesomeIcon
                  icon={("fas", faAngleRight)}
                  style={{ verticalAlign: "-0.525em", height: "1.4em", color: mainYellow, width: "1.7em" }}
                />
              </li>

              <li aria-hidden="true">
                <SecondLink>{trimmer(dataToRender[0].title.rendered)}</SecondLink>
              </li>
            </Okruszki>
          </SiteNameWrapper>
          {/* <SiteTitle name={lang ? data[0].title.rendered.toUpperCase() : trimmer(data[0].title.rendered).toUpperCase()} /> */}
          <FundationWrapper>
            <FundationContainer>
              <div style={{ width: "100%" }}>
                <h1>{replacer(dataToRender[0].title.rendered)}</h1>
                <DynamicNews dangerouslySetInnerHTML={{ __html: dataToRender[0].content.rendered }}></DynamicNews>
                <TittleH2>Autor: </TittleH2>
                <AuthorWrapper>
                  {}
                  <div>
                    <StyledImg
                      src={dataToRender[0].author !== 7 ? authorImage2 : authorImage}
                      alt={
                        dataToRender[0].author === 7
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
                    {dataToRender[0].author !== 7 ? (
                      ""
                    ) : (
                      <AuthorName>{dataToRender[0]._embedded.author[0].name}</AuthorName>
                    )}

                    {dataToRender[0].author !== 7 ? "" : <AuthorTitle>{authorRole}</AuthorTitle>}
                  </div>
                </AuthorWrapper>
              </div>
            </FundationContainer>
          </FundationWrapper>
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

const AuthorTitle = styled.p``;

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
