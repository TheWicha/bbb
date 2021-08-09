import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mainYellow } from "../../styledComponents/WithStyles";

const NewsBox = ({ text, date, image, id, pickId, title }) => {
  const [normalTitle, setNormalTitle] = useState("");

  useEffect(() => {
    normalizer(title);
  }, []);

  const normalizer = (t) => {
    return setNormalTitle(
      t
        .replace("&#8216;", "'")
        .replace("&#8220;", '"')
        .replace("&#8221;", '"')
        .replace("&#8217;", "'")
        .replace("&#8211;", "-")
    );
  };
  useEffect(() => {}, []);
  const trimmer = (t) => {
    if (t.length > 150) {
      let newText = text.slice(0, 150);
      return newText + "...";
    }
    return t;
  };

  return (
    <div className="news-box hover-box ">
      <img className="news-box-img" src={image} alt={""} />

      <div className="news-box-title">{normalTitle}</div>

      <div className="news-box-text" dangerouslySetInnerHTML={{ __html: trimmer(text) }}></div>

      <div className="news-box-date" dangerouslySetInnerHTML={{ __html: date }}></div>
    </div>
  );
};

export default NewsBox;

const Box = styled.div`
  min-width: 250px;
  width: 318px;
  margin: 0.5em;
`;
const StyledImg = styled.img`
  max-height: 212px;
  min-height: 212px;
  max-width: 318px;
  width: 100%;
`;

const StyledTitle = styled.div`
  line-height: 1.5;
  background-color: #2d2c2a;
  margin: 0;
  height: 80px;
  padding: 1em 1em 0.3em 1em;
  margin-top: -5px;
  color: #f0be20;
`;
const StyledText = styled.div`
  height: 145px;
  background-color: #2d2c2a;
  color: white;
  & p {
    line-height: 1.5;
    margin: 0px;
    padding: 0em 1em 0.3em 1em;
  }
`;

const StyledDate = styled.div`
  color: ${mainYellow};
  background-color: #2d2c2a;
  font-weight: bold;
  padding: 0.3em 1em 1em 1em;
`;
