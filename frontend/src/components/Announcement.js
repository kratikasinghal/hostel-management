import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const Announcement = ({date,id,children}) => {
  return (
    <Card sx={{ margin: "5% 3% 0 3%" }} variant="outlined" key={id}>
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
      </CardContent>
    </Card>
  );
};

export default Announcement;
