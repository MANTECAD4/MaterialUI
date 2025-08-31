import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";
import { blue, brown, green, grey, pink, red } from "@mui/material/colors";

export const TextfieldComponent = () => {
  const [value, setValue] = useState("");
  const [visibility, setVisibility] = useState(false);
  // const hasError = value.length < 3;
  return (
    <>
      <TextField
        // color="secondary" // COlor cuando focused
        // variant="filled"
        // type="number" // Acepta los tipos para input en HTML 5, como number, file, email, password, etc
        //
        //Read only -similar a disabled
        // slotProps={{
        // Read only
        //   input: {
        //     readOnly: true,
        //   },
        // }}
        //
        //
        /// Habilitar la expansión del texfield a varias lineas
        // multiline // NOTA: Este campo hace que se ignore el campo type
        // rows={4} // Numero fijo de filas
        // minRows={2}
        // maxRows={4}

        // size="small"
        // margin="normal" // Atajo para agregar algo de margen superior
        //
        // Adorno prefijo
        // Mostrar un error
        // helperText={hasError ? "At least 3 characters are required" : ""}
        // error={hasError}
        id="first-name"
        fullWidth
        // disabled
        slotProps={{
          // Estilos del input
          input: {
            sx: {
              bgcolor: "lavender",
              "&.Mui-disabled": {
                bgcolor: grey[300],
              },
              width: 350,
            }, // Color fondo del input
            // acepta al inicio o al final del input
            // startAdornment: <InputAdornment position="start">$</InputAdornment>,
            startAdornment: (
              <InputAdornment position="start">I'm</InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  // disabled={true} // EL ESTADO NO SE PROPAGA AQUI
                  onClick={() => setVisibility(!visibility)}
                >
                  {visibility ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        sx={{
          // Estilos VARIANT OUTLINED (Default)
          // Estilos texto prefix / sufix
          "& .MuiTypography-root": {
            color: "brown",
            fontFamily: "verdana",
            fontSize: 20,
          },
          "& .Mui-disabled .MuiTypography-root": {
            color: grey["A700"],
            fontFamily: "verdana",
            fontSize: 20,
          },
          // Estilos boton Adornment
          "& .MuiSvgIcon-root": {
            fill: "orange",
            fontSize: 30,
          },
          "& .Mui-disabled .MuiSvgIcon-root": {
            fill: "grey",
          },
          "& :hover.MuiSvgIcon-root": {
            fill: "red",
          },
          // Estilos label
          "& .MuiInputLabel-root": {
            color: green[400],
            fontFamily: "cursive",
          },

          "& .MuiInputLabel-shrink": {
            // Cuando la etiqueta está elevada
            color: brown[700],
            fontFamily: "cursive",
          },
          "& .MuiInputLabel-root.Mui-disabled": {
            color: grey["A700"], //green[200],
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: green[900],
          },
          "& .MuiInputLabel-root.Mui-error": {
            color: red[500],
          },
          "& .MuiFormLabel-asterisk.Mui-error": {
            // Estilos asterisco
            color: red[500],
          },
          // //
          // Estilos Texto dentro del input (placeholder y contenido ingresado)
          "& .MuiOutlinedInput-input": {
            color: blue[900],
            fontFamily: "cursive",
          },
          "& .MuiOutlinedInput-input.Mui-disabled": {
            WebkitTextFillColor: grey["A700"], //blue[300],
          },

          // Estilos borde input
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: pink[200],
            borderWidth: 1,
          },
          "&:hover :not(.Mui-disabled) .MuiOutlinedInput-notchedOutline": {
            borderColor: green[600],
            borderWidth: 3,
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: `${pink[400]} !important`,
            borderWidth: "5px !important",
          },
          "& .Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "pink",
            borderWidth: 7,
          },
          "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: grey["A700"], //"grey",
            borderWidth: 3,
          },
          //
          //Estilos Adicionales VARIANT STANDARD
          // "& :before": { borderColor: "red" },
          // "& :not(.Mui-disabled):hover:before": { borderColor: "green" },
          // "& :after": { borderColor: "purple" },
          // "& .Mui-disabled:before": { borderColor: "yellow" },
          // "& .Mui-error:after": { borderColor: "pink" },
          //Estilos Adicionales VARIANT FILLED
          // SOlo no aplican los del texto del input, cambia el selector
          // "& .MuiFilledInput-root": {
          //   fontFamily: "fantasy",
          // },
        }}
        // disabled
        // focused
        // error
        // variant="filled"
        required
        type={!visibility ? "text" : "password"}
        value={value}
        label={"First name"}
        placeholder="Enter your name"
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};
