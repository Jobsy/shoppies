import React, { useState, useEffect } from "react";
import axios from "axios";

import Body from "./Body";

/* eslint-disable no-unused-expressions */

export const Fetch = (props) => {
  const [data, setData] = useState([]);
  let spinner = document.getElementById("loaderDiv");

  useEffect(() => {
    (function fetchData() {
      if (!props.title.title) {
        return;
      } else {
        try {
          spinner.setAttribute("class", "show");
          axios
            .get(
              `https://www.omdbapi.com/?s=${props.title.title}&apikey=6c37230a`
            )
            .then((res) => {
              setData(res);
              spinner.removeAttribute("class", "show");
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
        ""
      ) : (
        <>{<Body data={data.data} searchKeyWork={props.title.title} />}</>
      )}
    </>
  );
};
