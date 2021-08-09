import React from "react";

import styled from "styled-components";
import { GoHome, SiteTitle, Okruszki } from "../styledComponents/WithStyles";
import Link from "next/link";

const Map = ({ lang }) => {
  return (
    <>
      {" "}
      <Okruszki lang={lang} slug={lang ? "Mapa serwisu" : "Service Map"} />
      <SiteTitle name={lang ? "MAPA SERWISU" : "SERVICE MAP"} />
      <section className="mapMapWrapper">
        <div className="mapMapContainer">
          <ul className="mapMapList">
            <li className="mapMainPageLink">
              <Link href="/">
                <a>{lang ? "Strona Główna" : "Main Page"}</a>
              </Link>
            </li>
            <div className="mapFirestChildLi">
              <Link href="/onas">
                <a>{lang ? "O nas" : "About Us"}</a>
              </Link>
            </div>
            <div className="mapFirestChildLi">
              <Link href="/aktualnosc">
                <a>{lang ? "Aktualności" : "News"}</a>
              </Link>
            </div>
            <div className="mapFirestChildLi">
              <Link href="/fundator">
                <a>{lang ? "Fundator" : "Founder"}</a>
              </Link>
            </div>
            <div className="mapFirestChildLi">
              <Link href="/kontakt">
                <a>{lang ? "Kontakt" : "Contact"}</a>
              </Link>
            </div>
            <div className="mapFirestChildLi">
              <Link href="/programFundacji">
                <a>{lang ? "Programy Fundacji" : "Fundation programs"}</a>
              </Link>
            </div>
            {lang ? (
              <div className="mapSecondChildLi">
                <Link href="/programy-fundacji/cv-na-wymiar">
                  <a>CV na wymiar</a>
                </Link>
              </div>
            ) : (
              ""
            )}

            <div className="mapFirestChildLi">
              <Link href="/rekrutacja">
                <a>
                  {lang ? "Rekrutacja pracowników z niepełnosprawnością" : "Recruitment of employees with disabilities"}
                </a>
              </Link>
            </div>
            <div className="mapFirestChildLi">
              <Link href="/audytDostepnosci">
                <a>{lang ? "Audyt dostępności" : "Accessibility Audits"}</a>
              </Link>
            </div>
            <div className="mapSecondChildLi">
              <Link href="/audytDostepnosci">
                <a>{lang ? "Audyt dostępności cyfrowej" : "Digital availability audit"}</a>
              </Link>
            </div>
            <div className="mapSecondChildLi">
              <Link href="/audytDostepnosci">
                <a>{lang ? "Audyt dostępności architektonicznej" : "	Audit of architectural accessibility"}</a>
              </Link>
            </div>
            <div className="mapSecondChildLi">
              <Link href="/audytDostepnosci">
                <a>
                  {lang
                    ? "Audyt dostępności komunikacyjno-informacyjnej"
                    : "Audit of communication and information accessibility"}
                </a>
              </Link>
            </div>
            <div className="mapSecondChildLi">
              <Link href="/audytDostepnosci">
                <a> {lang ? "Wnioski dotacyjne" : "Grant applications"}</a>
              </Link>
            </div>
            <div className="mapFirestChildLi">
              <Link href="/nasiSpecjalisci">
                <a>{lang ? "Nasi specjalisci" : "Our Experts"}</a>
              </Link>
            </div>
            {lang ? (
              <div className="mapFirestChildLi">
                <Link href="/certyfikatyCsr">
                  <a>{"Certyfikaty CSR"}</a>
                </Link>
              </div>
            ) : (
              ""
            )}

            <div className="mapFirestChildLi">
              <Link href="/politykaPrywatnosci">
                <a>{lang ? "Polityka prywatności" : "Privacy policy and cookies"}</a>
              </Link>
            </div>
            <div className="mapFirestChildLi">
              <Link href="/deklaracja-dostepnosci">
                <a>{lang ? "Deklaracja dostępności" : "Accessibility declaration"}</a>
              </Link>
            </div>
            <div className="mapFirestChildLi">
              <Link href="/raporty-finansowe">
                <a>{lang ? "Raporty finansowe" : "Financial reports"}</a>
              </Link>
            </div>
          </ul>
        </div>
        <div className="rapFundationContainer">
          <GoHome lang={lang} />
        </div>
      </section>
    </>
  );
};

export default Map;
