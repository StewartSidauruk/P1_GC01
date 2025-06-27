import { useFavorite } from "./FavoriteContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieSectionFavorites from "./components/MovieSectionFavorites";

export default function Favorite() {
const { favorites } = useFavorite();

    return (
        <>
            <Navbar />
            <div className="bg-[#080a14] min-h-screen pt-6 pb-12">
                {favorites.length > 0 ? (
                <MovieSectionFavorites title="Your Favorite Movies" movies={favorites} />
                ) : (
                <div className="text-center text-white mt-20 text-lg">
                    You haven't added any favorites yet.
                </div>
                )}
            </div>
            <Footer />
        </>
    );
}