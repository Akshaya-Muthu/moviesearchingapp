import { useState } from "react";

export default function SearchBar({ setQuery, setPage }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      setQuery(input.trim());
      setPage(1);
    }
  };

  return (
    <div className="flex justify-center my-8">
      <input
        type="text"
        placeholder="Search for movies, series..."
        className="w-3/4 md:w-1/2 p-4 rounded-l-lg shadow-lg border-0 focus:outline-none text-gray-700"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="bg-indigo-600 text-white px-6 rounded-r-lg hover:bg-indigo-700 shadow-lg transition"
      >
        Search
      </button>
    </div>
  );
}

