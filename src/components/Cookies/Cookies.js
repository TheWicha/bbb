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
      <TittleH2 title={lang ? "KLAUZULA INFORMACYJNA RODO" : "GDPR INFORMATION CLAUSE"} />
      <CookiesWrapper>
        <ContactContainer>
          <H3>{lang ? `INFORMUJEMY, ŻE:` : `WE INFORM YOU THAT:`}</H3>
          <ol id="skip">
            <ContactContainerReverse style={{ paddingTop: "0px" }}>
              <ContactText>
                <li>
                  <P>
                    {lang
                      ? `administratorem Państwa danych osobowych jest `
                      : `the administrator of your personal data is the `}
                  </P>
                  <P>
                    <strong>{lang ? `Fundacja Biznes Bez Barier` : `Business Without Barriers Foundation`}</strong>
                  </P>
                  <P>ul. Gdyńska 25/50, 58-100 Świdnica;</P>
                  <P>
                    e-mail: <a href="mailto:kontakt@biznesbezbarier.org;">kontakt@biznesbezbarier.org;</a>
                  </P>
                  <P>
                    <a style={{textDecoration:'none'}} href="tel:tel. (+48) 725 163 741">tel. (+48) 725 163 741;</a>
                  </P>
                  <P>nr KRS 0000793377;</P>
                </li>
              </ContactText>

              <ContactImg>
                <img src={img} alt="" />
              </ContactImg>
            </ContactContainerReverse>

            <li>
              <P style={{ lineHeight: "2.5" }}>
                {lang
                  ? `  dane, uzyskane na podstawie Państwa zgody, będą przetwarzane w celu informowania o aktualnych ofertach
                  pracy zgodnych z Pana/Pani zainteresowaniem (według danych podanymi w formularzu)`
                  : `the data obtained on the basis of your consent will be processed in order to inform about current job offers in line with your interest (according to the data provided in the form)`}
              </P>
            </li>
            <li>
              <P style={{ lineHeight: "2.5" }}>
                {lang
                  ? `Administrator przetwarza następujące kategorie Pani/Pana danych osobowych: imię i nazwisko, adres e-mail`
                  : `The Administrator processes the following categories of your personal data: name and surname, e-mail address`}
              </P>
            </li>
            <li>
              {" "}
              <P style={{ lineHeight: "2.5" }}>
                {lang
                  ? `dane osobowe będą przetwarzane przez okres 2 lat`
                  : `Personal data will be processed for a period of 2 years.`}{" "}
              </P>
            </li>
            <li>
              <P style={{ lineHeight: "2.5" }}>
                {lang
                  ? `   podanie danych osobowych objętych treścią zgody jest dobrowolne, jednakże niezbędne do realizacji wyżej
                wskazanych celów`
                  : `providing personal data covered by the consent is voluntary, but necessary to achieve the above-mentioned purposes`}
              </P>
            </li>
          </ol>
          <H3>
            {" "}
            {lang ? `INFORMUJEMY, ŻE PRZYSŁUGUJE PAŃSTWU PRAWO DO:` : `WE INFORM YOU THAT YOU HAVE THE RIGHT TO:`}
          </H3>
          <ol>
            <li>
              <P style={{ lineHeight: "2.5" }}>
                {lang
                  ? ` żądania od administratora dostępu do dotyczących Państwa danych osobowych,`
                  : `request to access your personal data,`}{" "}
              </P>{" "}
            </li>
            <li>
              <P style={{ lineHeight: "2.5" }}>
                {lang
                  ? `żądania sprostowania Państwa danych osobowych,`
                  : `request the rectification of your personal data,`}{" "}
              </P>{" "}
            </li>
            <li>
              <P style={{ lineHeight: "2.5" }}>
                {lang ? `żądania usunięcia Państwa danych,` : `request the deletion of your personal data,`}{" "}
              </P>{" "}
            </li>
            <li>
              <P style={{ lineHeight: "2.5" }}>
                {lang ? `żądania ograniczenia przetwarzania tych danych,` : ` request to limit data processing,`}{" "}
              </P>{" "}
            </li>
            <li>
              <P style={{ lineHeight: "2.5" }}>
                {lang
                  ? `wniesienia sprzeciwu wobec przetwarzania Państwa danych,`
                  : `submit an objection to the processing of your personal data,`}{" "}
              </P>{" "}
            </li>
            <li>
              <P style={{ lineHeight: "2.5" }}>
                {lang
                  ? `  cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na
                podstawie zgody przed jej cofnięciem;`
                  : `withdraw the consent at any time without influence on the lawfulness of any previous instances in which we processed your personal data prior to the date of your consent withdrawal.`}
              </P>{" "}
            </li>
            <li>
              <P style={{ lineHeight: "2.5" }}>
                {lang
                  ? ` wniesienia skargi do organu nadzorczego–Prezesa Urzędu Ochrony Danych Osobowych, gdy uzna Pani/Pan, że
                przetwarzanie przez Administratora danych osobowych Pani/Pana dotyczących narusza przepisy RODO;`
                  : `submit a complaint to the supervisory body - the President of the Personal Data Protection Office, if you feel that the processing of your personal data by the Administrator violates the provisions of the GDPR;`}{" "}
              </P>
            </li>
          </ol>
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
