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
            if (search) {
                const [movieRes, tvRes] = await Promise.all([
                    tmdbAPI.get('/search/movie', {
                        params: {
                            query: search,
                            include_adult: false,
                            language: 'en-US',
                            page: 1,
                        }
                    }),
                    tmdbAPI.get('/search/tv', {
                        params: {
                            query: search,
                            include_adult: false,
                            language: 'en-US',
                            page: 1,
                        }
                    })
                ]);

                const combinedResults = [
                    ...movieRes.data.results.map(item => ({ ...item, media_type: 'movie' })),
                    ...tvRes.data.results.map(item => ({ ...item, media_type: 'tv' }))
                ];

                setMovies(combinedResults.sort((a, b) => b.popularity - a.popularity));
            } else {
                const { data } = await tmdbAPI.get('/trending/all/day', {
                    params: {
                        language: 'en-US',
                        page: 1,
                    }
                });
                setMovies(data.results);
            }
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