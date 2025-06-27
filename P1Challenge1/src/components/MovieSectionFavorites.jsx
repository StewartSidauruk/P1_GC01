import { useState } from "react";
import MovieModal from "./MovieModal";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieSectionFavorites({ title, movies }) {
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <section className="relative text-white mb-10 px-4 md:px-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative group min-w-[160px] sm:min-w-[180px] md:min-w-[200px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredMovieId(movie.id)}
              onMouseLeave={() => setHoveredMovieId(null)}
              onClick={() =>
                setSelectedMovie({
                  ...movie,
                  media_type:
                    movie.media_type || (movie.first_air_date ? "tv" : "movie"),
                })
              }
            >
              <img
                src={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${movie.poster_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={movie.title || movie.name}
                className="w-full h-full object-cover"
              />

              {hoveredMovieId === movie.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-col justify-end text-white z-10">
                  <p className="text-xs font-light mb-1">English ▾</p>
                  <h3 className="text-lg font-bold leading-snug">
                    {movie.title || movie.name}
                  </h3>
                  <div className="text-xs font-medium opacity-90 mt-1">
                    {
                      (
                        movie.release_date ||
                        movie.first_air_date ||
                        "----"
                      ).split("-")[0]
                    }{" "}
                    &bull; {movie.adult ? "18+" : "G"} &bull; ?h ?m &bull; 1+
                    Languages
                  </div>
                  <p className="text-xs mt-2 opacity-80 line-clamp-4">
                    {movie.overview}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </section>
  );
}