import React, { useEffect } from "react";
import styled from "styled-components";
import {
  P,
  secondaryBlack,
  mainBlack,
  GoHome,
  SiteTitle,
  TittleH2,
  ContactUs,
  Okruszki,
  H3,
  H2a,
  mainYellow,
  ScreenReaderOnly,
} from "../styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import img from "../images/Rekrutacja/1.png";
import img2 from "../images/Rekrutacja/2.png";
import img3 from "../images/Rekrutacja/3.png";
import img4 from "../images/Rekrutacja/4.png";
import img5 from "../images/Rekrutacja/5.png";
import img6 from "../images/Rekrutacja/6.png";
import img7 from "../images/Rekrutacja/7.png";
import img8 from "../images/Rekrutacja/8.png";
import img9 from "../images/Rekrutacja/9.png";
import img10 from "../images/Rekrutacja/10.png";
import img11 from "../images/Rekrutacja/11.png";
import img12 from "../images/Rekrutacja/12.png";
import img13 from "../images/Rekrutacja/13.png";
import img14 from "../images/Rekrutacja/14.png";

const rekrutacja = ({ lang }) => {
  useEffect(() => {
    document.title = lang
      ? "Rekrutacja OzN - Fundacja Biznes Bez Barier"
      : "Recruitment of PWD - Business Without Barries";
  }, [lang]);
  return (
    <>
      <Okruszki lang={lang} slug={lang ? "Rekrutacja OzN" : "Recruitment of PWD"} />
      <SiteTitle
        name={lang ? "REKRUTACJA PRACOWNIKÓW Z NIEPEŁNOSPRAWNOŚCIĄ" : `RECRUITMENT OF EMPLOYEES WITH DISABILITIES`}
      />
      <section className="founderSectionWrapper">
        <div className="rekrutacjaContainer">
          <div className="firstP">
            <div className="rekrutacjaContactText" id="skip">
              <p className="styled-p">
                {lang
                  ? `                Jesteśmy osobami z różnego rodzaju niepełnosprawnościami, dlatego, bazując na własnym doświadczeniu,
                wiemy, jak możemy pomóc pracodawcom w przeprowadzeniu rekrutacji osób podobnych nam. Dlatego – co jest
                niezwykle istotne – rekrutujemy tylko i wyłącznie SKUTECZNYCH i NAJLEPSZYCH pracowników, zorientowanych
                na mierzalne cele zawodowe.`
                  : `We are people with various types of disabilities, therefore, based on our own experience, we know how we can help employers recruit people similar to us. That is why - which is extremely important - we recruit only the EFFECTIVE and BEST employees focused on measurable professional goals. `}
              </p>
            </div>
            <div className="rekrutacjaContactText">
              <h2 className="styled-h2a">{lang ? `DLA KOGO?` : `WHO IS IT FOR?`}</h2>
              <div className="recrutmentText">
                <img src={img2} alt="" />
                <p>
                  {lang
                    ? `Przedsiębiorcy, którzy poszukują wykwalifikowanych pracowników z niepełnosprawnością`
                    : `Entrepreneurs who are looking for qualified employees.`}
                </p>
              </div>
            </div>
          </div>
          <div className="recContactImg">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="about-us-wrapper">
          <div className="about-site-name">
            <div>
              <section className="about-actions">
                <h2 className="styled-h2">{lang ? "Co zyskujesz?" : "What is your gain?"}</h2>
              </section>
            </div>
          </div>
        </div>
        <section className="recWrapper">
          <div className="news-container">
            <div className="recContactImg">
              <img src={img3} alt="" style={{ maxWidth: "120px" }} />
            </div>
            <div className="recRecrutmentTxt">
              <h2 className="styled-h2a">
                {lang
                  ? `ZWROT KOSZTÓW SZKOLEŃ I WYPOSAŻENIA STANOWISKA PRACY`
                  : `REIMBURSEMENT OF COSTS OF TRAINING AND WORKPLACE EQUIPMENT`}
              </h2>
              <p className="styled-p">
                {lang
                  ? `(*w zależności od spełnienia wymagań powiatowych bądź wojewódzkich urzędów pracy) Pracodawca, inwestując
                w rozwój zawodowy pracownika, może zwrócić się z wnioskiem do PFRON o refundację kosztów szkoleń (nawet
                do 70%). Należy też pamiętać, że niepełnosprawność niejedno ma imię i każdy jej rodzaj będzie wymagać
                indywidualnego przystosowania do potrzeb stanowiska pracy. W grę wchodzi np. zakup odpowiedniego
                oprogramowania, urządzeń czy mebli biurowych.`
                  : `(* depending on the fulfillment of the requirements of poviat or voivodeship labor offices) The employer, investing in the professional development of an employee, may apply to State Fund for Rehabilitation of the Disabled (PFRON) for reimbursement of training costs (even up to 70%). It should also be remembered that disability has many names and each type of disability will require individual adaptation of the workplace to the needs of certain employees. This includes, for example, the purchase of appropriate software, devices or office furniture.
                `}
              </p>
            </div>
          </div>
        </section>
        <section className="recWrapper">
          <div className="recFundationContainerReverse">
            <div className="recRecrutmentTxt">
              <h2 className="styled-h2a">
                {lang ? `OBNIŻENIE OBOWIĄZKOWEJ WPŁATY DO PFRON` : `REDUCTION OF MANDATORY PAYMENT TO PFRON`}
              </h2>
              <p className="styled-p">
                {lang
                  ? `Jeżeli jesteś pracodawcą niepublicznym zatrudniającym co najmniej 25 pracowników etatowych, to 6% z nich
                musi być osobami z niepełnosprawnością. Jest to limit, którego niespełnienie skutkuje opłatą na rzecz
                PFRON. W przypadku 100 pracowników nieobsadzenie 6 etatów osobami z niepełnosprawnością oznacza ok. 12
                255 zł kosztu miesięcznie, którego można uniknąć, zatrudniając osoby z niepełnosprawnością. Dodatkowo, spełniając próg zatrudnienia 6%, można uzyskać dofinansowania do kosztów płacy w wysokości nawet 1950 zł za osobę (zależy od stopnia i rodzaju niepełnosprawności); dodatkowo 1200 zł (schorzenie szczególne przy stopniu znacznym).`
                  : `If you are a private employer with at least 25 full-time employees, 6% of them must be people with disabilities. If the number of employees with disabilities is lower than this percentage, the company must pay a fee to the PFRON. In the case of 100 employees, not filling 6 positions with persons with disabilities means about PLN 12,255 costs per month, which can be avoided by employing persons with disabilities. Additionally, if the employment threshold of 6% is met, it is possible to obtain subsidies to salaries in the amount of up to 1950 PLN per person (depending on the degree and type of disability); additionally, 1200 PLN (a special condition and a significant degree)`}
              </p>
            </div>

            <div className="recContactImg">
              <img src={img4} alt="" />
            </div>
          </div>
        </section>
        <section className="recWrapper">
          <div className="news-container">
            <div className="recContactImg">
              <img src={img5} alt="" />
            </div>
            <div className="recRecrutmentTxt">
              <h2 className="styled-h2a">
                {lang
                  ? `CSR, STRATEGIA KOMUNIKACYJNA FIRMY I EMPLOYER BRANDING`
                  : `CSR, COMPANY COMMUNICATION STRATEGY AND EMPLOYER BRANDING
`}
              </h2>
              <p className="styled-p">
                {lang
                  ? ` Społeczna Odpowiedzialność Biznesu (CSR) – to teoria według której przedsiębiorca w swoich biznesowych
                działaniach uwzględnia ważny interes społeczny. Pracodawca w oczach klientów i interesariuszy wzmacnia
                swój wizerunek jako solidnego i uczciwego partnera, i inwestuje w zasoby ludzkie, do tej pory pomijane.
                Ewentualne wydatki są źródłem innowacji i rozwoju przedsiębiorstwa, a nie ich kosztem.`
                  : `Corporate Social Responsibility (CSR) is a theory according to which an entrepreneur takes into account an important social interest in his business activities. In the eyes of clients and stakeholders, the employer strengthens his image as a reliable and honest partner and invests in human resources that were overlooked so far. Possible expenses are not a cost, but a source of innovation and development of the enterprise. 
                `}
              </p>
            </div>
          </div>
        </section>
        <section className="recWrapper">
          <div className="recFundationContainerReverse">
            <div className="recRecrutmentTxt">
              <h2 className="styled-h2a">
                {lang ? `BUDOWANIE EMPATII I WARTOŚCI ZESPOŁU` : `BUILDING OF TEAM'S VALUE AND EMPATHY`}
              </h2>
              <p className="styled-p">
                {lang
                  ? ` Zgrany zespół, składający się z ambitnych pracowników, to połowa sukcesu w realizacji zadań. Z
                doświadczenia wiemy, że osoba z niepełnosprawnością, której dano szansę, charakteryzuje się niezwykłą
                sumiennością w wykonywaniu swoich zadań, co z natury rzeczy wpłynie na morale i ambicje pozostałych
                pracowników, którzy po wspólnym sukcesie docenią słuszność decyzji pracodawcy.`
                  : `A well-coordinated team, consisting of ambitious employees, is half the success in carrying out tasks. We know from experience that a person with a disability who has been given a chance is extremely diligent in carrying out his or her tasks, which will naturally affect the morale and ambitions of other employees who, achieving a joint success, will appreciate the employer's decision.`}
              </p>
            </div>

            <div className="recContactImg">
              <img src={img6} alt="" />
            </div>
          </div>
        </section>
        <div className="about-us-wrapper">
          <div className="about-site-name">
            <div>
              <section className="about-actions">
                <h2 className="styled-h2">
                  {lang ? "Jak przebiega proces naszej usługi?" : "How is the process or our service?"}
                </h2>
              </section>
            </div>
          </div>
        </div>

        <section className="recWrapper">
          <div className="recUsluga">
            <div className="recImgWrapper">
              <img src={img7} alt="" />
              <p>
                {lang
                  ? `1.Określenie z klientem profilu kandydata`
                  : `1.Defining the candidate's profile with the client`}
              </p>
            </div>

            <FontAwesomeIcon icon={faLongArrowAltRight} style={{ fontSize: "39px", color: `${mainYellow}` }} />
            <div className="recImgWrapper">
              <img src={img8} alt="" />
              <p>{lang ? `2.Proces rekrutacyjny.` : `2.Recruitment process`}</p>
            </div>
            <FontAwesomeIcon icon={faLongArrowAltRight} style={{ fontSize: "39px", color: `${mainYellow}` }} />
            <div className="recImgWrapper">
              <img src={img9} alt="" />
              <p>{lang ? `3.Porównanie kandydatów z profilem idealnym` : `3.Verification of the documentation`}</p>
            </div>
            <FontAwesomeIcon icon={faLongArrowAltRight} style={{ fontSize: "39px", color: `${mainYellow}` }} />
            <div className="recImgWrapper">
              <img src={img10} alt="" />
              <p>{lang ? `4.Prezentacja kandydatów klientowi` : `4.Presentation of the candidates to the client`}</p>
            </div>
            <FontAwesomeIcon icon={faLongArrowAltRight} style={{ fontSize: "39px", color: `${mainYellow}` }} />
            <div className="recImgWrapper">
              <img src={img11} alt="" />
              <p>
                {lang ? `5.Wsparcie w zatrudnieniu, procesie kadrowym` : `Support in employment and the HR process`}
              </p>
            </div>
          </div>
        </section>
        <div className="about-us-wrapper">
          <div className="about-site-name">
            <div>
              <section className="about-actions">
                <h2 className="styled-h2">{lang ? "Patronem usługi jest" : "The service partner is"}</h2>
              </section>
            </div>
          </div>
        </div>
        <div className="recFundationContainerReverse">
          <div className="recRecrutmentTxt">
            <h2 className="styled-h2a">{lang ? `PRACA BEZ BARIER` : `WORK WITHOUT BARRIERS`}</h2>
            <p className="styled-p">
              {lang
                ? ` Komercyjna Agencja Pracy, która rekomenduje pracowników wyłącznie spośród sprawdzonych i wykwalifikowanych
              osób Głuchych i Słabosłyszących. Pomaga w szkoleniu pracownika w nowym środowisku pracy oraz obowiązkach.
              Przekazuje niezbędną wiedzę w procesie zatrudniania osoby Głuchej lub Słabosłyszącej, pomaga w adaptacji
              miejsc pracy do potrzeb Głuchego pracownika, by wszystkim pracowało się komfortowo.`
                : `the Commercial Employment Agency, which recommends employees only from among proven and qualified deaf and hard of hearing people. It helps in training of the employee in the new work environment and duties. It provides the necessary knowledge in the process of employing a deaf or hard of hearing person, helps in adapting workplaces to the needs of a deaf employee, so that everyone can work comfortably.
              `}
            </p>
          </div>

          <div className="recContactImg">
            <img src={img12} alt="" />
          </div>
        </div>
        <div className="about-us-wrapper">
          <div className="about-site-name">
            <div>
              <section className="about-actions">
                <h2 className="styled-h2">{lang ? "Wsparcie merytoryczne" : "Substantive support"}</h2>
              </section>
            </div>
          </div>
        </div>

        <div className="recLogosContainer">
          <div className="recLogoAndTextWrapper">
            <div className="recContactImg">
              <img src={img13} alt="GrupaAF" />
            </div>
            <div className="recImageAndText">
              <h3 className="styled-h3">GRUPA AF SP. Z O.O. </h3>

              <a href="https://grupaaf.pl/" target="__blank">
                www.GrupaAF.pl
                <span className="scr-only">{lang ? "Otwarcie w nowym oknie" : "It will be open in a new window"}</span>
              </a>
            </div>
          </div>
          <div className="recLogoAndTextWrapper">
            <div className="recContactImg">
              <img src={img14} alt="Migam" />
            </div>
            <div className="recImageAndText">
              <h3 className="styled-h3">MIGAM </h3>

              <a href="https://migam.org/" target="__blank">
                www.migam.org
                <span className="scr-only">{lang ? "Otwarcie w nowym oknie" : "It will be open in a new window"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="about-site-name">
        <div>
          <section className="about-actions" style={{ backgroundColor: "#f8f8f8" }}>
            <h2 className="styled-h2">{lang ? "Zamów usługę" : "Request Servic"}</h2>
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

      <div className="news-container">
        <GoHome lang={lang} />
      </div>
    </>
  );
};

export default rekrutacja;

const FirstP = styled.div`
  width: 45%;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em;
  @media screen and (max-width: 580px) {
    flex-direction: column-reverse;
    padding: 1em;
  }
`;

const ContactText = styled.div`
  margin-bottom: 3em;
  min-width: 300px;

  & p {
    margin: 0px;
    margin-top: 8px;
  }
`;
const ContactImg = styled.div`
  /* min-width: 300px; */
  margin: 0 auto;
  & img {
    width: 100%;
  }
`;

const RecrutmentText = styled.div`
  align-items: center;
  display: flex;
  & p {
    margin-left: 23px;
  }
`;
const FundationWrapper = styled.section`
  background-color: white;
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
    padding: 1em;
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

const Usluga = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  padding: 2em;
  flex-direction: row;
  & svg {
    margin-left: 10px;
    margin-right: 30px;
    @media screen and (max-width: 540px) {
      transform: rotate(90deg);
      margin-bottom: 45px;
    }
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 130px;
  flex-direction: column;
  & img {
    width: 78px;
    margin: 0 auto;
  }
  & p {
    font-weight: bold;
    height: 90px;
  }
`;

const LogosContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 2em;
  flex-direction: row;
  @media screen and (max-width: 805px) {
    flex-direction: column;
  }
`;

const LogoAndTextWrapper = styled.div`
  min-width: 270px;
  flex-wrap: wrap;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & p {
    font-size: 23px;
    font-weight: bold;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  & a {
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
  }

  @media screen and (max-width: 805px) {
    flex-direction: column;
    height: 280px;
  }
`;

const ImageAndText = styled.div``;
