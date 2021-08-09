import React from "react";
import styled from "styled-components";
import { H3, P, GoHome, SiteTitle, TittleH2, Okruszki, ScreenReaderOnly } from "../styledComponents/WithStyles";
import chevron from "../images/icons/chevron_ul.png";

const deklaracjaDostepnosci = ({ lang }) => {
  return (
    <>
      <Okruszki lang={lang} slug={lang ? "Deklaracja Dostępności" : "Accessibility declaration"} />
      <SiteTitle name={lang ? "DEKLARACJA DOSTĘPNOŚCI" : "ACCESSIBILITY DECLARATION"} />
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">
                {lang ? "Dostępność strony biznesbezbarier.org" : "Accesibility of the biznesbezbarier.org website"}
              </h2>
            </section>
          </div>
        </div>
      </div>
      <section className="decFundationWrapper">
        <div className="decFundationContainer">
          <p className="styled-p">
            {lang
              ? `Fundacja Biznes Bez Barier zobowiązuje się zapewnić dostępność strony internetowej biznesbezbarier.org zgodnie z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie w sprawie dostępności ma zastosowanie do serwisu internetowego biznesbezbarier.org.`
              : `The Business Without Barriers Foundation (Fundacja Biznes Bez Barier) undertakes to ensure the accessibility of the biznesbezbarier.org website in accordance with the Act of April 4 2019 on digital accessibility of websites and mobile applications of public entities. The Accessibility Statement applies to the biznesbezbarier.org website.`}
          </p>
          <p className="styled-p">
            {lang
              ? `Data publikacji strony internetowej: 2019-09-15.`
              : `Date of publication of the website: 2019-09-15.`}
            <br />
            {lang
              ? `Data ostatniej dużej aktualizacji: 2020-04-08.
`
              : `Last major update date: 2020-04-08.`}
          </p>
          <p className="styled-p">
            {lang
              ? `Strona internetowa jest zgodna z ustawą o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie sporządzono dnia 2020-03-30. Deklarację sporządzono na podstawie samooceny przeprowadzonej przez fundację. Na stronie internetowej można korzystać ze standardowych skrótów klawiaturowych.`
              : `The website complies with the Act on digital accessibility of websites and mobile applications of public entities. The statement was made on 2020-03-30. The declaration was drawn up on the basis of a self-assessment carried out by the foundation. You can use standard keyboard shortcuts on the website.`}
          </p>
          <h3 className="styled-h3">
            {lang ? `INFORMACJE ZWROTNE I DANE KONTAKTOWE` : `FEEDBACK AND CONTACT INFORMATION`}
          </h3>

          <p className="styled-p">
            {lang
              ? `W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Osobą odpowiedzialną jest Magda
            Raszdorf ,adres poczty elektronicznej`
              : `In case of problems with the accessibility of the website, please contact us. The person responsible is Magda Raszdorf, e-mail address `}{" "}
            <strong>
              <a href="mailto:m.raszdorf@biznesbezbarier.org" alt="">
                m.raszdorf@biznesbezbarier.org
                <span className="scr-only">
                  {lang ? `Otwarcie programu pocztowego na komputerze.` : `It will open email client on computer`}
                </span>
              </a>{" "}
            </strong>
            {lang
              ? `Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać skargi na brak
 zapewnienia dostępności. `
              : `You can also use this e-mail address to submit requests for disclosure of unavailable information and file complaints about the lack of availability.`}
          </p>
          <p className="styled-p">
            {lang
              ? `            Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony internetowej, aplikacji
            mobilnej lub jakiegoś ich elementu. Można także zażądać udostępnienia informacji w formach alternatywnych,
            na przykład odczytanie niedostępnego cyfrowo dokumentu, opisania zawartości filmu bez audiodeskrypcji itp.
            Żądanie powinno zawierać dane osoby zgłaszającej żądanie, wskazanie, o którą stronę internetową lub
            aplikację mobilną chodzi oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę otrzymania informacji
            w formie alternatywnej, powinna także określić formę tej informacji.`
              : `Everyone has the right to request the accessibility of the website, mobile application or any of their elements. You can also request information to be made available in alternative forms, for example reading of a digitally unavailable document, description of the content of a video without audio description, etc. The request should contain the data of the person submitting the request, an indication of the website or mobile application that is the subject of the request and the method of contact. If the requesting person signals the need to receive an information in an alternative form, this person should also specify the expected form of this information.`}
          </p>

          <p className="styled-p">
            {lang
              ? `           Podmiot publiczny powinien zrealizować żądanie niezwłocznie i nie później, niż w ciągu 7 dni. Jeżeli
            dotrzymanie tego terminu nie jest możliwe, podmiot publiczny niezwłocznie informuje o tym, kiedy realizacja
            żądania będzie możliwa, przy czym termin ten nie może być dłuższy niż 2 miesiące. Jeżeli zapewnienie
            dostępności nie jest możliwe, podmiot publiczny może zaproponować alternatywny sposób dostępu do informacji.`
              : `The public entity should execute the request immediately and no later than within 7 days. If it is not possible to meet this deadline, the public entity shall immediately inform about when it will be possible to fulfill the request, and the deadline may not be longer than 2 months. If accessibility cannot be ensured, the public entity may propose an alternative way of accessing the information.`}
          </p>

          <p className="styled-p">
            {lang
              ? `   W przypadku, gdy podmiot odmówi realizacji żądania zapewnienia dostępności lub alternatywnego dostępu do
            informacji, można złożyć skargę na takie działanie. Po wyczerpaniu wszystkich możliwości skargę można
            przesłać także do Rzecznika Praw Obywatelskich.`
              : `In case the entity refuses to comply with the request to ensure the availability or alternative access to information, a complaint may be made against such action. After exhausting all possibilities, the complaint may also be sent to the Ombudsman.`}
          </p>
        </div>
      </section>
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">{lang ? "Dostępność architektoniczna" : "Architectural accessibility"}</h2>
            </section>
          </div>
        </div>
      </div>
      <section className="decFundationWrapper">
        <div className="decFundationContainer">
          <p className="styled-p">
            {lang ? `Fundacja Biznes Bez Barier,` : `Business Without Barriers Foundation,`} <br />
            ul. Gdyńska 25/50, 58-100 Świdnica.
          </p>
          <h3 className="styled-h3">{lang ? `DOJAZD I WEJŚCIE DO BUDYNKU` : `ACCESS AND ENTRY TO THE BUILDING`}</h3>
          <div className="decList">
            <ul>
              <li>
                {lang
                  ? `Obok budynku są dwa miejsca parkingowe dla osób niepełnosprawnych.`
                  : `There are two parking spaces for persons with disabilities next to the building.`}
              </li>
              <li>
                {lang
                  ? `Do budynku prowadzi jedno wejście od ul. Gdyńskiej.`
                  : `There is one entrance to the building from the Gdyńska street.`}
              </li>
              <li>
                {lang
                  ? `Wejście jest dostępne dla osób na wózkach.`
                  : `The entrance is accessible for wheelchair users.`}
              </li>
              <li>{lang ? `Przed wejściem nie ma schodów.` : `There are no stairs in front of the entrance.`}</li>
            </ul>
          </div>
          <h3 className="styled-h3">{lang ? `ARCHITEKTURA BUDYNKU` : `ARCHITECTURE OF THE BUILDING`}</h3>
          <div className="decList">
            <ul>
              <li>
                {lang
                  ? `W budynku znajdują się trzy windy. Tylko jedna z nich jest dostępna dla osób na wózkach.`
                  : `There are three elevators in the building. Only one of them is accessible to wheelchair users.`}
              </li>
              <li>
                {lang
                  ? `Biuro fundacji jest dostępne dla osób na wózkach.`
                  : `The foundation's office is accessible to people using wheelchairs.`}
              </li>
              <li>
                {lang
                  ? `W budynku brak jest toalety dla osób niepełnosprawnych.`
                  : `There is no toilet for people with disabilities in the building.`}
              </li>
            </ul>
          </div>
          <h3 className="styled-h3">{lang ? `PORUSZANIE SIĘ PO BUDYNKU` : `MOVING AROUND THE BUILDING`}</h3>
          <div className="decList">
            <ul>
              <li>
                {lang
                  ? `Do budynku i wszystkich jego pomieszczeń można wejść z psem asystującym i psem
                przewodnikiem.`
                  : `You can enter the building and all its rooms with an assistance dog and a guide dog.`}
              </li>
              <li>{lang ? `W budynku nie ma pętli indukcyjnych.` : `There are no induction loops in the building.`}</li>
              <li>
                {lang
                  ? ` W budynku nie ma oznaczeń w alfabecie brajla ani oznaczeń kontrastowych lub w druku powiększonym dla`
                  : `There are no Braille markings in the building, no contrast or enlarged print markings for`}
                <br />
                {lang ? `osób niewidomych i słabowidzących.` : ` the blind and visually impaired.`}
              </li>
              <li>
                {lang
                  ? `W budynku nie można skorzystać z tłumacza polskiego języka migowego (PJM) online.`
                  : `It is not possible to use an online Polish Sign Language Interpreter (PJM) in the building.`}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="decFundationWrapper">
        <div className="rapFundationContainer">
          <GoHome lang={lang} />
        </div>
      </section>
    </>
  );
};

const FundationWrapper = styled.section`
  background-color: white;
  padding-bottom: 2em;
`;

const FundationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: row;
  & a {
    color: black;
  }
`;

const GoHomeWrapper = styled.div`
  justify-content: center;
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1.5em;

  & ul {
    padding: 0;
    list-style-image: url(${chevron});
    max-width: 700px;
  }
  & li {
    padding: 10px;
  }
`;
export default deklaracjaDostepnosci;
