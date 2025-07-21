import React, { useState, useEffect } from "react";
import MovieCard from "../Component/MovieCard";
import axios from "axios";

const BASEURL = import.meta.env.VITE_BASEURL;

const AllMovies = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [movies, setMovies] = useState([]);

  const getDataFromServer = async () => {
    try {
      const res = await axios.get(`${BASEURL}/movie/fetchAllMovies`, {
        withCredentials: true,
      });
      setMovies(res.data.movies); // assume server returns { movies: [...] }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (currentUser?._id) {
      getDataFromServer();
    }
  }, []);

  return (
    <div
      className="container mt-4 p-4 rounded"
      style={{
        backgroundColor: "#0f172a", // slate-900
        color: "#f1f5f9", // slate-100
        minHeight: "100vh",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
      }}
    >
      <h1 className="text-center mb-5" style={{ color: "#2dd4bf" /* teal-400 */ }}>
        All Movies
      </h1>

      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movieId={movie._id}
              title={movie.title}
              genre={movie.genre}
              director={movie.director}
              releaseYear={movie.releaseYear}
              description={movie.description}
              onDelete={getDataFromServer}
            />
          ))
        ) : (
          <p style={{ color: "#94a3b8" /* slate-400 */ }}>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
