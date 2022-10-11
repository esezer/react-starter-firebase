import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";

export default function SideBar({ drawerOpen, handleDrawerToggle, menuItems }) {
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
      <Box
        sx={{ width: 240 }}
        role="presentation"
        onClick={handleDrawerToggle}
        onKeyDown={handleDrawerToggle}
      >
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={item.url}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}

          <ListItem disablePadding>
            <ListItemButton component={Link} to="contact">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Drawer>
  );
}
