import React, { useRef } from "react";
import styled from "styled-components";
import logo from "../images/Strona Główna/1.png";
import logoEng from "../images/Strona Główna/1_ENG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Header = ({ lang, setLang, skip }) => {
  const myRef = useRef();

  const handleTabIndex = () => {
    myRef.current.focus();
  };

  return (
    <HeaderWrapper>
      <StyledHeader id="header">
        <SkipLink aria-hidden="true" ref={myRef} href="/" style={{ opacity: 0 }}></SkipLink>
        <SkipLink href="#menu">{lang ? `Przejdź do menu głównego` : `Skip to main menu`}</SkipLink>
        <SkipLink href="#skip">{lang ? `Przejdź do treści` : `Skip to content`}</SkipLink>
        <SkipLink href="#footer">{lang ? `Przejdź do stopki` : `Skip to footer`}</SkipLink>
        <LogoContainer>
          <Link to="/">
            <Logo
              src={lang ? logo : logoEng}
              alt={lang ? `logo Biznes Bez Barier` : `Business Without Barriers Foundation logo`}
            />
          </Link>
        </LogoContainer>
        <LogoContainer2>
          <a href="https://www.facebook.com/BiznesBezBarier/" target="__blank">
            <ScrOnly>
              {lang
                ? "Obserwuj nas na Facebooku. Otwarcie w nowym oknie"
                : "Follow Us on Facebook. It will be opened in a new window"}
            </ScrOnly>
            <FBLogo icon={("fab", faFacebookSquare)} />
          </a>
          <LangPicker>
            <button
              alt="Zmień język strony na polski"
              onClick={() => {
                let page = document.querySelector("#language");
                page.setAttribute("lang", "pl");
                setLang(true);
                handleTabIndex();
              }}
            >
              PL
            </button>
            <button
              style={{ maxWidth: "75px" }}
              lang="eng"
              alt="Change a website language to English"
              onClick={() => {
                let page = document.querySelector("#language");
                page.setAttribute("lang", "eng");
                setLang(false);
                handleTabIndex();
              }}
            >
              ENG
            </button>
          </LangPicker>
        </LogoContainer2>
        <NavBar id="menu">
          <NavWrap>
            <Link onClick={handleTabIndex} to="/o-nas">
              {" "}
              {lang ? "O nas" : "About Us"}
            </Link>
            <Link onClick={handleTabIndex} to="/fundator">
              {lang ? "Fundator" : "Founder"}
            </Link>

            {lang && (
              <Link onClick={handleTabIndex} to="/aktualnosci">
                {lang ? "Aktualności" : "News"}
              </Link>
            )}
            <Link onClick={handleTabIndex} to="/kontakt">
              {lang ? "Kontakt" : "Contact"}
            </Link>
            <Devider aria-hidden="true"></Devider>
            <Link onClick={handleTabIndex} to="/programy-fundacji">
              {lang ? "Programy Fundacji" : "Fundation Programs"}
            </Link>
            <Link onClick={handleTabIndex} to="/rekrutacja-onz">
              {lang ? "Rekrutacja OzN" : "Recruitment of PWD"}
            </Link>
            <Link onClick={handleTabIndex} to="/audyt-dostepnosci">
              {lang ? "Audyt dostępności" : "Accessibility audits"}
            </Link>
            <Link onClick={handleTabIndex} to="/nasi-specjalisci">
              {lang ? "Nasi specjaliści" : "Our experts"}
            </Link>
          </NavWrap>
        </NavBar>
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;
const Devider = styled.div`
  flex: 1 1;
`;

const ScrOnly = styled.div`
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

const StyledHeader = styled.header`
  position: relative;
  max-width: 1366px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2.2em 0 0 0;
  margin: 0 auto;
  background-color: white;

  @media screen and (max-width: 1000px) {
    padding: 2.2em 20px 0 20px;
  }
`;

const HeaderWrapper = styled.section`
  background-color: white;
  width: 100%;
  box-shadow: 0px 3px 6px #0000010a;
`;

const LogoContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;

  & a {
    border: 2px solid transparent;
  }
`;
const LogoContainer2 = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 15px;
`;

const Logo = styled.img`
  max-width: 240px;
  width: 100%;
`;

const FBLogo = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: black;

  &:hover {
    color: white;
    stroke: black;
    stroke-width: 1em;
    stroke-opacity: 1;
  }
`;

const NavBar = styled.nav`
  transition: all 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  margin-top: 2%;
`;

const NavWrap = styled.ul`
  padding: 0px;
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  & a {
    padding-right: 25px;
    text-decoration: none;
    color: #202020;
    align-items: center;
    display: flex;
    flex-direction: column;
    min-width: 46px;
    border: 2px solid transparent;
  }
  & a::after {
    content: "";
    height: 3px;
    background-color: inherit;
    width: 45px;
  }
  & a:last-child {
    padding-right: 0px !important;
  }
  & a:hover::after {
    transition: all 0.4s ease;
    content: "";
    height: 3px;
    background-color: #f0be20;
    width: 45px;
  }
`;

const LangPicker = styled.div`
  display: flex;
  position: relative;
  width: 84px;
  & button {
    max-width: 25px;
    margin-left: 10px;
    cursor: pointer;
    background-color: white;
    border: none;
    font-weight: 500;
  }
  & button:hover {
    font-weight: 800;
  }
  & button:first-child {
    width: 30px;
  }
  & button:first-child::after {
    content: "";
    height: 80%;
    top: 3px;
    left: 40px;
    position: absolute;
    border-right: 2px solid black;
  }
`;

const SkipLink = styled.a`
  pointer-events: none;
  background-color: #494949;
  color: white;
  padding: 15px;
  border: none;
  font-weight: 600;
  border-radius: 0px 0px 8px 8px;
  position: absolute;
  text-decoration: none;
  top: 10px;
  left: 30%;
  opacity: 0;
  &:focus {
    opacity: 1;
  }
`;
