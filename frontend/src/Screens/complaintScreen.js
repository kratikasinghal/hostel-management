import React from 'react'
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ResponsiveAppBar from '../components/header.js';   
import Complaints from '../components/complaints.js'

const ComplaintScreen = () => {

  
  const Item = styled(Paper)(() => ({
    textAlign: "center",
  }));
  return (
      <div>
          <ResponsiveAppBar/>
          <Grid container direction="row" spacing={2} marginLeft="2px">
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                  <h1>Filters</h1>
                  <FormControl>
      <FormLabel id="filters">Choose the Filter on the basis of Status</FormLabel>
           
                <FormControlLabel value="solved" control={<Checkbox />} label="Solved"  />
               
                <FormControlLabel value="pending" control={<Checkbox />} label="pending"  />
               
                <FormControlLabel value="Assigned" control={<Checkbox />} label="Assigned" />
              
              </FormControl>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                  <h1>Complaints</h1>
                  <Complaints/>
          {/* <div>
            <h2 style={{ marginTop: "100px" }}>Do you want to register a complaint?</h2>
            <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Choose the service</FormLabel>
            <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handle}
      >
                <FormControlLabel value="electrician" control={<Radio />} label="Electrician" onClick={() => setVisibleE(true)} />
                {visibleE &&
                  <div>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox onChange={handleCheckE} value="plug complaint"/>} label="Plugs not working" />
                      <FormControlLabel control={<Checkbox onChange={handleCheckE} value="fan complaint" />} label="Fan not working" />
                      <FormControlLabel control={<Checkbox onChange={handleCheckE} value="light complaint" />} label="Lights not working" /> 
                      <TextField id="outlined-basic" label="Custom Electrician Complaint " variant="outlined" />
                    </FormGroup>
                  </div>}
                <FormControlLabel value="carpenter" control={<Radio />} label="Carpenter" onClick={() => setVisibleC(true)} />
                {visibleC &&
                  <div>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox onChange={handleCheckC} value="Almirah complaint"/>} label="Almirah" />
                      <FormControlLabel control={<Checkbox onChange={handleCheckC} value="Door complaint" />} label="Door" />
                      <FormControlLabel control={<Checkbox onChange={handleCheckC} value="Bed complaint" />} label="Bed" /> 
                      <TextField id="outlined-basic" label="Custom Carpenter Complaint " variant="outlined" />
                    </FormGroup>
                  </div>}
                <FormControlLabel value="Plumber" control={<Radio />} label="Plumber" onClick={() => setVisibleP(true)} />
                {visibleP &&
                  <div>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox onChange={handleCheckP} value="Bathroom complaint"/>} label="Bathroom" />
                      <FormControlLabel control={<Checkbox onChange={handleCheckP} value="Kitchen complaint" />} label="Kitchen" />
                      <FormControlLabel control={<Checkbox onChange={handleCheckP} value="Laundry complaint" />} label="Laundry" /> 
                      <TextField id="outlined-basic" label="Custom Plumber Complaint " variant="outlined" />
                    </FormGroup>
                  </div>}
                <FormControlLabel value="other" control={<Radio checked={visibleo} onClick={() => setVisibleO(!visibleo)} />} label={visibleo ?
                  <TextField label="other services">
                    disabled={!visibleo}
                label="Please Specify"
                onKeyDown={(e) => setOtherInfo(e.target.value)}/>  
                  </TextField> : "other"} />
              </RadioGroup>
              </FormControl>
          </div>
           */}
        </Grid>
          </Grid>
      </div>
  )
}

export default ComplaintScreen
