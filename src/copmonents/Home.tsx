import { Box, Stack } from "@mui/material";
import React from "react";
import AddPaid from "./Add";
import CurrentStatus from "./CurrentStatus";

const Home = () => {
  return (
    <Stack direction="column" flex={7} p={2} gap={5} >
      <AddPaid />
      <CurrentStatus/>
    </Stack>
  );
};

export default Home;
