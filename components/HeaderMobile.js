import React from "react";
import styled from "styled-components";
import logo from "../images/Strona-Glowna/1.png";
import logoEng from "../images/Strona-Glowna/1_ENG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

const HeaderMobile = ({ lang, setLang }) => {
  const [open, setOpen] = useState("0px");

  const handleClose = () => {
    setOpen("0px");
  };

  return (
    <div style={{ padding: "1em" }}>
      <div className="mob-logo-cont" id="header">
        <Link href="/">
          <img className="logo-mobile" src={lang ? logo : logoEng} alt="company logo"></img>
        </Link>
        {open === "0px" ? (
          <div
            onClick={() => {
              setOpen("100%");
            }}
          >
            <MenuBurger icon={("fas", faBars)} />
          </div>
        ) : (
          <div onClick={handleClose}>
            <MenuBurger icon={("fas", faTimes)} />
          </div>
        )}
      </div>
      <section style={{ maxHeight: open, overflow: "hidden" }}>
        <div className="mob-logo-cont" style={{ marginTop: "40px" }}>
          <div>
            <a
              style={{ width: "41px", textAlign: "center" }}
              href="https://www.facebook.com/BiznesBezBarier/"
              alt={
                lang
                  ? "Obserwuj nas na Facebooku. Otwarcie w nowym oknie"
                  : "Fllow Us on Facebook. It will be opened in a new window"
              }
              target="__blank"
            >
              <FBLogo icon={("fab", faFacebookSquare)} />
            </a>
            <a
              style={{ width: "41px", textAlign: "center" }}
              href="https://www.linkedin.com/company/fundacja-bizes-bez-barier/"
              alt={
                lang
                  ? "Obserwuj nas na LinkedIn.. Otwarcie w nowym oknie"
                  : "Fllow Us on LinkedIn.. It will be opened in a new window"
              }
              target="__blank"
            >
              <FBLogo icon={("fab", faLinkedin)} />
            </a>
          </div>
          <div className="mob-lang-pic">
            <button
              alt="Zmień język strony na polski"
              onClick={() => {
                // let page = document.querySelector("#language");
                // page.setAttribute("lang", "pl");
                setLang(true);
              }}
            >
              PL
            </button>
            <button
              lang="eng"
              alt="Change a website language to English"
              onClick={() => {
                // let page = document.querySelector("#language");
                // page.setAttribute("lang", "eng");
                setLang(false);
              }}
            >
              ENG
            </button>
          </div>
        </div>
        <div>
          <ul className="mob-nav-wrap">
            <Link onClick={handleClose} href="/onas">
              <a> {lang ? "O NAS" : "ABOUT US"}</a>
            </Link>
            <Link onClick={handleClose} href="/fundator">
              <a>{lang ? "FUNDATOR" : "FOUNDER"}</a>
            </Link>
            {lang && (
              <Link onClick={handleClose} href="/aktualnosc">
                <a>{lang ? "AKTUALNOŚCI" : "NEWS"}</a>
              </Link>
            )}
            <Link onClick={handleClose} href="/kontakt">
              <a>{lang ? "KONTAKT" : "CONTACT"}</a>
            </Link>
          </ul>
          <ul className="mob-nav-wrapp">
            <Link onClick={handleClose} href="/programFundacji">
              <a> {lang ? "PROGRAMY FUNDACJI" : "FUNDATION PROGRAMS"}</a>
            </Link>
            <Link onClick={handleClose} href="/rekrutacja">
              <a> {lang ? "REKRUTACJA OzN" : "RECRUITMENT OF PWD"}</a>
            </Link>
            <Link onClick={handleClose} href="/audytDostepnosci">
              <a> {lang ? "AUDYT DOSTĘPNOŚCI" : "ACCESSIBILITY AUDITS"}</a>
            </Link>
            <Link onClick={handleClose} href="/nasiSpecjalisci">
              <a>{lang ? "NASI SPECJALIŚCI" : "OUR EXPERTS"}</a>
            </Link>
          </ul>
        </div>
      </section>
    </div>
  );
};

const FBLogo = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: black;
  &:hover {
    color: white;
    stroke: black;
    stroke-width: 1em;
    stroke-opacity: 1;
  }
`;

const MenuBurger = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 40px;
  color: #2d2c2a;
`;

const LangPicker = styled.div`
  display: flex;
  position: relative;
  width: 100px;
  & button {
    max-width: 31px;
    margin-left: 10px;
    cursor: pointer;
    background-color: inherit;
    border: none;
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
    left: 44px;
    position: absolute;
    border-right: 2px solid black;
  }
`;

const LogoContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  & a {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const NavWrap = styled.ul`
  align-items: baseline;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;

  & a {
    border-top: 1px solid #0000002e;
    padding: 20px;
    text-decoration: none;
    color: #202020;
    /* align-items: center; */
    display: flex;
    flex-direction: column;
    width: 87%;
    margin: 0 auto;
  }
  &::after {
    content: "";
    height: 3px;
    background-color: #f0be20;
    width: 50%;
    min-width: 144px;
    margin: 0 auto;
  }
`;

const NavWrap2 = styled.ul`
  align-items: baseline;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;

  & a {
    border-top: 1px solid #0000002e;
    padding: 20px;
    text-decoration: none;
    color: #202020;
    /* align-items: center; */
    display: flex;
    flex-direction: column;
    width: 87%;
    margin: 0 auto;
  }
  & a:last-child {
    border-bottom: 1px solid #0000002e !important;
  }
  & a:first-child {
    border-top: none;
  }

  /* & a::after {
    content: "";
    height: 3px;
    background-color: #fff;
    width: 45px;
  }

  & a:hover::after {
    transition: all 0.4s ease;
    content: "";
    height: 3px;
    background-color: #f0be20;
    width: 45px;
  } */
`;
export default HeaderMobile;
