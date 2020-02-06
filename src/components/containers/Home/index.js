import React from 'react'
import { ScrollView } from 'react-native'
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
            <ScrollView style={styles.container}>
              <SliderMovie list={value.popular} title='RECOMMENDED FOR YOU' />
              <SliderMovie list={value.nowPlaying} title='NOW PLAYING' />
              <SliderMovie list={value.topRated} title='TOP RATED' />
            </ScrollView>
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
