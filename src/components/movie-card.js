import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Details from "./details";

const style = {
  mainBox: {
    paddingBottom: "3.5rem",
    transition: "transform 0.15s ease-in-out",
    ":hover": {
      transform: "scale3d(1.10, 1.10, 1)",
    },
  },
  card: {
    width: "90%",
    height: "100%",
    ":hover": {
      boxShadow: "0px 0px 50px",
    },
  },
};

export default function MovieCard(props) {
  const { original_title, poster_path } = props;
  //hooks
  const [isModalOpen, setIsModalOpen] = useState(false);

  //handlers
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Box sx={{ ...style.mainBox }}>
      {isModalOpen && (
        <Details
          isModalOpen={isModalOpen}
          handleToggleModal={handleToggleModal}
          original_title={original_title}
          {...props}
        />
      )}
      <Card
        sx={{
          ...style.card,
        }}
      >
        <CardActionArea sx={{ height: "100%" }} onClick={handleToggleModal}>
          <CardMedia
            component="img"
            height="100%"
            image={poster_path}
            alt={original_title}
          />
        </CardActionArea>
      </Card>
      <Typography
        variant="overline"
        component="div"
        sx={{
          color: "white",
          fontSize: "0.90rem",
          lineHeight: "1rem",
          paddingTop: "0.5rem",
        }}
      >
        {original_title}
      </Typography>
    </Box>
  );
}
