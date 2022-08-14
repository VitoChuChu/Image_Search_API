import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Images from "./components/Images";
import Footer from "./components/Footer";

const App = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setcurrentSearch] = useState("");
  const auth = "563492ad6f9170000100000150c1b6aa4fdc42ba9fc9a84263fff38d";
  const initUrl = "https://api.pexels.com/v1/curated?per_page=15";
  const searchUrl = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

  // Fetch data
  const fetchImage = async (url) => {
    setPage(2);
    const fetchData = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application",
        Authorization: auth,
      },
    });
    let parsedData = await fetchData.json();
    setData(parsedData.photos);
  };

  // Load more
  const morePicture = async () => {
    let newUrl;
    if (input === "") {
      newUrl = `https://api.pexels.com/v1/curated?page=${page}per_page=15`;
    } else {
      newUrl = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
    }
    setPage(page + 1);
    const fetchData = await fetch(newUrl, {
      method: "GET",
      headers: {
        Accept: "application",
        Authorization: auth,
      },
    });
    let parsedData = await fetchData.json();
    setData(data.concat(parsedData.photos));
  };

  // useEffect area
  useEffect(() => {
    if (currentSearch === "") {
      fetchImage(initUrl);
    } else {
      fetchImage(searchUrl);
    }
  }, [currentSearch]);
  // bg-success bg-gradient bg-opacity-25
  return (
    <div
      className="tc p-3"
      style={{
        backgroundImage:
          "linear-gradient(to left,#ADA996,#F2F2F2,#dbdbdb,#EAEAEA)",
      }}
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right,#ADA996,#F2F2F2,#dbdbdb,#EAEAEA)",
        }}
      >
        <Nav />
        <SearchBar
          search={() => {
            setcurrentSearch(input);
          }}
          setInput={setInput}
        />
      </div>
      <div className="container-fluid text-center bg-secondary bg-gradient bg-opacity-25">
        <div className="row row-cols-auto justify-content-center">
          {data &&
            data.map((d) => {
              return <Images data={d} />;
            })}
        </div>
      </div>
      <div>
        <button onClick={morePicture} className="m-3">
          LOAD MORE
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
