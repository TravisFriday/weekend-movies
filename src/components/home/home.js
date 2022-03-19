import React from "react";
import useGetPopularMovies, {
  getPopularMovies,
} from "../../api/useGetPopularMovies";
// import { QueryCache } from "react-query";

const Home = () => {
  const query = useGetPopularMovies({ enabled: true });
  // const query = getPopularMovies();

  console.log(query);
  const { status, data, error } = query;
  //   console.log(data.data.results);
  const displayData = (data) => {
    const json = data.map((d) => d);
    console.log(JSON.stringify(json, null, 2));
    return JSON.stringify(json, null, 2);
  };

  return (
    <div>
      Hellooooo
      {status === "success" ? (
        <div>
          <pre>{displayData(data.data.results)}</pre>
        </div>
      ) : (
        "fetching..."
      )}
    </div>
  );
};

export default Home;
