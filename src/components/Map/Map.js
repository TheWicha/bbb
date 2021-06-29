import React from "react";
import styled from "styled-components";
import { GoHome, SiteTitle, Okruszki, mainYellow } from "../../styledComponents/WithStyles";
import { Link } from "react-router-dom";

const Map = ({ lang }) => {
  return (
    <>
      {" "}
      <Okruszki lang={lang} slug={lang ? "Mapa serwisu" : "Service Map"} />
      <SiteTitle name={lang ? "MAPA SERWISU" : "SERVICE MAP"} />
      <MapWrapper>
        <MapContainer>
          <MapList>
            <MainPageLink>
              <Link to="/">{lang ? "Strona Główna" : "Main Page"}</Link>
            </MainPageLink>
            <FirestChildLi>
              <Link to="/o-nas">{lang ? "O nas" : "About Us"}</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/aktualnosci">{lang ? "Aktualności" : "News"}</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/fundator">{lang ? "Fundator" : "Founder"}</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/kontakt">{lang ? "Kontakt" : "Contact"}</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/programy-fundacji">{lang ? "Programy Fundacji" : "Fundation programs"}</Link>
            </FirestChildLi>
            {lang ? (
              <SecondChildLi>
                <Link to="/programy-fundacji/cv-na-wymiar">CV na wymiar</Link>
              </SecondChildLi>
            ) : (
              ""
            )}

            <FirestChildLi>
              <Link to="/rekrutacja-onz">
                {lang ? "Rekrutacja pracowników z niepełnosprawnością" : "Recruitment of employees with disabilities"}
              </Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/audyt-dostepnosci">{lang ? "Audyt dostępności" : "Accessibility Audits"}</Link>
            </FirestChildLi>
            <SecondChildLi>
              <Link
                onClick={() => {
                  setTimeout(() => {
                    document.querySelector("#header").scrollIntoView();
                  }, 100);
                }}
                to="/audyt-dostepnosci"
              >
                {lang ? "Audyt dostępności cyfrowej" : "Digital availability audit"}
              </Link>
            </SecondChildLi>
            <SecondChildLi>
              <Link
                onClick={() => {
                  setTimeout(() => {
                    document.querySelector("#arch").scrollIntoView();
                  }, 100);
                }}
                to="/audyt-dostepnosci"
              >
                {lang ? "Audyt dostępności architektonicznej" : "	Audit of architectural accessibility"}
              </Link>
            </SecondChildLi>
            <SecondChildLi>
              <Link
                onClick={() => {
                  setTimeout(() => {
                    document.querySelector("#kom").scrollIntoView();
                  }, 100);
                }}
                to="/audyt-dostepnosci"
              >
                {lang
                  ? "Audyt dostępności komunikacyjno-informacyjnej"
                  : "Audit of communication and information accessibility"}
              </Link>
            </SecondChildLi>
            <SecondChildLi>
              <Link
                onClick={() => {
                  setTimeout(() => {
                    document.querySelector("#dot").scrollIntoView();
                  }, 100);
                }}
                to="/audyt-dostepnosci"
              >
                {lang ? "Wnioski dotacyjne" : "Grant applications"}
              </Link>
            </SecondChildLi>
            <FirestChildLi>
              <Link to="/nasi-specjalisci">{lang ? "Nasi specjalisci" : "Our Experts"}</Link>
            </FirestChildLi>
            {lang ? (
              <FirestChildLi>
                <Link to="/certyfikaty-csr">{"Certyfikaty CSR"}</Link>
              </FirestChildLi>
            ) : (
              ""
            )}

            <FirestChildLi>
              <Link to="/polityka-prywatnosci">{lang ? "Polityka prywatności" : "Privacy policy and cookies"}</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/deklaracja-dostepnosci">{lang ? "Deklaracja dostępności" : "Accessibility declaration"}</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/raporty-finansowe">{lang ? "Raporty finansowe" : "Financial reports"}</Link>
            </FirestChildLi>
          </MapList>
        </MapContainer>
        <GoHomeWrapper>
          <GoHome lang={lang} />
        </GoHomeWrapper>
      </MapWrapper>
    </>
  );
};

const MainPageLink = styled.li`
  color: black;
  font-size: 18px;
  & a {
    text-decoration: none;
  }
  width: 45%;
  border-bottom: 1.5px solid ${mainYellow};
`;

const FirestChildLi = styled.div`
  height: fit-content;
  padding-left: 50px;
  border-left: 1.5px solid ${mainYellow};
  position: relative;
  &:after {
    content: "";
    position: absolute;
    height: 1.5px;
    width: 50px;
    top: 45px;
    left: 0px;
    background-color: ${mainYellow};
  }
`;

const SecondChildLi = styled.div`
  height: fit-content;
  padding-left: 100px;
  border-left: 1.5px solid ${mainYellow};
  position: relative;
  &:after {
    content: "";
    position: absolute;
    height: 1.5px;
    width: 50px;
    top: 43px;
    left: 50px;
    background-color: ${mainYellow};
  }

  & a:after {
    content: "";
    position: absolute;
    height: 72px;
    width: 1.5px;
    top: -27px;
    left: 49px;
    background-color: ${mainYellow};
  }
`;

const MapWrapper = styled.section`
  background-color: white;
`;

const GoHomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const MapContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
`;

const MapList = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  & div {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  & div:last-child {
    padding-bottom: 0px;
  }
  & div a {
    text-decoration: none;
    height: fit-content;
    color: black;
    font-size: 18px;
  }
`;
export default Map;
