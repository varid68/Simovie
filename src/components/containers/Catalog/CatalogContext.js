import React, { createContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions/home'
import { showToast } from '../../../services/common'
import NavigationService from '../../../navigations/NavigationService'


export const CatalogContext = createContext()

export default function CatalogContextPage(props) {
  const [catalog, setCatalog] = useState([])

  useEffect(() => {

  }, [])

  return (
    <CatalogContext.Provider value={{
      catalog
    }}>
      {props.children}
    </CatalogContext.Provider>
  )
}
