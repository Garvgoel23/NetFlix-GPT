// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { API_Options } from "../Utils/constants";
// import { addNowPlaying } from "../Utils/moviesSlice";

// const useNowPlaying = () => {
//   // Implementation for fetching and returning now playing movies
//   const dispatch = useDispatch();
//   const getNowplaying = async () => {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/movie/now_playing?page=1`,
//       API_Options,
//     );
//     const json = await data.json();
//     console.log(json.results);
//     dispatch(addNowPlaying(json.results));
//   };
//   useEffect(() => {
//     getNowplaying();
//   }, []);
// };

// export default useNowPlaying;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addNowPlaying } from "../Utils/moviesSlice";
import { RootState } from "../Utils/appStore";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movies.nowPlaying,
  );

  useEffect(() => {
    const getNowplaying = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_Options,
        );
        const json = await data.json();
        dispatch(addNowPlaying(json.results));
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };
    if (!nowPlayingMovies) {
      getNowplaying();
    }
  }, [dispatch, nowPlayingMovies]);
};

export default useNowPlaying;
