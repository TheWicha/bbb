import React, { useEffect } from "react";
import styled from "styled-components";
import { H3, P, GoHome, SiteTitle, TittleH2, Okruszki } from "../../styledComponents/WithStyles";
import cookieImg from "../../images/Cookies/1.png";
import img from "../../images/Cookies/2.png";
import chevron from "../../images/icons/chevron_ul.png";

const Cookies = ({ lang }) => {
  useEffect(() => {
    document.title = lang
      ? "Polityka Prywatności - Fundacja Biznes Bez Barier"
      : "Privacy policy and cookies - Business Without Barries";
  }, [lang]);
  return (
    <>
      {" "}
      <Okruszki lang={lang} slug={lang ? "Polityka prywatności i cookies" : "Privacy policy and cookies"} />
      <SiteTitle name={lang ? "POLITYKA PRYWATNOŚCI I COOKIES" : "PRIVACY POLICY AND COOKIES"} />
      <TittleH2 title={lang ? "KLAUZULA INFORMACYJNA RODO" : "KLAUZULA INFORMACYJNA RODO"} />
      <CookiesWrapper>
        <ContactContainer>
          <ContactContainerReverse>
            <ContactText id="skip">
              <H3>{lang ? `INFORMUJEMY, ŻE:` : `INFORMUJEMY, ŻE:`}</H3>
              <P>
                {lang
                  ? `1) administratorem Państwa danych osobowych jest `
                  : `1) administratorem Państwa danych osobowych jest `}
              </P>
              <P>
                <strong>Fundacja Biznes Bez Barier</strong>
              </P>
              <P>ul. Gdyńska 25/50, 58-100 Świdnica;</P>
              <P>
                e-mail: <a href="mailto:kontakt@biznesbezbarier.org;">kontakt@biznesbezbarier.org;</a>
              </P>
              <P>tel. (+48) 725 163 741;</P>
              <P>nr KRS 0000793377;</P>
              <P></P>
            </ContactText>

            <ContactImg>
              <img src={img} alt="" />
            </ContactImg>
          </ContactContainerReverse>

          <P style={{ lineHeight: "2.5" }}>
            2) dane, uzyskane na podstawie Państwa zgody, będą przetwarzane w celu informowania o aktualnych ofertach
            pracy zgodnych z Pana/Pani zainteresowaniem (według danych podanymi w formularzu)
            <br /> 3) Administrator przetwarza następujące kategorie Pani/Pana danych osobowych: imię i nazwisko, adres
            e-mail
            <br /> 4) dane osobowe będą przetwarzane przez okres 2 lat
            <br /> 5) podanie danych osobowych objętych treścią zgody jest dobrowolne, jednakże niezbędne do realizacji
            wyżej wskazanych celów
          </P>
          <H3>INFORMUJEMY, ŻE PRZYSŁUGUJE PAŃSTWU PRAWO DO:</H3>
          <P style={{ lineHeight: "2.5" }}>
            1) żądania od administratora dostępu do dotyczących Państwa danych osobowych, <br /> 2) żądania sprostowania
            Państwa danych osobowych,
            <br /> 3) żądania usunięcia Państwa danych,
            <br /> 4) żądania ograniczenia przetwarzania tych danych, <br />
            5) wniesienia sprzeciwu wobec przetwarzania Państwa danych,
            <br /> 6) cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego
            dokonano na podstawie zgody przed jej cofnięciem;
            <br /> 7) wniesienia skargi do organu nadzorczego–Prezesa Urzędu Ochrony Danych Osobowych, gdy uzna
            Pani/Pan, że przetwarzanie przez Administratora danych osobowych Pani/Pana dotyczących narusza przepisy
            RODO;
          </P>
        </ContactContainer>
        <TittleH2 title={lang ? "COOKIES" : "Privacy policy and Cookies"} />
        <ContactContainerReverse>
          <FirstP>
            <P>
              {lang
                ? `Dla Państwa wygody Serwis BiznesBezBarier.org używa plików cookies i podobnych technologii m.in. po to, by
              dostosować serwis do potrzeb użytkowników; także w celach statystycznych.`
                : `For your convenience, foundationbwb.org website uses cookies and similar technologies in order to adapt the service to the users' needs, and for statistical purposes.`}
            </P>
          </FirstP>

          <ContactImg>
            <img src={cookieImg} alt="" />
          </ContactImg>
        </ContactContainerReverse>
        <ContactContainer>
          <H3>{lang ? `CZYM SĄ PLIKI COOKIES?` : `WHAT ARE THE COOKIE FILES?`}</H3>
          <P>
            {lang
              ? ` Cookies to niewielkie pliki tekstowe wysyłane przez serwis internetowy, który odwiedza internauta, do
            urządzenia internauty. W przeglądarce internetowej można zmienić ustawienia dotyczące cookies. Brak zmiany
            tych ustawień oznacza akceptację dla stosowanych tu cookies.`
              : `Cookies are small text files sent by a website that is visited to the user's device. You can change the settings for Cookies in your web browser. If you do not change these settings, you accept the Cookies used here.`}
          </P>
          <H3>{lang ? `DLACZEGO JE STOSUJEMY?` : `WHY ARE WE USING THEM?`}</H3>
          <P>
            {lang
              ? `            Serwis BiznesBezBarier.org stosuje cookies wydajnościowe, czyli służące do zbierania informacji o sposobie
            korzystania ze strony, by lepiej działała, oraz funkcjonalne, czyli pozwalające „pamiętać” o ustawieniach
            użytkownika (np. język, rozmiar czcionki). To m.in.:`
              : `The website uses performance Cookies, which are used to collect information about how to use the site to make it work better, and functional Cookies, which allow to "remember" user settings (for ex. language, font size). They are:`}
          </P>
          <List>
            <ul>
              <li>
                {lang
                  ? `cokies sesyjne (wygasają po zakończeniu sesji)`
                  : `session Cookies (expire at the end of the session)`}
              </li>
              <li>
                {lang
                  ? `Cookies google-analytics.com – statystyki dla witryny BiznesBezBarier.org`
                  : `google-analytics.com Cookies - providing statistics for foundationbwb.org`}
              </li>
            </ul>
          </List>
        </ContactContainer>
        <CookiesWrapper>
          <GoHomeWrapper>
            <GoHome lang={lang} />
          </GoHomeWrapper>
        </CookiesWrapper>
      </CookiesWrapper>
    </>
  );
};

const CookiesWrapper = styled.section`
  background-color: white;
`;
// const FundationContainer = styled.div`
//   align-items: center;
//   display: flex;
//   flex-wrap: wrap;

//   max-width: 1000px;
//   margin: 0 auto;
//   justify-content: center;

//   flex-direction: row;
// `;

const ContactContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;

  margin: 0 auto;
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
  padding-top: 2em;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 630px) {
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
const ContactImg = styled.div`
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

  & p a {
    color: black;
  }
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
const GoHomeWrapper = styled.div`
  justify-content: center;
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
`;

export default Cookies;
