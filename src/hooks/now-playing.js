import { useState, useEffect } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export function useNowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const fetchMovies = async (movieType) => {
    const endPoint = `${API_BASE_URL}/movie/${movieType}?language=en-US&page=1`;
    try {
      const response = await fetch(endPoint, API_OPTIONS);
      const data = await response.json();
      setNowPlaying(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
    return nowPlaying;
}
