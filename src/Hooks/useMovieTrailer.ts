import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
      const dispatch = useDispatch();
    const getMovieVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId +
        "/videos?language=en-US",
        API_Options,
      );
      const json = await data.json();
      console.log(json);
      const filterData = json.results.filter(
        (video: any) => video.type === "Trailer",
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      getMovieVideo();
    }, []);
  };
};
export default useMovieTrailer;
