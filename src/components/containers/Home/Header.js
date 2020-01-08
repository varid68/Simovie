import React, { useContext } from 'react'
import { View, Text, StatusBar, TextInput } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import styles from './HomeStyles'
import { BLUE } from '../../../configs/styles'
import { HomeContext } from './HomeContext'

export default function Header() {
  const value = useContext(HomeContext)

  return (
    <SafeAreaView>
      <StatusBar hidden={false} backgroundColor={BLUE} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, what do you want to watch ?</Text>
        <View style={{ position: 'relative' }}>
          <MaterialIcon
            name='search'
            style={styles.iconSearch} />
          <TextInput
            placeholder='Search'
            style={styles.searchInput} />
        </View>
      </View>
    </SafeAreaView>
  )
}