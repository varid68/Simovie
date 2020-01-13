import React, { createContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions/home'
import { showToast } from '../../../services/common'
import NavigationService from '../../../navigations/NavigationService'

export const HomeContext = createContext()

export default function HomeContextPage(props) {
  const dispatch = useDispatch()

  /* const [movies, setMovies] = useState({
   popular: [],
   topRated: [],
   nowPlaying: []
 }) */

  const [popular, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(actions.getPopularMovies()).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setPopular(res.results)
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getTopRatedMovies()).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setTopRated(res.results)
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getNowPlayingMovies()).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setNowPlaying(res.results)
      } else {
        showToast(res.status_message)
      }
    })
  }, [])

  const setValueSearch = (value) => setSearch(value)

  const onSearch = () => {
    if (search.length < 1) {
      showToast('tidak boleh kosong')
      return false
    }
    setSearch('')
    NavigationService.navigate('SearchScreen', { movie: search })
  }


  return (
    <HomeContext.Provider value={{
      popular,
      topRated,
      nowPlaying,
      search,
      setValueSearch,
      onSearch
    }}>
      {props.children}
    </HomeContext.Provider>
  )
}