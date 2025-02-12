const API_KEY = "9b59b65f263810b3953ce424970745c2";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjU5YjY1ZjI2MzgxMGIzOTUzY2U0MjQ5NzA3NDVjMiIsIm5iZiI6MTczOTAxMzA2NS40MTgsInN1YiI6IjY3YTczYmM5ZGY1NWU4ZjIxM2YxMGRmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AeJ-LYI6jDDHKAaWCDDWnRgIPxQzCvgkIpiMzty1EW8";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error("Failed to fetch popular movies");
    }
    const data = await response.json();
    return data.results || [];
    console.log(data);
}


export const searchrMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}