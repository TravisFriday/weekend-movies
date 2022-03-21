import React from "react";
import MovieList from "../components/movie-list";
import { useQueryClient } from "react-query";
import { organizePopularMovies } from "../utils/utils";
import PageContainer from "../components/page-container";
import { LinearProgress } from "@mui/material";

const Home = () => {
  //hook
  const queryClient = useQueryClient();
  //get query from the cache
  const data = queryClient.getQueryData("POPULAR_MOVIES");

  return (
    <PageContainer title={"Popular Movies"}>
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
