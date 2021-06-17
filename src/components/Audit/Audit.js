import React, { useEffect } from "react";
import styled from "styled-components";
import { P, GoHome, SiteTitle, TittleH2, ContactUs, Okruszki, H3, mainYellow } from "../../styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import img from "../../images/Audyty dostępności/1 (1).png";
import img2 from "../../images/Audyty dostępności/1 (2).png";
import img3 from "../../images/Audyty dostępności/1 (3).png";
import img4 from "../../images/Audyty dostępności/1 (4).png";
import img5 from "../../images/Audyty dostępności/1 (5).png";
import img6 from "../../images/Audyty dostępności/1 (6).png";
import img7 from "../../images/Audyty dostępności/1 (7).png";
import img8 from "../../images/Audyty dostępności/1 (8).png";
import img9 from "../../images/Audyty dostępności/1 (9).png";
import img10 from "../../images/Audyty dostępności/1 (10).png";
import img11 from "../../images/Audyty dostępności/1 (11).png";
import img12 from "../../images/Audyty dostępności/1 (12).png";
import img13 from "../../images/Audyty dostępności/1 (13).png";
import img14 from "../../images/Audyty dostępności/1 (14).png";
import img15 from "../../images/Audyty dostępności/1 (15).png";
import img16 from "../../images/Audyty dostępności/1 (16).png";
import img17 from "../../images/Audyty dostępności/1 (17).png";
import img18 from "../../images/Audyty dostępności/1 (18).png";
import img19 from "../../images/Audyty dostępności/1 (19).png";
import img20 from "../../images/Audyty dostępności/1 (20).png";
import img21 from "../../images/Audyty dostępności/1 (21).png";
import img22 from "../../images/Audyty dostępności/1 (22).png";
import img23 from "../../images/Audyty dostępności/1 (23).png";
import img24 from "../../images/Audyty dostępności/1 (24).png";
import img25 from "../../images/Audyty dostępności/1 (25).png";
import img26 from "../../images/Audyty dostępności/1 (26).png";
import img27 from "../../images/Audyty dostępności/1 (27).png";
import img28 from "../../images/Audyty dostępności/1 (28).png";
// import img29 from "../../images/Audyty dostępności/1 (29).png";

