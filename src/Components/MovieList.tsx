import MovieCard from "./MovieCard";

type Movie = {
  id: number;
  poster_path: string | null;
};

type MovieListProps = {
  title: string;
  movies: Movie[] | null;
};

const MovieList = ({ title, movies }: MovieListProps) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
