import React, { useEffect } from "react";
import styled from "styled-components";
import { H2, mainYellow } from "../../styledComponents/WithStyles";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { nanoid } from "nanoid";
import NewsBox from "./NewsBox";

const News = ({ lang, data, pickId }) => {
  // const [data, setData] = useState([]);
  // const [postsAmount, setPostsAmount] = useState(1);

  useEffect(() => {}, [data, lang]);

  return (
    <section className="news-section-wrapper">
      <div className="news-section">
        <h2 className="styled-h2">{lang ? `Aktualności` : `News`}</h2>
        <div className="news-box-wrapper">
          {data.length < 1 ? (
            <div className="news-box-wrapper">{lang ? `ładowanie...` : `loading...`}</div>
          ) : (
            data.map((v, i) => {
              let date = v.date.split("T");
              return (
                <Link href={`/aktualnosci/${v.id}`}>
                  <a>
                    <NewsBox
                      title={v.title.rendered}
                      id={v.id}
                      pickId={pickId}
                      key={nanoid()}
                      text={v.excerpt.rendered}
                      date={date[0]}
                      href={v.slug}
                      image={v._embedded["wp:featuredmedia"] && v._embedded["wp:featuredmedia"][0].source_url}
                    />
                  </a>
                </Link>
              );
            })
          )}
        </div>
        <Link href={"/aktualnosc"}>
          <a className="news-link-btn">{lang ? `Zobacz więcej` : `Load More`}</a>
        </Link>
      </div>
    </section>
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

export default News;
