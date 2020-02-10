import axios from 'axios'
import { BASE_URL, TMDB_API_KEY } from '../../configs/apiConfig'

// GET DYNAMIC MOVIE
export function getMovieByCategory(category) {
  return async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movie/${category}?api_key=${TMDB_API_KEY}`, { headers: null })
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

// GET LINK VIDEO
export function getVideoLink(value) {
  return async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movie/${value}/videos?api_key=${TMDB_API_KEY}&language=en-US`, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}

// 
export function getReviewMovie(value) {
  return async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movie/${value}/reviews?api_key=${TMDB_API_KEY}&language=en-US`, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}

// 
export function getRelatedMovie(value) {
  return async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movie/${value}/similar?api_key=${TMDB_API_KEY}&language=en-US`, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}