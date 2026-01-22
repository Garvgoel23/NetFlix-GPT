import { IMG_CDN } from "../Utils/constants";

type MovieCardProps = {
  posterPath: string | null;
};

const MovieCard = ({ posterPath }: MovieCardProps) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
