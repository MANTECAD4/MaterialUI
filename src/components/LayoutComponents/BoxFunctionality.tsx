import { Box } from "@mui/material";
import { ComponentsLayout } from "../ComponentsLayout";

export const BoxFunctionality = () => {
  return (
    <>
      <ComponentsLayout title="Box">
        <Box
          color="secondary.main"
          ml={(theme) => theme.spacing(9)}
          sx={{ "& > h1,h2": { typography: "h4" } }}
          component={"span"}
        >
          <h1>Title</h1>
          <h2>SubTitle</h2>
        </Box>
      </ComponentsLayout>
    </>
  );
};
