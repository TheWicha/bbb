import React from "react";
import styled from "styled-components";
import { GoHome, SiteTitle, Okruszki, } from "../styledComponents/WithStyles";
import Link from "next/link";
const raportyFinansowe = ({ lang }) => {
  return (
    <>
      <Okruszki slug={lang ? "Raporty finansowe" : "Financial reports"} lang={lang} />
      <SiteTitle name={lang ? "Raporty finansowe" : `Financial reports`} />
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">
                {lang ? "Sprawozdanie z działalności fundacji" : "Foundation activity report"}
              </h2>
            </section>
          </div>
        </div>
      </div>
      <section className="rapFundationWrapper">
        <div className="rapDa">
          <div className="rapLinks">
            <div style={{ height: "50px" }}>
              {lang ? (
                <Link href="/">
                  <a className="styled-link">Pobierz raport za rok 2019</a>
                </Link>
              ) : (
                <Link href="/">
                  <a className="styled-link">Download the report for 2019</a>
                </Link>
              )}
            </div>
            <div style={{ height: "50px" }}>
              {lang ? (
                <Link href="/">
                  <a className="styled-link">Pobierz raport za rok 2020</a>
                </Link>
              ) : (
                <Link href="/">
                  <a className="styled-link">Download the report for 2020</a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="rapFundationContainer">
        <GoHome lang={lang} />
      </div>
    </>
  );
};

export default raportyFinansowe;
