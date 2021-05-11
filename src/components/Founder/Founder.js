import React from "react";
import styled from "styled-components";
import {
  H1,
  H2,
  H3,
  P,
  StyledLink,
  secondaryBlack,
  mainBlack,
  mainYellow,
  GoHome,
} from "../../styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import img from "../../images/Fundator/1.png";
import chevron from "../../images/icons/chevron_ul.png";

const Founder = () => {
  return (
    <>
      <AboutUsWrapper2>
        <SiteNameWrapper>
          <SiteName>
            <H1>FUNDATOR</H1>
          </SiteName>
        </SiteNameWrapper>
      </AboutUsWrapper2>
      <FounderSectionWrapper>
        <FounderContainer>
          <FounderText id="skip">
            <H3>ADRIAN FURMAN – FUNDATOR I CZŁONEK RADY FUNDACJI BIZNES BEZ BARIER</H3>
            <P>
              {" "}
              Adrian Furman jest prezesem Grupy AF sp. z o.o. - największej w Polsce firmy zatrudniającej specjalistów z
              niepełnosprawnością. W Stanach Zjednoczonych założył spółkę Poland IT-Lab LLC. Obie specjalizują się w
              branży IT i konsultingu biznesowym. Media nazwały go Stephenem Hawkingiem biznesu.
            </P>
            <P>
              Posiada wieloletnie doświadczenie w zarządzaniu długofalowymi projektami w zakresie komunikacji cyfrowej i
              we wdrażaniu nowych technologii. Współpracował z takimi markami jak: TNT, TUI, KFC, FedEx, 4F i Asseco.
              Kieruje też firmą konsultingową AF Atlantic Trade sp. z o.o., która pomaga polskim i amerykańskim
              przedsiębiorcom pozyskiwać nowe rynki zbytu.
            </P>
            <H3>NAJWAŻNIEJSZE ODZNACZENIA</H3>
            <P>
              Ciągła gotowość do budowania pozytywnego wizerunku osób z niepełnosprawnością na otwartym rynku pracy
              stała się jego misją i motorem napędzającym wszelką aktywność. Świadczą o tym liczne nagrody i
              wyróżnienia, m.in.:
            </P>
          </FounderText>
          <FounderImg>
            <img src={img} />
          </FounderImg>
        </FounderContainer>
      </FounderSectionWrapper>
      <FounderList>
        <ul>
          <li>
            <b>„Polskie Inwestycje Przyszłości” </b> - specjalna nagroda od ministra inwestycji i rozwoju, Jerzego
            Kwiecińskiego, za nieszablonowe podejście do biznesu i pracę na rzecz środowiska osób z
            niepełnosprawnościami,
          </li>
          <li>
            <b>Członek Rady Dostępności</b>, która wspiera merytorycznie programu Dostępność Plus. Projekt realizuje
            Ministerstwo Funduszy i Polityki Regionalnej, dzięki któremu osoby z niepełnosprawnością bez żadnych barier
            będą mogły korzystać z usług administracji publicznej,
          </li>
          <li>
            <b>Ambasador Stanów Zjednoczonych w Polsce</b>, Georgette Mosbacher, w oficjalnym liście wyraziła słowa
            podziwu i uznania za jego biznesowe osiągnięcia, życząc tym samym powodzenia w rozwoju spółki w Stanach
            Zjednoczonych,
          </li>
          <li>
            <b>Specjalne wyróżnienie za inspirowanie rozwoju zawodowego osób z niepełnosprawnością</b> przyznane przez
            Amerykański Instytut Kultury Polskiej w Miami podczas 48. Międzynarodowego Balu Polonez w Miami (nagrodę
            wręczyła Lady Blanka Rosenstiel).
          </li>
        </ul>
      </FounderList>
      <FounderSectionWrapper>
        <MoreInfoContainer>
          <MoreInfoText>
            <H3>MIĘDZYNARODOWE KONFERENCJE BIZNESOWE</H3>
            <P>
              Adrian Furman występował jako ekspert na biznesowych konferencjach związanych z nowoczesnymi technologiami
              w Europie, Stanach Zjednoczonych i w Kanadzie, min: Kongres 60 Milionów w Berlinie, Nowym Jorku i Miami,
              Quo Vadis Conferences Canada w Toronto czy Europejski Kongres Gospodarczy w Katowicach.
            </P>
            <P>
              {" "}
              Więcej informacji na: <br />{" "}
              <OutLink target="__blank" href="https://www.adrianfurman.com/">
                www.AdrianFurman.com
              </OutLink>
            </P>
          </MoreInfoText>
        </MoreInfoContainer>
      </FounderSectionWrapper>
      <FounderSectionWrapper2>
        <FounderContainer>
          <GoHome />
        </FounderContainer>
      </FounderSectionWrapper2>
    </>
  );
};

export default Founder;

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

const FounderSectionWrapper = styled.section`
  background-color: white;
  margin-top: 2.2em;
`;
const FounderSectionWrapper2 = styled.section`
  background-color: white;
`;

const FounderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  padding: 2em;
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
