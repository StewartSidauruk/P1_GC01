import axios from "axios";
import { useEffect, useState } from "react";
import MoviePreview from "./MoviePreview";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2VmYzRlN2U0NGEyNmE5OGZmYjU5OGE5MzZhM2NjNyIsIm5iZiI6MTc1MDMzNDYyMy4xNDEsInN1YiI6IjY4NTNmYzlmNGQzNzUzZGIxYzc5YjAyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xWrYvNLhg8mwxgTN1rpnUYiY8wG4cZ7fIe7bLPi4VXc";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function HeroMovieContainer() {
    const [movie, setMovie] = useState(null);
    const [genresMap, setGenresMap] = useState({});

    useEffect(() => {
        const fetchData = async () => {
        try {
            const headers = {
            Authorization: `Bearer ${ACCESS_TOKEN}`
            };

            const genreRes = await axios.get("https://api.themoviedb.org/3/genre/movie/list", { headers });
            const genreDict = {};
            genreRes.data.genres.forEach((g) => {
            genreDict[g.id] = g.name;
            });
            setGenresMap(genreDict);

            const res = await axios.get("https://api.themoviedb.org/3/trending/movie/week", { headers });
            const firstMovie = res.data.results[0];
            console.log("🎬 Preview Movie from API:", firstMovie);
            setMovie(firstMovie);
        } catch (err) {
            console.error("❌ Failed to fetch movie preview", err);
        }
        };

        fetchData();
        }, []);

    if (!movie) return null;

    return (
        <MoviePreview
            backgroundImage={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
            title={movie.title}
            subtitle="Trending Now"
            year={(movie.release_date || "").split("-")[0]}
            rating="13+"
            description={movie.overview}
            genres={movie.genre_ids.map((id) => genresMap[id]).filter(Boolean)}
        />
    );
}
