import { tmdbAPI } from "../api/tmdb";
import { useEffect, useState } from "react";
import MoviePreview from "./MoviePreview";
import './MovieSection.css';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function HeroMovieContainer() {
    const [movie, setMovie] = useState(null);
    const [genresMap, setGenresMap] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const genreRes = await tmdbAPI.get("/genre/movie/list");
                const genreDict = {};
                genreRes.data.genres.forEach((g) => {
                    genreDict[g.id] = g.name;
                });
                setGenresMap(genreDict);

                const movieRes = await tmdbAPI.get("/trending/movie/week");
                const firstMovie = movieRes.data.results[0];
                console.log("🎬 Preview Movie from API:", firstMovie);
                setMovie(firstMovie);
            } catch (err) {
                console.error("❌ Failed to fetch movie preview", err);
                setError("Failed to load trending movie.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) return <p className="text-white px-4">Loading...</p>;
    if (error) return <p className="text-red-500 px-4">{error}</p>;
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
