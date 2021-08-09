import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { mainYellow } from "../../styledComponents/WithStyles";
import header from "../../images/Strona Główna/heder.png";

const HeroComponent = ({ lang }) => {
  const style = {
    right: lang ? "-13%" : "16%",
  };

  return (
    <section className="hero-section">
      <div className="banerWrapper">
        <img
          src={header}
          alt={
            lang
              ? "'Dostępny biznes to równe szanse' Adrian Furman. Fundator, członek Rady Dostępności"
              : "'Accessible business means equal opportunities' Adrian FurmanFounder, member of the Accessibility Council"
          }
        />
      </div>
      <div className="banner-slang" aria-hidden="true">
        <h1>
          <div className="banner-left-quote">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
          <div aria-hidden="true">{lang ? "Dostępny biznes" : "Accessible business"}</div>
          <div aria-hidden="true">
            {lang ? "to równe szanse" : "means equal"}
            <div aria-hidden="true">{lang ? "" : " opportunities"}</div>
            <div className="banner-right-quote" style={style}>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
          </div>
        </h1>
        <hr className="banner-hr" aria-hidden="true" />
        <div className="founder-box">
          <div className="founder-name" aria-hidden="true">
            {lang ? "Adrian Furman" : "Adrian Furman"}
          </div>
          <div className="founder-title" aria-hidden="true">
            {lang ? "Fundator, członek Rady Dostępności" : "Founder, member of the Accessibility Council"}
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero = styled.section`
  width: 100%;
  display: flex;
  position: relative;
`;

const BanerWrapper = styled.div`
  width: 100%;
`;

const Baner = styled.img`
  width: 100%;
`;

const Slang = styled.div`
  color: white;
  position: absolute;
  right: 12%;
  top: 27%;
`;
const FundtorBox = styled.div`
  color: white;
  position: absolute;
  left: 0;
  top: 127%;
`;

const LeftQuote = styled.div`
  font-size: clamp(0.8rem, 2.7vw, 3.5rem);
  color: ${mainYellow};
  position: absolute;
  top: -11%;
  left: -14.3%;
`;
const RightQuote = styled.div`
  font-size: clamp(0.8rem, 2.7vw, 3.5rem);
  color: ${mainYellow};
  position: absolute;
  bottom: -10%;
  right: ${(props) => (props.eng ? "-13%" : "16%")};
`;

const Rule = styled.hr`
  position: absolute;
  width: 30%;
  bottom: -22%;
  height: 2px;
  border: none;
  background-color: ${mainYellow};
  @media screen and (max-width: 1000px) {
    bottom: -30%;
  }
  @media screen and (max-width: 450px) {
    bottom: -41%;
  }
`;

const FundatorName = styled.div`
  font-size: clamp(10px, 2.1vw, 25px);
  margin: 0;
`;
const FundatorTitle = styled.div`
  margin: 0;
  font-weight: 200;
  font-style: italic;
  font-size: clamp(10px, 2.1vw, 14px);
`;

export default HeroComponent;
