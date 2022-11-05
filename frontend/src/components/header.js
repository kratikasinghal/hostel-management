import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#33691e' }}>
        <Toolbar>
       
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,marginLeft:"10px" }}>
            BINARY CODERS
          </Typography>
          <Button color="inherit"><Link to="../FormPage" style={{color:'white',textDecoration:'none'}} >JOIN US</Link></Button>
          <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
