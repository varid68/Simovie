import axios from 'axios'
import { BASE_URL, TMDB_API_KEY } from '../../configs/apiConfig'

// POPULAR
export function getPopularMovies() {
  return async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}

// TOP RATED
export function getTopRatedMovies() {
  return async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}

// NOW PLAYING
export function getNowPlayingMovies() {
  return async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1&region=ID`, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}


// DETAIL
export function getDetailMovie(id) {
  return async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}

// GET CAST
export function getCastMovie(id) {
  return async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${TMDB_API_KEY}&language=en-US`, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}

// SEARCH
export function getSearchMovie(value) {
  return async () => {
    try {
      const res = await axios.get(`${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${value}`, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}