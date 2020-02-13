import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import CatalogContextContainer, { CatalogContext } from './CatalogContext'
import Header from './Header'
import Carousel from './Carousel'
import CardList from './CardList'
import { EBONY, ITEMS_CENTER, RED, WHITE } from '../../../configs/styles'
import { Spinner } from 'native-base'


function index({ navigation }) {
  return (
    <CatalogContextContainer navigation={navigation}>
      <Header navigation={navigation} />
      <CatalogContext.Consumer>
        {
          value => (
            value.loading ?
              <View style={{ ...ITEMS_CENTER, flex: 1, backgroundColor: EBONY }}>
                <Spinner color={RED} />
                <Text style={{ color: WHITE }}>Please wait, loading movie</Text>
              </View>
              :
              <ScrollView style={{ backgroundColor: EBONY, flex: 1 }}>
                <Carousel />
                <CardList />
              </ScrollView>
          )
        }
      </CatalogContext.Consumer>
    </CatalogContextContainer>
  )
}

index.navigationOptions = {
  header: null
}

export default index
