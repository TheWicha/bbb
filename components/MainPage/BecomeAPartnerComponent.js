import React from "react";
import styled from "styled-components";
import { H2, H3, P, StyledLink } from "../../styledComponents/WithStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import img from "../../images/Strona Główna/Zostań partnerem naszych projektów.png";
import img2 from "../../images/Strona Główna/logo_csr_czarne (1).png";
import Link from "next/link";

const BecomeAPartnerComponent = ({ lang }) => {
  return (
    <div className="partner-section-wrapper">
      <div>
        <h2 className="styled-h2">
          {lang ? "Zostań partnerem naszych projektów" : "Become a partner of our projects"}
        </h2>
      </div>
      <div className="partner-wrapper-box">
        <div className="upper-left-box">
          <h3 className="styled-h3">{lang ? "INDYWIDUALNIE PODEJŚCIE" : "INDIVIDUAL APPROACH"}</h3>
          <p className="styled-p">
            {lang
              ? "Każda współpraca jest dla nas ważna i wyjątkowa, dlatego przygotowujemy dedykowaną ofertę, dostosowaną do każdego projektu oraz indywidualnie omawiamy formę partnerstwa z każdym z naszych sponsorów."
              : "Each cooperation is important and unique to us, which is why we prepare a dedicated offer tailored to each project and individually discuss the form of partnership with each of our sponsors."}
          </p>
          <Link href="/kontakt">
            <a className="styled-link">
              {lang ? "Skontaktuj się" : "Contact us"}
              <FontAwesomeIcon style={{ verticalAlign: "-0.2em", marginLeft: "12px" }} icon={("fas", faAngleRight)} />
            </a>
          </Link>
        </div>
        <div style={{ width: "397px", display: "flex", justifyContent: "center" }}>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="partner-wrapper-box-reverse">
        <div>
          <img src={img2} alt={lang ? "Ambasadorzy Certyfikatu CSR" : "SCR Certificate Ambassadors"} />
        </div>
        <div className="upper-left-box">
          <h3 className="styled-h3">{lang ? "OTRZYMAJ CERTYFIKAT CSR" : "GET AN SCR CERTIFICATE"}</h3>
          <p className="styled-p">
            {lang
              ? `Współpracując z nami, otrzymasz certyfikat autorskiego programu Biznes Bez Barier. Jego głównym celem jest
            skuteczna aktywizacja zawodowa osób z niepełnosprawnością i promocja otwartego rynku pracy dla wszystkich –
            bez względu na wiek, stan zdrowia czy rodzaj niepełnosprawności. Certyfikat jest potwierdzeniem, że Twoja
            firma wspiera działania, mające na celu wyrównywanie zawodowych szans. Program w naszym imieniu prowadzi
            merytoryczny partner Fundacji Grupa AF.`
              : `By cooperating with us, you will receive a certificate of our original Business Without Barriers program. Its main goal is the effective professional activation of people with disabilities and the promotion of an open labor market for all - regardless of age, health condition or type of disability. The certificate confirms that your company supports activities aimed at providing equal professional opportunities. The program is run on our behalf by a substantive partner of the Foundation, Grupa AF.`}
          </p>
          <Link href="/kontakt">
            <a className="styled-link">
              {lang ? "Skontaktuj się" : "Learn more about the program"}{" "}
              <FontAwesomeIcon style={{ verticalAlign: "-0.2em", marginLeft: "12px" }} icon={("fas", faAngleRight)} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};



export default BecomeAPartnerComponent;
