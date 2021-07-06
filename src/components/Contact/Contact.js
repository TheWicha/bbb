import React, { useEffect, useRef, useState } from "react";
import { H3, P, GoHome, SiteTitle, TittleH2, ContactUs, Okruszki } from "../../styledComponents/WithStyles";
import styled from "styled-components";
import img from "../../images/Kontakt/1.png";
import "../../index.css";
const Contact = ({ lang, isMobile }) => {
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
      <Okruszki lang={lang} slug={lang ? "Kontakt" : "Contact"} />
      <SiteTitle name={lang ? "KONTAKT" : "CONTACT"} />
      <TittleH2 title={lang ? "Dane kontaktowe" : "Contact details"} />
      <ContactWrapper>
        <ContactContainer>
          <div>
            <ContactText id="skip">
              <H3>{lang ? `FUNDACJA BIZNES BEZ BARIER` : "BUSINESS WITHOUT BARRIERS FOUNDATION"}</H3>
              <ContactList>
                <li>
                  {" "}
                  <P>ul. Gdyńska 25/50, 58-100 Świdnica</P>
                </li>
                <li>
                  <P>
                    {" "}
                    e-mail:{" "}
                    {lang ? (
                      <StyledLink href="mailto:kontakt@biznesbezbarier.org"> kontakt@biznesbezbarier.org</StyledLink>
                    ) : (
                      <StyledLink href="mailto:contact@foundationbwb.org"> contact@foundationbwb.org</StyledLink>
                    )}
                  </P>
                </li>
                <li>
                  <P>
                    {lang ? `tel.` : `phone:`} <a href="tel:+48 725 163 741">(+48) 725 163 741</a>
                  </P>
                </li>
              </ContactList>
            </ContactText>
            <ContactText>
              <H3>{lang ? `BIURO PRASOWE` : `PRESS OFFICE`}</H3>
              <ContactList>
                <li>
                  <P>
                    e-mail:{" "}
                    {lang ? (
                      <StyledLink href="mailto:prasa@biznesbezbarier.org">prasa@biznesbezbarier.org</StyledLink>
                    ) : (
                      <StyledLink href="mailto:press@foundationbwb.org">press@foundationbwb.org</StyledLink>
                    )}
                  </P>
                </li>
                <li>
                  <P>
                    {lang ? `tel.` : `phone:`} <a href="tel:+48 530 275 519">(+48) 530 275 519</a>
                  </P>
                </li>
              </ContactList>
            </ContactText>
            <ContactText>
              <H3>{lang ? `DANE IDENTYFIKACYJNE` : `IDENTIFICATION DATA`}</H3>
              <ContactList>
                <li>
                  <CopyWrapper>
                    {" "}
                    <P>KRS 0000793377</P>
                    <form
                      name="krs"
                      onSubmit={(e) => {
                        copy(e, "#krs");
                      }}
                    >
                      <SubmitBtn type="submit" value={lang ? "skopiuj nr" : `copy`}></SubmitBtn>
                      <div style={{ display: isCopyUsed.krs ? "block" : "none" }}>{lang ? `skopiowano` : `copied`}</div>
                      <input
                        className="scr-only"
                        aria-hidden="true"
                        tabIndex="-1"
                        id="krs"
                        onChange={() => {}}
                        value="KRS 0000793377"
                        type="text"
                      ></input>
                    </form>
                  </CopyWrapper>
                </li>
                <li>
                  <CopyWrapper>
                    <P>
                      {lang
                        ? `Numer rachunku: 84 1090 15 22 0000 0001 4315 9295`
                        : `Account number PLN PL 84 1090 15 22 0000 0001 4315 9295 SWIFT WBK PPL PP`}
                    </P>
                    <form
                      name="acc"
                      onSubmit={(e) => {
                        copy(e, "#acc");
                      }}
                    >
                      <SubmitBtn type="submit" value={lang ? "skopiuj nr" : `copy`}></SubmitBtn>
                      <div style={{ display: isCopyUsed.acc ? "block" : "none" }}>{lang ? `skopiowano` : `copied`}</div>
                      <input
                        className="scr-only"
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
                  </CopyWrapper>
                </li>
                <li>
                  {" "}
                  <CopyWrapper>
                    <P>{lang ? `` : `Account number EURO PL 93 1090 1522 0000 0001 4315 9317 SWIFT WBK PPL PP`}</P>
                    {lang ? (
                      ``
                    ) : (
                      <form
                        name="acc1"
                        onSubmit={(e) => {
                          copy(e, "#acc1");
                        }}
                      >
                        <SubmitBtn type="submit" value={lang ? "skopiuj nr" : `copy`}></SubmitBtn>
                        <div style={{ display: isCopyUsed.acc1 ? "block" : "none" }}>
                          {lang ? `skopiowano` : `copied`}
                        </div>
                        <input
                          className="scr-only"
                          aria-hidden="true"
                          tabIndex="-1"
                          id="acc1"
                          onChange={() => {}}
                          value={`EURO PL 93 1090 1522 0000 0001 4315 9317 SWIFT WBK PPL PP`}
                          type="text"
                        ></input>
                      </form>
                    )}
                  </CopyWrapper>
                </li>
                <li>
                  {" "}
                  <CopyWrapper>
                    <P>{lang ? `` : `Account number USD PL 43 1090 1522 0000 0001 4315 9354 SWIFT WBK PPL PP`}</P>
                    {lang ? (
                      ``
                    ) : (
                      <form
                        name="acc2"
                        onSubmit={(e) => {
                          copy(e, "#acc2");
                        }}
                      >
                        <SubmitBtn type="submit" value={lang ? "skopiuj nr" : `copy`}></SubmitBtn>
                        <div style={{ display: isCopyUsed.acc2 ? "block" : "none" }}>
                          {lang ? `skopiowano` : `copied`}
                        </div>
                        <input
                          className="scr-only"
                          aria-hidden="true"
                          tabIndex="-1"
                          id="acc2"
                          onChange={() => {}}
                          value={`USD PL 43 1090 1522 0000 0001 4315 9354 SWIFT WBK PPL PP`}
                          type="text"
                        ></input>
                      </form>
                    )}
                  </CopyWrapper>
                </li>
              </ContactList>
            </ContactText>
          </div>
          <ContactImg>
            <img src={img} alt="" />
          </ContactImg>
        </ContactContainer>
      </ContactWrapper>
      <ContactUs lang={lang} />
      <ContactContainer>
        <GoHome lang={lang} />
      </ContactContainer>
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

export default Contact;
