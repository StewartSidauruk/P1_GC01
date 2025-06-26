import { useEffect, useState } from 'react';
import { tmdbAPI } from '../api/tmdb';

export function useSearchMovies(search) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchMovies() {
        setLoading(true);
        setError(null);
        try {
            const { data } = await tmdbAPI({
                url: search ? '/search/movie' : '/trending/movie/day?language=en-US',
                method: 'GET',
                params: search
                ? {
                    query: search,
                    include_adult: false,
                    language: 'en-US',
                    page: 1,
                    }
                : {
                    language: 'en-US',
                    page: 1,
                    },
            });
            setMovies(data.results);
        } catch (err) {
            setError('Something went wrong...');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const handler = setTimeout(() => {
        fetchMovies();
    }, 500);
        return () => clearTimeout(handler);
    }, [search]);

    return { isLoading, error, movies };
}