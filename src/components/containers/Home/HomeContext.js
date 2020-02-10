import React, { createContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions/home'
import { showToast } from '../../../services/common'
import NavigationService from '../../../navigations/NavigationService'

export const HomeContext = createContext()

export default function HomeContextPage(props) {
  const dispatch = useDispatch()

  const [popular, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(actions.getMovieByCategory('popular')).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setPopular(res.results.filter((e, i) => i < 5))
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getMovieByCategory('top_rated')).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setTopRated(res.results.filter((e, i) => i < 5))
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getMovieByCategory('now_playing')).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setNowPlaying(res.results.filter((e, i) => i < 5))
      } else {
        showToast(res.status_message)
      }
    })
  }, [])

  useEffect(() => {
    if (popular.length > 0 && topRated.length > 0 && nowPlaying.length > 0) {
      setLoading(false)
    }
  }, [popular, topRated, nowPlaying])

  const setValueSearch = (value) => setSearch(value)

  const onSearch = () => {
    if (search.length < 1) {
      showToast('tidak boleh kosong')
      return false
    }
    setSearch('')
    NavigationService.navigate('SearchScreen', { movie: search })
  }

  const openAllMovie = (category, title) => NavigationService.navigate('CatalogScreen', { category, title })


  return (
    <HomeContext.Provider value={{
      popular,
      topRated,
      nowPlaying,
      search,
      setValueSearch,
      onSearch,
      loading,
      openAllMovie
    }}>
      {props.children}
    </HomeContext.Provider>
  )
}