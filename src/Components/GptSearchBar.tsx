import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Utils/appStore";
import lang from "../Utils/languageConstants";
import { useRef } from "react";
import getGeminiResponse from "./gemini";
import { API_Options } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/gptSlice";

const GptSearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLang = useSelector((state: RootState) => state.config.lang);
  const searchText = useRef<HTMLInputElement | null>(null);

  const searchMovieTMDB = async (movie: any) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options,
    );
    const json = await response.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const userValue = searchText?.current?.value;
    if (!userValue) return;

    const gptQuery =
      "act as a movie recommendation engine and recommend only 5 movies based on the user's query: " +
      userValue +
      ". only respond with the movie titles separated by commas and only give 5 titles.";
    const data = await getGeminiResponse(gptQuery);
    const gptMovies = data?.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieName: gptMovies, movieResult: tmdbResults }),
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          key={selectedLang}
          type="text"
          className="col-span-9 p-4 m-4 text-black"
          placeholder="what will you like to watch today?"
        />
        <button
          type="submit"
          className="col-span-3 m-4 bg-red-600 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
