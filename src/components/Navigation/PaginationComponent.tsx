import {
  List,
  ListItem,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { topSoccerClubs } from "../../fixtures/data";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

export const PaginationComponent = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <Typography>Page {page}</Typography>
      {/* <ul>
        {topSoccerClubs
          .slice((page - 1) * 5, (page - 1) * 5 + 5)
          .map((club) => (
            <li>{club.label}</li>
          ))}
      </ul> */}
      <Pagination
        // hideNextButton
        // hidePrevButton
        // siblingCount={2} // Num de paginas a mostrar a los lados de la opcion seleccionada cuando se requiera compactar las opciones
        // boundaryCount={2} // Num de pags a mostrar en cada extremo. default es 1
        // Gestion de estado
        page={page}
        onChange={(e, newPage) => setPage(newPage)}
        count={10}
        variant="outlined"
        shape="rounded"
        showFirstButton // Mostrar el boton de primero
        showLastButton // Mostrar el boton de ultimo
        // CUstomizar iconos botones
        renderItem={(itemProps) => (
          <PaginationItem
            slots={{ previous: ArrowBack, next: ArrowForward }}
            {...itemProps}
          />
        )}
        // disabled
        sx={{
          // Estilos todos los botones
          "& .MuiPaginationItem-root": {
            fontFamily: "fantasy",
            fontSize: 23,
            height: "3rem",
            width: "3rem",
            mx: 0.5,
            "&.Mui-disabled": {
              opacity: 0.5,
              bgcolor: "red",
            },
          },
          // botones para pagina
          "& .MuiPaginationItem-page": {
            bgcolor: grey[300],
            color: (theme) => theme.palette.getContrastText(grey[300]),
            "&:hover": {
              bgcolor: grey[500],
              color: (theme) => theme.palette.getContrastText(grey[500]),
            },
            "&.Mui-selected": {
              bgcolor: grey[700],
              color: (theme) => theme.palette.getContrastText(grey[700]),
              // Selected requiere estilos para estos epxlicitamente
              "&.Mui-disabled": { bgcolor: "crimson", color: "inherit" },
              "&:hover": { bgcolor: grey[500] },
            },
          },
          // iconos
          "& .MuiSvgIcon-root": {
            fontSize: "inherit",
          },
          //  botones siguiente y anterior
          "& .MuiPaginationItem-previousNext": {
            bgcolor: grey["A400"],
          },
          //  botones primero y ultimo
          "& .MuiPaginationItem-firstLast": {
            bgcolor: grey["A400"],
          },
        }}
      />
    </>
  );
};
