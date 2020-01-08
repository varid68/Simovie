import React from 'react'
import { View } from 'react-native'
import HomeContextContainer from './HomeContext'
import Header from './Header'
import Fragment from './Fragment'
import styles from './HomeStyles'

function index() {
  return (
    <HomeContextContainer>
      <Header />
      <View style={styles.container}>
        <Fragment />
      </View>
    </HomeContextContainer>
  )
}

index.navigationOptions = {
  header: null
}

export default index
