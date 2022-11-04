import React from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import { getRoles } from '../actions/userRoleActions'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";

const RegisterComplaint = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState('');

  const dispatch = useDispatch()

  const Roles = useSelector(state => state.getRoles)
  const { roles } = Roles

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (!roles)
      dispatch(getRoles(['admin', 'resident']))
  }, [dispatch, roles])

  const departments = (
    <React.Fragment>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {roles && roles.map(role => <FormControlLabel value={role.slug} control={<Radio />} label={role.name} key={role._id} />)}
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  )
  const steps = [
    {
      label: "CHOOSE DEPARTMENT",
      description: departments
    },
    {
      label: "CHOOSE COMPLAINTS"
    },
    {
      label: "REGISTER COMPLAINT"
    }
  ]
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: '#c8e6c9',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  )
}

export default RegisterComplaint