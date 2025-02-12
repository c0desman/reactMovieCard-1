import {createContext, useState, useContext, useEffect} from "react"
import Favorite from "../pages/Favorite";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storeFavs = localStorage.getItem("favorites")

        if(storeFavs) setFavorites(JSON.parse(storeFavs))
    }, [])

    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev=>[...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie=>movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie=>movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children};
    </MovieContext.Provider>
};