import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Box, IconButton, Slider, Stack } from "@mui/material";
import { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { grey, purple } from "@mui/material/colors";

export const SliderComponent = () => {
  //   const [value, setValue] = useState<number>(30); // Para comportamiento tradicional
  const [value, setValue] = useState<number>(20); // Para 2 valores (un rango) - soporta más cursores
  const marks = [
    { label: "MIN", value: 0 },
    { label: "MAX", value: 100 },
    { label: "Low", value: 20 },
    { label: "Medium", value: 50 },
    { label: "High", value: 80 },
  ];
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        sx={{ width: 400, mt: 5, alignItems: "center", mb: 1 }}
      >
        <VolumeDown />
        <Slider
          // min={10}
          // max={70}
          // step={10} // Paso de 0 - 100
          //
          // SLider Vertical
          //   orientation="vertical"
          // En este caso, debemos contar con una altura considerable en el elemento padre (Box, grid, etc)
          // Adicionalmente, incluir el siguiente selector de estilo para asegurar compatibilidad con los navegadores
          //   sx={{
          //     '& input[type-"range"]': {
          //       WebkitAppearance: "slider-vertical",
          //     },
          //   }}
          //   track={"inverted"} // COn 2 cursores, para excluir el valor de enmedio
          //   track={false} // Eliminar subrayado, la Linea no se resalta, solo muestra los cursores
          //   scale={(val) => val * 2} // Para alterar mediante operaciones matematicas el valor desplegado
          //   disableSwap // Para impedir que el cursor de la izquierda pase a la derecha de los otros
          valueLabelDisplay="on" // Mostrar label de valor seleccionado
          valueLabelFormat={(val) => `VOL - ${val}`}
          step={null} // Solo se permiten los valores de las marcas y ambos limites del slider
          marks={marks}
          aria-label="Volume" // Accesibilidad
          getAriaLabel={(val) => `${val} Volume`}
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          //   disabled
          sx={{
            // Estilos parte seleccionada del slider
            color: purple[500],
            // Estiloz porción no seleccionada
            "& .MuiSlider-rail": {
              color: purple[200],
              opacity: 0.7,
              height: 5,
            },
            "&.Mui-disabled .MuiSlider-rail": {
              color: grey[300],
              //   opacity: 0.7,
              height: 5,
            },
            // Estilos marcas
            "& .MuiSlider-mark": { borderRadius: 0, height: 10 },
            // MAcras porcion seleccionada
            "& .MuiSlider-markActive": {
              bgcolor: "yellow",
            },
            "&.Mui-disabled .MuiSlider-markActive": {
              bgcolor: "grey",
            },
            // MAcras porcion no seleccionada
            "& :not(.MuiSlider-markActive).MuiSlider-mark": {
              bgcolor: "black",
            },
            "&.Mui-disabled :not(.MuiSlider-markActive).MuiSlider-mark": {
              bgcolor: "grey",
            },
            // Estilos todos los selectoes (los circulos)
            "& .MuiSlider-thumb": {
              bgcolor: purple[700],
              // Necesarios ambos para alterar tamaño
              height: 25,
              width: 25,
            },
            "&.Mui-disabled .MuiSlider-thumb": {
              bgcolor: "grey",
              // Necesarios ambos para alterar tamaño
              height: 30,
              width: 30,
            },
            // // Estilos uno en especifico. Indice correspondiente a su posicion de izquierda a derecha
            // "& .MuiSlider-thumb[data-index='0']": {
            //   bgcolor: "green",
            //   // Necesarios ambos para alterar tamaño
            //   height: 30,
            //   width: 30,
            // },
            // "&.Mui-disabled .MuiSlider-thumb[data-index='0']": {
            //   bgcolor: "grey",
            //   // Necesarios ambos para alterar tamaño
            //   height: 30,
            //   width: 30,
            // },
            // Estilos marcas en la recta en el area sombreada
            "& .MuiSlider-markLabelActive": {
              color: "purple",
              fontFamily: "cursive",
            },
            // Estilos marcas en la recta en el area NO sombreada
            "& :not(.MuiSlider-markLabelActive).MuiSlider-markLabel": {
              color: "pink",
              fontFamily: "cursive",
            },
            "&.Mui-disabled .MuiSlider-markLabel": {
              color: "grey",
              //   fontFamily: "cursive",
            },
            // Estilos en el label de valor seleccionado
            "& .MuiSlider-valueLabel": {
              bgcolor: "purple",
              fontFamily: "fantasy",
              fontSize: 15,
            },
          }}
        />

        <VolumeUp />
      </Stack>
    </>
  );
};
