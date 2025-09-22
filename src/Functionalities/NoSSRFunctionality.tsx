import { Button, NoSsr, Typography } from "@mui/material";
import { ComponentsLayout } from "../components/ComponentsLayout";

const HeavyComponent = () => {
  return Array.from(new Array(2500)).map((_, i) => (
    <Button key={i}>Button {i}</Button>
  ));
};

export const NoSSRFunctionality = () => {
  return (
    <>
      <ComponentsLayout title="NoSSR" />
      <NoSsr
        // qu renderizar mientras carga el elemento
        fallback={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography>Loading ...</Typography>
          </div>
        }
        defer // Indica que primero se deja cargar lo demás del sitio, despues se carga indivifualmente este contenido
      >
        Client Only stuff
        <HeavyComponent />
      </NoSsr>
    </>
  );
};
