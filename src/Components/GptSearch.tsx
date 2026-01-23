import { BgLogo } from "../Utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BgLogo}
          alt="Background"
          className="w-screen h-screen object-cover"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
export default GptSearch;
