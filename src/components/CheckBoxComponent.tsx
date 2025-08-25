import {
  Favorite,
  FavoriteBorder,
  RemoveCircle,
  RemoveCircleOutline,
} from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { useState } from "react";

export const CheckBoxComponent = () => {
  const isDisabled = false;
  return (
    <>
      <FormControl disabled={isDisabled}>
        {/* usado para propagar estado a todos los componentes hijo */}
        <FormGroup
          row // Indicar que alinee los checkbox horizontalmente, por defecto es vertical
          sx={{
            // Eliminamos el espacio en este selector si queremos estilizar individualmente cada botón
            // Para el label trasladamos el bloque a FormControlLabel -> slotProps -> typography -> sx
            "& .MuiFormControlLabel-label": {
              color: "green",
              fontFamily: "cursive",
              "&.Mui-disabled": {
                color: grey[600],
              },
            },
            // Para estilos individuales del checkbox, lo mismo de arriba pero en Checkbox -> sx
            "& .MuiCheckbox-root": {
              // Eliminar esto para casos individuales
              "&:hover": {
                bgcolor: green[100],
              },
              // Sobreescribir todos los estilos globales del svg
              "& > svg": {
                fontSize: 35,
              },
              // Sobreescritura de los estilos para el checkobox cuando esta checado xd
              "&.Mui-checked": {
                color: "green",
                // Checado y deshabilitado
                "&.Mui-disabled": {
                  color: grey[600],
                },
              },
            },
          }}
        >
          <FormControlLabel
            labelPlacement="bottom"
            control={
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            }
            label="Favorites"
          />
          <FormControlLabel
            labelPlacement="bottom"
            control={
              <Checkbox
                icon={<RemoveCircleOutline />}
                checkedIcon={<RemoveCircle />}
              />
            }
            label="Block"
          />
        </FormGroup>
      </FormControl>
    </>
  );
};
