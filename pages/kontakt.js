import React, { useEffect, useRef, useState } from "react";
import { H3, P, GoHome, SiteTitle, TittleH2, ContactUs, Okruszki } from "../styledComponents/WithStyles";
import styled from "styled-components";
import img from "../images/Kontakt/1.png";
import Head from "next/Head";

const kontakt = ({ lang, isMobile }) => {
  useEffect(() => {
    document.title = lang ? "Kontakt - Fundacja Biznes Bez Barier" : "Contact - Business Without Barries";
  }, [lang]);

  const [isCopyUsed, setIsCopyUsed] = useState({
    krs: false,
    acc: false,
    acc1: false,
    acc2: false,
  });

  const copy = (e, id) => {
    e.preventDefault();

    const input = document.querySelector(id);
    const name = e.currentTarget.name;
    input.select();
    document.execCommand("copy");

    setIsCopyUsed({ ...isCopyUsed, [name]: true });
    setTimeout(() => {
      setIsCopyUsed({ ...isCopyUsed, [name]: false });
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>{lang ? "Fundator - Fundacja Biznes Bez Barier" : "Founder - Business Without Barries"}</title>
        <meta property="og:title" content={"FUNDACJA BIZNES BEZ BARIER"} key="title" />
        <meta
          property="og:image"
          content={"https://biznesbezbarier.org/_next/static/images/1-1e14a245ca9ac6ef3d7cd7d0ff2ca200.png"}
          key="image"
        />
        <meta
          property="og:description"
          content={"Fundacja Biznes Bez Barier, ul. Gdyńska 25/50, Świdnica kontakt@bizesbezbarier.org"}
          key="description"
        />
        <meta property="og:url" content={`https://biznesbezbarier.org/kontakt`} key="url" />
      </Head>
      <Okruszki lang={lang} slug={lang ? "Kontakt" : "Contact"} />
      <SiteTitle name={lang ? "KONTAKT" : "CONTACT"} />
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">{lang ? "Dane kontaktowe" : "Contact details"}</h2>
            </section>
          </div>
        </div>
      </div>
      <section className="founderSectionWrapper">
        <div className="contactContainer">
          <div>
            <div className="contactText" id="skip">
              <h3 className="styled-h3">
                {lang ? `FUNDACJA BIZNES BEZ BARIER` : "BUSINESS WITHOUT BARRIERS FOUNDATION"}
              </h3>
              <ul className="contactList">
                <li>
                  {" "}
                  <p className="styled-p">ul. Gdyńska 25/50, 58-100 Świdnica</p>
                </li>
                <li>
                  <p className="styled-p">
                    {" "}
                    e-mail:{" "}
                    {lang ? (
                      <a className="copyStyledLink" href="mailto:kontakt@biznesbezbarier.org">
                        {" "}
                        kontakt@biznesbezbarier.org
                      </a>
                    ) : (
                      <a className="copyStyledLink" href="mailto:contact@foundationbwb.org">
                        {" "}
                        contact@foundationbwb.org
                      </a>
                    )}
                  </p>
                </li>
                <li>
                  <p className="styled-p">
                    {lang ? `tel.` : `phone:`} <a href="tel:+48 725 163 741">(+48) 725 163 741</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="contactText">
              <h3 className="styled-h3">{lang ? `BIURO PRASOWE` : `PRESS OFFICE`}</h3>
              <ul className="contactList">
                <li>
                  <p className="styled-p">
                    e-mail:{" "}
                    {lang ? (
                      <a className="copyStyledLink" href="mailto:prasa@biznesbezbarier.org">
                        prasa@biznesbezbarier.org
                      </a>
                    ) : (
                      <a className="copyStyledLink" href="mailto:press@foundationbwb.org">
                        press@foundationbwb.org
                      </a>
                    )}
                  </p>
                </li>
                <li>
                  <p className="styled-p">
                    {lang ? `tel.` : `phone:`} <a href="tel:+48 530 275 519">(+48) 530 275 519</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="contactText">
              <h3 className="styled-h3">{lang ? `DANE IDENTYFIKACYJNE` : `IDENTIFICATION DATA`}</h3>
              <ul className="contactList">
                <li>
                  <div className="copyWrapper">
                    {" "}
                    <p className="styled-p">KRS 0000793377</p>
                    <form
                      name="krs"
                      onSubmit={(e) => {
                        copy(e, "#krs");
                      }}
                    >
                      <input className="copySubmitBtn" type="submit" value={lang ? "skopiuj nr" : `copy`}></input>
                      <div style={{ display: isCopyUsed.krs ? "block" : "none" }}>{lang ? `skopiowano` : `copied`}</div>
                      <input
                        className="scr-only-input"
                        aria-hidden="true"
                        tabIndex="-1"
                        id="krs"
                        onChange={() => {}}
                        value="KRS 0000793377"
                        type="text"
                      ></input>
                    </form>
                  </div>
                </li>
                <li>
                  <div className="copyWrapper">
                    <p className="styled-p">
                      {lang
                        ? `Numer rachunku: 84 1090 15 22 0000 0001 4315 9295`
                        : `Account number PLN PL 84 1090 15 22 0000 0001 4315 9295 SWIFT WBK PPL PP`}
                    </p>
                    <form
                      name="acc"
                      onSubmit={(e) => {
                        copy(e, "#acc");
                      }}
                    >
                      <input className="copySubmitBtn" type="submit" value={lang ? "skopiuj nr" : `copy`}></input>
                      <div style={{ display: isCopyUsed.acc ? "block" : "none" }}>{lang ? `skopiowano` : `copied`}</div>
                      <input
                        className="scr-only-input"
                        aria-hidden="true"
                        tabIndex="-1"
                        id="acc"
                        onChange={() => {}}
                        value={
                          lang
                            ? "84 1090 15 22 0000 0001 4315 9295"
                            : `PLN PL 84 1090 15 22 0000 0001 4315 9295 SWIFT WBK PPL PP`
                        }
                        type="text"
                      ></input>
                    </form>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="copyWrapper">
                    <p className="styled-p">
                      {lang ? `` : `Account number EURO PL 93 1090 1522 0000 0001 4315 9317 SWIFT WBK PPL PP`}
                    </p>
                    {lang ? (
                      ``
                    ) : (
                      <form
                        name="acc1"
                        onSubmit={(e) => {
                          copy(e, "#acc1");
                        }}
                      >
                        <input className="copySubmitBtn" type="submit" value={lang ? "skopiuj nr" : `copy`}></input>
                        <div style={{ display: isCopyUsed.acc1 ? "block" : "none" }}>
                          {lang ? `skopiowano` : `copied`}
                        </div>
                        <input
                          className="scr-only-input"
                          aria-hidden="true"
                          tabIndex="-1"
                          id="acc1"
                          onChange={() => {}}
                          value={`EURO PL 93 1090 1522 0000 0001 4315 9317 SWIFT WBK PPL PP`}
                          type="text"
                        ></input>
                      </form>
                    )}
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="copyWrapper">
                    <p className="styled-p">
                      {lang ? `` : `Account number USD PL 43 1090 1522 0000 0001 4315 9354 SWIFT WBK PPL PP`}
                    </p>
                    {lang ? (
                      ``
                    ) : (
                      <form
                        name="acc2"
                        onSubmit={(e) => {
                          copy(e, "#acc2");
                        }}
                      >
                        <input className="copySubmitBtn" type="submit" value={lang ? "skopiuj nr" : `copy`}></input>
                        <div style={{ display: isCopyUsed.acc2 ? "block" : "none" }}>
                          {lang ? `skopiowano` : `copied`}
                        </div>
                        <input
                          className="scr-only-input"
                          aria-hidden="true"
                          tabIndex="-1"
                          id="acc2"
                          onChange={() => {}}
                          value={`USD PL 43 1090 1522 0000 0001 4315 9354 SWIFT WBK PPL PP`}
                          type="text"
                        />
                      </form>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="contactImg">
            <img src={img} alt="" />
          </div>
        </div>
      </section>

      <div className="about-site-name">
        <div>
          <section className="about-actions" style={{ backgroundColor: "#f8f8f8" }}>
            <h2 className="styled-h2">{lang ? "Skontaktuj się z nami" : "Contact Us"}</h2>
          </section>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <p className="styled-p" style={{ textAlign: "center" }}>
          {lang
            ? `Masz pytania lub wątpliwości? Skontaktuj się z nami.`
            : `Do you have more questions? Get in touch with us.`}
          <br />
          {lang
            ? `Odpowiemy na wszystkie pytania, doradzimy i pomożemy.`
            : `We will answer all your questions, advise and help.`}
        </p>

        {lang ? (
          <a className="yellow-button" alt="" href="mailto:kontakt@biznesbezbarier.org">
            NAPISZ DO NAS <span className="scr-only"> Otwarcie programu pocztowego na komputerze.</span>
          </a>
        ) : (
          <a className="yellow-button" alt="" href="mailto:contact@foundationbwb.org">
            WRITE TO US <span className="scr-only">Contact Us. It will open email client on computer</span>
          </a>
        )}
      </div>

      <div className="contactContainer">
        <GoHome lang={lang} />
      </div>
    </>
  );
};

const CopyInput = styled.input`
  opacity: 0;
  width: 1px;
  height: 1px;
  border: 0;
  padding: 0;
  margin: 0;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0px;
`;

const CopyWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 110px;

  & form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const SubmitBtn = styled.input`
  cursor: pointer;
  background-color: #f0be20;
  font-weight: bold;
  border-radius: 12px;
  border: 3px solid #f0be20;
  text-decoration: none;
  margin: 0.65em;
  padding: 0.45em;
  color: black;

  & :hover {
    background-color: white;
  }
`;

const ContactWrapper = styled.section`
  background-color: white;
`;

const ContactContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  padding: 2em;
`;

const ContactImg = styled.div`
  max-width: 45%;
  min-width: 300px;
  margin: 0 auto;
  & img {
    width: 100%;
  }
`;

const ContactText = styled.div`
  margin-bottom: 3em;
  max-width: 53%;
  min-width: 300px;

  & p {
    margin: 0px;
    margin-top: 8px;
  }

  & p a {
    text-decoration: none;
    color: #202020;
  }
`;

const StyledLink = styled.a`
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: #2c2c2c;
  text-decoration: none;
  padding: 0.1rem 0;
  position: relative;
  border-bottom: 1px solid #2d2c2a;
  &:hover {
    border-bottom: 3px solid #202020;
  }
`;

export default kontakt;
