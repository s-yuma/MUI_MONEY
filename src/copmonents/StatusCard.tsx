import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PetsIcon from "@mui/icons-material/Pets";
import { Paper, Stack } from "@mui/material";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StatusCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <PetsIcon />
          </Avatar>
        }
        title="ペット用品"
        sx={{bgcolor:"skyblue"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={false}
          onClick={handleExpandClick}
          aria-label="show more"
        >
          詳細
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{display:"flex", flexDirection:'column',gap:"10px"}} >
          <Paper sx={{ p: "10px", bgcolor:"gray"}}>
          <Stack direction="row" spacing={2}>
            <Typography paragraph>犬の玩具</Typography>
            <Typography paragraph>借りた日:2-23-12-12</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography paragraph>借りた人:息子</Typography>
              <Typography paragraph>金額:20000円</Typography>
            </Stack>
          </Paper>
          <Paper sx={{ p: "10px" }}>
          <Stack direction="row" spacing={2}>
            <Typography paragraph>犬の玩具</Typography>
            <Typography paragraph>借りた日:2-23-12-12</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography paragraph>借りた人:息子</Typography>
              <Typography paragraph>金額:20000円</Typography>
            </Stack>
          </Paper>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default StatusCard;
