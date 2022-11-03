import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Typography,
  TextField,InputLabel,OutlinedInput,InputAdornment,IconButton,Divider
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Loader from '../components/Loader'
import Message from '../components/Message'
import { updateUserDetails,getUserDetails } from "../actions/userActions";

const ResidentScreen = () => {

  const [firstName,setFirstName] = useState("")
const [lastName,setLastName] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [address,setAddress] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [showPassword,setShowPassword] = useState("")
  const [showConfirmPassword,setShowConfirmPassword] = useState("")
  const [message,setMessage] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const updateUserProfile = useSelector(state => state.updateUserProfile)
  const { loading,success } = updateUserProfile

  const userDetails = useSelector(state => state.userDetails)
  const {user} = userDetails
  useEffect(()=>{
    if(!userInfo)
      navigate('/login')
    else if(!user.email){
      dispatch(getUserDetails())
    }else{
      setFirstName(user.firstName)
      setLastName(user.lastName)
      setPhoneNumber(user.phoneNumber)
      setAddress(user.address)
      setEmail(user.email)
    }
  },[userInfo,navigate,user,dispatch])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(password !== confirmPassword)
      setMessage("Passwords don't Match!!")
    else{
      dispatch(updateUserDetails({phoneNumber,address,password}))
    }
  };
  

  const [value, setValue] = useState('')

   const handle = (event) => {
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
  
  const handleClickShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(prevShowConfirmPassword => !prevShowConfirmPassword)
  };

  return (
    <div>
      {message && <Message severity="error" message={message} open={true}/>}
      {success && <Message severity="success" message="Profile Updated" open = {true}/>}
      <Grid container direction="row" spacing={2}>
        <Grid item xs md={3} sx={{ textAlign: "center",margin:"2%" }}>
          <div>
            <AccountCircleIcon fontSize="large"/>
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
              PROFILE
            </Typography>

            <Grid container spacing={.5} style={{ marginTop: "5px"}}>
            <Grid item md={6}>
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="firstName">First Name</InputLabel>
                      <OutlinedInput
                        id="firstName"
                        value={firstName}
                        disabled
                        inputProps={{ "aria-label": "firstName" }}
                        label="firstName"
                        name="firstName"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item md={6}>
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="lastName">Last Name</InputLabel>
                      <OutlinedInput
                        id="lastName"
                        value={lastName}
                        disabled
                        inputProps={{ "aria-label": "lastName" }}
                        label="lastName"
                        name="lastName"
                      />
                    </FormControl>
                  </Grid>
           
                  <FormControl
                  sx={{ width: "100%", marginTop: "3%" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                  <OutlinedInput
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    inputProps={{ "aria-label": "phoneNumber" }}
                    label="phoneNumber"
                    name="phoneNumber"
                  />
                </FormControl>
                <FormControl
                  sx={{ width: "100%", marginTop: "3%" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="address">Address</InputLabel>
                  <OutlinedInput
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    inputProps={{ "aria-label": "address" }}
                    label="address"
                    name="address"
                  />
                </FormControl>
                <FormControl variant="outlined" sx={{ width: "100%", marginTop: "3%" }}>
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <OutlinedInput
                        id="email"
                        value={email}
                        disabled
                        inputProps={{ "aria-label": "email" }}
                        label="email"
                        name="email"
                      />
                    </FormControl>
                    <Grid container spacing={1} sx={{ marginTop: "1%" }}>
                  <Grid item md={6}>
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        value={password}
                        required={true}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item md={6}>
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-Confirmpassword">
                        Cnfm Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-Confirmpassword"
                        type={showConfirmPassword ? "text" : "password"}
                        onChange={e=>setConfirmPassword(e.target.value)}
                        name="confirmPassword"
                        value={confirmPassword}
                        required={true}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="confirmPassword"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
            <Button
              type="submit"
              variant="contained" color="success"
              sx={{
                margin: "5%",
                width: "100%",
              }}
            >
              {loading && <Loader />}Update Information
              </Button>
            </Grid>
          </form>
          <Button
              type="submit"
              variant="outlined" color="success"
              sx={{
                marginTop: "5%",
                width: "90%",
                padding: 1,
              }}>
          
            Show Previous complaints
              </Button>
        </Grid>
        <Divider orientation="vertical" flexItem={true}/>
        {/* <Grid item xs sx={{ textAlign: "center" }}>
        
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
          </div> */}
          
      {/* </Grid> */}
      </Grid>
    </div>
  );
};

export default ResidentScreen;
