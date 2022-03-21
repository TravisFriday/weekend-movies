import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLikedMovie, removeLikedMovie } from "../redux/likedSlice";

export default function LikeButton({ movie_id }) {
  //hooks
  const { liked } = useSelector((state) => state.liked);
  const [isLiked, setIsLiked] = useState(movie_id in liked);
  const dispatch = useDispatch();

  //updates the redux store liked state
  useEffect(() => {
    if (isLiked === true) {
      dispatch(addLikedMovie(movie_id));
    } else if (isLiked === false) {
      dispatch(removeLikedMovie(movie_id));
    }
  }, [setIsLiked, isLiked, dispatch, movie_id, liked]);

  const handleLike = () => {
    setIsLiked(true);
  };

  const handleUnlike = () => {
    setIsLiked(false);
  };

  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      onClick={isLiked ? handleUnlike : handleLike}
    >
      {isLiked ? (
        <FavoriteIcon sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </IconButton>
  );
}
