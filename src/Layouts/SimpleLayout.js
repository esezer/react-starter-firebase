import Container from "@mui/material/Container";

export default function SimpleLayout({ children }) {
  return <Container sx={{ marginY: 6 }}>{children}</Container>;
}
