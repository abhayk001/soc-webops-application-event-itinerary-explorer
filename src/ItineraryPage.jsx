import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import events from "./events.json"
import EventCard from "./EventCard";

export default function ItineraryPage({itinerary, setItinerary}) {
    return(
        <>
            <Typography>My Itinerary</Typography>
            <Box>
                <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "50px"}}>
                    {[...itinerary].map((eventId) => (
                        <EventCard eventId={eventId} itinerary={itinerary} setItinerary={setItinerary} />
                    ))}
                </Box>
            </Box>
        </>
    )
}