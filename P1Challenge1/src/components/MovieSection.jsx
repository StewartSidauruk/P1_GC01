import axios from "axios";
import { useEffect, useState } from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2VmYzRlN2U0NGEyNmE5OGZmYjU5OGE5MzZhM2NjNyIsIm5iZiI6MTc1MDMzNDYyMy4xNDEsInN1YiI6IjY4NTNmYzlmNGQzNzUzZGIxYzc5YjAyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xWrYvNLhg8mwxgTN1rpnUYiY8wG4cZ7fIe7bLPi4VXc";

export default function MovieSection({ title, endpoint }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3${endpoint}`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error("Error fetching movies:", err));
  }, [endpoint]);

  return (
    <section className="text-white mb-10 px-4 md:px-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button className="text-sm text-blue-400 hover:underline">View All</button>
      </div>
      <div className="flex overflow-x-scroll gap-4 scrollbar-hide pb-2">
        {movies.map((movie) => (
          <div key={movie.id}
            className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] hover:scale-105 transition-transform duration-300"
          >
            <img src={ movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "https://via.placeholder.com/200x300?text=No+Image" }
              alt={movie.title}
              className="rounded-lg w-full h-auto object-cover"
            />
            <p className="mt-1 text-sm font-medium line-clamp-1">{movie.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
