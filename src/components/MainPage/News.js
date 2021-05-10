import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { H2, YellowButton} from "../../styledComponents/WithStyles";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import NewsBox from "./NewsBox";
const News = ({ lang }) => {
  const [data, setData] = useState([]);
  const [postsAmount, setPostsAmount] = useState(1);

  useEffect(() => {
    const url = `https://bbb.realizacje.grupaaf.pl/wp-json/wp/v2/posts?order=desc&per_page=6`;

    const getData = async () => {
      const res = await fetch(url, {
        method: "GET",
      });

      const data = await res.json();

      setData(data);
    };
    getData();
  }, [postsAmount]);

  // const handlePostsLoad = (amount) => {
  //   setPostsAmount(amount);
  // };

  return (
    <NewsSectionWrapper>
      <NewsSection>
        <H2>Aktualności</H2>
        <NewsBoxWrapper>
          {data &&
            data.map((v, i) => {
              let date = v.date.split("T");
              return <NewsBox key={nanoid()} text={v.excerpt.rendered} date={date[0]} href={v.slug} />;
            })}
          {data &&
            data.map((v, i) => {
              let date = v.date.split("T");
              return <NewsBox key={nanoid()} text={v.excerpt.rendered} date={date[0]} href={v.slug} />;
            })}
          {data &&
            data.map((v, i) => {
              let date = v.date.split("T");
              return <NewsBox key={nanoid()} text={v.excerpt.rendered} date={date[0]} href={v.slug} />;
            })}
        </NewsBoxWrapper>
        <Link to={"/aktualnosci"}>
          <YellowButton> Zobacz Więcej </YellowButton>
        </Link>
      </NewsSection>
    </NewsSectionWrapper>
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
export default News;
