import Typography from "@mui/material/Typography";
import SimpleLayout from "../../Layouts/SimpleLayout";
import { useAuthContext } from "../../hooks/useAuthContext";

function Dashboard() {
  const { user } = useAuthContext();

  return (
    <SimpleLayout>
      <Typography variant="h3" component="h1" marginBottom={5}>
        Dashboard
      </Typography>
      <Typography variant="h5" component="h3">
        Hello {user.displayName}!
      </Typography>
      <Typography variant="paragraph" component="p">
        Only logged in users are allowed in this section!
      </Typography>
    </SimpleLayout>
  );
}

export default Dashboard;
