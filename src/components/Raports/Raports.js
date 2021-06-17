import React from "react";
import styled from "styled-components";
import { GoHome, SiteTitle, TittleH2, Okruszki, StyledLink } from "../../styledComponents/WithStyles";

const Raports = ({ lang }) => {
  return (
    <>
      {" "}
      <Okruszki slug={lang ? "Raporty finansowe" : "Raporty finansowe"} lang={lang} />
      <SiteTitle name={lang ? "Raporty finansowe" : `Raporty finansowe`} />
      <TittleH2 title={lang ? "Sprawozdanie z działalności fundacji" : "Sprawozdanie z działalności fundacji"} />
      <FundationWrapper>
        <Da>
          <Links>
            <div style={{height: '50px'}}>
              <StyledLink>Pobierz raport za rok 2019</StyledLink>
            </div>
            <div style={{height: '50px'}}>
              <StyledLink>Pobierz raport za rok 2020</StyledLink>
            </div>
          </Links>
        </Da>
      </FundationWrapper>
      <FundationContainer>
        <GoHome lang={lang} />
      </FundationContainer>
    </>
  );
};

const FundationContainer = styled.div`
  background-color: white;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 0 auto;
  justify-content: center;
  padding: 2em;
  flex-direction: row;
`;

const FundationWrapper = styled.section`
  background-color: white;
`;

const Da = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 2em;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;

  & a {
  }
`;
export default Raports;
