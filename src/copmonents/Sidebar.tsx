import { Home, Add, ShowChart } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { paths } from "@/lib/path";

const icons: { [key: string]: any } = {
  Home: <Home />,
  Add: <Add />,
  ShowChart: <ShowChart />,
};

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {paths.map((item, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton href={item.path} component="a">
                <ListItemIcon>{icons[item.icon]}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
