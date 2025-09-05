import { Adb, Apple } from "@mui/icons-material";
import { Divider, Grid, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";

export const DividerComponent = () => {
  return (
    <>
      {/* Some shit */}
      <Divider
        textAlign="left" // Para posicionar el texto envuelto
        sx={{
          mx: 5, // Espacio de ambos lados
          //
          //Estilos texto
          "& .MuiDivider-wrapper": {
            fontFamily: "fantasy",
            color: "green",
            paddingLeft: 1, // Espacio entre texto y la linea
          },
          // Linea del Lado izquierdo o superior al texto
          "&:before": {
            width: "50%", // tamaño
            borderColor: "red",
            borderWidth: 2,
            borderStyle: "dotted",
          },
          // Lado derecho o inferior
          "&:after": {
            borderColor: "blue",
            borderWidth: 2,
            borderStyle: "dashed",
          },
        }}
      >
        My title
      </Divider>
      <Grid
        container
        direction="row"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          height: "9rem",
          width: "12rem",
          bgcolor: red[200],
          borderRadius: 4.5,
          mt: 2,
        }}
      >
        <IconButton
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 50,
            },
            "&:hover .MuiSvgIcon-root": { fill: red["A400"] },
          }}
        >
          <Apple />
        </IconButton>
        <Divider
          flexItem // Para ajustarse a un contenedor padre con flex
          variant="middle" // No Admite inset en orientacion vertical
          orientation="vertical"
          sx={{
            // Estilos cuando se envuelve texto
            // "& .MuiDivider-wrapper": {
            //   fontFamily: "fantasy",
            //   fontSize: 32,
            //   py: 0, // Separacion del texto con las lineas. Cambiar a px en variante hroizontal
            // },
            // "&:after": { height: "63%" }, // ajustar altura variante vertical, porcion de arriba. usar after para abajo
            //
            //Estilos sin child (linea recta)
            height: "auto",
            my: 3, //vairiante middle - indicar la distancia de
            mx: 1.8,
            // borderColor: "pink", // COlor divider
            borderWidth: 3,
            borderStyle: "dashed",
          }}
        >
          {/* OR */}
        </Divider>
        <IconButton
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 50,
            },
            "&:hover .MuiSvgIcon-root": { fill: "green" },
          }}
        >
          <Adb />
        </IconButton>
      </Grid>
      {/* Some other shit */}
    </>
  );
};
