import React from "react";
import styled from "styled-components";
import { P } from "../styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import itLabLogo from "../images/Strona Główna/AF Poland IT-Lab W.png";
import AFlogo from "../images/Strona Główna/logo af_białe-03.png";

const Footer = ({ lang, isMobile }) => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterList>
          <CompanyName>{lang ? "Fundacja Biznes Bez Barier" : "Business Without Barriers Foundation"}</CompanyName>
          <CompanyData>Gdyńska 25/50</CompanyData>
          <CompanyData>50-100 Świdnica</CompanyData>
          <CompanyData>KRS 0000793377</CompanyData>
          <div style={{ display: "flex", justifyConent: "center", alignItems: "center" }}>
            <EmailIcon icon={("fas", faEnvelopeSquare)} />{" "}
            <CompanyEmail href="mailto:kontakt@biznesbezbarier.org ">kontakt@biznesbezbarier.org</CompanyEmail>
          </div>
        </FooterList>
        <FooterLinkList>
          <Link to="/o-nas"> {lang ? "O nas" : "About Us"}</Link>
          <Link to="/fundator">{lang ? "Fundator" : "Founder"}</Link>
          <Link to="/aktualnosci">{lang ? "Aktualności" : "News"}</Link>
          <Link to="/kontakt">{lang ? "Kontakt" : "Contact"}</Link>
        </FooterLinkList>
        <FooterLinkList>
          <Link to="/programy-fundacji">{lang ? "Programy Fundacji" : "Fundation programs"}</Link>
          <Link to="/rekrutacja-onz">{lang ? "Rekrutacja OzN" : "Recruitment of PWD"}</Link>
          <Link to="/audyt-dostepnosci">{lang ? "Audyt dostępności" : "Accessibility Audits"}</Link>
          <Link to="/nasi-specjalisci">{lang ? "Nasi specjaliści" : "Our Experts"}</Link>
        </FooterLinkList>
        <FooterLinkList>
          {lang ? <Link to="/certyfikaty-csr">{"Certyfikaty CSR"}</Link> : ""}
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

          <Link to="/raporty-finansowe">{lang ? "Raporty finansowe" : "Financial reports"}</Link>
          <Link to="/deklaracja-dostepnosci">{lang ? "Deklaracja dostępności" : "Accessibility declaration"}</Link>
        </FooterLinkList>
      </FooterWrapper>
      <Cookies>
        <Link to="/polityka-prywatnosci">{lang ? "Polityka prywatności i cookies" : "Privacy policy and cookies"}</Link>
        <Link to="/mapa">{lang ? "Mapa serwisu" : "Service Map"}</Link>
      </Cookies>
      <Socials>
        <FbWrapper>
          <p>{lang ? `Obserwuj nas na Facebooku` : `Follow us on facebook`}</p>
          <a href="https://www.facebook.com/BiznesBezBarier/" target="__blank">
            <FBLogo
              icon={("fab", faFacebookSquare)}
              alt={lang ? "Obserwuj nas na Facebooku. Otwarcie w nowym oknie" : "Follow us on facebook. It will be opened in a new window"}
            />
          </a>
        </FbWrapper>
        <PatronWrapper lan={lang}>
          <PatronContainer>
            <p>{lang ? "Działalność fundacji finansuje" : "The foundation's activities are financed by:"}</p>
            <PatronLink href="https://polandit.us/" target="__blank">
              <img src={itLabLogo} alt="" />
              <ScreenReaderOnly>{lang ? "POLAND IT-LAB. Przejdź na stronę sponsora." : "POLAND IT-LAB. Visit founder page" }</ScreenReaderOnly>
            </PatronLink>
            <ScreenReaderOnly>{lang ? 'Otwarcie w nowym oknie' : 'It will be opened in a new window'}</ScreenReaderOnly>
          </PatronContainer>
          <PatronContainer>
            <p>{lang ? "Patron Mertyoryczny" : "Substantive Patron:"}</p>
            <PatronLink href="https://grupaaf.pl/" target="__blank">
              <img src={AFlogo} alt={lang ? "Grupa AF. Patron Mertyoryczny" : "Grupa AF. Substantive Patron"} />
              <ScreenReaderOnly>{lang ? "Grupa AF. Przejdź na stronę organizacji" : "Grupa AF. Visit organisation page"}</ScreenReaderOnly>
            </PatronLink>
            <ScreenReaderOnly>{lang ? 'Otwarcie w nowym oknie' : 'It will be open in a new window'}</ScreenReaderOnly>
          </PatronContainer>
        </PatronWrapper>
      </Socials>
    </StyledFooter>
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
  opacity: 0;
  font-size: 1px;
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
