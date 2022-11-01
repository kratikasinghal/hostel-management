import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  FormHelperText,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logo192 from "../assets/complaintLogo.jpg";
import UseMediaQuery from "../utils/useMediaQuery";
//import Message from '../components/Message'

const SignUpScreen = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false
  });
  const [width] = UseMediaQuery();

  const handleClickShowPassword = () => {
    setInputs({
      ...inputs,
      showPassword: !inputs.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setInputs({
      ...inputs,
      showConfirmPassword: !inputs.showConfirmPassword,
    });
  };

  const handleChange = e => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();

    console.log(inputs);
  };
  return (
    <>
      <div style={{ backgroundColor: "#d3ebd3", margin: 0, height: "100vh" }}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                flexDirection={"column"}
                maxWidth={440}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
                marginTop={4}
                padding={5}
                borderRadius={5}
                style={{ backgroundColor: "white", height: 500 }}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{
                  ":hover": {
                    boxShadow: "10px 10px 20px #ccc",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  textAlign={"center"}
                  padding={1}
                  sx={{
                    color: "#283593",
                    fontFamily: "Arizonia",
                    marginTop: "1px",
                  }}
                >
                  SIGN UP
                </Typography>
                <Grid container spacing={1} sx={{ marginTop: "1%" }}>
                  <Grid item md={6}>
                    <FormControl sx={{ width: 210 }} variant="outlined">
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <OutlinedInput id="firstName" value={inputs.firstName} onChange={handleChange} inputProps={{'aria-label': 'firstName',}} label="firstName" name="firstName"/>
                    </FormControl>
                  </Grid>
                  <Grid item md={6}>
                  <FormControl sx={{ width: 210 }} variant="outlined">
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <OutlinedInput id="lastName" value={inputs.lastName} onChange={handleChange} inputProps={{'aria-label': 'lastName',}} label="lastName" name="lastName"/>
                    </FormControl>
                  </Grid>
                </Grid>
                <FormControl sx={{ width: "99%", marginTop: "1%"}} variant="outlined">
                                <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                                <OutlinedInput id="phoneNumber" value={inputs.phoneNumber} onChange={handleChange} inputProps={{'aria-label': 'phoneNumber',}} label="phoneNumber" name="phoneNumber"/>
                    </FormControl>
                    <FormControl sx={{ width: "99%", marginTop: "1%"}} variant="outlined">
                                <InputLabel htmlFor="address">Address</InputLabel>
                                <OutlinedInput id="address" value={inputs.address} onChange={handleChange} inputProps={{'aria-label': 'address',}} label="address" name="address"/>
                    </FormControl>

                    <FormControl sx={{ width: "99%", marginTop: "1%"}} variant="outlined">
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <OutlinedInput id="email" value={inputs.email} onChange={handleChange} inputProps={{'aria-label': 'email',}} label="email" name="email"/>
                    </FormControl>
                <Grid container spacing={1} sx={{ marginTop: "1%" }}>
                  <Grid item md={6}>
                    <FormControl sx={{ width: 215 }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={inputs.showPassword ? "text" : "password"}
                        onChange={handleChange}
                        name="password"
                        value={inputs.password}
                        required={true}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {inputs.showPassword ? (
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
                    <FormControl sx={{ width: 215 }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-Confirmpassword">
                        Confirm Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-Confirmpassword"
                        type={inputs.showConfirmPassword ? "text" : "password"}
                        onChange={handleChange}
                        name="confirmPassword"
                        value={inputs.confirmPassword}
                        required={true}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              edge="end"
                            >
                              {inputs.showPassword ? (
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
                </Grid>
                <Button
                  type="submit"
                  variant="contained" color="success" sx ={{width:"99%", marginTop: "2%"}}
                >
                  SIGN UP
                </Button>
                <p className="text-center" color="success">
                  <Link to="/login">Already have an account? Login</Link>
                </p>
              </Box>
            </form>
          </Grid>
          {width > 1000 && (
            <Grid item md={6}>
              <img
                src={logo192}
                alt="logo"
                style={{ width: "100%", height: "99.4vh" }}
              />
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
};

export default SignUpScreen;
