import axios from 'axios';

export const tmdbAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2VmYzRlN2U0NGEyNmE5OGZmYjU5OGE5MzZhM2NjNyIsIm5iZiI6MTc1MDMzNDYyMy4xNDEsInN1YiI6IjY4NTNmYzlmNGQzNzUzZGIxYzc5YjAyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xWrYvNLhg8mwxgTN1rpnUYiY8wG4cZ7fIe7bLPi4VXc',
  },
});
