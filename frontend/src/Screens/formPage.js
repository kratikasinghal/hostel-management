import React from 'react'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Box, Typography, Select, MenuItem,Button } from '@mui/material';
import { useState,useEffect } from "react";
const FormPage = () => {
    const [name, setName] = React.useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }
        const [experience, setExperience] = React.useState('');
  const handle = (event) => {
    setExperience(event.target.value);
    }
    const [inputs, setInputs] = useState({
        email: "",
    })
  return (
      <div>
          <Box
              display="flex"
              flexDirection={"column"}
              maxWidth={400}
              alignItems="center"
              justifyContent={"center"}
              margin="auto"
              marginTop={10}
              padding={10}
              borderRadius={5}
              style={{ backgroundColor: "white" }}
              boxShadow={"5px 5px 10px #ccc"}
              sx={{
                ":hover": {
                  boxShadow: "10px 10px 20px #ccc",
                },
              }}>
              <Typography textAlign={"center"}
                  padding={2}
                  variant="h3"
                sx={{
                  color: "#283593",
                  fontFamily: "Arizonia",
                  marginBottom: 0,
                  marginTop: "2px",
                }} >Enter Your Details</Typography>
        <FormControl sx={{ width: "99%", marginTop: "1%" }}
                variant="outlined">
        <InputLabel htmlFor="profession">Profession</InputLabel>
        <OutlinedInput
          id="profession"
          value={name}
          onChange={handleChange}
          label="profession"
        />
              </FormControl>
              <FormControl sx={{ width: "99%", marginTop: "2%" }} variant="outlined">
                  <InputLabel htmlFor="Experience">Experience</InputLabel>
                  <Select
    labelId="experience"
    id="experience"
    value={experience}
    label="Experience"
    onChange={handle}
  >
    <MenuItem value={10}>0-2yrs</MenuItem>
    <MenuItem value={20}>2-5yrs</MenuItem>
    <MenuItem value={30}>More than 5yrs</MenuItem>
  </Select>
              </FormControl>
              <FormControl sx={{ width: "99%", marginTop: "2%" }} variant="outlined">
                  <InputLabel htmlFor="Referral">Referral ID</InputLabel>
                  <OutlinedInput
                  id="email"
                  value={inputs.email}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "email" }}
                  label="email"
                  name="email"
                  />
                  <Button
                type="submit"
                sx={{
                  marginTop: "3%",
                  backgroundColor: "#1b5e20",
                  width: "97%",
                  padding: 1,
                  color: "#e8eaf6",
                  ":hover": {
                    boxShadow: "5px 5px 10px #388e3c",
                    backgroundColor: "#388e3c",
                  },
                }}
              >
                Submit
              </Button>
                  </FormControl>
              </Box>
    </div>
  )
}

export default FormPage;
