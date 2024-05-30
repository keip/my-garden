import React from "react";
import Plant from "./Plant.tsx";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddPlant from "./AddPlant.tsx";
import { usePlants } from "../services/queries.ts";

const Plants = () => {
  const plantsQuery = usePlants();

  if (plantsQuery.isPending) {
    return <Typography textAlign="center">loading...</Typography>;
  }

  if (plantsQuery.isError) {
    return <Typography textAlign="center">Error loading data</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {plantsQuery.data.map((plant, key) => (
        <Grid item md={4} xs={12} key={`plant-${key}`} minWidth={200}>
          <Plant plant={plant} plantId={key} />
        </Grid>
      ))}
      {plantsQuery.data.length === 0 && (
        <Grid item xs={12}>
          <Box mt={3}>
            <Typography textAlign="center">
              Your garden is empty. Click the button bellow to add new plants.
            </Typography>
          </Box>
        </Grid>
      )}
      <Grid item xs={12}>
        <AddPlant />
      </Grid>
    </Grid>
  );
};

export default Plants;
