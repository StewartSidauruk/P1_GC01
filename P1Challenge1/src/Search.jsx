import { useState } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FiSearch } from 'react-icons/fi';
import { useSearchMovies } from './hooks/useSearchMovies';

function search() {
    const [query, setQuery] = useState('');
    const { isLoading, error, movies } = useSearchMovies(query);
    const getCardPosition = (index) => {
        const colCount = 7;
        const pos = index % colCount;
        if (pos === 0) return 'left-0';
        if (pos === colCount - 1) return 'right-0';
        return 'left-1/2 -translate-x-1/2';
    };


    return (
        <>
            <Navbar />
            <div className="bg-[#080a14] min-h-screen pt-4 pb-10">
                <div className="flex justify-center px-8 mt-10">
                    <div className="relative w-full max-w-[93rem]">
                        <input
                            type="text"
                            placeholder="Movies, shows and more"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full h-16 bg-[#1f2233] text-gray-300 placeholder-gray-400 text-xl font-medium rounded-xl pl-16 pr-4 focus:outline-none"
                        />
                        <FiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400" />
                    </div>
                </div>
                
                <div className="w-full max-w-[97rem] mx-auto mt-8 px-8">
                    <h2 className="text-white text-2xl font-semibold mb-6">
                        {query.trim() ? '' : 'Popular Movies'}
                    </h2>

                    {isLoading && <p className="text-center text-gray-400">Loading...</p>}
                    {error && <p className="text-center text-red-400">{error}</p>}

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-6 gap-y-10 overflow-visible relative z-0">
                        {movies.map((movie, index) => (
                            <div key={movie.id} className="relative group overflow-visible">
                                <div className="flex flex-col items-start gap-2">
                                    <img src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full rounded-lg object-cover aspect-[2/3]"/>
                                    <h3 className="text-white text-base font-semibold leading-snug truncate w-full">
                                        {movie.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">{movie.release_date?.slice(0, 4) || 'Unknown Year'}</p>
                                </div>

                                <div className={`absolute top-0 ${getCardPosition(index)} w-[300px] sm:w-[360px] bg-[#1f2233] text-white rounded-xl p-4 z-10 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-4 transition-all duration-300 shadow-2xl pointer-events-none`}>
                                    <img src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg w-full h-40 object-cover mb-3"/>
                                    <h3 className="text-xl font-bold mb-2">{movie.title}</h3>

                                    <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 mb-2">
                                        + Favorite
                                    </button>

                                    <p className="text-sm text-gray-400 mb-1">{movie.release_date?.slice(0, 4) || 'Unknown Year'}</p>
                                    <p className="text-sm text-gray-300 line-clamp-3">
                                        {movie.overview || 'No description available.'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default search;
