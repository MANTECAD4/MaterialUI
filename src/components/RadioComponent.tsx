import { Brightness5, BrightnessHigh } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";

export const RadioComponent = () => {
  const [value, setValue] = useState("female");
  return (
    <>
      <FormControl /* disabled */>
        <FormLabel
          sx={{
            "&.MuiFormLabel-root": {
              fontFamily: "fantasy",
              color: "green",
              "&.Mui-disabled": {
                color: grey[700],
              },
            },
          }}
          id="demo-radio-buttons-group-label"
        >
          Gender - {value}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          value={value}
          onChange={({ target }) => setValue(target.value)}
          name="radio-buttons-group"
          row
          sx={{
            // Estilos para todas las label de radio button
            "& .MuiFormControlLabel-label": {
              fontSize: 25,
              fontFamily: "cursive",
              color: "green",
              // Deshabilitado
              "&.Mui-disabled": {
                color: grey[700],
              },
            },
            // estilos para todos los radios
            "& .MuiRadio-root": {
              // Para tamaño, por ejemplo
              "& .MuiSvgIcon-root": {
                fontSize: 30,
              },
              // Colores
              "&.Mui-checked": {
                color: "green",
                "&.Mui-disabled": {
                  color: grey[700],
                },
              },
            },
          }}
        >
          <FormControlLabel
            value="female"
            control={<Radio size="small" />}
            label="Female"
          />
          <FormControlLabel
            sx={{
              // Label individual custom
              "& .MuiFormControlLabel-label": {
                fontSize: 25,
                fontFamily: "fantasy",
                color: "purple",
                "&.Mui-disabled": {
                  color: grey[700],
                },
              },
            }}
            value="male"
            control={
              <Radio
                // Radio Individual custom
                sx={{
                  "&.MuiRadio-root": {
                    "&.Mui-checked": {
                      color: "purple",
                      "&.Mui-disabled": {
                        color: "grey",
                      },
                    },
                  },
                }}
                icon={<Brightness5 />}
                checkedIcon={<BrightnessHigh />}
              />
            }
            label="Male"
          />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </>
  );
};
