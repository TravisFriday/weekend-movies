import axios from "axios";
import { POPULAR_MOVIES } from "./paths";
import { useQuery } from "react-query";

export async function getPopularMovies() {
  const URL = POPULAR_MOVIES;
  const response = await axios.get(URL, {
    params: { api_key: process.env.REACT_APP_API_KEY },
  });
  return response;
}
export default function useGetPopularMovies({ enabled }) {
  return useQuery("POPULAR_MOVIES", getPopularMovies, { enabled });
}
