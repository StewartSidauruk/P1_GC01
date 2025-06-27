import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieSection from './components/MovieSection';
import HeroMovieContainer from "./components/HeroMovieContainer";

export default function Tv() {
  return (
    <>
        <Navbar />
            <div className="bg-[#080a14] min-h-screen pt-4 pb-10">
                <HeroMovieContainer />
                <MovieSection
                    title="Trending TV"
                    endpoint="/trending/tv/day?language=en-US"
                />
                <MovieSection
                    title="Popular TV"
                    endpoint="/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc"
                />
                <MovieSection
                    title="Top Rated TV"
                    endpoint="https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200"
                />
                <MovieSection
                    title="Animation TV Series"
                    endpoint="/discover/tv?with_genres=16&sort_by=popularity.desc&language=en-US"
                />
                <MovieSection
                    title="Comedy TV Series"
                    endpoint="/discover/tv?with_genres=35&sort_by=popularity.desc&language=en-US"
                />
                <MovieSection
                    title="Drama TV Series"
                    endpoint="/discover/tv?with_genres=18&sort_by=popularity.desc&language=en-US"
                />
                <MovieSection
                    title="Family TV Series"
                    endpoint="/discover/tv?with_genres=10751&sort_by=popularity.desc&language=en-US"
                />
                <MovieSection
                    title="Sci-Fi & Fantasy TV Series"
                    endpoint="/discover/tv?with_genres=10765&sort_by=popularity.desc&language=en-US"
                />
                <MovieSection
                    title="Action & Adventure TV Series"
                    endpoint="/discover/tv?with_genres=10759&sort_by=popularity.desc&language=en-US"
                />
            </div>
        <Footer />
    </>
  )
}
