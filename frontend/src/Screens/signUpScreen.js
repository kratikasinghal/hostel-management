import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  IconButton,InputAdornment
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//import logo192 from "./assets/istockphoto-687207094-612x612.jpg";
//import UseMediaQuery from "./utils/useMediaQuery";
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
    showPassword: false
  });
  //const [width] = UseMediaQuery();

  const handleClickShowPassword = () => {
    setInputs({
      ...inputs,
      showPassword: !inputs.showPassword,
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
                <Grid
                  container
                  spacing={1}
                  sx={{ marginTop: "1"}}
                >
                  <Grid item md={6}>
                    <TextField
                      onChange={handleChange}
                      name="firstName"
                      value={inputs.firstName}
                      variant="outlined"
                      type={"text"}
                      required={true}
                      placeholder="First Name"
                      sx={{ width: 215}}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      onChange={handleChange}
                      name="lastName"
                      value={inputs.lastName}
                      required={true}
                      variant="outlined"
                      type={"text"}
                      placeholder="Last Name"
                      sx={{ width: 215}}
                    />
                  </Grid>
                </Grid>
                <TextField
                  onChange={handleChange}
                  name="phoneNumber"
                  value={inputs.phoneNumber}
                  variant="outlined"
                  type={"number"}
                  placeholder="Phone Number"
                  required={true}
                  sx={{ width: 440, marginTop: 1}}
                />
                <TextField
                  onChange={handleChange}
                  name="address"
                  value={inputs.address}
                  variant="outlined"
                  type={"text"}
                  required={true}
                  placeholder="Address"
                  sx={{ width: 440, marginTop: 1}}
                />

                <TextField
                  onChange={handleChange}
                  name="email"
                  value={inputs.email}
                  marginTop="0px"
                  variant="outlined"
                  type={"email"}
                  required={true}
                  placeholder="Email"
                  sx={{ width: 440, marginTop: 1}}
                />
                <Grid container spacing={1} sx={{ marginTop: 1}}>
                  <Grid item md={6}>
                      <TextField
                        onChange={handleChange}
                        name="password"
                        value={inputs.password}
                        required={true}
                        variant="outlined"
                        type={inputs.showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        sx={{ width: 215}}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {inputs.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                  </Grid>
                  <Grid item md={6}>
                      <TextField
                        onChange={handleChange}
                        name="confirmPassword"
                        value={inputs.confirmPassword}
                        required={true}
                        variant="outlined"
                        type={inputs.showPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        sx={{ width: 215}}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {inputs.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  sx={{
                    margin: "2",
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
                  SIGN UP
                </Button>
                <p className="text-center" color="success">
                  <Link to="/login">Already have an account? Login</Link>
                </p>
              </Box>
            </form>
          </Grid>
          {/* {width > 1000 && (
          <Grid Item md={6}>
            <img src={logo192} style={{ width: "100%", height: "99.4vh" }} />
          </Grid>
        )} */}
        </Grid>
      </div>
    </>
  );
};

export default SignUpScreen;
