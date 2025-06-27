import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieSection from './components/MovieSection';
import BrandSection from './components/BrandSection';
import HeroMovieContainer from "./components/HeroMovieContainer";
import { useState } from 'react';


const brandCompanyMap = {
  "Disney": 2,
  "Pixar": 3,
  "Marvel": 420,
  "Star Wars": 1,
  "Nat Geo": 7521,
  "Star": 21,
};

function App() {
  const [activeBrand, setActiveBrand] = useState(null);

  return (
    <>
      <Navbar />
      <div className="bg-[#080a14] min-h-screen pt-4 pb-10">
        <HeroMovieContainer />
        <BrandSection onBrandClick={setActiveBrand} />

        {activeBrand && (
          <>
            <MovieSection
              title={`${activeBrand} Movies`}
              endpoint={`/discover/movie?with_companies=${brandCompanyMap[activeBrand]}&sort_by=popularity.desc&language=en-US`}
            />
            <MovieSection
              title={`${activeBrand} TV Shows`}
              endpoint={`/discover/tv?with_companies=${brandCompanyMap[activeBrand]}&sort_by=popularity.desc&language=en-US`}
            />
          </>
        )}

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
  );
}

export default App;
