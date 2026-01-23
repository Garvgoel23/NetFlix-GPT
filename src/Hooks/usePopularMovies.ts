// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { API_Options } from "../Utils/constants";
// import { addPopularMovies } from "../Utils/moviesSlice";

// const usePopularMovies = () => {
//   // Implementation for fetching and returning now playing movies
//   const dispatch = useDispatch();
//   const getPopularMovies = async () => {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/movie/popular?page=1`,
//       API_Options,
//     );
//     const json = await data.json();
//     console.log(json.results);
//     dispatch(addPopularMovies(json.results));
//   };
//   useEffect(() => {
//     getPopularMovies();
//   }, []);
// };

// export default usePopularMovies;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addPopularMovies } from "../Utils/moviesSlice";
import { RootState } from "../Utils/appStore";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  // Optimization: Check if popular movies already exist in the store
  const popularMovies = useSelector(
    (store: RootState) => store.movies.nowPlaying,
  );

  useEffect(() => {
    // Move function inside useEffect to fix dependency issues
    const getPopularMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          API_Options,
        );
        const json = await data.json();

        if (json.results) {
          dispatch(addPopularMovies(json.results));
        }
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
      }
    };

    if (!popularMovies) {
      getPopularMovies();
    }
  }, [dispatch, popularMovies]);
};

export default usePopularMovies;
