import { Grid } from "@mui/material";
import React from "react";
import StatusCard from "./StatusCard";

const CurrentStatus = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item>
        <StatusCard />
      </Grid>
      <Grid item>
        <StatusCard />
      </Grid>
    </Grid>
  );
};

export default CurrentStatus;
