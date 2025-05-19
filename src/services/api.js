const API_KEY = "6f7780ab";

export async function fetchMovies(query, page = 1, type = "all") {
  let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`;
  if (type !== "all") url += `&type=${type}`;
  const res = await fetch(url);
  return await res.json();
}

export async function fetchMovieById(id) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;
  const res = await fetch(url);
  return await res.json();
}

