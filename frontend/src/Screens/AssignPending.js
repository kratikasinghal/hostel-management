import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdminMenu from '../components/adminMenu';
import Checkbox from '@mui/material/Checkbox';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { blue } from '@mui/material/colors';
import {Select, MenuItem,FormControl,OutlinedInput,InputLabel, Card,Box,CardContent } from '@mui/material';
import { useState } from 'react';
import Grid from "@mui/material/Grid";


const AssignPending = () => {
    const [open, setOpen] = React.useState(false);

    const handleFILTER = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const handleSubmit = () => {
        handleClose()
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  return (
    <div>
          <AdminMenu />
          <Dialog open={open}>
        <DialogTitle>FILTER</DialogTitle>
        <DialogContent>
          <FormControl sx={{ width: "80%", marginTop: "1%" }}
            variant="outlined">
              <FormControlLabel control={<Checkbox />} label="ELECTRICIAN" />
          </FormControl>
          <FormControl sx={{ width: "80%", marginTop: "2%" }} variant="outlined">
                      <FormControlLabel control={<Checkbox />} label="CARPENTER" />
          </FormControl>
          <FormControl sx={{ width: "80%", marginTop: "2%" }} variant="outlined">
                      <FormControlLabel control={<Checkbox />} label="PLUMBER" />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} >Filter</Button>
        </DialogActions>
          </Dialog>
          <Box
              m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button onClick={handleFILTER}  sx={{background:"#fff",margin: "0 0 0 94%",color:"green",border:"1px solid green",borderRadius:"4px"}}>FILTER</Button>
          </Box>
              <Grid container spacing={2} sx={{ marginLeft: "300px" }}>
              <Grid item xs={6}>
                  <Typography sx={{textAlign:"center"}}>Complaints</Typography>
                  <Card variant="outlined" >
                      <CardContent>
                          
                      </CardContent>
                      </Card>
              </Grid>
              <Grid item xs={6}>
                  <Typography sx={{textAlign:"center"}}>Workers</Typography>
              </Grid>
          </Grid>
      </div>
     
    )
}


export default AssignPending;
