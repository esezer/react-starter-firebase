import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import EventCard from "./EventCard";
import styles from "./EventList.module.css";
import events from "../../data/data.json";
import { Link } from "react-router-dom";

function EventList() {
  return (
    <Box>
      <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
        Top Antalya Events
      </Typography>
      <Grid container spacing={5}>
        {events.map((event) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={event.id}>
              <Link to={`event/${event.id}`}>
                <EventCard event={event} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default EventList;
