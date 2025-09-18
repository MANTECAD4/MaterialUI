import {
  ImageList,
  imageListItemBarClasses,
  imageListClasses,
  imageListItemClasses,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { ComponentsLayout } from "../ComponentsLayout";
import { Download, Favorite, Star } from "@mui/icons-material";

export const ImageListFunctionality = () => {
  return (
    <>
      <ComponentsLayout title="Image List">
        <ImageList
          cols={3}
          // rowHeight={150}
          variant="woven"
          gap={5} // Espacio entre elementos (PX)
          //   rowHeight={200} // Altura de cada hilera
        >
          {itemData.map((item, index) => (
            <ImageListItem
              key={index}
              // cols={1} // Cuantas columnas tomar
              // rows={1}
            >
              {item}
              <ImageListItemBar
                // position="below" // No disponible con variante quilted
                position="top"
                title={`Image ${index}`}
                subtitle="Subtitle goes here..."
                // Botón
                actionIcon={
                  <IconButton>
                    <Favorite sx={{ fill: "goldenrod" }} />
                  </IconButton>
                }
                // Posicionamiento del boton
                actionPosition="right"
                sx={{
                  // Estilos itemBar
                  bgcolor: "rgba(1, 1, 1, 0.3)",
                  height: 50,
                  textAlign: "center",
                  p: 1,
                  "&:hover": {
                    // bgcolor: "rgba(7, 28, 110, 0.4)",
                  },
                  // Titulo y subtitulo
                  [`& .${imageListItemBarClasses.title},.${imageListItemBarClasses.subtitle}`]:
                    {
                      fontFamily: "cursive",
                    },
                  [`&:hover .${imageListItemBarClasses.title},.${imageListItemBarClasses.subtitle}`]:
                    {
                      fontWeight: "bold",
                    },
                  // Boton
                  [`& .${imageListItemBarClasses.actionIcon}`]: {
                    alignSelf: "flex-end",
                    // position: "absolute",
                    // top: 0,
                    // right: 0,
                    "& > button:hover": {
                      bgcolor: "rgba(120, 111, 63, 0.5)",
                    },
                  },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </ComponentsLayout>
    </>
  );
};
const itemData = [...new Array(15)].map((_, index) => (
  <img src={`https://picsum.photos/id/${index + 10}/200`} />
));
