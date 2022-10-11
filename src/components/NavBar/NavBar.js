import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import UserMenu from "./UserMenu";
import SideBar from "../SideBar/SideBar";

const menuItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "about" },
  { label: "Events", url: "events" },
];

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});

export default function NavBar({ window }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 0 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Logo />
            <Box
              sx={{ display: { xs: "none", sm: "flex", flexGrow: 1 } }}
              justifyContent="center"
            >
              {menuItems.map((item) => (
                <Button component={Link} key={item.label} to={item.url}>
                  {item.label}
                </Button>
              ))}
            </Box>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography> */}
            <UserMenu />
          </Toolbar>
        </AppBar>
        <SideBar
          drawerOpen={drawerOpen}
          handleDrawerToggle={handleDrawerToggle}
          menuItems={menuItems}
        />
      </Box>
    </ThemeProvider>
  );
}
