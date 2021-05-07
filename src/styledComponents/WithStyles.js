import styled from "styled-components";
import arrow from "../images/icons/chevron.png";
import { Link } from "react-router-dom";

export const mainBlack = "#202020";
export const secondaryBlack = "#2D2C2A";
export const mainYellow = "#f0be20;";

export const H1 = styled.h1`
  font-size: 38px;
  color: ${secondaryBlack};
`;

export const H2 = styled.h2`
  font-size: 36px;
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

export const H3 = styled.h3`
  font-size: 20px;
  color: ${mainBlack};
`;

export const P = styled.p`
  font-size: 18px;
  color: ${mainBlack};
  text-align: left;
  letter-spacing: 0px;
`;

export const YellowButton = styled.button`
  cursor: pointer;
  background-color: ${mainYellow};
  font-weight: bold;
  padding: 14px 72px;
  border-radius: 60px;
  border: 3px solid ${mainYellow};
  margin: 1.25em;
  &:hover {
    background-color: white;
  }
`;

export const WhiteButton = styled.button`
  cursor: pointer;
  background-color: white;
  font-weight: bold;
  padding: 14px 72px;
  border-radius: 60px;
  border: 1px solid ${secondaryBlack};
  margin: 1.25em;
  &:hover {
    border: 3px solid ${secondaryBlack};
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: #2c2c2c;
  text-decoration: none;
  padding: 0.1rem 0;
position: relative;
  border-bottom: 1px solid ${secondaryBlack};
  &:hover {
    border-bottom: 3px solid ${mainBlack};
  }
  /* &::after {
    content: url(${arrow});
    position: absolute;
    top: 10px;
  } */
`;
