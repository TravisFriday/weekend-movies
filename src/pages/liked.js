import React from "react";
import { useQueryClient } from "react-query";
import PageContainer from "../components/page-container";
import { useDispatch, useSelector } from "react-redux";
import { getLikedMovies } from "../utils/utils";
import MovieList from "../components/movie-list";

const Liked = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("POPULAR_MOVIES");
  const { liked } = useSelector((state) => state.liked);
  const formattedLikedMovies = data
    ? getLikedMovies(liked, data.data.results)
    : null;
  return (
    <PageContainer>
      <div>
        {formattedLikedMovies && (
          <MovieList movies={formattedLikedMovies} isLikedPage={true} />
        )}
      </div>
    </PageContainer>
  );
};

export default Liked;
