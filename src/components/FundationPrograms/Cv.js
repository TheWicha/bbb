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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import img from "../../images/CV/1.png";
import img2 from "../../images/CV/2.png";
import positions from "./positions";
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

  const myForm = useRef();
  const agreementBox = useRef();

  useEffect(() => {
    document.onkeydown = (event) => {
      event = event || window.event;
      if (event.code === "Escape") {
        setShowList(false);
      }
    };
  }, []);

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
      <SiteNameWrapper>
        <BreadCrumbs>
          <li>
            <FirstLink to="/">{lang ? `Strona Główna` : "Main Page"}</FirstLink>
            <FontAwesomeIcon
              icon={("fas", faAngleRight)}
              style={{ verticalAlign: "-0.525em", height: "1.4em", color: mainYellow, width: "1.7em" }}
            />
          </li>
          <li>
            <FirstLink to="/programy-fundacji">{lang ? `Programy Fundacji` : "Fundation Programs"}</FirstLink>
            <FontAwesomeIcon
              icon={("fas", faAngleRight)}
              style={{ verticalAlign: "-0.525em", height: "1.4em", color: mainYellow, width: "1.7em" }}
            />
          </li>

          <li aria-hidden="true">
            <SecondLink>CV Na Wymiar</SecondLink>
          </li>
        </BreadCrumbs>
      </SiteNameWrapper>
      <SiteTitle name={lang ? "CV NA WYMIAR" : "CV NA WYMIAR"} />
      <TittleH2
        title={lang ? "Zwiększ szansę na pracę tworząc z nami CV" : "Zwiększ szansę na pracę tworząc z nami CV"}
      />
      <FundationWrapper>
        <FundationContainerReverse>
          <FundationText id="skip">
            <P>
              {lang
                ? `Przygotowaliśmy narzędzie pomagające stworzyć CV osobom z niepełnosprawnościami (OzN) poszukującym pracy odpowiedniej do swoich potrzeb, preferencji i kompetencji. Prowadząc projekty rekrutacyjne dla OzN jest szansa, że wśród nich znajdziemy ofertę dopasowaną do Ciebie.`
                : "Przygotowaliśmy narzędzie pomagające stworzyć CV osobom z niepełnosprawnościami (OzN) poszukującym pracy odpowiedniej do swoich potrzeb, preferencji i kompetencji. Prowadząc projekty rekrutacyjne dla OzN jest szansa, że wśród nich znajdziemy ofertę dopasowaną do Ciebie."}
            </P>
          </FundationText>

          <ContactImg>
            <img src={img} alt="" />
          </ContactImg>
        </FundationContainerReverse>
      </FundationWrapper>
      <TittleH2 title={lang ? "Jak to działa?" : "Jak to działa?"} />
      <FundationWrapper>
        <FundationContainer>
          <ContactImg>
            <img src={img2} alt="" />
          </ContactImg>
          <FundationText>
            <P>
              {lang
                ? `Zachęcamy do wypełnienia krótkiego formularza, po wysłaniu którego na Twoją skrzynkę e-mail automatycznie otrzymasz pakiet zawierający Szablon CV w wersji edytowalnej oraz Poradnik CV. Oba dokumenty zostały starannie opracowane przez naszych ekspertów w taki sposób, aby pomogły Tobie w samodzielnym przygotowaniu CV, które zwiększy Twoją szansę na znalezienie pracy. Z gotowym CV będziesz mógł aplikować o pracę w dowolnych miejscach, w tym u nas. Dane z formularza będziemy przechowywać w naszej bazie przez okres 2 lat. Jeżeli w tym czasie pojawi się u nas oferta pracy na stanowisku/stanowiskach, które wskażesz w formularzu, będziemy mogli skontaktować się z Tobą prosząc o przesłanie CV.`
                : `Zachęcamy do wypełnienia krótkiego formularza, po wysłaniu którego na Twoją skrzynkę e-mail automatycznie otrzymasz pakiet zawierający Szablon CV w wersji edytowalnej oraz Poradnik CV. Oba dokumenty zostały starannie opracowane przez naszych ekspertów w taki sposób, aby pomogły Tobie w samodzielnym przygotowaniu CV, które zwiększy Twoją szansę na znalezienie pracy. Z gotowym CV będziesz mógł aplikować o pracę w dowolnych miejscach, w tym u nas. Dane z formularza będziemy przechowywać w naszej bazie przez okres 2 lat. Jeżeli w tym czasie pojawi się u nas oferta pracy na stanowisku/stanowiskach, które wskażesz w formularzu, będziemy mogli skontaktować się z Tobą prosząc o przesłanie CV.`}
            </P>
          </FundationText>
        </FundationContainer>
      </FundationWrapper>
      <TittleH2 title={lang ? "Weź udział w rekrutacji" : "Weź udział w rekrutacji"} />
      <FundationWrapper>
        <FundationContainer>
          <StyledForm onSubmit={handleSubmit} ref={myForm} id="myForm">
            <H3 style={{ textAlign: "center" }}>TWOJE DANE KONTAKTOWE</H3>
            <LabelsWrapper>
              <Label htmlFor="name">
                Imię
                <span style={{ opacity: 0, height: "1px", width: "1px" }}> to pole jest wymagane </span>
                <input
                  required
                  placeholder="Imię"
                  type="text"
                  id="name"
                  value={formData.name}
                  autoComplete={"name"}
                  name="name"
                  onChange={handleFormData}
                />
              </Label>
              <Label htmlFor="nazwisko">
                Nazwisko
                <span style={{ opacity: 0, height: "1px", width: "1px" }}> to pole jest wymagane </span>
                <input
                  placeholder="Nazwisko"
                  required
                  value={formData.familyName}
                  type="text"
                  id="nazwisko"
                  name="familyName"
                  autoComplete={"family-name"}
                  onChange={handleFormData}
                />
              </Label>
            </LabelsWrapper>
            <LabelsWrapper>
              <Label htmlFor="email">
                Email
                <span style={{ opacity: 0, height: "1px", width: "1px" }}> to pole jest wymagane </span>
                <input
                  required
                  placeholder="Email"
                  type="email"
                  id="email"
                  value={formData.email}
                  name="email"
                  autoComplete={"email"}
                  onChange={handleFormData}
                  pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                  style={{ textTransform: "lowercase" }}
                />
              </Label>
              <Label htmlFor="tel">
                Telefon
                <span style={{ opacity: 0, height: "1px", width: "1px" }}> to pole jest wymagane </span>
                <input
                  placeholder="Telefon"
                  required
                  type="tel"
                  id="telefon"
                  value={formData.tel}
                  name="tel"
                  autoComplete={"tel"}
                  onChange={handleFormData}
                />
              </Label>
            </LabelsWrapper>
            <PositionsWrapper>
              <H3 style={{ textAlign: "center" }}>PRACA, KTÓRĄ JESTEŚ ZAINTERESOWANY</H3>
              <div>
                <p>Wybierz maksymalnie 3 stanowiska</p>
              </div>
              <div style={{ position: "relative", maxWidth: "360px" }}>
                <ShowListButton onFocus={handleList} onClick={handleList}>
                  Wybierz stanowisko{" "}
                  {showList ? (
                    <FontAwesomeIcon icon={("fas", faAngleDown)} />
                  ) : (
                    <FontAwesomeIcon icon={("fas", faAngleUp)} />
                  )}
                </ShowListButton>
                <ListContainer showList={showList}>
                  <ul>
                    {positions.map((positon, index, array) => {
                      return (
                        <li key={index}>
                          <StyledCheckboxLabel>
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
                          </StyledCheckboxLabel>
                        </li>
                      );
                    })}
                  </ul>
                </ListContainer>
              </div>
            </PositionsWrapper>
            <RemoteWrapper>
              <p>Czy szukasz pracy w formie zdalnej?</p>
              <StyledForRemoteLabel
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
              </StyledForRemoteLabel>
              <StyledForRemoteLabel htmlFor="nie">
                <input
                  ref={(el) => (remoteRefs[1] = el)}
                  type="radio"
                  onChange={handleFormData}
                  name={"remote"}
                  id={"nie"}
                  value="Nie, zdecydowanie wolę pracę stacjonarną"
                />
                Nie, zdecydowanie wolę pracę stacjonarną
              </StyledForRemoteLabel>
              <StyledForRemoteLabel htmlFor="oba">
                <input
                  ref={(el) => (remoteRefs[2] = el)}
                  type="radio"
                  onChange={handleFormData}
                  name={"remote"}
                  id={"oba"}
                  value="Mogę pracować zdalnie lub stacjonarnie"
                />
                Mogę pracować zdalnie lub stacjonarnie
              </StyledForRemoteLabel>
            </RemoteWrapper>
            <SubmitWrapper>
              <SubmmitButton
                onFocus={() => {
                  setShowList(false);
                }}
                type="submit"
                value="WYŚLIJ"
              />
            </SubmitWrapper>
            <AgreementWrapper>
              <label>
                <input ref={agreementBox} required type="checkbox" name="agreement" id="agreement" />
                Wysyłając formularz wyrażam zgodę na przetwarzanie moich danych osobowych przez Fundację Biznes Bez
                Barier, z siedzibą w Świdnicy, przy ul. Gdyńskiej 25/50, na zasadach określonych w{" "}
                <Link
                  onClick={() => {
                    setTimeout(() => {
                      document.querySelector("#header").scrollIntoView();
                    }, 100);
                  }}
                  to="/polityka-prywatnosci"
                >
                  Polityce prywatności
                </Link>
              </label>
            </AgreementWrapper>
          </StyledForm>
        </FundationContainer>
      </FundationWrapper>
      <ContactUs lang={lang} title={lang ? "Zamów usługę" : "Request Service"} />
      <FundationContainer>
        <GoHome lang={lang} />
      </FundationContainer>
    </>
  );
};

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
  height: 390px;
  width: 100%;
  position: absolute;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background-color: white;
  overflow: auto;
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
  color: #868e96;
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
  margin: 0 auto 50px auto;
`;
export default Cv;
