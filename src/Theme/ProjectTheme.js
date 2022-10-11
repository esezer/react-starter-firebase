import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
      light: grey[400],
      dark: grey[800],
      contrastText: "#fff",
    },
    secondary: {
      main: orange[500],
      light: orange[400],
      dark: orange[800],
      contrastText: "#fff",
    },
  },
});

const ProjectTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ProjectTheme;
