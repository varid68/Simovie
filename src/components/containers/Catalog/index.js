import React from 'react'
import { ScrollView } from 'react-native'
import CatalogContextContainer from './CatalogContext'
import Header from './Header'
import Carousel from './Carousel'
import CardList from './CardList'
import { EBONY } from '../../../configs/styles'


function index({ navigation }) {
  return (
    <CatalogContextContainer navigation={navigation}>
      <Header navigation={navigation} />
      <ScrollView style={{ backgroundColor: EBONY, flex: 1 }}>
        <Carousel />
        <CardList />
      </ScrollView>
    </CatalogContextContainer>
  )
}

index.navigationOptions = {
  header: null
}

export default index
