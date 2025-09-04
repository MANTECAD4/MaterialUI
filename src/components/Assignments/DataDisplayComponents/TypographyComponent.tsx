import { Typography } from "@mui/material";

export const TypographyComponent = () => {
  return (
    <>
      <Typography
        // noWrap // Para que el texto no exceda el tamaño del contenedor padre - (Exclusivo 1 linea)
        gutterBottom
        align="center"
        variant="h3"
      >
        My Text
      </Typography>
      <Typography variant="bigText">Big Text</Typography>
    </>
  );
};
