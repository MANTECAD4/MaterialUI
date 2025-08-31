import { Box, Grid, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { labels } from "../../fixtures/data";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const RatingComponent = () => {
  const [value, setValue] = useState<number>(0);
  const [ratingHover, setRatingHover] = useState<number>(-1);
  return (
    <Grid container direction={"column"}>
      <Typography component="legend">Controlled - {value} stars</Typography>
      <Rating
        // readOnly //Para inhabilitar modificaciones, sin usar disabled
        precision={0.5}
        max={6}
        name="simple-controlled"
        value={value}
        icon={<Favorite />}
        // highlightSelectedOnly // Util para ratings con caritas xd
        emptyIcon={<FavoriteBorder />}
        onChangeActive={(event, hoveredValue) => setRatingHover(hoveredValue)} // Retorna -1 si no hay hover
        onChange={(event, newValue) => {
          setValue(newValue ?? 0);
        }}
        disabled
        sx={{
          // "&.MuiRating-root": {
          "& .MuiSvgIcon-root": {
            color: "red",
            fontSize: 30,
            mx: 1,
          },
          "&.Mui-disabled": { opacity: 1 / 4, pointerEvents: "none" },
          // },
        }}
      />
      <Box sx={{ ml: 2 }}>
        {labels[ratingHover !== -1 ? ratingHover : value]}
      </Box>
    </Grid>
  );
};

//   // Para accesibilidad
//   const getLabelText = (rating: number) => {
//     return rating === 0 ? "No stars given" : `${labels[rating]}`;
//   };
// getLabelText={getLabelText}
