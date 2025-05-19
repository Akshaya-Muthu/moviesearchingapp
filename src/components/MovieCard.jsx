import { Link } from "react-router-dom";

function renderStars(rating) {
  const stars = [];
  const ratingNum = Math.round(parseFloat(rating) / 2); // IMDb rating is out of 10, convert to 5 stars
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 star ${i <= ratingNum ? "text-yellow-400" : "text-gray-400"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.96c.3.92-.755 1.688-1.538 1.118L10 13.347l-3.37 2.447c-.783.57-1.838-.197-1.538-1.118l1.286-3.96a1 1 0 00-.364-1.118L3.605 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.96z" />
      </svg>
    );
  }
  return stars;
}

export default function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      className="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300"
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        className="w-full h-80 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <h3 className="text-lg font-bold truncate">{movie.Title}</h3>
        <p className="text-sm">{movie.Year}</p>
        <div className="flex items-center mt-1">{renderStars(movie.imdbRating || "0")}</div>
        <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold text-center">
          View Details
        </button>
      </div>
    </Link>
  );
}





