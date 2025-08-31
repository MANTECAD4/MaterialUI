import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  FormHelperText,
  Checkbox,
} from "@mui/material";
import { green } from "@mui/material/colors";
export const FormComponents = () => {
  return (
    <>
      <FormControl
        component={"fieldset"}
        // error
        // disabled
        sx={{
          // Esilos de formLabel
          "& .MuiFormLabel-root": {
            fontSize: 30,
            fontFamily: "Verdana",
            color: "orange",
          },

          "& .MuiFormControlLabel-label": {
            color: "orange",
            "&.Mui-disabled": {
              color: "purple",
            },
            "&.Mui-error": {
              color: "red",
            },
          },
          "& .MuiFormHelperText-root": {
            color: "orange",
          },
          "& .Mui-focused": {
            color: "green",
          },
          "& .Mui-disabled": {
            color: "purple",
          },
          "& .Mui-error": {
            color: "red",
          },
          "& .Mui-error .MuiFormLabel-asterisk": {
            color: green[900],
          },
        }}
      >
        <FormLabel
        // disabled
        // error
        // required
        // sx={{
        //   fontSize: 30,
        //   fontFamily: "Verdana",
        //   color: green[100],
        //   "&.Mui-focused": {
        //     color: green[300],
        //   },
        //   "&.Mui-disabled": {
        //     color: green[500],
        //   },
        //   "&.Mui-error": {
        //     color: green[700],
        //   },
        //   "&.Mui-error .MuiFormLabel-asterisk": {
        //     color: green[900],
        //   },
        // }}
        >
          My Form
        </FormLabel>{" "}
        {/* Agrupador logico para sincronizar el estado */}
        <FormGroup
          row
          // sx={{
          //   "& .MuiFormControlLabel-label": {
          //     color: "purple",
          //     "&.Mui-disabled": {
          //       color: "yellow",
          //     },
          //   },
          // }}
        >
          {" "}
          {/* Agrupador estetico */}
          <FormControlLabel label="My Value" control={<Checkbox />} />
          <FormControlLabel label="My Value" control={<Checkbox />} />
          <FormControlLabel label="My Value" control={<Checkbox />} />
        </FormGroup>
        <FormHelperText
        // sx={{
        //   // color: "red",
        //   "&.Mui-disabled": {
        //     color: "yellow",
        //   },
        //   "&.Mui-error": {
        //     color: "brown",
        //   },
        // }}
        >
          Select a value
        </FormHelperText>
      </FormControl>
    </>
  );
};
