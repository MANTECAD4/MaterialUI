import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { deepPurple, purple, red } from "@mui/material/colors";
import { useState } from "react";
import { topSoccerClubs, type Club } from "../fixtures/data";
import CleaningServices from "@mui/icons-material/CleaningServices";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { HighlightOff } from "@mui/icons-material";

export const AutocompleteComponent = () => {
  const [clubs, setClubs] = useState<Club[]>([]);

  return (
    <>
      <Autocomplete
        options={topSoccerClubs}
        onChange={(event, newValue) => setClubs(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Top Winner Clubs" />
        )}
        value={clubs}
        // Acceso a los subcomponentes y sus props (incluida sx)
        // COMPONENTES DISPONIBLES: CHIP, PAPER, LISTBOX, CLEAR Y POP-UP INDICATORS, Y POPPER
        slotProps={{
          // Opciones seleccionadas
          chip: {
            deleteIcon: <HighlightOff fontSize="small" />,
            sx: {
              "& .MuiChip-deleteIcon": { color: red[500] },
              // Ejemplo de sobreescritura de pseudoclases
              "&:hover .MuiChip-deleteIcon": { color: red[700] },
              bgcolor: purple[200],
            },
          },
          // Opciones del menú
          paper: {
            sx: {
              // Leyenda cuando no hay opciones coincidientes
              "& .MuiAutocomplete-noOptions": {
                bgcolor: purple[300],
                color: (theme) => theme.palette.getContrastText(purple[300]),
              },
              // Encabezado agrupador
              "& .MuiAutocomplete-groupLabel": {
                bgcolor: purple[700],
                color: (theme) => theme.palette.getContrastText(purple[700]),
              },
              // Opciones
              "& .MuiAutocomplete-option ": {
                bgcolor: purple[300],
                color: (theme) => theme.palette.getContrastText(purple[300]),
                borderBottom: "1px solid #d9cfcfff",
                // Opcioón enfocada
                "&.Mui-focused": {
                  bgcolor: purple[100],
                  fontWeight: "bold",
                  color: (theme) => theme.palette.getContrastText(purple[100]),
                },
              },
            },
          },
        }}
        // Estilos del input de texto
        sx={{
          // Tag del input
          "& > div > label": {
            color: "purple",
            fontFamily: "cursive",
            // Para cuando está enfocada
            "&.Mui-focused": {
              color: "purple",
            },
          },
          // Para ganar prioridad en los estilos
          "& .MuiOutlinedInput-root": {
            width: 300,
            bgcolor: deepPurple[50],

            // Contenedor del input
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: red[200],
              borderWidth: 2,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              // borderWidth: "thick",
              borderColor: red[700],
            },
            // Cuando el elemento está seleccionado
            "&:focus-within .MuiOutlinedInput-notchedOutline": {
              // borderWidth: "thick",
              borderColor: red[700],
            },
            "& .MuiAutocomplete-clearIndicator": {
              color: "red",
            },
            "& .MuiAutocomplete-popupIndicator": {
              color: "red",
            },
          },
        }}
        getOptionDisabled={(option) => option.country.toLowerCase() === "spain"}
        getOptionLabel={(option) =>
          `${option.label} - 🏆 ${option.championsNum}`
        }
        blurOnSelect // Deseleccionar el elemento al seleccionar una opción
        autoComplete // Autocompletar el text faltante para completar una opcion en base a la sugerencia seleccionada
        autoHighlight // UTIL - autoseleccionar la primera opción ofrecida
        clearIcon={<CleaningServices fontSize="small" />}
        disableCloseOnSelect // cierra el menu al seleccionar una opción, sin deseleccionar el componente
        disablePortal // sabe, pero dejarlo
        filterSelectedOptions //
        groupBy={(option) => option.country} // Criterio de agrupación. Los datos deben estar ordenados
        isOptionEqualToValue={(option, value) => option.label === value.label} // Indicación manual del campo a comparar con el input (Para objetos)
        limitTags={2}
        multiple
        noOptionsText={"No options"}
        // forcePopupIcon={false} // SI se desea esconder el botón de despligeue de menu
        openOnFocus // Abre el menú al seleccionar el elemento
        popupIcon={<MenuOpenIcon fontSize="small" />}
        disableListWrap={true} // Mantiene el cursor de seleccion al fondo de la lista (no vuelve al inicio). no sirve con opciones desahabilitadas
      />
      {clubs.map((club) => (
        <p key={club.label}>{club.label}</p>
      ))}
    </>
  );
};
// open
