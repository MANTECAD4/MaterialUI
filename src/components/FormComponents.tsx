import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  FormHelperText,
  Checkbox,
} from "@mui/material";
export const FormComponents = () => {
  return (
    <>
      <FormControl
        error
        required
        // disabled
        /* sx={{ "& > *": { color: "green" } }} */ component={"fieldset"}
      >
        <FormLabel
          sx={{
            color: "green",
            fontSize: 30,
            fontFamily: "Verdana",
            "&.Mui-focused": {
              color: "orange",
            },
            "&.Mui-disabled": {
              color: "yellow",
            },
            "&.Mui-error": {
              color: "brown",
            },
            "&.Mui-error .MuiFormLabel-asterisk": {
              color: "pink",
            },
          }}
        >
          My Form
        </FormLabel>{" "}
        {/* Agrupador logico para sincronizar el estado */}
        <FormGroup
          row
          sx={{
            "& .MuiFormControlLabel-label": {
              color: "purple",
              "&.Mui-disabled": {
                color: "yellow",
              },
            },
          }}
        >
          {" "}
          {/* Agrupador estetico */}
          <FormControlLabel label="My Value" control={<Checkbox />} />
          <FormControlLabel label="My Value" control={<Checkbox />} />
          <FormControlLabel label="My Value" control={<Checkbox />} />
        </FormGroup>
        <FormHelperText
          sx={{
            // color: "red",
            "&.Mui-disabled": {
              color: "yellow",
            },
            "&.Mui-error": {
              color: "brown",
            },
          }}
        >
          Select a value
        </FormHelperText>
      </FormControl>
    </>
  );
};
