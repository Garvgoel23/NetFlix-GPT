import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addNowPlaying } from "../Utils/moviesSlice";

const useNowPlaying = () => {
  // Implementation for fetching and returning now playing movies
  const dispatch = useDispatch();
  const getNowplaying = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=1`,
      API_Options,
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlaying(json.results));
  };
  useEffect(() => {
    getNowplaying();
  }, []);
};

export default useNowPlaying;
