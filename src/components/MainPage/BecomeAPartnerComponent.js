import React from "react";
import styled from "styled-components";
import { H2, H3, P, StyledLink } from "../../styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import img from "../../images/Strona Główna/Zostań partnerem naszych projektów.png";
import img2 from "../../images/Strona Główna/logo_csr_czarne (1).png";

const BecomeAPartnerComponent = ({ lang }) => {
  return (
    <SectionWrapper>
      <div>
        <H2>Zostań partnerem naszych projektów</H2>
      </div>
      <BoxWrapper>
        <UpperLeftBox>
          <H3>Indywidualnie podejście</H3>
          <P>
            Każda współpraca jest dla nas ważna i wyjątkowa, dlatego przygotowujemy dedykowaną ofertę, dostosowaną do
            każdego projektu oraz indywidualnie omawiamy formę partnerstwa z każdym z naszych sponsorów.
          </P>
          <StyledLink>
            Skontaktuj się <FontAwesomeIcon style={{ verticalAlign: "-0.2em" }} icon={("fas", faAngleRight)} />
          </StyledLink>
        </UpperLeftBox>
        <div style={{width: '397px', display: 'flex', justifyContent: 'center'}}>
          <img src={img} alt="" />
        </div>
      </BoxWrapper>
      <BoxWrapperReverse>
        <div>
          <img src={img2} alt="" />
        </div>
        <UpperLeftBox>
          <H3>OTRZYMAJ CERTYFIKAT CSR</H3>
          <P>
            Współpracując z nami, otrzymasz certyfikat autorskiego programu Biznes Bez Barier. Jego głównym celem jest
            skuteczna aktywizacja zawodowa osób z niepełnosprawnością i promocja otwartego rynku pracy dla wszystkich –
            bez względu na wiek, stan zdrowia czy rodzaj niepełnosprawności. Certyfikat jest potwierdzeniem, że Twoja
            firma wspiera działania, mające na celu wyrównywanie zawodowych szans. Program w naszym imieniu prowadzi
            merytoryczny partner Fundacji Grupa AF.
          </P>
          <StyledLink>
            Skontaktuj się <FontAwesomeIcon style={{ verticalAlign: "-0.2em" }} icon={("fas", faAngleRight)} />
          </StyledLink>
        </UpperLeftBox>
      </BoxWrapperReverse>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 4em;
`;
const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 4em;
`;

const BoxWrapperReverse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 763px) {
    flex-direction: column-reverse;
  }
`;

const UpperLeftBox = styled.div`
  width: 40%;
  min-width: 350px;
  padding-bottom: 2em;
`;

export default BecomeAPartnerComponent;
