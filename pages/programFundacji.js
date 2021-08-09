import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  P,
  secondaryBlack,
  mainBlack,
  GoHome,
  SiteTitle,
  TittleH2,
  ContactUs,
  Okruszki,
  // StyledLink,
} from "../styledComponents/WithStyles";
import img from "../images/Programy Fundacji/1.png";
import img2 from "../images/Programy Fundacji/2.png";
import img3 from "../images/Programy Fundacji/3.png";
import img4 from "../images/Programy Fundacji/4.png";
import img5 from "../images/Programy Fundacji/5.png";
import img6 from "../images/Programy Fundacji/6.png";
import img7 from "../images/Programy Fundacji/7.png";
import img8 from "../images/Programy Fundacji/8.png";

const programyFundacji = ({ lang, isMobile }) => {
  useEffect(() => {
    document.title = lang
      ? "Programy Fundacji - Fundacja Biznes Bez Barier"
      : "Fundation Programs - Business Without Barries";
  }, [lang]);

  return (
    <>
      <Okruszki lang={lang} slug={lang ? "Programy Fundacji" : "Fundation Programs"} />
      <SiteTitle name={lang ? "PROGRAMY FUNDACJI" : "FOUNDATION PROGRAMS"} />
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">{lang ? "Pomagamy w znalezieniu pracy" : "We help in finding a job"}</h2>
            </section>
          </div>
        </div>
      </div>

      <section className="founderSectionWrapper">
        <div className="fundationContainerReverse">
          <div className="fundationText" id="skip">
            <p className="styled-p">
              {lang
                ? `              Prowadzimy specjalną grupę na FB "Go ON!”, dedykowaną osobom zniepełnosprawnością poszukującym pracy i
              praktycznych wskazówekdot. zatrudnienia. Zawiera aktualne ogłoszenia pracy dla OzN w różnych branżach oraz
              całe spektrum fachowych porad, przydatnychlinków i artykułów eksperckich, które pomogą przyszłym
              kandydatom w aplikowaniu, autoprezentacji podczas rozmowy kwalifikacyjnej, radzenia sobie na rynku pracy i
              rozwoju kompetencji.`
                : 'We run a special group on FB "Go ON!", dedicated to people with disabilities who are looking for a job and with practical job-related tips.  It contains current job advertisements for PWD in various industries and a whole spectrum of professional advice, useful links and expert articles that will help future candidates in submitting job applications, self-presentation during an interview, doing well on the labor market and developing their skills.'}
            </p>
            <a target="__blank" href="https://www.facebook.com/groups/grupagoon">
              {lang ? "Dołącz do naszej grupy na Facebooku" : "Join the group on Facebook"}
              <FontAwesomeIcon style={{ verticalAlign: "-0.3em", marginLeft: "12px" }} icon={("fas", faAngleRight)} />
            </a>
          </div>

          <div className="fundationContactImg">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
      {lang ? (
        <>
          <div className="about-us-wrapper" style={{ backgroundColor: "#F8F8F8" }}>
            <div className="about-site-name">
              <div>
                <section className="about-actions" style={{ backgroundColor: "#F8F8F8" }}>
                  <h2 className="styled-h2">{lang ? "Centrum Projektowania CV" : "Centrum Projektowania CV"}</h2>
                </section>
              </div>
            </div>
          </div>

          <section className="fundationWrapperGray">
            <div className="fundationContainer">
              <div className="fundationContactImg">
                <img src={img8} alt="" />
              </div>
              <div className="fundationText">
                <p className="styled-p">
                  {lang
                    ? `              Opracowaliśmy formularz, po wypełnieniu którego można otrzymać szablon CV wraz z poradnikiem przygotowanym przez naszych ekspertów HR, który podpowiada, jak właściwie stworzyć dokument dostosowany do stanowiska pracy na które się aplikuje. To działanie dwutorowe, ponieważ oprócz tego, można wziąć udział w rekrutacjach, które przeprowadza Fundacja Biznes Bez Barier.`
                    : "Opracowaliśmy formularz, po wypełnieniu którego można otrzymać szablon CV wraz z poradnikiem przygotowanym przez naszych ekspertów HR, który podpowiada, jak właściwie stworzyć dokument dostosowany do stanowiska pracy na które się aplikuje. To działanie dwutorowe, ponieważ oprócz tego, można wziąć udział w rekrutacjach, które przeprowadza Fundacja Biznes Bez Barier."}
                </p>
                <Link href="/programyFundacji/Cv">
                  <a className="styled-link">
                    {lang ? "Stwórz CV i otwórz drzwi kariery" : "Stwórz CV i otwórz drzwi kariery"}
                    <FontAwesomeIcon
                      style={{ verticalAlign: "-0.3em", marginLeft: "12px" }}
                      icon={("fas", faAngleRight)}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </>
      ) : (
        ""
      )}
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">
                {lang ? "Kampanie informacyjne i badania" : "Information campaigns and research"}
              </h2>
            </section>
          </div>
        </div>
      </div>

      <section className="founderSectionWrapper">
        <div className="fundationContainerReverse">
          <div className="fundationText">
            <p className="styled-p">
              {lang
                ? `Tworzenie merytorycznych publikacji dla pracodawców (np. e-booków) w celu wskazania im korzyści,
                wynikających z zatrudniania osób z niepełnosprawnością. Przeprowadzanie badań ankietowych, diagnozujących
                problematykę otwartego rynku pracy OzN.`
                : `Creating substantive publications for employers (e.g. e-books) in order to show them the benefits of employing people with disabilities. Conducting surveys, diagnosing the problems of the open labor market of PWD.`}
            </p>
          </div>
          <div className="fundationContactImg">
            <img src={img2} alt="" style={{ maxWidth: "120px" }} />
          </div>
        </div>
      </section>
      <div className="about-us-wrapper" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="about-site-name">
          <div>
            <section className="about-actions" style={{ backgroundColor: "#F8F8F8" }}>
              <h2 className="styled-h2">
                {lang ? "Wskaźnik Równości Biznes bez Barier" : "Business Equality Index without Barriers"}
              </h2>
            </section>
          </div>
        </div>
      </div>
      <section className="fundationWrapperGray">
        <div className="fundationContainer">
          <div className="fundationContactImg">
            <img src={img3} alt="" />
          </div>
          <div className="fundationText">
            <p className="styled-p">
              {lang
                ? `              Stworzenie przejrzystego, rocznego narzędzia analizy porównawczej, które zaoferuje przedsiębiorstwom
              możliwość uzyskania obiektywnego w zakresie ich polityki i praktyk dotyczących integracji osób
              niepełnosprawnych.`
                : `Creation of a transparent, annual benchmarking tool that offers companies the opportunity to get objective information in the area of policies and practices regarding the integration of people with disabilities.
              `}
            </p>
          </div>
        </div>
      </section>
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">{lang ? "Wykorzystaj swój potencjał" : "Use your potential"}</h2>
            </section>
          </div>
        </div>
      </div>

      <section className="founderSectionWrapper">
        <div className="fundationContainerReverse">
          <div className="fundationText">
            <p className="styled-p">
              {lang
                ? `              Utworzenie Security Operation Center w obszarze Cyber Security w oparciu o zatrudnienie osób z
                niepełnosprawnością`
                : "Foundation of a Security Operation Center in the Cyber Security area based on the employment of people with disabilities."}
            </p>
          </div>
          <div className="fundationContactImg">
            <img src={img4} alt="" />
          </div>
        </div>
      </section>
      <div className="about-us-wrapper" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="about-site-name">
          <div>
            <section className="about-actions" style={{ backgroundColor: "#F8F8F8" }}>
              <h2 className="styled-h2">{lang ? "Wejdź na otwarty rynek pracy" : "Enter the open labor market"}</h2>
            </section>
          </div>
        </div>
      </div>

      <section className="fundationWrapperGray">
        <div className="fundationContainer">
          <div className="fundationContactImg">
            <img src={img5} alt="" />
          </div>
          <div className="fundationText">
            <p className="styled-p">
              {lang ? "Utworzenie drukarni offsetowej w oparciu o " : `Foundation of a offset printing house based on`}
              <br />
              {lang ? `zatrudnienie osób z niepełnosprawnością.` : `the employment of people with disabilities.`}
            </p>
          </div>
        </div>
      </section>
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">{lang ? "Szkoła Programowania" : "Programming school"}</h2>
            </section>
          </div>
        </div>
      </div>
      <section className="founderSectionWrapper">
        <div className="fundationContainerReverse">
          <div className="fundationText">
            <p className="styled-p">
              {lang
                ? `Program szkolenia osób z dysfunkcjami w zakresie pozwalającym na zdobycie nowego zawodu z obszaru IT:
                Front–end Developera.`
                : `Training program for people with disabilities tailored to allow them to acquire a new profession in the IT area: Front - end Developer.`}
            </p>
          </div>
          <div className="fundationContactImg">
            <img src={img6} alt="" />
          </div>
        </div>
      </section>
      <div className="about-us-wrapper" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="about-site-name">
          <div>
            <section className="about-actions" style={{ backgroundColor: "#F8F8F8" }}>
              <h2 className="styled-h2">{lang ? "Własna firma na Start" : "Own company for a start"}</h2>
            </section>
          </div>
        </div>
      </div>
      <section className="fundationWrapperGray">
        <div className="fundationContainer">
          <div className="fundationContactImg">
            <img src={img7} alt="" />
          </div>
          <div className="fundationText">
            <p className="styled-p">
              {lang
                ? `              Projekt zakłada aktywizację osób niepełnosprawnych pozostających bez zatrudnienia zapewniając kompleksowe
              wsparcie w zakresie zakładania i prowadzenia działalności gospodarczej.`
                : `The project involves the activation of disabled persons who are unemployed, comprehensive support in establishing and running a business.`}
            </p>
          </div>
        </div>
      </section>
      <section className="founderSectionWrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">{lang ? "Skontaktuj się z nami" : "Contact Us"}</h2>
            </section>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <p className="styled-p" style={{ textAlign: "center" }}>
            {lang
              ? `Masz pytania lub wątpliwości? Skontaktuj się z nami.`
              : `Do you have more questions? Get in touch with us.`}
            <br />
            {lang
              ? `Odpowiemy na wszystkie pytania, doradzimy i pomożemy.`
              : `We will answer all your questions, advise and help.`}
          </p>

          {lang ? (
            <a className="yellow-button" alt="" href="mailto:kontakt@biznesbezbarier.org">
              NAPISZ DO NAS <span className="scr-only"> Otwarcie programu pocztowego na komputerze.</span>
            </a>
          ) : (
            <a className="yellow-button" alt="" href="mailto:contact@foundationbwb.org">
              WRITE TO US <span className="scr-only">Contact Us. It will open email client on computer</span>
            </a>
          )}
        </div>
      </section>
      <section className="founderSectionWrapper">
        <div className="fundationContainer">
          <GoHome lang={lang} />
        </div>
      </section>
    </>
  );
};

export default programyFundacji;

const FundationWrapper = styled.section`
  background-color: white;
`;
const FundationWrapperGray = styled.section`
  background-color: #f8f8f8;
`;

const FundationContainerReverse = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  padding: 2em;
  flex-direction: row;
  @media screen and (max-width: 680px) {
    flex-direction: column-reverse;
  }
`;
const FundationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  padding: 2em;
  flex-direction: row;
`;

const ContactImg = styled.div`
  width: 45%;
  max-width: 170px;
  margin: 0 auto 2em auto;
  & img {
    width: 100%;
  }
`;

const FundationText = styled.div`
  margin-bottom: 3em;
  width: 45%;
  min-width: 300px;

  & p {
    margin: 0px;
    margin-top: 8px;
  }
`;

const StyledLinkA = styled.a`
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
