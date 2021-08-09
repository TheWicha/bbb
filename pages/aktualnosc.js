import React, { useEffect } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import Link from "next/link";
import NewsBox from "../components/MainPage/NewsBox";
import { H2, mainYellow, GoHome, Okruszki } from "../styledComponents/WithStyles";

export const getStaticProps = async () => {
  const res = await fetch(`https://aktualnosci.biznesbezbarier.org/wp-json/wp/v2/posts?order=desc&per_page=100&_embed`);
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const aktualnosci = ({ click, data, pickId, lang, posts }) => {
  useEffect(() => {
    click();
    document.title = lang ? "Aktualności - Fundacja Biznes Bez Barier" : "News - Business Without Barries";
  }, [lang]);

  return (
    <div>
      <Okruszki lang={lang} slug={lang ? "Aktualności" : "News"} />
      <div className="news-section-wrapper">
        <div className="news-section">
          <h2 className="styled-h2">{lang ? `Aktualności` : `News`}</h2>
          <div className="news-box-wrapper">
            {data.length < 1 ? (
              <div className="news-container">{lang ? `ładowanie...` : `loading...`}</div>
            ) : (
              <>
                {posts.map((v, i) => {
                  let date = v.date.split("T");
                  return (
                    <Link href={`/aktualnosci/${v.id}`} key={nanoid()}>
                      <a>
                        <NewsBox
                          title={v.title.rendered}
                          pickId={pickId}
                          id={v.id}
                          text={v.excerpt.rendered}
                          date={date[0]}
                          href={v.slug}
                          image={v._embedded["wp:featuredmedia"] && v._embedded["wp:featuredmedia"][0].source_url}
                        />
                      </a>
                    </Link>
                  );
                })}
              </>
            )}
          </div>
          <button
            className="news-link-btn"
            onClick={() => {
              click();
            }}
          >
            {lang ? `Zobacz więcej` : `Load More`}
          </button>
        </div>
      </div>
      <div className="news-container">
        <GoHome lang={lang} />
      </div>
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
export default aktualnosci;
