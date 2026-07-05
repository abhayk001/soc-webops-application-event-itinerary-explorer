import { AppBar, IconButton, Button, Toolbar, Typography, Avatar, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ApplicationIcon from "./assets/application-icon.svg"
import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
    <AppBar position="static">
        <Toolbar>
          <Box sx={{justifyContent: "start", alignItems: "center"}}>
            <Avatar
              alt="Event Explorer"
              src={ApplicationIcon}
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="h6">
              Event Explorer
            </Typography>
          </Box>
          <Link to="/events"><Button sx={{color: "white"}}>All Events</Button></Link>
          <Link to="/itinerary"><Button sx={{color: "white"}}>My Itinerary</Button></Link>
        </Toolbar>
      </AppBar>
    )
}