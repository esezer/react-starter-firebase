import { Typography } from "@mui/material";
import SimpleLayout from "../../Layouts/SimpleLayout";

export default function About() {
  return (
    <SimpleLayout>
      <Typography variant="h3" component="h1" marginBottom={5}>
        About N'Events
      </Typography>

      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        laborum libero eum asperiores officiis impedit, eveniet quam fugit,
        harum maiores facilis saepe non, voluptatum veniam nostrum? Distinctio
        aspernatur explicabo vero.
      </Typography>

      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, velit
        quos. Quae eligendi autem modi ab? Ducimus non suscipit, totam similique
        veritatis, provident, vitae dolores repudiandae eveniet quisquam eaque
        dolor!
      </Typography>

      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eos
        assumenda impedit nihil voluptatibus qui animi esse architecto eum
        minima beatae adipisci totam aspernatur aliquid tenetur autem! Eligendi,
        sed aperiam!
      </Typography>

      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        dolores, impedit nobis recusandae ex ullam laborum quod quam libero
        quis, illum tempore perspiciatis, vero saepe non fugiat voluptate
        officiis ipsam.
      </Typography>
    </SimpleLayout>
  );
}
