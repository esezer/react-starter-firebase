import styles from "./EventCard.module.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

function EventCard({ event }) {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} sx={{ maxWidth: "300px" }}>
        <img src={event.image} alt="Cover Image" className={styles.cover} />
        <Box paddingX={1}>
          <Typography component="h2" variant="subtitle1">
            {event.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{ width: 12 }} />
            <Typography component="p" variant="body2" marginLeft={0.5}>
              {event.duration}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
            <Rating
              name="event-rating"
              value={event.rating}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography component="p" variant="body2" marginLeft={0.5}>
              {event.rating}
            </Typography>
            <Typography component="p" variant="body3" marginLeft={1.5}>
              ({event.numberOfReviews} reviews)
            </Typography>
          </Box>
          <Box>
            <Typography component="h3" variant="h6" marginTop={0}>
              {event.price} €
            </Typography>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default EventCard;
