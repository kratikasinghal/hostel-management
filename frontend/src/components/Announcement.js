import React from "react";
import { Card, CardContent, Typography, Grid,Divider,Button } from "@mui/material";
import {useSelector,useDispatch} from 'react-redux'
import Message from './Message'
import { deleteAnnouncement } from "../actions/announcementActions";

const Announcement = ({date,id,children}) => {
  const dispatch = useDispatch()
  const {userInfo} = useSelector(state => state.userLogin)
  const {success} = useSelector(state => state.deleteAnnouncement)
  const handleDeleteAnnouncement = () => {
    dispatch(deleteAnnouncement(id))
  }
  return (
    <Card sx={{ margin: "5% 3% 0 3%" }} variant="outlined" key={id}>
      {success && <Message severity="success" open={true} message="Announcement Deleted"/>}
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Typography variant="subtitle1" gutterBottom color="text.primary">
              {children}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography color="brown">
              <b>{date}</b>
            </Typography>
          </Grid>
        </Grid>
        {userInfo.userRole === 'admin' && 
          <Grid container direction="row" >
            <Divider flexItem={true}/>
              <Grid item md={6} sx={{paddingLeft: "10%"}}>
                <Button variant="contained" color="success">UPDATE</Button>
              </Grid>
              <Grid item md={6}  sx={{paddingLeft: "10%"}}>
                <Button variant="contained" color="error" onClick={handleDeleteAnnouncement}>DELETE</Button>
              </Grid>
          </Grid>}
      </CardContent>
    </Card>
  );
};

export default Announcement;
