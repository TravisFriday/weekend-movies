import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LikeButton from "./like-button";

export default function ModalCard({
  original_title,
  vote_average,
  overview,
  backdrop_path,
  movie_id,
}) {
  return (
    <Card sx={{backgroundColor: "#1e2126"}}>
      <CardMedia component="img" image={backdrop_path} alt={original_title} />
      <CardContent sx={{color: "white"}}>
        <Typography
          variant="overline"
          sx={{ fontSize: "1.2rem", fontWeight: "500" }}
        >
          {original_title}
        </Typography>

        <br />
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "600",
            color: vote_average > 5 ? "#46d369" : "red",
          }}
        >
          {"Score: " + vote_average + "/10"}
          <LikeButton movie_id={movie_id} />
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.2rem", fontWeight: "300" }}
        >
          {overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
