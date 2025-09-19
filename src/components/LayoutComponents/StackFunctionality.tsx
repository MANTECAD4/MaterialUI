import {
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ComponentsLayout } from "../ComponentsLayout";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export const StackFunctionality = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <ComponentsLayout title="Stack Functionality">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          //   justifyContent={{ md: "space-between" }}
          alignItems={"center"}
          sx={{ overflow: "auto" }}
          //   divider={<Divider orientation="horizontal" flexItem />} // Divider para column
          divider={
            <Divider
              orientation={isSmall ? "horizontal" : "vertical"}
              flexItem
            />
          } // Divider para row
        >
          <Chip label="My Chip" />
          <Chip label="My Chip" />
          <Chip label="My Chip" />
          <Chip label="My Chip" />
          <Chip label="My Chip" />
          <Chip label="My Chip" />
          <Chip label="My Chip" />
          <Chip label="My Chip" />
          <Chip label="My Chip" />
        </Stack>
      </ComponentsLayout>
      <ComponentsLayout title="Stack Overflow + Grid">
        <Grid container>
          <Grid size={2}>
            <Stack spacing={2} divider={<Divider flexItem />}>
              <Typography noWrap>
                My text but it's actually too long for the spaceMy text but it's
                actually too long for the spaceMy text but it's actually too
                long for the space
              </Typography>
              <Typography noWrap>
                My text but it's actually too long for the spaceMy text but it's
                actually too long for the spaceMy text but it's actually too
                long for the space
              </Typography>
              <Typography noWrap>
                My text but it's actually too long for the spaceMy text but it's
                actually too long for the spaceMy text but it's actually too
                long for the space
              </Typography>
            </Stack>
          </Grid>
          <Grid offset={1} size={9}>
            Some stuff
          </Grid>
        </Grid>
      </ComponentsLayout>
    </>
  );
};
