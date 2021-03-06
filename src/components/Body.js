import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";

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
      return mNominated2.movieID !== id;
    })
  );
};

const Body = (props) => {
  const [movieNominated, setMovieNominated] = useState([]);

  return (
    <>
      <div className="content3">
        {movieNominated.length > 4 ? (
          <div className="banner">
            <p>Nomination Limit Reached!!! Thanks</p>
          </div>
        ) : (
          ""
        )}

        {props.data ? (
          <div>
            <h3>Results for {props.searchKeyWork}</h3>
            <div className="content1">
              {props.data.Search ? (
                props.data.Search.map((movie) => {
                  const disableNominatedMovie = movieNominated.find(
                    (mNominated) => {
                      return mNominated.movieID === movie.imdbID;
                    }
                  );
                  return (
                    <Card key={movie.imdbID}>
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
                          <Button disabled>Nominate</Button>
                        ) : disableNominatedMovie ? (
                          <Button disabled>Nominate</Button>
                        ) : (
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
                        )}
                      </Card.Content>
                    </Card>
                  );
                })
              ) : (
                <p className="errorP">{props.data.Error}</p>
              )}
            </div>
          </div>
        ) : (
          console.log("nothing")
        )}
      </div>
      {/* <> */}
      <div className="content2">
        <h1>Your Nominations</h1>
        <div className="nomination">
          {movieNominated.map((mNominated) => {
            return (
              <Nomination
                key={mNominated.movieID}
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
      </div>
      {/* </> */}
    </>
  );
};

export default Body;
