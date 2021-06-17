import React from "react";
import styled from "styled-components";
import { P, GoHome, SiteTitle, TittleH2, Okruszki } from "../../styledComponents/WithStyles";
import img from "../../images/csr/Image 4.png";
import img2 from "../../images/csr/pozytywny-wizerunek.png";
import img3 from "../../images/csr/Wzrost-konkurencyjności.png";
import img4 from "../../images/csr/Partnera-biznesowego.png";
import amb from "./amb";

const Certificate = ({ lang }) => {
  return (
    <>
      {" "}
      <Okruszki lang={lang} slug={lang ? "Certyfikat CSR" : "Certyfikat CSR"} />
      <SiteTitle name={lang ? "Certyfikat CSR" : `Certyfikat CSR`} />
      <TittleH2
        title={lang ? "Społeczna odpowiedzialność biznesu (CSR)" : `Społeczna odpowiedzialność biznesu (CSR)`}
      />
      <FundationWrapper>
        <FundationContainer>
          <ContactImg>
            <img src={img} alt="" />
          </ContactImg>
          <RecrutmentTxt>
            <P>
              {lang
                ? ` CSR (Corporate Social Responsibility) to długofalowa strategia rozwoju firmy, oparta na zaangażowaniu i społecznej wrażliwości. Odpowiednio zaplanowana i konsekwentnie realizowana polityka CSR, daje przedsiębiorstwu szereg korzyści; od zwiększenia rozpoznawalności marki, kończąc na ukształtowaniu długofalowych relacji z lokalną społecznością, organizacjami pozarządowymi, interesariuszami czy inwestorami.`
                : `CSR (Corporate Social Responsibility) to długofalowa strategia rozwoju firmy, oparta na zaangażowaniu i społecznej wrażliwości. Odpowiednio zaplanowana i konsekwentnie realizowana polityka CSR, daje przedsiębiorstwu szereg korzyści; od zwiększenia rozpoznawalności marki, kończąc na ukształtowaniu długofalowych relacji z lokalną społecznością, organizacjami pozarządowymi, interesariuszami czy inwestorami.`}
            </P>
          </RecrutmentTxt>
          <div>
            <P>
              {lang
                ? `CSR (Corporate Social Responsibility) to długofalowa strategia rozwoju firmy, oparta na zaangażowaniu i społecznej wrażliwości. Odpowiednio zaplanowana i konsekwentnie realizowana polityka CSR, daje przedsiębiorstwu szereg korzyści; od zwiększenia rozpoznawalności marki, kończąc na ukształtowaniu długofalowych relacji z lokalną społecznością, organizacjami pozarządowymi, interesariuszami czy inwestorami.`
                : `CSR (Corporate Social Responsibility) to długofalowa strategia rozwoju firmy, oparta na zaangażowaniu i społecznej wrażliwości. Odpowiednio zaplanowana i konsekwentnie realizowana polityka CSR, daje przedsiębiorstwu szereg korzyści; od zwiększenia rozpoznawalności marki, kończąc na ukształtowaniu długofalowych relacji z lokalną społecznością, organizacjami pozarządowymi, interesariuszami czy inwestorami.`}
            </P>
          </div>
          <TittleH2 title={lang ? "Co zyskujesz?" : `Co zyskujesz?`} />
          <GainWrapper>
            <Gain>
              <img src={img2} alt="" />
              <div>
                <h4>{lang ? `Pozytywny wizerunek` : `Pozytywny wizerunek`}</h4>
                <P>
                  {lang
                    ? ` Firmy społecznie zaangażowane są lepiej odbierane przez potencjalnych klientów i partnerów
                  biznesowych.`
                    : ` Firmy społecznie zaangażowane są lepiej odbierane przez potencjalnych klientów i partnerów
                    biznesowych.`}
                </P>
              </div>
            </Gain>
            <Gain>
              <img src={img3} alt="" />
              <div>
                <h4>{lang ? `Wzrost konkurencyjności` : `Wzrost konkurencyjności`}</h4>
                <P>
                  {lang
                    ? ` Firmy działające w oparciu o społeczną odpowiedzialność biznesu notują długotrwały i stabilny wzrost.`
                    : ` Firmy działające w oparciu o społeczną odpowiedzialność biznesu notują długotrwały i stabilny wzrost.`}
                </P>
              </div>
            </Gain>
            <Gain>
              <img src={img4} alt="" />
              <div>
                <h4>{lang ? `Partnera biznesowego` : `Partnera biznesowego`}</h4>
                <P>
                  {lang
                    ? ` Możliwość nawiązania korzystnej współpracy z firmą specjalizującą się w kreowaniu wizerunku marek w sieci.`
                    : ` Możliwość nawiązania korzystnej współpracy z firmą specjalizującą się w kreowaniu wizerunku marek w sieci.`}
                </P>
              </div>
            </Gain>
          </GainWrapper>
        </FundationContainer>
        <AmbasadorsWrapper>
          <TittleH2 title={lang ? "Ambasadorzy" : `Ambasadorzy`} amb={"72px"} />
          <AmbContainer>
            {amb.map((box, index) => (
              <AmbBox key={index}>
                <img src={box.img} alt={box.alt} />
                <p>{box.data}</p>
              </AmbBox>
            ))}
          </AmbContainer>
        </AmbasadorsWrapper>
      </FundationWrapper>
      <FundationWrapper>
        <FundationContainer>
          <GoHome lang={lang} />
        </FundationContainer>
      </FundationWrapper>
    </>
  );
};

const AmbContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* @media screen and (max-width: 935px){
      width: 80%;
  }
  @media screen and (max-width: 883px){
      width: 55%;
  } */
`;

const AmbBox = styled.div`
  text-align: center;
  padding: 2em;
`;

const GainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 556px) {
    justify-content: center !important;
  } ;
`;

const Gain = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 30%;
  flex-direction: column;
`;

const FundationWrapper = styled.section`
  background-color: white;
  padding-bottom: 2em;
`;
const FundationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  flex-direction: row;
`;

const AmbasadorsWrapper = styled.div`
  box-shadow: 0px 0px 10px #00000029;
  border-radius: 72px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 3em auto 0 auto;
  justify-content: center;
  flex-direction: row;
`;

const ContactImg = styled.div`
  margin: 0 auto;
  & div img {
    width: 100%;
  }
`;

const RecrutmentTxt = styled.div`
  margin-bottom: 3em;
  width: 55%;

  & p {
    margin: 0px;
    margin-top: 8px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export default Certificate;
