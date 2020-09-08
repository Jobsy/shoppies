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
  Button,
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

  // const disableNominatedMovie = movieNominated.find((mNominated) => {
  //   return mNominated.movieID == props.data.imdbID;
  // });
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
      <div className="content3">
        {props.data ? (
          <div>
            <h3>Results for {props.searchKeyWork}</h3>
            <div className="content1">
              {props.data.Search.map((movie) => {
                console.log("movie111111: ", movie);
                console.log("movie111111: ", movie.Poster);
                const disableNominatedMovie = movieNominated.find(
                  (mNominated) => {
                    return mNominated.movieID == movie.imdbID;
                  }
                );
                return (
                  <>
                    {movieNominated.length > 4 ? (
                      <div className="banner">
                        <p>Nomination Limit Reached!!! Thanks</p>
                      </div>
                    ) : (
                      ""
                    )}

                    <Card>
                      <Image src={movie.Poster} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header> {movie.Title}</Card.Header>
                        <Card.Meta>
                          <span className="date">Release in {movie.Year}</span>
                        </Card.Meta>
                        <Card.Description>{movie.Type}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        {movieNominated.length > 4 ? (
                          // <button disabled>Nominate</button>
                          <Button disabled>Nominate</Button>
                        ) : disableNominatedMovie ? (
                          // <button disabled>Nominate</button>
                          <Button disabled>Nominate</Button>
                        ) : (
                          (console.log(
                            "disableNominatedMovie1452: ",
                            disableNominatedMovie
                          ),
                          (
                            <Button
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
                            </Button>
                          ))
                        )}
                        {/* <a>
                      <Icon name="user" />
                      22 Friends
                    </a> */}
                      </Card.Content>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          console.log("nothing")
        )}
      </div>
      <>
        <div className="content2">
          {console.log("movieNominated: ", movieNominated)}
          <h1>Your Nominations</h1>
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
