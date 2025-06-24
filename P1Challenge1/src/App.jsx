import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieSection from './components/MovieSection';
import BrandSection from './components/BrandSection';
import HeroMovieContainer from "./components/HeroMovieContainer";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[#080a14] min-h-screen pt-4 pb-10">
        <HeroMovieContainer />
        <BrandSection />
        <MovieSection
          title="Trending"
          endpoint="/discover/movie?sort_by=popularity.desc"
        />
      </div>
      <Footer />
      <p>otw refactory</p>
    </>
  );
}

export default App;
