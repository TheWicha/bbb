import React from "react";
import styled from "styled-components";
import { H3, P, GoHome, SiteTitle, TittleH2, Okruszki, mainYellow } from "../../styledComponents/WithStyles";
import { Link } from "react-router-dom";

const Map = ({ lang }) => {
  return (
    <>
      {" "}
      <Okruszki lang={lang} slug={lang ? "Mapa serwisu" : "Mapa serwisu"} />
      <SiteTitle name={lang ? "MAPA SERWISU" : "MAPA SERWISU"} />
      <MapWrapper>
        <MapContainer>
          <MapList>
            <MainPageLink>
              <Link to="/">Strona Główna</Link>
            </MainPageLink>
            <FirestChildLi>
              <Link to="/o-nas">O nas</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/aktualnosci">Aktualności</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/fundator">Fundator</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/kontakt">Kontakt</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/programy-fundacji">Programy Fundacji</Link>
            </FirestChildLi>
            <SecondChildLi>
              <Link to="/">CV na wymiar</Link>
            </SecondChildLi>
            <FirestChildLi>
              <Link to="/rekrutacja-onz">Rekrutacja pracowników z niepełnosprawnością</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/audyt-dostepnosci">Audyt dostępności</Link>
            </FirestChildLi>
            <SecondChildLi>
              <Link to="/">Audyt dostępności cyfrowej</Link>
            </SecondChildLi>
            <SecondChildLi>
              <Link to="/">Audyt dostępności architektonicznej</Link>
            </SecondChildLi>
            <SecondChildLi>
              <Link to="/">Audyt dostępności komunikacyjno-informacyjnej</Link>
            </SecondChildLi>
            <SecondChildLi>
              <Link to="/">Wnioski dotacyjne</Link>
            </SecondChildLi>
            <FirestChildLi>
              <Link to="/nasi-specjalisci">Nasi specjalisci</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/certyfikaty-csr">Certyfikaty CSR</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/deklaracja-dostepnosci">Deklaracja dostępności</Link>
            </FirestChildLi>
            <FirestChildLi>
              <Link to="/raporty-finansowe">Raporty finansowe</Link>
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
`

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
