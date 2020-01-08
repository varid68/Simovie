import React, { createContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions/home'
import { showToast } from '../../../services/common'

export const HomeContext = createContext()

export default function HomeContextPage(props) {
  const dispatch = useDispatch()

  const [movies, setMovies] = useState({
    popular: [],
    topRated: [],
    nowPlaying: []
  })

  useEffect(() => {
    dispatch(actions.getPopularMovies()).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setMovies({ ...movies.popular, popular: res.results })
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getTopRatedMovies()).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setMovies({ ...movies.topRated, topRated: res.results })
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getNowPlayingMovies()).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setMovies({ ...movies.nowPlaying, nowPlaying: res.results })
      } else {
        showToast(res.status_message)
      }
    })
  }, [])

  return (
    <HomeContext.Provider value={{
      movies
    }}>
      {props.children}
    </HomeContext.Provider>
  )
}