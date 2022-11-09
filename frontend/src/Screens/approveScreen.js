import React from 'react'
import { Card, CardContent, Typography, Grid,Button } from "@mui/material";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AdminMenu from '../components/adminMenu';

const ApproveScreen = () => {
  return (
      <div>
          <AdminMenu />
          <Grid container spacing={3} direction="row" sx={{justifyContent:"center"}}>
              <Grid item >
               <Card variant="outlined" >
                      <CardContent>
                       {/* <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >  */}
                              <Grid container spacing={2} direction="row">
                                  <Grid item>
                              <Typography variant="h5">Worker's Info</Typography><br />
                             <Typography> Profession: Electrician </Typography><br />
                             <Typography>Experience :0-2yrs </Typography><br />
                             <Typography>Referral ID: abc@gmail.com</Typography>
                                     
                                      </Grid>
                                       <Divider orientation="vertical" flexItem /> 
                                  <Grid item>
                              <Typography variant="h5">Referral's Info</Typography><br/>
                              <Typography >Name:abc</Typography><br />
                              <Typography> Address:bcd </Typography><br />
                                      </Grid>                        
       </Grid>
         
                          {/* </Box>  */}
                          <Divider orientation="horizontal" flexItem /> 
                          <Grid container spacing={.5}>
                              <Grid item xs={6}>
                              <Button
                type="submit"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#1b5e20",
                  width: "80%",
                  padding: .5,
                    color: "#e8eaf6",
                  marginLeft:"2%",
                  hover: {
                    boxShadow: "5px 5px 10px #205723",
                    backgroundColor: "#205723",
                  },
                }}
              >
                Approve
              </Button> 
                              </Grid>
                              <Grid item xs={6}>
                              <Button
                type="submit"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#c62828",
                  width: "80%",
                  padding: 0.5,
                  color: "#e8eaf6",
                  ":hover": {
                    boxShadow: "5px 5px 10px #8a1c1c",
                    backgroundColor: "#8a1c1c",
                  },
                }}
              >
                Deny
              </Button>   
                              </Grid>
                          </Grid>
                         
                      </CardContent>
                  </Card>
                  </Grid>

                  <Grid item>
                  <Card variant="outlined" >
                      <CardContent>
                       <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      > 
                              <Grid container spacing={2} direction='row'>
                                  <Grid item>
                              <Typography variant="h5">Worker's Info</Typography><br />
                             <Typography> Profession: Electrician </Typography><br />
                             <Typography>Experience :0-2yrs </Typography><br />
                             <Typography>Referral ID: abc@gmail.com</Typography>
                                     
                                      </Grid>
                                       <Divider orientation="vertical" flexItem /> 
                                  <Grid item>
                              <Typography variant="h5">Referral's Info</Typography><br/>
                              <Typography >Name:abc</Typography><br />
                              <Typography> Address:bcd </Typography><br />
                                      </Grid>                        
       </Grid>
         
                          </Box> 
                          <Grid container spacing={.5}>
                              <Grid item xs={6}>
                              <Button
                type="submit"
                sx={{
                  marginTop: "5%",
                  backgroundColor: "#1b5e20",
                  width: "80%",
                  padding: .5,
                    color: "#e8eaf6",
                  marginLeft:"2%",
                  hover: {
                    boxShadow: "5px 5px 10px #205723",
                    backgroundColor: "#205723",
                  },
                }}
              >
                Approve
              </Button> 
                              </Grid>
                              <Grid item xs={6}>
                              <Button
                type="submit"
                sx={{
                  marginTop: "5%",
                  backgroundColor: "#c62828",
                  width: "80%",
                  padding: 0.5,
                  color: "#e8eaf6",
                  ":hover": {
                    boxShadow: "5px 5px 10px #8a1c1c",
                    backgroundColor: "#8a1c1c",
                  },
                }}
              >
                Deny
              </Button>   
                              </Grid>
                          </Grid>
                         
                      </CardContent>
                      </Card>
                  </Grid>
                  </Grid>    
    </div>
  )
}

export default ApproveScreen;
