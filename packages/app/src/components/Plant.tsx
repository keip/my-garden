import React from "react";
import Grid from "@mui/material/Grid";
import { Plant as PlantType } from "../types"

interface PlantProps {
    plant: PlantType;
}

const Plant = (props: PlantProps) => {
    return (
        <Grid item md={4} xs={12}>{props.plant.name}</Grid>
    )
}

export default Plant;
