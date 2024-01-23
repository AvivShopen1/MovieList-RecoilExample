import { Grid } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import MovieComponent from "./MovieComponent";
import allMoviesStore from "../store/allMovies.store";
import filteredMoviesStore from "../store/filteredMovies.store";
import filteredPagedMoviesStore from "../store/filteredPagedMovies.store";

type Props = {
  skeleton?: boolean;
};

const MovieList: React.FC<Props> = ({ skeleton }) => {
  if (skeleton) {
    const allMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
      <Grid
        container
        justifyContent="space-evenly"
        rowSpacing={2}
        sx={{ width: "100%" }}
      >
        {allMovies.map((movie) => (
          <Grid item lg={4} md={6} sm={12} key={movie}>
            <MovieComponent skeleton={skeleton} />
          </Grid>
        ))}
      </Grid>
    );
  } else {
    // All Movies
    // const movies = useRecoilValue(allMoviesStore);

    // Filtered Movies
    // const movies = useRecoilValue(filteredMoviesStore);

    // Filtered & Paged Movies
    const movies = useRecoilValue(filteredPagedMoviesStore);

    return (
      <Grid
        container
        justifyContent="space-evenly"
        rowSpacing={2}
        sx={{ width: "100%" }}
      >
        {movies.map((movie) => (
          <Grid item lg={4} md={6} sm={12} key={movie.title}>
            <MovieComponent {...movie} skeleton={skeleton} />
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default MovieList;
