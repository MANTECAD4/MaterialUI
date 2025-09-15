import { Container } from "@mui/material";
import { ComponentsLayout } from "../ComponentsLayout";

export const ContainerFunctionality = () => {
  return (
    <>
      <ComponentsLayout title="Container">
        <Container
          // Evita un ajuste fluido en el cambio de tamaño: En su lugar, establece el ancho al tamaño
          // minimo especificado por el breakpoint actual.
          // fixed
          //   disableGutters
          component={"main"}
          role="main"
          maxWidth="lg" // Acepta breakpoints
          sx={{ bgcolor: "red" }}
        >
          <h1>My App</h1>
          <h2>This represents my entire application</h2>
        </Container>
      </ComponentsLayout>
    </>
  );
};
