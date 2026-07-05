import { Autocomplete, Box, Button, Card, CardMedia, Chip, Grid, TextField, Typography } from "@mui/material";
import events from "./events.json"
import EventCard from "./EventCard";
import { useEffect, useState } from "react";

export default function EventsPage({itinerary, setItinerary}) {
    const [filteredEvents, setFilteredEvents] = useState(Object.keys(events))
    const [selectedDays, setSelectedDays] = useState([])
    const [selectedEventTypes, setSelectedEventTypes] = useState([])
    const [uniqueDays, setUniqueDays] = useState(new Set())
    const [uniqueEventTypes, setUniqueTypes] = useState(new Set())

    const applyFilters = () => {
        let filterAppliedEvents = []
        Object.keys(events).forEach((eventId) => {
            const eventDate = new Date(events[eventId].reporting_timestamp * 1000)
            if((selectedDays.length == 0 || selectedDays.includes(eventDate.toLocaleDateString()))
                && (selectedEventTypes.length == 0 || selectedEventTypes.includes(events[eventId].type))) {
                    filterAppliedEvents.push(eventId)
            }
        })
        setFilteredEvents(filterAppliedEvents)
    }

    useEffect(() => {
        let [uDays, uTypes] = getAllUniqueDaysAndEventTypes()
        setUniqueDays(new Set([...uDays]))
        setUniqueTypes(new Set([...uTypes]))
    }, [])

    const getAllUniqueDaysAndEventTypes = () => {
        let uniqueDays = []
        let uniqueEventTypes = []
        Object.keys(events).forEach((eventId) => {
            const eventDate = new Date(events[eventId].reporting_timestamp * 1000)
            if (!uniqueDays.includes(eventDate.toLocaleDateString())) {
                uniqueDays.push(eventDate.toLocaleDateString())
            }
            if (!uniqueEventTypes.includes(events[eventId].type)) {
                uniqueEventTypes.push(events[eventId].type)
            }
        })
        return [uniqueDays, uniqueEventTypes]
    }

    return(
        <>
            <Typography>All Events</Typography>
            <Box>
                <Typography>Filters</Typography>
                <Typography>Filter By Date</Typography>
                <Autocomplete
                    multiple
                    options={[...uniqueDays]}
                    filterSelectedOptions
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                    />
                    )}
                    onChange={(event, value) => {
                        setSelectedDays(value)
                        console.log(selectedDays)
                    }}
                />
                <Typography>Filter By Event Type</Typography>
                <Autocomplete
                    multiple
                    options={[...uniqueEventTypes]}
                    filterSelectedOptions
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                    />
                    )}
                    onChange={(event, value) => {
                        setSelectedEventTypes(value)
                        console.log(selectedEventTypes)
                    }}
                />
                <Button variant="contained" onClick={applyFilters}>Apply Filters</Button>
                <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "50px"}}>
                    {(filteredEvents.length != 0)
                        ?
                        <>
                        {filteredEvents.map((eventId) => (
                            <EventCard eventId={eventId} itinerary={itinerary} setItinerary={setItinerary} />
                        ))}
                        </>
                        :
                        <Typography>No Events</Typography>
                    }
                </Box>
            </Box>
        </>
    )
}