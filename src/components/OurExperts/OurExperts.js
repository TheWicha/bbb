import React, { useEffect } from "react";
import styled from "styled-components";
import {
  P,
  GoHome,
  SiteTitle,
  TittleH2,
  ContactUs,
  Okruszki,
  H3,
} from "../../styledComponents/WithStyles";
import img from "../../images/Nasi specjaliści/0.png";
import img2 from "../../images/Nasi specjaliści/1.png";
import img3 from "../../images/Nasi specjaliści/2.png";
import img4 from "../../images/Nasi specjaliści/3.png";
import img5 from "../../images/Nasi specjaliści/4.png";

const OurExperts = ({ lang }) => {
  useEffect(() => {
    document.title = lang ? "Nasi Specjaliści - Fundacja Biznes Bez Barier" : "Our experts - Business Without Barries"; 
  }, [lang]);


  
  return (
    <>
      <Okruszki lang={lang} slug={lang ? 'Nasi specjaliści' : 'Our experts'}/>
      <SiteTitle name={lang ? "NASI SPECJALIŚCI" : "OUR EXPERTS"} />
      <TittleH2 title={lang ? "Współpracują z nami" : "Experts who work with us"} />
      <ContactWrapper>
        <ContactContainer>
          <ContactImg>
            <img src={img} alt="" />
          </ContactImg>
          <FirstP>
            <ContactText id="skip">
              <P>
                {lang
                  ? `Jesteśmy osobami z różnego rodzaju niepełnosprawnościami, dlatego, bazując na własnym doświadczeniu,
                wiemy, jak możemy pomóc pracodawcom w przeprowadzeniu rekrutacji osób podobnych nam. Dlatego – co jest
                niezwykle istotne – rekrutujemy tylko i wyłącznie SKUTECZNYCH i NAJLEPSZYCH pracowników, zorientowanych
                na mierzalne cele zawodowe.`
                  : `Our staff is supported by specialists in the field of obtaining external funds for the improvement of accessibility. We also have support from managers with many years of experience in managing long-term IT projects, along with their financing, management, performance measurement and settlement.`}
              </P>
            </ContactText>
          </FirstP>
        </ContactContainer>
      </ContactWrapper>
      <BoxWrapperReverse>
        <UpperLeftBox>
          <H3>EWA LEFIK-BABIASZ</H3>
          <P>
            {lang
              ? `  Absolwentka Uniwersytetu Łódzkiego. Wykładowca akademicki w obszarze zarządzania funduszami europejskimi. Od
            2003 roku zaangażowana we wdrażanie środków UE. Posiada doświadczenie zawodowe w obszarze procesów
            biznesowych. Zajmowała się wdrażaniem funduszy UE na rzecz przedsiębiorstw jako pracownik Instytucji
            Wdrażającej. Posiada doświadczenie w zakresie prowadzenia kilkudziesięciu projektów dofinansowanych ze
            środków zewnętrznych, w tym projektów międzynarodowych o łącznej wartości ponad 200 mln zł. Członek wielu
            grup roboczych i ciał doradczych. Współdziałała z organizacjami pozarządowymi w zakresie wsparcia osób
            niepełnosprawnych w tym w szczególności z osób z niepełnosprawnością umysłową. Aktywnie działa w obszarze
            dostępności w tym tworzenia dokumentów, prowadzenia diagnoz, opracowywania planów działania.`
              : `A graduate of the University of Lodz. Academic lecturer in the field of European funds management. Since 2003 she has been involved in the implementation of EU funds. She has professional experience in the area of business processes. She was involved in the implementation of EU funds for enterprises as an employee of the Implementing Institution. He has experience in managing dozens of projects co-financed from external funds, including international projects with a total value of over 200 millions PLN. Member of many working groups and advisory bodies. She cooperated with non-governmental organizations in the field of supporting people with disabilities, in particular those with intellectual disabilities. She is active in the area of accessibility, including creating documents, conducting diagnoses, and developing action plans.
            `}
          </P>
        </UpperLeftBox>
        <ImgWrapper>
          <img src={img2} alt="" />
        </ImgWrapper>
      </BoxWrapperReverse>
      <ContactWrapper>
        <BoxWrapper>
          <ImgWrapper>
            <img src={img5} alt="" />
          </ImgWrapper>
          <UpperLeftBox>
            <H3>MARCIN FRANKE</H3>
            <P>
              {lang
                ? ` Wykształcenie wyższe, Uniwersytet Łódzki, Wydział Marketingu i Zarządzania, Specjalizacja Rachunkowość
              Zarządcza. Ponad 20-letnie doświadczenie w obszarze outsourcingu procesów biznesowych (BPO), projektów
              informatycznych oraz zarządzania firmami i pozyskiwania zewnętrznych źródeł finansowania. Od roku 2012
              konsultował merytorycznie wiele projektów informatycznych i świadczył usługi doradcze w zakresie
              przygotowywania i projektowania systemów informatycznych dla wielu przedsięwzięć i innowacyjnych pomysłów
              w branży IT. Zajmuje się zawodowo doradztwem w zakresie informatyki, optymalizacji procesów biznesowych ze
              szczególnym uwzględnieniem obszarów finansów, marketingu i sprzedaży. Autor i projektant wielu
              innowacyjnych rozwiązań i pomysłów w branży IT. Akredytowany doradca PARP z wieloletnim doświadczeniem w
              zakresie przygotowywania strategii sprzedaży i rozwoju przedsiębiorstw oraz strategii internacjonalizacji
              przedsiębiorstw. Przygotował i realizował wiele projektów dofinansowanych ze środków unijnych między
              innymi w zakresie ekonomii społecznej oraz wsparcia osób starszych i niepełnosprawnych.`
                : `A graduate of the University of Lodz, Faculty of Marketing and Management, specializing in Management Accounting. He has over 20 years of experience in the area of business process outsourcing (BPO), IT projects, company management and obtaining external financing sources. Since 2012 he has been a substantive consultant on many IT projects and has provided advisory services in the field of preparation and design of IT systems for many projects and innovative ideas in the IT industry. He is professionally involved in IT consulting, business process optimization, with particular emphasis on the areas of finance, marketing and sales. He is an author and designer of many innovative solutions and ideas in the IT industry. He is an accredited advisor to PARP (Polish Agency for Enterprise Development) with many years of experience in the preparation of sales and enterprise development strategies as well as enterprise internationalization strategies. He prepared and implemented many projects co-financed from EU funds, including projects in the field of social economy and support for the elderly people and people with disabilities.
              `}
            </P>
          </UpperLeftBox>
        </BoxWrapper>
      </ContactWrapper>
      <BoxWrapperReverse>
        <UpperLeftBox>
          <H3>SEBASTIAN KAWECKI</H3>
          <P>
            {lang
              ? ` Posiada wieloletnie doświadczenie w zarządzaniu zespołem i profesjonalnej obsłudze klienta. Absolwent
            Politechniki Łódzkiej Wydziału Organizacji i Zarządzanie na kierunku Zarządzanie i Marketing, specjalność
            Zarządzanie Przedsiębiorstwem. Doświadczony manager i dyrektor ds. wsparcia operacyjnego, zarządzania
            relacjami z klientami (CRM) oraz zarządzania projektami europejskimi. Od 2016 roku związany z projektami
            unijnymi. W latach 2016-2017 zajmował się analizowaniem lokalnego rynku Jednostek Samorządu Terytorialnego,
            a także analizą potrzeb strategicznych klientów. W latach 2017-2020 utworzył grupy realizujące projekty, a
            także zarządzał podległym zespołem w ramach biura projektów unijnych. Koordynował proces pozyskiwania
            funduszy unijnych i krajowych, a także wdrażania projektów ze środków publicznych, m.in. w ramach programu
            Dostępność Plus skierowanego dla uczelni wyższych. W ostatnich latach zaangażowany w przeprowadzanie audytów
            architektonicznych oraz informacyjno-komunikacyjnych. Aktywnie uczestniczył w spotkaniach i pracach zespołów
            powiązanych z realizowanymi projektami, w tym projektami skierowanymi do osób z niepełnosprawnościami. Od
            2019 roku swoje kompetencje i zainteresowania przekierowuje na znajomość programu Dostępność Plus oraz zasad
            równości szans i niedyskryminacji oraz dostępności dla osób z niepełnosprwnościami.`
              : `He has many years of experience in team management and professional customer service. He is a graduate of the Lodz University of Technology, Faculty of Organization and Management, majoring in Management and Marketing, specializing in Business Management. Experienced manager and director of operational support, customer relationship management (CRM) and European projects management. Since 2016 he has been involved with EU projects. In 2016-2017 he was involved in analyzing the local market of local government units, as well as analyzing the strategic needs of clients. In 2017-2020 he created groups implementing projects, and also managed a subordinate team within the EU projects office. He coordinated the process of obtaining EU and national funds, as well as the implementation of projects from public funds, including project within the Accessibility Plus program for universities. In recent years, he has been involved in conducting architectural as well as information and communication audits. He actively participated in meetings and works of teams related to implemented projects, including projects aimed at people with disabilities. Since 2019 he has redirected his competences and interests to the Accessibility Plus program and the principles of equal opportunities and non-discrimination as well as accessibility for people with disabilities. 
            `}
          </P>
        </UpperLeftBox>
        <ImgWrapper>
          <img src={img3} alt="" />
        </ImgWrapper>
      </BoxWrapperReverse>
      <ContactWrapper>
        <BoxWrapper>
          <ImgWrapper>
            <img src={img4} alt="" />
          </ImgWrapper>
          <UpperLeftBox>
            <H3>GABRIEL OSIEWAŁA</H3>
            <P>
              {lang
                ? ` Autorytet w obszarze zarządzania finansami przedsiębiorstw, ekspert projektów europejskich. Wieloletni
              dyrektor finansowy. Członek zarządów oraz specjalista z wyższym wykształceniem menedżerskim i bogatym
              doświadczeniem w sektorze bankowym, w jednostkach edukacyjnych, naukowych i konsultingowych. Przeprowadzał
              analizy sprawozdań finansowych, opracowywał biznesplany, wnioski inwestycyjne, kredytowe i dotacyjne.
              Nauczyciel akademicki w obszarze finansów i rozwoju przedsiębiorstw. Posiada 15-letnie doświadczenie w
              obszarze projektów europejskich, Project Manager, ekspert w zakresie pisania i realizacji wniosków
              dotacyjnych dla przedsiębiorców w ramach programów regionalnych i ogólnopolskich, specjalista ds.
              raportowania, monitoringu i ewaluacji. Ponadto, ekspert programu „Dostępność Plus” dla placówek opieki
              zdrowotnej od początku jego wdrożenia w 2019 r. przez Ministerstwa Funduszy i Polityki Regionalnej.`
                : `A recognized authority in the field of corporate finance management, an expert in European projects. He as been working as a financial director for many years. He is a member of the management boards, as an expert with higher management education and extensive experience in the banking sector, in educational, scientific and consulting units. He carried out analyzes of financial statements, developed business plans, as well as investment, loan and subsidy applications. Academic teacher in the field of finance and enterprise development. He has 15- years of experience in the field of European projects as a Project Manager, expert in writing and implementing grant applications for entrepreneurs under regional and national programs, a specialist in reporting, monitoring and evaluation. In addition, an expert of the "Accessibility Plus" program for healthcare institutions from the beginning of its implementation in 2019 by the Ministry of Funds and Regional Policy.
              `}
            </P>
          </UpperLeftBox>
        </BoxWrapper>
      </ContactWrapper>
      <ContactUs lang={lang} />
      <FundationContainer>
        <GoHome lang={lang} />
      </FundationContainer>
    </>
  );
};
const ImgWrapper = styled.div`
  & img {
    min-width: 220px;
    width: 100%;
  }
`;
const ContactWrapper = styled.section`
  background-color: white;
`;
const ContactContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em;
  @media screen and (max-width: 580px) {
    padding: 1em;
  }
`;
const FundationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  padding: 2em;
  flex-direction: row;
`;

const FirstP = styled.div`
  width: 45%;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ContactText = styled.div`
  margin-bottom: 3em;
  min-width: 300px;

  & p {
    margin: 0px;
    margin-top: 8px;
  }
`;

const ContactImg = styled.div`
  /* min-width: 300px; */
  margin: 0 auto;
  & img {
    width: 100%;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 4em;
  padding-top: 4em;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 763px) {
    padding-top: 4em;
  }
`;

const BoxWrapperReverse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 730px) {
    padding-top: 4em;
    flex-direction: column-reverse;
  }
`;

const UpperLeftBox = styled.div`
  width: 59%;
  min-width: 250px;
  padding-bottom: 2em;
`;

export default OurExperts;
