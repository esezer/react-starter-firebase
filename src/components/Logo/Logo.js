import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Logo() {
  return (
    <Box
      component={Link}
      to="/"
      justifyContent="center"
      alignItems="center"
      sx={{ display: "flex" }}
    >
      <img
        src="/logo192.png"
        style={{ width: 24, height: 24, marginRight: 3 }}
      />
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          flexGrow: 1,
          color: "#000000",
          display: { xs: "none", sm: "block" },
        }}
      >
        N'EVENTS
      </Typography>
    </Box>
  );
}
