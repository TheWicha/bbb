import React, { useEffect } from "react";
import styled from "styled-components";
import {
  H2a,
  P,
  secondaryBlack,
  mainBlack,
  GoHome,
  SiteTitle,
  Okruszki,
  ScreenReaderOnly,
} from "../../styledComponents/WithStyles";
import img from "../../images/Fundator/1.png";
import chevron from "../../images/icons/chevron_ul.png";

const Founder = ({ lang, isMobile }) => {
  useEffect(() => {
    document.title = lang ? "Fundator - Fundacja Biznes Bez Barier" : "Founder - Business Without Barries";
  }, [lang]);
  return (
    <>
      <Okruszki lang={lang} slug={lang ? "Fundator" : "Founder"} />
      <SiteTitle name={lang ? "FUNDATOR" : "FOUNDER"} />
      <FounderSectionWrapper>
        <FounderContainer>
          <FounderText id="skip">
            <H2a>
              {lang
                ? `ADRIAN FURMAN – FUNDATOR I CZŁONEK RADY FUNDACJI BIZNES BEZ BARIER`
                : `ADRIAN FURMAN – FOUNDER AND MEMBER OF THE BOARD OF THE BUSINESS WITHOUT BARRIERS FOUNDATION`}
            </H2a>
            <P>
              {lang
                ? `Adrian Furman jest prezesem Grupy AF sp. z o.o. - największej w Polsce firmy zatrudniającej specjalistów z
                niepełnosprawnością. W Stanach Zjednoczonych założył spółkę Poland IT-Lab LLC. Obie specjalizują się w
                branży IT i konsultingu biznesowym. Media nazwały go Stephenem Hawkingiem biznesu.`
                : `Adrian Furman is the CEO of Grupa AF sp. z o.o. - the largest company in Poland employing experts with disabilities. 
                In the United States, he established the Poland IT-Lab LLC. They both specialize in IT ervices and business consulting. 
                The media called him the Stephen Hawking of business.`}
            </P>
            <P>
              {lang
                ? `Posiada wieloletnie doświadczenie w zarządzaniu długofalowymi projektami w zakresie komunikacji cyfrowej i
                we wdrażaniu nowych technologii. Współpracował z takimi markami jak: TNT, TUI, KFC, FedEx, 4F i Asseco.
                Kieruje też firmą konsultingową AF Atlantic Trade sp. z o.o., która pomaga polskim i amerykańskim
                przedsiębiorcom pozyskiwać nowe rynki zbytu. `
                : `He has many years of experience in managing long-term projects in the field of digital communication and
                implementation of new technologies. He cooperated with brands such as: TNT, TUI, KFC, FedEx, 4F and Asseco. 
                He also manages the consulting company AF Atlantic Trade sp. z o.o. which helps Polish and American entrepreneurs 
                gain new markets.`}
            </P>
            <H2a>{lang ? `NAJWAŻNIEJSZE ODZNACZENIA` : `NOTABLE DISTINCTIONS`}</H2a>
            <P>
              {lang
                ? `              Ciągła gotowość do budowania pozytywnego wizerunku osób z niepełnosprawnością na otwartym rynku pracy
              stała się jego misją i motorem napędzającym wszelką aktywność. Świadczą o tym liczne nagrody i
              wyróżnienia, m.in.:`
                : `            Still ready to build a positive image of people with disabilities on the open labour market. This has become
                his mission as well as a force driving all his activities. Numerous awards and distinctions prove him to be
                an extraordinary person. These include:`}
            </P>
          </FounderText>
          <FounderImg>
            <img
              src={img}
              alt={
                lang
                  ? `ADRIAN FURMAN – FUNDATOR I CZŁONEK RADY FUNDACJI BIZNES BEZ BARIER`
                  : `ADRIAN FURMAN – FOUNDER AND MEMBER OF THE BOARD OF THE BUSINESS WITHOUT BARRIERS FOUNDATION`
              }
            />
          </FounderImg>
        </FounderContainer>
      </FounderSectionWrapper>
      <FounderList>
        <ul>
          <li>
            <b>{lang ? `„Polskie Inwestycje Przyszłości”` : `“Polish Investments of the Future”`} </b>
            {lang
              ? `- specjalna nagroda od ministra inwestycji i rozwoju, Jerzego Kwiecińskiego, za
            nieszablonowe podejście do biznesu i pracę na rzecz środowiska osób z niepełnosprawnościami,`
              : `– a special award from the Minister of Investment and Economic Development, Jerzy Kwieciński, for unconventional approach to business and his work to support disabled people.
            `}
          </li>
          <li>
            <b>{lang ? `Członek Rady Dostępności` : ` a member of the Accessibility Council`}</b>
            {lang
              ? `, która wspiera merytorycznie programu Dostępność Plus. Projekt realizuje Ministerstwo
            Funduszy i Polityki Regionalnej, dzięki któremu osoby z niepełnosprawnością bez żadnych barier będą mogły
            korzystać z usług administracji publicznej,`
              : `, which substantively supports the Accessibility Plus Program. The project is implemented by the Ministry of Funds and Regional Policy. Its main goal is to make every public service or building available to all citizens, without any barriers and obstacles, no matter their age, health condition or kind of disability.`}
          </li>
          <li>
            <b>{lang ? `Ambasador Stanów Zjednoczonych w Polsce` : `Ambassador of the Unites States to Poland`}</b>
            {lang
              ? `, Georgette Mosbacher, w oficjalnym liście wyraziła słowa podziwu i uznania za jego
            biznesowe osiągnięcia, życząc tym samym powodzenia w rozwoju spółki w Stanach Zjednoczonych,`
              : `, Georgette Mosbacher, in her official letter, expressed her appreciation and approval for his business achievements, wishing him good luck with development of his company in the U.S.
            `}
          </li>
          <li>
            <b>
              {lang
                ? `Specjalne wyróżnienie za inspirowanie rozwoju zawodowego osób z niepełnosprawnością`
                : ` A special distinction for inspiring the professional development of people with disabilities`}
            </b>{" "}
            {lang
              ? `przyznane przez Amerykański Instytut Kultury Polskiej w Miami podczas 48. Międzynarodowego
            Balu Polonez w Miami (nagrodę wręczyła Lady Blanka Rosenstiel).`
              : `awarded by the American Institute of Polish Culture in Miami during the 48th International Polonez Ball in Miami (presented by Lady Blanka Rosenstiel)
            `}
          </li>
        </ul>
      </FounderList>
      <FounderSectionWrapper>
        <MoreInfoContainer>
          <MoreInfoText>
            <H2a>{lang ? `MIĘDZYNARODOWE KONFERENCJE BIZNESOWE` : `INTERNATIONAL BUSINESS CONFERENCES`}</H2a>
            <P>
              {lang
                ? `              Adrian Furman występował jako ekspert na biznesowych konferencjach związanych z nowoczesnymi technologiami
              w Europie, Stanach Zjednoczonych i w Kanadzie, min: Kongres 60 Milionów w Berlinie, Nowym Jorku i Miami,
              Quo Vadis Conferences Canada w Toronto czy Europejski Kongres Gospodarczy w Katowicach.`
                : `Adrian Furman has acted as an expert at business conferences related to modern technologies in Europe, the United States and Canada, including the 60 Million Congress in Berlin, New York and Miami, Quo Vadis Conferences Canada in Toronto and the European Economic Congress in Katowice.`}
            </P>
            <P>
              {" "}
              {lang ? ` Więcej informacji na: ` : `More information at:`}
              <br />{" "}
              <OutLink target="__blank" href="https://www.adrianfurman.com/">
                www.AdrianFurman.com
                <ScreenReaderOnly>
                  {lang ? `Otwarcie nowej karty w oknie przeglądarki.` : `It will open new tab in browser`}
                </ScreenReaderOnly>
              </OutLink>
            </P>
          </MoreInfoText>
        </MoreInfoContainer>
      </FounderSectionWrapper>
      <FounderSectionWrapper>
        <FounderContainer>
          <GoHome lang={lang} />
        </FounderContainer>
      </FounderSectionWrapper>
    </>
  );
};

export default Founder;

const FounderSectionWrapper = styled.section`
  background-color: white;
`;

const FounderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 2em;
  @media screen and (max-width: 680px) {
    flex-direction: column-reverse;
  }
`;

const FounderText = styled.div`
  max-width: 45%;
  min-width: 300px;
`;

const FounderImg = styled.div`
  max-width: 45%;
  min-width: 300px;
  margin: 0 auto;
  & img {
    width: 100%;
  }
`;

const FounderList = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em;

  & ul {
    padding: 0;
    list-style-image: url(${chevron});
    max-width: 700px;
  }
  & li {
    padding: 10px;
  }
`;

const MoreInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em;
`;
const MoreInfoText = styled.div`
  max-width: 70%;
  min-width: 300px;
`;

const OutLink = styled.a`
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
