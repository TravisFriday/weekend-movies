import axios from "axios";
import { POPULAR_MOVIES } from "./paths";
import { useQuery } from "react-query";

// console.log(process.env.REACT_APP_API_KEY);

export async function getPopularMovies() {
  const URL = POPULAR_MOVIES;
  const response = await axios.get(URL, {
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  console.log(response);
  return response;
}

export default function useGetPopularMovies({ enabled }) {
  const q = useQuery("POPULAR_MOVIES", getPopularMovies, { enabled });
  console.log(q);
  return q;
}
