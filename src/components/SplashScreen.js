import React, { useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import NavigationService from '../navigations/NavigationService'

const SplashScreen = () => {
  useEffect(() => {
    NavigationService.reset('HomeScreen')
  }, [])

  return (
    <View>
      <StatusBar hidden />
      <Text>Ini SplashScreen</Text>
    </View>
  )
}

SplashScreen.navigationOptions = {
  header: null
}

export default SplashScreen
