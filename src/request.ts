export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const BASE_URL = "/discover/movie?api_key=";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&watch_region=JP&language=ja-JP`,
  fetchNetflixOriginals: `${BASE_URL}${API_KEY}&with_networks=213&watch_region=JP&language=ja`,
  fetchTopRated: `${BASE_URL}${API_KEY}&language=ja-JP`,
  fetchActionMovies: `${BASE_URL}${API_KEY}&with_genres=28&watch_region=JP&language=ja-JP`,
  fetchMusicMovies: `${BASE_URL}${API_KEY}&with_genres=10402&watch_region=JP&language=ja-JP`,
  fetchFantasyMovies: `${BASE_URL}${API_KEY}&with_genres=14&watch_region=JP&language=ja-JP`,
  fetchRomanceMovies: `${BASE_URL}${API_KEY}&with_genres=10749&watch_region=JP&language=ja-JP`,
  fetchDocumentMovies: `${BASE_URL}${API_KEY}&with_genres=99&watch_region=JP&language=ja-JP`,
  fetchMovieVideos: (movieId: string) =>
    `/movie/${movieId}/videos?api_key=${API_KEY}`,
};
