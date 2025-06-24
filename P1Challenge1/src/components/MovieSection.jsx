import { useEffect, useRef, useState } from "react";
import { tmdbAPI } from "../api/tmdb";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieSection({ title, endpoint }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const [isHovered, setHovered] = useState(false);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    tmdbAPI
      .get(endpoint)
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch movies.");
        setLoading(false);
        console.error("Error fetching movies:", err);
      });
  }, [endpoint]);

  const scrollByX = (x) => {
    scrollRef.current.scrollBy({ left: x, behavior: "smooth" });
  };

  if (isLoading) return <p className="text-white px-4">Loading...</p>;
  if (error) return <p className="text-red-500 px-4">{error}</p>;

  return (
    <section className="relative text-white mb-10 px-4 md:px-12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setHoveredMovieId(null);
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button className="text-sm text-blue-400 hover:underline">View All</button>
      </div>

      <div className="relative">
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2">
          {movies.map((movie) => (
            <div key={movie.id}
              className="relative group min-w-[160px] sm:min-w-[180px] md:min-w-[200px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredMovieId(movie.id)}
              onMouseLeave={() => setHoveredMovieId(null)}
            >
              <img src={ movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "https://via.placeholder.com/200x300?text=No+Image"} alt={movie.title} className="w-full h-full object-cover"/>

              {hoveredMovieId === movie.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-col justify-end text-white z-10">
                  <p className="text-xs font-light mb-1">English ▾</p>
                  <h3 className="text-lg font-bold leading-snug">{movie.title}</h3>
                  <div className="text-xs font-medium opacity-90 mt-1">
                    {(movie.release_date || "----").split("-")[0]} &bull;{" "}
                    {movie.adult ? "18+" : "G"} &bull; 1h 39m &bull; 3 Languages
                  </div>
                  <p className="text-xs mt-2 opacity-80 line-clamp-4">{movie.overview}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {isHovered && (
          <div className="absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-black/80 to-transparent flex items-center justify-start z-20">
            <button
              onClick={() => scrollByX(-400)}
              className="text-white text-2xl px-2"
            >
              &#8249;
            </button>
          </div>
        )}

        {isHovered && (
          <div className="absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-black/80 to-transparent flex items-center justify-end z-20">
            <button
              onClick={() => scrollByX(400)}
              className="text-white text-2xl px-2"
            >
              &#8250;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}