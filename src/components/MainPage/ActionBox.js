import React from "react";
import styled from "styled-components";
import { H3,StyledLink,} from "../../styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ActionBox = ({ img, title, text, href, lang }) => {
  return (
    <Box>
      <ImgWrapper>
        <StyledImg src={img} alt="" />
      </ImgWrapper>

      <TitleWrapper>
        <H3>{title}</H3>
      </TitleWrapper>
      <PWrapper>
        <StyledP>{text}</StyledP>
      </PWrapper>
      <LinkWrapper>
        <BoxLink to={href}>
          {lang ? "Dowiedz się więcej" : "Learn more"} <FontAwesomeIcon style={{ verticalAlign: "-0.2em", marginLeft: "12px" }} icon={("fas", faAngleRight)} />
        </BoxLink>
      </LinkWrapper>
    </Box>
  );
};

const Box = styled.div`
  min-width: 250px;
  width: 300px;
  padding: 1em;
  margin: 1em;
  box-shadow: 0px 0px 10px #0000001c;
`;
const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  height: 60px;
`;

const PWrapper = styled.div`
  height: 150px;
`;

const LinkWrapper = styled.div`
  height: 40px;
`;

const StyledImg = styled.img`
  max-width: 100px;
  width: 100%;
`;

const BoxLink = styled(StyledLink)`
  width: 50%;
`;

const StyledP = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export default ActionBox;
