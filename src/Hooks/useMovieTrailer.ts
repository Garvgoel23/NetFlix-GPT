// import { useDispatch } from "react-redux";
// import { API_Options } from "../Utils/constants";
// import { addTrailerVideo } from "../Utils/moviesSlice";
// import { useEffect } from "react";

// const useMovieTrailer = (movieId: number) => {
//   const dispatch = useDispatch();
//   const getMovieVideo = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/" +
//         movieId +
//         "/videos?language=en-US",
//       API_Options,
//     );
//     const json = await data.json();
//     const filterData = json.results.filter(
//       (video: any) => video.type === "Trailer",
//     );
//     const trailer = filterData.length ? filterData[0] : json.results[0];
//     dispatch(addTrailerVideo(trailer));
//   };
//   useEffect(() => {
//     getMovieVideo();
//   }, []);
// };

// export default useMovieTrailer;
import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideo = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_Options,
        );
        const json = await data.json();

        if (!json.results) return;

        const filterData = json.results.filter(
          (video: any) => video.type === "Trailer",
        );

        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    getMovieVideo();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
