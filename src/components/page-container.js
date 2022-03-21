import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    width: "100vw",
    minHeight: "100vh",
  },
}));

export default function PageContainer({ children }) {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="xl">
      {children}
    </Container>
  );
}
