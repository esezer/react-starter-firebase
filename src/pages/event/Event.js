import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import SimpleLayout from "../../Layouts/SimpleLayout";
import ImageCollage from "../../components/ImageCollage/ImageCollage";

function Event() {
  return (
    <SimpleLayout>
      <Typography component="h1" variant="h3" marginTop={3}>
        Kaleici Old Town
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src="../../assets/images/kaleici.jpg" alt="" height={330} />
        <ImageCollage />
      </Box>
      <Box>
        <Typography component="h4" variant="h6" marginTop={4}>
          About Event
        </Typography>
        <Typography component="p" variant="paragraph" marginTop={1}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam in
          quam dicta maxime ducimus, fugiat atque voluptates velit quo provident
          quaerat vel laboriosam perferendis vero assumenda sed ipsum
          repellendus quae!
        </Typography>
      </Box>
      <Box marginBottom={9}>
        <Typography component="h4" variant="h6" marginTop={4}>
          Duration
        </Typography>
        <Typography component="p" variant="paragraph" marginTop={1}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta vero
          odit illo? Voluptatibus magni pariatur delectus exercitationem ullam
          qui! Itaque illum perferendis earum dolorem at ratione reiciendis
          tempore similique. Quam.
        </Typography>
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>Hello</BottomNavigation>
      </Paper>
    </SimpleLayout>
  );
}

export default Event;
