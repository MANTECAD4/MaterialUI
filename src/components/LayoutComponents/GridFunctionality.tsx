import { Grid, Typography } from "@mui/material";
import { ComponentsLayout } from "../ComponentsLayout";

export const GridFunctionality = () => {
  return (
    <>
      <ComponentsLayout title="Grid- Example ">
        <h1>My App</h1>
        <h2>This is my page content</h2>
        <Grid
          container
          // Indica el acomodo de los grid item
          // Esto afecta el axis del componente, siendo:
          // direction = row -> main axis = horizintal usar justifyContent
          // direction = column -> main axis = vertical usar alignItems
          //  alignItems={"stretch"} // Hace que abarquen todo el espacio disponible en el cross axis
          //   direction="row"
          // Size grow para que tome el resto del espacio disponible
          // Size auto para que tome el espacio que necesita
          height={"8rem"}
          justifyContent={"space-between"}
          sx={{ bgcolor: "lightcoral", p: 1 }}
        >
          <Grid
            container
            sx={{ bgcolor: "orange" }}
            size={{ xs: 12, sm: 8 }}
            // spacing={2}
            columnGap={2}
            // columnSpacing={2}
            rowSpacing={1}
          >
            <Grid sx={{ bgcolor: "blue" }} size={"grow"}>
              Item 1
            </Grid>
            <Grid sx={{ bgcolor: "green" }} size={8}>
              {" "}
              Item 2
            </Grid>
            <Grid sx={{ bgcolor: "brown" }} bgcolor={"brown"} size={6}>
              Item 2
            </Grid>
          </Grid>
          <Grid container sx={{ bgcolor: "orange" }}>
            <Grid sx={{ bgcolor: "blue" }}>Item 3</Grid>
            <Grid sx={{ bgcolor: "green" }} size={2}>
              Item 4<Typography noWrap>Hola hola hola hola</Typography>
            </Grid>
            <Grid sx={{ bgcolor: "brown" }} container size={"grow"}>
              Item 5
            </Grid>
          </Grid>
        </Grid>
      </ComponentsLayout>
    </>
  );
};
