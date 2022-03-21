import * as React from "react";
import useGetPopularMovies from "./api/useGetPopularMovies";
import NavigationBar from "./components/navigation-bar";
import RoutesList from "./routes";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  div: {
    backgroundColor: "#1e2126",
  },
});

function App() {
  const classes = useStyles();
  useGetPopularMovies({ enabled: true });

  return (
    <div className={classes.div}>
      <NavigationBar />
      <RoutesList />
    </div>
  );
}
export default App;
