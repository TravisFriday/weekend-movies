import * as React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "./movie-card";

export default function MovieList({ movies }, props) {
  return (
    <>
      <Grid container spacing={3} alignItems="stretch">
        {movies.map((movie) => {
          return (
            <Grid
              key={movie.movie_id}
              item
              xs={4}
              md={3}
              lg={2}
              style={{ display: "flex" }}
            >
              <MovieCard {...movie} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export function WrappedMovieList({ movies, isLikedPage }) {
  return (
    <>
      <MovieList />
    </>
  );
}
