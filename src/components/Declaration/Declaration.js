import React from "react";
import styled from "styled-components";
import { H3, P, GoHome, SiteTitle, TittleH2, Okruszki } from "../../styledComponents/WithStyles";
import chevron from "../../images/icons/chevron_ul.png";

const Declaration = ({ lang }) => {
  return (
    <>
      <Okruszki lang={lang} slug={lang ? "Deklaracja Dostępności" : "Deklaracja Dostępności"} />
      <SiteTitle name={lang ? "DEKLARACJA DOSTĘPNOŚCI" : "DEKLARACJA DOSTĘPNOŚCI"} />
      <TittleH2 title={lang ? "Dostępność strony biznesbezbarier.org" : "Dostępność strony biznesbezbarier.org"} />
      <FundationWrapper>
        <FundationContainer>
          <P>
            {lang
              ? `Fundacja Biznes Bez Barier zobowiązuje się zapewnić dostępność strony internetowej biznesbezbarier.org zgodnie z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie w sprawie dostępności ma zastosowanie do serwisu internetowego biznesbezbarier.org.`
              : `Fundacja Biznes Bez Barier zobowiązuje się zapewnić dostępność strony internetowej biznesbezbarier.org zgodnie z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie w sprawie dostępności ma zastosowanie do serwisu internetowego biznesbezbarier.org.`}
          </P>
          <P>
            {lang
              ? `Data publikacji strony internetowej: 2019-09-15.`
              : ` Data publikacji strony internetowej: 2019-09-15.`}
            <br />
            {lang
              ? `Data ostatniej dużej aktualizacji: 2020-04-08.
`
              : `Data ostatniej dużej aktualizacji: 2020-04-08.`}
          </P>
          <P>
            {lang
              ? `Strona internetowa jest zgodna z ustawą o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie sporządzono dnia 2020-03-30. Deklarację sporządzono na podstawie samooceny przeprowadzonej przez fundację. Na stronie internetowej można korzystać ze standardowych skrótów klawiaturowych.`
              : `Strona internetowa jest zgodna z ustawą o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie sporządzono dnia 2020-03-30. Deklarację sporządzono na podstawie samooceny przeprowadzonej przez fundację. Na stronie internetowej można korzystać ze standardowych skrótów klawiaturowych.`}
          </P>
          <H3>{lang ? `INFORMACJE ZWROTNE I DANE KONTAKTOWE` : `INFORMACJE ZWROTNE I DANE KONTAKTOWE`}</H3>

          <P>
            {lang
              ? `W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Osobą odpowiedzialną jest Magda
            Raszdorf ,adres poczty elektronicznej`
              : `W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Osobą odpowiedzialną jest Magda
            Raszdorf ,adres poczty elektronicznej`}
            <strong> m.raszdorf@biznesbezbarier.org </strong>
            {lang
              ? `Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać skargi na brak
 zapewnienia dostępności. `
              : `Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać skargi na brak
            zapewnienia dostępności.`}
          </P>
          <P>
            Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony internetowej, aplikacji
            mobilnej lub jakiegoś ich elementu. Można także zażądać udostępnienia informacji w formach alternatywnych,
            na przykład odczytanie niedostępnego cyfrowo dokumentu, opisania zawartości filmu bez audiodeskrypcji itp.
            Żądanie powinno zawierać dane osoby zgłaszającej żądanie, wskazanie, o którą stronę internetową lub
            aplikację mobilną chodzi oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę otrzymania informacji
            w formie alternatywnej, powinna także określić formę tej informacji.
          </P>

          <P>
            Podmiot publiczny powinien zrealizować żądanie niezwłocznie i nie później, niż w ciągu 7 dni. Jeżeli
            dotrzymanie tego terminu nie jest możliwe, podmiot publiczny niezwłocznie informuje o tym, kiedy realizacja
            żądania będzie możliwa, przy czym termin ten nie może być dłuższy niż 2 miesiące. Jeżeli zapewnienie
            dostępności nie jest możliwe, podmiot publiczny może zaproponować alternatywny sposób dostępu do informacji.
          </P>

          <P>
            W przypadku, gdy podmiot odmówi realizacji żądania zapewnienia dostępności lub alternatywnego dostępu do
            informacji, można złożyć skargę na takie działanie. Po wyczerpaniu wszystkich możliwości skargę można
            przesłać także do Rzecznika Praw Obywatelskich.
          </P>
        </FundationContainer>
      </FundationWrapper>
      <TittleH2 title={lang ? "Dostępność architektoniczna" : "Dostępność architektoniczna"} />
      <FundationWrapper>
        <FundationContainer>
          <P>
            Fundacja Biznes Bez Barier, <br />
            ul. Gdyńska 25/50, 58-100 Świdnica.
          </P>
          <H3>DOJAZD I WEJŚCIE DO BUDYNKU</H3>
          <List>
            <ul>
              <li>Obok budynku są dwa miejsca parkingowe dla osób niepełnosprawnych.</li>
              <li>Do budynku prowadzi jedno wejście od ul. Gdyńskiej.</li>
              <li>Wejście jest dostępne dla osób na wózkach.</li>
              <li>Przed wejściem nie ma schodów.</li>
            </ul>
          </List>
          <H3>ARCHITEKTURA BUDYNKU</H3>
          <List>
            <ul>
              <li>W budynku znajdują się trzy windy. Tylko jedna z nich jest dostępna dla osób na wózkach.</li>
              <li>Biuro fundacji jest dostępne dla osób na wózkach.</li>
              <li>W budynku brak jest toalety dla osób niepełnosprawnych.</li>
            </ul>
          </List>
          <H3>PORUSZANIE SIĘ PO BUDYNKU</H3>
          <List>
            <ul>
              <li>Do budynku i wszystkich jego pomieszczeń można wejść z psem asystującym i psem przewodnikiem.</li>
              <li>W budynku nie ma pętli indukcyjnych.</li>
              <li>
                W budynku nie ma oznaczeń w alfabecie brajla ani oznaczeń kontrastowych lub w druku powiększonym dla
                <br />
                osób niewidomych i słabowidzących.
              </li>
              <li>W budynku nie można skorzystać z tłumacza polskiego języka migowego (PJM) online.</li>
            </ul>
          </List>
        </FundationContainer>
      </FundationWrapper>
      <FundationWrapper>
        <GoHomeWrapper>
          <GoHome lang={lang} />
        </GoHomeWrapper>
      </FundationWrapper>
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
export default Declaration;
