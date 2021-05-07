import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { mainYellow } from "../../styledComponents/WithStyles";


const HeroComponent = () => {
  return (
    <Hero>
      <BanerWrapper>
        <Baner
          src="http://bbb.realizacje.grupaaf.pl/wp-content/uploads/2021/05/heder.png"
          alt="Founder sitting on wheelchair"
        />
      </BanerWrapper>
      <Slang>
        <h1>
          <LeftQuote>
            <FontAwesomeIcon icon={faQuoteLeft} />
          </LeftQuote>
          <div>Dostępny biznes</div>
          <div>
            to równe szanse
            <RightQuote>
              <FontAwesomeIcon icon={faQuoteRight} />
            </RightQuote>
          </div>
        </h1>
        <Rule />
        <FundtorBox>
          <FundatorName>Adrian Furman</FundatorName>
          <FundatorTitle>Fundator, członek Rady Dostępności</FundatorTitle>
        </FundtorBox>
      </Slang>
    </Hero>
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
  & h1 {
    margin: 0px;
    font-size: clamp(0.8rem, 3.3vw, 3.5rem);
  }
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
  top: -7%;
  left: -13%;
`;
const RightQuote = styled.div`
  font-size: clamp(0.8rem, 2.7vw, 3.5rem);
  color: ${mainYellow};
  position: absolute;
  bottom: -10%;
  right: -13%;
`;

const Rule = styled.hr`
  position: absolute;
  width: 30%;
  bottom: -20%;
  height: 2px;
  border: none;
  background-color: ${mainYellow};
`;

const FundatorName = styled.div`
  font-size: clamp(10px, 2.1vw, 25px);
`;
const FundatorTitle = styled.div`
  font-weight: 200;
  font-style: italic;
  font-size: clamp(10px, 2.1vw, 14px);
`;

export default HeroComponent;
