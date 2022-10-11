import React from "react";
import EventList from "../../components/EventList/EventList";
import Banner from "../../components/Banner/Banner";
import SimpleLayout from "../../Layouts/SimpleLayout";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <>
      <Banner />
      <SimpleLayout>
        <Typography variant="paragraph" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet
          quisquam alias quo cum voluptatem, deserunt exercitationem, velit
          vitae accusamus maiores consequatur! Impedit debitis saepe assumenda
          totam obcaecati odit suscipit!
        </Typography>

        <EventList />
      </SimpleLayout>
    </>
  );
}
