import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../services/api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchMovieById(id);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch {
        setError("Failed to fetch movie details.");
      }
    }
    load();
  }, [id]);

  if (error) return <p className="text-red-600 text-center p-4">{error}</p>;
  if (!movie) return <p className="text-center p-4">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 my-12">
      <Link to="/" className="text-indigo-600 hover:underline mb-6 inline-block">
        &larr; Back to Search
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="rounded-lg shadow-md max-w-sm"
        />
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-indigo-900">{movie.Title}</h2>
          <p className="mb-2"><strong>Year:</strong> {movie.Year}</p>
          <p className="mb-2"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="mb-2"><strong>Rated:</strong> {movie.Rated}</p>
          <p className="mb-2"><strong>Released:</strong> {movie.Released}</p>
          <p className="mb-2"><strong>Runtime:</strong> {movie.Runtime}</p>
          <p className="mb-2"><strong>Director:</strong> {movie.Director}</p>
          <p className="mb-2"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="mb-2"><strong>Plot:</strong> {movie.Plot}</p>
          <p className="mb-2"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}



