import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addPopularMovies } from "../Utils/moviesSlice";

const usePopularMovies = () => {
  // Implementation for fetching and returning now playing movies
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=1`,
      API_Options,
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
