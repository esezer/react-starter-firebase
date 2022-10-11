import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="primary"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!user && (
          <MenuItem component={Link} to="login" onClick={handleClose}>
            Login
          </MenuItem>
        )}
        {!user && (
          <MenuItem component={Link} to="signup" onClick={handleClose}>
            Sign Up
          </MenuItem>
        )}
        {user && (
          <MenuItem component={Link} to="dashboard" onClick={handleClose}>
            Dashboard
          </MenuItem>
        )}
        {user && (
          <MenuItem onClick={handleLogout} disabled={isPending}>
            Logout
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}

export default UserMenu;
