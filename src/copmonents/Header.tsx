"use client";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{bgcolor:'#3D737F'}}>
      <StyledToolbar>
        <Box justifyContent="center" display="flex" alignItems='center'>
          <Avatar
            src="/images/image.jpeg"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
           マネー管理
          </Typography>
        </Box>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />

        <Icons>
          <Badge badgeContent={4} color="primary">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <Notifications color="action" />
          </Badge>
          <Avatar
            sx={{ width: "30", height: "30" }}
            src="/images/monster06.png"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: "30", height: "30" }}
            src="/images/monster06.png"
          />
          <Typography component="span">Ghosy</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
