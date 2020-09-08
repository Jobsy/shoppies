import React, { useState, useEffect } from "react";
import {
  Card,
  Icon,
  Image,
  Label,
  Reveal,
  Grid,
  Segment,
  Item,
  Divider,
} from "semantic-ui-react";

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
      {
        movieID: props.data.imdbID,
        movieTitle: props.data.Title,
        moviePoster: props.data.Poster,
        movieYear: props.data.Year,
        movieGenre: props.data.Genre,
      },
    ]);
  };

  const disableNominatedMovie = movieNominated.find((mNominated) => {
    return mNominated.movieID == props.data.imdbID;
  });

  // <Image src={src} size='tiny' verticalAlign='top' /> <span>Top Aligned</span>
  // <Divider />
  // <Image src={src} size='tiny' verticalAlign='middle' />{' '}
  // <span>Middle Aligned</span>
  // <Divider />
  // <Image src={src} size='tiny' verticalAlign='bottom' />{' '}
  // <span>Bo
  return (
    <>
      {console.log("props from body: ", props)}
      {props.data ? (
        <>
          {movieNominated.length > 4 ? (
            <div className="banner">
              <p>Nomination Limit Reached!!! Thanks</p>
            </div>
          ) : (
            ""
          )}
          <div className="content1">
            <Image src={props.data.Poster} size="tiny" verticalAlign="top" />
            {/* Title: {props.data.Title}, ID: {props.data.imdbID}, */}
            <div className="content2">
              <span>
                {props.data.Title}
                {props.data.Year}
              </span>
              <span>{props.data.Awards}</span>
              <span>{props.data.imdbRating}</span>
              <span>{props.data.Plot}</span>
              {movieNominated.length > 4 ? (
                <button disabled>Nominate</button>
              ) : disableNominatedMovie ? (
                <button disabled>Nominate</button>
              ) : (
                (console.log(
                  "disableNominatedMovie1452: ",
                  disableNominatedMovie
                ),
                (<button onClick={handleSubmit}>Nominate</button>))
              )}
            </div>
            <div>
              <Divider />
            </div>
          </div>
          <>
            <div className="content3">
              {console.log("movieNominated: ", movieNominated)}
              {movieNominated.map((mNominated) => {
                return (
                  <Nomination
                    id={mNominated.movieID}
                    title={mNominated.movieTitle}
                    poster={mNominated.moviePoster}
                    year={mNominated.movieYear}
                    genre={mNominated.movieGenre}
                    delete={(id) =>
                      deleteNomination(id, movieNominated, setMovieNominated)
                    }
                  />
                );
              })}
            </div>
          </>
        </>
      ) : (
        console.log("nothing")
      )}
    </>
  );
};

export default Body;
