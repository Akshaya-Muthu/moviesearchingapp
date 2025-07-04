import { useState, useEffect } from "react";
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import TypeFilter from "../components/TypeFilter";

export default function SearchPage() {
  const [query, setQuery] = useState("Avengers");
  const [type, setType] = useState("all");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchMovies(query, page, type);
        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalResults(parseInt(data.totalResults));
          setError(null);
        } else {
          setMovies([]);
          setTotalResults(0);
          setError(data.Error);
        }
      } catch (err) {
        setError("Failed to fetch movies.");
      }
    }
    load();
  }, [query, page, type]);

  return (
    <div
      className="relative overflow-hidden min-h-screen bg-fixed bg-center bg-cover text-white p-8 select-none"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-700/60 to-teal-600/50 z-0"></div>

      {/* Floating animated bubbles */}
      <div className="bubbles">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center animate-fadeIn">
        <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg">🎬 Movie Explorer</h1>

        <SearchBar setQuery={setQuery} setPage={setPage} />
        <TypeFilter setType={setType} setPage={setPage} />

        {error && (
          <p className="text-red-400 text-center mt-6 font-semibold text-lg">{error}</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-8">
          {page > 1 && (
            <button
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold transition"
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
          )}
          {page * 10 < totalResults && (
            <button
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-white font-semibold transition"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* Bubbles animation styles */}
      <style>{`
        .bubbles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0; left: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }
        .bubble {
          position: absolute;
          bottom: -150px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: rise 20s linear infinite;
          filter: blur(1.2px);
        }
        .bubble:nth-child(odd) {
          width: 40px;
          height: 40px;
          left: 10%;
          animation-duration: 22s;
        }
        .bubble:nth-child(even) {
          width: 60px;
          height: 60px;
          left: 70%;
          animation-duration: 18s;
          animation-delay: 5s;
        }
        .bubble:nth-child(3) {
          width: 30px;
          height: 30px;
          left: 40%;
          animation-duration: 25s;
          animation-delay: 2s;
        }
        .bubble:nth-child(5) {
          width: 50px;
          height: 50px;
          left: 80%;
          animation-duration: 21s;
          animation-delay: 7s;
        }
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(-110vh) scale(1.2);
            opacity: 0;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
}
