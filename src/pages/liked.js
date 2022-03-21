import React from "react";
import { useQueryClient } from "react-query";
import PageContainer from "../components/page-container";
import { useSelector } from "react-redux";
import { getLikedMovies } from "../utils/utils";
import MovieList from "../components/movie-list";

const Liked = () => {
  //hooks
  const queryClient = useQueryClient();
  const { liked } = useSelector((state) => state.liked);
  
  const data = queryClient.getQueryData("POPULAR_MOVIES");
  const formattedLikedMovies = data
    ? getLikedMovies(liked, data.data.results)
    : null;
  return (
    <PageContainer title={"Liked Movies"}>
        {formattedLikedMovies && (
          <MovieList movies={formattedLikedMovies}  />
        )}
    </PageContainer>
  );
};

export default Liked;
