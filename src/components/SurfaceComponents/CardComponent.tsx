import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { MyIcon } from "../DataDisplayComponents/icons/icons";
import { Favorite, MoreVert, Share } from "@mui/icons-material";

export const CardComponent = () => {
  const mediaURL =
    "https://imagenes.elpais.com/resizer/v2/NZJCPWHXINAOZNBVOWNVKJO5ZU.jpg?auth=c762895721540964c8025922fdeae9c74bfae633361228ec5aa2158e4de7865e&width=1200";
  const avatarURL =
    "https://images.theconversation.com/files/651621/original/file-20250226-32-jxjhmy.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C5991%2C3997&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip";
  return (
    <>
      {/* Componente principal */}
      <Card
        sx={{ bgcolor: "whitesmoke", width: 420 }}
        variant="elevation"
        elevation={10}
      >
        {/* Seccion del titulo y subtitulo */}
        <CardHeader
          title="Mittens"
          subheader="Male - 3 years old - GDL, Jalisco"
          avatar={
            <Avatar sx={{ width: 60, height: 60 }} src={avatarURL}>
              <MyIcon sx={{ fontSize: 40 }} />
            </Avatar>
          }
          // Botones al final del header
          action={
            <IconButton size="large">
              <MoreVert sx={{ fontSize: 30 }} />
            </IconButton>
          }
          sx={{
            "& .MuiCardHeader-title": {
              fontFamily: "cursive",
              fontSize: 20,
              fontWeight: "bold",
            },
            "& .MuiCardHeader-subheader": {
              fontFamily: "cursive",
              fontSize: 13,
            },
          }}
        />
        <Tooltip title="Visit Profile" followCursor placement="top">
          {/* Para agrupar un area completa y hacerla clickeable */}
          <CardActionArea
            component="a"
            sx={{ "&:hover": { filter: "brightness(80%)" } }}
          >
            {/* Para imagenes, audio, video */}
            <CardMedia
              // sx={{ width: 420 }}
              component="img"
              image={mediaURL}
              width={420}
              height={300}
            />
            {/* Cuerpo de la carta */}
            <CardContent sx={{ fontFamily: "cursive" }}>
              Hi!! My name is Mittens, I'm a relaxed cat that is usually
              sleeping, but sometimes I love doing stupid things like any other
              orange fuzzy-demon would do.
            </CardContent>
          </CardActionArea>
        </Tooltip>
        {/* Botones u otros componentes hasta abajo de la carta */}
        <CardActions disableSpacing>
          <IconButton size="large">
            <Favorite />
          </IconButton>
          <IconButton size="large">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};
