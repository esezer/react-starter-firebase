import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Banner.module.css";
import Typography from "@mui/material/Typography";

function Banner() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "15px",
    backgroundColor: alpha(theme.palette.common.white, 0.8),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.9),
    },
    marginLeft: 0,
    padding: "0 12px 0 16px",
    width: "100%",
    border: "2px solid var(--border-primary)",
    [theme.breakpoints.up("xs")]: {
      width: "90%",
      marginRight: "auto",
      marginLeft: "auto",
    },
    [theme.breakpoints.up("sm")]: {
      width: "66%",
      marginRight: "auto",
      marginLeft: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      width: "60%",
      marginRight: "auto",
      marginLeft: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <Box
      sx={{
        height: { xs: "330px", md: "510px" },
        position: "relative",
        padding: "5%",
      }}
    >
      <Box className={styles.imageContainer}>
        <img
          src="assets/images/antalya_banner.jpg"
          alt="banner"
          className={styles.image}
        />
      </Box>
      <Box className={styles.searchContainer}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Typography
          component="h1"
          marginBottom={16}
          sx={{
            typography: { xs: "h5", sm: "h3", lg: "h2" },
            color: "#fff",
            width: { xs: "100%", sm: "65%" },
            paddingTop: "6vh",
            fontWeight: { lg: 600 },
          }}
        >
          Discover places & events around Antalya
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;
