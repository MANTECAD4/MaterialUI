import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  selectClasses,
} from "@mui/material";
import { months } from "../fixtures/data";
import { useState } from "react";
import { green, grey, orange } from "@mui/material/colors";
import { Bathtub, CalendarToday } from "@mui/icons-material";

export const SelectComponent = () => {
  const [value, setValue] = useState("");
  //   const [value, setValue] = useState<string[]>([]);
  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel
          id="demo-multiple-name-label"
          sx={{
            "&.MuiInputLabel-root": {
              color: "purple",
              fontFamily: "cursive",
            },
            "&.Mui-focused .MuiInputLabel-root": { color: "purple" },
            "&.Mui-disabled .MuiInputLabel-root": { color: "grey" },
          }}
        >
          Month
        </InputLabel>
        <Select
          // variant="standard"
          // inputProps={{ readOnly: true }}
          // multiple // Con esta prop, el state debe manejar un array
          // renderValue={(value) => value.join(" - ")} // Personalizar etiqueta cuando multiple=true

          // EN caso de que no haya valor seleccionado
          //   renderValue={(value) => (value === "" ? "Select one" : `${value}`)}
          //   displayEmpty
          labelId="demo-multiple-name-label"
          label="Month"
          id="demo-multiple-name"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          IconComponent={CalendarToday}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: green[50],
                // "& .MuiListSubheader-root": {
                //   bgcolor: green[400],
                // },
              },
            },
          }}
          // Default variant
          // slotProps={{ input: { sx: { bgcolor: green[50], borderRadius: 3 } } }}
          variant="outlined"
          sx={{
            // Standard/Filled variant styles
            // "&:before": {
            //   borderColor: orange[200],
            // },
            // "&:not(.Mui-disabled):hover::before": {
            //   borderColor: orange[400],
            // },
            // "&:after": {
            //   borderColor: orange[700],
            // },
            // "&:hover": { bgcolor: "lightblue" },
            // Main styles OUTLINED variant
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: 3,
              borderColor: green[300],
              // zIndex: 0,
            },
            // Hovering
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: green[500],
            },
            // Focused
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: green[100],
            },
            // Disabled
            "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: grey[400],
              borderWidth: 5,
            },
            "& > svg": {
              fill: "orange",
            },
          }}
        >
          <ListSubheader
            sx={{
              bgcolor: green[300],
              fontFamily: "cursive",
              color: (theme) => theme.palette.getContrastText(green[900]), //green[900],
            }}
          >
            My Options
          </ListSubheader>
          {months.map((month) => (
            <MenuItem sx={{ fontFamily: "cursive" }} key={month} value={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
