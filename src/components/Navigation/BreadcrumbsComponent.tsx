import {
  AttachMoney,
  Checkroom,
  Expand,
  Male,
  Man,
  NavigateNext,
} from "@mui/icons-material";
import { Paper, Link, Breadcrumbs, Typography, Box, Chip } from "@mui/material";

export const BreadcrumbsComponent = () => {
  return (
    <Paper
      sx={{
        height: "100vh",
        "& .MuiBox-root": {
          alignItems: "center",
          display: "flex",
          "& .MuiSvgIcon-root": {
            fontSize: 20,
            mr: 0.5,
          },
        },
      }}
    >
      <Breadcrumbs
        aria-label="Current page path"
        separator={<NavigateNext />}
        maxItems={2} //Numero de opciones maximo antes de comprimirlas enmedio
        slots={{ CollapsedIcon: Expand }}
        slotProps={{ collapsedIcon: { sx: { fill: "green" } } }}
        sx={{
          // Separador
          "& .MuiBreadcrumbs-separator": {
            color: "blue",
            m: "0px 10px",
          },
          // Links
          "& .MuiLink-root": {
            fontFamily: "cursive",
            color: "brown",
          },
          // "& .MuiBreadcrumbCollapsed-root": {
          //   bgcolor: "red !important",
          // },
          "& button[aria-label='Show path']": {
            bgcolor: "lightblue",
          },
        }}
      >
        {/* <Chip
          icon={<Man sx={{ fontSize: 20 }} />}
          label={
            <Link underline="hover">
              <Box>Men</Box>
            </Link>
          }
        /> */}
        <Link underline="hover">
          <Box>
            <Man />
            Men
          </Box>
        </Link>
        <Link underline="hover">
          <Box>
            <Checkroom />
            Clothes
          </Box>
        </Link>
        <Link underline="hover">
          <Box>
            <Checkroom />
            Clothes
          </Box>
        </Link>
        <Link underline="hover">
          <Box>
            <Checkroom />
            Clothes
          </Box>
        </Link>
        <Link underline="hover">
          <Box>
            <Checkroom />
            Clothes
          </Box>
        </Link>
        <Link underline="hover">
          <Box>
            <Checkroom />
            Clothes
          </Box>
        </Link>
        <Typography variant="caption">
          <Box>
            <AttachMoney />
            Sales
          </Box>
        </Typography>
      </Breadcrumbs>
    </Paper>
  );
};
