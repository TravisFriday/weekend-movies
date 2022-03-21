import React from "react";
import MovieList from "../components/movie-list";
import { useQueryClient } from "react-query";
import { organizePopularMovies } from "../utils/utils";
import PageContainer from "../components/page-container";
import { LinearProgress } from "@mui/material";

const Home = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("POPULAR_MOVIES");

  return (
    <PageContainer>
      {data ? (
        <div>
          <MovieList movies={organizePopularMovies(data.data.results)} />
        </div>
      ) : (
        <LinearProgress />
      )}
    </PageContainer>
  );
};

export default Home;
