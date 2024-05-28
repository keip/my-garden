import React from "react";
import Plant from './Plant.tsx';
import { Plant as PlantType, RootState } from "../types"
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface PlantsProps {
    plants: PlantType[];
}

const Plants = (props: PlantsProps) => {
    const plants = props.plants;

    return (
        <Grid container spacing={3}>
            {plants.length === 0 && (
                <Grid item md={12}>
                    <Box m={3}>
                        <Typography textAlign="center">Your garden is empty. Click the button bellow to add new plants.</Typography>
                    </Box>
                </Grid>
            )}
            {plants.map((plant, key) => (
                <Plant plant={plant} key={`plant-${key}`} />
            ))}
        </Grid>
    )
}

export default connect((state: RootState) => ({
    plants: state.plants
}))(Plants);