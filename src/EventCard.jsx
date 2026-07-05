import { Box, Button, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import ScheduleIcon from '@mui/icons-material/Schedule';
import PlaceIcon from '@mui/icons-material/Place';
import { useEffect, useState } from "react";
import events from "./events.json"


export default function EventCard({eventId, itinerary, setItinerary}) {
    const [localTime, setLocalTime] = useState("")
    
    useEffect(() => {
        const timestamp = new Date(events[eventId]?.reporting_timestamp * 1000)
        setLocalTime(timestamp.toLocaleString())
    }, [])

    const addToItinerary = (id) => {
        let tempSet = new Set(itinerary)
        tempSet.add(id)
        setItinerary(tempSet)
    }

    const removeFromItinerary = (id) => {
        let tempSet = new Set(itinerary)
        tempSet.delete(id)
        setItinerary(tempSet)
    }

    return(
        <Card sx={{maxWidth: 200}}>
            <CardMedia
                component="img"
                image={events[eventId].poster}
                alt={events[eventId]?.alternativeText | "Event Image"}
            >
            </CardMedia>
            <CardContent sx={{display: "flex", flexDirection: "column", rowGap: "10px", alignItems: "center"}}>
                <Typography>{events[eventId].title}</Typography>
                <div style={{"display": "flex", gap: "10px", alignSelf: "start"}}>
                    <ScheduleIcon />
                    <Typography>{localTime}</Typography>
                </div>
                <div style={{"display": "flex", gap: "10px", alignSelf: "start"}}>
                    <PlaceIcon />
                    <Typography>{events[eventId]?.venue}</Typography>
                </div>
                <Chip label={events[eventId].type} variant="outlined" />
                {
                (itinerary instanceof Set && itinerary.has(eventId))?
                <>
                    <Typography variant="button">Added to Itinerary</Typography>
                    <Button variant="contained" size="small" onClick={() => removeFromItinerary(eventId)}>Remove from Itinerary</Button>
                </>
                :
                <Button variant="contained" size="small" onClick={() => addToItinerary(eventId)}>Add to Itinerary</Button>
                }
            </CardContent>
        </Card>
    )
}