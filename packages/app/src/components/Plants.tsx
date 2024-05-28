import React, { useEffect } from "react";
import Plant from './Plant.tsx';
import { Plant as PlantType, RootState } from "../types"
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import getPlants from "../reducers/plants/actions/get.ts";
import AddPlant from "./AddPlant.tsx"

interface PlantsProps {
    plants: PlantType[];
}

const Plants = (props: PlantsProps) => {
    const dispatch = useDispatch();
    const plants = props.plants;

    useEffect(() => {
        // get plants on page load
        dispatch(getPlants());
    }, []);

    return (
        <Grid container spacing={3}>
            {plants.map((plant, key) => (
                <Grid item md={4} xs={12} key={`plant-${key}`} minWidth={200}>
                    <Plant plant={plant} plantId={key} />
                </Grid>
            ))}
            {plants.length === 0 && (
                <Grid item xs={12}>
                    <Box mt={3}>
                        <Typography textAlign="center">Your garden is empty. Click the button bellow to add new plants.</Typography>
                    </Box>
                </Grid>
            )}
            <Grid item xs={12}>
                <AddPlant />
            </Grid>
        </Grid>
    )
}

export default connect((state: RootState) => ({
    plants: state.plants
}))(Plants);