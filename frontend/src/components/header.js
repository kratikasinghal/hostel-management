import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logout } from '../actions/userActions'
import { useDispatch,useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Select, MenuItem,FormControl,OutlinedInput,InputLabel } from '@mui/material';
import { useState } from 'react';
import {createRecord} from '../actions/workerFormActions'
import Message from '../components/Message'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(logout())
  }

  const [open, setOpen] = React.useState(false);

  const handleJoinUs = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [inputs, setInputs] = useState({
    profession: "",
    experience: "",
    referralID: ""

  })

  const handleChange = (e) => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const {success,error} = useSelector(state => state.createRecord)
  const handleSubmit = () => {
    handleClose()
    dispatch(createRecord(inputs.profession,inputs.experience,inputs.referralID))
  }

  const navigateHomePage = () => {
    navigate('/resident/homePage')
  }
  return (
    <div>
      {success && <Message severity="success" message="Record Submitted" open={true}/>}
      {error && <Message severity="error" message={error} open={true}/>}
      <Dialog open={open}>
        <DialogTitle>JOIN US</DialogTitle>
        <DialogContent>
          <FormControl sx={{ width: "99%", marginTop: "1%" }}
            variant="outlined">
            <InputLabel htmlFor="profession">Profession</InputLabel>
            <OutlinedInput
              id="profession"
              value={inputs.profession}
              onChange={handleChange}
              label="profession"
              name="profession"
            />
          </FormControl>
          <FormControl sx={{ width: "99%", marginTop: "2%" }} variant="outlined">
            <InputLabel htmlFor="Experience">Experience</InputLabel>
            <Select
              labelId="experience"
              id="experience"
              value={inputs.experience}
              label="Experience"
              onChange={handleChange}
              name="experience"
            >
              <MenuItem value="0-2yrs">0-2yrs</MenuItem>
              <MenuItem value="2-5yrs">2-5yrs</MenuItem>
              <MenuItem value=">5yrs">More than 5yrs</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "99%", marginTop: "2%" }} variant="outlined">
            <InputLabel htmlFor="Referral">Referral ID</InputLabel>
            <OutlinedInput
              id="referralID"
              value={inputs.referralID}
              onChange={handleChange}
              inputProps={{ "aria-label": "referralID" }}
              label="referralID"
              name="referralID"
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" elevation={0} style={{ background: '#fff', borderBottom: '#388e3c 3px solid', color: '#388e3c' }}>
          <Toolbar>

            <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginLeft: "10px" }} onClick={navigateHomePage}>
              BINARY CODERS
            </Typography>
            <Button color="inherit" onClick={handleJoinUs}>JOIN US</Button>
            <Button color="inherit" onClick={handleLogOut}>LOGOUT</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
