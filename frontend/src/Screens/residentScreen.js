import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const ResidentScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);
  };
  const [inputs, setInputs] = useState({
    First_Name: "",
    Last_Name: "",
    Phn_no: "",
    Address: "",
    email: "",
  });
  
  const [value, setValue] = useState('')
  console.log({ value })
   const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
     setValue(event.target.value);
  };
  const [visibleE, setVisibleE] = useState(false);
  const [checkE, setCheckE] = useState([]);

  const handleCheckE = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
  //  setCheck(event.target.checked);
    console.log(value, checked);
    if (checked) {
      setCheckE([
        ...checkE,value
      ])
    }
    else {
      setCheckE(checkE.filter( (e) =>console.log('e=>'+e,'Value =>'+value)));
    }
  };
  const [visibleC, setVisibleC] = useState(false);
  const [checkC, setCheckC] = useState([]);

  const handleCheckC = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
  //  setCheck(event.target.checked);
    console.log(value, checked);
    if (checked) {
      setCheckC([
        ...checkC,value
      ])
    }
    else {
      setCheckC(checkC.filter( (e) =>console.log('e=>'+e,'Value =>'+value)));
    }
  };
  const [visibleP, setVisibleP] = useState(false);
  const [checkP, setCheckP] = useState([]);

  const handleCheckP = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
  //  setCheck(event.target.checked);
    console.log(value, checked);
    if (checked) {
      setCheckP([
        ...checkP,value
      ])
    }
    else {
      setCheckP(checkP.filter( (e) =>console.log('e=>'+e,'Value =>'+value)));
    }
  };
  const [ visibleo, setVisibleO ] = useState(false);
  const [ otherInfo, setOtherInfo ] = useState('');
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  
  const Item = styled(Paper)(() => ({
    textAlign: "center",
  }));
  return (
    <div>
      <Grid container direction="row" spacing={2} marginLeft="2px">
        <Grid item xs sx={{ textAlign: "center" }}>
          <div>
            <AccountBoxIcon style={{width:"40px", height:"70px"}} size="large"/>
          </div>
          <form onSubmit={handleSubmit}>
            <Typography
              variant="h5"
              textAlign={"center"}
              padding={1}
              sx={{
                color: "#283593",
                fontFamily: "Arizonia",
                marginBottom: 0,
                marginTop: "1px",
              }}
            >
              Update Your Profile
            </Typography>

            <Grid container spacing={.5} style={{ marginTop: "5px"}}>
              <Grid item xs={6}>
                <TextField
                  name="First_Name"
                  variant="outlined"
                  disabled
                  type={"text"}
                  placeholder="First Name"
                />
              </Grid>
              <Grid item xs={6}>
                
                  <TextField
                    readOnly={true}
                    name="Last_Name"
                    variant="outlined"
                    disabled
                    type={"text"}
                    placeholder="Last Name"
                    sx={{ height: 100 }}
                  />
                
              </Grid>
           
            <TextField
              onChange={handleChange}
              name="Phn_no"
              value={inputs.Phn_no}
              marginTop=""
              variant="outlined"
              type={"number"}
              placeholder="Phone Number"
                sx={{ width: 400, height: 100 }}
                align="center"
            />
            <TextField
              onChange={handleChange}
              name="Address"
              value={inputs.Address}
                marginTop="2px"
              variant="outlined"
              type={"text"}
              placeholder="Address"
              sx={{ width: 400, height: 100 }}
            />

            <TextField
              readOnly={true}
              name="email"
                marginTop="0px"
              variant="outlined"
              disabled
              type={"email"}
              placeholder="Email"
              sx={{ width: 400, height: 100 }}
            />

            <Button
              type="submit"
              sx={{
                margin: "9px",
                backgroundColor: "#1b5e20",
                width: 300,
                padding: 1,
                color: "#e8eaf6",
                ":hover": {
                  boxShadow: "5px 5px 10px #388e3c",
                  backgroundColor: "#388e3c",
                },
              }}
            >
              Update Information
              </Button>
            </Grid>
          </form>
          <Button
              type="submit"
              sx={{
                marginTop: "30px",marginLeft:"0px",marginRight:"180px",
                backgroundColor: "#1b5e20",
                width: 300,
                padding: 1,
                color: "#e8eaf6",
                ":hover": {
                  boxShadow: "5px 5px 10px #388e3c",
                  backgroundColor: "#388e3c",
                },
              }}
          >
            <Link to="./Sreens/complaint" style={{color:"white"}}>
            Show Previous complaints
                </Link>
              
              </Button>
        </Grid>
        
        <Grid item xs sx={{ textAlign: "center" }}>
        
          <div>
            <h1>Announcements</h1>
            <Card sx={{ minWidth: 275  ,marginTop:"50px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Announcement 1
                </Typography>
                <Typography color="black" sx={{ position:"bottom",bottom:"0px", right: "0px", textAlign:"right" }}>
   Date1
  </Typography>  
      </CardContent>
            </Card>
            <Card sx={{ minWidth: 275  ,marginTop:"20px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Announcement 2
                </Typography>
                <Typography color="black" sx={{ position:"bottom",bottom:"0px", right: "0px", textAlign:"right" }}>
   Date2
  </Typography>  
      </CardContent>
            </Card>
            <Card sx={{ minWidth: 275  ,marginTop:"20px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Announcement 3
                </Typography>
                  <Typography color="black" sx={{ position:"bottom",bottom:"0px", right: "0px", textAlign:"right" }}>
   Date3
  </Typography>  
      </CardContent>
            </Card>
            <Card sx={{ minWidth: 275  ,marginTop:"20px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Announcement 4
                </Typography>
                <Typography color="black" sx={{ position:"bottom",bottom:"0px", right: "0px", textAlign:"right" }}>
   Date4
  </Typography>  
      </CardContent>
    </Card>
          </div>
        </Grid>

        <Grid item xs sx={{ textAlign: "left" }}>
          <div>
            <h1>Complaints</h1>
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
          
        </Grid>
      </Grid>
    </div>
  );
};

export default ResidentScreen;
