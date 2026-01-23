import { useSelector } from "react-redux";
import { RootState } from "../Utils/appStore";
import lang from "../Utils/languageConstants";

const GptSearchBar: React.FC = () => {
  const selectedLang = useSelector((state: RootState) => state.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="col-span-3 m-4 bg-red-600 text-white rounded-lg"
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
