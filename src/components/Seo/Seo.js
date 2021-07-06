import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, pathSlug, keywords, pageLang, metaImage }) => {
  const url = `http://bizbezbar.realizacje.grupaaf.pl/${pathSlug}`;
  
  return (
    <>
      {" "}
      <Helmet
        htmlAttributes={{ lang: pageLang ? "pl" : "eng" }}
        title={title}
        meta={[
          {
            name: "description",
            content: description,
          },
          {
            name: "keywords",
            content: keywords && keywords.join(),
          },
          {
            property: "og:title",
            content: title,
          },
          { property: "og:image", content: metaImage },
          {
            name: "og:description",
            content: description,
          },
        ]}
        links={[{ rel: "canonical", href: url }]}
      />
    </>
  );
};

export default Seo;
