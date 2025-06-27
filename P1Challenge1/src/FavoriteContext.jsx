import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (movie) => {
        const isFav = favorites.some((m) => m.id === movie.id);
        const updated = isFav
        ? favorites.filter((m) => m.id !== movie.id)
        : [...favorites, movie];

        setFavorites(updated);
    };

    const isFavorite = (id) => {
        return favorites.some((m) => m.id === id);
    };

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
        {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => useContext(FavoriteContext);