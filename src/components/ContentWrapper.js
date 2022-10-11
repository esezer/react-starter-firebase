import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

export default function ContentWrapper({ children }) {
  return (
    <StyledDiv>
      <CssBaseline />
      {children}
    </StyledDiv>
  );
}
