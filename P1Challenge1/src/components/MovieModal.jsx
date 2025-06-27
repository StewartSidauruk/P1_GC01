import { useEffect, useState } from "react";
import { tmdbAPI } from "../api/tmdb";
import { useFavorite } from "../FavoriteContext";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function MovieModal({ movie, onClose }) {
  const { toggleFavorite, isFavorite } = useFavorite();
  const isFav = isFavorite(movie.id);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const type = movie.media_type || "movie"; // default movie
    tmdbAPI.get(`/${type}/${movie.id}?language=en-US`).then((res) => {
      setDetails(res.data);
    });
  }, [movie.id]);

  if (!movie || !details) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center overflow-y-auto">
      <div className="relative bg-[#080a14] text-white w-full max-w-5xl rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-white hover:text-gray-400 z-10"
        >
          &times;
        </button>

        <div
          className="h-[400px] w-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${
              details.backdrop_path
                ? `${IMAGE_BASE_URL}${details.backdrop_path}`
                : "https://via.placeholder.com/1280x720?text=No+Image"
            })`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#080a14] via-[#080a14]/80 to-transparent"></div>
        </div>

        <div className="flex flex-col md:flex-row p-6 gap-6 -mt-28 z-20 relative">
          <img
            src={
              details.poster_path
                ? `${IMAGE_BASE_URL}${details.poster_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={details.title}
            className="w-40 md:w-52 rounded-lg shadow-lg object-cover"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{details.title}</h2>
            <div className="text-sm text-gray-300 mb-3 space-x-2">
              <span>{(details.release_date || "----").split("-")[0]}</span>
              <span>•</span>
              <span>{details.adult ? "21+" : "All Ages"}</span>
              <span>•</span>
              <span>
                {details.runtime
                  ? `${Math.floor(details.runtime / 60)}h ${
                      details.runtime % 60
                    }m`
                  : "--"}
              </span>
              <span>•</span>
              <span>{details.spoken_languages?.length || 0} Languages</span>
            </div>
            <p className="text-gray-200 text-sm mb-4 leading-relaxed">
              {details.overview || "No description available."}
            </p>

            <div className="text-sm text-white font-medium mb-4">
              <span className="mr-2">Genre:</span>
              {details.genres.map((g) => (
                <span
                  key={g.id}
                  className="bg-white/10 px-3 py-1 rounded-full mr-2 inline-block"
                >
                  {g.name}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mb-6">
              {details.spoken_languages.map((lang, idx) => (
                <button
                  key={idx}
                  className="px-4 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white font-medium"
                >
                  {lang.english_name || lang.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => toggleFavorite(details)}
              className={`px-4 py-2 rounded ${
                isFav ? "bg-red-600" : "bg-white/10"
              } hover:bg-white/20 text-white font-semibold`}
            >
              {isFav ? "Remove Favorite" : "+ Add to Favorite"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
