import React from "react";
import styled from "styled-components";
import { H1, H2, H3, P, YellowButton, WhiteButton, StyledLink, mainYellow } from "../../styledComponents/WithStyles";
import ActionBox from "./ActionBox";
import img1 from "../../images/Strona Główna/2-1.png";
import img2 from "../../images/Strona Główna/2-2.png";
import img3 from "../../images/Strona Główna/2-3.png";
import img4 from "../../images/Strona Główna/2-4.png";
import img5 from "../../images/Strona Główna/2-5.png";
import img6 from "../../images/Strona Główna/2-6.png";

// img, title, text, href

const OurActionsComponent = ({ lang }) => {
  return (
    <Actions>
      <Title>
        <H2>Nasze działania</H2>
      </Title>
      <ActionBoxWrapper>
        {boxes.map((box) => (
          <ActionBox title={box.title} img={box.img} text={box.text} href={box.href} />
        ))}
      </ActionBoxWrapper>
    </Actions>
  );
};

const Actions = styled.section`
  max-width: 1300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2.2em auto 0 auto;
`;

const Title = styled.div``;

const ActionBoxWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const boxes = [
  {
    title: "Programy pomocowe fundacji",
    img: img1,
    text:
      "aktywizujemy zawodowo osoby z niepełnosprawnością i podejmujemy się inicjatyw, których celem jest zapewnienie im szeroko rozumianej dostępności",
    href: "/programy-fundacji",
  },
  {
    title: "Rekrutacja pracowników z niepełnosprawnością",
    img: img2,
    text: "rekrutujemy tylko skutecznych i najlepszych pracowników z niepełnosprawnością, promując otwarty rynek pracy",
    href: "/rekrutacja-onz",
  },
  {
    title: "Audyt dostępności cyfrowej",
    img: img3,
    text: "sprawdzamy zgodność stron internetowych i aplikacji mobilnych z wymogami WCAG",
    href: "/audyt-dostepnosci",
  },
  {
    title: "Audyt dostępności architektonicznej",
    img: img4,
    text: "badamy dostępność obiektów i przestrzeni publicznych dla osób z niepełnosprawnością",
    href: "/audyt-dostepnosci",
  },
  {
    title: "Audyt dostępności komunikacyjno-informacyjnej",
    img: img5,
    text: "wskazujemy sposoby i formy komunikacji, dostosowując je do potrzeb osób ze szczególnymi potrzebami",
    href: "/audyt-dostepnosci",
  },
  {
    title: "Wnioski dotacyjne",
    img: img6,
    text: "pomagamy różnym instytucjom w przygotowaniu wniosków grantowych na poprawę dostępności",
    href: "/audyt-dostepnosci",
  },
];
export default OurActionsComponent;
