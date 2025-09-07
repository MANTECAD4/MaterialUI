import { Paper } from "@mui/material";

export const PaperComponent = () => {
  return (
    <>
      <Paper
        // elevation={5} // Para la sombra 0-24
        variant="outlined" // outlineed - plana con contorno, elevation - con sombra
        sx={{
          height: `calc(100vh - 3.3rem)`,
          borderColor: "brown",
          borderWidth: 3,
          padding: 2,
          borderStyle: "dashed",
          bgcolor: "lightyellow",
          color: "darkslategray",
          fontFamily: "cursive",
          overflowY: "auto",
        }}
        square
      >
        This is a Paper. Its a surface to hold other elements, like a fancy div
        with extra features.
      </Paper>
    </>
  );
};
