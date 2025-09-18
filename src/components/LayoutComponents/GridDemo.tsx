import {
  Avatar,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";

const longTitle =
  "Channel title but its actually too long to fit in the container";
const longDesc = "Some random long description for the elements";

const SubscriptionElement = ({ mediaQuery }: any) => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid size={"auto"} justifyContent={"center"} alignItems={"center"}>
        <Skeleton variant="circular">
          <Avatar />
        </Skeleton>
      </Grid>
      {mediaQuery && (
        <Grid size={"grow"} p={0.5} direction={"column"}>
          <Typography noWrap title={longTitle}>
            {longTitle}
          </Typography>{" "}
          <Typography variant="body2" noWrap title={longDesc}>
            {longDesc}
          </Typography>
          {/* <Skeleton variant="rounded" width={"100%"} height={"100%"} /> */}
        </Grid>
      )}
    </Grid>
  );
};

const VideoElement = () => {
  return (
    <Grid
      container
      direction={"column"}
      width={"19rem"}
      rowSpacing={1}
      wrap="nowrap"
    >
      <Grid container height={"12rem"} width={"100%"}>
        <Skeleton
          height={"100%"}
          width={"100%"}
          variant="rectangular"
          animation="wave"
        />
      </Grid>
      <Grid
        container
        height={"4rem"}
        width={"100%"}
        columnSpacing={1}
        // wrap="nowrap"
      >
        <Grid size={"auto"} sx={{ display: "flex", alignItems: "center" }}>
          <Skeleton variant="circular">
            <Avatar sx={{ height: "3rem", width: "3rem" }} />
          </Skeleton>
        </Grid>
        <Grid size={"grow"} py={1}>
          {/* <Skeleton height={"100%"} width={"100%"} variant="rounded" /> */}
          <Typography title={longTitle} noWrap>
            {longTitle}
          </Typography>
          <Typography title={longDesc} noWrap variant="body2">
            {longDesc}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const GridDemo = () => {
  const mediaQuery = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <>
      <Grid container height={"96.5vh"}>
        <Grid
          container
          size={{ xs: 1, md: 3, xl: 2 }}
          wrap="nowrap" // IMPORTANTE PARA EVITAR QUE EL CONTENIDO EXCEDA EL TAMAÑO
          direction={"column"}
          rowGap={2}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <SubscriptionElement mediaQuery={mediaQuery} />
          ))}
        </Grid>
        <Grid container size={{ xs: 11, md: 9, xl: 10 }} spacing={2} p={1}>
          <Grid container justifyContent={"center"} alignItems={"start"}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <VideoElement />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
