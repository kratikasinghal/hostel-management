import React from "react";
import { Card, CardContent, Typography, Grid, Chip, Stack } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
    "Update", "Delete"];
const ITEM_HEIGHT = 48;
const Complaints = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{ margin: "5% 3% 0 3%" ,maxWidth: 500}} variant="outlined" >
      <CardContent>
        <Grid container spacing={1} justify-content="flex-end" >
          <Grid item xs={8}>
            <Typography variant="complaint1" gutterBottom color="text.primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae doloremque fuga et libero cupiditate nemo, quam cumque, dolorem dolor quas, perferendis magnam atque nostrum modi labore at voluptates minima!
            </Typography>
          </Grid>
                  <Grid item xs={3}>
                      <Grid container spacing={6} direction="column">
                          <Grid item xs={6}>
                          <Typography color="brown">
              <b>31-10-2022</b>
            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                          
        <Chip label="Solved" color="success" />
                    
                          </Grid>
                      </Grid>
            
                  </Grid>
                  <Grid item xs={1} >
                  <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
         </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Complaints;
