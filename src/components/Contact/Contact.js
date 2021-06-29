import React, { useEffect } from "react";
import { H3, P, GoHome, SiteTitle, TittleH2, ContactUs, Okruszki } from "../../styledComponents/WithStyles";
import styled from "styled-components";
import img from "../../images/Kontakt/1.png";
const Contact = ({ lang, isMobile }) => {
  useEffect(() => {
    document.title = lang ? "Kontakt - Fundacja Biznes Bez Barier" : "Contact - Business Without Barries";
  }, [lang]);

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
              <P>ul. Gdyńska 25/50, 58-100 Świdnica</P>
              <P>
                {" "}
                e-mail:{" "}
                {lang ? (
                  <StyledLink href="mailto:kontakt@biznesbezbarier.org"> kontakt@biznesbezbarier.org</StyledLink>
                ) : (
                  <StyledLink href="mailto:contact@foundationbwb.org"> contact@foundationbwb.org</StyledLink>
                )}
              </P>
              <P>
                {lang ? `tel.` : `phone:`} <a href="tel:+48 725 163 741">(+48) 725 163 741</a>
              </P>
            </ContactText>
            <ContactText>
              <H3>{lang ? `BIURO PRASOWE` : `PRESS OFFICE`}</H3>
              <P>
                e-mail:{" "}
                {lang ? (
                  <StyledLink href="mailto:prasa@biznesbezbarier.org">prasa@biznesbezbarier.org</StyledLink>
                ) : (
                  <StyledLink href="mailto:press@foundationbwb.org">press@foundationbwb.org</StyledLink>
                )}
              </P>
              <P>
                {lang ? `tel.` : `phone:`} <a href="tel:+48 530 275 519">(+48) 530 275 519</a>
              </P>
            </ContactText>
            <ContactText>
              <H3>{lang ? `DANE IDENTYFIKACYJNE` : `IDENTIFICATION DATA`}</H3>
              <P>KRS 0000793377</P>
              <P>
                {lang
                  ? `Numer rachunku: 84 1090 15 22 0000 0001 4315 9295`
                  : `Account number PLN PL 84 1090 15 22 0000 0001 4315 9295 SWIFT WBK PPL PP`}
              </P>
              <P>{lang ? `` : `Account number EURO PL 93 1090 1522 0000 0001 4315 9317 SWIFT WBK PPL PP`}</P>
              <P>{lang ? `` : `Account number USD PL 43 1090 1522 0000 0001 4315 9354 SWIFT WBK PPL PP`}</P>
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
