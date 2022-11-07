import React from 'react'
import { Grid, Divider, Typography } from '@mui/material'
import Header from '../components/header'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import ComplaintsWorker from '../components/complaintsWorker.js'
import { getComplaintsWorker } from '../actions/complaintActions.js';
import Loader from '../components/Loader.js'

const WorkerScreen = () => {
    const { loading, complaints } = useSelector(state => state.getComplaintsWorker)

    const dispatch = useDispatch()
    let complaintsPending, complaintsSolved
    useEffect(() => {
        if (!complaints)
            dispatch(getComplaintsWorker(['Assigned', 'Solved']))
    }, [])

    if (complaints) {
        complaintsPending = complaints.filter(complaint => complaint.status === 'Assigned')
        complaintsSolved = complaints.filter(complaint => complaint.status === 'Solved')
    }

    return (
        <div>
            <Header />
            <Grid container marginTop={8.5}>
                <Grid item md={6}>
                    <Typography
                        variant="h5"
                        textAlign={"center"}
                        padding={1}
                        sx={{
                            color: "#283593",
                            fontFamily: "Arizonia",
                            marginBottom: 0,
                            marginTop: "1px",
                        }}
                    >
                        PENDING COMPLAINTS
                    </Typography>
                    {loading && <Loader />}
                    {complaintsPending && complaintsPending.map(complaint => <ComplaintsWorker complaintData={complaint} key={complaint.id} />)}
                </Grid>
                <Divider orientation="vertical" flexItem={true} sx={{ height: "100vh" }} />
                <Grid item md={5}>
                    <Typography
                        variant="h5"
                        textAlign={"center"}
                        padding={1}
                        sx={{
                            color: "#283593",
                            fontFamily: "Arizonia",
                            marginBottom: 0,
                            marginTop: "1px",
                        }}
                    >
                        SOLVED COMPLAINTS
                    </Typography>
                    {loading && <Loader />}
                    {complaintsSolved && complaintsSolved.map(complaint => <ComplaintsWorker complaintData={complaint} key={complaint.id} />)}
                </Grid>
            </Grid>
        </div>
    )
}

export default WorkerScreen