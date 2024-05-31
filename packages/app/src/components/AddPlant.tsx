import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/AddCircle";
import { Plant } from "../types/plant.ts";
import { useAddPlant } from "../services/mutations.ts";
import { useForm, SubmitHandler } from "react-hook-form";

const AddPlant = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const addPlantMutation = useAddPlant();

  const { register, handleSubmit } = useForm<Plant>();

  const handleAddPlantSubmit: SubmitHandler<Plant> = (data) => {
    addPlantMutation.mutate({
      ...data,
      size: 1,
    });
    setOpenDialog(false);
  };

  return (
    <Box textAlign="center" my={2}>
      <Button
        variant="contained"
        onClick={() => setOpenDialog(true)}
        size="large"
        startIcon={<AddIcon />}
      >
        Add Plant
      </Button>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit(handleAddPlantSubmit),
        }}
      >
        <DialogTitle>Add new plant</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography color="secondary">
                Name your new plant and select it's type.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                required
                label="Plant name"
                fullWidth
                InputProps={{
                  ...register("name"),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="plant-type">Plant type</InputLabel>
                <Select
                  labelId="plant-type"
                  label="Plant type"
                  defaultValue="grass"
                  inputProps={{
                    ...register("type"),
                  }}
                >
                  <MenuItem value="grass">Grass</MenuItem>
                  <MenuItem value="tree">Tree</MenuItem>
                  <MenuItem value="flower">Flower</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={() => setOpenDialog(false)}
                    color="secondary"
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" type="submit">
                    plant
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AddPlant;
