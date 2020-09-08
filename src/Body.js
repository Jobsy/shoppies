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

const handleSubmit = (e, movieNominated, setMovieNominated, movie) => {
  e.preventDefault();
  setMovieNominated([
    ...movieNominated,
    {
      movieID: movie.imdbID,
      movieTitle: movie.Title,
      moviePoster: movie.Poster,
      movieYear: movie.Year,
      movieGenre: movie.Genre,
    },
  ]);
};

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMovieNominated([
  //     ...movieNominated,
  //     {
  //       // movieID: props.data.imdbID,
  //       // movieTitle: props.data.Title,
  //       // moviePoster: props.data.Poster,
  //       // movieYear: props.data.Year,
  //       // movieGenre: props.data.Genre,
  //       movieID: movie.imdbID,
  //       movieTitle: movie.Title,
  //       moviePoster: movie.Poster,
  //       movieYear: movie.Year,
  //       movieGenre: movie.Genre,
  //     },
  //   ]);
  // };

  const disableNominatedMovie = movieNominated.find((mNominated) => {
    return mNominated.movieID == props.data.imdbID;
  });
  // {
  //   props.data.Search.map((movie) => {
  //     console.log("movie111111: ", movie);
  //   });
  // }

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
      {props.data
        ? props.data.Search.map((movie) => {
            console.log("movie111111: ", movie);
            console.log("movie111111: ", movie.Poster);
            return (
              <>
                {movieNominated.length > 4 ? (
                  <div className="banner">
                    <p>Nomination Limit Reached!!! Thanks</p>
                  </div>
                ) : (
                  ""
                )}
                <div className="content1">
                  <Image src={movie.Poster} size="tiny" verticalAlign="top" />
                  {/* Title: {movie.Title}, ID: {movie.imdbID}, */}
                  <div className="content2">
                    <span>
                      {movie.Title}
                      {movie.Year}
                    </span>
                    <span>{movie.Awards}</span>
                    <span>{movie.imdbRating}</span>
                    <span>{movie.Plot}</span>
                    {/* {props.data.Search.map((movie) => {
                console.log("movie111111: ", movie);
              })} */}
                    {movieNominated.length > 4 ? (
                      <button disabled>Nominate</button>
                    ) : disableNominatedMovie ? (
                      <button disabled>Nominate</button>
                    ) : (
                      (console.log(
                        "disableNominatedMovie1452: ",
                        disableNominatedMovie
                      ),
                      (
                        // (<button onClick={handleSubmit}>Nominate</button>))
                        <button
                          onClick={(e) =>
                            handleSubmit(
                              e,
                              movieNominated,
                              setMovieNominated,
                              movie
                            )
                          }
                        >
                          Nominate
                        </button>
                      ))
                    )}
                  </div>
                  <div>
                    <Divider />
                  </div>
                </div>
              </>
            );
          })
        : console.log("nothing")}
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
  );
};

export default Body;
