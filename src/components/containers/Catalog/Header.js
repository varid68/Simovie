import React from 'react'
import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import styles from './CatalogStyles'
import { EBONY, WHITE } from '../../../configs/styles'


export default function Header() {
  return (
    <SafeAreaView style={{ backgroundColor: EBONY }}>
      <StatusBar hidden={false} backgroundColor={EBONY} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconWrap}>
          <MaterialIcon
            color={WHITE}
            size={28}
            name='arrow-back' />
        </TouchableOpacity>
        <Text style={styles.title}>Now Playing</Text>
        <TouchableOpacity
          style={styles.iconWrap}>
          <MaterialIcon
            color={WHITE}
            size={25}
            name='search' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}