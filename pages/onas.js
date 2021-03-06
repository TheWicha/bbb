import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { H2, H3, P, GoHome, SiteTitle, Okruszki } from "../styledComponents/WithStyles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import img from "../images/O nas/01.png";
import img2 from "../images/O nas/02.png";
import img3 from "../images/O nas/03.png";
import img4 from "../images/O nas/04.png";
import img5 from "../images/O nas/05.png";
import Head from "next/Head";

const onas = ({ lang }) => {
  const [slug, setSlug] = useState("");
  useEffect(() => {
    setSlug(window.location.pathname);
    document.title = lang ? "O nas - Fundacja Biznes Bez Barier" : "About us - Business Without Barriers Foundation";
  }, [lang, slug]);

  return (
    <>
      <Head>
        <title>{lang ? "O nas - Fundacja Biznes Bez Barier" : "About us - Business Without Barriers Foundation"}</title>
        <meta property="og:title" content={"STAWIAMY NA DOSTĘPNOŚĆ"} key="title" />
        <meta
          property="og:image"
          content={"https://biznesbezbarier.org/_next/static/images/01-4a1c3f4b030ef2b176a0bd8c46375103.png"}
          key="image"
        />
        <meta
          property="og:description"
          content={
            "Kreujemy świat, w którym osoby z niepełnosprawnością nie czują się ciężarem, tylko realizują swoje marzenia i są aktywne zawodowo, wybierając pracę, zgodną z predyspozycjami i umiejętnościami. "
          }
          key="description"
        />
        <meta property="og:url" content={`https://biznesbezbarier.org/onas`} key="url" />
      </Head>

      <Okruszki lang={lang} slug={lang ? "O nas" : "About Us"} />
      <SiteTitle name={lang ? "O NAS" : "ABOUT US"} />
      <section className="about-us-wrapper">
        <div className="about-site-name">
          <div id="skip">
            <section className="about-actions">
              <h2 className="styled-h2">
                {lang ? "Fundacja Biznes bez Barier" : "Business Without Barriers Foundation"}
              </h2>
            </section>
          </div>
        </div>
        <section className="about-section-wrapper">
          <div className="aboutBoxWrapper">
            <div className="upperLeftBox">
              <h3 className="styled-h3">{lang ? "KIM JESTEŚMY?" : "WHO ARE WE?"}</h3>
              <p className="styled-p">
                {lang
                  ? `Kreatorami świata, w którym osoby z niepełnosprawnością nie czują się ciężarem, nie trwają w przekonaniu
                  własnej nieudolności; wręcz przeciwnie – realizują siebie, swoje marzenia, są aktywne zawodowo,
                  wybierając pracę, zgodną z predyspozycjami i umiejętnościami. Pracują, zarabiając na swoje utrzymanie
                  oraz rozwijając swoje pasje i plany zawodowe. Aktywnie im w tym pomagamy.`
                  : `We are the creators of a world in which people with disabilities do not feel a burden and do not believe they are inept; on the contrary - they pursue their own development and their dreams, they are professionally active, choosing a job in line with their predispositions and skills. They work, earning their own living and developing their passions and career plans. We actively help them do this.`}
              </p>
              {/* <StyledLink>
                Skontaktuj się <FontAwesomeIcon style={{ verticalAlign: "-0.2em" }} icon={("fas", faAngleRight)} />
              </StyledLink> */}
            </div>
            <div style={{ width: "397px", display: "flex", justifyContent: "center" }}>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="aboutBoxWrapperReverse">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="upperLeftBox">
              <h3 className="styled-h3">{lang ? "DZIAŁAMY DWUTOROWO" : "WE OPERATE IN TO WAYS"}</h3>
              <p className="styled-p">
                {lang
                  ? `Pomagamy także pracodawcom, udowadniając im, że otwarcie się na pracowników z niepełnosprawnością
                przynosi szereg korzyści obu stronom, a formalności nie są tak skompilowane, jak mogłoby się wydawać.
                Dlatego zajmujemy się rekrutacją na różne stanowiska wśród skutecznych i zmotywowanych osób z
                niepełnosprawnością, posiadającymi odpowiednie kwalifikacje i doświadczenie. W ten sposób promujemy
                otwarty rynek pracy i równe szanse dla każdego - bez względu na wiek, stan zdrowia czy rodzaj
                niepełnosprawności.`
                  : "We also help employers by proving that opening up to employees with disabilities brings a number of benefits to both parties, and the formalities are not as complex as it might seem. That is why we recruit for various positions among effective and motivated people with disabilities who have appropriate qualifications and experience. In this way, we promote an open labor market and equal opportunities for everyone - regardless of age, health condition or disability."}
              </p>
              <Link href={"/rekrutacja"}>
                <a className="styled-link">
                  {lang ? "Zobacz, jak pomagamy pracodawcom" : "See how we help employers"}
                  <FontAwesomeIcon
                    style={{ verticalAlign: "-0.3em", marginLeft: "12px" }}
                    icon={("fas", faAngleRight)}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="aboutBoxWrapper">
            <div className="upperLeftBox">
              <h3 className="styled-h3">{lang ? "STAWIAMY NA DOSTĘPNOŚĆ" : "WE FOCUS ON ACCESIBILITY"}</h3>
              <p className="styled-p">
                {lang
                  ? `Wspieramy wszystkie działania promujące szeroko rozumianą dostępność. Przeprowadzamy także audyty, które
                sprawdzają, czy strony internetowe i aplikacje mobilne podmiotów publicznych spełniają prawne wymogi.
                Fundacja zajmuje się także audytami architektonicznymi i komunikacyjno-organizacyjnymi. Pomagamy też w
                pozyskiwaniu grantów w zakresie programów dostępnościowych.`
                  : "We support all activities promoting broadly understood accessibility. We also carry out audits to check whether the websites and mobile applications of public entities meet legal requirements. The Foundation also conducts architectural, communication and organizational audits. We also help in obtaining grants for accessibility programs."}
              </p>
              <Link href={"/audytDostepnosci"}>
                <a className="styled-link">
                  {" "}
                  {lang ? "Zapoznaj się z naszą ofertą audytów" : "Check our audit offer"}
                  <FontAwesomeIcon
                    style={{ verticalAlign: "-0.3em", marginLeft: "12px" }}
                    icon={("fas", faAngleRight)}
                  />
                </a>
              </Link>
            </div>
            <div style={{ width: "397px", display: "flex", justifyContent: "center" }}>
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="aboutBoxWrapperReverse">
            <div>
              <img src={img4} alt="" />
            </div>
            <div className="upperLeftBox">
              <h3 className="styled-h3">{lang ? "REASUMUJĄC" : "TO SUM UP"}</h3>
              <p className="styled-p">
                {lang
                  ? `Mówimy zdecydowane STOP wszelkiej dyskryminacji i wykluczeniu, nie tylko zawodowemu, mówimy głośne i
                stanowcze TAK dla wyrównania szans, szacunku do drugiej osoby, bez względu na jej stan zdrowia czy
                stopień lub rodzaj niepełnosprawności.`
                  : `We say a definite "STOP" to all discrimination and exclusion, not only on professional level, we say a loud and firm "YES" to equalization of opportunities and respect to other people, regardless of their health condition or the degree or type of disability.`}
              </p>
              <Link href={"/programFundacji"}>
                <a className="styled-link">
                  {lang ? `Zapoznaj się z naszymi programami` : `Learn more about our programs`}
                  <FontAwesomeIcon
                    style={{ verticalAlign: "-0.3em", marginLeft: "12px" }}
                    icon={("fas", faAngleRight)}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="about-site-name">
            <div style={{ marginBottom: "4em" }}>
              <section className="about-actions">
                <h2 className="styled-h2">{lang ? "Władze Fundacji" : "Foundation Authorities"}</h2>
              </section>
            </div>
          </div>
          <div className="aboutBoxWrapper">
            <div>
              <img src={img5} alt="uśmiechnięta twarz Magdaleny Raszdorf" />
            </div>
            <div className="upperLeftBox">
              <h3 className="styled-h3">MAGDALENA RASZDORF</h3>
              <p className="styled-p">
                {lang
                  ? `Prezesem Fundacji Biznes Bez Barier jest Magdalena Raszdorf, absolwentka Uniwersytetu Łódzkiego oraz
                Université de Montréal w Kanadzie oraz certyfikowany Koordynator ds. Dostępności w Organizacji. Posiada
                wieloletnie doświadczenie w zarządzaniu długofalowymi projektami, Human Resources oraz z obszaru rynku
                kapitałowego. Od pięciu lat działa na rzecz osób z różnymi rodzajami niepełnosprawności. Jest ekspertem
                z zakresu dostępności architektonicznej, cyfrowej oraz informacyjno-komunikacyjnej.`
                  : `President
                    The president of the Business Without Barriers Foundation is Magdalena Raszdorf, a graduate of the University 
                    of Lodz and the Université de Montréal in Canada and a certified Accessibility Coordinator in Organization.
                     She has many years of experience in managing long-term projects, Human Resources and in the area of the capital market. 
                     For five years, she has been working of behalf of people with various types of disabilities. She is an expert in the 
                     field of architectural, digital as well as information and communication accessibility.`}
              </p>
            </div>
          </div>
          <GoHome lang={lang} />
        </section>
      </section>
    </>
  );
};
const AboutUsWrapper = styled.section`
  width: 100%;
  background-color: white;
`;
const SiteNameWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 2.2em auto 0 auto;
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
  min-width: 250px;
  padding-bottom: 2em;
`;

export default onas;

/* <StyledLink>
  Skontaktuj się <FontAwesomeIcon style={{ verticalAlign: "-0.2em" }} icon={("fas", faAngleRight)} />
</StyledLink>; */
