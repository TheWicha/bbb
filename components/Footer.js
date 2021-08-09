import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { P } from "../components/styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import itLabLogo from "../images/Strona Główna/AF Poland IT-Lab W.png";
import AFlogo from "../images/Strona Główna/logo af_białe-03.png";

const Footer = ({ lang, isMobile }) => {
  const [style, setStyle] = useState({ width: "45%" });

  useEffect(() => {
    // lang ? setStyle({ width: "45%" }) : setStyle({ width: "48%" });
  });

  return (
    <footer className="footer" id="footer">
      <section className="footer-wrapper">
        <div className="footer-list">
          <p className="styled-p companyName">
            {lang ? "Fundacja Biznes Bez Barier" : "Business Without Barriers Foundation"}
          </p>
          <p className="styled-p companyData">Gdyńska 25/50</p>
          <p className="styled-p companyData">58-100 Świdnica</p>
          <p className="styled-p companyData">KRS 0000793377</p>
          <div style={{ display: "flex", justifyConent: "center", alignItems: "center" }}>
            <FontAwesomeIcon className="email-icon" icon={("fas", faEnvelopeSquare)} />{" "}
            <a className="companyEmail" href="mailto:kontakt@biznesbezbarier.org ">
              kontakt@biznesbezbarier.org
            </a>
          </div>
        </div>
        <div className="footerLinkList">
          <Link href="/onas">
            <a>{lang ? "O nas" : "About Us"}</a>
          </Link>
          <Link href="/fundator">
            <a>{lang ? "Fundator" : "Founder"}</a>
          </Link>
          {lang && (
            <Link href="/aktualnosc">
              <a>{lang ? "Aktualności" : "News"}</a>
            </Link>
          )}
          <Link href="/kontakt">
            <a>{lang ? "Kontakt" : "Contact"}</a>
          </Link>
        </div>
        <div className="footerLinkList">
          <Link href="/programFundacji">
            <a>{lang ? "Programy Fundacji" : "Fundation programs"}</a>
          </Link>
          <Link href="/rekrutacja">
            <a>{lang ? "Rekrutacja OzN" : "Recruitment of PWD"}</a>
          </Link>
          <Link href="/audytDostepnosci">
            <a>{lang ? "Audyt dostępności" : "Accessibility Audits"}</a>
          </Link>
          <Link href="/nasiSpecjalisci">
            <a>{lang ? "Nasi specjaliści" : "Our Experts"}</a>
          </Link>
        </div>
        <div className="footerLinkList">
          {lang && (
            <Link href="/certyfikatyCsr">
              <a>Certyfikaty CSR</a>
            </Link>
          )}
          {lang ? (
            <a href="http://bizbezbar.realizacje.grupaaf.pl/Statut-Biznes-Bez-Barier.pdf" target="__blank">
              Statut
            </a>
          ) : (
            <a
              href="http://bizbezbar.realizacje.grupaaf.pl/Statute-of-the-Foundation-Business-Without-Barriers.pdf"
              target="__blank"
            >
              Statutes
            </a>
          )}

          <Link href="/raportyFinansowe">
            <a>{lang ? "Raporty finansowe" : "Financial reports"}</a>
          </Link>
          <Link href="/deklaracjaDostepnosci">
            <a>{lang ? "Deklaracja dostępności" : "Accessibility declaration"}</a>
          </Link>
        </div>
      </section>
      <div className="cookies">
        <Link href="/politykaPrywatnosci">
          <a> {lang ? "Polityka prywatności i cookies" : "Privacy policy and cookies"}</a>
        </Link>
        <Link href="/Map">
          <a>{lang ? "Mapa serwisu" : "Service Map"}</a>
        </Link>
      </div>
      <div className="footer-socials">
        <div className="footer-fb-wrapper">
          <div>
            <p>{lang ? `Obserwuj nas` : `Follow us on`}</p>
          </div>

          <div className="footer-fb-container">
            <a href="https://www.facebook.com/BiznesBezBarier/" target="__blank">
              <span className="scr-only">{lang ? "Otwarcie w nowym oknie" : "It will be opened in a new window"}</span>
              <FontAwesomeIcon className="footer-fb-logo" icon={("fab", faFacebookSquare)} />
            </a>
            <a href="https://www.linkedin.com/company/fundacja-bizes-bez-barier/" target="__blank">
              <span className="scr-only">{lang ? "Otwarcie w nowym oknie" : "It will be opened in a new window"}</span>
              <FontAwesomeIcon className="footer-fb-logo" icon={("fab", faLinkedin)} />
            </a>
          </div>
        </div>
        <div className="patronWrapper" style={style}>
          <div className="patronContainer">
            <p>{lang ? "Działalność Fundacji finansuje" : "The Foundation's activities are financed by:"}</p>

            <a className="patronLink" href="https://polandit.us/" target="__blank" alt="">
              <span className="scr-only">
                {lang
                  ? "POLAND IT-LAB. Przejdź na stronę sponsora. Otwarcie w nowym oknie"
                  : "POLAND IT-LAB. Visit founder page. It will open new tab"}
              </span>
              <img src={itLabLogo} alt={lang ? `POLAND IT-LAB. Logo sponsora"` : `POLAND IT-LAB. Founder logo`} />
            </a>
          </div>
          <div className="patronContainer">
            <p>{lang ? "Patron merytoryczny" : "substantive Patron:"}</p>

            <a className="patronLink" href="https://grupaaf.pl/" target="__blank" alt="">
              <span className="scr-only">
                {lang
                  ? "Grupa AF. Przejdź na stronę organizacji. Otwarcie w nowym oknie"
                  : "Grupa AF. Visit organisation page. It will open new tab"}
              </span>
              <img src={AFlogo} alt={lang ? "Grupa AF. Patron merytoryczny" : "Grupa AF. Substantive Patron"} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  background: transparent linear-gradient(90deg, #505050 0%, #131111 100%) 0% 0% no-repeat padding-box;
`;

const CompanyName = styled(P)`
  margin: 0;
  color: white;
  font-weight: bold;
`;

const CompanyData = styled(P)`
  color: white;
  margin: 0;
`;

const CompanyEmail = styled.a`
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;

const EmailIcon = styled(FontAwesomeIcon)`
  color: white;
  margin-right: 0.5em;
`;

const FooterWrapper = styled.section`
  display: flex;
  padding: 0px 2em 2.5em 2em;
  max-width: 1050px;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (max-width: 550px) {
    & div,
    div a {
      padding-left: 0px;
    }
  }
`;

const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  min-width: 250px;
  color: white;
  justify-content: space-evenly;
  align-items: flex-start;
  flex: 1;
  padding-top: 1.3em;
  @media screen and (max-width: 1127px) {
    padding-left: 23px;
  }
`;

const FooterLinkList = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 125px;
  color: white;
  align-items: flex-start;
  padding-top: 2em;

  & a {
    margin-left: 25px;
    margin-bottom: 15px;
    text-align: left;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & a::after {
    content: "";
    height: 3px;
    background-color: inherit;
  }

  & a:hover::after {
    transition: all 0.4s ease;
    content: "";
    height: 3px;
    background-color: #f0be20;
    width: 37px;
  }

  @media screen and (max-width: 550px) {
    padding-bottom: 2em;
    border-bottom: 1px solid #707070;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;

const Cookies = styled.div`
  display: flex;
  max-width: 1000px;
  width: 76%;
  margin: 0 auto 2em auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  border-bottom: 1px solid #707070;
  & a {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 5px;
    text-align: left;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & a::after {
    content: "";
    height: 3px;
    background-color: inherit;
  }

  & a:hover::after {
    transition: all 0.4s ease;
    content: "";
    height: 3px;
    background-color: #f0be20;
    width: 37px;
  }

  & a:first-child {
    border-left: 1px solid white;
    border-right: 1px solid white;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  & a:nth-child(2) {
    padding-left: 0px;
    border-right: 1px solid white;
    padding-left: 15px;
  }

  @media screen and (max-width: 550px) {
    justify-content: flex-start;

    & a {
      max-width: 250px;
    }
    & a:first-child {
      padding-right: 25px;
    }
    & a:nth-child(2) {
      padding-left: 0px;
      border-right: none;
    }
  }
`;

const Socials = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 4em 2em 4em;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const FbWrapper = styled.div`
  min-width: 200px;
  & a {
    display: block;
    height: 40px;
    width: 36px;
  }
`;

const FbContainer = styled.div`
  display: flex;
  & a {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
const FBLogo = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: white;

  &:hover {
    color: transparent;
    stroke: white;
    stroke-width: 0.3em;
    stroke-opacity: 1;
  }
`;

const PatronWrapper = styled.div`
  width: ${(props) => (props.lan ? "45%" : "48%")};
  min-width: 250px;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  & div {
    margin-right: 15px;
  }
  /* margin-right: 20%; */
`;

const ScreenReaderOnly = styled.span`
  border: 0;
  padding: 0;
  margin: 0;
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
  clip: rect(1px, 1px, 1px, 1px); /*maybe deprecated but we need to support legacy browsers */
  clip-path: inset(50%); /*modern browsers, clip-path works inwards from each corner*/
  white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
`;

const PatronContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 512px) {
    align-items: flex-start;
  }
`;

const PatronLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & img {
    align-self: flex-end;
    @media screen and (max-width: 512px) {
      align-self: auto;
    }
  }

  @media screen and (max-width: 512px) {
    align-items: self-end;
  }
`;
