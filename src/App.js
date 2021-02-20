
// `https://api.giphy.com/v1/gifs/search?q=${searchTermA}&${searchTermB}&api_key=${apiKey}=25&rating=g`
import "./App.css";
// import "@material-ui/core";
import React, { useState, useEffect } from "react";
import SearchFrom from "./components/SearchForm";
import ResultList from "./components/ResultList";
function App() {
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
  const [data, setData] = useState({});
  const [copyData, setCopyData] = useState([]);
  const [urlDataState, setUrlData] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`
        );
        const data = await response.json();
        console.log("dataObject", data);
        setCopyData([...copyData, data]);
        //  console.log("copy",copyData)
      } catch (e) {
        console.log(e);
      }
    };
    // need to invoke function
    fetchData();
    // dependecy array  need to add this!!!! execute this once do not keep calling the api key on a loop
  }, []);
  useEffect(() => console.log("dataEffect", copyData));
  const onClick = (event) => {
    var newData = [];
    event.preventDefault();
    newData = copyData[0].data;
    const urlData = newData.map((index) => index.url);
    console.log("url", urlData);
    setUrlData(urlData);
    console.log("newData", newData);
    //  console.log("map",giphys)
  };

  const showFive = (event) => {
     event.preventDefault();
    console.log("newfIVE",showFive)
  }

  const clearGiphy = () => {
    setUrlData([])
  }
  return (
    <div className="App">
      <h4>Lets Find Giphys </h4>
      <h6>Double Click to Clear Giphy List </h6>
      <p>
        <button showFive={showFive}>Search 5 Giphys</button>
      </p>
      <p>
        <button onClick={onClick}>Search 15 Giphys</button>
      </p>
      <p>
        <button onClick={onClick} onDoubleClick={clearGiphy}>Search 25 Giphys</button>
      </p>
      <SearchFrom />
      <ResultList urlData={urlDataState} />
    </div>
  );
}
export default App;
