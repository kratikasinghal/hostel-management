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
import {Select, MenuItem,FormControl,InputLabel, Card,Box,CardContent } from '@mui/material';
import { useState } from 'react';
import Popover from '@mui/material/Popover';


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
    const [assignTo, setAssignTo] = React.useState('');

    const handleChange = (event) => {
      setAssignTo(event.target.value);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const openPop = Boolean(anchorEl);

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
              
                   <Typography variant="h4"sx={{textAlign:"center",color:"green"}}>PENDING COMPLAINTS</Typography> 
                  <Card variant="outlined" sx={{marginLeft:"25%",maxWidth:"800px"}} >
                      <CardContent>
                          <Typography>ASSIGNED BY: abc</Typography>
                          <Typography>EMAIL ID: abc@gmail.com</Typography>
                          <Typography>PH NO: 9873695327</Typography>
                          <Typography>ADDRESS:bcd</Typography>
                  <Typography>DESCRIPTION:</Typography>
                  <Box sx={{ maxWidth: 150,marginTop:"2%" }}>
      <FormControl fullWidth>
     <InputLabel id="assignMenu">ASSIGN TO</InputLabel>
        <Select
          labelId="assignMenu"
          id="assignMenu"
          value={assignTo}
          label="assignTo"
          onChange={handleChange}
        >
          <MenuItem value={10}><Typography
        aria-owns={openPop ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Worker 1
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={openPop}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
                                      <Typography sx={{ p: 1 }}>NAME:Kratika<br />
                                          PH NO: 9873695327<br />
                                          EXPERIENCE:0-2yrs
        </Typography>
      </Popover></MenuItem>
          <MenuItem value={20}><Typography
        aria-owns={openPop ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Worker 2
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={openPop}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
                                      <Typography sx={{ p: 1 }}>NAME:Kratika<br />
                                          PH NO: 9873695327<br />
                                          EXPERIENCE:0-2yrs
        </Typography>
      </Popover></MenuItem>
          <MenuItem value={30}>Worker 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
                          <Button variant="contained" color="success" sx={{marginLeft:"85%"}}>ASSIGN</Button>
                      </CardContent>
                      </Card>
      </div>
     
    )
}


export default AssignPending;
