import {
  Box,
  Fade,
  Grow,
  Slide,
  Stack,
  Typography,
  useScrollTrigger,
  Zoom,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import { TransitionGroup } from "react-transition-group";

export const DemoScrollTrigger = () => {
  const items = ["red", "blue", "green"];
  const trigger = useScrollTrigger({ threshold: 500, disableHysteresis: true });
  const { ref: h4Ref, inView: h4InView } = useInView({});
  return (
    <>
      <Stack>
        <Box
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            variant="h2"
            sx={{ fontFamily: "cursive" }}
            textAlign={"center"}
          >
            Welcome to our landing page c:
          </Typography>
        </Box>
        <Box
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack gap={6}>
            <Fade
              in={h4InView}
              timeout={{ enter: 1000, exit: 0 }}
              onEntered={() => {}}
            >
              <Typography
                ref={h4Ref}
                variant="h4"
                sx={{ fontFamily: "cursive" }}
              >
                This content will slide in after you scroll down
              </Typography>
            </Fade>
            <Stack direction={"row"} gap={5} justifyContent={"center"}>
              {/* <TransitionGroup component={null}> */}
              {items.map((item, index) => (
                <Slide
                  key={item}
                  in={h4InView}
                  timeout={{ enter: 500, exit: 0 }}
                  //   direction="up"
                  style={{
                    transitionDelay: h4InView
                      ? `${(index + 1) * 500}ms`
                      : "0ms",
                  }}
                >
                  <Box
                    borderRadius={2}
                    height={"5rem"}
                    width={"5rem"}
                    bgcolor={item}
                  />
                </Slide>
              ))}
              {/* </TransitionGroup> */}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
