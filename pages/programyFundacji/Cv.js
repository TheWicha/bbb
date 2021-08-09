import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  H3,
  P,
  GoHome,
  ContactUs,
  SiteTitle,
  TittleH2,
  mainYellow,
  secondaryBlack,
  mainBlack,
} from "../../styledComponents/WithStyles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import img from "../../images/CV/1.png";
import img2 from "../../images/CV/2.png";
import positions from "../../components/positions";
import emailjs from "emailjs-com";

const Cv = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: "",
    familyName: "",
    email: "",
    tel: "",
    remote: "",
    workPositions: [],
  });

  const [showList, setShowList] = useState(false);
  const [positionsAmount, setPositionAmount] = useState(0);
  const [checkedState, setCheckedState] = useState(new Array(positions.length).fill(false));
  const [refs] = useState(new Array(positions.length).fill(useRef()));
  const [remoteRefs] = useState(new Array(3).fill(useRef()));
  const [isSended, setIsSended] = useState(false);
  const myForm = useRef();
  const agreementBox = useRef();

  useEffect(() => {
    document.onkeydown = (event) => {
      event = event || window.event;
      if (event.code === "Escape") {
        setShowList(false);
      }
    };
  }, [showList]);

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //----------send data using EmailJS----------//
    emailjs.send("service_4hqgkft", "template_tqxeahw", formData, "user_N1X23livM7PNVJhMjc8Eo").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );

    emailjs.send("service_4hqgkft", "template_1omn5ks", formData, "user_N1X23livM7PNVJhMjc8Eo").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
    //----------end of send data using EmailJSm----------//

    //----------reset form----------//
    setFormData({
      name: "",
      familyName: "",
      email: "",
      tel: "",
      remote: "",
    });

    const resetState = checkedState.map((item) => (item = false));
    setCheckedState(resetState);
    setPositionAmount(0);

    refs.map((ref) => (ref.disabled = false));
    remoteRefs.map((checkbox) => (checkbox.checked = false));

    agreementBox.current.checked = false;

    setIsSended(true);
    setTimeout(() => {
      setIsSended(false);
    }, 5000);
    //----------end of reset form----------//
  };

  const handleList = (e) => {
    e.preventDefault();
    setShowList((prevState) => !prevState);
  };

  const handleChange = (e, positionIndex) => {
    const updatedCheckState = checkedState.map((item, index) => (index === positionIndex ? !item : item));
    setCheckedState(updatedCheckState);

    e.target.checked
      ? setPositionAmount((prevState) => prevState + 1)
      : setPositionAmount((prevState) => prevState - 1);

    let queue = [];

    refs.map((ref) => {
      if (ref.checked === true) {
        return queue.push(ref.value);
      }
      if (positionsAmount === 2) {
        return ref.checked === true ? (ref.disabled = false) : (ref.disabled = true);
      } else {
        return (ref.disabled = false);
      }
    });

    setFormData({
      ...formData,
      workPositions: queue,
    });
  };

  return (
    <>
      <div className="cvSiteNameWrapper">
        <ul className="cvBreadCrumbs">
          <li>
            <Link href="/">
              <a className="cvFirstLink">
                {lang ? `Strona Główna` : "Main Page"}
                <FontAwesomeIcon
                  icon={("fas", faAngleRight)}
                  style={{ verticalAlign: "-0.525em", height: "1.4em", color: mainYellow, width: "1.7em" }}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/programFundacji">
              <a className="cvFirstLink">
                {lang ? `Programy Fundacji` : "Fundation Programs"}
                <FontAwesomeIcon
                  icon={("fas", faAngleRight)}
                  style={{ verticalAlign: "-0.525em", height: "1.4em", color: mainYellow, width: "1.7em" }}
                />
              </a>
            </Link>
          </li>

          <li aria-hidden="true">
            <p className="cvSecondLink">CV Na Wymiar</p>
          </li>
        </ul>
      </div>
      <SiteTitle name={lang ? "CV NA WYMIAR" : "CV NA WYMIAR"} />
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">
                {lang ? "Zwiększ szansę na pracę tworząc z nami CV" : "Zwiększ szansę na pracę tworząc z nami CV"}
              </h2>
            </section>
          </div>
        </div>
      </div>
      <div className="cvFundationWrapper">
        <div className="cvFundationContainerReverse">
          <div className="cvFundationText" id="skip">
            <p className="styled-p">
              {lang
                ? `Przygotowaliśmy narzędzie pomagające stworzyć CV osobom z niepełnosprawnościami (OzN) poszukującym pracy odpowiedniej do swoich potrzeb, preferencji i kompetencji. Prowadząc projekty rekrutacyjne dla OzN jest szansa, że wśród nich znajdziemy ofertę dopasowaną do Ciebie.`
                : "Przygotowaliśmy narzędzie pomagające stworzyć CV osobom z niepełnosprawnościami (OzN) poszukującym pracy odpowiedniej do swoich potrzeb, preferencji i kompetencji. Prowadząc projekty rekrutacyjne dla OzN jest szansa, że wśród nich znajdziemy ofertę dopasowaną do Ciebie."}
            </p>
          </div>

          <div className="cvContactImg">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">{lang ? "Jak to działa?" : "Jak to działa?"}</h2>
            </section>
          </div>
        </div>
      </div>
      <section className="cvFundationWrapper">
        <div className="cvFundationContainer">
          <div className="cvContactImg">
            <img src={img2} alt="" />
          </div>
          <div className="cvFundationText">
            <p className="styled-p">
              {lang
                ? `Zachęcamy do wypełnienia krótkiego formularza, po wysłaniu którego na Twoją skrzynkę e-mail automatycznie otrzymasz pakiet zawierający Szablon CV w wersji edytowalnej oraz Poradnik CV. Oba dokumenty zostały starannie opracowane przez naszych ekspertów w taki sposób, aby pomogły Tobie w samodzielnym przygotowaniu CV, które zwiększy Twoją szansę na znalezienie pracy. Z gotowym CV będziesz mógł aplikować o pracę w dowolnych miejscach, w tym u nas. Dane z formularza będziemy przechowywać w naszej bazie przez okres 2 lat. Jeżeli w tym czasie pojawi się u nas oferta pracy na stanowisku/stanowiskach, które wskażesz w formularzu, będziemy mogli skontaktować się z Tobą prosząc o przesłanie CV.`
                : `Zachęcamy do wypełnienia krótkiego formularza, po wysłaniu którego na Twoją skrzynkę e-mail automatycznie otrzymasz pakiet zawierający Szablon CV w wersji edytowalnej oraz Poradnik CV. Oba dokumenty zostały starannie opracowane przez naszych ekspertów w taki sposób, aby pomogły Tobie w samodzielnym przygotowaniu CV, które zwiększy Twoją szansę na znalezienie pracy. Z gotowym CV będziesz mógł aplikować o pracę w dowolnych miejscach, w tym u nas. Dane z formularza będziemy przechowywać w naszej bazie przez okres 2 lat. Jeżeli w tym czasie pojawi się u nas oferta pracy na stanowisku/stanowiskach, które wskażesz w formularzu, będziemy mogli skontaktować się z Tobą prosząc o przesłanie CV.`}
            </p>
          </div>
        </div>
      </section>
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">{lang ? "Weź udział w rekrutacji" : "Weź udział w rekrutacji"}</h2>
            </section>
          </div>
        </div>
      </div>
      <section className="cvFundationWrapper">
        <section className="cvFundationContainer">
          <form className="cvStyledForm" onSubmit={handleSubmit} ref={myForm} id="myForm">
            <h3 className="styled-h3" style={{ textAlign: "center" }}>
              TWOJE DANE KONTAKTOWE
            </h3>
            <div className="cvLabelsWrapper">
              <label className="cvLabel" htmlFor="name">
                <span>
                  Imię <span className="cvRedStar">*</span>
                </span>
                <span className="scr-only"> to pole jest wymagane </span>
                <input
                  required
                  type="text"
                  id="name"
                  value={formData.name}
                  autoComplete={"name"}
                  name="name"
                  onChange={handleFormData}
                />
              </label>
              <label className="cvLabel" htmlFor="nazwisko">
                <span>
                  Nazwisko <span className="cvRedStar">*</span>
                </span>

                <span className="scr-only"> to pole jest wymagane </span>
                <input
                  required
                  value={formData.familyName}
                  type="text"
                  id="nazwisko"
                  name="familyName"
                  autoComplete={"family-name"}
                  onChange={handleFormData}
                />
              </label>
            </div>
            <div className="cvLabelsWrapper">
              <label className="cvLabel" htmlFor="email">
                <span>
                  Email <span className="cvRedStar">*</span>
                </span>

                <span className="scr-only"> {lang ? `to pole jest wymagane.` : `this field is required.`}</span>
                <input
                  required
                  type="email"
                  id="email"
                  value={formData.email}
                  name="email"
                  autoComplete={"email"}
                  onChange={handleFormData}
                  pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                  style={{ textTransform: "lowercase" }}
                />
                <span className="cvExampleText" aria-hidden="true">
                  format: przykład@biznesbezbarier.org
                </span>
              </label>
              <label className="cvLabel" htmlFor="tel">
                <span>
                  Telefon <span className="cvRedStar">*</span>
                </span>

                <span className="scr-only">
                  {" "}
                  {lang
                    ? `to pole jest wymagane. Format 123-456-789 `
                    : `this field is required. Format 123-456-789`}{" "}
                </span>
                <input
                  required
                  type="tel"
                  id="telefon"
                  value={formData.tel}
                  name="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                  autoComplete={"tel"}
                  onChange={handleFormData}
                />
                <span className="cvExampleText" aria-hidden="true">
                  format: 123-456-789
                </span>
              </label>
            </div>
            <div className="cvPositionsWrapper">
              <h3 className="styled-h3">PRACA, KTÓRĄ JESTEŚ ZAINTERESOWANY</h3>
              <div>
                <p>Wybierz maksymalnie 3 stanowiska</p>
              </div>
              <div style={{ position: "relative", maxWidth: "360px" }}>
                <button className="cvShowListButton" onFocus={handleList} onClick={handleList}>
                  Wybierz stanowisko
                  {showList ? (
                    <FontAwesomeIcon icon={("fas", faAngleDown)} />
                  ) : (
                    <FontAwesomeIcon icon={("fas", faAngleUp)} />
                  )}
                </button>
                <div className="cvListContainer" style={{ display: showList ? "flex" : "none" }}>
                  <ul>
                    {positions.map((positon, index, array) => {
                      return (
                        <li key={index}>
                          <label className="cvStyledCheckboxLabel">
                            {positon}
                            <input
                              ref={(el) => (refs[index] = el)}
                              checked={checkedState[index]}
                              value={positon}
                              name={positon}
                              id={positon}
                              type="checkbox"
                              onChange={(e) => {
                                handleChange(e, index);
                              }}
                            />
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="cvRemoteWrapper">
              <p>Czy szukasz pracy w formie zdalnej?</p>
              <label
                className="cvStyledForRemoteLabel"
                htmlFor="tak"
                onFocus={() => {
                  setShowList(false);
                }}
              >
                <input
                  ref={(el) => (remoteRefs[0] = el)}
                  type="radio"
                  onChange={handleFormData}
                  name={"remote"}
                  id={"tak"}
                  value="Tak, tylko takiej"
                />
                Tak, tylko takiej
              </label>
              <label className="cvStyledForRemoteLabel" htmlFor="nie">
                <input
                  ref={(el) => (remoteRefs[1] = el)}
                  type="radio"
                  onChange={handleFormData}
                  name={"remote"}
                  id={"nie"}
                  value="Nie, zdecydowanie wolę pracę stacjonarną"
                />
                Nie, zdecydowanie wolę pracę stacjonarną
              </label>
              <label className="cvStyledForRemoteLabel" htmlFor="oba">
                <input
                  ref={(el) => (remoteRefs[2] = el)}
                  type="radio"
                  onChange={handleFormData}
                  name={"remote"}
                  id={"oba"}
                  value="Mogę pracować zdalnie lub stacjonarnie"
                />
                Mogę pracować zdalnie lub stacjonarnie
              </label>
            </div>
            <div className="cvAgreementWrapper">
              <label>
                <input ref={agreementBox} required type="checkbox" name="agreement" id="agreement" />
                Wysyłając formularz wyrażam zgodę na przetwarzanie moich danych osobowych przez Fundację Biznes Bez
                Barier, z siedzibą w Świdnicy, przy ul. Gdyńskiej 25/50, na zasadach określonych w{" "}
                <Link href="/politykaPrywatnosci">Polityce prywatności</Link>
                <span className="cvRedStar">*</span>
              </label>
            </div>
            {isSended && (
              <div className="cvSuccessMessage">
                <p>Dziękujemy za wypełnienie formularza!</p>
                <p>Wysłaliśmy do Ciebie wiadomość e-mail z linkami do pobrania Szablonu i Poradnika CV.</p>
              </div>
            )}

            <div className="cvSubmitWrapper">
              <input
                className="cvSubmmitButton"
                onFocus={() => {
                  setShowList(false);
                }}
                type="submit"
                value="WYŚLIJ"
              />
            </div>
            <div className="cvRequiredWrapper">
              <span className="cvRedStar">*</span> pole wymagane
            </div>
          </form>
        </section>
      </section>
      <div className="about-site-name">
        <div>
          <section className="about-actions" style={{ backgroundColor: "#f8f8f8" }}>
            <h2 className="styled-h2">{lang ? "Zamów usługę" : "Request Service"}</h2>
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
      <section className="cvFundationContainer">
        <GoHome lang={lang} />
      </section>
    </>
  );
};

const RedStar = styled.span`
  color: #d00707;
  font-size: 26px;
`;

const ScrOnly = styled.span`
  opacity: 0;
  width: 1px;
  height: 1px;
  border: 0;
  padding: 0;
  margin: 0;
`;

const SubmitWrapper = styled.div`
  padding: 2em;
  height: 80px;
  display: flex;
  justify-content: center;
`;

const SubmmitButton = styled.input`
  cursor: pointer;
  background-color: white;
  font-weight: bold;
  padding: 14px 51px;
  border-radius: 10px;
  border: 1px solid ${secondaryBlack};
  margin: 1.25em;
  &:hover {
    border: 3px solid ${secondaryBlack};
  }
`;

const PositionsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  & h3 {
    text-align: center;
  }
`;
const RemoteWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ListContainer = styled.div`
  justify-content: center;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background-color: white;
  display: ${(props) => (props.showList ? "flex" : "none")};

  & ul {
    list-style: none;
    padding: 0px;
    & li {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;

const ShowListButton = styled.button`
  padding: 13px;
  font-size: 18px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  width: 100%;
  cursor: pointer;
  background-color: white;
  text-align: left;
  justify-content: space-around;
  display: flex;
`;

const StyledCheckboxLabel = styled.label`
  cursor: pointer;

  & input {
    cursor: pointer;
    float: right;
  }
`;

const StyledForRemoteLabel = styled.label`
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  width: fit-content;
  & input {
    cursor: pointer;
  }
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
const FundationWrapper = styled.section`
  background-color: white;
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
const FundationText = styled.div`
  margin-bottom: 3em;
  width: 45%;
  min-width: 300px;

  & p {
    margin: 0px;
    margin-top: 8px;
  }
`;
const ContactImg = styled.div`
  width: 45%;
  max-width: 170px;
  margin: 0 auto 2em auto;
  & img {
    width: 100%;
  }
`;

const SiteNameWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0.2em auto 0 auto;
`;

const BreadCrumbs = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 0;
`;

const FirstLink = styled(Link)`
  cursor: pointer;
  font-size: 16px;
  color: #2c2c2c;
  text-decoration: none;
  padding: 0.1rem 0;
  position: relative;
  border-bottom: 1px solid ${secondaryBlack};
  &:hover {
    border-bottom: 2px solid ${mainBlack};
  }
`;
const SecondLink = styled.p`
  font-size: 16px;
  color: #2c2c2c;
  text-decoration: none;
  padding: 0.1rem 0;
  position: relative;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 15px;
  font: normal normal normal 18px/32px Source Sans Pro;

  & input {
    padding: 13px;
    font-size: 18px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`;

const LabelsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
const StyledForm = styled.form`
  width: 80%;
  border: 1px solid #dcdcdc;

  @media screen and (max-width: 660px) {
    width: 100%;
  }
`;
const AgreementWrapper = styled.div`
  width: 84%;
  margin: 50px auto 0 auto;
`;

const RequiredWrapper = styled.div`
  width: 84%;
  margin: 0 auto 50px auto;
`;

const ExampleText = styled.span`
  font-size: 16px;
`;

export default Cv;
