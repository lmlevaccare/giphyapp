import React from "react";
export default function ResultList({ urlData}) {
  // const urlfifteen = urlData.slice(0, 15);
  console.log("resultlist", urlData);
  return (
    <div>
          {/* {urlfive.map((data) => (
        <a href={data} key={data}>
          5Links
        </a>
      ))} */}
          {urlData.map((data) => (
        <ul><a href={data} key={data}>
              Giffy Links
        </a></ul>
      ))}
      {/* {urlfifteen.map((data) => (
        <a href={data} key={data}>
          15Links
        </a>
      ))} */}
    </div>
  );
}