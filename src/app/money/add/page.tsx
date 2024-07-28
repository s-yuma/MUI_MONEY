"use client";
import AddSettings from "@/copmonents/AddSettings";
import Home from "@/copmonents/Home";
import Rightbar from "@/copmonents/Rightbar";
import Sidebar from "@/copmonents/Sidebar";
import { Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";

const page = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Sidebar />
        <AddSettings />
        <Rightbar />
      </Stack>
    </LocalizationProvider>
  );
};

export default page;
