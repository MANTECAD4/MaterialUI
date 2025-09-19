import { CssBaseline, Box, Button, ScopedCssBaseline } from "@mui/material";
import { ComponentsLayout } from "../components/ComponentsLayout";
import { useReducer } from "react";

const boxStyles = {
  color: "white",
  bgcolor: "black",
  width: "100px",
  height: "100px",
  padding: "16px",
  border: "2px solid red",
};

export const CssBaselineFunctionality = () => {
  const [showCssBaseline, toggleShowCssBaseline] = useReducer(
    (state) => !state,
    false
  );
  return (
    <>
      <ComponentsLayout title="CssBaseline Functionality">
        <strong>Example Strong</strong>
        <b>Example B</b>
        <div>Plain text</div>
        <Button onClick={() => toggleShowCssBaseline()}>
          Toggle CssBaseline - is {showCssBaseline ? "on" : "of"}
        </Button>
        <Box sx={boxStyles}>Test text</Box>
        {showCssBaseline && (
          <CssBaseline
            enableColorScheme // Indica a la etiqueta html el modo de ilumnación aplicado
          />
        )}
        <ScopedCssBaseline>
          Soy una parte de la aplicación con estilos base de MUI siempre
        </ScopedCssBaseline>
      </ComponentsLayout>
    </>
  );
};
