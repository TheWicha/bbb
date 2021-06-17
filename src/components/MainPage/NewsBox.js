import React from "react";
import styled from "styled-components";
import { mainYellow } from "../../styledComponents/WithStyles";
import image from "../../images/test_123.jpg";
import { Link } from "react-router-dom";

const NewsBox = ({ img, text, date, href }) => {
  const trimmer = (t) => {
    if (t.length > 150) {
      let newText = text.slice(0, 150);
      return newText + "...";
    }
    return t;
  };

  return (
    <Link to={href} style={{ textDecoration: "none" }}>
      <Box className={"hover-box"}>
        <img style={{ maxWidth: "318px", width: "100%" }} src={image} alt={""} />
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
