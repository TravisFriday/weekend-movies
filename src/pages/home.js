import React from "react";
import useGetPopularMovies from "../api/useGetPopularMovies";
import useGetGenres from "../api/useGetGenres";
import MovieList from "../components/movie-list";
// import { QueryCache } from "react-query";

const Home = () => {
  //To Move
  //const query = useGetPopularMovies({ enabled: true });

  const query = useGetGenres({ enabled: true });
  const { status, data, error } = query;

  return (
    <div>
      Hellooooo
      {status === "success" ? (
        <div>
          <pre>{}</pre>
        </div>
      ) : (
        "fetching..."
      )}
    </div>
  );
};

export default Home;
