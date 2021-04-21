import React, { useEffect, useState } from "react";
import Post from "./Post";

const Main = () => {
  const [data, setData] = useState([]);
  const [postsAmount, setPostsAmount] = useState(2);

  useEffect(() => {
    const url = `https://grupaaf.pl/wp-json/wp/v2/posts?order=desc&per_page=${postsAmount}`;

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
    <>
      {/* <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "1200px", justifyContent: "center", margin: "auto" }}>
        {data.length === 0
          ? "loading..."
          : data
              .filter((v) => v.id <= postsAmount)
              .map((v, i) => (
                <div
                  key={i}
                  style={{ maxWidth: "250px", border: "1px solid black", padding: "2em", margin: "10px auto" }}
                >
                  <p>id: {v.id}</p>
                  <p>title: {v.title}</p>
                  <div>body: {v.body}</div>
                </div>
              ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button onClick={handleLoad}>załaduj więcej</button>
      </div>
      <div>NEEEEEEEEEEEEEEEEEEEEXT</div> */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div>HEDER</div>
        <div>SEKCJA 1</div>
        <div>SEKCJA 2</div>
        <div>SEKCJA 3</div>
        <div>SEKCJA 4</div>
        <div>SEKCJA 5</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>NEWSY</div>
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

                  {/* redirect as link here */}
                  {/* end of redirect as link */}

                  {/* <Post title={v.title.rendered} body={v.content.rendered} id={v.id} /> */}
                  {/* <div dangerouslySetInnerHTML={{ __html: v.link }}></div> */}
                </div>
              ))}
          </div>
        </div>
        <button
          onClick={() => {
            handlePostsLoad((prevPosts) => prevPosts + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            handlePostsLoad((prevPosts) => prevPosts - 1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            handlePostsLoad(3);
          }}
        >
          3
        </button>

        <div>FOOTER</div>
      </div>
    </>
  );
};

export default Main;
