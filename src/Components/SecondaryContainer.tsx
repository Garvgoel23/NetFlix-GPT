import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store: any) => store.movies);
  return (
    <div className=" bg-black">
      <div className="text-white -mt-40 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
        <MovieList title={"Trending"} movies={movies.nowPlaying} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlaying} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
