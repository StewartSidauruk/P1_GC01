import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieSection from './components/MovieSection';
import HeroMovieContainer from "./components/HeroMovieContainer";

export default function Movies() {
  return (
    <>
        <Navbar />
        <div className="bg-[#080a14] min-h-screen pt-4 pb-10">
            <HeroMovieContainer />
            <MovieSection
                title="Trending Movies"
                endpoint="/trending/movie/day?language=en-US"
            />
            <MovieSection
                title="Top Rated Movies"
                endpoint="/movie/top_rated?language=en-US&page=1"
            />
            <MovieSection
                title="Upcoming Movies"
                endpoint="/movie/upcoming?language=en-US&page=1"
            />
            <MovieSection
                title="Now Playing Movies"
                endpoint="/movie/now_playing?language=en-US&page=1"
            />
            <MovieSection
                title="Animatied Movies"
                endpoint="/discover/movie?with_genres=16&sort_by=popularity.desc&language=en-US"
            />
            <MovieSection
                title="Comedy Movies"
                endpoint="/discover/movie?with_genres=35&sort_by=popularity.desc&language=en-US"
            />
            <MovieSection
                title="Drama Movies"
                endpoint="/discover/movie?with_genres=18&sort_by=popularity.desc&language=en-US"
            />
            <MovieSection
                title="Family Movies"
                endpoint="/discover/movie?with_genres=10751&sort_by=popularity.desc&language=en-US"
            />
            <MovieSection
                title="Fantasy Movies"
                endpoint="/discover/movie?with_genres=14&sort_by=popularity.desc&language=en-US"
            />
            <MovieSection
                title="Action Movies"
                endpoint="/discover/movie?with_genres=28&sort_by=popularity.desc&language=en-US"
            />
        </div>
        <Footer />
    </>
  )
}