const Audit = ({ lang }) => {
  useEffect(() => {
    document.title = "Audyt dostępności - Fundacja Biznes Bez Barier";
  }, []);
  return (
    <>
      <Okruszki lang={lang} slug={lang ? "Audyt dostępności" : "Accessibility audits"} />
      <SiteTitle name={lang ? "AUDYT DOSTĘPNOŚCI" : "AVAILABILITY AUDITS"} />
      <TittleH2 title={lang ? "Audyt dostępności cyfrowej" : `Digital availability audit`} />
      <FundationWrapper>
        <ContactContainer>
          <ContactContainerReverse>
            <FirstP>
              <ContactText id="skip">
                <P>
                  {lang
                    ? `                  Kompleksowe badanie stron i serwisów internetowych oraz aplikacji mobilnych pod kątem dostępności dla
                  osób z różnymi niepełnosprawnościami. Rezultatem audytu jest obszerny raport zgodności z
                  międzynarodowymi standardami WCAG, wskazujący potencjalne bariery dostępności oraz sposoby ich
                  rozwiązania.`
                    : `A comprehensive inspection of websites as well as mobile applications to check the accessibility for people with various disabilities.
                  The result of an audit is a comprehensive report of compliance with international WCAG standards, indicating potential accessibility barriers and ways to remove them.
                  `}
                </P>
              </ContactText>
            </FirstP>
            <ContactImg>
              <img src={img} alt="" />
            </ContactImg>
          </ContactContainerReverse>

          <DlaKogoWrapper>
            <H3>{lang ? `DLA KOGO?` : `WHOM IS IT FOR?`}</H3>
            <RecContainer>
              <RecrutmentText>
                <img src={img2} alt="" />
                <p>
                  {lang
                    ? `jednostki administracji samorządowej i centralnej`
                    : `local government and central administration units `}
                </p>
              </RecrutmentText>
              <RecrutmentText>
                <img src={img5} alt="" />
                <p>{lang ? `zarządcy infrastruktury komunikacyjnej` : `communication infrastructure managers`}</p>
              </RecrutmentText>
              {lang ? (
                <RecrutmentText>
                  <img src={img3} alt="" />
                  <p>NGO, organizacje pożytku publicznego</p>
                </RecrutmentText>
              ) : (
                <RecrutmentText>
                  <img src={img15} alt="" />
                  <p>Developers</p>
                </RecrutmentText>
              )}
              <RecrutmentText>
                <img src={img6} alt="" />
                <p>{lang ? `instytucje edukacyjne` : `educational institutions and others `}</p>
              </RecrutmentText>
              {lang ? (
                <RecrutmentText>
                  <img src={img4} alt="" />
                  <p>projektanci, deweloperzy, właściciele interfejsów cyfrowych i mobilnych</p>
                </RecrutmentText>
              ) : (
                <RecrutmentText>
                  <img src={img16} alt="" />
                  <p>health care units</p>
                </RecrutmentText>
              )}
              <RecrutmentText>
                <img src={img7} alt="" />
                <p>
                  {lang
                    ? `firmy przestrzegające zasad społecznej odpowiedzialności biznesu (CSR)`
                    : `companies adhering to the principles of corporate social responsibility`}
                </p>
              </RecrutmentText>
            </RecContainer>
          </DlaKogoWrapper>
          <FundationContainer>
            <ContactImg>
              <img src={img8} alt="" />
            </ContactImg>
            <RecrutmentTxt>
              <H3>{lang ? `CO ZYSKUJESZ?` : `WHAT IS YOUR GAIN?`}</H3>
              <P>
                {lang
                  ? ` Serwis internetowy zgodny z wymogami WCAG 2.1, który swobodnie mogą obsługiwać różni użytkownicy, bez
                względu na wiek, niepełnosprawność, posiadany sprzęt czy oprogramowanie. Dzięki temu Internet staje się
                przyjazną, pozbawioną barier przestrzenią, a Ty dajesz szansę grupom wykluczonym na skorzystanie z
                Twoich usług.`
                  : `A website compatible with the WCAG 2.0 requirements, which can be accesed by various users, regardless of age, disability, used hardware or software. Thanks to this, the Internet becomes a friendly, barrier-free space, and you give the excluded groups a chance to use your services.`}
              </P>
            </RecrutmentTxt>
          </FundationContainer>
          <H3>{lang ? `NA CZYM POLEGA WYKONANIE AUDYTU?` : `WHAT DOES THE AUDIT INVOLVE? `}</H3>
          <Usluga>
            <ImgWrapper>
              <img src={img9} alt="" />
              <p>{lang ? `1. Przegląd serwisu` : `1. Website review`}</p>
            </ImgWrapper>

            <FontAwesomeIcon icon={faLongArrowAltRight} style={{ fontSize: "39px", color: `${mainYellow}` }} />
            <ImgWrapper>
              <img src={img10} alt="" />
              <p>{lang ? `2. Lista kontrolna` : `2. Checklist`}</p>
            </ImgWrapper>
            <FontAwesomeIcon icon={faLongArrowAltRight} style={{ fontSize: "39px", color: `${mainYellow}` }} />
            <ImgWrapper>
              <img src={img11} alt="" />
              <p>{lang ? `3. Testy i ocena wyników` : `3. Tests and evaluation of results`}</p>
            </ImgWrapper>
            <FontAwesomeIcon icon={faLongArrowAltRight} style={{ fontSize: "39px", color: `${mainYellow}` }} />
            <ImgWrapper>
              <img src={img12} alt="" />
              <p>{lang ? `4. Raport Dostępności Cyfrowej` : `Digital Accessibility Report`}</p>
            </ImgWrapper>
            <FontAwesomeIcon icon={faLongArrowAltRight} style={{ fontSize: "39px", color: `${mainYellow}` }} />
            <ImgWrapper>
              <img src={img13} alt="" />
              <p>{lang ? `5. Raport weryfikujący` : `5. Verification Report`}</p>
            </ImgWrapper>
          </Usluga>
        </ContactContainer>
      </FundationWrapper>
      <TittleH2 title={lang ? "Audyt dostępności architektonicznej" : "Audit of architectural accessibility"} />
      <FundationWrapper>
        <ContactContainer>
          <ContactContainerReverse>
            <FirstP>
              <ContactText>
                <P>
                  {lang
                    ? `                  Analiza dostępności budynków i obiektów użyteczności publicznej dla osób z różnymi typami
                  niepełnosprawności, osób z wózkami dziecięcymi, osób starszych i dzieci. Audyt dostępności może być
                  przeprowadzony na etapie tworzenia projektu architektonicznobudowlanego czy wykonawczego lub dla już
                  istniejących obiektów i przestrzeni – przed ich modernizacją lub jako informacja o faktycznej
                  dostępności.`
                    : `Analysis of the availability of buildings and public facilities for people with various types of disabilities, people with prams, the elderly and children.
                  An accessibility audit can be carried out at the stage of architectural and construction project or executive design, or for existing facilities and spaces - before their planned modernization or as information on actual availability.
                  `}
                </P>
              </ContactText>
            </FirstP>
            <ContactImg>
              <img src={img14} alt="" style={{ height: "182px" }} />
            </ContactImg>
          </ContactContainerReverse>
          <DlaKogoWrapper>
            <H3>{lang ? `DLA KOGO?` : `WHOM IS IT FOR?`}</H3>
            <RecContainer>
              <RecrutmentText>
                <img src={img2} alt="" />
                <p>
                  {lang
                    ? `jednostki administracji samorządowej i centralnej`
                    : `local government and central administration units`}
                </p>
              </RecrutmentText>
              <RecrutmentText>
                <img src={img5} alt="" />
                <p>{lang ? `zarządcy infrastruktury komunikacyjnej` : `communication infrastructure managers`}</p>
              </RecrutmentText>
              <RecrutmentText>
                <img src={img15} alt="" />
                <p>{lang ? `deweloperzy` : `developers`}</p>
              </RecrutmentText>
              <RecrutmentText>
                <img src={img6} alt="" />
                <p>{lang ? `instytucje edukacyjne` : `educational institutions`}</p>
              </RecrutmentText>
              <RecrutmentText>
                <img src={img16} alt="" />
                <p>{lang ? `jednostki służby zdrowia` : `health care units`}</p>
              </RecrutmentText>
              <RecrutmentText>
                <img src={img7} alt="" />
                <p>
                  {lang
                    ? `firmy przestrzegające zasad społecznej odpowiedzialności biznesu (CSR)`
                    : `companies adhering to the principles of corporate social responsibility`}
                </p>
              </RecrutmentText>
            </RecContainer>
          </DlaKogoWrapper>
          <FundationContainer>
            <ContactImg>
              <img src={img17} alt="" />
            </ContactImg>
            <RecrutmentTxt>
              <H3>{lang ? `CO ZYSKUJESZ?` : `WHAT IS YOUR GAIN?`}</H3>
              <P>
                {lang
                  ? ` Serwis internetowy zgodny z wymogami WCAG 2.1, który swobodnie mogą obsługiwać różni użytkownicy, bez
                względu na wiek, niepełnosprawność, posiadany sprzęt czy oprogramowanie. Dzięki temu Internet staje się
                przyjazną, pozbawioną barier przestrzenią, a Ty dajesz szansę grupom wykluczonym na skorzystanie z
                Twoich usług.`
                  : `An audit of architectural accessibility indicates specific solutions that will guarantee the accessibility of the facility for people with special needs. Thanks to this, they can easily use buildings, offices, service points and places of entertainment, as well as other places in public space.`}
              </P>
            </RecrutmentTxt>
          </FundationContainer>
          <H3>{lang ? `NA CZYM POLEGA WYKONANIE AUDYTU?` : `WHAT DOES THE AUDIT INVOLVE?`}</H3>
          <Usluga>
            <ImgWrapper>
              <img src={img18} alt="" />
              <p>{lang ? `1. Analiza dostępności` : `1. Accessibility analysis`}</p>
            </ImgWrapper>

            <FontAwesomeIcon icon={faLongArrowAltRight} style={{ fontSize: "39px", color: `${mainYellow}` }} />
            <ImgWrapper>
              <img src={img19} alt="" />
              <p>{lang ? `2. Audit of architectural accessibility` : `2. Raport Dostępności Architektonicznej`}</p>
            </ImgWrapper>
            <FontAwesomeIcon icon={faLongArrowAltRight} style={{ fontSize: "39px", color: `${mainYellow}` }} />
            <ImgWrapper>
              <img src={img20} alt="" />
              <p>{lang ? `3. Solution recommendation` : `3. Rekomendacja rozwiązań`}</p>
            </ImgWrapper>
          </Usluga>
        </ContactContainer>
      </FundationWrapper>
      <TittleH2
        title={
          lang
            ? "Audyt dostępności komunikacyjno-informacyjnej"
            : `Audit of communication and information accessibility`
        }
      />
      <FundationWrapper>
        <ContactContainer>
          <ContactContainerReverse>
            <FirstP>
              <ContactText>
                <P>
                  {lang
                    ? `Dostępność komunikacyjno-informacyjna jest integralną częścią i dopełnieniem zmian architektonicznych
                  i cyfrowych. Audyt pomaga wskazać, które wskazane przez ustawę obszary, wymagają poprawy, np.
                  szerokość ciągów komunikacyjnych i sposób ich oznakowania, względem potrzeb osób ze szczególnymi
                  potrzebami.`
                    : `Communication and information accessibility is an integral part of architectural and digital changes and it complements it. The audit helps to identify which areas indicated by the act require improvement, e.g. the width of communication routes and the way they are marked in relation to the needs of people with special needs.`}
                </P>
              </ContactText>
            </FirstP>
            <ContactImg>
              <img src={img21} alt="" />
            </ContactImg>
          </ContactContainerReverse>
          <DlaKogoWrapper>
            <H3>{lang ? `DLA KOGO?` : `WHO IS IT FOR?`}</H3>
            <RecContainer>
              <RecrutmentText>
                <img src={img2} alt="" />
                <p>
                  {lang
                    ? `jednostki administracji samorządowej i centralnej`
                    : `local government and central administration units`}
                </p>
              </RecrutmentText>
              <RecrutmentText>
                <img src={img5} alt="" />
                <p>{lang ? `zarządcy infrastruktury komunikacyjnej` : `communication infrastructure managers`}</p>
              </RecrutmentText>
              <RecrutmentText>
                <img src={img15} alt="" />
                <p>{lang ? `deweloperzy` : `developers`}</p>
              </RecrutmentText>
              <RecrutmentText>
                <img src={img6} alt="" />
                <p>{lang ? `instytucje edukacyjne` : `educational instututions`}</p>
              </RecrutmentText>
              <RecrutmentText>
                <img src={img16} alt="" />
                <p>{lang ? `jednostki służby zdrowia` : `health care units`}</p>
              </RecrutmentText>
              <RecrutmentText>
                <img src={img7} alt="" />
                <p>
                  {lang
                    ? `firmy przestrzegające zasad społecznej odpowiedzialności biznesu (CSR)`
                    : `companies adhering to the principles of corporate social responsibility (CSR)`}
                </p>
              </RecrutmentText>
            </RecContainer>
          </DlaKogoWrapper>
          <FundationContainer>
            <ContactImg>
              <img src={img22} alt="" />
            </ContactImg>
            <RecrutmentTxt>
              <H3>{lang ? `CO ZYSKUJESZ?` : `WHAT IS YOUR GAIN?`}</H3>
              <P>
                {lang
                  ? `  Audyt komunikacyjno-informacyjny wskażę drogę komunikacji z osobami o szczególnych potrzebach. Dowiesz
                się jak Twoja instytucja może się skutecznie komunikować między innymi z osobami Głuchymi.`
                  : `The communication and information audit will show how to communication with people with special needs. You will learn how your institution can effectively communicate with deaf people, among others.`}
              </P>
            </RecrutmentTxt>
          </FundationContainer>
          <H3>{lang ? `NA CZYM POLEGA WYKONANIE AUDYTU?` : `WHAT DOES THE AUDIT INVOLVE`}</H3>
          <Usluga>
            <ImgWrapper2>
              <img src={img23} alt="" />
              <p>
                {lang
                  ? `1. Analiza dostępności komunikacji z osobami o szczególnych potrzebach.`
                  : `1. Analysis of the accessibility of communication with people with special needs.`}
              </p>
            </ImgWrapper2>

            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              style={{ fontSize: "39px", color: `${mainYellow}`, marginRight: "23px" }}
            />
            <ImgWrapper2>
              <img src={img24} alt="" />
              <p>
                {lang
                  ? `2 .Rozpoznanie potrzeb w zakresie montażu pętli indukcyjnych.`
                  : `2. Identification of the needs for the installation of induction loops.`}
              </p>
            </ImgWrapper2>
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              style={{ fontSize: "39px", color: `${mainYellow}`, marginRight: "23px" }}
            />
            <ImgWrapper2>
              <img src={img25} alt="" />
              <p>
                {lang
                  ? ` 3. Koncepcja opisu działalności Twojej firmy w tekście odczytywalnym maszynowo oraz łatwym do
                odczytania.`
                  : `3. The concept of your business description in a machine-readable and easy-to-read form.
                `}
              </p>
            </ImgWrapper2>
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              style={{ fontSize: "39px", color: `${mainYellow}`, marginRight: "23px" }}
            />
            <ImgWrapper2>
              <img src={img26} alt="" />
              <p>
                {lang
                  ? `4. Propozycje nagrania w polskim języku migowym.`
                  : `4. Proposition of recordings in the Polish sign language.`}
              </p>
            </ImgWrapper2>
          </Usluga>
        </ContactContainer>
      </FundationWrapper>
      <TittleH2 title={lang ? "Wnioski dotacyjne" : "Grant applications"} />
      <FundationWrapper>
        <ContactContainerReverse>
          <H3>{lang ? `JAK DZIAŁAMY?` : `HOW WE WORK?`}</H3>
          <FirstP>
            <ContactText>
              <P>
                {lang
                  ? ` Wspieramy działania w zakresie pozyskania funduszy na poprawę dostępności w czterech obszarach:
                architektonicznym, cyfrowym, komunikacyjnym i organizacyjnym (w ramach dostępnych programów wsparcia).
                Zapewniamy wsparcie na każdym etapie procesu pozyskiwania funduszy, tj. od rozpoznania potrzeb, po
                prawidłową realizację inwestycji oraz rozliczenie otrzymanej dotacji.`
                  : `We help with obtaining funds for improvment of accessibility in four areas: architectural, digital, communication and organizational accessibility (within the framework of available support programs). We provide support at every stage of the process, i.e. from identifying the needs, to the proper implementation of the investment and settlement of the received subsidy.
                `}
              </P>
            </ContactText>
          </FirstP>
          <ContactImg>
            <img src={img27} alt="" style={{ height: "182px" }} />
          </ContactImg>
        </ContactContainerReverse>
        <FundationContainer>
          <ContactImg>
            <img src={img28} alt="" />
          </ContactImg>
          <RecrutmentTxt style={{ padding: "1em" }}>
            <H3>{lang ? `DOSTĘPNOŚĆ TO PROCES` : `ACCESSIBILITY IS A PROCESS`}</H3>
            <P>
              {lang
                ? `Oferujemy dodatkową usługę w postaci asysty na spotkaniach certyfikujących oraz pomoc w obronie projektu i
              jego założeń; wspieramy także na etapie rozliczania projektu. Umożliwiamy nawiązanie współpracy z
              organizacjami pozarządowymi (NGO) na dalszym etapie realizacji projektu. Dopasowujemy działania do
              możliwości jednostki oraz posiadanych zasobów, wierząc, że „Dostępność to proces”.`
                : `We offer an additional service - the assistance at certification meetings and assistance in defending the project and its assumptions; we also provide support at the project settlement stage. We enable the establishment of cooperation with non-governmental organizations (NGOs) at a later stage of the project implementation. We adjust the activities to the capabilities and resources of the entity, believing that "Accessibility is a process".
              `}
            </P>
          </RecrutmentTxt>
        </FundationContainer>
      </FundationWrapper>
      <ContactUs lang={lang} title={lang ? "Zamów audyt" : "Order an audit"} />
      <FundationContainer>
        <GoHome lang={lang} />
      </FundationContainer>
    </>
  );
};

