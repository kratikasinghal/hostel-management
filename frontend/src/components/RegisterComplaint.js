import React from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { FormControl, RadioGroup, Radio, FormControlLabel, FormGroup,Checkbox,TextField } from '@mui/material'
import { getRoles } from '../actions/userRoleActions'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { getAllServices } from '../actions/servicesActions';

const RegisterComplaint = () => {
  const theme = useTheme();
  const [value, setValue] = useState('');

  const dispatch = useDispatch()

  const Roles = useSelector(state => state.getRoles)
  const { roles } = Roles

  const Services = useSelector(state => state.getAllServices)
  const {services} = Services

  const [servicesChecked, setServicesChecked] = useState([])
  
  const handleChecked = (event,key) => {
    if(event.target.checked){
        setServicesChecked(prevState => [...prevState,key])
    }else if(!event.target.checked){
      setServicesChecked(prevstate => prevstate.filter(s => s !== key))
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  useEffect(() => {
    if (!roles)
      dispatch(getRoles(['admin', 'resident']))
    if(value !== ''){
      dispatch(getAllServices([value]))
      setServicesChecked([])
    }
  }, [dispatch, roles,value])

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

    const [other,setOther] = useState(false)
    const [custom,setCustom] = useState("")
    const handleOther = () => {
      setServicesChecked([])
      setOther(prev => !prev)
    }
  const service = (
    <React.Fragment>
      <FormControl>
        <FormGroup>
          {!other && services && services.map(s => <FormControlLabel label={s.description} key={s.slug}  control ={<Checkbox value={s.slug}  />} onChange={e => handleChecked(e,s.slug)}/>)}
          <FormControlLabel label="Other" key="other" control= {<Checkbox value="other" checked={other} onChange={handleOther}/>} />
          {other && <TextField value={custom} onChange={e => setCustom(e.target.value)} rows={2}></TextField>}
        </FormGroup>
      </FormControl>
    </React.Fragment>
  )

  const register = (
    <React.Fragment>

    </React.Fragment>
  )
  const steps = [
    {
      label: "CHOOSE DEPARTMENT",
      description: departments
    },
    {
      label: "CHOOSE COMPLAINTS",
      description: service
    },
    {
      label: "REGISTER COMPLAINT",
      description: register
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
      <Box sx={{ height: 330 , maxWidth: 400, width: '100%', p: 2 }}>
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