import React from 'react'
import AdminMenu from '../components/adminMenu'
import { Grid, Typography } from '@mui/material'
import Announcement from '../components/Announcement'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllAnnouncements } from '../actions/announcementActions'
const AnnouncementScreen = () => {
    const Announcements = useSelector(state => state.getAllAnnouncements)
    const { announcements } = Announcements

    const dispatch = useDispatch()

    useEffect(() => {
        if (!announcements) {
            dispatch(getAllAnnouncements())
        }
    }, [announcements, dispatch])
    return (
        <div>
            <AdminMenu />
            <Grid container component="main" sx={{ flexGrow: 1, p: 3, width: { sm: 'calc(100% - 240px)' }, margin: "0 0 0 17%" }}>
                <Grid item xs={6}>
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
                        ANNOUNCEMENTS
                    </Typography>
                    {announcements && announcements.map(announcement => <Announcement date={announcement.date.split("T")[0]} key={announcement._id} id={announcement._id}>{announcement.description}</Announcement>)}
                </Grid>
            </Grid>
        </div>
    )
}

export default AnnouncementScreen