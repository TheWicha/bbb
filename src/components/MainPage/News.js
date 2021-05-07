import React, { useEffect, useState } from "react";

const News = ({ lang }) => {
  const [data, setData] = useState([]);
  const [postsAmount, setPostsAmount] = useState(1);

  useEffect(() => {
    const url = `https://bbb.realizacje.grupaaf.pl/wp-json/wp/v2/posts?order=desc&per_page=6`;

    const getData = async () => {
      const res = await fetch(url, {
        method: "GET",
      });

      const data = await res.json();

      setData(data);
    };
    getData();
  }, [postsAmount]);

  const handlePostsLoad = (amount) => {
    setPostsAmount(amount);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {data &&
            data.map((v, i) => (
              <div
                key={i * 255}
                style={{
                  maxWidth: "255px",
                  minWidth: "255px",
                  border: "1px solid black",
                  margin: "1.5em",
                  padding: "1.4em",
                }}
              >
                <p>{i + 1}</p>
                <div dangerouslySetInnerHTML={{ __html: v.title.rendered }}></div>
                <div dangerouslySetInnerHTML={{ __html: v.excerpt.rendered }}></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default News;
