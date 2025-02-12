import { useState, useEffect } from "react";
import { searchrMovies, getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return;
        if(loading) return;

        setLoading(true);
        try {
            const searchResult = await searchrMovies(searchQuery)
            setMovies(searchResult);
            setError(null)
        } catch(err) {
            console.log(err);
            setError("Failed to Search Movies...")
        } finally {
            setLoading(false);
        }

        setSearchQuery("");
    }

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies || []);
            } catch (err) {
                console.log(err);
                setError("Failed to Load Movies...");
                setMovies([]);
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, [])

    return (
        <>
        <div className="home">
            <form action="" onSubmit={handleSearch} className="search-form">
                <input type="text" className="search-input" placeholder="Search for Movies..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className="search-button" type="submit">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}
            
            {loading ? <div className="loading">Loading...</div> : 
            <div className="movies-grid">
                {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />
                    )}
            </div>}
        </div>
        </>
    )
}

export default Home;