import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

export default function Loading() {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      minHeight="100vh"
      justifyContent="center"
      sx={{ backgroundColor: theme.palette.primary.light }}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
}
