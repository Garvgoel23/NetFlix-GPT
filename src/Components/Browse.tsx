import Header from "./Header";
import useNowPlaying from "../Hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlaying();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
