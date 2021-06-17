import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  P,
  secondaryBlack,
  mainBlack,
  GoHome,
  SiteTitle,
  TittleH2,
  ContactUs,
  Okruszki,
  StyledLink,
} from "../../styledComponents/WithStyles";
import img from "../../images/Programy Fundacji/1.png";
import img2 from "../../images/Programy Fundacji/2.png";
import img3 from "../../images/Programy Fundacji/3.png";
import img4 from "../../images/Programy Fundacji/4.png";
import img5 from "../../images/Programy Fundacji/5.png";
import img6 from "../../images/Programy Fundacji/6.png";
import img7 from "../../images/Programy Fundacji/7.png";
import img8 from "../../images/Programy Fundacji/8.png";

const FundationPrograms = ({ lang, isMobile }) => {
  useEffect(() => {
    document.title = "Progrmay Fundacji - Fundacja Biznes Bez Barier";
  }, []);

  return (
    <>
      <Okruszki lang={lang} slug={lang ? "Programy Fundacji" : "Fundation Programs"} />
      <SiteTitle name={lang ? "PROGRAMY FUNDACJI" : "FOUNDATION PROGRAMS"} />
      <TittleH2 title={lang ? "Pomagamy w znalezieniu pracy" : "We help in finding a job"} />
      <FundationWrapper>
        <FundationContainerReverse>
          <FundationText id="skip">
            <P>
              {lang
                ? `              Prowadzimy specjalną grupę na FB "Go ON!”, dedykowaną osobom zniepełnosprawnością poszukującym pracy i
              praktycznych wskazówekdot. zatrudnienia. Zawiera aktualne ogłoszenia pracy dla OzN w różnych branżach oraz
              całe spektrum fachowych porad, przydatnychlinków i artykułów eksperckich, które pomogą przyszłym
              kandydatom w aplikowaniu, autoprezentacji podczas rozmowy kwalifikacyjnej, radzenia sobie na rynku pracy i
              rozwoju kompetencji.`
                : 'We run a special group on FB "Go ON!", dedicated to people with disabilities who are looking for a job and with practical job-related tips.  It contains current job advertisements for PWD in various industries and a whole spectrum of professional advice, useful links and expert articles that will help future candidates in submitting job applications, self-presentation during an interview, doing well on the labor market and developing their skills.'}
            </P>
            <StyledLinkA target="__blank" href="https://www.facebook.com/groups/grupagoon">
              {lang ? "Dołącz do naszej grupy na Facebooku" : "Join the group on Facebook"}
              <FontAwesomeIcon style={{ verticalAlign: "-0.3em", marginLeft: "12px" }} icon={("fas", faAngleRight)} />
            </StyledLinkA>
          </FundationText>

          <ContactImg>
            <img src={img} alt="" />
          </ContactImg>
        </FundationContainerReverse>
      </FundationWrapper>
      {lang ? (
        <>
          <TittleH2 color={"#F8F8F8"} title={lang ? "Centrum Projektowania CV" : "Centrum Projektowania CV"} />
          <FundationWrapperGray>
            <FundationContainer>
              <ContactImg>
                <img src={img8} alt="" />
              </ContactImg>
              <FundationText>
                <P>
                  {lang
                    ? `              Opracowaliśmy formularz, po wypełnieniu którego można otrzymać szablon CV wraz z poradnikiem przygotowanym przez naszych ekspertów HR, który podpowiada, jak właściwie stworzyć dokument dostosowany do stanowiska pracy na które się aplikuje. To działanie dwutorowe, ponieważ oprócz tego, można wziąć udział w rekrutacjach, które przeprowadza Fundacja Biznes Bez Barier.`
                    : "Opracowaliśmy formularz, po wypełnieniu którego można otrzymać szablon CV wraz z poradnikiem przygotowanym przez naszych ekspertów HR, który podpowiada, jak właściwie stworzyć dokument dostosowany do stanowiska pracy na które się aplikuje. To działanie dwutorowe, ponieważ oprócz tego, można wziąć udział w rekrutacjach, które przeprowadza Fundacja Biznes Bez Barier."}
                </P>
                <StyledLink to="/programy-fundacji/cv-na-wymiar">
                  {lang ? "Stwórz CV i otwórz drzwi kariery" : "Stwórz CV i otwórz drzwi kariery"}
                  <FontAwesomeIcon
                    style={{ verticalAlign: "-0.3em", marginLeft: "12px" }}
                    icon={("fas", faAngleRight)}
                  />
                </StyledLink>
              </FundationText>
            </FundationContainer>
          </FundationWrapperGray>
        </>
      ) : (
        ""
      )}

      <TittleH2 title={lang ? "Kampanie informacyjne i badania" : "Information campaigns and research"} />
      <FundationWrapper>
        <FundationContainerReverse>
          <FundationText>
            <P>
              {lang
                ? `              Tworzenie merytorycznych publikacji dla pracodawców (np. e-booków) w celu wskazania im korzyści,
                wynikających z zatrudniania osób z niepełnosprawnością. Przeprowadzanie badań ankietowych, diagnozujących
                problematykę otwartego rynku pracy OzN.`
                : `Creating substantive publications for employers (e.g. e-books) in order to show them the benefits of employing people with disabilities. Conducting surveys, diagnosing the problems of the open labor market of PWD.`}
            </P>
          </FundationText>
          <ContactImg>
            <img src={img2} alt="" style={{ maxWidth: "120px" }} />
          </ContactImg>
        </FundationContainerReverse>
      </FundationWrapper>
      <TittleH2
        color={"#F8F8F8"}
        title={lang ? "Wskaźnik Równości Biznes bez Barier" : "Business Equality Index without Barriers"}
      />
      <FundationWrapperGray>
        <FundationContainer>
          <ContactImg>
            <img src={img3} alt="" />
          </ContactImg>
          <FundationText>
            <P>
              {lang
                ? `              Stworzenie przejrzystego, rocznego narzędzia analizy porównawczej, które zaoferuje przedsiębiorstwom
              możliwość uzyskania obiektywnego w zakresie ich polityki i praktyk dotyczących integracji osób
              niepełnosprawnych.`
                : `Creation of a transparent, annual benchmarking tool that offers companies the opportunity to get objective information in the area of policies and practices regarding the integration of people with disabilities.
              `}
            </P>
          </FundationText>
        </FundationContainer>
      </FundationWrapperGray>
      <TittleH2 title={lang ? "Wykorzystaj swój potencjał" : "Use your potential"} />
      <FundationWrapper>
        <FundationContainerReverse>
          <FundationText>
            <P>
              {lang
                ? `              Utworzenie Security Operation Center w obszarze Cyber Security w oparciu o zatrudnienie osób z
                niepełnosprawnością`
                : "Foundation of a Security Operation Center in the Cyber Security area based on the employment of people with disabilities."}
            </P>
          </FundationText>
          <ContactImg>
            <img src={img4} alt="" />
          </ContactImg>
        </FundationContainerReverse>
      </FundationWrapper>
      <TittleH2 color={"#F8F8F8"} title={lang ? "Wejdź na otwarty rynek pracy" : "Enter the open labor market"} />
      <FundationWrapperGray>
        <FundationContainer>
          <ContactImg>
            <img src={img5} alt="" />
          </ContactImg>
          <FundationText>
            <P>
              {lang ? "Utworzenie drukarni offsetowej w oparciu o " : `Foundation of a offset printing house based on`}
              <br />
              {lang ? `zatrudnienie osób z niepełnosprawnością.` : `the employment of people with disabilities.`}
            </P>
          </FundationText>
        </FundationContainer>
      </FundationWrapperGray>
      <TittleH2 title={lang ? "Szkoła Programowania" : "Programming school"} />
      <FundationWrapper>
        <FundationContainerReverse>
          <FundationText>
            <P>
              {lang
                ? `Program szkolenia osób z dysfunkcjami w zakresie pozwalającym na zdobycie nowego zawodu z obszaru IT:
                Front–end Developera.`
                : `Training program for people with disabilities tailored to allow them to acquire a new profession in the IT area: Front - end Developer.`}
            </P>
          </FundationText>
          <ContactImg>
            <img src={img6} alt="" />
          </ContactImg>
        </FundationContainerReverse>
      </FundationWrapper>
      <TittleH2 color={"#F8F8F8"} title={lang ? "Własna firma na Start" : `Own company for a start`} />
      <FundationWrapperGray>
        <FundationContainer>
          <ContactImg>
            <img src={img7} alt="" />
          </ContactImg>
          <FundationText>
            <P>
              {lang
                ? `              Projekt zakłada aktywizację osób niepełnosprawnych pozostających bez zatrudnienia zapewniając kompleksowe
              wsparcie w zakresie zakładania i prowadzenia działalności gospodarczej.`
                : `The project involves the activation of disabled persons who are unemployed, comprehensive support in establishing and running a business.`}
            </P>
          </FundationText>
        </FundationContainer>
      </FundationWrapperGray>
      <FundationWrapper>
        <ContactUs color={"white"} lang={lang} />
      </FundationWrapper>
      <FundationWrapper>
        <FundationContainer>
          <GoHome lang={lang} />
        </FundationContainer>
      </FundationWrapper>
    </>
  );
};

export default FundationPrograms;

const FundationWrapper = styled.section`
  background-color: white;
`;
const FundationWrapperGray = styled.section`
  background-color: #f8f8f8; ;
`;

const FundationContainerReverse = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  padding: 2em;
  flex-direction: row;
  @media screen and (max-width: 680px) {
    flex-direction: column-reverse;
  }
`;
const FundationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  padding: 2em;
  flex-direction: row;
`;

const ContactImg = styled.div`
  width: 45%;
  max-width: 170px;
  margin: 0 auto 2em auto;
  & img {
    width: 100%;
  }
`;

const FundationText = styled.div`
  margin-bottom: 3em;
  width: 45%;
  min-width: 300px;

  & p {
    margin: 0px;
    margin-top: 8px;
  }
`;

const StyledLinkA = styled.a`
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
`;
