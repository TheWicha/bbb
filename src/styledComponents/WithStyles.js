import styled from "styled-components";
import arrow from "../images/icons/chevron.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

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

export const GoHome = () => (
  <div style={{ height: "30px", marginTop: "5em", marginBottom: "2em" }}>
    <StyledLink
      to={"/"}
      onClick={() => {
        setTimeout(() => {
          document.getElementById("header").scrollIntoView();
        }, 100);
      }}
    >
      Powrót na stronę główną
      <FontAwesomeIcon style={{ verticalAlign: "-0.2em", marginLeft: "12px" }} icon={("fas", faAngleRight)} />
    </StyledLink>
  </div>
);

export const SiteTitle = ({ name }) => {
  const AboutUsWrapper2 = styled.section`
    width: 100%;
    background-color: #f8f8f8;
  `;

  const SiteNameWrapper = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin: 2.2em auto 2.2em auto;
  `;
  const SiteName = styled.div`
    min-width: 200px;
    position: relative;
    width: 40%;
    background-color: ${mainYellow};
    h1 {
      margin: 0.3em 0 0.3em 0;
    }
    &:before {
      content: "!";
      color: ${mainYellow};
      padding: 0.3em 0 0.3em 0;
      background-color: ${mainYellow};
      width: 170px;
      font-size: 38px;
      position: absolute;
      left: -170px;
    }
  `;
  return (
    <AboutUsWrapper2>
      <SiteNameWrapper>
        <SiteName>
          <H1>{name}</H1>
        </SiteName>
      </SiteNameWrapper>
    </AboutUsWrapper2>
  );
};
