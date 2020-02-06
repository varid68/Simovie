import React from 'react'
import { View } from 'react-native'
import CatalogContextContainer, { CatalogContext } from './CatalogContext'
import Header from './Header'
import { EBONY } from '../../../configs/styles'


function index(params) {
  return (
    <CatalogContextContainer>
      <Header />
      <View style={{ backgroundColor: EBONY, flex: 1 }}>

      </View>
    </CatalogContextContainer>
  )
}

index.navigationOptions = {
  header: null
}

export default index
