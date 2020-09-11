import React, { useState, useEffect } from "react";
import axios from "axios";

import Body from "./Body";

export const Fetch = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (function fetchData() {
      if (!props.title.title) {
        return;
      } else {
        try {
          axios
            .get(
              `https://www.omdbapi.com/?s=${props.title.title}&apikey=6c37230a`
            )
            .then((res) => {
              setData(res);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log("error from fetch: ", error);
        }
      }
    })();
  }, [props.title.title]);

  return (
    <>
      {!data.data ? (
        <div>
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <>{<Body data={data.data} searchKeyWork={props.title.title} />}</>
      )}
    </>
  );
};