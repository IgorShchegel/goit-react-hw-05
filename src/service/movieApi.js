import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWJjNjg2ZGRhODhhODY1ZDBmMGYzZTYzNjY4NzU4YiIsInN1YiI6IjY2MDgzZDE0OGEwZTliMDE3YzRmNmU0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSeo8e81uAhMqmHLNk_C7jgOjhoWyWQ3l0smfQydnTs",
  },
};

export const searchMovie = async (searchQuery) => {
  const urlsearch = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`;
  const data = await axios.get(urlsearch, options);

  return data;
};

export const dayMovie = async () => {
  const urlday = "https://api.themoviedb.org/3/trending/movie/day";
  const data = await axios.get(urlday, options);

  return data;
};

export const detailsMovie = async (movieId) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
  const data = await axios.get(movieDetailsUrl, options);

  return data;
};

export const castMovie = async (movieId) => {
  const castUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const data = await axios.get(castUrl, options);

  return data;
};

export const reviewsMovie = async (movieId) => {
  const reviewsUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const data = await axios.get(reviewsUrl, options);

  return data;
};
