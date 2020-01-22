import React, { useEffect } from 'react'
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import NavigationService from '../navigations/NavigationService'
import { ITEMS_CENTER, DEEP, WHITE } from '../configs/styles'

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.reset('HomeScreen')
    }, 2000)
  }, [])

  return (
    <View style={styles.wrapper}>
      <StatusBar hidden={false} backgroundColor={DEEP} />
      <Image
        style={styles.img}
        source={require('../assets/images/splashscreen.png')} />
      <Text style={styles.simovie}>Si movie</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    ...ITEMS_CENTER,
    backgroundColor: DEEP,
    flex: 1
  },
  img: {
    resizeMode: 'contain',
    height: 300,
    width: 300
  },
  simovie: {
    fontFamily: 'Lobster-Regular',
    textAlign: 'center',
    color: WHITE,
    fontSize: 40,
    marginTop: 10
  }
})

SplashScreen.navigationOptions = {
  header: null
}

export default SplashScreen