export default Audit;

const RecContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em;
  @media screen and (max-width: 580px) {
    /* flex-direction: column-reverse;
    padding: 1em; */
  }
`;
const ContactContainerReverse = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em;
  @media screen and (max-width: 580px) {
    flex-direction: column-reverse;
    padding: 1em;
  }
`;
const FirstP = styled.div`
  width: 45%;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const FundationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;

  flex-direction: row;
`;

const RecrutmentTxt = styled.div`
  margin-bottom: 3em;
  width: 55%;

  & p {
    margin: 0px;
    margin-top: 8px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ContactImg = styled.div`
  margin: 0 auto;
  & div img {
    width: 100%;
  }
`;

const ContactText = styled.div`
  margin-bottom: 3em;

  & p {
    margin: 0px;
    margin-top: 8px;
  }
`;

const DlaKogoWrapper = styled.div`
  margin-bottom: 3em;
  min-width: 300px;
  width: 100%;

  & p {
    margin: 0px;
    margin-top: 8px;
  }
`;

const RecrutmentText = styled.div`
  margin: 17px 0px 17px 0px;
  width: 45%;
  min-width: 270px;
  align-items: center;
  display: flex;
  & p {
    margin-left: 23px;
  }
`;

const FundationWrapper = styled.section`
  background-color: white;
`;

const Usluga = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  padding: 2em;
  flex-direction: row;
  & svg {
    margin-bottom: 40px;
    @media screen and (max-width: 540px) {
      transform: rotate(90deg);
      margin-bottom: 45px;
    }
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  & img {
    height: 44px;
    margin: 0 auto;
  }
  & p {
    font-weight: bold;
    font-size: 14px;
  }
`;
const ImgWrapper2 = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  & img {
    height: 44px;
    margin: 0 auto;
  }
  & p {
    font-weight: bold;
    font-size: 14px;
  }
`;
