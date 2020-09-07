import React, { useState, useEffect } from "react";
// import { AppBody } from "../components/AppBody";

import axios from "axios";
import Body from "./Body";

export const Fetch = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    (function fetchData() {
      if (!props.title.title) {
        return;
      } else {
        axios
          .get(`http://www.omdbapi.com/?t=${props.title.title}&apikey=6c37230a`)
          .then((res) => {
            setData(res);
          });
      }
    })();
  }, [props.title.title]);

  return (
    <>
      {!data.data ? (
        <div>
          {/* <p className="pLoader">Add a valid location(s) and hit submit</p> */}
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <>
          {console.log("data from fetch: ", data.data)}
          {<Body data={data.data} />}
        </>
      )}
    </>
  );
};
