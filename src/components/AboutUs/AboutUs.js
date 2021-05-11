import React from "react";
import styled from "styled-components";
import { H2, H3, P, StyledLink, mainYellow, GoHome, SiteTitle } from "../../styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import img from "../../images/O nas/01.png";
import img2 from "../../images/O nas/02.png";
import img3 from "../../images/O nas/03.png";
import img4 from "../../images/O nas/04.png";
import img5 from "../../images/O nas/05.png";

const AboutUs = () => {
  return (
    <>
      <SiteTitle name="O NAS" />

      <AboutUsWrapper>
        <SiteNameWrapper2>
          <div id="skip">
            <Actions>
              <H2>Fundacja Biznes bez Barier</H2>
            </Actions>
          </div>
        </SiteNameWrapper2>
        <SectionWrapper>
          <BoxWrapper>
            <UpperLeftBox>
              <H3>KIM JESTEŚMY?</H3>
              <P>
                Kreatorami świata, w którym osoby z niepełnosprawnością nie czują się ciężarem, nie trwają w przekonaniu
                własnej nieudolności; wręcz przeciwnie – realizują siebie, swoje marzenia, są aktywne zawodowo,
                wybierając pracę, zgodną z predyspozycjami i umiejętnościami. Pracują, zarabiając na swoje utrzymanie
                oraz rozwijając swoje pasje i plany zawodowe. Aktywnie im w tym pomagamy.
              </P>
              {/* <StyledLink>
                Skontaktuj się <FontAwesomeIcon style={{ verticalAlign: "-0.2em" }} icon={("fas", faAngleRight)} />
              </StyledLink> */}
            </UpperLeftBox>
            <div style={{ width: "397px", display: "flex", justifyContent: "center" }}>
              <img src={img} alt="" />
            </div>
          </BoxWrapper>
          <BoxWrapperReverse>
            <div>
              <img src={img2} alt="" />
            </div>
            <UpperLeftBox>
              <H3>DZIAŁAMY DWUTOROWO</H3>
              <P>
                Pomagamy także pracodawcom, udowadniając im, że otwarcie się na pracowników z niepełnosprawnością
                przynosi szereg korzyści obu stronom, a formalności nie są tak skompilowane, jak mogłoby się wydawać.
                Dlatego zajmujemy się rekrutacją na różne stanowiska wśród skutecznych i zmotywowanych osób z
                niepełnosprawnością, posiadającymi odpowiednie kwalifikacje i doświadczenie. W ten sposób promujemy
                otwarty rynek pracy i równe szanse dla każdego - bez względu na wiek, stan zdrowia czy rodzaj
                niepełnosprawności.
              </P>
              <StyledLink to={"/rekrutacja-onz"}>
                Zobacz jak pomagamy pracodawcom{" "}
                <FontAwesomeIcon style={{ verticalAlign: "-0.2em" }} icon={("fas", faAngleRight)} />
              </StyledLink>
            </UpperLeftBox>
          </BoxWrapperReverse>
          <BoxWrapper>
            <UpperLeftBox>
              <H3>STAWIAMY NA DOSTĘPNOŚĆ</H3>
              <P>
                Wspieramy wszystkie działania promujące szeroko rozumianą dostępność. Przeprowadzamy także audyty, które
                sprawdzają, czy strony internetowe i aplikacje mobilne podmiotów publicznych spełniają prawne wymogi.
                Fundacja zajmuje się także audytami architektonicznymi i komunikacyjno-organizacyjnymi. Pomagamy też w
                pozyskiwaniu grantów w zakresie programów dostępnościowych.
              </P>
              <StyledLink to={"/audyt-dostepnosci"}>
                Zapoznaj się z naszą ofertą audytów
                <FontAwesomeIcon style={{ verticalAlign: "-0.2em" }} icon={("fas", faAngleRight)} />
              </StyledLink>
            </UpperLeftBox>
            <div style={{ width: "397px", display: "flex", justifyContent: "center" }}>
              <img src={img3} alt="" />
            </div>
          </BoxWrapper>
          <BoxWrapperReverse>
            <div>
              <img src={img4} alt="" />
            </div>
            <UpperLeftBox>
              <H3>REASUMUJĄC</H3>
              <P>
                Mówimy zdecydowane STOP wszelkiej dyskryminacji i wykluczeniu, nie tylko zawodowemu, mówimy głośne i
                stanowcze TAK dla wyrównania szans, szacunku do drugiej osoby, bez względu na jej stan zdrowia czy
                stopień lub rodzaj niepełnosprawności.
              </P>
              <StyledLink to={"/programy-fundacji"}>
                Zapoznaj się z naszymi programami
                <FontAwesomeIcon style={{ verticalAlign: "-0.2em" }} icon={("fas", faAngleRight)} />
              </StyledLink>
            </UpperLeftBox>
          </BoxWrapperReverse>
          <SiteNameWrapper2>
            <div style={{ marginBottom: "4em" }}>
              <Actions>
                <H2>Władze Fundacji</H2>
              </Actions>
            </div>
          </SiteNameWrapper2>
          <BoxWrapperReverse>
            <div>
              <img src={img5} alt="MAGDALENA RASZDORF" />
            </div>
            <UpperLeftBox>
              <H3>MAGDALENA RASZDORF</H3>
              <P>
                Prezesem Fundacji Biznes Bez Barier jest Magdalena Raszdorf, absolwentka Uniwersytetu Łódzkiego oraz
                Université de Montréal w Kanadzie oraz certyfikowany Koordynator ds. Dostępności w Organizacji. Posiada
                wieloletnie doświadczenie w zarządzaniu długofalowymi projektami, Human Resources oraz z obszaru rynku
                kapitałowego. Od pięciu lat działa na rzecz osób z różnymi rodzajami niepełnosprawności. Jest ekspertem
                z zakresu dostępności architektonicznej, cyfrowej oraz informacyjno-komunikacyjnej.
              </P>
            </UpperLeftBox>
          </BoxWrapperReverse>
          <GoHome />
        </SectionWrapper>
      </AboutUsWrapper>
    </>
  );
};
const AboutUsWrapper = styled.section`
  width: 100%;
  background-color: white;
`;
const AboutUsWrapper2 = styled.section`
  width: 100%;
  background-color: #f8f8f8;
`;
const SiteNameWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 2.2em auto 0 auto;
`;
const SiteNameWrapper2 = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 2.2em auto 0 auto;
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

const Actions = styled.section`
  background-color: white;
  max-width: 1300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2.2em auto 0 auto;
`;

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
  padding-top: 4em;
  @media screen and (max-width: 763px) {
    padding-top: 4em;
  }
`;

const BoxWrapperReverse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 763px) {
    padding-top: 4em;
    flex-direction: column-reverse;
  }
`;

const UpperLeftBox = styled.div`
  width: 40%;
  min-width: 350px;
  padding-bottom: 2em;
`;

export default AboutUs;

/* <StyledLink>
  Skontaktuj się <FontAwesomeIcon style={{ verticalAlign: "-0.2em" }} icon={("fas", faAngleRight)} />
</StyledLink>; */
