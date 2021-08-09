import MainPage from "../components/MainPage/MainPage";
import Head from "next/Head";

function App({ data, lang, isMobile }) {
  return (
    <>
      <Head>
        <title>
          {lang ? "Strona główna - Fundacja Biznes Bez Barier" : "Main Page - Business Without Barriers Foundation"}
        </title>
        <meta property="og:title" content={"Dostępny biznes to równe szanse"} key="title" />
        <meta
          property="og:image"
          content={"https://biznesbezbarier.org/_next/static/images/heder-a46cc65679536628418be393f28b6f50.png"}
          key="image"
        />
        <meta
          property="og:description"
          content={
            "Aktywizujemy zawodowo osoby z niepełnosprawnością i podejmujemy się inicjatyw, których celem jest zapewnienie im szeroko rozumianej dostępności"
          }
          key="description"
        />
        <meta property="og:url" content={`https://biznesbezbarier.org/`} key="url" />
      </Head>

      <MainPage data={data} lang={lang} isMobile={isMobile} />
    </>
  );
}

export default App;
