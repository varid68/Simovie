import React from 'react'
import { View } from 'react-native'
import HomeContextContainer, { HomeContext } from './HomeContext'
import Header from './Header'
import SliderMovie from './SliderMovie'
import styles from './HomeStyles'

function index() {
  return (
    <HomeContextContainer>
      <Header />
      <HomeContext.Consumer>
        {
          value => (
            <View style={styles.container}>
              <SliderMovie list={value.popular} title='RECOMMENDED FOR YOU' />
              <SliderMovie list={value.nowPlaying} title='NOW PLAYING' />
              <SliderMovie list={value.topRated} title='TOP RATED' />
            </View>
          )
        }
      </HomeContext.Consumer>
    </HomeContextContainer>
  )
}

index.navigationOptions = {
  header: null
}

export default index
