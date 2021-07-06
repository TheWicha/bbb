import React, { useEffect } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import NewsBox from "../MainPage/NewsBox";
import { H2, mainYellow, GoHome, Okruszki } from "../../styledComponents/WithStyles";

const News = ({ click, data, pickId, lang }) => {
  useEffect(() => {
    click();
    document.title = lang ? "Aktualności - Fundacja Biznes Bez Barier" : "News - Business Without Barries";
  }, [lang]);

  return (
    <div>
      <Okruszki lang={lang} slug={lang ? "Aktualności" : "News"} />
      <NewsSectionWrapper>
        <NewsSection>
          <H2>{lang ? `Aktualności` : `News`}</H2>
          <NewsBoxWrapper>
            {data.length < 1 ? (
              <FundationContainer>{lang ? `ładowanie...` : `loading...`}</FundationContainer>
            ) : (
              <>
                {data.map((v, i) => {
                  let date = v.date.split("T");
                  return (
                    <NewsBox
                      title={v.title.rendered}
                      pickId={pickId}
                      id={v.id}
                      key={nanoid()}
                      text={v.excerpt.rendered}
                      date={date[0]}
                      href={v.slug}
                      image={v._embedded["wp:featuredmedia"] && v._embedded["wp:featuredmedia"][0].source_url}
                    />
                  );
                })}
              </>
            )}
          </NewsBoxWrapper>
          <LinkBtn
            onClick={() => {
              click();
            }}
            to={"/aktualnosci"}
          >
            {lang ? `Zobacz Więcej` : `Load More`}
          </LinkBtn>
        </NewsSection>
      </NewsSectionWrapper>
      <FundationContainer>
        <GoHome lang={lang} />
      </FundationContainer>
    </div>
  );
};

const NewsSectionWrapper = styled.section`
  margin-top: 3em;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NewsSection = styled.div`
  background-color: #f7f6f5;
  max-width: 1300px;
  min-width: 400px;
  width: 85%;
  border-radius: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NewsBoxWrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #202020;
  cursor: pointer;
  background-color: ${mainYellow};
  font-weight: bold;
  padding: 14px 72px;
  border-radius: 12px;
  border: 3px solid ${mainYellow};
  margin: 1.25em;
  &:hover {
    background-color: white;
  }
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
export default News;
