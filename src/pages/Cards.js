import { Grid } from "@mui/material";
import React from "react";
import CardComponent from "../components/CardComponent";
import Transitions from "../Transition";

export default function Cards() {
  return (
    <Transitions>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: 1 }}
      >
        <CardComponent />
      </Grid>
    </Transitions>
  );
}
