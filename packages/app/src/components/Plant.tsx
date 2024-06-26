import React from "react";
import Grid from "@mui/material/Grid";
import { Plant as PlantType } from "../types/plant.ts";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import GrassIcon from "@mui/icons-material/Grass";
import ParkIcon from "@mui/icons-material/Park";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import CircleIcon from "@mui/icons-material/Circle";
import LinearProgress from "@mui/material/LinearProgress";
import { useWaterPlant } from "../services/mutations.ts";

interface PlantProps {
  plantId: number;
  plant: PlantType;
}

const Plant = (props: PlantProps) => {
  const plant = props.plant;
  const plantSize = 24 + 12 * plant.size;
  const useWaterPlantMutation = useWaterPlant();

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography textAlign="center">{props.plant.name}</Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            {plant.size === 1 && <CircleIcon color="primary" />}
            {plant.size > 1 && plant.type === "grass" && (
              <GrassIcon
                color="primary"
                style={{ fontSize: plantSize, transition: "font-size 0.5s" }}
              />
            )}
            {plant.size > 1 && plant.type === "tree" && (
              <ParkIcon
                color="primary"
                style={{ fontSize: plantSize, transition: "font-size 0.5s" }}
              />
            )}
            {plant.size > 1 && plant.type === "flower" && (
              <LocalFloristIcon
                color="primary"
                style={{ fontSize: plantSize, transition: "font-size 0.5s" }}
              />
            )}
          </Grid>
          {plant.size === 1 && (
            <Grid item xs={12} textAlign="center">
              <Typography variant="body2">Seed planted</Typography>
            </Grid>
          )}
          {plant.size > 1 && plant.size < 10 && (
            <Grid item xs={12}>
              <LinearProgress variant="determinate" value={plant.size * 10} />
            </Grid>
          )}
          {plant.size === 10 && (
            <Grid item xs={12} textAlign="center">
              <Typography variant="body2">Plant fully grown</Typography>
            </Grid>
          )}
        </Grid>
      </CardContent>
      {plant.size < 10 && (
        <CardActions>
          <Button
            fullWidth
            size="small"
            variant="outlined"
            onClick={() => {
              useWaterPlantMutation.mutate(props.plantId);
            }}
          >
            Water plant
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default Plant;
