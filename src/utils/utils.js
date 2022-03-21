import { createTheme } from "@mui/material/styles";
import { IMAGE_URL } from "../api/paths";

//Gets all the movies and formats it in a more usable way for UI usage
export const organizePopularMovies = (data) => {
  const json = data.map((movie) => {
    return {
      original_title:
        movie.original_language !== "en" ? movie.title : movie.original_title,
      poster_path: IMAGE_URL + movie.poster_path,
      vote_average: movie.vote_average,
      overview: movie.overview,
      genre_ids: movie.genre_ids.toString(),
      backdrop_path: IMAGE_URL + movie.backdrop_path,
      movie_id: movie.id.toString(),
    };
  });
  console.log(json);
  return json;
};

// Gets all the liked movies and filters them with all of the popular movies to be displayed

export const getLikedMovies = (likedMoviesID, movies) => {
  const popularMovies = organizePopularMovies(movies);
  const likedMoviesIDKeys = Object.keys(likedMoviesID);

  const likedMovies = popularMovies.filter((movie) => {
    return likedMoviesIDKeys.includes(movie["movie_id"].toString());
  });
  console.log(likedMovies);
  return likedMovies;
};

export const theme = createTheme({
  backgroundColor: "#1e2126",
});
