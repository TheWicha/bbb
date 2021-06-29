import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export const mainBlack = "#202020";
export const secondaryBlack = "#2D2C2A";
export const mainYellow = "#f0be20";

export const H1 = styled.h1`
  font-size: 38px;
  color: ${secondaryBlack};
`;

export const H2 = styled.h2`
  font-size: clamp(1.4rem, 3.3vw, 2.4rem);
  color: ${secondaryBlack};
  font-weight: 400;
  &::after {
    content: "";
    width: 64px;
    height: 3px;
    background-color: ${mainYellow};
    display: block;
  }
`;

export const H3 = styled.h3`
  width: 100%;
  font-size: 20px;
  color: ${mainBlack};
`;

export const P = styled.p`
  font-size: 18px;
  color: ${mainBlack};
  text-align: left;
  letter-spacing: 0px;
  line-height: 1.5;
`;

export const YellowButton = styled.a`
  cursor: pointer;
  background-color: ${mainYellow};
  font-weight: bold;
  padding: 14px 51px;
  border-radius: 12px;
  border: 3px solid ${mainYellow};
  margin: 1.25em;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: white;
  }
`;

export const WhiteButton = styled.button`
  cursor: pointer;
  background-color: white;
  font-weight: bold;
  padding: 14px 51px;
  border-radius: 60px;
  border: 1px solid ${secondaryBlack};
  margin: 1.25em;
  &:hover {
    border: 3px solid ${secondaryBlack};
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: #2c2c2c;
  text-decoration: none;
  padding: 0.1rem 0;
  position: relative;
  border-bottom: 1px solid ${secondaryBlack};
  &:hover {
    border-bottom: 3px solid ${mainBlack};
  }
`;

export const GoHome = ({ lang }) => {
  useEffect(() => {}, [lang]);
  return (
    <div style={{ height: "30px", marginTop: "5em", marginBottom: "2em" }}>
      <StyledLink
        to={"/"}
        onClick={() => {
          setTimeout(() => {
            document.getElementById("header").scrollIntoView();
          }, 100);
        }}
      >
        {lang ? "Powrót na stronę główną" : "Return to home page"}
        <FontAwesomeIcon style={{ verticalAlign: "-0.2em", marginLeft: "12px" }} icon={("fas", faAngleRight)} />
      </StyledLink>
    </div>
  );
};

const AboutUsWrapper2 = styled.section`
  width: 100%;
  background-color: #f8f8f8;
`;

const SiteNameWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 1.2em auto 2.2em auto;
`;
const SiteName = styled.div`
  min-width: 200px;
  width: fit-content;
  position: relative;
  background-color: ${mainYellow};
  h1 {
    font-size: clamp(1.4rem, 3.3vw, 2.3rem);
    margin: 0.3em 0.5em 0.3em 0;
  }
  &:before {
    content: "!";
    color: ${mainYellow};
    padding: 0.3em 0 0.3em 0;
    background-color: ${mainYellow};
    width: 100vw;
    font-size: clamp(1.4rem, 3.3vw, 2.3rem);
    position: absolute;
    right: 100%;
  }
`;

export const SiteTitle = ({ name }) => {
  // const [siteName, setSiteName] = useState("");

  // useEffect(() => {
  //   setSiteName(window.location.pathname.toUpperCase().replace("/", "").replace("-", " "));
  // }, [siteName]);

  return (
    <AboutUsWrapper2>
      <SiteNameWrapper>
        <SiteName>
          <H1>{name}</H1>
        </SiteName>
      </SiteNameWrapper>
    </AboutUsWrapper2>
  );
};

export const TittleH2 = ({ title, color, amb }) => {
  
  const Wrapper = styled.section`
    border-radius: ${amb ? amb : ""};
    width: 100%;
    background-color: ${color ? color : "white"};

    @media screen and (max-width: 500px) {
      /* padding: 1em; */
    }
  `;

  const Container = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
  `;

  const Actions = styled.section`
    background-color: ${color ? color : "white"};
    max-width: 1000px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 1.2em auto 0 auto;
  `;

  return (
    <Wrapper>
      <Container>
        <Actions>
          <H2>{title}</H2>
        </Actions>
      </Container>
    </Wrapper>
  );
};

export const ContactUs = ({ title, lang, color }) => {
  useEffect(() => {}, [lang, title, color]);

  const ContactContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: 0 auto;
    justify-content: center;
  `;

  return (
    <ContactContainer>
      <TittleH2
        color={color ? color : "#F8F8F8"}
        title={`${title ? title : lang ? "Skontaktuj się z nami" : "Contact us"}`}
      />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <P style={{ textAlign: "center" }}>
          {lang
            ? `Masz pytania lub wątpliwości? Skontaktuj się z nami.`
            : `Do you have more questions? Get in touch with us.`}
          <br />
          {lang
            ? `Odpowiemy na wszystkie pytania, doradzimy i pomożemy.`
            : `We will answer all your questions, advise and help.`}
        </P>
        {lang ? (
          <YellowButton href="mailto:kontakt@biznesbezbarier.org">NAPISZ DO NAS</YellowButton>
        ) : (
          <YellowButton href="mailto:contact@foundationbwb.org">WRITE TO US</YellowButton>
        )}
      </div>
    </ContactContainer>
  );
};

export const Okruszki = ({ lang, slug }) => {
  // const [siteName, setSiteName] = useState("");

  useEffect(() => {
    // const nameLower = window.location.pathname.replace("/", "").replace("-", " ");
    // let nameCapitalized = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);
    // setSiteName(nameCapitalized);
  }, [lang]);

  const SiteNameWrapper = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin: 0.2em auto 0 auto;
  `;

  const Okruszki = styled.ul`
    align-items: center;
    display: flex;
    list-style: none;
    padding: 0px;
    margin: 0;
  `;

  const FirstLink = styled(Link)`
    cursor: pointer;
    font-size: 16px;
    color: #2c2c2c;
    text-decoration: none;
    padding: 0.1rem 0;
    position: relative;
    border-bottom: 1px solid ${secondaryBlack};
    &:hover {
      border-bottom: 2px solid ${mainBlack};
    }
  `;
  const SecondLink = styled.p`
    font-size: 16px;
    color: #2c2c2c;
    text-decoration: none;
    padding: 0.1rem 0;
    position: relative;
  `;

  return (
    <SiteNameWrapper>
      <Okruszki>
        <li>
          <FirstLink to="/">{lang ? `Strona Główna` : "Main Page"}</FirstLink>
          <FontAwesomeIcon
            icon={("fas", faAngleRight)}
            style={{ verticalAlign: "-0.525em", height: "1.4em", color: mainYellow, width: "1.7em" }}
          />
        </li>

        <li aria-hidden="true">
          <SecondLink>{slug}</SecondLink>
        </li>
      </Okruszki>
    </SiteNameWrapper>
  );
};
