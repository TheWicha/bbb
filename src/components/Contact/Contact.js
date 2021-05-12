import React from "react";
import { H3, P, StyledLink, YellowButton, GoHome, SiteTitle, TittleH2 } from "../../styledComponents/WithStyles";
import styled from "styled-components";
import img from "../../images/Kontakt/1.png";
const Contact = ({lang, isMobile}) => {
  return (
    <>
      <SiteTitle name="KONTAKT" />
      <TittleH2 id="skip" title={"Dane kontaktowe"} />
      <ContactWrapper>
        <ContactContainer>
          <div>
            <ContactText id="skip">
              <H3>FUNDACJA BIZNES BEZ BARIER</H3>
              <P>ul. Gdyńska 25/50, 58-100 Świdnica</P>
              <P>
                {" "}
                e-mail: <StyledLink to="mailto:kontakt@biznesbezbarier.org">kontakt@biznesbezbarier.org</StyledLink>
              </P>
              <P> tel. (+48) 725 163 741</P>
            </ContactText>
            <ContactText>
              <H3>BIURO PRASOWE</H3>
              <P>
                e-mail: <StyledLink to="mailto:prasa@biznesbezbarier.org">prasa@biznesbezbarier.org</StyledLink>
              </P>
              <P> tel. (+48) 530 275 519</P>
            </ContactText>
            <ContactText>
              <H3>DANE IDENTYFIKACYJNE</H3>
              <P>KRS 0000793377</P>
              <P>Numer rachunku: 84 1090 15 22 0000 0001 4315 9295</P>
            </ContactText>
          </div>
          <ContactImg>
            <img src={img} />
          </ContactImg>
        </ContactContainer>
      </ContactWrapper>
      <ContactContainer>
        <TittleH2 color={"#F8F8F8"} title={"Skontaktuj się z nami"} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <P style={{ textAlign: "center" }}>
            Masz pytania lub wątpliwości? Skontaktuj się z nami.
            <br /> Odpowiemy na wszystkie pytania, doradzimy i pomożemy.
          </P>
          <YellowButton>NAPISZ DO NAS</YellowButton>
        </div>
      </ContactContainer>
      <ContactContainer>
        <GoHome />
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
  max-width: 45%;
  min-width: 300px;

  & p {
    margin: 0px;
    margin-top: 8px;
  }
`;

export default Contact;
