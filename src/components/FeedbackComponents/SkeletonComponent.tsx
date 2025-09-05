import { ImportContacts } from "@mui/icons-material";
import { Avatar, Skeleton } from "@mui/material";

export const SkeletonComponent = () => {
  return (
    <>
      <Skeleton variant="circular" height={"5rem"} width={"5rem"} />
      <Skeleton
        variant="text"
        height={"5rem"}
        width={"10rem"}
        sx={{ mb: 4, bgcolor: "rgba(255,100,90,0.25)" }}
      />
      <Skeleton
        animation="wave"
        variant="rounded"
        height={"10rem"}
        width={"20rem"}
      />
      <Skeleton variant="rectangular" height={"7rem"} width={"20rem"} />
      <Skeleton variant="circular">
        <Avatar
          sx={{ height: { xs: 100, md: 500 }, width: { xs: 100, md: 500 } }}
        />
      </Skeleton>
      <Avatar sx={{ height: 155, width: 155 }} />
    </>
  );
};
