import React from "react";
import styled from "styled-components";
import { H2 } from "../../styledComponents/WithStyles";
import partner1 from "../../images/Strona Główna/Nasi Partnerzy 1.png";
import partner2 from "../../images/Strona Główna/Nasi Partnerzy2.png";
import partner3 from "../../images/Strona Główna/Nasi Partnerzy3.png";

const Partners = ({ lang }) => {
  return (
    <PartnersWrapper>
      <PartnersSection>
        <H2>Nasi partnerzy</H2>
        <PartnersLogoWrapper>
          <LogoWrapper>
            <Logo src={partner1} alt="Uniwersytet Medyczny w Łodzi" />
          </LogoWrapper>
          <LogoWrapper>
            <Logo src={partner2} alt="Migam"/>
          </LogoWrapper>
          <LogoWrapper>
            <Logo src={partner3} alt="Praca bez barier  Agencja pracy dla osób Głuchych"/>
          </LogoWrapper>
        </PartnersLogoWrapper>
      </PartnersSection>
    </PartnersWrapper>
  );
};

const PartnersWrapper = styled.section`
  margin-top: 3em;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PartnersSection = styled.div`
  max-width: 1300px;
  min-width: 400px;
  width: 85%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
`;

const PartnersLogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`;

const Logo = styled.img`
  max-width: 210px;
  height: auto;
`;

const LogoWrapper = styled.div`
padding: 2em;
`
export default Partners;
