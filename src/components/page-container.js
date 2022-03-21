import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const styles = {
  container: {
    paddingTop: "2vh",
    width: "100vw",
    minHeight: "100vh",
  },
  title: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "2vh",
  },
};

export default function PageContainer({ children, title }) {
  return (
    <Container sx={{ ...styles.container }} maxWidth="xl">
      <Typography variant="h4" sx={{ ...styles.title }}>
        {title}
      </Typography>
      {children}
    </Container>
  );
}
