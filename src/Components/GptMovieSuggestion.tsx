import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState } from "../Utils/appStore";

const GptMovieSuggestion = () => {
  const { movieResult, movieName } = useSelector(
    (state: RootState) => state.gpt,
  );
  if (!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieName.map((movieName: string, index: number) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestion;
