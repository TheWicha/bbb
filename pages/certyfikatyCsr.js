import React from "react";
import styled from "styled-components";
import { P, GoHome, SiteTitle, TittleH2, Okruszki } from "../styledComponents/WithStyles";
import img from "../images/csr/Image 4.png";
import img2 from "../images/csr/pozytywny-wizerunek.png";
import img3 from "../images/csr/Wzrost-konkurencyjności.png";
import img4 from "../images/csr/Partnera-biznesowego.png";
import amb from "../components/amb";

const Certificate = ({ lang }) => {
  return (
    <>
      <Okruszki lang={lang} slug={lang ? "Certyfikat CSR" : "Certyfikat CSR"} />
      <SiteTitle name={lang ? "Certyfikat CSR" : `Certyfikat CSR`} />
      <div className="about-us-wrapper">
        <div className="about-site-name">
          <div>
            <section className="about-actions">
              <h2 className="styled-h2">
                {lang ? "Społeczna odpowiedzialność biznesu (CSR)" : "Społeczna odpowiedzialność biznesu (CSR)"}
              </h2>
            </section>
          </div>
        </div>
      </div>
      <section className="certFundationWrapper">
        <div className="certFundationContainer">
          <div className="certContactImg">
            <img src={img} alt="" />
          </div>
          <div className="certRecrutmentTxt">
            <p className="styled-p">
              {lang
                ? ` CSR (Corporate Social Responsibility) to długofalowa strategia rozwoju firmy, oparta na zaangażowaniu i społecznej wrażliwości. Odpowiednio zaplanowana i konsekwentnie realizowana polityka CSR, daje przedsiębiorstwu szereg korzyści; od zwiększenia rozpoznawalności marki, kończąc na ukształtowaniu długofalowych relacji z lokalną społecznością, organizacjami pozarządowymi, interesariuszami czy inwestorami.`
                : `CSR (Corporate Social Responsibility) to długofalowa strategia rozwoju firmy, oparta na zaangażowaniu i społecznej wrażliwości. Odpowiednio zaplanowana i konsekwentnie realizowana polityka CSR, daje przedsiębiorstwu szereg korzyści; od zwiększenia rozpoznawalności marki, kończąc na ukształtowaniu długofalowych relacji z lokalną społecznością, organizacjami pozarządowymi, interesariuszami czy inwestorami.`}
            </p>
          </div>
          <div>
            <p className="styled-p">
              {lang
                ? `CSR (Corporate Social Responsibility) to długofalowa strategia rozwoju firmy, oparta na zaangażowaniu i społecznej wrażliwości. Odpowiednio zaplanowana i konsekwentnie realizowana polityka CSR, daje przedsiębiorstwu szereg korzyści; od zwiększenia rozpoznawalności marki, kończąc na ukształtowaniu długofalowych relacji z lokalną społecznością, organizacjami pozarządowymi, interesariuszami czy inwestorami.`
                : `CSR (Corporate Social Responsibility) to długofalowa strategia rozwoju firmy, oparta na zaangażowaniu i społecznej wrażliwości. Odpowiednio zaplanowana i konsekwentnie realizowana polityka CSR, daje przedsiębiorstwu szereg korzyści; od zwiększenia rozpoznawalności marki, kończąc na ukształtowaniu długofalowych relacji z lokalną społecznością, organizacjami pozarządowymi, interesariuszami czy inwestorami.`}
            </p>
          </div>
          <div className="about-us-wrapper">
            <div className="about-site-name">
              <div>
                <section className="about-actions">
                  <h2 className="styled-h2">{lang ? "Co zyskujesz?" : "Co zyskujesz?"}</h2>
                </section>
              </div>
            </div>
          </div>
          <div className="certGainWrapper">
            <div className="certGain">
              <img src={img2} alt="" />
              <div>
                <h4>{lang ? `Pozytywny wizerunek` : `Pozytywny wizerunek`}</h4>
                <p className="styled-p">
                  {lang
                    ? ` Firmy społecznie zaangażowane są lepiej odbierane przez potencjalnych klientów i partnerów
                  biznesowych.`
                    : ` Firmy społecznie zaangażowane są lepiej odbierane przez potencjalnych klientów i partnerów
                    biznesowych.`}
                </p>
              </div>
            </div>
            <div className="certGain">
              <img src={img3} alt="" />
              <div>
                <h4>{lang ? `Wzrost konkurencyjności` : `Wzrost konkurencyjności`}</h4>
                <p className="styled-p">
                  {lang
                    ? ` Firmy działające w oparciu o społeczną odpowiedzialność biznesu notują długotrwały i stabilny wzrost.`
                    : ` Firmy działające w oparciu o społeczną odpowiedzialność biznesu notują długotrwały i stabilny wzrost.`}
                </p>
              </div>
            </div>
            <div className="certGain">
              <img src={img4} alt="" />
              <div>
                <h4>{lang ? `Partnera biznesowego` : `Partnera biznesowego`}</h4>
                <p className="styled-p">
                  {lang
                    ? ` Możliwość nawiązania korzystnej współpracy z firmą specjalizującą się w kreowaniu wizerunku marek w sieci.`
                    : ` Możliwość nawiązania korzystnej współpracy z firmą specjalizującą się w kreowaniu wizerunku marek w sieci.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="certAmbasadorsWrapper">
          <div className="about-us-wrapper" style={{ borderRadius: "72px" }}>
            <div className="about-site-name">
              <div>
                <section className="about-actions">
                  <h2 className="styled-h2">{lang ? "Ambasadorzy" : "Ambasadorzy"}</h2>
                </section>
              </div>
            </div>
          </div>

          <div className="certAmbContainer">
            {amb.map((box, index) => (
              <div className="cerAmbBox" key={index}>
                <img src={box.img} alt={box.alt} />
                <p>{box.data}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="certFundationWrapper">
        <div className="certFundationContainer">
          <GoHome lang={lang} />
        </div>
      </section>
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
