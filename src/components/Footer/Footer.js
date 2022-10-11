import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const StyledHeader = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: 15,
  fontWeight: 500,
}));

const Panel = styled(Grid)(({ theme }) => ({
  color: "#fff",
  fontSize: "18px",
  lineHeight: 1.5,
  marginRight: "auto",
  marginLeft: "auto",
  paddingTop: "16px",

  "& ul": {
    listStyle: "none",
    margin: 0,
    padding: 12,

    "& li": {
      padding: 3,
    },
    "& a": {
      color: "#fff",
      fontSize: "0.9rem",

      "&:hover": {
        //color: theme.palette.primary.main,
        textDecoration: "underline",
      },
    },
  },
}));

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "tr-TR",
    name: "Türkçe",
  },
];

function Footer(props) {
  const CurrentYear = () => {
    return (
      <Typography
        color="primaryContrast"
        variant="caption"
        sx={{ paddingLeft: "9px" }}
      >
        © {new Date().getFullYear()}
      </Typography>
    );
  };

  return (
    <Box
      component="footer"
      sx={{ position: "relative", backgroundColor: "#675889", flexGrow: 0 }}
    >
      <Container maxWidth="lg">
        <Panel container spacing={0} item xs={12}>
          <Grid item xs></Grid>
          <Grid item xs={12} sm={4} md={3}>
            <ul>
              <li>
                <StyledHeader variant="caption">Menu-1</StyledHeader>
              </li>
              <li>
                <Link to="/">Link-1</Link>
              </li>
              <li>
                <Link to="/">Link-2</Link>
              </li>
              <li>
                <Link to="/">Link-3</Link>
              </li>
              <li>
                <Link to="/">Link-4</Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <ul>
              <li>
                <StyledHeader variant="caption">Support</StyledHeader>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/">Link-2</Link>
              </li>
              <li>
                <Link to="/">Link-3</Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <ul>
              <li>
                <StyledHeader variant="caption">Follow</StyledHeader>
              </li>
              <li>
                <a href="" target="_blank" className="ga-social-media-button">
                  YouTube
                </a>
              </li>
              <li>
                <a href="" target="_blank" className="ga-social-media-button">
                  Twitter
                </a>
              </li>
              <li>
                <a href="" target="_blank" className="ga-social-media-button">
                  Facebook
                </a>
              </li>
              <li>
                <a href="" target="_blank" className="ga-social-media-button">
                  Instagram
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs></Grid>
        </Panel>

        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Logo height={24} />

          <CurrentYear />
        </Grid>
      </Container>
    </Box>
  );
}

export default memo(Footer);
