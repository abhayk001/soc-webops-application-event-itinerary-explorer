import { useState } from 'react'
import './App.css'
import { AppBar, IconButton, Button, Toolbar, Typography, Avatar, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ApplicationIcon from "./assets/application-icon.svg"
import TopBar from './TopBar';
import EventsPage from './EventsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItineraryPage from './ItineraryPage';

function App() {
  
  const [itinerary, setItinerary] = useState(new Set())

  return (
    <>
      <BrowserRouter>
        <TopBar />
          <Routes>
            <Route path='/' element={<EventsPage itinerary={itinerary} setItinerary={setItinerary} />} />
            <Route path='/events' element={<EventsPage itinerary={itinerary} setItinerary={setItinerary} />} />
            <Route path='/itinerary' element={<ItineraryPage itinerary={itinerary} setItinerary={setItinerary} />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
