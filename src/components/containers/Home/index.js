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
              <SliderMovie
                category='popular'
                list={value.popular}
                title='RECOMMENDED FOR YOU' />
              <SliderMovie
                category='now_playing'
                list={value.nowPlaying}
                title='NOW PLAYING' />
              <SliderMovie
                category='top_rated'
                list={value.topRated}
                title='TOP RATED' />
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
