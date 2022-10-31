import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Typography,
  TextField,
  useScrollTrigger,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "mui-image";
import logo192 from "./assets/istockphoto-687207094-612x612.jpg";
import UseMediaQuery from "./utils/useMediaQuery";
//import Message from '../components/Message'

const Signup = () => {
  const [inputs, setInputs] = useState({
    First_Name: "",
    Last_Name: "",
    email: "",
    password: "",
    Phn_no: "",
    Address: "",
    Confirmpassword: "",
  });
  const [width] = UseMediaQuery();
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);
  };
  const Item = styled(Paper)(() => ({
    textAlign: "center",
  }));
  return (
    <><div style={{ backgroundColor: "#d3ebd3", margin: 0, height: "100vh" }}>
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
              marginTop={5}
              padding={8}
              borderRadius={5}
              style={{ backgroundColor: "white",height:500 }}
              boxShadow={"5px 5px 10px #ccc"}
              sx={{
                ":hover": {
                  boxShadow: "10px 10px 20px #ccc",
                },
              }}
            >
              <Typography
                variant="h3"
                textAlign={"center"}
                padding={1}
                sx={{
                  color: "#283593",
                  fontFamily: "Arizonia",
                  marginBottom: 0,
                  marginTop: "1px",
                }}
              >
                Sign Up
              </Typography>
              <Typography
                variant="h6"
                textAlign={"center"}
                sx={{
                  color: "#283593",
                  fontFamily: "Arizonia",
                  marginTop: "0px",
                }}
              >
                Please enter your details{" "}
              </Typography>

              <Grid container spacing={1} style={{ marginTop: "10px",marginBottom:"0px" }}>
                <Grid Item xs={6}>
                  
                    <TextField
                      onChange={handleChange}
                      name="First_Name"
                      value={inputs.First_Name}
                      variant="outlined"
                      type={"text"}
                      required={true}
                      placeholder="First Name"
                    />
                  
                </Grid>
                <Grid Item xs={6}>
                  
                    <TextField
                      onChange={handleChange}
                      name="Last_Name"
                      value={inputs.Last_Name}
                      required={true}
                      variant="outlined"
                      type={"text"}
                      placeholder="Last Name"
                      sx={{ height: 100 }}
                    />
                  
                </Grid>
              </Grid>
              <TextField
                onChange={handleChange}
                name="Phn_no"
                value={inputs.Phn_no}
                marginTop="2px"
                variant="outlined"
                type={"number"}
                placeholder="Phone Number"
                required={true}
                sx={{ width: 450, height: 100 }}
              />
              <TextField
                onChange={handleChange}
                name="Address"
                value={inputs.Address}
                marginTop="2px"
                variant="outlined"
                type={"text"}
                required={true}
                placeholder="Address"
                sx={{ width: 450 }}
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
                sx={{ width: 440, height: 100 }}
              />
              <Grid container spacing={1}>
                <Grid Item xs={6}>
                  <item>
                    <TextField
                      onChange={handleChange}
                      name="password"
                      value={inputs.password}
                      required={true}
                      variant="outlined"
                      type={"password"}
                      placeholder="Password"
                    //   sx={{ width: 190, height: 100 }}
                    />
                  </item>
                </Grid>
                <Grid Item xs={6}>
                  <item>
                    <TextField
                      onChange={handleChange}
                      name="Confirmpassword"
                      value={inputs.Confirmpassword}
                      required={true}
                      variant="outlined"
                      type={"password"}
                      placeholder="ConfirmPassword"
                      sx={{ width: 190, height: 100 }}
                    />
                  </item>
                </Grid>
              </Grid>

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
                Sign Up
              </Button>
              <p className="text-center">
                <Link to="/login">Already have an account? Login</Link>
              </p>
            </Box>
          </form>
              </Grid>
              {width > 1000 && (
          <Grid Item md={6}>
            <img src={logo192} style={{ width: "100%", height: "99.4vh" }} />
          </Grid>
        )}
          </Grid>
          </div>
    </>
  );
};

export default Signup;
