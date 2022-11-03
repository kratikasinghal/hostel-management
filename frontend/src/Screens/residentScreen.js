import React from "react";
import Grid from '@mui/material/Grid';
import { TextField } from "@mui/material";


const ResidentScreen = () => {
  return (
    <Grid container>
        <Grid item md={4}>
            <h3> Profile</h3>
            <p>First Name</p>
            <p>Last Name</p>
            <p> Email</p>
            <TextField>Address</TextField>
            <TextField>Phone Number</TextField>
        </Grid>
        </Grid>
  )
}

export default ResidentScreen
