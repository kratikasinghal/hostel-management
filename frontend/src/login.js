import React from 'react'
import { styled } from '@mui/material/styles';
import {Box,Button,Typography,TextField, useScrollTrigger } from "@mui/material";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { shadows } from '@mui/system';
const Login = () => {
    const[inputs, setInputs]=useState({
        email:"",password:"",
    });
    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
       }
       const Item = styled(Paper)(() => ({
        textAlign: 'center',
      }));
  return (
    <div style={{backgroundImage:"url(istockphoto-687207094-612x612.jpg)",backgroundRepeat:"no-repeat" ,backgroundSize:"cover",width:1500}}>
    <Grid container>
    <Grid Item md={6}>
    <form onSubmit={handleSubmit} >
  <Box display="flex" flexDirection={ "column"} maxWidth={400} alignItems="center" justifyContent={"center"}
  margin="auto" marginTop={5} padding={10} borderRadius={5} style={{backgroundColor:"#d0e7b7"}}
  boxShadow={"5px 5px 10px #ccc"}
  sx={{":hover":{
    boxShadow:"10px 10px 20px #ccc",
  },}}>
    
    <Typography variant="h3" textAlign={"center"} padding={2} sx={{color:"#283593",fontFamily:"Arizonia",marginBottom:0, marginTop:'2px'}}>Welcome Back</Typography>
   <Typography variant ="h6" textAlign={"center"} sx={{color:"#283593",fontFamily:"Arizonia" ,marginTop:0}}>Please enter your details </Typography> 
   

   <TextField 
    onChange={handleChange}
   name="email"
   value={inputs.email}
  
   variant="outlined"
    type={"email"} 
    placeholder="Email"
     margin="normal" 
     sx={{width:300}}/>

   <TextField 
   onChange={handleChange}
   name="password"
   value={inputs.password}
   
   variant="outlined" 
   type={"password"} 
   placeholder="Password" 
   sx={{width:300,height:100}} />


    <Button type="submit" sx={{margin:"5px",backgroundColor:"#1b5e20", width:300, padding:1,color:"#e8eaf6",":hover":{
        boxShadow:"5px 5px 10px #388e3c", backgroundColor:"#388e3c",
        
    },}}>Login</Button>
    <Grid container style={{marginTop:'0px',border:'0px',boxShadow:0}} sx={{boxShadow:0}}>
        <Grid item xs={6}></Grid>
            <Grid item xs={6} sx={{boxShadow:0}}>
            <item>
                
                <Link to="/forgotpass">
                    forgot Password?
                </Link>
                
            </item>
           
        </Grid>

    </Grid >
     
            <p className="text-left">
        <Link to="/signup">
            Don't have an account? Signup
        </Link>
    </p>
            
    
  </Box>
  </form>
    </Grid>
</Grid>
</div>
)
}

export default Login


