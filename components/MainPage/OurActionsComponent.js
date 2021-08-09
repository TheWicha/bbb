import React from "react";
import styled from "styled-components";
import ActionBox from "./ActionBox";
import { nanoid } from "nanoid";
import img1 from "../../images/Strona Główna/2-1.png";
import img2 from "../../images/Strona Główna/2-2.png";
import img3 from "../../images/Strona Główna/2-3.png";
import img4 from "../../images/Strona Główna/2-4.png";
import img5 from "../../images/Strona Główna/2-5.png";
import img6 from "../../images/Strona Główna/2-6.png";

// img, title, text, href

const OurActionsComponent = ({ lang }) => {
  return (
    <section className="action-section">
      <div>
        <h2 className="styled-h2" id="skip">{lang ? "Nasze działania" : "Our activities"}</h2>
      </div>
      <div className="action-box-wrapper">
        {lang
          ? boxes.map((box) => (
              <ActionBox key={nanoid()} title={box.title} img={box.img} text={box.text} href={box.href} id={box.id} lang={lang}/>
            ))
          : boxesEng.map((box) => (
              <ActionBox key={nanoid()} title={box.title} img={box.img} text={box.text} href={box.href} id={box.id} lang={lang} />
            ))}
      </div>
    </section>
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
    title: "Programy Fundacji",
    img: img1,
    text:
      "aktywizujemy zawodowo osoby z niepełnosprawnością i podejmujemy się inicjatyw, których celem jest zapewnienie im szeroko rozumianej dostępności",
    href: "/programFundacji",
    id: "#header"
  },
  {
    title: "Rekrutacja pracowników z niepełnosprawnością",
    img: img2,
    text: "rekrutujemy tylko skutecznych i najlepszych pracowników z niepełnosprawnością, promując otwarty rynek pracy",
    href: "/rekrutacja",
    id: "#header"
  },
  {
    title: "Audyt dostępności cyfrowej",
    img: img3,
    text: "sprawdzamy zgodność stron internetowych i aplikacji mobilnych z wymogami WCAG",
    href: "/audytDostepnosci/?redirect=skip",
    id: "#header"
  },
  {
    title: "Audyt dostępności architektonicznej",
    img: img4,
    text: "badamy dostępność obiektów i przestrzeni publicznych dla osób z niepełnosprawnością",
    href: "/audytDostepnosci#architektoniczny",
    id: "#arch"
  },
  {
    title: "Audyt dostępności komunikacyjno-informacyjnej",
    img: img5,
    text: "wskazujemy sposoby i formy komunikacji, dostosowując je do potrzeb osób ze szczególnymi potrzebami",
    href: "/audytDostepnosci#kom",
    id: "#kom"
  },
  {
    title: "Wnioski dotacyjne",
    img: img6,
    text: "pomagamy różnym instytucjom w przygotowaniu wniosków grantowych na poprawę dostępności",
    href: "/audytDostepnosci#dot",
    id: "#dot"
  },
];
const boxesEng = [
  {
    title: "Foundation's programs",
    img: img1,
    text:
      "we professionally activate people with disabilities and undertake initiatives aimed at providing them with broadly understood accessibility",
    href: "/programFundacji",
    id: "#header"
  },
  {
    title: "Recruitment of employees with disabilities",
    img: img2,
    text: "we recruit only the effective and best employees with disabilities, promoting an open labor market",
    href: "/rekrutacja",
    id: "#header"
  },
  {
    title: "Digital accessibility audits",
    img: img3,
    text: "we check the compliance of websites and mobile applications with WCAG requirements",
    href: "/audytDostepnosci",
    id: "#header"
  },
  {
    title: "Architectural accessibility audits",
    img: img4,
    text: "we study the accessibility of public facilities and spaces for people with disabilities",
    href: "/audytDostepnosci#arch",
    id: "#arch"
  },
  {
    title: "Audit of communication and information accessibility",
    img: img5,
    text: "we indicate methods and forms of communication, adapting them for the people with special needs",
    href: "/audytDostepnosci#kom",
    id: "#kom"
  },
  {
    title: "Grant applications",
    img: img6,
    text: "we help various institutions in the preparation of grant applications to improve accessibility",
    href: "/audytDostepnosci#dot",
    id: "#dot"
  },
];
export default OurActionsComponent;
