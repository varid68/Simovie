import React, { createContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions/home'
import { showToast } from '../../../services/common'
import NavigationService from '../../../navigations/NavigationService'


export const CatalogContext = createContext()

export default function CatalogContextPage(props) {
  const dispatch = useDispatch()

  const [catalog, setCatalog] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { category } = props.navigation.state.params

    dispatch(actions.getMovieByCategory(category)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setCatalog(res.results)
        setLoading(false)
      } else {
        showToast(res.status_message)
      }
    })
  }, [])

  return (
    <CatalogContext.Provider value={{
      catalog,
      loading
    }}>
      {props.children}
    </CatalogContext.Provider>
  )
}
