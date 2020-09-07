import React, { useState, useEffect } from "react";
import Nomination from "./Nomination";
/* eslint-disable no-unused-expressions */

const deleteNomination = (id, movieNominated, setMovieNominated) => {
  setMovieNominated(
    movieNominated.filter((mNominated2) => {
      console.log("movieNominated: ", mNominated2.movieID, "id: ", id);
      return mNominated2.movieID != id;
    })
  );
};

const Body = (props) => {
  const [movieNominated, setMovieNominated] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovieNominated([
      ...movieNominated,
      { movieID: props.data.imdbID, movieTitle: props.data.Title },
    ]);
  };

  const disableNominatedMovie = movieNominated.find((mNominated) => {
    return mNominated.movieID == props.data.imdbID;
  });

  return (
    <>
      {console.log("props from body: ", props)}
      {props.data ? (
        <div>
          Title: {props.data.Title}, ID: {props.data.imdbID},
          {movieNominated.length > 4 ? (
            <button disabled>Nominate</button>
          ) : disableNominatedMovie ? (
            <button disabled>Nominate</button>
          ) : (
            (console.log("disableNominatedMovie1452: ", disableNominatedMovie),
            (<button onClick={handleSubmit}>Nominate</button>))
          )}
          {console.log("movieNominated: ", movieNominated)}
          {movieNominated.map((mNominated) => {
            return (
              <Nomination
                id={mNominated.movieID}
                title={mNominated.movieTitle}
                delete={(id) =>
                  deleteNomination(id, movieNominated, setMovieNominated)
                }
              />
            );
          })}
        </div>
      ) : (
        console.log("nothing")
      )}
    </>
  );
};

export default Body;
