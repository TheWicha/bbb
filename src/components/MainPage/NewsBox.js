import React from "react";
import styled from "styled-components";
import { mainYellow } from "../../styledComponents/WithStyles";
import { Link } from "react-router-dom";

const NewsBox = ({ text, date, href, image, id, pickId }) => {
  const trimmer = (t) => {
    if (t.length > 150) {
      let newText = text.slice(0, 150);
      return newText + "...";
    }
    return t;
  };

  return (
    <Link
      onClick={() => {
        pickId(id);
      }}
      to={`aktualnosci/${href}`}
      style={{ textDecoration: "none" }}
    >
      <Box className={"hover-box"}>
        <StyledImg src={image} alt={""} />
        <StyledText dangerouslySetInnerHTML={{ __html: trimmer(text) }}></StyledText>
        <StyledDate dangerouslySetInnerHTML={{ __html: date }}></StyledDate>
      </Box>
    </Link>
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
const StyledText = styled.div`
  height: 160px;
  background-color: #2d2c2a;
  margin-top: -5px;
  color: white;
  & p {
    margin: 0px;
    padding: 1em 1em 0.3em 1em;
  }
`;

const StyledDate = styled.div`
  color: ${mainYellow};
  background-color: #2d2c2a;
  font-weight: bold;
  padding: 0.3em 1em 1em 1em;
`;
