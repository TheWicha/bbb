import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { mainYellow, secondaryBlack, mainBlack } from "../styledComponents/WithStyles";




const GetPosts = (props) => {


  const replacer = (text) => {
    return text
      .replace("&#8216;", "'")
      .replace("&#8220;", '"')
      .replace("&#8221;", '"')
      .replace("&#8217;", "'")
      .replace("&#8211;", "-");
  };

  const trimmer = (t) => {
    if (t.length > 40) {
      let newText = t.slice(0, 40);
      return newText + "...";
    }
    return replacer(t);
  };

  return (
    <div>
  
      <div className="newsSiteNameWrapper">
        <ul className="newsOkruszki">
          <li>
            <Link href="/">
              <a className="newsFirstLink">
                {props.lang ? `Strona Główna` : "Main Page"}
                <FontAwesomeIcon
                  icon={("fas", faAngleRight)}
                  style={{ verticalAlign: "-0.525em", height: "1.4em", color: mainYellow, width: "1.7em" }}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/aktualnosc">
              <a className="newsFirstLink">
                {" "}
                {props.lang ? `Aktualności` : "News"}{" "}
                <FontAwesomeIcon
                  icon={("fas", faAngleRight)}
                  style={{ verticalAlign: "-0.525em", height: "1.4em", color: mainYellow, width: "1.7em" }}
                />
              </a>
            </Link>
          </li>

          {/* <li aria-hidden="true">
            <p className="newsSecondLink">{trimmer(dataToRender[0].title.rendered)}</p>
          </li> */}
        </ul>
      </div>

      {/* <section className="newsFundationWrapper">
        <div className="newsFundationContainer">
          <div style={{ width: "100%" }}>
            <h1>{replacer(dataToRender[0].title.rendered)}</h1>
            <div
              className="newsDynamicNews"
              dangerouslySetInnerHTML={{ __html: dataToRender[0].content.rendered }}
            ></div>
            <h2 className="newsTittleH2">Autor: </h2>
            <div className="newsAuthorWrapper">
              {}
              <div>
                <img
                  className="newsStyledImg"
                  src={dataToRender[0].author !== 7 ? authorImage2 : authorImage}
                  alt={
                    dataToRender[0].author === 7
                      ? lang
                        ? `Prezes Fundacji Biznes Bez Barier - Magdalena Raszdorf`
                        : `President of the Business Without Barriers Foundation - Magdalena Raszdorf,`
                      : lang
                      ? `Fundacja Biznes Bez Barier`
                      : `Business Without Barriers Foundation`
                  }
                />
              </div>
              <div>
                {dataToRender[0].author !== 7 ? (
                  ""
                ) : (
                  <p className="newsAuthorName">{dataToRender[0]._embedded.author[0].name}</p>
                )}

                {dataToRender[0].author !== 7 ? "" : <p>{authorRole}</p>}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default GetPosts;
