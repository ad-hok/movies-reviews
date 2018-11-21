//api de themoviedb
const API_KEY = 'a7be040a1955fb1a1859923854564a4c';

const POSTER_MINI = 'w154,';
const POSTER_LARGE = 'original';

export const moviesQuery = (page) => {
  return `https://api.themoviedb.org/3/discover/movie&api_key=${API_KEY}&sort_by=popularity.desc&page=${page}`;
};

export const postersQuery (type, poster) = {
  const size = (type === 1)?POSTER_MINI: POSTER_LARGE;
  return `http://image.tmdb.org/t/p/${size}/${poster}`;
};

export const GENRES_QUERY = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

export const moviesByGenreQuery = (genre) => {
  return `https://api.themoviedb.org/3/discover/movie&api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=${genre}`;
};

export const moviesByTextQuery = (text) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=popularity.desc&query=${text}`;
};

export const movieQuery = (movie) => {
  return `https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}`;
};
