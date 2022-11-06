import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {logout} from '../actions/userActions'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} style={{ background: '#fff', borderBottom: '#388e3c 3px solid', color: '#388e3c' }}>
        <Toolbar>
       
          <Typography variant="h5" component="div" sx={{ flexGrow: 1,marginLeft:"10px" }}>
            BINARY CODERS
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>LOGOUT</Button>
          <Button color="inherit"><Link to="../FormPage" style={{color:'white',textDecoration:'none'}} >JOIN US</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
