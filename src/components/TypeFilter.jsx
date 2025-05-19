export default function TypeFilter({ setType, setPage }) {
  return (
    <div className="flex justify-center mt-5">
      <select
        className="border border-gray-300 p-2 rounded-lg shadow"
        onChange={(e) => {
          setType(e.target.value);
          setPage(1);
        }}
      >
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
    </div>
  );
}