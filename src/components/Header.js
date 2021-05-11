import React from "react";
import styled from "styled-components";
import logo from "../images/Strona Główna/1.png";
import logoEng from "../images/Strona Główna/1_ENG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Header = ({ lang, setLang, skip }) => {
  return (
    <HeaderWrapper>
      <SkipLink href="#skip ">
        skip link
      </SkipLink>
      <StyledHeader id="header">
        <LogoContainer>
          <Link to="/" style={{ width: "100%" }}>
            <Logo src={lang ? logo : logoEng} alt="logo biznes bez barier" />
          </Link>
        </LogoContainer>
        <LogoContainer2>
          <a href="https://www.facebook.com/BiznesBezBarier/" target="__blank">
            <FBLogo icon={("fab", faFacebookSquare)} />
          </a>
          <LangPicker>
            <button
              onClick={() => {
                setLang(true);
              }}
            >
              PL
            </button>
            <button
              onClick={() => {
                setLang(false);
              }}
            >
              ENG
            </button>
          </LangPicker>
        </LogoContainer2>
        <NavBar>
          <NavWrap>
            <Link to="/o-nas"> {lang ? "O nas" : "About Us"}</Link>
            <Link to="/fundator">{lang ? "Fundator" : "Founder"}</Link>
            <Link to="/aktualnosci">{lang ? "Aktualności" : "News"}</Link>
            <Link to="/kontakt">{lang ? "Kontakt" : "Contact Us"}</Link>
          </NavWrap>
          <NavWrap>
            <Link to="/programy-fundacji">{lang ? "Programy Fundacji" : "Fundation Programs"}</Link>
            <Link to="/rekrutacja-onz">{lang ? "Rekrutacja OzN" : "Recruitment of PwD"}</Link>
            <Link to="/audyt-dostepnosci">{lang ? "Audyt dostępności" : "Accessibility Audit"}</Link>
            <Link to="/nasi-specjalisci">{lang ? "Nasi specjaliści" : "Our Experts"}</Link>
          </NavWrap>
        </NavBar>
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;

const StyledHeader = styled.header`
  max-width: 1366px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2.2em 0 0 0;
  margin: 0 auto;
  background-color: white;
`;

const HeaderWrapper = styled.div`
  background-color: white;
  width: 100%;
  box-shadow: 0px 3px 6px #0000010a;
`;

const LogoContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
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
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  margin-top: 2%;
`;

const NavWrap = styled.ul`
  padding: 0px;
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
  opacity: 0;
  &:focus {
    opacity: 1;
  }
`;
