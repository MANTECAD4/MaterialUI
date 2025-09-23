import { Grid, useMediaQuery } from "@mui/material";
export const UseMediaQueryFunctionality = () => {
  // Acepta media queries comunes tambien
  // MUI Ofrece between(inclusive start, exclusive end ), not, up, down, only,
  const isBelowSmall = useMediaQuery((theme) => theme.breakpoints.down("md"), {
    noSsr: true, // No funciona con SSR, asi que se deshabilita
  });
  const items = ["red", "blue", "green"];
  return (
    <>
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        spacing={1}
        direction={isBelowSmall ? "column" : "row"}
      >
        {items.map((item) => (
          <Grid
            key={item}
            height={"5rem"}
            width={"5rem"}
            bgcolor={item}
            borderRadius={2}
          ></Grid>
        ))}
      </Grid>
    </>
  );
};
