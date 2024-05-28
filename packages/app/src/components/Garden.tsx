import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Plants from "./Plants.tsx"

const Garden = () => (
    <Grid container spacing={6} justifyContent="center">
        <Grid item md={12}>
            <Typography variant="h2" align="center" fontFamily="Sevillana">My Garden</Typography>
        </Grid>
        <Grid item>
            <Card>
                <CardContent>
                    <Plants />
                </CardContent>
            </Card>
        </Grid>
    </Grid>
);

export default Garden;
